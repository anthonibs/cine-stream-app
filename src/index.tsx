import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'ui/styles/GlobalStyles';
import dark from 'ui/styles/themes/dark';

// Estilo Padrão da dependência
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-loading-skeleton/dist/skeleton.css';

import IndexRoutes from 'routes';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<ThemeProvider theme={dark}>
			<GlobalStyles />
			<IndexRoutes />
		</ThemeProvider>
	</React.StrictMode>
);
