import { IMovie } from 'data/interfaces/Movie';
import { memo } from 'react';
import { Container, FavoriteButton, Figure, Image, Legend } from './CardVideo';

import { BsBookmarkHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

const IMAGE = process.env.REACT_APP_IMG;

const CardVideo = (video: IMovie) => {

	const { handlerAddFavoritesList } = useMyFavoritesList();

	const imageDefault= video.backdrop_path ? video.backdrop_path : video.poster_path;

	return (
		<Container>
			<Link to={`/browser/films/${video.id}`} onClick={() => console.log('cliquei')}>
				<Figure>
					<Image
						src={`${IMAGE}${imageDefault}`}
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