import styled from 'styled-components';

export const Section = styled.section`
	padding-bottom: 8rem;
	position: relative;
	z-index: 100;
`;

export const ContainerAboutTeam = styled.div`
	height: fit-content;
	margin: 0 auto;
	min-height: 300px;
	position: relative;

	> a {
		outline: none;
		bottom: -0.6rem;
		position: absolute;
		right: 1rem;
		z-index: 100;
		border-radius: 2rem;

		&:hover,
		&:focus-within {
			box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
			filter: drop-shadow(0 0 0.45rem ${({ theme }) => theme.colors.main});
		}

		@media (min-width: 768px) {
			left: 65%;
			position: relative;
			top: -0.6rem;
		}
	}

	&::before {
		background: ${({ theme }) => theme.team[100]};
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		width: 100%;
		z-index: 2;
	}

	@media (min-width: 375px) {
		margin-bottom: -60px;
		top: -60px;
		width: 95%;
	}

	@media (min-width: 390px) {
		margin-bottom: -240px;
		top: -240px;
	}

	@media (min-width: 768px) {
		top: -300px;
		width: 100%;
	}

	@media (min-width: 1024px) {
		top: -20px;
	}

	@media (min-width: 1100px) {
		top: -100px;
		margin-bottom: -150px;
	}

	@media (min-width: 1300px) {
		top: -120px;
	}
`;

export const GridTeams = styled.div`
	background: ${({ theme }) => theme.team[200]};
	box-shadow: 8px -8px 10px rgba(0, 0, 0, 0.15);
	border-radius: 16px;
	backdrop-filter: blur(7px);
	display: grid;
	grid-template-columns: 1fr;
	gap: 3rem;
	margin: 0 auto;
	min-height: 300px;
	position: relative;
	padding: 1rem 1rem 2rem;
	width: 100%;
	z-index: 20;

	@media (min-width: 375px) {
		padding: 1rem 1rem 2rem;
	}

	@media (min-width: 768px) {
		border-radius: 24px;
		box-shadow: 8px -8px 10px rgba(0, 0, 0, 0.2);
		padding: 1.625rem 1.825rem 2.625rem;
		width: 95%;
	}

	@media (min-width: 1000px) {
		box-shadow: 8px -8px 10px rgba(0, 0, 0, 0.25);
		max-width: 1400px;
		gap: 5rem;
		grid-template-columns: 330px 1fr;
		padding: 1.625rem 1.825rem 2.625rem;
	}
`;

export const ColumnsTeams = styled.div`
	align-items: flex-start;
	display: grid;
	gap: 1.6rem;
	grid-template-rows: auto 1fr;
	grid-template-columns: 1fr;

	@media (min-width: 768px) {
		gap: 1rem;
	}
`;

export const ContainerVideo = styled.div`
	border-radius: 0.425rem;
	filter: drop-shadow(6px 6px 6px rgba(0, 0, 0, 0.36));
	height: 180px;
	overflow: hidden;
	width: 100%;

	@media (min-width: 768px) {
		height: 260px;
	}

	@media (min-width: 1000px) {
		height: 180px;
	}
`;

export const ColumnsHeaderTeam = styled.div`
	display: flex;
	gap: 1.6rem;
	justify-content: space-between;

	@media (min-width: 768px) {
		gap: 5rem;
	}
`;

export const ListAboutTeams = styled.ul`
	display: grid;
	gap: 2rem 1rem;
	grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
	position: relative;

	@media (min-width: 768px) {
		gap: 1.625rem 3rem;
		grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
	}
`;

export const ListItem = styled.li`
	height: 100%;
	width: 100%;

	& > a {
		outline: none;

		&:hover,
		&:focus {
			box-shadow: ${({ theme }) => theme.colors.main} 0px 2px 4px 0px;
			filter: drop-shadow(0 0 0.45rem ${({ theme }) => theme.colors.main});
		}
	}
`;

export const ContainerTeam = styled.figure`
	border-radius: 12px;
	height: 175px;
	overflow: hidden;
	position: relative;
	width: 100%;

	&::before {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.4) 0px 18px 36px -18px inset;
		content: '';
		height: 100%;
		position: absolute;
		width: 100%;
	}

	& > img {
		display: block;
		height: 100%;
		width: 100%;
	}
`;

export const WrapperParagraph = styled.div`
	padding: 0.325rem 0.2rem;

	@media (min-width: 375px) {
		& > p {
			overflow: hidden;
			text-overflow: ellipsis;
			width: 100%;
			white-space: nowrap;
		}
	}
`;

export const More = styled.span`
	background-color: ${({ theme }) => theme.colors.main};
	color: ${({ theme }) => theme.colors.basic[100]};
	font-weight: ${({ theme }) => theme.font.weight[300]};
	font-size: 0.9rem;
	border-radius: 2rem;
	width: 120px;
	padding: 0.6rem;
	text-align: center;
`;
