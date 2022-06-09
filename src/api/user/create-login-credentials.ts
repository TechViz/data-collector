import { useMutation } from 'react-query';
import { backendURL } from '../../constants/backend-url';
import { User } from '../../models/user';
import { useSmartPost } from '../../libs/hooks/use-smart-fetch';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/auth';

type UserInitializationData = {
	accessKey: string;
	cpf: string;
	password: string;
};

type Response = {
	user: User;
	token: string;
};

export function useCreateLoginCredentials() {
	const { login } = useAuth();
	const smartPost = useSmartPost<Response, UserInitializationData>();

	return useMutation(
		(data: UserInitializationData) =>
			smartPost(`${backendURL}/users/create-login-credentials`, data),
		{
			onError: (error: Error) => {
				toast.error(error.message);
			},
			onSuccess: ({ token, user }) => {
				login(user, token);
			},
		},
	);
}
