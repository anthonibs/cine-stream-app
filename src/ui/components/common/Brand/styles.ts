import styled from 'styled-components';

export const LogoContainer = styled.figure`
	width: 60px;
	height: 50px;

	@media (min-width: 1200px) {
		width: 80px;
		height: 75px;
	}
`;

export const LogoImage = styled.img`
	display: block;
	width: 100%;
	pointer-events: none;
	height: 100%;
	object-fit: cover;
	user-select: none;
`;
