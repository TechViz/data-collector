import { useRouter } from 'next/router';
import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import LoginCPFPassword from './0-cpf-password';
import LoginsDone from './1-done';

const LoginPage: FC<{}> = ({}) => {
	const { query } = useRouter();
	const oldPathName = query['old-path-name'] as string;

	return (
		<QuestionPageWithMultistep
			nextPage={oldPathName || 'about-you'}
			pages={applyDefaultPage(
				[
					{ component: <LoginCPFPassword />, progress: 0 },
					{
						component: <LoginsDone />,
						bgColor: theme => theme.colors.primary.main,
						progress: 100,
					},
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

export default LoginPage;
