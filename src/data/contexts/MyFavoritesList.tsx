import { IMovie } from 'data/interfaces/Movie';
import { ITvMovie } from 'data/interfaces/TvMovie';
import { createContext, ReactNode, useState } from 'react';

interface IMyFavoritesListChildren {
	children: ReactNode;
}
interface IMyFavoritesListContext {
	listMovie: IMovie[];
	setListMovie: React.Dispatch<React.SetStateAction<IMovie[]>>;
	listSerie: ITvMovie[];
	setListSerie: React.Dispatch<React.SetStateAction<ITvMovie[]>>;
}


export const MyFavoritesContext = createContext<IMyFavoritesListContext>({} as IMyFavoritesListContext);
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

	
	return (
		<MyFavoritesContext.Provider value={{
			listMovie,
			setListMovie,
			listSerie,
			setListSerie
		}}>
			{children}
		</MyFavoritesContext.Provider>
	);
};