import React from 'react';
import { ReactText } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useTheme } from 'styled-components';
import Spinner from '../../components/reusable/spinner';
import { backendURL } from '../../constants/backend-url';
import { useSubmissionState } from '../../contexts/submission-state';
import { useSmartPost } from '../../libs/hooks/use-smart-fetch';

type Body = Record<string, any>;

type Response = {
	categories: {
		[categoryName: string]: {
			creationDate: number;
			categoryName: string;
			[prop: string]: any;
		};
	};
};

export function useUpdateCategory() {
	const smartPost = useSmartPost<Response, Body>();
	const { setSubmissionState } = useSubmissionState();
	const loadingToastRef = React.useRef<ReactText | null>(null);
	const { colors } = useTheme();

	return useMutation((data: Body) => smartPost(`${backendURL}/submissions/add-category`, data), {
		onMutate: () => {
			loadingToastRef.current = toast.info(
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Spinner color={colors.primary.main} size={16} style={{ marginRight: 8 }} /> Enviando...
				</div>,
				{ autoClose: false, closeOnClick: false },
			);
		},
		onError: (error: Error) => {
			toast.dismiss(loadingToastRef.current || '');
			toast.error(error.message);
		},
		onSuccess: ({ categories }) => {
			toast.dismiss(loadingToastRef.current || '');
			setSubmissionState(categories);
		},
	});
}
