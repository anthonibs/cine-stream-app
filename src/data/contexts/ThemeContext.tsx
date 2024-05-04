import { ReactNode, createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from 'ui/styles/themes/dark';
import light from 'ui/styles/themes/light';

interface IThemeProvider {
	children: ReactNode;
}

interface ITheme {
	toggleTheme: () => void;
}

export const ThemeCustomContext = createContext<ITheme>({} as ITheme);
ThemeCustomContext.displayName = 'Toggle Theme';

export const ThemeCustomProvider = ({ children }: IThemeProvider) => {
	const [theme, setTheme] = useState(() => {
		const isSavedTheme = localStorage.getItem('@cine-stream:theme') || dark;

		if (isSavedTheme) {
			return isSavedTheme !== 'dark' ? dark : light;
		}

		return dark;
	});

	const toggleTheme = () => {
		setTheme((theme) => (theme.theme !== 'dark' ? dark : light));
		localStorage.setItem('@cine-stream:theme', theme.theme);
	};

	return (
		<ThemeCustomContext.Provider value={{ toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeCustomContext.Provider>
	);
};
