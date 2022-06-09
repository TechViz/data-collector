import React, { FC } from 'react';
import IntroCard from '../../components/layout/intro-card';

const FinancesIntro: FC<{}> = ({}) => {
	return (
		<IntroCard
			title="Finanças"
			text="Dinheiro é um assunto considerado tabu e é fundamental para a nossa qualidade de vida. Como estão suas finanças hoje?"
		/>
	);
};

export default FinancesIntro;
