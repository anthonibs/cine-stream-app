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
	display: flex;
	align-items: center;
	border-radius: 20px;
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	width: 250px;
`;

export const Control = styled.label`
	display: flex;
	align-items: center;
	padding: .125rem;
	border-radius: 20px;
	width: 100%;
	position: relative;
	right: calc(-100% + 40px);
	overflow: hidden;
	transition: animation .3s ease-out;

	&.enable {
		animation: ${showFieldSearch} 1500ms forwards;
		background-color: ${({ theme }) => theme.colors.mainHover};
	}
`;

export const ButtonSearch = styled.button`
	align-items: center;
	display: flex;
	height: 30px;
	border-radius: 20px;
	appearance: none;
	width: 40px;
	justify-content: center;
	background-color: transparent;

	#icon-search {
		pointer-events: none;
		font-size: ${convertPixelsToREM(20)};
		color: ${({ theme }) => theme.font.color[100]};
	}
`;

export const InputSearch = styled.input`
	height: 100%;
	width: 100%;
	background-color: transparent;
	appearance: none;
	border: none;
	outline: none;
	color: ${({ theme }) => theme.font.color[100]};
	visibility: hidden;
	padding: 0 2rem 0 .4rem;
	font-size: ${convertPixelsToREM(14)};

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
		visibility: visible;
		display: inline-block;
	}
`;


export const ButtonCancelSearch = styled.button`
	background-color: transparent;
	border-radius: ${convertPixelsToREM(12)};
	visibility: hidden;
	display: flex;
	position: absolute;
	right: .5rem;

	&>#icon-clean {
		pointer-events: none;
		font-size: ${convertPixelsToREM(18)};
		color: ${({theme}) => theme.colors.basic[200]};
	}

	&.enable-button {
		visibility: visible;
	}
`;