import styled, { keyframes } from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

const showFieldSearch = keyframes`
	to {
		right: 0%;
		opacity: 1;
	}
	from {
		opacity: .5;
	}
`;

export const Container = styled.fieldset`
	align-items: center;
	border-radius: 20px;
	border-radius: 20px;
	display: flex;
	overflow: hidden;
	position: relative;
	width: 250px;
`;

export const Control = styled.label`
	align-items: center;
	border-radius: 20px;
	display: flex;
	overflow: hidden;
	padding: .125rem;
	position: relative;
	right: calc(-100% + 40px);
	transition: animation .3s ease-out;
	width: 100%;

	&.enable {
		animation: ${showFieldSearch} 1500ms forwards;
		background-color: ${({ theme }) => theme.colors.mainHover};
	}
`;

export const ButtonSearch = styled.button`
	appearance: none;
	align-items: center;
	border-radius: 20px;
	background-color: transparent;
	display: flex;
	height: 24px;
	justify-content: center;
	width: 40px;

	#icon-search {
		color: ${({ theme }) => theme.font.color[100]};
		font-size: ${convertPixelsToREM(16)};
		pointer-events: none;
	}

	@media (min-width: 1200px) {
		height: 30px;

		#icon-search {
			font-size: ${convertPixelsToREM(20)};
		}
	}
`;

export const InputSearch = styled.input`
	appearance: none;
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.font.color[100]};
	font-size: ${convertPixelsToREM(12)};
	height: 100%;
	outline: none;
	padding: 0 2rem 0 .4rem;
	visibility: hidden;
	width: 100%;

	@media (min-width: 1200px) {
		font-size: ${convertPixelsToREM(14)};
	}

	&::placeholder {
		color: ${({ theme }) => theme.font.color[200]};
	}

	&::-webkit-search-cancel-button {
		-webkit-appearance: none;
		display: none;
	}

	&:focus-within {
		display: none;
	}

	&.active-input {
		display: inline-block;
		visibility: visible;
	}
`;


export const ButtonCancelSearch = styled.button`
	background-color: transparent;
	border-radius: ${convertPixelsToREM(12)};
	display: flex;
	position: absolute;
	right: .5rem;
	visibility: hidden;

	&>#icon-clean {
		color: ${({theme}) => theme.colors.basic[200]};
		font-size: ${convertPixelsToREM(18)};
		pointer-events: none;
	}

	&.enable-button {
		visibility: visible;
	}
`;