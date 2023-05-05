import styled from 'styled-components';

export const Container = styled.div`
	height: fit-content;
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	border-radius: .3rem;
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.basic[100]};
	outline: 1px solid ${({ theme }) => theme.colors.basic[500]};

	&.collapse-open fieldset {
		display: block;
	}

	&.collapse-open svg {
		pointer-events: none;
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
