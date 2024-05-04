import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { RenderOptions, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { AuthProvider } from 'data/contexts/Auth';
import { LanguageProvider } from 'data/contexts/Language';
import { MyFavoritesProvider } from 'data/contexts/MyFavoritesList';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'ui/styles/GlobalStyles';
import dark from 'ui/styles/themes/dark';

interface ProvidersProps {
	children: ReactElement;
}

const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider theme={dark}>
			<GlobalStyles />
			<AuthProvider>
				<LanguageProvider>
					<MyFavoritesProvider>
						<BrowserRouter>{children}</BrowserRouter>
					</MyFavoritesProvider>
				</LanguageProvider>
			</AuthProvider>
		</ThemeProvider>
	);
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
	render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
