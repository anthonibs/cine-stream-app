import IUser from 'data/interfaces/User';

import * as S from './styles';

interface AvatarProps {
	authenticated: IUser | null;
}

const Avatar = ({ authenticated }: AvatarProps) => {
	const twoFirstNames =
		authenticated?.name !== null ? authenticated?.name.split(' ').slice(0, 2) : [];
	const firstLetters = twoFirstNames?.map((word) => word.charAt(0).toUpperCase()).join('');

	return (
		<S.Profile>
			<S.ImageAvatar
				src={authenticated?.path_image !== null ? `${authenticated?.path_image}` : ''}
				alt={`Sua de perfil do usuário: ${authenticated?.name}`}
				loading='lazy'
				decoding='async'
			/>
			<figcaption className='short-avatar-name'>{firstLetters !== null && firstLetters}</figcaption>
		</S.Profile>
	);
};

export default Avatar;
