// Hooks React e React Router
import { Link, useNavigate } from 'react-router-dom';

// Dependências
import { Formik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

// Hooks Personalizados
import useAuthContext from 'data/hooks/useAuthContext';

// Componentes
import Input from 'ui/components/common/Input';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import Heading from 'ui/components/common/Typography/Heading';

// Estilização dos componentes
import * as S from './Signin';

interface ILoginUser {
	email: string;
	password: string;
}

const SCHEMA_INPUT_VALIDATOR = Yup.object().shape({
	email: Yup.string()
		.email('Preencha um endereço de email válido.')
		.required('Este campo é de preenchimento obrigatório.'),
	password: Yup.string().required('Este campo é de preenchimento obrigatório.'),
});

const Signin = () => {
	const { loginUser } = useAuthContext();

	const navigate = useNavigate();

	const initialValues = {
		email: '',
		password: '',
	};

	function navigateToHomeScreen(): void {
		navigate('/');
	}

	function handleSignIn(values: ILoginUser): void {
		loginUser(values.email, values.password);
	}

	return (
		<S.Section>
			<S.Container>
				<S.Column>
					<MyButton
						icon='goBack'
						variant='primary'
						mode='square'
						direction='ltr'
						onClick={navigateToHomeScreen}
					>
						<Paragraph size='md'>Voltar</Paragraph>
					</MyButton>
				</S.Column>

				<S.Wrapper>
					<S.Header>
						<Heading component='h2' variant='h4' color='primary'>
							Fazer login
						</Heading>
					</S.Header>
					<Formik
						initialValues={initialValues}
						validationSchema={SCHEMA_INPUT_VALIDATOR}
						onSubmit={handleSignIn}
					>
						{({ errors, touched, values }) => {
							const isFieldsValid = values.email === '' || values.password === '';
							return (
								<S.FormCustom noValidate>
									<S.Fieldset>
										<Input
											className={classnames({
												'has-value': values.email,
												'is-error': errors.email && touched.email && true,
											})}
											label='Usuário email'
											type='email'
											name='email'
											id='input-email'
											required
										/>
										{touched.email && errors.email && (
											<S.ErrorMessage>{errors.email}</S.ErrorMessage>
										)}
									</S.Fieldset>

									<S.Fieldset>
										<Input
											className={classnames({
												'has-value': values.password,
												'is-error': errors.password && touched.password && true,
											})}
											label='Senha'
											id='input-password'
											name='password'
											displayPass
											required
										/>
										{touched.password && errors.password && (
											<S.ErrorMessage>{errors.password}</S.ErrorMessage>
										)}
									</S.Fieldset>

									<MyButton type='submit' variant='primary' mode='square' disabled={isFieldsValid}>
										<Paragraph size='md'>Entrar</Paragraph>
									</MyButton>
								</S.FormCustom>
							);
						}}
					</Formik>

					<S.Footer>
						<Link to='/signup' className='signup'>
							Criar cadastro
						</Link>
						<Link to='/recover-password'>Esqueceu a senha?</Link>
					</S.Footer>
				</S.Wrapper>
			</S.Container>
		</S.Section>
	);
};

export default Signin;
