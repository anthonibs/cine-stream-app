import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

import { IMovie } from 'data/interfaces/Movie';

import * as S from './CardVideo';

import { BsBookmarkHeartFill } from 'react-icons/bs';

const IMAGE = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = '/assets/images/not-picture.png';

const CardVideo = (video: IMovie) => {
	const { handlerAddFavoritesList } = useMyFavoritesList();
	const imageDefault = video.backdrop_path ? video.backdrop_path : video.poster_path;

	return (
		<S.Container
			data-aos='fade'
			data-aos-duration='1500'
			data-aos-mirror='true'
			data-aos-once='false'
			data-aos-anchor-placement='top-button'
		>
			<Link to={`/browser/films/${video.id}`} state={'films'}>
				<S.ImageContent>
					<S.Image
						src={imageDefault ? `${IMAGE}${imageDefault}` : `${IMAGE_PUBLIC}${IMAGE_BACKGROUND}`}
						alt={video.title}
						loading='lazy'
						decoding='async'
					/>
					<S.Legend>{video.title}</S.Legend>
				</S.ImageContent>
			</Link>

			<S.ButtonFavorite
				onClick={() => handlerAddFavoritesList(video)}
				className={video?.isFavorite ? 'active' : ''}
			>
				<BsBookmarkHeartFill />
			</S.ButtonFavorite>
		</S.Container>
	);
};

export default memo(CardVideo);
