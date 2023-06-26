import styled from 'styled-components';
import { convertPixelsToREM } from 'utils';

export const Container = styled.header`
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.3) 0px 6px 6px;
	display: flex;
	justify-content: space-between;
	height: 90px;
	padding: 0 1.6rem;
	position: fixed;
	width: 100%;
	z-index: 999;

	@media (min-width: 375px) {
		background-color: rgba(0, 10, 22, 1);
	}

	@media (min-width: 968px) {
		background: ${({ theme }) => theme.header};
	}

	@media (min-width: 1200px) {
		padding: 0 4rem;
	}
`;

export const NavigationGroup = styled.div`
	align-items: center;
	display: flex;

	> a {
		outline: none;
	}

	@media (min-width: 375px) {
		gap: 1.5rem;
	}

	@media (min-width: 968px) {
		gap: 2rem;
	}

	@media (min-width: 1200px) {
		gap: 4rem;
	}
`;

export const Wrapper = styled.div`
	align-items: center;
	display: flex;
	gap: 1rem;
	height: 100%;

	.icons-configuration {
		color: ${({ theme }) => theme.colors.basic[100]};
		font-size: ${convertPixelsToREM(18)};
	}

	@media (min-width: 1200px) {
		gap: 2rem;

		.icons-configuration {
			font-size: ${convertPixelsToREM(24)};
		}
	}
`;

export const Profile = styled.figure`
	border-radius: 30px;
	height: 40px;
	outline: 2px solid ${({ theme }) => theme.colors.basic[100]};
	width: 40px;

	@media (min-width: 375px) {
		margin-bottom: 0.8rem;

		&::before {
			content: '';
			background-color: #3bff37;
			border-radius: 10px;
			border: 2px solid ${({ theme }) => theme.colors.basic[100]};
			height: 10px;
			left: 54px;
			position: absolute;
			top: 50px;
			width: 10px;
		}
	}

	@media (min-width: 968px) {
		height: 50px;
		margin-bottom: 0;
		outline-width: 3px;
		width: 50px;

		&::before {
			top: 56px;
			height: 10px;
			left: 36px;
			width: 10px;
		}
	}

	@media (min-width: 1200px) {
		height: 60px;
		width: 60px;

		&::before {
			top: 60px;
			height: 12px;
			left: 41px;
			width: 12px;
		}
	}
`;

export const ImageProfile = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 30px;
	object-fit: cover;
`;

export const ToggleNotification = styled.button`
	appearance: none;
	background-color: transparent;
	outline: none;
	cursor: pointer;
	border-radius: 50%;
	width: 34px;
	height: 34px;
	position: relative;

	&:hover,
	&:focus {
		box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
		filter: drop-shadow(0 0 0.45rem ${({ theme }) => theme.colors.main});
	}
`;

export const AmountNotification = styled.span`
	background: #00b4db;
	background: -webkit-linear-gradient(to bottom, #0083b0, #00b4db);
	color: ${({ theme }) => theme.colors.basic[100]};
	position: absolute;

	@media (min-width: 968px) {
		border-radius: ${convertPixelsToREM(9)};
		font-size: ${convertPixelsToREM(10)};
		height: ${convertPixelsToREM(15)};
		line-height: ${convertPixelsToREM(18)};
		right: -4px;
		top: -7px;
		width: ${convertPixelsToREM(15)};
	}

	@media (min-width: 1200px) {
		font-size: ${convertPixelsToREM(11)};
		height: ${convertPixelsToREM(18)};
		right: -6px;
		top: -6px;
		width: ${convertPixelsToREM(18)};
	}
`;

export const Settings = styled.div`
	align-items: center;
	display: flex;
	height: 100%;
	position: relative;

	& > .menu-settings {
		border-radius: 0.325rem;
		background: ${({ theme }) => theme.body};
		box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 6px -2px, rgba(0, 0, 0, 0.5) 0px 5px 7px -3px;
		height: fit-content;
		min-height: 6rem;
		opacity: 0;
		position: absolute;
		padding: 0.825rem;
		right: 10px;
		top: 83px;
		visibility: hidden;
		width: 11rem;
		z-index: 100;

		& > a {
			color: ${({ theme }) => theme.colors.basic[100]};
			display: block;
			font-weight: ${({ theme }) => theme.font.weight[200]};
			margin-bottom: 0.2rem;
		}
	}

	&:hover > .menu-settings {
		opacity: 1;
		transition: opacity 0.5s ease-in-out;
		visibility: visible;
	}
`;

// Início de Estilos Mobile
interface IMenuMobile {
	open: boolean;
}

export const ContainerMenu = styled.div<IMenuMobile>`
	position: fixed;
	top: 90px;
	left: 0px;
	z-index: 1200;
	width: 100%;
	height: 100%;
	visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
`;

export const BackgroundModal = styled.div`
	position: absolute;
	width: 100%;
	background-color: rgba(0, 10, 22, 0.5);
	height: 100%;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.15s ease;
	cursor: pointer;

	&.active-menu {
		opacity: 1;
		visibility: visible;
	}
`;

export const MenuNavigate = styled.div`
	position: absolute;
	background-color: rgb(0, 10, 22);
	height: 100%;
	width: 250px;
	left: -0px;
	top: 0;
	z-index: 9999;
	transform: translateX(-250px);
	visibility: hidden;
	transition: transform 0.15s cubic-bezier(0.5, 0, 0.1, 1);

	&.active-navigate-menu {
		left: 0%;
		transform: translateX(0px);
		visibility: visible;
	}
`;

export const ContainerProfile = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.basic[200]};
	padding: 1.3rem 1.6rem;

	& > a {
		display: block;
		color: ${({ theme }) => theme.colors.basic[100]};
		font-weight: 600;
		font-size: 0.775rem;
		padding: 0.2rem;
	}
`;
