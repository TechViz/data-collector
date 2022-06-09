import { useMutation } from 'react-query';
import { backendURL } from '../../constants/backend-url';
import { User } from '../../models/user';
import { useSmartPost } from '../../libs/hooks/use-smart-fetch';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/auth';
import { useSubmissionState } from '../../contexts/submission-state';
import { Submission } from '../../models/submission';

type UserLoginData = {
	accessKey: string;
	cpf: string;
	password: string;
};

type Response = {
	user: User;
	submissions: Submission | null;
	token: string;
};

export function useUserLogin() {
	const { login } = useAuth();
	const { setSubmissionState } = useSubmissionState();
	const smartPost = useSmartPost<Response, UserLoginData>();

	return useMutation((data: UserLoginData) => smartPost(`${backendURL}/users/login`, data), {
		onError: (error: Error) => {
			toast.error(error.message);
		},
		onSuccess: ({ token, user, submissions }) => {
			login(user, token);
			setSubmissionState(submissions?.categories || {});
		},
	});
}
