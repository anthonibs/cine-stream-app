import { Link } from 'react-router-dom';

import useAuthContext from 'data/hooks/useAuthContext';

import * as S from './styles';
import Avatar from '../Avatar';
import Notification from '../Notification';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Profile = () => {
	const { logoutUser, userAuthenticated, authenticated } = useAuthContext();

	if (!authenticated) {
		return (
			<div className='sign-in-up'>
				<HiOutlineUserCircle />
				<div>
					<p>
						Faça <Link to='/signin'>LOGIN</Link>
						<span>ou</span>
					</p>

					<p>
						crie seu <Link to='/signup'>CADASTRO</Link>
					</p>
				</div>
			</div>
		);
	}

	return (
		authenticated && (
			<>
				<Notification />
				<S.Settings>
					<Avatar authenticated={userAuthenticated} />

					<div className='menu-settings'>
						<Link to={'#'}>Conta</Link>

						<Link to={'#'} onClick={logoutUser}>
							Sair da CineStream
						</Link>
					</div>
				</S.Settings>
			</>
		)
	);
};

export default Profile;
