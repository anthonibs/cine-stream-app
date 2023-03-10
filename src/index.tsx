import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'ui/styles/GlobalStyles';

import dark from 'ui/themes/dark';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={dark} >
			<GlobalStyles />
			<AppRoutes />
		</ThemeProvider>
	</React.StrictMode>
);

