import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const FinancesIsPayingDebt: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Hoje eu ____ pagando dívidas.”"
			options={['estou', 'não estou']}
			formDataName="isPayingDebt"
			isRoundButtons
		/>
	);
};

export default FinancesIsPayingDebt;
