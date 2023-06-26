// Hooks React e React Router
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks personalizados
import useAuthContext from 'data/hooks/useAuthContext';
import useRizesScreen from 'data/hooks/useRizesScreen';

// Ícones de terceiros
import { IoNotificationsOutline, IoNotificationsOffOutline } from 'react-icons/io5';

// Estilos styled-components personalizados
import * as S from './Header';

// Components personalizados
import Logo from '../Logo';
import Navigation from './Navigation';
import Search from '../common/Search';
import Menu from '../common/Menu';

const Header = () => {
	const { logout, user, authenticated } = useAuthContext();
	const { resizeScreen } = useRizesScreen();

	const [isNotificationActive, setIsNotificationActive] = useState(false);
	const [open, setOpen] = useState(false);

	function toggleNotification() {
		setIsNotificationActive((prevState) => !prevState);
	}

	function handlerResearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	}

	function toggleNavigateMenu() {
		setOpen((prev) => !prev);
	}

	const screenSizeIsBigger = resizeScreen >= 968;

	return (
		<>
			<S.Container>
				{/* Exibira o Menu para dispositivos com telas menores que 968 pixels */}
				{authenticated && !screenSizeIsBigger && <Menu open={open} setOpen={setOpen} />}

				{/* Rotas de navegação */}
				<S.NavigationGroup>
					<Link to='/browser'>
						<Logo />
					</Link>
					{authenticated && screenSizeIsBigger && <Navigation />}
				</S.NavigationGroup>

				{authenticated && screenSizeIsBigger && (
					<S.Wrapper>
						{/* Pesquisar filmes e séries do catálogo */}
						<form autoComplete='off' onSubmit={handlerResearch}>
							<Search />
						</form>

						{/* Desabilita Notificações de novas séries e filmes */}
						<S.ToggleNotification onClick={toggleNotification}>
							{!isNotificationActive ? (
								<IoNotificationsOutline className='icons-configuration' />
							) : (
								<IoNotificationsOffOutline className='icons-configuration' />
							)}

							{!isNotificationActive && user?.notification > 0 && (
								<S.AmountNotification>{user?.notification}</S.AmountNotification>
							)}
						</S.ToggleNotification>

						<S.Settings>
							<S.Profile>
								<S.ImageProfile
									src={
										user.profile_image === null
											? 'http://placeimg.com/640/360/any'
											: `${user?.profile_image}`
									}
									alt={`Sua de perfil do usuário: ${user?.name}`}
								/>
							</S.Profile>

							<div className='menu-settings'>
								<Link to={'#'}>Conta</Link>

								<Link to={'/signin'} data-href='/signin' onClick={logout}>
									Sair da CineStream
								</Link>
							</div>
						</S.Settings>
					</S.Wrapper>
				)}
			</S.Container>

			{/* Abre o menu de navegação para versões menores que 968 pixels */}
			{authenticated && !screenSizeIsBigger && (
				<S.ContainerMenu open={open}>
					<S.BackgroundModal onClick={toggleNavigateMenu} className={open ? 'active-menu' : ''} />
					<S.MenuNavigate className={open ? 'active-navigate-menu' : ''}>
						<S.ContainerProfile>
							<S.Profile>
								<S.ImageProfile
									src={
										user.profile_image === null
											? 'http://placeimg.com/640/360/any'
											: `${user?.profile_image}`
									}
									alt={`Sua de perfil do usuário: ${user?.name}`}
								/>
							</S.Profile>

							<Link to={'#'} data-href='your-account'>
								Conta
							</Link>

							<Link to={'/signin'} data-href='/signin' onClick={logout}>
								Sair da CineStream
							</Link>
						</S.ContainerProfile>
						<Navigation />
					</S.MenuNavigate>
				</S.ContainerMenu>
			)}
		</>
	);
};

export default Header;
