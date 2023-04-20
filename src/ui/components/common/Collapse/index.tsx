import { ReactNode, useState } from 'react';
import { Container, SubTitle, ToggleFilter } from './Collapse';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface ICollapse {
	children: ReactNode;
	title: string;
}

const Collapse = ({ children, title }: ICollapse) => {
	const [collapseOpen, setCollapseOpen] = useState(false);

	function toggleCollapse() {
		setCollapseOpen(prev => !prev);
	}

	return (
		<Container
			className={collapseOpen ? 'collapse-open' : ''}
		>
			<ToggleFilter onClick={toggleCollapse} type='button'>
				<SubTitle>{title}</SubTitle>
				<MdOutlineKeyboardArrowRight />
			</ToggleFilter>
			{children}
		</Container>
	);
};

export default Collapse;