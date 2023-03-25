import { IMovie } from 'data/@types/Movie';

import { FaRegEye } from 'react-icons/fa';
import { BsBookmarkHeartFill } from 'react-icons/bs';
import { Container } from './CardPoster';
import { memo } from 'react';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

const IMAGE_POSTER = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;

const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';


interface ICardPoster {
	poster: IMovie;
}

const CardPoster = ({ poster }: ICardPoster) => {

	const { handlerAddFavoritesList } = useMyFavoritesList();

	return (
		<Container>
			<a href="">
				<figure>
					<img src={`${IMAGE_POSTER}${poster.poster_path}`} alt={poster.title} />
				</figure>
			</a>
			<div className='description'>
				<h3>{poster.title}</h3>
				<span>{String(poster.release_date).toString().slice(0, 4)}</span>

				<div>
					<div>
						<img src={`${IMAGE_PUBLIC}${IMDB_LOGO}`} alt="" />
						<p>{poster.vote_average}</p>
					</div>

					<div className='icone'>
						<button onClick={() => console.log('Visualizado')}>
							<FaRegEye />
						</button>

						<button onClick={() => handlerAddFavoritesList(poster)} className={poster?.isFavorite ? 'active' : ''}>
							<BsBookmarkHeartFill />
						</button>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default memo(CardPoster);