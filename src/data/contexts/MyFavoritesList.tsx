import { createContext, ReactNode, useState } from 'react';

import { IAlreadyWatched, IMovie, ITvMovie } from 'data/interfaces';

interface IMyFavoritesListChildren {
	children: ReactNode;
}

interface IMyFavoritesListContext {
	listMovie: IMovie[];
	setListMovie: React.Dispatch<React.SetStateAction<IMovie[]>>;
	listSerie: ITvMovie[];
	setListSerie: React.Dispatch<React.SetStateAction<ITvMovie[]>>;
	listAlreadyWatched: IAlreadyWatched[];
	setListAlreadyWatched: React.Dispatch<React.SetStateAction<IAlreadyWatched[]>>;
}

export const MyFavoritesContext = createContext<IMyFavoritesListContext>(
	{} as IMyFavoritesListContext
);
MyFavoritesContext.displayName = 'Wishlist';

export const MyFavoritesProvider = ({ children }: IMyFavoritesListChildren) => {
	const [listMovie, setListMovie] = useState<IMovie[]>(() => {
		const savedList = localStorage.getItem('@my-list:movie');
		if (!savedList) {
			return [];
		}
		return JSON.parse(savedList);
	});

	const [listSerie, setListSerie] = useState<ITvMovie[]>(() => {
		const savedList = localStorage.getItem('@my-list:serie');
		if (!savedList) {
			return [];
		}
		return JSON.parse(savedList);
	});

	const [listAlreadyWatched, setListAlreadyWatched] = useState<IAlreadyWatched[]>(() => {
		const savedLocalStorage = localStorage.getItem('@my-list:already-watched');
		if (!savedLocalStorage) {
			return [];
		}
		return JSON.parse(savedLocalStorage);
	});

	return (
		<MyFavoritesContext.Provider
			value={{
				listMovie,
				setListMovie,
				listSerie,
				setListSerie,
				listAlreadyWatched,
				setListAlreadyWatched,
			}}
		>
			{children}
		</MyFavoritesContext.Provider>
	);
};
