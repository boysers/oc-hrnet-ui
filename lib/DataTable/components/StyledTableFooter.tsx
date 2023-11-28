import styled from "styled-components";

export const StyledTableFooter = styled.tfoot`
	td {
		div {
			display: flex;
			justify-content: space-between;
			align-items: baseline;

			p {
				margin: 0;
				padding-top: 12px;
			}

			.pagination-wrapper {
				display: flex;
				gap: 0.3rem;
			}

			button {
				border: none;
				font-size: 0.9rem;
				padding: 8px 16px;
				cursor: pointer;
				border-radius: 6px;

				&:disabled {
					cursor: not-allowed;
				}

				&[data-active="true"] {
					background-color: rgba(0, 0, 0, 0.45);
					color: #fff;
				}

				&:hover:not(&:disabled) {
					background-color: rgba(0, 0, 0, 0.4);
					color: #fff;
				}
			}
		}
	}
`;
