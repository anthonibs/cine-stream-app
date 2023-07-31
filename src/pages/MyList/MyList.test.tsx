import { fireEvent, render, screen } from 'data/utils/test-utils';
import MyList from '.';

describe('Must render <MyList/>', () => {
	it('Must render component MyList', () => {
		render(<MyList />);

		const snapshotMyList = screen.getByTestId('mylist-styles');
		expect(snapshotMyList).toMatchSnapshot('Styles');
	});

	it('Must render page heading level one', () => {
		render(<MyList />);

		const title = screen.getByRole('heading', { level: 1 });
		expect(title).toBeInTheDocument();
	});

	it('Must render the title in pt-BR', () => {
		render(<MyList />);

		const myList = screen.getByText('Minha lista');
		expect(myList).toBeInTheDocument();
	});

	it('Must call list select button', () => {
		render(<MyList />);
		const button = screen.getByTestId('selected-mylist');
		const list = screen.getByTestId('selected');

		expect(button).toBeInTheDocument();
		expect(list).toBeInTheDocument();

		expect(list).not.toBeVisible();

		fireEvent.click(button);

		expect(list).toHaveAttribute('aria-hidden', 'false');
		expect(list).toBeVisible();
	});
});
