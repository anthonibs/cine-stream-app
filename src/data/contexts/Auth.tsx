import IUser from 'data/interfaces/User';
import { createContext, ReactNode, useState } from 'react';


interface IAuthChildren {
	children: ReactNode;
}

interface IAuthContext {
	users: IUser[];
	setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
	authenticated: boolean;
	setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
	user: IUser;
	setUser: React.Dispatch<React.SetStateAction<IUser>>;
}


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
AuthContext.displayName = 'Sign-in-out';

export const AuthProvider = ({ children }: IAuthChildren) => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<IUser>({} as IUser);
	const [users, setUsers] = useState<IUser[] | []>(() => {
		const getUserList = localStorage.getItem('@list:users');
		if (!getUserList) {
			return [];
		}

		return JSON.parse(getUserList);
	});


	return (
		<AuthContext.Provider value={{
			users,
			setUsers,
			authenticated,
			setAuthenticated,
			user,
			setUser
		}}
		>
			{children}
		</AuthContext.Provider>
	);
};
