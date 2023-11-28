import styled from "styled-components";

export const StyledTable = styled.table`
	border-spacing: 0;

	.sorting {
		background-color: rgba(0, 0, 0, 0.02);
	}

	thead {
		font-weight: 700;

		td {
			border-bottom: 1px solid rgba(0, 0, 0, 0.75);
			text-align: center;
			padding: 10px 18px;
		}
	}

	tbody {
		tr {
			td {
				padding: 8px 10px;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			}

			&:nth-child(2n -1) {
				background-color: #f9f9f9;
			}

			&:last-child {
				td {
					border-bottom: 1px solid rgba(0, 0, 0, 0.75);
				}
			}

			&:hover {
				background-color: rgba(0, 0, 0, 0.05);
			}
		}
	}
`;
