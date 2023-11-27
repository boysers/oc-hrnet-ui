import styled from "styled-components";

type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
	legend?: React.ReactNode;
};

const StyledFieldset = styled.fieldset`
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.25);

	legend {
		font-size: 1rem;
	}
`;

export const Fieldset: React.FC<FieldsetProps> = (props) => {
	const { legend, children, ...rest } = props;
	return (
		<StyledFieldset {...rest}>
			{legend ? <legend>{legend}</legend> : null}
			{children}
		</StyledFieldset>
	);
};
