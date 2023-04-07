import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarItem, NavbarItems } from './Navigation';

const Navigation = () => {
	return (
		<Navbar>
			<NavbarItems>
				<NavbarItem>
					<NavLink
						to='/browser'
						data-href='/browser'
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
						end
					>
						Início
					</NavLink>
				</NavbarItem>
				<NavbarItem>
					<NavLink
						to='/browser/films'
						data-href='/browser/films'
						caseSensitive
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						Filmes
					</NavLink>
				</NavbarItem>
				<NavbarItem>
					<NavLink
						to='/browser/series'
						data-href='/browser/series'
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						Séries
					</NavLink>
				</NavbarItem>

				<NavbarItem>
					<NavLink
						to='/browser/my-list'
						data-href='/browser/my-list'
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active' : ''
						}
					>
						Minha lista
					</NavLink>
				</NavbarItem>

			</NavbarItems>
		</Navbar >
	);
};

export default memo(Navigation);