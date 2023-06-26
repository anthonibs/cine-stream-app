import { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import { StyledNavbar, StyledNavbarItem, StyledNavbarItems } from './Navigation';

import translationNav from './translation.json';

const Navigation = () => {
	const { language } = useLanguage();

	const translations = useMemo(() => {
		return translationNav.translation.find((item) => item.language === language);
	}, [language]);

	return (
		<StyledNavbar>
			<StyledNavbarItems>
				{translations?.navigation.map((translation) => (
					<StyledNavbarItem key={translation.id}>
						<NavLink end to={`browser/${translation.slug}`}>
							{translation.name}
						</NavLink>
					</StyledNavbarItem>
				))}
			</StyledNavbarItems>
		</StyledNavbar>
	);
};

export default memo(Navigation);
