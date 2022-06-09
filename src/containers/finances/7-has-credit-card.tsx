import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const FinancesHasCreditCard: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu ____ cartão de crédito.”"
			options={['não tenho', 'tenho um', 'tenho mais de um']}
			formDataName="hasCreditCard"
			isRoundButtons
		/>
	);
};

export default FinancesHasCreditCard;
