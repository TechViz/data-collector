import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const FinancesFinancialDependents: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu tenho ____ dependentes financeiros*”"
			text="*Pessoa(s) que depende(m) dos seus recursos financeiros para sobreviver."
			options={['0', '1', '2', '3', '4', '+ de 4']}
			formDataName="financialDependents"
		/>
	);
};

export default FinancesFinancialDependents;
