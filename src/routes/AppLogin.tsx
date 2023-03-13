import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DefaultPage from 'pages/DefaultPage';
import Signup from 'pages/Signup';

const AppLogin = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DefaultPage />}>
					<Route index element={<Signup />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppLogin;