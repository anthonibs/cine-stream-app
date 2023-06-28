import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from 'data/contexts/Auth';

import {
	auth,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	updateProfile,
} from 'data/firebaseConfig';

import { toast } from 'react-toastify';

const useAuthContext = () => {
	const {
		authenticated,
		setAuthenticated,
		userAuthenticated,
		setUserAuthenticated,
		loading,
		setLoading,
	} = useContext(AuthContext);
	const navigate = useNavigate();

	function loginUser(email: string, password: string): void {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				const userObj = {
					name: user.displayName,
					email: user.email,
					uid: user.uid,
					path_image: user.photoURL,
				};

				toast.success(`Bem vindo! ${user.displayName || user.email}.`);

				user.getIdTokenResult(true).then((item) => {
					sessionStorage.setItem('@auth:authorized', JSON.stringify(!!item.token));
					sessionStorage.setItem('@auth:userAuthenticated', JSON.stringify(userObj));

					navigate('/browser');

					setAuthenticated(!!item.token);
					setUserAuthenticated(userObj);
				});
			})
			.catch((error) => {
				toast.error('Sua senha ou email estão incorretos. Confira-a.');
				console.log(
					`Error checking Auth Firebase, code: ${error.code}, message: ${error.message}.`
				);
			});
	}

	function logoutUser(): void {
		auth.signOut();
		setAuthenticated(false);
		setUserAuthenticated(null);
		sessionStorage.removeItem('@auth:authorized');
		sessionStorage.removeItem('@auth:userAuthenticated');
	}

	function createUserAccount(name: string, email: string, password: string): void {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				navigate('/signin');

				updateProfile(user, {
					displayName: name,
				});

				toast.success('Usuário cadastrado com sucesso!');
			})
			.then(() => {
				auth.signOut();
			})
			.catch((error) => {
				console.log(`Error code: ${error.code}, message: ${error.message}.`);
				toast.error('Esse email já está cadastrado ou é um email inválido.');
			});
	}

	function recoverEmailPassword(email: string): void {
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toast.success(`Sua nova senha foi enviado para o email: ${email}`);
			})
			.catch((error) => {
				console.log(error);
				toast.error('Erro ao recuperar senha, verificar se o email está correto.');
			});
	}

	useEffect(() => {
		setLoading(false);
	}, [setLoading]);

	return {
		authenticated,
		userAuthenticated,
		loading,
		logoutUser,
		loginUser,
		createUserAccount,
		recoverEmailPassword,
	};
};

export default useAuthContext;
