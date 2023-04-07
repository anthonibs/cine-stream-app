// Hooks React e React Router
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks personalizados
import useLanguage from 'data/hooks/useLanguage';
import { useAuthContext } from 'data/hooks/useAuthContext';

// Ícones de terceiros
import { SlPresent } from 'react-icons/sl';
import { IoNotificationsOutline, IoNotificationsOffOutline } from 'react-icons/io5';

// Estilos styled-components personalizados
import {
	ConfigurationGroup,
	Container,
	NavigationGroup,
	NotificationButton,
	ProfileImage,
	UserProfile,
	CumulativeNotification,
	FormSearch,
	SelectedLanguage,
	MenuMobile,
	ControlProfile,
	NavigateMenu,
	MenuMobileBackground
} from './Header';

// Components personalizados
import Logo from '../Logo';
import Navigation from './Navigation';
import Search from '../common/Search';
import Menu from '../common/Menu';

const Header = () => {
	const { logout, user, authenticated } = useAuthContext();
	const { language, languages, handlerLanguage } = useLanguage();

	const [isNotificationActive, setIsNotificationActive] = useState(false);
	const [open, setOpen] = useState(false);

	function toggleNotification() {
		setIsNotificationActive(prevState => !prevState);
	}

	function handlerResearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log('Enviando Formulário de Pesquisa');
	}

	function handlerSignout() {
		logout();
	}

	function toggleNavigateMenu() {
		setOpen(prev => !prev);
	}

	const getScreenSize = document.documentElement.clientWidth;
	const screenSizeIsBigger = getScreenSize >= 968;


	return (
		<>
			<Container>
				{/* Botão menu hamburger */}
				{authenticated && !screenSizeIsBigger
					&& <Menu open={open} setOpen={setOpen} />
				}

				{/* Rotas de navegação */}
				<NavigationGroup>
					<Logo />
					{authenticated && screenSizeIsBigger
						&& <Navigation />
					}
				</NavigationGroup>

				{/* Procurar Filmes e Séries */}
				{authenticated && screenSizeIsBigger
					&& <ConfigurationGroup>
						{/* Pesquisar filmes e séries do catálogo */}
						<FormSearch
							action=""
							autoComplete='off'
							onSubmit={handlerResearch}>
							<Search />
						</FormSearch>

						<SelectedLanguage
							defaultValue={language}
							onChange={value => handlerLanguage(value)}
						>
							{languages.map(language => (<option
								key={language.code}
								value={language.code}
							>
								{language.name}
							</option>
							))}
						</SelectedLanguage>


						<Link to={'#'}>
							<SlPresent className='icons-configuration' />
						</Link>

						{/* Desabilita Notificações de novas séries e filmes */}
						<NotificationButton
							onClick={toggleNotification}
						>
							{!isNotificationActive
								? <IoNotificationsOutline className='icons-configuration' />
								: <IoNotificationsOffOutline className='icons-configuration' />
							}

							{!isNotificationActive && user?.notification > 0
								&&
								<CumulativeNotification>
									{user?.notification}
								</CumulativeNotification>
							}
						</NotificationButton>

						<UserProfile>
							<ProfileImage
								src={`${user?.profile_image}`}
								alt={`Sua de perfil do usuário: ${user?.name}`}
							/>
						</UserProfile>
					</ConfigurationGroup>
				}
			</Container>


			{/* Abre o menu de navegação para versões menores que 968 pixels */}
			{authenticated && !screenSizeIsBigger
				&&
				<MenuMobile open={open}>
					<MenuMobileBackground onClick={toggleNavigateMenu} className={open ? 'active-menu' : ''} />

					<NavigateMenu className={open ? 'active-navigate-menu' : ''}>
						<ControlProfile>
							<UserProfile>
								<ProfileImage
									src={`${user?.profile_image}`}
									alt={`Sua de perfil do usuário: ${user?.name}`}
								/>
							</UserProfile>

							<Link to={'#'} data-href='your-account'>Conta</Link>
							<Link to={'#'} data-href="/" onClick={handlerSignout}>Sair da CineStream</Link>
						</ControlProfile>

						<Navigation />
					</NavigateMenu>
				</MenuMobile>}
		</>
	);
};

export default Header;