import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const WorkCompanyDecisionsPointOfView: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“As decisões da empresa são tomadas à partir do ponto de vista de....”"
			text="Selecione mais de uma opção, se necessário."
			options={['lideranças', 'diretoria', 'colaboradores', 'clientes', 'todos que trabalham aqui']}
			formDataName="companyDecisionsPointOfView"
			isMultipleOptions
		/>
	);
};

export default WorkCompanyDecisionsPointOfView;
