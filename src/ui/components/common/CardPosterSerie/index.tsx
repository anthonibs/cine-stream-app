// Hooks React
import { memo } from 'react';
import { Link } from 'react-router-dom';

// Hooks Personalizados
import { useMyFavoritesList } from 'data/hooks/useMyFavoritesList';

// Tipagem
import { ISerie } from 'data/interfaces/Serie';

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


const IMAGE_POSTER = process.env.REACT_APP_IMG;
const IMAGE_PUBLIC = process.env.PUBLIC_URL;
const IMDB_LOGO = '/assets/IMDB_Logo_2016.svg';

interface ICardPoster {
	poster: ISerie;
}


const CardPosterSerie = ({ poster }: ICardPoster) => {

	const { handlerAddFavoritesList } = useMyFavoritesList();

	const yearFormatted = poster.first_air_date ? String(poster.first_air_date).toString().slice(0, 4) : '----';
	const imageDefault = poster?.poster_path ? poster?.poster_path : null;

	const regex = /[.,:]/gm;
	const slug = poster.name.replaceAll(' ', '-').replaceAll(regex, '').toLowerCase();

	return (
		<Container className='card-hover'>
			<Link to={`/browser/series/${poster.id}-${slug}`} state={'series'}>
				<ImageContainer className={!imageDefault ? 'not-image' : ''}>
					<Image
						src={imageDefault ? `${IMAGE_POSTER}${imageDefault}` : ''}
						alt={imageDefault ?? poster.name}
					/>
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
						<VoteAverage>{poster.vote_average}</VoteAverage>
					</Group>

					<ActionControl>
						<Button>
							<FaRegEye />
						</Button>

						<Button
							// onClick={() => handlerAddFavoritesList(poster)}
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

export default memo(CardPosterSerie);