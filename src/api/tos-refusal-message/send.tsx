import { useMutation } from 'react-query';
import { backendURL } from '../../constants/backend-url';
import { useSmartPost } from '../../libs/hooks/use-smart-fetch';
import { toast } from 'react-toastify';

type Message = {
	message: string;
};

export function useSendTOSRefusalMessage() {
	const smartPost = useSmartPost<{}, Message>();

	return useMutation((data: Message) => smartPost(`${backendURL}/tos-refusal`, data), {
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
}
