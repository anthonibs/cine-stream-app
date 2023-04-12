import styled from 'styled-components';

export const Container = styled.div`
	height: 70vh;
	position: relative;

	@media (min-width: 968px) {
		height: 100vh;
	}

	&::before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		background-image: linear-gradient(90deg, rgba(0,0,0, .66) 25%, rgba(0,0,0, 0) 100%);
	}
`;


export const Image = styled.img`
	display: block;
	height: 100%;
	width: 100%;
	object-fit: cover;
`;