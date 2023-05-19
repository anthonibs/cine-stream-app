import styled from 'styled-components';

export const StyledSection = styled.section`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	height: 100%;
	padding-top: 90px;
	width: 100%;
`;


export const StyledContainer = styled.div`
	height: 100%;
	margin: 0 auto;
	max-width: 1200px;
	padding-top: 2rem;
	padding-bottom: 4rem;
	width: 100%;
`;

export const StyledColumn = styled.div`
	margin-left: 1rem;
	margin-bottom: 2rem;
	width: 150px;
`;

export const StyledWrapper = styled.div`
	border-radius: .45rem;
	background-color: #f3f3f3;
	box-shadow: rgba(149, 157, 165, .3) 2px 5px 18px;
	height: 100%;
	margin: 0 auto;
	max-width: 460px;
	width: 100%;

	@media (min-width: 375px) {
		box-shadow: rgba(149, 157, 165, .3) 2px 5px 18px;
		padding: 2rem;
	}

	@media (min-width: 668px) {
		max-width: 520px;
		padding: 2rem 3rem 3rem 3rem;
	}
`;

export const StyledHeader = styled.header`
	margin-bottom: 1rem;
`;

export const StyledForm = styled.form`
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;

export const StyledFieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const StyledFooter = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: .8rem;

	> a {
		color: ${({ theme }) => theme.colors.basic[300]};
		font-size: .875rem;

		&:hover {
			text-decoration: underline;
		}

		&.signup {
			color: ${({ theme }) => theme.colors.basic[200]};
			font-weight: ${({ theme }) => theme.font.weight[400]};
			text-decoration: none;
		}
	}
`;