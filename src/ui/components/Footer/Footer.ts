import styled, { keyframes } from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

const showTopMessage = keyframes`
	to {
		top: -24px;
		opacity: 0%;
	}
`;

export const Container = styled.footer`
	width: 100%;
	height: 100%;
	padding: 0 ${convertPixelsToREM(64)};
	background-color: ${({ theme }) => theme.footer};
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	margin-bottom: 2rem;
	padding-top: ${convertPixelsToREM(42)};
`;

export const NavbarInfo = styled.div`
`;

export const TitleSection = styled.h3`
	font-size: ${convertPixelsToREM(18)};
	color: ${({ theme }) => theme.font.color[100]};
	margin-bottom: ${convertPixelsToREM(12)};
`;

export const LinksItems = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${convertPixelsToREM(10)};

	&.social-networks {
		flex-direction: row;
		gap:${convertPixelsToREM(16)};
	}
`;

export const LinkItem = styled.li`
	&.circle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border: none;
		overflow: hidden;
		border-radius: 20px;
		outline: 1px solid ${({ theme }) => theme.colors.main};
		transition: all .3s ease;
	}

	& > a {
		font-size: ${convertPixelsToREM(14)};
		color: ${({ theme }) => theme.font.color[200]};
		display: flex;
		transition: color .3s ease-out;

		&:hover {
			transition: color .3s ease;
			color: ${({ theme }) => theme.colors.mainHover};
		}
	}

	& .icon-social {
		font-size: ${convertPixelsToREM(24)};
		color: ${({ theme }) => theme.colors.main};
	}

	&.circle:hover, &.circle:hover .icon-social {
		color: ${({ theme }) => theme.colors.mainHover};
		opacity: .9;
		transition: all .3s ease;
		outline-color: ${({ theme }) => theme.colors.mainHover};
	}
`;

export const Address = styled.address`
	display: flex;
	flex-direction: column;
	gap: ${convertPixelsToREM(10)};
`;

export const Text = styled.p`
	position: relative;
	color: ${({ theme }) => theme.font.color[200]};
	font-size: ${convertPixelsToREM(14)};
	transition: color .3s ease-in;

	&:hover {
		cursor: copy;
		transition: color .3s ease;
		color: ${({ theme }) => theme.colors.mainHover};
	}

	&[data-type='phone'] {
		cursor: pointer;
	}
`;

export const MessageAddress = styled.span`
	position: absolute;
	top: -7px;
	color: ${({ theme }) => theme.font.color[100]};
	background-color: ${({ theme }) => theme.colors.mainHover};
	border-radius: .2rem;
	font-size: ${convertPixelsToREM(12)};
	font-style: normal;
	padding: .2rem .3rem;
	display: none;
	width: fit-content;

	&.ativo {
		display: block;
		opacity: 100%;
		animation: ${showTopMessage} 1500ms forwards;
	}
`;


export const Developed = styled.p`
	font-size: ${convertPixelsToREM(13)};
	color: ${({ theme }) => theme.font.color[200]};
	font-weight: ${({ theme }) => theme.font.weight[200]};
	text-align: center;
	padding: ${convertPixelsToREM(10)};
`;

export const Developer = styled.span`
	display: block;
	margin-top: .2rem;

	&>a {
		font-size: inherit;
		transition: color .3s ease-in;
		color: ${({ theme }) => theme.font.color[200]};

		&:hover {
			transition: color .3s ease;
			color: ${({ theme }) => theme.colors.mainHover};
		}
	}
`;