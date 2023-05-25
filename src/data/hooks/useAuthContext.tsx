import { AuthContext } from 'data/contexts/Auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const useAuthContext = () => {
	const { users, setUsers, authenticated, setAuthenticated, user, setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	const [loading, setLoading] = useState<boolean>(true);

	function login(email: string, password: string) {
		const auth = users.filter(item => item.email === email && item.password == password);
		if (auth.length > 0) {
			navigate('/browser');
			localStorage.setItem('@auth', JSON.stringify(auth));
			localStorage.setItem('token', JSON.stringify(Math.random() * 50).toString().slice(5));
			setAuthenticated(true);
		} else {
			alert('Email ou senha estão incorretos.');
		}
	}

	function logout() {
		setAuthenticated(false);
		localStorage.removeItem('@auth');
		localStorage.removeItem('token');
	}

	function registerUser(name: string, email: string, password: string) {
		// Aqui enviaria para API para cadastrar o usuário no banco de dados
		const emailAlreadyExists = users.some(user => user.email === email);
		const getRegistrationData = {
			name,
			email,
			password,
			profile_image: null,
			notification: Math.floor(Math.random() * 11),
			id: Math.random().toString(26).slice(2, 18)
		};

		if (emailAlreadyExists) {
			console.log('Email já cadastrado');
			return;
		}

		setUsers(prev => [...prev, getRegistrationData]);
		localStorage.setItem('@list:users', JSON.stringify([...users, getRegistrationData]));
	}


	useEffect(() => {
		const recoveredUser = localStorage.getItem('@auth');
		const token = localStorage.getItem('token');

		if (recoveredUser && token) {
			setAuthenticated(true);
			setUser(JSON.parse(recoveredUser)[0]);
		}
		setLoading(false);
	}, [setAuthenticated, setUser]);

	return {
		logout,
		login,
		registerUser,
		authenticated,
		user,
		loading,
	};
};