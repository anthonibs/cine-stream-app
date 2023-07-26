import { Link } from 'react-router-dom';

import useAuthContext from 'data/hooks/useAuthContext';

import * as S from './styles';
import Avatar from '../Avatar';

const Profile = () => {
	const { logoutUser, userAuthenticated } = useAuthContext();

	return (
		<S.Settings>
			<Avatar authenticated={userAuthenticated} />

			<div className='menu-settings'>
				<Link to={'#'}>Conta</Link>

				<Link to={'/signin'} data-href='/signin' onClick={logoutUser}>
					Sair da CineStream
				</Link>
			</div>
		</S.Settings>
	);
};

export default Profile;
