import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

export const Container = styled.header`
	height: 90px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	z-index: 999;
	padding: 0 4rem;
	background-color: rgba(0, 119, 167, .85);
	background: linear-gradient(93deg, rgba(0, 10, 22, 0.88) 7%, rgba(0, 119, 167, 0.78) 108.5%);
	box-shadow: rgba(0, 0, 0, .2) 0px 10px 20px, rgba(0, 0, 0, .25) 0px 6px 6px;
`;

export const NavigationGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;
`;

export const ConfigurationGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	.icons-configuration {
		font-size: ${convertPixelsToREM(24)};
		color: ${({ theme }) => theme.font.color[100]}
	}
`;


export const FormSearch = styled.form`
`;

export const UserProfile = styled.figure`
	width: 60px;
	height: 60px;
	outline: 3px solid white;
	position: relative;
	border-radius: 30px;

	&::before {
		content: '';
		position: absolute;
		height: 12px;
		width: 12px;
		background-color: #3BFF37;
		border-radius: 10px;
		bottom: -3px;
		left: 41px;
		border:  2px solid white;
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
	cursor: pointer;
	position: relative;
	background-color: transparent;
`;

export const CumulativeNotification = styled.span`
	position: absolute;
	height: ${convertPixelsToREM(18)};
	width: ${convertPixelsToREM(18)};
	border-radius: ${convertPixelsToREM(9)};
	font-size: ${convertPixelsToREM(11)};
	line-height: ${convertPixelsToREM(18)};
	color: ${({ theme }) => theme.font.color[100]};
	right: -6px;
	top: -6px;
	background: #00B4DB;
	background: -webkit-linear-gradient(to bottom, #0083B0, #00B4DB);
`;
