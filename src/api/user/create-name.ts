import { useMutation } from 'react-query';
import { backendURL } from '../../constants/backend-url';
import { User } from '../../models/user';
import { useSmartPost } from '../../libs/hooks/use-smart-fetch';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/auth';

type CreateNameData = {
	name: string;
};

type Response = {
	user: User;
};

export function useCreateName() {
	const { updateUserName } = useAuth();
	const smartPost = useSmartPost<Response, CreateNameData>();

	return useMutation((data: CreateNameData) => smartPost(`${backendURL}/users/create-name`, data), {
		onError: (error: Error) => {
			toast.error(error.message);
		},
		onSuccess: ({ user }) => {
			updateUserName(user.name);
		},
	});
}
