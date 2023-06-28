import { useContext } from 'react';
import { MyFavoritesContext } from 'data/contexts/MyFavoritesList';
import { IAlreadyWatched, IMovie, ITvMovie } from 'data/interfaces';

export const useMyFavoritesList = () => {
	const {
		listMovie,
		setListMovie,
		listSerie,
		setListSerie,
		listAlreadyWatched,
		setListAlreadyWatched,
	} = useContext(MyFavoritesContext);

	function handlerAddFavoritesList(favorite: IMovie): void {
		const isExist = listMovie.some((item) => item.id === favorite.id);
		const newMyFavorites = listMovie.filter((item) => item.id !== favorite.id);

		if (!isExist) {
			setListMovie((prev) => [...prev, { ...favorite, isFavorite: true }]);
			localStorage.setItem(
				'@my-list:movie',
				JSON.stringify([...listMovie, { ...favorite, isFavorite: true }])
			);
		}

		if (isExist) {
			setListMovie(newMyFavorites);
			localStorage.setItem('@my-list:movie', JSON.stringify(newMyFavorites));
		}
	}

	function handlerAddFavoritesListOfSerie(favorite: ITvMovie): void {
		const isExist = listSerie.some((item) => item.id === favorite.id);
		const newMyFavorites = listSerie.filter((item) => item.id !== favorite.id);

		if (!isExist) {
			setListSerie((prev) => [...prev, { ...favorite, isFavorite: true }]);
			localStorage.setItem(
				'@my-list:serie',
				JSON.stringify([...listSerie, { ...favorite, isFavorite: true }])
			);
		}

		if (isExist) {
			setListSerie(newMyFavorites);
			localStorage.setItem('@my-list:serie', JSON.stringify(newMyFavorites));
		}
	}

	function handleAlreadyWatched(watched: any): void {
		const existe = listAlreadyWatched.some((item: IAlreadyWatched) => item.id === watched.id);
		const newMyFavorites = listAlreadyWatched.filter(
			(item: IAlreadyWatched) => item.id !== watched.id
		);

		if (!existe) {
			setListAlreadyWatched((prev) => [...prev, { ...watched, alreadyWatched: true }]);

			localStorage.setItem(
				'@my-list:already-watched',
				JSON.stringify([...listAlreadyWatched, { ...watched, alreadyWatched: true }])
			);
		}

		if (existe) {
			setListAlreadyWatched(newMyFavorites);
			localStorage.setItem('@my-list:already-watched', JSON.stringify(newMyFavorites));
		}
	}

	return {
		listMovie,
		handlerAddFavoritesList,
		listSerie,
		handlerAddFavoritesListOfSerie,
		listAlreadyWatched,
		handleAlreadyWatched,
	};
};
