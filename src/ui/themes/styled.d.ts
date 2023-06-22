import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		header: string;
		body: string;
		footer: string;

		font: {
			weight: {
				100: number;
				200: number;
				300: number;
				400: number;
			};
			sizes: {
				h: {
					xxl: string;
					xl: string;
					lg: string;
					md: string;
					sm: string;
					xsm: string;
					subtitle: string;
				};
				b: {
					xxlg: string;
					xlg: string;
					lg: string;
					xmd: string;
					md: string;
					sm: string;
					xsm: string;
				};
			};
			family: string;
			color: {
				100: string;
				200: string;
			};
		};

		colors: {
			main: string;
			basic: {
				100: string;
				200: string;
				300: string;
				400: string;
				500: string;
				600: string;
			};
			input: {
				100: string;
			};
		};
		team: {
			100: string;
			200: string;
		};
		skeleton: {
			body: string;
			after: string;
		};
	}
}
