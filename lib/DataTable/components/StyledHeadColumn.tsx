import styled from "styled-components";

export const StyledHeadColumn = styled.td`
	cursor: pointer;
	user-select: none;
	position: relative;

	svg {
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}
`;
