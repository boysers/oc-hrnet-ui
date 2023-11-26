import { ChangeEvent } from "react";
import styled from "styled-components";

type SelectMenuProps = {
	name: string;
	id: string;
	options: Array<Option>;
	onChange?: OnChange;
	defaultValue?: string;
};

type Option = { value: string; label: string };

type OnChange = (event: ChangeEvent<HTMLSelectElement>) => void;

const StyledSelect = styled.select`
	min-width: 196px;
	font-size: 16px;
	padding: 6px 16px;
	background-color: rgba(0, 0, 0, 0.04);
	cursor: pointer;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.2);

	option {
		background-color: rgba(255, 255, 255, 1);
	}
`;

export const SelectMenu: React.FC<SelectMenuProps> = (props) => {
	const { name, id, options, onChange, defaultValue } = props;
	return (
		<StyledSelect
			name={name}
			id={id}
			onChange={onChange}
			defaultValue={defaultValue}
		>
			{options.map(({ value, label }) => (
				<option key={value} value={value}>
					{label}
				</option>
			))}
		</StyledSelect>
	);
};
