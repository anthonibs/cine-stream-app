// Hooks React e React Router
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks personalizados
import useAuthContext from 'data/hooks/useAuthContext';
import useRizesScreen from 'data/hooks/useRizesScreen';

// Estilos styled-components personalizados
import * as S from './styles';

// Components personalizados
import Brand from '../common/Brand';
import Navigation from './Navigation';
import Search from '../common/Search';
import Menu from '../common/Menu';
import Profile from './Profile';
import NavMobile from './NavMobile';
import Notification from './Notification';

const Header = () => {
	const { authenticated } = useAuthContext();
	const { resizeScreen } = useRizesScreen();

	const [open, setOpen] = useState(false);

	function handlerResearch(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
	}

	const screenSizeIsBigger = resizeScreen >= 956;

	return (
		<>
			<S.Container>
				{/* Exibira o Menu para dispositivos com telas menores que 956 pixels */}
				{authenticated && !screenSizeIsBigger && <Menu open={open} setOpen={setOpen} />}

				{/* Rotas de navegação */}
				<S.NavigationGroup>
					<Link to='/browser'>
						<Brand />
					</Link>

					{authenticated && screenSizeIsBigger && <Navigation />}
				</S.NavigationGroup>

				{authenticated && screenSizeIsBigger && (
					<S.Wrapper>
						{/* Pesquisar filmes e séries do catálogo */}
						<form autoComplete='off' onSubmit={handlerResearch}>
							<Search />
						</form>

						<Notification />
						<Profile />
					</S.Wrapper>
				)}
			</S.Container>

			{/* Abre o menu de navegação para versões menores que 956 pixels */}
			{authenticated && !screenSizeIsBigger && <NavMobile open={open} setOpen={setOpen} />}
		</>
	);
};

export default Header;
