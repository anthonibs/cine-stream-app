import styled from 'styled-components';
import convertPixelsToREM from 'ui/utils/convertPixelsToRem';

export const Container = styled.div`
	padding-top: 90px;
	min-height: calc(100vh - 321px);
	height: 100%;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.basic[100]};
`;

export const Wrapper = styled.div`
	width: 100%;
	max-width: 520px;
	margin: 0 auto;
	border-radius: .45rem;
	background-color: #f3f3f3;
	padding: 1.6rem 3rem 3rem 3rem;
	box-shadow: rgba(149, 157, 165, .3) 2px 5px 18px;
`;

export const Form = styled.form`
	display: flex;
	gap: 1rem;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-size: ${convertPixelsToREM(32)};
	color: ${({ theme }) => theme.colors.basic[400]};
	margin-bottom: 1.6rem;
`;

export const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const About = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: .8rem;

	> a {
		font-size: .875rem;
		color: ${({theme}) => theme.colors.basic[300]};

		&:hover {
			text-decoration: underline;
		}


		&.signup {
			color: ${({theme}) => theme.colors.basic[200]};
			text-decoration: none;
			font-weight: ${({theme}) => theme.font.weight[400]};
		}
	}
`;