import { IMovie } from 'data/@types/Movie';
import { createContext, ReactNode, useState } from 'react';

interface IMyFavoritesListChildren {
	children: ReactNode;
}

interface IMyFavoritesListContext {
	myFavoritesList: IMovie[];
	setMyFavoritesList: React.Dispatch<React.SetStateAction<IMovie[]>>;
}


export const MyFavoritesContext = createContext<IMyFavoritesListContext>({} as IMyFavoritesListContext);
MyFavoritesContext.displayName = 'Wishlist';

export const MyFavoritesProvider = ({ children }: IMyFavoritesListChildren) => {
	const [myFavoritesList, setMyFavoritesList] = useState<IMovie[]>([]);



	return (
		<MyFavoritesContext.Provider value={{
			myFavoritesList,
			setMyFavoritesList,
		}}>
			{children}
		</MyFavoritesContext.Provider>
	);
};