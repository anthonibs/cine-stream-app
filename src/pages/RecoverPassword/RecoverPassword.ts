import { Form } from 'formik';
import styled from 'styled-components';

export const Section = styled.section`
	height: 100%;
	min-height: calc(100vh - 315px);
	width: 100%;
	padding-top: 90px;
	background-color: ${({ theme }) => theme.colors.basic[100]};
`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding-top: 2rem;
	padding-bottom: 4rem;
	max-width: 1200px;
`;

export const Column = styled.div`
	width: 150px;
	margin-left: 1rem;
	margin-bottom: 2rem;
`;

export const Wrapper = styled.div`
	border-radius: 0.45rem;
	box-shadow: rgba(149, 157, 165, 0.2) 2px 5px 10px;
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

export const Header = styled.header`
	margin-bottom: 1rem;
`;

export const FormCustom = styled(Form)`
	display: flex;
	gap: 1.325rem;
	flex-direction: column;
`;

export const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const ErrorMessage = styled.span`
	display: inline-block;
	font-size: 0.825rem;
	line-height: normal;
	color: #ff1919;
`;
