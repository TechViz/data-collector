import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { DefaultTheme } from 'styled-components';
import { useProgressBar } from '../../../contexts/progress-bar';
import { useSubmissionState } from '../../../contexts/submission-state';
import { CategoryNames } from '../../../models/categories';
import MultistepForm from '../../reusable/multistep-form';
import { useMultistep } from '../../reusable/multistep-form/context';
import QuestionPageTemplate from '../question-page-template';

export type PageDescriptor = {
	component: React.ReactNode;
	progress: number;
	bgColor: (theme: DefaultTheme) => string;
	title: React.ReactNode;
};

const QuestionPageWithMultistep: FC<{
	pages: PageDescriptor[];
	nextPage: string;
	categoryName?: CategoryNames;
}> = ({ pages, nextPage, categoryName }) => {
	const { setProgress } = useProgressBar();
	const router = useRouter();
	const [currentPage, setCurrentPage] = React.useState(0);

	const bgColor = pages[currentPage].bgColor;
	const title = pages[currentPage].title;
	const progress = pages[currentPage].progress;

	React.useEffect(() => {
		setProgress(progress);
	}, [currentPage]);

	React.useEffect(() => {
		router.prefetch(nextPage);
	}, [nextPage]);

	function handleForwardAtLastPage() {
		router.push(nextPage);
	}

	return (
		<QuestionPageTemplate backgroundColor={bgColor} title={title}>
			<MultistepFormContainer
				categoryName={categoryName}
				onChangePage={setCurrentPage}
				onForwardAtLastPage={handleForwardAtLastPage}
				pages={pages}
			/>
		</QuestionPageTemplate>
	);
};

const MultistepFormContainer: FC<
	{ pages: PageDescriptor[]; categoryName?: CategoryNames } & Omit<
		React.ComponentProps<typeof MultistepForm>,
		'pages'
	>
> = ({ pages, categoryName, ...props }) => {
	return (
		<MultistepForm {...props} pages={pages.map(page => page.component)}>
			<MultistepFormPrefiller categoryName={categoryName} />
		</MultistepForm>
	);
};

const MultistepFormPrefiller: FC<{ categoryName?: CategoryNames }> = ({ categoryName }) => {
	const { submissionState } = useSubmissionState();
	const { updateFormValue } = useMultistep();

	React.useEffect(() => {
		if (!categoryName) return;
		updateFormValue(submissionState[categoryName]);
	}, []);

	return null;
};

export default QuestionPageWithMultistep;
