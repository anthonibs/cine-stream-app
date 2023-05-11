
import { AuthProvider } from 'data/contexts/Auth';
import { LanguageProvider } from 'data/contexts/Language';
import { MyFavoritesProvider } from 'data/contexts/MyFavoritesList';
import AppRoutes from './AppRoutes';

const IndexRoutes = () => {
	return (
		<AuthProvider>
			<LanguageProvider>
				<MyFavoritesProvider>
					<AppRoutes />
				</MyFavoritesProvider>
			</LanguageProvider>
		</AuthProvider>
	);
};

export default IndexRoutes;