import styled from "styled-components";

type OmitPropsType = "type";

const StyledInputDate = styled.input`
	font-size: 1rem;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: rgba(0, 0, 0, 0.01);
`;

export const DatePicker: React.FC<
	Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitPropsType>
> = (props) => {
	return <StyledInputDate type="date" {...props} />;
};
