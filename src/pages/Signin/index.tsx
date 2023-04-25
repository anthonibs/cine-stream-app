// Hooks React e React Router
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks Personalizados
import { useAuthContext } from 'data/hooks/useAuthContext';

// Componentes
import Input from 'ui/components/common/Input';
import Label from 'ui/components/common/Label';

// Estilização dos componentes
import {
	About,
	Container,
	Fieldset,
	Form,
	Title,
	Wrapper
} from './Signin';
import { Button } from 'ui/components/common/Button';



const Signin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { login } = useAuthContext();

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
					<Button type="submit">Entrar</Button>
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
