import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

import RespectIntro from './0-intro';
import RespectPositiveSituation from './1-positive-situation';
import RespectOpinionPositive from './2-opinion-positive';
import RespectSendOtherPositive from './3-send-other-positive';
import RespectNegativeSituation from './4-negative-situation';
import RespectOpinionNegative from './5-opinion-negative';
import RespectSendOtherNegative from './6-send-other-negative';
import RespectDone from './7-done';

const DialogPage: FC<{}> = ({}) => {
	useRequireAuth();

	return (
		<QuestionPageWithMultistep
			categoryName="respect"
			nextPage="/problematization"
			pages={applyDefaultPage(
				[
					{ component: <RespectIntro />, bgColor: theme => theme.colors.primary.main, progress: 0 },
					{ component: <RespectPositiveSituation />, progress: 14 },
					{ component: <RespectOpinionPositive />, progress: 28 },
					{ component: <RespectSendOtherPositive />, progress: 42 },
					{ component: <RespectNegativeSituation />, progress: 56 },
					{ component: <RespectOpinionNegative />, progress: 70 },
					{ component: <RespectSendOtherNegative />, progress: 84 },
					{
						component: <RespectDone />,
						bgColor: theme => theme.colors.primary.main,
						progress: 100,
					},
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Tech Viz / <strong>Respeito</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default DialogPage;
