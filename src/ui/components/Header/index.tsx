
import { ConfigurationGroup, Container, NavigationGroup, NotificationButton, ProfileImage, UserProfile, CumulativeNotification } from './Header';

import { SlPresent } from 'react-icons/sl';

import { IoNotificationsOutline, IoNotificationsOffOutline } from 'react-icons/io5';

import Logo from '../Logo';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Search from '../common/Search';

const Header = () => {

	const [isNotificationActive, setIsNotificationActive] = useState<boolean>(false);

	const notification = 12;

	function toggleNotification() {
		console.log('Notificação: ', isNotificationActive);
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
				<Navigation />
			</NavigationGroup>

			{/* Procurar Filmes e Séries */}
			<ConfigurationGroup >
				{/* Pesquisar filmes e séries do catálogo */}
				<form
					action=""
					autoComplete='off'
					onSubmit={handlerResearch}>
					<Search />
				</form>

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

					{!isNotificationActive && notification > 0
						&&
						<CumulativeNotification>
							{notification}
						</CumulativeNotification>
					}
				</NotificationButton>

				<UserProfile>
					<ProfileImage
						src="https://api.lorem.space/image/face?w=150&h=150"
						alt="Imagem do perfil do usuário."
					/>
				</UserProfile>
			</ConfigurationGroup>
		</Container>
	);
};

export default Header;