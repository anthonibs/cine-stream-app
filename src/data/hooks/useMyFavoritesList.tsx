import { useContext } from 'react';
import { MyFavoritesContext } from 'data/contexts/MyFavoritesList';
import { IMovie } from 'data/interfaces/Movie';
import { ITvMovie } from 'data/interfaces/TvMovie';

export const useMyFavoritesList = () => {

	const { listMovie, setListMovie, listSerie, setListSerie } = useContext(MyFavoritesContext);

	function handlerAddFavoritesList(favorite: IMovie) {
		const isExist = listMovie.some(item => item.id === favorite.id);
		const newMyFavorites = listMovie.filter(item => item.id !== favorite.id);

		if (!isExist) {
			setListMovie(prev => [...prev, { ...favorite, isFavorite: true }]);
			localStorage.setItem('@my-list:movie', JSON.stringify([...listMovie, { ...favorite, isFavorite: true }]));
		}

		if (isExist) {
			setListMovie(newMyFavorites);
			localStorage.setItem('@my-list:movie', JSON.stringify(newMyFavorites));
		}
	}


	function handlerAddFavoritesListOfSerie(favorite: ITvMovie) {
		const isExist = listSerie.some(item => item.id === favorite.id);
		const newMyFavorites = listSerie.filter(item => item.id !== favorite.id);

		if (!isExist) {
			setListSerie(prev => [...prev, { ...favorite, isFavorite: true }]);
			localStorage.setItem('@my-list:serie', JSON.stringify([...listSerie, { ...favorite, isFavorite: true }]));
		}

		if (isExist) {
			setListSerie(newMyFavorites);
			localStorage.setItem('@my-list:serie', JSON.stringify(newMyFavorites));
		}
	}


	return {
		listMovie,
		handlerAddFavoritesList,
		listSerie,
		handlerAddFavoritesListOfSerie
	};
};