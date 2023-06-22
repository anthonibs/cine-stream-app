import { IMovie } from 'data/interfaces/Movie';
import { ITvMovie } from 'data/interfaces/TvMovie';

export function combinedListFavorites<T extends ITvMovie | IMovie>(list: T[], listFavorite: T[]) {
	const combinedList = list.map((movie: T) => {
		// Verifica se o filme está na lista de favoritos
		const isFavorite = listFavorite.some((favorite) => favorite.id === movie.id);

		// Cria um novo objeto com as informações do filme e se ele é um favorito ou não
		return {
			...movie,
			isFavorite: isFavorite,
		};
	});
	return combinedList;
}
