// Hooks React e React Router
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Hooks Personalizados
import { useAuthContext } from 'data/hooks/useAuthContext';

// Componentes
import Input from 'ui/components/common/Input';
import Label from 'ui/components/common/Label';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';
import Heading from 'ui/components/common/Typography/Heading';

// Estilização dos componentes
import {
	StyledColumn,
	StyledContainer,
	StyledFieldset,
	StyledFooter,
	StyledForm,
	StyledHeader,
	StyledSection,
	StyledWrapper,
} from './Signin';



const Signin = () => {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function handlerHomeScreen() {
		navigate('/');
	}

	function handlerSignin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		login(email, password);
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
					<StyledForm
						onSubmit={handlerSignin}
					>
						<StyledFieldset>
							<Label htmlFor="input-email">
								Usuário email
							</Label>
							<Input
								type="email"
								name="input-email"
								id="input-email"
								placeholder='Digite o seu email...'
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
							/>
						</StyledFieldset>

						<StyledFieldset>
							<Label htmlFor='input-password'>
								Senha
							</Label>
							<Input
								id='input-password'
								name='input-password'
								placeholder='************'
								value={password}
								onChange={e => setPassword(e.target.value)}
								displayPass
								required
							/>
						</StyledFieldset>
						<MyButton
							type='submit'
							variant='primary'
							mode='square'
						>
							<Paragraph size='md'>
								Entrar
							</Paragraph>
						</MyButton>
					</StyledForm>
					<StyledFooter>
						<Link to={'/signup'} className='signup'>Criar cadastro</Link>
						<Link to={'#'}>Esqueceu a senha?</Link>
					</StyledFooter>
				</StyledWrapper>
			</StyledContainer>
		</StyledSection>
	);
};

export default Signin;
