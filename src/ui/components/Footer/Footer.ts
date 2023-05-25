import styled, { keyframes } from 'styled-components';
import { convertPixelsToREM } from 'utils';

const showTopMessage = keyframes`
	to {
		opacity: 0%;
		top: -24px;
	}
`;


export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.footer};
	height: 100%;
	padding: 0 ${convertPixelsToREM(16)};
	width: 100%;

	@media (min-width: 968px) {
		padding: 0 ${convertPixelsToREM(64)};
	}
`;


export const StyledColumn = styled.div`
	display: flex;
	margin-bottom: 2rem;
	width: 100%;
	padding-top: ${convertPixelsToREM(42)};

	@media (min-width: 375px) {
		flex-direction: column;
		gap:	2rem
	}

	@media (min-width: 600px) {
		flex-direction: row;
	}
`;


export const StyledWrapper = styled.div`
	display: flex;
	gap: 2rem 1rem;
	flex-wrap: wrap;
	width: 100%;

	@media (min-width: 490px) {
		justify-content: space-around;
	}

	@media (min-width: 768px) {
		justify-content: space-between;
	}

	@media (min-width: 1200px) {
		justify-content: space-around;
	}
`;


export const StyledNavbarInfo = styled.div`
	width: 220px;

	@media (min-width: 375px) {
		font-size: .7rem;
		order: 2;

		&.social {
			order: 1;
		}
	}

	@media (min-width: 500px) {
		order: 1;

		&.social {
			order: 2;
		}
	}

	@media (min-width: 500px) {
		font-size: .875rem;
	}
`;


export const StyledHeader = styled.header`
	margin-bottom: ${convertPixelsToREM(12)};
`;


export const StyledLinksItems = styled.ul`
	display: flex;
	flex-direction: column;
	gap: ${convertPixelsToREM(10)};

	&.social-networks {
		flex-direction: row;
		gap:${convertPixelsToREM(16)};
	}
`;


export const StyledLinkItem = styled.li`
	&.circle {
		align-items: center;
		border: none;
		border-radius: 20px;
		display: flex;
		height: 40px;
		justify-content: center;
		overflow: hidden;
		outline: 1px solid ${({ theme }) => theme.colors.main};
		transition: all .3s ease;
		width: 40px;
	}

	& > a {
		color: ${({ theme }) => theme.font.color[200]};
		display: flex;
		font-size: inherit;
		transition: color .3s ease-out;

		&:hover {
			color: ${({ theme }) => theme.colors.main};
			transition: color .3s ease;
		}
	}

	& .icon-social {
		color: ${({ theme }) => theme.colors.main};
		font-size: ${convertPixelsToREM(24)};
	}

	&.circle:hover, &.circle:hover .icon-social {
		color: ${({ theme }) => theme.colors.main};
		opacity: .9;
		outline-color: ${({ theme }) => theme.colors.main};
		transition: all .3s ease;
	}
`;


export const StyledAddress = styled.address`
	display: flex;
	flex-direction: column;
	gap: ${convertPixelsToREM(10)};
`;


export const StyledText = styled.p`
	color: ${({ theme }) => theme.font.color[200]};
	font-size: inherit;
	position: relative;
	transition: color .3s ease-in;

	&:hover {
		cursor: copy;
		color: ${({ theme }) => theme.colors.main};
		transition: color .3s ease;
	}

	&[data-type='phone'] {
		cursor: pointer;
	}
`;


export const StyledMessageAddress = styled.span`
	border-radius: .2rem;
	background-color: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.font.color[100]};
	display: none;
	font-style: normal;
	font-size: ${convertPixelsToREM(12)};
	position: absolute;
	padding: .2rem .3rem;
	top: -7px;
	width: fit-content;

	&.ativo {
		animation: ${showTopMessage} 1500ms forwards;
		display: block;
		opacity: 100%;
	}
`;


export const StyledDeveloped = styled.p`
	@media (min-width: 375px) {
		color: ${({ theme }) => theme.font.color[200]};
		font-size: ${convertPixelsToREM(10)};
		font-weight: ${({ theme }) => theme.font.weight[200]};
		padding: ${convertPixelsToREM(10)};
		text-align: center;
	}

	@media (min-width: 600px) {
		font-size: ${convertPixelsToREM(13)};
	}
`;


export const StyledDeveloper = styled.span`
	display: block;
	margin-top: .2rem;

	& > a {
		color: ${({ theme }) => theme.font.color[200]};
		font-size: inherit;
		transition: color .3s ease-in;

		&:hover {
			color: ${({ theme }) => theme.colors.main};
			transition: color .3s ease;
		}
	}
`;


export const StyledSelectedLanguage = styled.select`
	color: ${({ theme }) => theme.colors.basic[100]};
	border-radius: .1rem;
	background-color: ${({ theme }) => theme.colors.basic[400]};
	cursor: pointer;
	font-size: 0.775rem;
	height: 2rem;
	max-width: 120px;
	padding: .35em;

	@media (min-width: 968px) {
		font-size: 0.775rem;
	}

	@media (min-width: 1200px) {
		font-size: 1rem;
	}
`;
