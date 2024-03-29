import styled from 'styled-components';
import { Form } from 'formik';
import { convertPixelsToREM } from 'utils';

export const Section = styled.section`
	background-color: ${({ theme }) => theme.colors.basic[100]};
	height: 100%;
	min-height: calc(100vh - 315px);
	padding-top: 90px;
	width: 100%;
`;

export const Container = styled.div`
	height: 100%;
	margin: 0 auto;
	max-width: 1200px;
	padding-top: 2rem;
	padding-bottom: 4rem;
	width: 100%;
`;

export const Column = styled.div`
	margin-left: 1rem;
	margin-bottom: 2rem;
	width: 150px;
`;

export const Wrapper = styled.div`
	border-radius: 0.45rem;
	box-shadow: rgba(149, 157, 165, 0.2) 2px 5px 10px;
	height: 100%;
	margin: 0 auto;
	max-width: 460px;
	width: 100%;

	@media (min-width: 375px) {
		box-shadow: rgba(149, 157, 165, 0.3) 2px 5px 18px;
		padding: 2rem;
	}

	@media (min-width: 668px) {
		max-width: 520px;
		padding: 2rem 3rem 3rem 3rem;
	}
`;

export const Header = styled.header`
	margin-bottom: 1.3rem;
`;

export const FormCustom = styled(Form)`
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;

export const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.8rem;

	> a {
		color: ${({ theme }) => theme.colors.basic[300]};
		font-size: 0.875rem;

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

export const ErrorMessage = styled.span`
	display: inline-block;
	font-size: ${convertPixelsToREM(12)};
	line-height: normal;
	color: #ff1919;
`;
