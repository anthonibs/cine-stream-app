import styled from 'styled-components';

export const Profile = styled.figure`
	height: 45px;
	width: 45px;

	border-radius: 30px;
	outline: 2px solid ${({ theme }) => theme.colors.basic[100]};

	position: relative;

	& .short-avatar-name {
		display: block;

		position: absolute;
		top: 0;
		width: 100%;
		z-index: 100;

		border-radius: 30px;

		user-select: none;
		pointer-events: none;

		color: ${({ theme }) => theme.colors.basic[100]};
		font-weight: 600;
		text-align: center;

		background-color: ${({ theme }) => theme.colors.main};
	}

	@media (min-width: 375px) {
		margin-bottom: 0.8rem;

		& .short-avatar-name {
			font-size: 0.875rem;
			line-height: 45px;
		}

		&::before {
			content: '';

			border-radius: 10px;
			border: 2px solid ${({ theme }) => theme.colors.basic[100]};

			background-color: #3bff37;

			height: 9px;
			width: 9px;

			position: absolute;
			left: 32px;
			top: 33px;

			z-index: 500;
		}
	}

	@media (min-width: 968px) {
		height: 50px;
		width: 50px;

		margin-bottom: 0;
		outline-width: 3px;

		& .short-avatar-name {
			font-size: 1rem;
			line-height: 50px;
		}

		&::before {
			top: 38px;
			height: 10px;
			left: 35px;
			width: 10px;
		}
	}

	@media (min-width: 1200px) {
		height: 60px;
		width: 60px;

		& .short-avatar-name {
			line-height: 60px;
		}

		&::before {
			top: 46px;
			height: 12px;
			left: 43px;
			width: 12px;
		}
	}
`;

export const ImageAvatar = styled.img`
	display: block;

	height: 100%;
	width: 100%;

	border-radius: 30px;

	object-fit: cover;

	overflow: hidden;
`;
