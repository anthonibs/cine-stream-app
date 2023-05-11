import { ReactNode, useState } from 'react';
import { Container, SubTitle, ToggleFilter } from './Accordion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface ICollapse {
	children: ReactNode;
	title: string;
	openCollapse?: boolean;
}

const Accordion = ({ children, title, openCollapse }: ICollapse) => {
	const [collapseOpen, setCollapseOpen] = useState(openCollapse);

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

export default Accordion;