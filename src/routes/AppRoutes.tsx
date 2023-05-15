import { ReactElement } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { useAuthContext } from 'data/hooks/useAuthContext';

import DefaultPage from 'pages/DefaultPage';
import DefaultSafeRoutes from 'pages/DefaultSafeRoutes';

import Films from 'pages/Films';
import MovieDetails from 'pages/Films/MovieDetails';
import Home from 'pages/Home';
import MyList from 'pages/MyList';
import Series from 'pages/Series';
import TvDetails from 'pages/Series/TvDetails';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import Start from 'pages/Start';


import ScrollRestoration from 'ui/components/ScrollRestoration';
import NotFound from 'pages/NotFound';
import PeopleDetails from 'pages/PeopleDetails';
import Cast from 'pages/Cast';
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
			<ScrollRestoration />
			<Routes >
				<Route path='/' element={<DefaultPage />}>
					<Route index element={<Start />} />
					<Route path='/signin' element={<Signin />} />
					<Route path='/signup' element={<Signup />} />

					{/* Rotas Privadas */}
					<Route path='/browser' element={<Private><DefaultSafeRoutes /></Private>}>
						<Route index element={<Home />} />
						<Route path='films' element={<Films />} />
						<Route path='films/:slug' element={<MovieDetails />} />

						<Route path='series' element={<Series />} />
						<Route path='series/:slug' element={<TvDetails />} />

						<Route path='my-list' element={<MyList />} />
						<Route path='people/:id' element={<PeopleDetails />} />
						<Route path='cast/:id'  element={<Cast />} />
						<Route path='*' element={<NotFound />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;