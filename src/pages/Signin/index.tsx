// Hooks React e React Router
import { Link, useNavigate } from 'react-router-dom';

// Dependências
import { Formik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

// Hooks Personalizados
import { useAuthContext } from 'data/hooks/useAuthContext';

// Componentes
import Input from 'ui/components/common/Input';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import Heading from 'ui/components/common/Typography/Heading';

// Estilização dos componentes
import {
	StyledColumn,
	StyledContainer,
	StyledErrorMessage,
	StyledFieldset,
	StyledFooter,
	StyledForm,
	StyledHeader,
	StyledSection,
	StyledWrapper,
} from './Signin';

interface ILoginUser {
	email: string,
	password: string,
}

const SCHEMA_INPUT_VALIDATOR = Yup.object().shape({
	email: Yup.string()
		.email('Preencha um endereço de email válido.')
		.required('Este campo é de preenchimento obrigatório.'),
	password: Yup.string()
		.required('Este campo é de preenchimento obrigatório.')
});


const Signin = () => {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const initialValues = {
		email: '',
		password: '',
	};

	function handlerHomeScreen() {
		navigate('/');
	}

	function handlerSignin(values: ILoginUser) {
		login(values.email, values.password);
	}


	return (
		<StyledSection>
			<StyledContainer>
				<StyledColumn>
					<MyButton
						icon='goBack'
						variant='primary'
						mode='square'
						direction='ltr'
						onClick={handlerHomeScreen}
					>
						<Paragraph size='md'>
							Voltar
						</Paragraph>
					</MyButton>
				</StyledColumn>

				<StyledWrapper>
					<StyledHeader>
						<Heading
							component='h2'
							variant='h4'
							color='primary'
						>
							Fazer login
						</Heading>
					</StyledHeader>
					<Formik
						initialValues={initialValues}
						validationSchema={SCHEMA_INPUT_VALIDATOR}
						onSubmit={handlerSignin}
					>
						{({ errors, touched, values }) => {
							const isFieldsValid = (values.email === '' || values.password === '');
							return (
								<StyledForm noValidate>
									<StyledFieldset>
										<Input
											className={classnames({
												'has-value': values.email,
												'is-error': errors.email && touched.email && true
											})}
											label='Usuário email'
											type="email"
											name="email"
											id="input-email"
											required
										/>
										{
											touched.email && errors.email
										&&
										<StyledErrorMessage>
											{errors.email}
										</StyledErrorMessage>
										}
									</StyledFieldset>

									<StyledFieldset>
										<Input
											className={classnames({
												'has-value': values.password,
												'is-error': errors.password && touched.password && true
											})}
											label='Senha'
											id='input-password'
											name='password'
											displayPass
											required
										/>
										{
											touched.password && errors.password
										&&
										<StyledErrorMessage>
											{errors.password}
										</StyledErrorMessage>
										}
									</StyledFieldset>

									<MyButton
										type='submit'
										variant='primary'
										mode='square'
										disabled={isFieldsValid}
									>
										<Paragraph size='md'>
										Cadastrar
										</Paragraph>
									</MyButton>
								</StyledForm>
							);
						}}
					</Formik>

					<StyledFooter>
						<Link to={'/signup'} className='signup'>Criar cadastro</Link>
						<Link to={'#'}>Esqueceu a senha?</Link>
					</StyledFooter>
				</StyledWrapper>
			</StyledContainer>
		</StyledSection >
	);
};


export default Signin;
