import styled from "styled-components";

export const StyledController = styled.div`
	display: flex;
	justify-content: space-between;

	p {
		margin: 12px 0;
	}

	.field-research {
		position: relative;

		input {
			font-size: 0.9rem;
			padding: 0.2rem;
			padding-right: 28px;
			border-radius: 4px;
			border: 1px solid rgba(0, 0, 0, 0.2);
			background-color: rgba(0, 0, 0, 0.01);
		}

		.remove-research-datatable {
			position: absolute;
			top: 0;
			right: 0;
			cursor: pointer;

			svg {
				height: 24px;
			}
		}
	}
`;
