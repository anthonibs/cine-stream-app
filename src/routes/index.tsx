
import { AuthProvider } from 'data/contexts/Auth';
import AppRoutes from './AppRoutes';

const IndexRoutes = () => {

	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
	);
};

export default IndexRoutes;