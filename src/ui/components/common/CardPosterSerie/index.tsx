// Hooks React
import { memo } from 'react';
import { Link } from 'react-router-dom';

// Tipagem

// Icons
import { FaRegEye } from 'react-icons/fa';
import { BsBookmarkHeartFill } from 'react-icons/bs';

// Estilos Personalizados
import {
	ActionControl,
	Button,
	Container,
	Group,
	Image,
	ImageContainer,
	SubTitle,
	VoteAverage,
	Wrap,
	Wrapper,
	Year
} from './CardPosterSerie';
import { ITvMovie } from 'data/interfaces/TvMovie';
import removeAccentsFromText from 'ui/utils/removeAccentsFromText';
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
		<Container className='card-hover' tabIndex={0}>
			<Link to={`/browser/series/${poster.id}-${removeAccentsFromText(poster.name)}`} state={'series'}>
				<ImageContainer className={!imageDefault ? 'not-image' : ''}>
					{imageDefault &&
						<Image
							src={`${IMAGE_POSTER}${imageDefault}`}
							alt={poster.name}
						/>
					}
				</ImageContainer>
			</Link>

			<Wrapper>
				<SubTitle>{poster.name}</SubTitle>
				<Year>{yearFormatted}</Year>

				<Wrap>
					<Group>
						<Image
							src={`${IMAGE_PUBLIC}${IMDB_LOGO}`}
							alt="Logo da IMDb"
						/>
						<VoteAverage>{poster.vote_average.toFixed(1)}</VoteAverage>
					</Group>

					<ActionControl>
						<Button>
							<FaRegEye />
						</Button>

						<Button
							onClick={() => handlerAddFavoritesListOfSerie(poster)}
							className={poster?.isFavorite ? 'active' : ''}
						>
							<BsBookmarkHeartFill />
						</Button>
					</ActionControl>
				</Wrap>
			</Wrapper>
		</Container >
	);
};

export default memo(CardPosterSerie);