import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CloseIcon } from "./Icon";

type ModalProps = PropsWithChildren<{ isOpen: boolean; onClose: () => void }>;

const StyledModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.75);
	width: 100%;
	height: 100%;
	z-index: 100;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledClose = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;
`;

const StyledContainer = styled.div`
	position: relative;
	z-index: 101;
	display: inline-block;
`;

const WrapperModal = styled.div`
	min-width: 440px;
	background-color: #ffffff;
	border-radius: 8px;
	padding: 15px 30px;
	position: relative;

	.close-modal {
		position: absolute;
		top: -15px;
		right: -15px;
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
`;

/**
 * `Modal` est un composant React pour afficher une fenêtre modale.
 * Props:
 *  - `isOpen`: Booléen qui détermine si le modal est ouvert ou fermé.
 *  - `onClose`: Fonction appelée pour fermer le modal.
 *  - `children`: Éléments enfants à afficher dans la modale.
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false);
 *
 * const handleToggleModal = () => {
 *   setIsOpen((prev) => !prev);
 * };
 *
 * <button onClick={handleToggleModal}>Ouvrir la modal</button>
 * <Modal isOpen={isOpen} onClose={handleToggleModal}>
 *   // Contenu de la modal
 * </Modal>
 *
 * @see [Lien vers la documentation](https://github.com/boysers/oc-hrnet-ui#modal)
 */
export const Modal: React.FC<ModalProps> = (props) => {
	const { isOpen, onClose, children } = props;

	useEffect(() => {
		const body = document.body;

		if (isOpen) {
			body.style.overflow = "hidden";
			return;
		}

		body.style.overflow = "";

		return () => {
			body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;
	return createPortal(
		<StyledModal>
			<StyledClose onClick={onClose} />
			<StyledContainer>
				<WrapperModal>
					<div className="close-modal" onClick={onClose}>
						<CloseIcon circle />
					</div>
					{children}
				</WrapperModal>
			</StyledContainer>
		</StyledModal>,
		document.body
	);
};
