import styled from 'styled-components';

export const StyledToggleMenu = styled.button`
	appearance: none;
	background-color: transparent;
	cursor: pointer;
	height: 40px;
	position: relative;
	width: 45px;

	& > span {
		background: ${({ theme }) => theme.colors.basic[100]};
		display: block;
		height: 3px;
		opacity: 1;
		position: absolute;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;
		width: 50%;
	}

	& span:nth-child(even) {
		border-radius: 0 3px 3px 0;
		left: 50%;
	}

	& span:nth-child(odd) {
		border-radius: 3px 0 0 3px;
		left: 0px;
	}

	& span:nth-child(1),
	& span:nth-child(2) {
		top: 8px;
	}

	& span:nth-child(3),
	& span:nth-child(4) {
		top: 18px;
	}

	& span:nth-child(5),
	& span:nth-child(6) {
		top: 28px;
	}

	&.open-menu span:nth-child(1),
	&.open-menu span:nth-child(6) {
		transform: rotate(45deg);
	}

	&.open-menu span:nth-child(2),
	&.open-menu span:nth-child(5) {
		transform: rotate(-45deg);
	}

	&.open-menu span:nth-child(1) {
		left: 3px;
		top: 10px;
	}

	&.open-menu span:nth-child(2) {
		left: calc(50% - 3px);
		top: 10px;
	}

	&.open-menu span:nth-child(3) {
		left: -60%;
		opacity: 0;
		visibility: hidden;
	}

	&.open-menu span:nth-child(4) {
		left: 110%;
		opacity: 0;
		visibility: hidden;
	}

	&.open-menu span:nth-child(5) {
		left: 4px;
		top: 26px;
	}

	&.open-menu span:nth-child(6) {
		left: calc(50% - 4px);
		top: 26px;
	}
`;
