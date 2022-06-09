import React from 'react';
import { User } from '../models/user';

type Auth = {
	user: User;
	token: string;
};

type AuthContext = {
	auth: Auth | null;
	updateToken: (newToken: string) => void;
	login: (user: User, token: string) => void;
	updateUserName: (newName: string) => void;
	logout: () => void;
};

const context = React.createContext<AuthContext>(null as unknown as AuthContext);

const AuthProvider = ({ ...props }) => {
	const [auth, setAuth] = React.useState<Auth | null>(null);

	const updateToken = React.useCallback((newToken: string) => {
		setAuth(auth => {
			if (!auth) throw new Error(`Cannot update token that doesn't exist`);
			return { ...auth, token: newToken };
		});
	}, []);

	const logout = React.useCallback(() => {
		setAuth(null);
	}, []);

	const login = React.useCallback((user: User, token: string) => {
		setAuth({ user, token });
	}, []);

	const updateUserName = React.useCallback((name: string) => {
		setAuth(auth => {
			if (!auth) throw new Error('Cannot update user name on empty auth');
			return { ...auth, user: { ...auth.user, name } };
		});
	}, []);

	return (
		<context.Provider
			value={React.useMemo(
				() => ({
					auth,
					updateToken,
					login,
					logout,
					updateUserName,
				}),
				[auth],
			)}
			{...props}
		/>
	);
};

const useAuth = () => {
	return React.useContext(context);
};

export { useAuth };
export default AuthProvider;
