import React from 'react';
import { CategoryNames } from '../models/categories';

type SubmissionState = {
	[categoryName: string]: {
		categoryName: string;
		creationDate: number;
		[key: string]: any;
	};
};

type SubmissionStateContext = {
	submissionState: SubmissionState;
	setSubmissionState: (newSubmissionState: SubmissionState) => void;
	wasCategoryAnswered: (categoryName: string) => boolean;
	categoriesDone: number;
};

const context = React.createContext<SubmissionStateContext>(
	null as unknown as SubmissionStateContext,
);

export const TOTAL_CATEGORIES = CategoryNames.length;

const SubmissionStateProvider = ({ ...props }) => {
	const [submissionState, setSubmissionState] = React.useState<SubmissionState>({});

	const wasCategoryAnswered = React.useCallback(
		(categoryName: string) => {
			return Boolean(submissionState[categoryName]);
		},
		[submissionState],
	);

	const categoriesDone = React.useMemo(() => {
		const completedCategories = CategoryNames.filter(name => wasCategoryAnswered(name));
		return completedCategories.length;
	}, [submissionState]);

	return (
		<context.Provider
			value={React.useMemo(
				() => ({
					submissionState,
					setSubmissionState,
					wasCategoryAnswered,
					categoriesDone,
				}),
				[submissionState, wasCategoryAnswered, categoriesDone],
			)}
			{...props}
		/>
	);
};

const useSubmissionState = () => {
	return React.useContext(context);
};

export { useSubmissionState };
export default SubmissionStateProvider;
