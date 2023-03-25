import { useContext } from 'react';
import { IMovie } from 'data/@types/Movie';
import { MyFavoritesContext } from 'data/contexts/MyFavoritesList';

export const useMyFavoritesList = () => {

	const { myFavoritesList, setMyFavoritesList } = useContext(MyFavoritesContext);

	function handlerAddFavoritesList(favorite: IMovie) {
		const isExist = myFavoritesList.some(item => item.id === favorite.id);
		const newMyFavorites = myFavoritesList.filter(item => item.id !== favorite.id);

		if (!isExist) {
			setMyFavoritesList(prev => [...prev, { ...favorite, isFavorite: true }]);
		}

		if (isExist) {
			setMyFavoritesList(newMyFavorites);
		}
	}


	return {
		myFavoritesList,
		setMyFavoritesList,
		handlerAddFavoritesList,
	};
};