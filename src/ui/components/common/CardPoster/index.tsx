// Hooks React
import { memo } from 'react';
import { Link } from 'react-router-dom';

// Hooks Personalizados
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

// Tipagem
import { IMovie } from 'data/@types/Movie';

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
} from './CardPoster';

const IMAGE_POSTER = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;

const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';

interface ICardPoster {
	poster: IMovie;
	path?: string;
}

const CardPoster = ({ poster, path }: ICardPoster) => {

	const { handlerAddFavoritesList } = useMyFavoritesList();

	const yearFormatted = poster.release_date ? String(poster.release_date).toString().slice(0, 4) : '----';
	const imageDefault = poster.poster_path ? poster.poster_path : null;

	return (
		<Container className='card-hover'>
			<Link to={`/browser/films/${poster.id}`}>
				<ImageContainer className={!imageDefault ? 'not-image' : ''}>
					<Image
						src={`${IMAGE_POSTER}${imageDefault}`}
						alt={poster.title}
					/>
				</ImageContainer>
			</Link>

			<Wrapper>
				<SubTitle>{poster.title}</SubTitle>
				<Year>{yearFormatted}</Year>

				<Wrap>
					<Group>
						<Image
							src={`${IMAGE_PUBLIC}${IMDB_LOGO}`}
							alt="Logo da IMDb"
						/>
						<VoteAverage>{poster.vote_average}</VoteAverage>
					</Group>

					<ActionControl>
						<Button>
							<FaRegEye />
						</Button>

						<Button
							onClick={() => handlerAddFavoritesList(poster)}
							className={poster?.isFavorite ? 'active' : ''}
						>
							<BsBookmarkHeartFill />
						</Button>
					</ActionControl>
				</Wrap>
			</Wrapper>
		</Container>
	);
};

export default memo(CardPoster);