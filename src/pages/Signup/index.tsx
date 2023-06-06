// Hooks React
import { useNavigate } from 'react-router-dom';

// Dependências
import { Formik, FormikErrors, FormikValues } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

// Hooks Personalizados
import { useAuthContext } from 'data/hooks/useAuthContext';

// Componentes
import Input from 'ui/components/common/Input';
import MyButton from 'ui/components/common/MyButton';
import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';

// Estilização de componentes
import {
	StyledColumn,
	StyledContainer,
	StyledErrorMessage,
	StyledFieldset,
	StyledForm,
	StyledHeader,
	StyledSection,
	StyledWrapper,
} from './Signup';


interface IUserForm {
	name: string,
	password: string,
	email: string,
	'confirm-password': string,
}

const SCHEMA_INPUT_VALIDATOR = Yup.object().shape({
	name: Yup.string()
		.min(3, 'Nome é muito curto, o mínimo é de três letras.')
		.max(70, 'Ultrapassou o limite de 70 caracteres.')
		.required('Este campo é de preenchimento obrigatório.'),
	email: Yup.string()
		.email('Preencha um endereço de email válido.')
		.required('Este campo é de preenchimento obrigatório.'),
	password: Yup.string()
		.min(6, 'Senha muito curta,  adicione mais letras e números.')
		.max(16, 'Senha ultrapassou o limite de 16 caracteres')
		.required('Este campo é de preenchimento obrigatório.'),
	'confirm-password': Yup.string()
		.min(6, 'Senha muito pequena, tente adicionar mais letras e números.')
		.max(16, 'Senha ultrapassou o limite de 16 caracteres')
		.required('Este campo é de preenchimento obrigatório.')
});


const Signup = () => {
	const { registerUser } = useAuthContext();
	const navigate = useNavigate();

	const initialValues = {
		name: '',
		password: '',
		email: '',
		'confirm-password': '',
	};

	function handlerUserRegistration(value: IUserForm) {
		if ((value.password.length >= 6 && value.password === value['confirm-password'])) {
			registerUser(value.name, value.email, value.password);
			navigate('/signin');
		}
	}

	function handlerHomeScreen() {
		navigate('/');
	}

	function validatePasswordEquals(values: IUserForm) {
		let errors: FormikErrors<FormikValues> = {};
		if (values.password !== values['confirm-password']) {
			errors = {
				'confirm-password': 'As senhas não coincidem, por favor, digite novamente.',
			};
			return errors;
		}
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
							Criar Cadastro
						</Heading>
					</StyledHeader>
					<Formik
						initialValues={initialValues}
						validationSchema={SCHEMA_INPUT_VALIDATOR}
						onSubmit={(values, actions) => {
							actions.setSubmitting(true);
							handlerUserRegistration(values);
						}}
						validate={validatePasswordEquals}
					>
						{({ errors, touched, isSubmitting, values }) => {
							const isFieldsValid = (values.name === '' || values.email === '' || values.password === '' || values['confirm-password'] === '') || Object.keys(errors).length > 0 || isSubmitting;
							return (
								<StyledForm noValidate>
									<StyledFieldset>
										<Input
											className={classnames({
												'has-value': values.name,
												'is-error': errors.name && touched.name && true
											})}
											type="text"
											name="name"
											id="input-name"
											minLength={3}
											maxLength={70}
											required
											label='Seu nome'
										/>
										{touched.name && errors.name
											&&
											<StyledErrorMessage>
												{errors.name}
											</StyledErrorMessage>
										}
									</StyledFieldset>

									<StyledFieldset>
										<Input
											className={classnames({
												'has-value': values.email,
												'is-error': errors.email && touched.email && true
											})}
											type="email"
											name="email"
											id="input-email"
											label='Usuário email'
											required
										/>

										{errors.email && touched.email
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
											name="password"
											id="input-password"
											displayPass
											maxLength={16}
											label="Senha"
											required
										/>
										{errors.password && touched.password
											&&
											<StyledErrorMessage>
												{errors.password}
											</StyledErrorMessage>
										}
									</StyledFieldset>

									<StyledFieldset>
										<Input
											className={classnames({
												'has-value': values['confirm-password'],
												'is-error': errors['confirm-password'] && touched['confirm-password'] && true
											})}
											name="confirm-password"
											id="input-confirm-password"
											maxLength={16}
											required
											label='Confirma senha'
											displayPass
										/>
										{errors['confirm-password'] && touched['confirm-password']
											&&
											<StyledErrorMessage>
												{errors['confirm-password']}
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
				</StyledWrapper>
			</StyledContainer>
		</StyledSection >
	);
};


export default Signup;