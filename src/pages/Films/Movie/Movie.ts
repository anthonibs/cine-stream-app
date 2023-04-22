import styled, { css } from 'styled-components';

interface IBackgroundImage {
	background?: string
}

interface IVoteAverage {
	img: string;
}

interface IButtonProps {
	color?: string
}


export const Container = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
`;

export const Section = styled.section`
	height: 100%;
	width: 100%;
	position: relative;

	&::before {
		content: '';
		top: 0;
		position: absolute;
		left: 0;
		display: block;
		height: 100vh;
		width: 100%;
		z-index: 1;
		background-image: linear-gradient(270deg, rgba(0, 29, 45, 0.28) 0%, rgb(0, 29, 45) 80%);
	}
`;

export const BackgroundImage = styled.div<IBackgroundImage>`
	height: 80vh;
	width: 95%;
	margin-left: auto;
	background:  left / cover no-repeat url(${({ background }) => background});
	position: relative;
`;


export const ContainerTitle = styled.div`
	width: 100%;
	position: absolute;
	top: 150px;
	max-width: 520px;
	z-index: 2;
`;

export const Title = styled.h1`
	font-size: 32px;
	color: ${({ theme }) => theme.colors.basic[100]};
	margin-bottom: 1.6rem;
`;

export const SubTitle = styled.h2`
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: #09A4E2;
`;

export const Paragraph = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.basic[100]};
`;


export const VideoInfoGroup = styled.div`
	margin-top: 1rem;
	display: flex;
	gap: .4rem;
	flex-direction: column;
`;


export const VotingGroup = styled.div`
	display: flex;
	align-items: center;
	gap: .8rem;
`;


export const Image = styled.img`
	display: block;
	width: auto;
	height: 27px;
`;

export const VoteAverage = styled.span<IVoteAverage>`
	color: #F6C700;
	font-size: 20px;
	display: flex;
	align-items: center;
	font-weight: 700;

	&::before {
		content: '';
		display: block;
		height: 27px;
		width: 50px;
		margin-right: .8rem;
		background:  center / contain no-repeat url(${({ img }) => img});
	}
`;


export const Year = styled.span`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.basic[300]};
`;


export const GroupActions = styled.div`
	display: flex;
	gap: 1rem;
	margin: 25px 0;
`;



export const Button = styled.button<IButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: .4rem;
	border-radius: 50px;
	padding: 16px;
	width: fit-content;
	user-select: none;
	font-weight: 600;
	font-size: 20px;
	appearance: none;
	color: ${({ theme }) => theme.colors.basic[100]};
	background-color: ${({ theme }) => theme.colors.basic[400]};
	cursor: pointer;
	outline: none;
	transition: opacity .3s ease-in-out;

	${({ color }) => color && css`
		background-color: ${({ theme }) => theme.colors.main};
	`}

	&:hover, &:focus {
		opacity: .85;
		box-shadow:${({ theme }) => theme.colors.main} 0px 2px 4px 0px, ${({ theme }) => theme.colors.main} 0px 2px 16px 0px;
	}

	> svg {
		pointer-events: none;
		font-size: 22px;
	}
`;
