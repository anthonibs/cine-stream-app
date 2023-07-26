import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Logo from '.';

describe('Render component <Logo/>', () => {
	it('The alt attribute is present in the img tag', () => {
		render(<Logo />);
		const logo = screen.getByRole('img');

		expect(logo).toBeInTheDocument();

		expect(logo).toHaveAttribute('alt', 'Logo oficial da CineStream');
	});

	it('Lazy loading is present', () => {
		render(<Logo />);
		const logo = screen.getByRole('img');

		expect(logo).toHaveAttribute('loading', 'lazy');
		expect(logo).toHaveAttribute('decoding', 'async');
	});

	it('Styles have not changed', () => {
		render(<Logo />);

		const logo = screen.getByRole('img');
		expect(logo).toMatchSnapshot('Styles');
	});
});
