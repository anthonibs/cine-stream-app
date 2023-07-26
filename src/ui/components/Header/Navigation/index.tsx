import { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import * as S from './styles';

import translationNav from './translation.json';

const Navigation = () => {
	const { language } = useLanguage();

	const translations = useMemo(() => {
		return translationNav.translation.find((item) => item.language === language);
	}, [language]);

	return (
		<S.Navbar>
			<S.NavbarItems>
				{translations?.navigation.map((translation) => (
					<S.NavbarItem key={translation.id}>
						<NavLink end to={`browser/${translation.slug}`}>
							{translation.name}
						</NavLink>
					</S.NavbarItem>
				))}
			</S.NavbarItems>
		</S.Navbar>
	);
};

export default memo(Navigation);
