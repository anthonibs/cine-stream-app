import { memo, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import useLanguage from 'data/hooks/useLanguage';

import * as S from './styles';

import translationNav from './translation.json';
import useAuthContext from 'data/hooks/useAuthContext';

const Navigation = () => {
	const { language } = useLanguage();
	const { authenticated } = useAuthContext();

	const translations = useMemo(() => {
		return translationNav.translation.find((item) => item.iso_code === language);
	}, [language]);

	return (
		<S.Navbar>
			<S.NavbarItems>
				{translations?.navigation.map((navigation) => {
					const { id, name, slug, private: isPrivate } = navigation;

					// Verifica se o item de navegação é público ou se é privado e o usuário está autenticado
					const shouldRenderLink = !isPrivate || (isPrivate && authenticated);

					return shouldRenderLink ? (
						<S.NavbarItem key={id}>
							<NavLink end to={`browser/${slug}`}>
								{name}
							</NavLink>
						</S.NavbarItem>
					) : null;
				})}
			</S.NavbarItems>
		</S.Navbar>
	);
};

export default memo(Navigation);
