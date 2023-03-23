import { IMovie } from 'data/@types/Movie';
import { memo } from 'react';
import { Figure, Image, Legend } from './CardVideo';

const IMAGE = process.env.REACT_APP_IMG;

const CardVideo = (movie: IMovie) => {
	return (
		<>
			<Figure>
				<Image
					src={`${IMAGE}${movie.backdrop_path}`}
					alt={movie.title}
				/>
				<Legend>
					{movie.title}
				</Legend>
			</Figure>
		</>
	);
};

export default memo(CardVideo);