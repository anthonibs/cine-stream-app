
import { AuthProvider } from 'data/contexts/Auth';
import { MyFavoritesProvider } from 'data/contexts/MyFavoritesList';
import AppRoutes from './AppRoutes';

const IndexRoutes = () => {

	return (
		<AuthProvider>
			<MyFavoritesProvider>
				<AppRoutes />
			</MyFavoritesProvider>
		</AuthProvider>
	);
};

export default IndexRoutes;