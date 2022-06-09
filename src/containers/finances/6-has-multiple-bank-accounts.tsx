import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const FinancesHasMultipleBankAccounts: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu ____ conta bancária.”"
			options={['não tenho', 'tenho uma', 'tenho mais de uma']}
			formDataName="hasMultipleBankAccounts"
			isRoundButtons
		/>
	);
};

export default FinancesHasMultipleBankAccounts;
