
import { useAuthContext } from 'data/hooks/useAuthContext';

import DefaultPage from 'pages/DefaultPage';
import Films from 'pages/Films';
import Home from 'pages/Home';
import MyList from 'pages/MyList';
import Series from 'pages/Series';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import Start from 'pages/Start';

import { ReactElement } from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

interface IChildrenProps {
	children: ReactElement
}

const AppRoutes = () => {

	// Rotas privadas caso o usuário não for autenticado pelo login, o usuário sempre fica sendo redirecionado para página de login
	const Private = ({ children }: IChildrenProps) => {
		const { authenticated, loading } = useAuthContext();

		if (loading) {
			return <div>Carregando</div>;
		}

		if (!authenticated) {
			return <Navigate to="/signin" />;
		}

		return children;
	};

	return (
		<BrowserRouter>
			<Routes >
				<Route path='/' element={<DefaultPage />}>
					<Route index element={<Start />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />

					{/* Rotas Privadas */}
					<Route path='/browser' element={<Private><Home /></Private>} />
					<Route path='/browser/films' element={<Private><Films /></Private>} />
					<Route path='/browser/series' element={<Private><Series /></Private>} />
					<Route path='/browser/my-list' element={<Private><MyList /></Private>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;