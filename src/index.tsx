import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'ui/styles/GlobalStyles';

import AppLogin from 'routes/AppLogin';
import AppRoutes from 'routes/AppRoutes';

import dark from 'ui/themes/dark';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={dark} >
			<GlobalStyles />
			<AppLogin />
			<AppRoutes />
		</ThemeProvider>
	</React.StrictMode>
);

