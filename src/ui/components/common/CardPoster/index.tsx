// Hooks React
import { memo } from 'react';
import { Link } from 'react-router-dom';

// Hooks Personalizados
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

// Tipagem
import { IMovie } from 'data/interfaces/Movie';

// Icons
import { FaRegEye } from 'react-icons/fa';
import { BsBookmarkHeartFill } from 'react-icons/bs';

// Estilos Personalizados
import {
	StyledActions,
	StyledAverage,
	StyledAverageWrap,
	StyledButtonAction,
	StyledContainer,
	StyledContent,
	StyledImage,
	StyledImageContainer,
	StyledSubTitle,
	StyledWrapper,
	StyledYear,
} from './CardPoster';
import { removeAccentsFromText } from 'utils';


const IMAGE_POSTER = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';

interface ICardPoster {
	poster: IMovie;
}


const CardPoster = ({ poster }: ICardPoster) => {
	const { handlerAddFavoritesList } = useMyFavoritesList();

	const yearFormatted = poster.release_date ? String(poster.release_date).toString().slice(0, 4) : '----';
	const imageDefault = poster?.poster_path ? poster?.poster_path : null;


	return (
		<StyledContainer className='card-hover' tabIndex={0}>
			<Link to={`/browser/films/${poster.id}-${removeAccentsFromText(poster.title)}`} state={'films'}>
				<StyledImageContainer className={!imageDefault ? 'not-image' : ''}>
					{imageDefault
						&& <StyledImage
							src={`${IMAGE_POSTER}${imageDefault}`}
							alt={poster.title}
						/>
					}
				</StyledImageContainer>
			</Link>

			<StyledContent>
				<StyledSubTitle>
					{poster.title}
				</StyledSubTitle>
				<StyledYear>
					{yearFormatted}
				</StyledYear>

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

					<StyledActions>
						<StyledButtonAction>
							<FaRegEye />
						</StyledButtonAction>

						<StyledButtonAction
							onClick={() => handlerAddFavoritesList(poster)}
							className={poster?.isFavorite ? 'active' : ''}
						>
							<BsBookmarkHeartFill />
						</StyledButtonAction>
					</StyledActions>
				</StyledWrapper>

			</StyledContent>
		</StyledContainer>
	);
};

export default memo(CardPoster);