import { ReactElement, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthContext } from 'data/hooks/useAuthContext';

import Spinner from 'ui/components/common/Spinner';
import ScrollRestoration from 'ui/components/ScrollRestoration';

import DefaultPage from 'pages/DefaultPage';
import DefaultSafeRoutes from 'pages/DefaultSafeRoutes';

const Start = lazy(() => import('pages/Start'));
const Signup = lazy(() => import('pages/Signup'));
const Films = lazy(() => import('pages/Films'));
const MovieDetails = lazy(() => import('pages/Films/MovieDetails'));
const Home = lazy(() => import('pages/Home'));
const MyList = lazy(() => import('pages/MyList'));
const Series = lazy(() => import('pages/Series'));
const TvDetails = lazy(() => import('pages/Series/TvDetails'));
const Signin = lazy(() => import('pages/Signin'));
const NotFound = lazy(() => import('pages/NotFound'));
const PeopleDetails = lazy(() => import('pages/PeopleDetails'));
const CastFilms = lazy(() => import('pages/Films/CastFilms'));
const CastSeries = lazy(() => import('pages/Series/CastSeries'));

interface IChildrenProps {
	children: ReactElement;
}

const StyledContainerSpinner = styled.div`
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	position: fixed;
	width: 100%;
	z-index: 500;
`;

const AppRoutes = () => {
	// Rotas privadas caso o usuário não for autenticado pelo login, o usuário sempre fica sendo redirecionado para página de login
	const Private = ({ children }: IChildrenProps) => {
		const { authenticated, loading } = useAuthContext();

		if (loading) {
			return (
				<StyledContainerSpinner>
					<Spinner scale={1} />
				</StyledContainerSpinner>
			);
		}

		if (!authenticated) {
			return <Navigate to='/signin' />;
		}

		return children;
	};

	return (
		<Suspense
			fallback={
				<StyledContainerSpinner>
					<Spinner scale={1} />
				</StyledContainerSpinner>
			}
		>
			<BrowserRouter>
				<ScrollRestoration />
				<Routes>
					<Route path='/' element={<DefaultPage />}>
						<Route index element={<Start />} />
						<Route path='/signin' element={<Signin />} />
						<Route path='/signup' element={<Signup />} />
						{/* Rotas Privadas */}
						<Route
							path='/browser'
							element={
								<Private>
									<DefaultSafeRoutes />
								</Private>
							}
						>
							<Route index element={<Home />} />
							<Route path='films' element={<Films />} />
							<Route path='films/:slug' element={<MovieDetails />} />
							<Route path='films/cast/:id' element={<CastFilms />} />

							<Route path='series' element={<Series />} />
							<Route path='series/:slug' element={<TvDetails />} />
							<Route path='series/cast/:id' element={<CastSeries />} />

							<Route path='my-list' element={<MyList />} />
							<Route path='people/:id' element={<PeopleDetails />} />
							<Route path='*' element={<NotFound />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
};

export default AppRoutes;
