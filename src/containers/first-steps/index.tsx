import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import FirstStepCPF from './0-cpf';
import FirstStepPassword from './1-password';
import FirstStepsAlmostDone from './2-almost-done';
import FirstStepsName from './2-name';

const FirstStepsPage: FC<{}> = ({}) => {
	return (
		<QuestionPageWithMultistep
			nextPage="/about-you"
			pages={applyDefaultPage(
				[
					{ component: <FirstStepCPF />, progress: 0 },
					{ component: <FirstStepPassword />, progress: 50 },
					{
						component: <FirstStepsAlmostDone />,
						bgColor: theme => theme.colors.primary.main,
						progress: 100,
					},
					{ component: <FirstStepsName />, progress: 100 },
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Tech Viz / <strong>Primeiros Passos</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default FirstStepsPage;
