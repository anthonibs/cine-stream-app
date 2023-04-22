import { useContext } from 'react';
import { MyFavoritesContext } from 'data/contexts/MyFavoritesList';
import { IMovie } from 'data/interfaces/Movie';

export const useMyFavoritesList = () => {

	const { myFavoritesList, setMyFavoritesList } = useContext(MyFavoritesContext);

	function handlerAddFavoritesList(favorite: IMovie) {
		const isExist = myFavoritesList.some(item => item.id === favorite.id);
		const newMyFavorites = myFavoritesList.filter(item => item.id !== favorite.id);

		if (!isExist) {
			setMyFavoritesList(prev => [...prev, { ...favorite, isFavorite: true }]);
			localStorage.setItem('@my-list', JSON.stringify([...myFavoritesList, { ...favorite, isFavorite: true }]));
		}

		if (isExist) {
			setMyFavoritesList(newMyFavorites);
			localStorage.setItem('@my-list', JSON.stringify(newMyFavorites));
		}
	}


	return {
		myFavoritesList,
		setMyFavoritesList,
		handlerAddFavoritesList,
	};
};