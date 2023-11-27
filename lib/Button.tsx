import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
	cursor: pointer;
	font-size: 1rem;
	padding: 0.5rem 0.75rem;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.2);

	&:hover:not(&:disabled) {
		background-color: rgba(0, 0, 0, 0.08);
	}

	&:disabled {
		cursor: not-allowed;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}
`;

export const Button: React.FC<ButtonProps> = (props) => {
	return <StyledButton {...props} />;
};
