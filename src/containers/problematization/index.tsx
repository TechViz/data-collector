import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

import ProblematizationIntro from './0-intro';
import ProblematizationWhatToChange from './1-what-to-change';
import ProblematizationSendOtherProblem from './2-send-other-problem';
import ProblematizationSpeakNotGoodThings from './4-speak-not-good-things';
import ProblematizationSendOtherNotGoodThing from './5-send-other-not-good-thing';
import ProblematizationConflictCase from './6-conflict-case';
import ProblematizationNegativeThingsOpinion from './7-negative-things-opinion';
import ProblematizationSendOtherNegativeOpinion from './8-send-other-negative-opinion';
import ProblematizationDone from './9-done';

const ProblematizationPage: FC<{}> = ({}) => {
	useRequireAuth();

	return (
		<QuestionPageWithMultistep
			categoryName="problematization"
			nextPage="/feedback"
			pages={applyDefaultPage(
				[
					{
						component: <ProblematizationIntro />,
						bgColor: theme => theme.colors.primary.main,
						progress: 0,
					},
					{ component: <ProblematizationWhatToChange />, progress: 13 },
					{ component: <ProblematizationSendOtherProblem />, progress: 25 },
					{ component: <ProblematizationSpeakNotGoodThings />, progress: 38 },
					{ component: <ProblematizationSendOtherNotGoodThing />, progress: 50 },
					{ component: <ProblematizationConflictCase />, progress: 63 },
					{ component: <ProblematizationNegativeThingsOpinion />, progress: 77 },
					{ component: <ProblematizationSendOtherNegativeOpinion />, progress: 90 },
					{
						component: <ProblematizationDone />,
						bgColor: theme => theme.colors.primary.main,
						progress: 100,
					},
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Mônada Analytics / <strong>Argumentação</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default ProblematizationPage;
