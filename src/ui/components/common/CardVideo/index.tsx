import { memo } from 'react';
import { Link } from 'react-router-dom';

import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

import { IMovie } from 'data/interfaces/Movie';

import {
	Container,
	FavoriteButton,
	Figure,
	Image,
	Legend
} from './CardVideo';

import { BsBookmarkHeartFill } from 'react-icons/bs';

const IMAGE = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMAGE_BACKGROUND = '/assets/images/not-picture.png';


const CardVideo = (video: IMovie) => {
	const { handlerAddFavoritesList } = useMyFavoritesList();
	const imageDefault = video.backdrop_path ? video.backdrop_path : video.poster_path;


	return (
		<Container>
			<Link to={`/browser/films/${video.id}`}>
				<Figure>
					<Image
						src={imageDefault ? `${IMAGE}${imageDefault}` : `${IMAGE_PUBLIC}${IMAGE_BACKGROUND}`}
						alt={video.title}
					/>
					<Legend>
						{video.title}
					</Legend>
				</Figure>
			</Link>

			<FavoriteButton
				onClick={() => handlerAddFavoritesList(video)}
				className={video?.isFavorite ? 'active' : ''}
			>
				<BsBookmarkHeartFill />
			</FavoriteButton>
		</Container>
	);
};

export default memo(CardVideo);