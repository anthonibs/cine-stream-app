import styled from 'styled-components';

interface IHeroProps {
	backgroundImage: string;
}

export const StyledHero = styled.div<IHeroProps>`
	height: 100%;
	position: relative;
	width: 100%;

	@media (min-width: 375px) {
		background: center / cover no-repeat url(${({ backgroundImage }) => backgroundImage});
	}

	@media (min-width: 768px) {
		background:  center / cover no-repeat url(${({ backgroundImage }) => backgroundImage});
	}

	@media (min-width: 1000px) {
		background:  left / cover no-repeat url(${({ backgroundImage }) => backgroundImage});
	}
`;
