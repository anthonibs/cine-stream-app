import { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarItem, NavbarItems } from './Navigation';

import useLanguage from 'data/hooks/useLanguage';
import translationNav from './translation.json';

const Navigation = () => {
	const { language } = useLanguage();
	const translations = useMemo(() => {
		return translationNav.translation.find(item => item.language === language);
	}, [language]);

	return (
		<Navbar>
			<NavbarItems>
				{translations?.navigation.map(translation => (
					<NavbarItem key={translation.id}>
						<NavLink
							to={`browser/${translation.slug}`}
							className={({ isActive, isPending }) =>
								isPending ? 'pending' : isActive ? 'active' : ''
							}
							end
						>
							{translation.name}
						</NavLink>
					</NavbarItem>
				))}
			</NavbarItems>
		</Navbar >
	);
};

export default memo(Navigation);