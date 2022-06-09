import { useMutation } from 'react-query';
import { backendURL } from '../../constants/backend-url';
import { useSmartPost } from '../../libs/hooks/use-smart-fetch';
import { toast } from 'react-toastify';

type SendRatingData = {
	score: number;
	message: string;
};

export function useSendRating() {
	const smartPost = useSmartPost<{}, SendRatingData>();

	return useMutation((data: SendRatingData) => smartPost(`${backendURL}/ratings`, data), {
		onError: (error: Error) => {
			toast.error(error.message);
		},
	});
}
