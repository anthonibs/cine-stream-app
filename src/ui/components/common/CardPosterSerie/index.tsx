// Hooks React
import { memo } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FaRegEye } from 'react-icons/fa';
import { BsBookmarkHeartFill } from 'react-icons/bs';

// Estilos Personalizados
import {
	StyledActionsWarp,
	StyledAverage,
	StyledAverageWrap,
	StyledButtonAction,
	StyledContainer,
	StyledContent,
	StyledImage,
	StyledSubTitle,
	StyledWrapper,
	StyledYear,
} from './CardPosterSerie';

import { ITvMovie } from 'data/interfaces/TvMovie';
import { removeAccentsFromText } from 'utils';
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

const IMAGE_POSTER = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';

interface ICardPoster {
	poster: ITvMovie;
}

const CardPosterSerie = ({ poster }: ICardPoster) => {

	const { handlerAddFavoritesListOfSerie } = useMyFavoritesList();

	const yearFormatted = poster.first_air_date ? String(poster.first_air_date).toString().slice(0, 4) : '----';
	const imageDefault = poster?.poster_path ? poster?.poster_path : null;

	return (
		<StyledContainer className='card-hover' tabIndex={0}>
			<Link to={`/browser/series/${poster.id}-${removeAccentsFromText(poster.name)}`} state={'series'}>
				<StyledImage className={!imageDefault ? 'not-image' : ''}>
					{imageDefault &&
						<StyledImage
							src={`${IMAGE_POSTER}${imageDefault}`}
							alt={poster.name}
						/>
					}
				</StyledImage>
			</Link>

			<StyledContent>
				<StyledSubTitle>{poster.name}</StyledSubTitle>
				<StyledYear>{yearFormatted}</StyledYear>

				<StyledWrapper>
					<StyledAverageWrap>
						<StyledImage
							src={`${IMAGE_PUBLIC}${IMDB_LOGO}`}
							alt="Logo da IMDb"
						/>
						<StyledAverage>
							{poster.vote_average.toFixed(1)}
						</StyledAverage>
					</StyledAverageWrap>

					<StyledActionsWarp>
						<StyledButtonAction>
							<FaRegEye />
						</StyledButtonAction>

						<StyledButtonAction
							onClick={() => handlerAddFavoritesListOfSerie(poster)}
							className={poster?.isFavorite ? 'active' : ''}
						>
							<BsBookmarkHeartFill />
						</StyledButtonAction>
					</StyledActionsWarp>
				</StyledWrapper>
			</StyledContent>
		</StyledContainer >
	);
};

export default memo(CardPosterSerie);