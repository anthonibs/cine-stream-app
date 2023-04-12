import styled from 'styled-components';

export const Container = styled.div`
	height: fit-content;
	box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;	border-radius: .3rem;
	overflow: hidden;
	background-color: whitesmoke;
	outline: 1px solid ${({ theme }) => theme.colors.basic[200]};

	&.active fieldset {
		display: block;
	}

	&.active svg {
		transform: rotate(90deg);
	}
`;


export const ToggleFilter = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding: 1rem;
	width: 100%;
	background-color: transparent;

	> svg {
		color: ${({ theme }) => theme.colors.basic[400]};
		font-size: 1.3rem;
		transition: transform .3s ease;
	}
`;


export const SubTitle = styled.h2`
	font-size: 1.1rem;
	letter-spacing: 1px;
	color: ${({ theme }) => theme.colors.basic[400]};
`;
