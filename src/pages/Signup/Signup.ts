import { Form } from 'formik';
import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

export const StyledSection = styled.div`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	height: 100%;
	padding-top: 90px;
	width: 100%;
`;

export const StyledContainer = styled.div`
		width: 100%;
		height: 100%;
		margin: 0 auto;
		padding-top: 2rem;
		padding-bottom: 4rem;
		max-width: 1200px;
`;

export const StyledColumn = styled.div`
	width: 150px;
	margin-left: 1rem;
	margin-bottom: 2rem;
`;

export const StyledWrapper = styled.div`
	border-radius: .45rem;
	box-shadow: rgba(149, 157, 165, .2) 2px 5px 10px;
	height: 100%;
	margin: 0 auto;
	max-width: 460px;
	width: 100%;

	@media (min-width: 375px) {
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


export const StyledForm = styled(Form)`
	display: flex;
	gap: 1.325rem;
	flex-direction: column;
`;


export const StyledFieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const StyledErrorMessage = styled.span`
	display: inline-block;
	font-size: ${convertPixelsToREM(12)};
	line-height: normal;
	color: #ff1919;
`;