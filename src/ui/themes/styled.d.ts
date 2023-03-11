import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		header: string
		body: string,
		footer: string,
		menu: string,

		font: {
			weight: {
				100: number,
				200: number,
				300: number,
				400: number,
			},
			family: string,
			color: {
				100: string,
				200: string
			}
		}

		colors: {
			main: string,
			basic: {
				100: string,
				200: string,
				300: string,
				400: string
			},
			mainHover: string
			hover: {
				200: string,
			}
		}
	}
}