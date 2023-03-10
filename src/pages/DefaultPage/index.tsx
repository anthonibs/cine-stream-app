import { Outlet } from 'react-router-dom';
import Header from 'ui/components/Header';

const DefaultPage = () => {
	return (
		<>
			<Header />
			<main>
				{<Outlet />}
			</main>
		</>
	);
};

export default DefaultPage;