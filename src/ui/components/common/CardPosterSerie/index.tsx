// Hooks React
import { memo } from 'react';
import { Link } from 'react-router-dom';

// Hooks Personalizados
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

// Icons
import { FaRegEye } from 'react-icons/fa';
import { BsBookmarkHeartFill } from 'react-icons/bs';

// Estilos Personalizados
import * as S from './CardPosterSerie';

// Tipagem
import { ITvMovie } from 'data/interfaces/TvMovie';

import { removeAccentsFromText } from 'utils';

const IMAGE_POSTER = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';

interface ICardPoster {
	poster: ITvMovie;
}

const CardPosterSerie = ({ poster }: ICardPoster) => {
	const { handlerAddFavoritesListOfSerie, handleAlreadyWatched } = useMyFavoritesList();

	const yearFormatted = poster.first_air_date
		? String(poster.first_air_date).toString().slice(0, 4)
		: '----';
	const imageDefault = poster?.poster_path ? poster?.poster_path : null;

	return (
		<S.Container className='card-hover' tabIndex={0}>
			<Link
				to={`/browser/series/${poster.id}-${removeAccentsFromText(poster.name)}`}
				state={'series'}
			>
				<S.ImageContainer className={!imageDefault ? 'not-image' : ''}>
					{imageDefault && <S.Image src={`${IMAGE_POSTER}${imageDefault}`} alt={poster.name} />}
				</S.ImageContainer>
			</Link>

			<S.Content>
				<S.SubTitle>{poster.name}</S.SubTitle>
				<S.Year>{yearFormatted}</S.Year>

				<S.Wrapper>
					<S.AverageWrap>
						<S.Image src={`${IMAGE_PUBLIC}${IMDB_LOGO}`} alt='Logo da IMDb' />
						<S.Average>{poster.vote_average.toFixed(1)}</S.Average>
					</S.AverageWrap>

					<S.Actions>
						<S.ButtonAction
							onClick={() => handleAlreadyWatched(poster)}
							className={poster?.alreadyWatched ? 'active' : ''}
						>
							<FaRegEye />
						</S.ButtonAction>

						<S.ButtonAction
							onClick={() => handlerAddFavoritesListOfSerie(poster)}
							className={poster?.isFavorite ? 'active' : ''}
						>
							<BsBookmarkHeartFill />
						</S.ButtonAction>
					</S.Actions>
				</S.Wrapper>
			</S.Content>
		</S.Container>
	);
};

export default memo(CardPosterSerie);
