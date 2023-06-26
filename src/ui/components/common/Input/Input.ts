import { Field } from 'formik';
import styled from 'styled-components';

const TRANSITION_TIME = '.3s';

export const Wrapper = styled.div`
	height: 100%;
	position: relative;
	width: 100%;

	& input:focus ~ label,
	& :is(input.has-value) ~ label {
		background-color: #fff;
		top: 0px;
		transition: all ${TRANSITION_TIME} ease-in;
	}

	& input.is-error:focus,
	& :is(input.is-error) ~ label {
		color: #ff1919;
	}
`;

export const Label = styled.label`
	color: ${({ theme }) => theme.colors.basic[300]};
	font-size: 0.9rem;
	font-weight: ${({ theme }) => theme.font.weight[200]};
	left: 4px;
	padding: 0.2rem;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	transition: all 0.2s ease-out;
`;

export const Input = styled(Field)`
	border: 2px #f2f2f2 solid;
	border-radius: 0.325rem;
	color: ${({ theme }) => theme.font.color[200]};
	font-size: 1rem;
	outline: none;
	padding: 0.6rem 2.5rem 0.6rem 0.6rem;
	transition: all 0.2s ease-out;
	width: 100%;

	&::placeholder {
		color: ${({ theme }) => theme.font.color[200]};
		opacity: 0.7;
	}

	&:focus,
	&:is(input.has-value) {
		background: linear-gradient(#fff, #fff) padding-box,
			linear-gradient(to right, #09a4e2, #097aeb) border-box;
		border: 2px solid transparent;
		transition: all ${TRANSITION_TIME} ease-in;
	}

	&.input.is-error:focus,
	&:is(input.is-error) {
		background: linear-gradient(#fff, #fff) padding-box,
			linear-gradient(to right, #ff7878, #ff1919) border-box;
		border: 2px solid transparent;
		transition: all ${TRANSITION_TIME} ease-in;
	}

	&:focus ~ button > svg,
	&:is(input.has-value) ~ button > svg {
		color: #09a4e2;
		transition: color ${TRANSITION_TIME} ease-in;
	}
`;

export const ButtonDisplayPass = styled.button`
	background: transparent;
	cursor: pointer;
	display: flex;
	position: absolute;
	padding: 0.3rem;
	right: 5px;
	top: 50%;
	transform: translateY(-50%);

	> svg {
		color: #9f9f9f;
		font-size: 1.3rem;
		pointer-events: none;
		transition: color 0.2s ease-out;
	}
`;
