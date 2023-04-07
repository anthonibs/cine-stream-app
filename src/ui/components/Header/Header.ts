import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

export const Container = styled.header`
	align-items: center;
	height: 90px;
	position: fixed;
	display: flex;
	justify-content: space-between;
	width: 100%;
	z-index: 999;
	padding: 0 1.6rem;

	box-shadow: rgba(0, 0, 0, .2) 0px 10px 20px, rgba(0, 0, 0, .3) 0px 6px 6px;

	@media (min-width: 375px) {
		background-color: rgba(0, 10, 22, 1);
	}

	@media (min-width: 968px) {
		background: linear-gradient(93deg, rgba(0, 10, 22, 0.88) 7%, rgba(0, 119, 167, 0.78) 108.5%);
	}


	@media (min-width: 1200px) {
		padding: 0 4rem;
	}
`;


export const NavigationGroup = styled.div`
	align-items: center;
	display: flex;

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


export const ConfigurationGroup = styled.div`
	align-items: center;
	display: flex;
	gap: 1rem;

	.icons-configuration {
		color: ${({ theme }) => theme.font.color[100]};
		font-size: ${convertPixelsToREM(18)};
	}

	@media (min-width: 1200px) {
		gap: 2rem;

		.icons-configuration {
			font-size: ${convertPixelsToREM(24)};
		}
	}
`;


export const FormSearch = styled.form`
`;


export const UserProfile = styled.figure`
	width: 40px;
	height: 40px;
	outline: 2px solid white;
	position: relative;
	border-radius: 30px;

	@media (min-width: 375px) {
		margin-bottom: .8rem;

		&::before {
			content: '';
			position: absolute;
			height: 6px;
			width: 6px;
			background-color: #3BFF37;
			border-radius: 10px;
			bottom: -2px;
			left: 28px;
			border:  2px solid white;
		}
	}

	@media (min-width: 968px) {
		width: 50px;
		height: 50px;
		outline: 3px solid white;
		margin-bottom: 0;

		&::before {
			height: 10px;
			width: 10px;
			bottom: -3px;
			left: 34px;
		}
	}

	@media (min-width: 1200px) {
		width: 60px;
		height: 60px;

		&::before {
			height: 12px;
			width: 12px;
			bottom: -3px;
			left: 41px;
		}
	}
`;


export const SelectedLanguage = styled.select`
	padding: .35em;
	cursor: pointer;
	border-radius: .1rem;
	background-color: transparent;
	font-size: 0.775rem;
	color: ${({ theme }) => theme.colors.basic[100]};
	box-shadow: rgba(0, 180, 219, .23) 0px 2px 34px;

	& > option {
		background-color: ${({ theme }) => theme.body};
	}

	@media (min-width: 968px) {
		padding: .35em;
		cursor: pointer;
		border-radius: .1rem;
		background-color: transparent;
		font-size: 0.775rem;
		color: ${({ theme }) => theme.colors.basic[100]};
		box-shadow: rgba(0, 180, 219, .23) 0px 2px 34px;

		& > option {
			background-color: ${({ theme }) => theme.body};
		}
	}

	@media (min-width: 1200px) {
		padding: .35em;
		cursor: pointer;
		border-radius: .1rem;
		background-color: transparent;
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.basic[100]};
		box-shadow: rgba(0, 180, 219, .23) 0px 2px 34px;

		& > option {
			background-color: ${({ theme }) => theme.body};
		}
	}
`;


export const ProfileImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 30px;
	object-fit: cover;
`;


export const NotificationButton = styled.button`
	appearance: none;
	background-color: transparent;
	cursor: pointer;
	position: relative;
`;


export const CumulativeNotification = styled.span`
	background: #00B4DB;
	background: -webkit-linear-gradient(to bottom, #0083B0, #00B4DB);
	color: ${({ theme }) => theme.font.color[100]};
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

interface IMenuMobile {
	open: boolean;
}

// Início de Estilos Mobile
export const MenuMobile = styled.div<IMenuMobile>`
	position: fixed;
	top: 90px;
	left: 0px;
	z-index: 1200;
	width: 100%;
	height: 100%;
	visibility: ${({open}) => open ? 'visible' : 'hidden'};
`;

export const MenuMobileBackground = styled.div`
	position: absolute;
	width: 100%;
	background-color: rgba(0, 10, 22, .5);
	height: 100%;
	opacity: 0;
	visibility: hidden;
	transition: opacity .15s ease;
	cursor: pointer;

	&.active-menu {
		opacity: 1;
		visibility: visible;
	}
`;

export const NavigateMenu = styled.div`
	position: absolute;
	background-color: rgb(0, 10, 22);
	height: 100%;
	width: 250px;
	left: -0px;
	top: 0;
	z-index: 9999;
	transform: translateX(-250px);
	visibility: hidden;
	transition: transform .15s cubic-bezier(.5,0,.1,1);

	&.active-navigate-menu {
		left: 0%;
		transform: translateX(0px);
		visibility: visible;
	}
`;

export const ControlProfile = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.basic[200]};
	padding: 1.3rem 1.6rem;

	& > a {
		display: block;
		color: ${({theme}) => theme.colors.basic[100]};
		font-weight: 600;
		font-size: .775rem;
		padding: .2rem;
	}
`;
