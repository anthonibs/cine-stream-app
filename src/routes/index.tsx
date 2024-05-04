import { AuthProvider } from 'data/contexts/Auth';
import { LanguageProvider } from 'data/contexts/Language';
import { MyFavoritesProvider } from 'data/contexts/MyFavoritesList';

import AppRoutes from './AppRoutes';
import ErrorBoundary from 'data/utils/ErrorBoundary';

const IndexRoutes = () => {
	return (
		<ErrorBoundary>
			<AuthProvider>
				<LanguageProvider>
					<MyFavoritesProvider>
						<AppRoutes />
					</MyFavoritesProvider>
				</LanguageProvider>
			</AuthProvider>
		</ErrorBoundary>
	);
};

export default IndexRoutes;
