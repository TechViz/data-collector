import { useMutation } from 'react-query';
import { backendURL } from '../../constants/backend-url';
import { useSmartPost } from '../../libs/hooks/use-smart-fetch';
import { toast } from 'react-toastify';

type ValidateAccessKeyRequest = {
	accessKey: string;
};

type Response = string;

export function useValidateAccessKey() {
	const smartPost = useSmartPost<Response, ValidateAccessKeyRequest>();

	return useMutation(
		(data: ValidateAccessKeyRequest) => smartPost(`${backendURL}/users/validate-access-key`, data),
		{
			onError: (error: Error) => {
				toast.error(error.message);
			},
		},
	);
}
