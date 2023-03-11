import { Outlet } from 'react-router-dom';
import Footer from 'ui/components/Footer';
import Header from 'ui/components/Header';

const DefaultPage = () => {
	return (
		<>
			<Header />
			<main>
				{<Outlet />}
			</main>

			<Footer />
		</>
	);
};

export default DefaultPage;