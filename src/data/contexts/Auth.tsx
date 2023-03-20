import { createContext, ReactNode, useState } from 'react';
import IUser from 'data/@types/User';


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


// Mock Usuários Registrados
const registeredUsers = [
	{
		name: 'Rodrigo Sebastião da Cunha',
		email: 'rodrigo@email.com.br',
		password: 'abc',
		profile_image: 'https://images.pexels.com/photos/13553532/pexels-photo-13553532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		notification: 3
	},
	{
		name: 'Lara Priscila Lívia das Neves',
		email: 'lara@email.com.br',
		password: '123',
		profile_image: 'https://aaronturatv.ig.com.br/wp-content/uploads/2022/10/foto-lara-1.jpg',
		notification: 7
	},
	{
		name: 'Caio Thales Dias',
		email: 'caio@email.com.br',
		password: '123456',
		profile_image: 'https://images.pexels.com/photos/3170635/pexels-photo-3170635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		notification: 12
	},
	{
		name: 'Laura Marques Dias',
		email: 'teste@email.com',
		password: '123',
		profile_image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		notification: 1
	}
];

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);
AuthContext.displayName = 'Sign-in-out';

export const AuthProvider = ({ children }: IAuthChildren) => {
	const [users, setUsers] = useState<IUser[]>(registeredUsers);
	const [user, setUser] = useState<IUser>({} as IUser);
	const [authenticated, setAuthenticated] = useState<boolean>(false);

	return (
		<AuthContext.Provider value={{
			users,
			setUsers,
			authenticated,
			setAuthenticated,
			user,
			setUser,
		}}
		>
			{children}
		</AuthContext.Provider>
	);
};
