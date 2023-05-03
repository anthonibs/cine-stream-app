import styled from 'styled-components';

interface IHeroProps {
	backgroundImage: string;
}

export const StyledHero = styled.div<IHeroProps>`
	background:  left / cover no-repeat url(${({ backgroundImage }) => backgroundImage});
	height: 100%;
	margin-left: auto;
	position: relative;
	width: 95%;
`;
