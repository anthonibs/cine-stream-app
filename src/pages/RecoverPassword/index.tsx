import { useNavigate } from 'react-router-dom';

import MyButton from 'ui/components/common/MyButton';
import Input from 'ui/components/common/Input';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import Heading from 'ui/components/common/Typography/Heading';

import * as S from './RecoverPassword';

import { Formik } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import useAuthContext from 'data/hooks/useAuthContext';

const SCHEMA_INPUT_VALIDATOR = Yup.object().shape({
	email: Yup.string()
		.email('Preencha um endereço de email válido.')
		.required('Este campo é de preenchimento obrigatório.'),
});

const RecoverPassword = () => {
	const { recoverEmailPassword } = useAuthContext();

	const navigate = useNavigate();

	const initialValues = {
		email: '',
	};

	function navigateToHomeScreen() {
		navigate('/signin');
	}

	return (
		<S.Section>
			<S.Container>
				<S.Column>
					<MyButton variant='primary' mode='square' direction='ltr' onClick={navigateToHomeScreen}>
						<Paragraph size='md'>Ir para login</Paragraph>
					</MyButton>
				</S.Column>

				<S.Wrapper>
					<S.Header>
						<Heading component='h2' variant='h4' color='primary'>
							Criar Cadastro
						</Heading>
					</S.Header>
					<Formik
						initialValues={initialValues}
						validationSchema={SCHEMA_INPUT_VALIDATOR}
						onSubmit={(values, actions) => {
							actions.resetForm();
							recoverEmailPassword(values.email);
						}}
					>
						{({ errors, touched, values }) => {
							const isDisabled = values.email === '';
							return (
								<S.FormCustom noValidate>
									<S.Fieldset>
										<Input
											className={classNames({
												'has-value': values.email,
												'is-error': errors.email && touched.email && true,
											})}
											type='email'
											name='email'
											id='input-email'
											label='Usuário email'
											required
										/>

										{errors.email && touched.email && (
											<S.ErrorMessage>{errors.email}</S.ErrorMessage>
										)}
									</S.Fieldset>

									<MyButton type='submit' variant='primary' mode='square' disabled={isDisabled}>
										<Paragraph size='md'>Cadastrar</Paragraph>
									</MyButton>
								</S.FormCustom>
							);
						}}
					</Formik>
				</S.Wrapper>
			</S.Container>
		</S.Section>
	);
};

export default RecoverPassword;
