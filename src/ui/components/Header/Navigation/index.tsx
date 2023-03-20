import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarItem, NavbarItems } from './Navigation';

const Navigation = () => {

	return (
		<Navbar>
			<NavbarItems>
				<NavbarItem>
					<NavLink to='/browser' end className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}>
						Início
					</NavLink>
				</NavbarItem>
				<NavbarItem>
					<NavLink to='/browser/films' caseSensitive className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}>
						Filmes
					</NavLink>
				</NavbarItem>
				<NavbarItem>
					<NavLink to='/browser/series' className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}>
						Séries
					</NavLink>
				</NavbarItem>

				<NavbarItem>
					<NavLink to='/browser/my-list' className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}>
						Minha lista
					</NavLink>
				</NavbarItem>

			</NavbarItems>
		</Navbar >
	);
};

export default memo(Navigation);