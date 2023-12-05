import { SelectHTMLAttributes } from "react";
import styled from "styled-components";

type SelectMenuProps = SelectHTMLAttributes<HTMLSelectElement> & {
	options: Array<TOption>;
};

type TOption = { value: string; label: string };

const StyledSelect = styled.select`
	font-size: 1rem;
	padding: 0.5rem 1rem;
	background-color: rgba(0, 0, 0, 0.04);
	cursor: pointer;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.2);

	option {
		background-color: rgba(255, 255, 255, 1);
	}
`;

/**
 * `SelectMenu` est un composant React pour un menu déroulant.
 * Props:
 *  - `options`: Tableau d'objets avec `value` et `label` pour chaque option.
 *  - Inclut toutes les props standard d'un élément HTML <select>.
 *
 * @example
 * const [selectedOption, setSelectedOption] = useState(null);
 *
 * const handleOptionChange = (event) => {
 *   setSelectedOption(event.target.value);
 * };
 *
 * const options = [
 *   { value: 'option1', label: 'Option 1' },
 *   { value: 'option2', label: 'Option 2' },
 *   // ...autres options
 * ];
 *
 * <SelectMenu options={options} value={selectedOption} onChange={handleOptionChange} />;
 *
 * @see https://github.com/boysers/oc-hrnet-ui#selectmenu
 */
export const SelectMenu: React.FC<SelectMenuProps> = (props) => {
	const { options, ...rest } = props;

	return (
		<StyledSelect {...rest}>
			{options.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</StyledSelect>
	);
};
