import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

import DialogIntro from './0-intro';
import DialogConversation from './1-conversations';
import DialogOpinion from './2-opinion';
import DialogSendOther from './3-send-other';
import DialogDone from './4-done';

const DialogPage: FC<{}> = ({}) => {
	useRequireAuth();

	return (
		<QuestionPageWithMultistep
			nextPage="/respect"
			categoryName="dialog"
			pages={applyDefaultPage(
				[
					{ component: <DialogIntro />, bgColor: theme => theme.colors.primary.main, progress: 0 },
					{ component: <DialogConversation />, progress: 25 },
					{ component: <DialogOpinion />, progress: 50 },
					{ component: <DialogSendOther />, progress: 75 },
					{ component: <DialogDone />, bgColor: theme => theme.colors.primary.main, progress: 100 },
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Tech Viz / <strong>Diálogo</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default DialogPage;
