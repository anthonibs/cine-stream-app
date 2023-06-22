// Hooks React e React Router
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks personalizados
import { useAuthContext } from 'data/hooks/useAuthContext';

// Ícones de terceiros
import { IoNotificationsOutline, IoNotificationsOffOutline } from 'react-icons/io5';

// Estilos styled-components personalizados
import {
	StyledContainer,
	StyledNavigationGroup,
	StyledWrapper,
	StyledFormSearch,
	StyledToggleNotification,
	StyledAmountNotification,
	StyledSettings,
	StyledImageProfile,
	StyledProfile,
	StyledContainerProfile,
	StyledMenuNavigate,
	StyledBackgroundModal,
	StyledContainerMenu,
} from './Header';

// Components personalizados
import Logo from '../Logo';
import Navigation from './Navigation';
import Search from '../common/Search';
import Menu from '../common/Menu';

const Header = () => {
	const { logout, user, authenticated } = useAuthContext();

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

	const getScreenSize = document.documentElement.clientWidth;
	const screenSizeIsBigger = getScreenSize >= 968;

	return (
		<>
			<StyledContainer>
				{/* Exibira o Menu para dispositivos com telas menores que 968 pixels */}
				{authenticated && !screenSizeIsBigger && <Menu open={open} setOpen={setOpen} />}

				{/* Rotas de navegação */}
				<StyledNavigationGroup>
					<Logo />
					{authenticated && screenSizeIsBigger && <Navigation />}
				</StyledNavigationGroup>

				{authenticated && screenSizeIsBigger && (
					<StyledWrapper>
						{/* Pesquisar filmes e séries do catálogo */}
						<StyledFormSearch autoComplete='off' onSubmit={handlerResearch}>
							<Search />
						</StyledFormSearch>

						{/* Desabilita Notificações de novas séries e filmes */}
						<StyledToggleNotification onClick={toggleNotification}>
							{!isNotificationActive ? (
								<IoNotificationsOutline className='icons-configuration' />
							) : (
								<IoNotificationsOffOutline className='icons-configuration' />
							)}

							{!isNotificationActive && user?.notification > 0 && (
								<StyledAmountNotification>{user?.notification}</StyledAmountNotification>
							)}
						</StyledToggleNotification>

						<StyledSettings>
							<StyledProfile>
								<StyledImageProfile
									src={
										user.profile_image === null
											? 'http://placeimg.com/640/360/any'
											: `${user?.profile_image}`
									}
									alt={`Sua de perfil do usuário: ${user?.name}`}
								/>
							</StyledProfile>

							<div className='menu-settings'>
								<Link to={'#'}>Conta</Link>

								<Link to={'/signin'} data-href='/signin' onClick={logout}>
									Sair da CineStream
								</Link>
							</div>
						</StyledSettings>
					</StyledWrapper>
				)}
			</StyledContainer>

			{/* Abre o menu de navegação para versões menores que 968 pixels */}
			{authenticated && !screenSizeIsBigger && (
				<StyledContainerMenu open={open}>
					<StyledBackgroundModal
						onClick={toggleNavigateMenu}
						className={open ? 'active-menu' : ''}
					/>
					<StyledMenuNavigate className={open ? 'active-navigate-menu' : ''}>
						<StyledContainerProfile>
							<StyledProfile>
								<StyledImageProfile
									src={
										user.profile_image === null
											? 'http://placeimg.com/640/360/any'
											: `${user?.profile_image}`
									}
									alt={`Sua de perfil do usuário: ${user?.name}`}
								/>
							</StyledProfile>

							<Link to={'#'} data-href='your-account'>
								Conta
							</Link>

							<Link to={'/signin'} data-href='/signin' onClick={logout}>
								Sair da CineStream
							</Link>
						</StyledContainerProfile>
						<Navigation />
					</StyledMenuNavigate>
				</StyledContainerMenu>
			)}
		</>
	);
};

export default Header;
