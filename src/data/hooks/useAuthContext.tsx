import { AuthContext } from 'data/contexts/Auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const useAuthContext = () => {

	const { users, authenticated, setAuthenticated, user, setUser } = useContext(AuthContext);

	const [loading, setLoading] = useState<boolean>(true);

	const navigate = useNavigate();

	function login(email: string, password: string) {
		const auth = users.filter(item => item.email === email && item.password == password);
		if (auth.length > 0) {
			navigate('/browser');
			localStorage.setItem('@auth', JSON.stringify(auth));
			localStorage.setItem('token', JSON.stringify(Math.random() * 50).toString().slice(5));
			setAuthenticated(true);
		}
	}

	function logout() {
		navigate('/');
		localStorage.removeItem('@auth');
		localStorage.removeItem('token');
		setAuthenticated(false);
	}


	useEffect(() => {
		const recoveredUser = localStorage.getItem('@auth');
		const token = localStorage.getItem('token');

		if (recoveredUser && token) {
			setAuthenticated(true);
			setUser(...JSON.parse(recoveredUser));
		}

		setLoading(false);
	}, [setAuthenticated, setUser]);


	return {
		logout,
		login,
		authenticated,
		user,
		loading
	};
};