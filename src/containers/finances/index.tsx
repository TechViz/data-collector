import React, { FC } from 'react';
import QuestionPageWithMultistep from '../../components/styling/question-page-with-multistep';
import { applyDefaultPage } from '../../components/styling/question-page-with-multistep/apply-default-pages';
import FinancesIntro from './0-intro';
import FinancesSalary from './1-salary';
import FinancesHasOtherIncomeSources from './2-has-other-income-sources';
import FinancesFinancialDependents from './3-financial-dependents';
import FinancesSalaryDestination from './4-salary-destination';
import FinancesHasHealthInsurance from './5-has-health-insurance';
import FinancesHasMultipleBankAccounts from './6-has-multiple-bank-accounts';
import FinancesHasCreditCard from './7-has-credit-card';
import FinancesIsPayingDebt from './8-is-paying-debt';
import FinancesCanStoreMoney from './9-can-store-money';
import FinancesDone from './10-done';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

const FinancesPage: FC<{}> = ({}) => {
	useRequireAuth();

	return (
		<QuestionPageWithMultistep
			categoryName="finances"
			nextPage="/work"
			pages={applyDefaultPage(
				[
					{
						component: <FinancesIntro />,
						bgColor: theme => theme.colors.primary.main,
						progress: 0,
					},
					{ component: <FinancesSalary />, progress: 10 },
					{ component: <FinancesHasOtherIncomeSources />, progress: 20 },
					{ component: <FinancesFinancialDependents />, progress: 30 },
					{ component: <FinancesSalaryDestination />, progress: 40 },
					{ component: <FinancesHasHealthInsurance />, progress: 50 },
					{ component: <FinancesHasMultipleBankAccounts />, progress: 60 },
					{ component: <FinancesHasCreditCard />, progress: 70 },
					{ component: <FinancesIsPayingDebt />, progress: 80 },
					{ component: <FinancesCanStoreMoney />, progress: 90 },
					{
						component: <FinancesDone />,
						bgColor: theme => theme.colors.primary.main,
						progress: 100,
					},
				],
				{
					bgColor: theme => theme.colors.blue.main,
					title: (
						<>
							Tech Viz / <strong>Finanças</strong>
						</>
					),
				},
			)}
		/>
	);
};

export default FinancesPage;
