// Hooks React
import { useState } from 'react';

// Hooks Personalizados
import { useAuthContext } from 'data/hooks/useAuthContext';

// Componentes
import Input from 'ui/components/common/Input';
import Label from 'ui/components/common/Label';
import MyButton from 'ui/components/common/MyButton';
import Paragraph from 'ui/components/common/Typography/Paragraph';

// Estilização de componentes
import {
	Container,
	Fieldset,
	Form,
	PasswordHint,
	Title,
	Wrapper
} from './Signup';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const navigate = useNavigate();

	const [message, setMessage] = useState('');

	const { registerUser } = useAuthContext();

	function handlerUserRegistration(e: React.FormEvent) {
		e.preventDefault();
		if ((password.length > 3 && password === confirmPassword)) {
			registerUser(name, email, password);
			navigate('/signin');
			setMessage('');
		} else {
			setMessage('As senhas são diferentes.');
		}
	}

	return (
		<Container>
			<Wrapper>
				<Title>Criar Cadastro</Title>
				<Form onSubmit={handlerUserRegistration}>
					<Fieldset>
						<Label htmlFor="input-name">
							Seu nome
						</Label>
						<Input
							type="text"
							name="name"
							id="input-name"
							value={name}
							onChange={e => setName(e.target.value)}
							required
						/>
					</Fieldset>

					<Fieldset>
						<Label htmlFor="input-email">
							Usuário email
						</Label>
						<Input
							type="email"
							name="email"
							id="input-email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</Fieldset>

					<Fieldset>
						<Label htmlFor="input-password">
							Senha
						</Label>
						<Input
							name="password"
							id="input-password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							displayPass
							required
						/>
						<PasswordHint>
							As senhas devem ter pelo menos 6 caracteres.
						</PasswordHint>
					</Fieldset>

					<Fieldset>
						<Label htmlFor="input-confirm-password">
							Confirmar senha
						</Label>
						<Input
							name="confirm-password"
							id="input-confirm-password"
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
							required
							displayPass
						/>
						{message}
					</Fieldset>

					<MyButton type='submit' variant='primary' mode='square' disabled={false}>
						<Paragraph size='md'>
							Cadastrar
						</Paragraph>
					</MyButton>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Signup;