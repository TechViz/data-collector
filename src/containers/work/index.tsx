import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import WorkIntro from './0-intro';
import WorkStartDate from './1-start-date';
import WorkStartHeirarchy from './2-start-hierarchy';
import WorkCurrentHeirarchy from './3-current-hierarchy';
import WorkLivesInWorkingCity from './4-lives-in-working-city';
import WorkTransportMethod from './5-transport-method';
import WorkTransportTime from './6-transport-time';
import WorkRemoteWorkAdaptation from './7-remote-work-adaptation';
import WorkRemoteAdaptationJustification from './8-remote-adaptation-justification';
import WorkReturningToWork from './9-returning-to-work';
import WorkCompanyDecisionsPointOfView from './10-company-decisions-point-of-view';
import WorkSatisfaction from './11-work-satisfaction';
import WorkDone from './12-done';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

const WorkPage: FC<{}> = ({}) => {
	useRequireAuth();

	return (
		<QuestionPageWithMultistep
			categoryName="userWork"
			nextPage="/dialog"
			pages={applyDefaultPage(
				[
					{ component: <WorkIntro />, bgColor: theme => theme.colors.primary.main, progress: 0 },
					{ component: <WorkStartDate />, progress: 8 },
					{ component: <WorkStartHeirarchy />, progress: 16 },
					{ component: <WorkCurrentHeirarchy />, progress: 24 },
					{ component: <WorkLivesInWorkingCity />, progress: 32 },
					{ component: <WorkTransportMethod />, progress: 40 },
					{ component: <WorkTransportTime />, progress: 48 },
					{ component: <WorkRemoteWorkAdaptation />, progress: 56 },
					{ component: <WorkRemoteAdaptationJustification />, progress: 72 },
					{ component: <WorkReturningToWork />, progress: 80 },
					{ component: <WorkCompanyDecisionsPointOfView />, progress: 88 },
					{ component: <WorkSatisfaction />, progress: 96 },
					{ component: <WorkDone />, bgColor: theme => theme.colors.primary.main, progress: 100 },
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Mônada Analytics / <strong>Trabalho</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default WorkPage;
