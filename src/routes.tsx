import DefaultPage from 'pages/DefaultPage';
import Films from 'pages/Films';
import Home from 'pages/Home';
import MyList from 'pages/MyList';
import Series from 'pages/Series';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DefaultPage />}>
					<Route index element={<Home />} />
					<Route path='/films' element={<Films />} />
					<Route path='/series' element={<Series />} />
					<Route path='/my-list' element={<MyList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;