import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	ConfigurationGroup,
	Container,
	NavigationGroup,
	NotificationButton,
	ProfileImage,
	UserProfile,
	CumulativeNotification,
	FormSearch
} from './Header';

import { SlPresent } from 'react-icons/sl';
import { IoNotificationsOutline, IoNotificationsOffOutline } from 'react-icons/io5';

import Logo from '../Logo';
import Navigation from './Navigation';
import Search from '../common/Search';
import { useAuthContext } from 'data/hooks/useAuthContext';


const Header = () => {

	const [isNotificationActive, setIsNotificationActive] = useState<boolean>(false);

	const { logout, user, authenticated } = useAuthContext();

	function toggleNotification() {
		setIsNotificationActive(prevState => !prevState);
	}

	function handlerResearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		console.log('Enviando Formulário de Pesquisa');
	}


	return (
		<Container >
			{/* Rotas de navegação */}
			<NavigationGroup>
				<Logo />
				{authenticated
					&& <Navigation />
				}
			</NavigationGroup>

			{/* Procurar Filmes e Séries */}
			{authenticated &&
				<ConfigurationGroup>
					{/* Pesquisar filmes e séries do catálogo */}
					<FormSearch
						action=""
						autoComplete='off'
						onSubmit={handlerResearch}>
						<Search />
					</FormSearch>


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
		</Container >
	);
};

export default Header;