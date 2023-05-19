// Hooks React
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Hooks Personalizados
import { useAuthContext } from 'data/hooks/useAuthContext';

// Componentes
import Input from 'ui/components/common/Input';
import Label from 'ui/components/common/Label';
import MyButton from 'ui/components/common/MyButton';
import Heading from 'ui/components/common/Typography/Heading';
import Paragraph from 'ui/components/common/Typography/Paragraph';

// Estilização de componentes
import {
	StyledColumn,
	StyledContainer,
	StyledFieldset,
	StyledForm,
	StyledHeader,
	StyledPasswordHint,
	StyledSection,
	StyledWrapper,
} from './Signup';


const Signup = () => {
	const { registerUser } = useAuthContext();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	function handlerUserRegistration(e: React.FormEvent) {
		e.preventDefault();
		if ((password.length > 6 && password === confirmPassword)) {
			registerUser(name, email, password);
			navigate('/signin');
			setMessage('');
		} else {
			setMessage('As senhas são diferentes.');
		}
	}

	function handlerHomeScreen() {
		navigate('/');
	}

	const isFieldFilleds = useMemo(() => {
		return name !== '' && email !== '' && password !== '' && confirmPassword !== '';
	}, [confirmPassword, email, name, password]);


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
					<StyledForm onSubmit={handlerUserRegistration}>
						<StyledFieldset>
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
						</StyledFieldset>

						<StyledFieldset>
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
						</StyledFieldset>

						<StyledFieldset>
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
							<StyledPasswordHint>
								As senhas devem ter pelo menos 6 caracteres.
							</StyledPasswordHint>
						</StyledFieldset>

						<StyledFieldset>
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
						</StyledFieldset>

						<MyButton
							type='submit'
							variant='primary'
							mode='square'
							disabled={!isFieldFilleds}
						>
							<Paragraph size='md'>
								Cadastrar
							</Paragraph>
						</MyButton>
					</StyledForm>
				</StyledWrapper>
			</StyledContainer>
		</StyledSection>
	);
};

export default Signup;