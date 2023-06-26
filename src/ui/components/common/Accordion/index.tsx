import { ReactNode, useState } from 'react';

import * as S from './Accordion';

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
		<S.Container className={collapseOpen ? 'collapse-open' : ''}>
			<S.ToggleFilter onClick={toggleCollapse} type='button'>
				<S.SubTitle>{title}</S.SubTitle>
				<MdOutlineKeyboardArrowRight />
			</S.ToggleFilter>
			{children}
		</S.Container>
	);
};

export default Accordion;
