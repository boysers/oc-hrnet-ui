import styled from "styled-components";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

const StyledTextField = styled.input`
	font-size: 1rem;
	padding: 0.5rem 0.75rem;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: rgba(0, 0, 0, 0.01);
`;

export const TextField: React.FC<TextFieldProps> = (props) => {
	return <StyledTextField type="text" {...props} />;
};
