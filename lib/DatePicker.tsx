import styled from "styled-components";

type OmitPropsType = "type";

const StyledInputDate = styled.input`
	font-size: 1rem;
`;

export const DatePicker: React.FC<
	Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitPropsType>
> = (props) => {
	return <StyledInputDate type="date" {...props} />;
};
