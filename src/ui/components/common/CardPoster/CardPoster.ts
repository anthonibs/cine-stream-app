import styled from 'styled-components';

export const Container = styled.div`
	height: 302px;
	width: 168px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	a{
		height: inherit;
		width: inherit;

		> figure {
			width: 100%;
			height: 237px;
			overflow: hidden;
			filter: drop-shadow(6px 6px 6px rgba(0, 0, 0, 0.36));
			border-radius: .45rem;

			> img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
				user-select: none;
				pointer-events: none;
			}
		}
	}

	.description {
		h3 {
			font-weight: 700;
			font-size: 16px;
			color: #FFFFFF;
			overflow: hidden;
			max-width: 15ch;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		span {
			font-weight: 700;
			font-size: 11px;
			color: #AFAFAF;
		}

		> div {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& div:first-child {
				width: auto;
				height: 14px;
				display: flex;
				gap: .3rem;
				align-items: center;

				> img {
					display: block;
					width: auto;
					height: 100%;
					object-fit: cover;
					object-position: center;
					user-select: none;
					pointer-events: none;
				}

				> p {
					color: #8B7424;
					font-weight: 700;
					font-size: 11px;
				}
			}

			.icone {
				display: flex;
				gap: 5px;

				> button {
					all: unset;
					display: flex;
					padding: .1rem;
					cursor: pointer;

					> svg {
						pointer-events: none;
						font-size: 1.3rem;
						transition: color .3s ease-in-out;
						color: rgb(41, 41, 41);
					}

					&.active > svg {
						color: ${({ theme }) => theme.colors.main};
					}

					&.active > svg {
						color: ${({ theme }) => theme.colors.main};
					}

					&:hover:not(.active)> svg {
						color: ${({ theme }) => theme.colors.hover[200]};
					}
				}
			}
		}
	}
`;