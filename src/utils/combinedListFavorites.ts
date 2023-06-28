import { IAlreadyWatched, IMovie, ITvMovie } from 'data/interfaces';

export function combinedListFavorites<T extends ITvMovie | IMovie>(
	list: T[],
	listFavorite: T[],
	watchList: IAlreadyWatched[]
) {
	const combinedList = list?.map((movie: T) => {
		// Verifica se o filme está na lista de favoritos
		const isFavorite = listFavorite.some((favorite) => favorite.id === movie.id);
		const isWatched = watchList.some((watched) => watched.id === movie.id);

		// Cria um novo objeto com as informações do filme e se ele é um favorito ou não
		return {
			...movie,
			isFavorite: isFavorite,
			alreadyWatched: isWatched,
		};
	});
	return combinedList;
}
