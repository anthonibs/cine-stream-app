import { LanguageProvider } from 'data/contexts/Language';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '.';
import { render, renderHook, screen } from '@testing-library/react';
import useLanguage from 'data/hooks/useLanguage';
import { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import dark from 'ui/styles/themes/dark';

interface NotFoundProps {
	children: ReactNode;
}

describe('Must render component <NotFound/>', () => {
	it('Number max of languages is two', async () => {
		const wrapper = ({ children }: NotFoundProps) => (
			<LanguageProvider>{children}</LanguageProvider>
		);

		const { result } = renderHook(() => useLanguage(), { wrapper });

		expect(result.current.languages).toHaveLength(2);
	});

	it('Render NotFound', () => {
		const Provider = () => (
			<ThemeProvider theme={dark}>
				<LanguageProvider>
					<MemoryRouter>
						<NotFound />
					</MemoryRouter>
				</LanguageProvider>
			</ThemeProvider>
		);

		render(<Provider />);

		const notFound = screen.getByText('Página não encontrada!');
		expect(notFound).toBeInTheDocument();

		const goBack = screen.getByRole('button');
		expect(goBack).toBeInTheDocument();
	});

	it('Rendering the site in the standard pt-BR language', async () => {
		const wrapper = ({ children }: NotFoundProps) => (
			<LanguageProvider>{children}</LanguageProvider>
		);

		const { result } = renderHook(() => useLanguage(), { wrapper });

		expect(result.current.language).toBe('pt-BR');
	});
});
