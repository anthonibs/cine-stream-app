import IUser from 'data/interfaces/User';
import { createContext, ReactNode, useState } from 'react';

interface IAuthChildren {
	children: ReactNode;
}

interface IAuthContext {
	authenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	userAuthenticated: IUser | null;
	setUserAuthenticated: React.Dispatch<React.SetStateAction<IUser | null>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
AuthContext.displayName = 'Sign-in-out';

export const AuthProvider = ({ children }: IAuthChildren) => {
	const [loading, setLoading] = useState(true);

	const [authenticated, setAuthenticated] = useState(() => {
		const isUserAuthorized = sessionStorage.getItem('@auth:authorized');
		if (isUserAuthorized) {
			return JSON.parse(isUserAuthorized);
		}
		return false;
	});

	const [userAuthenticated, setUserAuthenticated] = useState<IUser | null>(() => {
		const savedUserAuthenticated = sessionStorage.getItem('@auth:userAuthenticated');
		if (savedUserAuthenticated) {
			return JSON.parse(savedUserAuthenticated);
		}

		return null;
	});

	return (
		<AuthContext.Provider
			value={{
				authenticated,
				setAuthenticated,
				userAuthenticated,
				setUserAuthenticated,
				setLoading,
				loading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
