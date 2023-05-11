import styled from 'styled-components';

export const StyledSection = styled.section`
	position: relative;
	z-index: 100;
	margin-bottom: 3rem;
`;


export const StyledContainerAboutTeam = styled.div`
	position: relative;
	min-height: 300px;
	height: fit-content;
	width: 100%;
	position: relative;
	top: -75px;
	margin-bottom: -100px;

	&::before {
		content: '';
		position: absolute;
		display: block;
		height: 100%;
		width: 100%;
		z-index: 2;
		background: ${({ theme }) => theme.team[100]};
	}
`;


export const StyledGridTeams = styled.div`
	display: grid;
	position: relative;
	width: 100%;
	z-index: 20;
	margin: 0 auto;
	border-radius: 24px;
	min-height: 300px;
	max-width: 1400px;
	background: ${({ theme }) => theme.team[200]};
	box-shadow: 8px -8px 10px rgba(0, 0, 0, .25);
	backdrop-filter: blur(7px);
	padding: 1.625rem 1.825rem 2.625rem;
	grid-template-columns: 330px 1fr;
	gap: 5rem;
`;


export const StyledColumnsTeams = styled.div`
	display: grid;
	grid-template-rows: 35px 1fr;
	grid-template-columns: 1fr;
	gap: 1.325rem;
	align-items: flex-start;
`;


export const StyledContainerVideo = styled.div`
	height: 180px;
	width: 100%;
	filter: drop-shadow(6px 6px 6px rgba(0, 0, 0, 0.36));
	border-radius: .425rem;
	overflow: hidden;
`;


export const StyledColumnsHeaderTeam = styled.div`
	display: flex;
	gap: 5rem;
	justify-content: space-between;
`;


export const StyledListAboutTeams = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
	gap: 1.625rem 3rem;
	position: relative;
`;


export const StyledListItem = styled.li`
	width: 100%;
`;


export const StyledContainerTeam = styled.figure`
	width: 100%;
	max-width: 115px;
	height: 145px;
	border-radius: 12px;
	overflow: hidden;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		box-shadow: rgba(0, 0, 0, .25) 0px 30px 60px -12px inset, rgba(0, 0, 0, .4) 0px 18px 36px -18px inset;
	}

	& > img {
		display: block;
		height: 100%;
		width: 100%;
	}
`;


export const StyledWrapperParagraph = styled.div`
	padding: .325rem .2rem;

	& > p {
		white-space: nowrap;
    overflow: hidden;
    width: 100%;
		text-overflow: ellipsis;
	}
`;


export const StyledButtonMore = styled.button`
	background-color: ${({ theme }) => theme.colors.main};
	border-radius: 2rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.basic[100]};
	font-weight: ${({ theme }) => theme.font.weight[300]};
	left: 65%;
	padding: .6rem;
	position: relative;
	top: -1.325rem;
	width: 120px;
	z-index: 100;
`;