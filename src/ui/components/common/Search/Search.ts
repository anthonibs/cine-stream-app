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

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;


export const StyledContainer = styled.div`
	position: relative;
	width: 250px;
`;

export const StyledWrapper = styled.fieldset`
	border-radius: 20px;
	overflow: hidden;
`;


export const StyledLabel = styled.label`
	align-items: center;
	border-radius: 20px;
	display: flex;
	overflow: hidden;
	padding: .125rem;
	position: relative;
	right: calc(-100% + 35px);
	transition: animation .3s ease-out;
	width: 100%;

	&.enable {
		animation: ${showFieldSearch} 1500ms forwards;
		background-color: ${({ theme }) => theme.colors.input[100]};
	}
`;


export const StyledButtonSearch = styled.button`
	appearance: none;
	align-items: center;
	border-radius: 20px;
	background-color: transparent;
	display: flex;
	justify-content: center;
	outline: none;
	padding: .3rem;

	&:hover, &:focus {
		box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
		filter: drop-shadow(0 0 .45rem  ${({ theme }) => theme.colors.main});
	}

	& > #icon-search {
		color: ${({ theme }) => theme.colors.basic[100]};
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


export const StyledInputSearch = styled.input`
	appearance: none;
	background-color: transparent;
	border: none;
	color: ${({ theme }) => theme.font.color[200]};
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
		color: ${({ theme }) => theme.font.color[100]};
	}

	&::-webkit-search-cancel-button {
		display: none;
		-webkit-appearance: none;
	}

	&:focus-within {
		display: none;
	}

	&.active-input {
		display: inline-block;
		visibility: visible;
	}
`;


export const StyledButtonCancel = styled.button`
	background-color: transparent;
	border-radius: ${convertPixelsToREM(12)};
	display: flex;
	position: absolute;
	right: .5rem;
	visibility: hidden;

	& > #icon-clean {
		color: ${({ theme }) => theme.colors.basic[100]};
		font-size: ${convertPixelsToREM(18)};
		pointer-events: none;
	}

	&.enable-button {
		visibility: visible;
	}
`;


export const StyledContainerSearch = styled.div`
	border-radius: .525rem;
	background-color: ${({ theme }) => theme.body};
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
	height: 350px;
	position: absolute;
	padding: .625rem 0 .625rem .625rem;
	right: 0px;
	top: 50px;
	visibility: hidden;
	width: 600px;
	opacity: 0;
	z-index: -1;

	&.open-search-list {
		visibility: visible;
		animation: ${fadeIn} .6s forwards;
	}
`;


export const StyledOverlay = styled.div`
	background-color: rgba(0, 0, 0, .3);
	height: 100%;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: -1;
`;