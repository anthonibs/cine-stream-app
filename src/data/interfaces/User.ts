interface IUser {
	name: string;
	email: string;
	password: string;
	profile_image: string | null;
	notification: number;
	id: string;
}

export default IUser;
