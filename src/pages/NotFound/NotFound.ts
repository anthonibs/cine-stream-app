import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	min-height: calc(100vh - 315px);
	padding-top: 120px;
	width: 90%;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GoBack = styled.div`
	min-width: 160px;
	margin-top: 3rem;
	width: fit-content;
`;

export const Figure = styled.figure`
	height: 300px;
	width: 100%;

	@media (min-width: 768px) {
		height: 400px;
	}
`;

export const Image = styled.img`
	display: block;
	height: 100%;
	pointer-events: none;
	user-select: none;
	width: inherit;
`;
