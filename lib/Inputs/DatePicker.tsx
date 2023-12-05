import styled from "styled-components";

type OmitPropsType = "type";

const StyledInputDate = styled.input`
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: rgba(0, 0, 0, 0.01);
`;

/**
 * `DatePicker` est un composant React qui encapsule un champ de saisie de type date.
 *
 * Props:
 *  - Accepte toutes les props d'un élément input HTML standard, sauf `type`.
 *
 * @example
 * const [selectedDate, setSelectedDate] = useState(null);
 *
 * const handleDateChange = (event) => {
 *   setSelectedDate(event.target.value);
 * };
 *
 * <DatePicker value={selectedDate} onChange={handleDateChange} />;
 *
 * @see https://github.com/boysers/oc-hrnet-ui#datepicker
 */
export const DatePicker: React.FC<
	Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitPropsType>
> = (props) => {
	return <StyledInputDate type="date" {...props} />;
};
