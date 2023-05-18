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

// Estilização dos componentes
import {
	About,
	Container,
	Fieldset,
	Form,
	Title,
	Wrapper
} from './Signin';


const Signin = () => {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const [email, setEmail] = useState('jacklumberbr@gmail.com');
	const [password, setPassword] = useState('123456');

	function handlerHomeScreen() {
		navigate('/');
	}

	function handlerSignin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		login(email, password);
	}

	return (
		<Container>
			<Wrapper>
				<Title>Fazer login</Title>
				<Form
					onSubmit={handlerSignin}
				>
					<Fieldset>
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
					</Fieldset>

					<Fieldset>
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
					</Fieldset>

					<MyButton type='submit' variant='primary' mode='square'>
						<Paragraph size='md'>
							Entrar
						</Paragraph>
					</MyButton>
				</Form>

				<About>
					<Link to={'/signup'} className='signup'>Criar cadastro</Link>
					<Link to={'#'}>Esqueceu a senha?</Link>
				</About>
			</Wrapper>
		</Container>
	);
};

export default Signin;
