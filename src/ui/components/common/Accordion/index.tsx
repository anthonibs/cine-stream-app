import { ReactNode, useState } from 'react';

import { StyledContainer, StyledSubTitle, StyledToggleFilter } from './Accordion';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

interface ICollapse {
	children: ReactNode;
	title: string;
	openCollapse?: boolean;
}

const Accordion = ({ children, title, openCollapse }: ICollapse) => {
	const [collapseOpen, setCollapseOpen] = useState(openCollapse);

	function toggleCollapse() {
		setCollapseOpen((prev) => !prev);
	}

	return (
		<StyledContainer className={collapseOpen ? 'collapse-open' : ''}>
			<StyledToggleFilter onClick={toggleCollapse} type='button'>
				<StyledSubTitle>{title}</StyledSubTitle>
				<MdOutlineKeyboardArrowRight />
			</StyledToggleFilter>
			{children}
		</StyledContainer>
	);
};

export default Accordion;
