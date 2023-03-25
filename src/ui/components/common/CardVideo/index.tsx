import { IMovie } from 'data/@types/Movie';
import { memo } from 'react';
import { Container, FavoriteButton, Figure, Image, Legend } from './CardVideo';

import { BsBookmarkHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const IMAGE = process.env.REACT_APP_IMG;

function addNosFavoritos(favorite: IMovie) {
	console.log('Adicionado nos favoritos!');
	// console.log(favorite);
}

const CardVideo = (video: IMovie) => {
	return (
		<Container>
			<Link to="#" onClick={() => console.log('cliquei')}>
				<Figure>
					<Image
						src={`${IMAGE}${video.backdrop_path}`}
						alt={video.title}
					/>
					<Legend>
						{video.title}
					</Legend>
				</Figure>
			</Link>

			<FavoriteButton
				onClick={() => addNosFavoritos(video)}
				className={'active'}
			>
				<BsBookmarkHeartFill />
			</FavoriteButton>
		</Container>
	);
};

export default memo(CardVideo);