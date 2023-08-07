import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeCustomProvider } from 'data/contexts/ThemeContext';
import GlobalStyles from 'ui/styles/GlobalStyles';

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
		<ThemeCustomProvider>
			<GlobalStyles />
			<IndexRoutes />
		</ThemeCustomProvider>
	</React.StrictMode>
);
