import styled from 'styled-components';

export const Items = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 0.875rem;
	height: 100%;
	overflow: auto;
	scroll-behavior: smooth;
	width: 99.4%;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		background: #e0dede;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.main};
		border-radius: 10px;
		border: 2px solid #e0dede;
	}
`;

export const Item = styled.li`
	border-radius: 0.425rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	display: flex;
	gap: 0.625rem;
	width: 98%;

	&:last-child {
		margin-bottom: 0.3rem;
	}
`;

export const ImageContainer = styled.figure`
	height: 130px;
	position: relative;
	width: 100px;
`;

export const Image = styled.img`
	border-radius: 0.425rem;
	display: block;
	height: inherit;
	object-fit: cover;
	object-position: top;
	width: inherit;
`;

export const Box = styled.div`
	padding-top: 1rem;
	padding-right: 1rem;
	width: 100%;

	& > p {
		display: -webkit-box;
		margin-top: 0.6rem;
		overflow: hidden;
		width: 100%;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
`;

export const Subtitle = styled.span`
	color: ${({ theme }) => theme.font.color[200]};
	display: block;
	font-size: ${({ theme }) => theme.font.sizes.b.xsm};
	font-weight: ${({ theme }) => theme.font.weight[300]};
	margin-top: 0.425rem;
`;
