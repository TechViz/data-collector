import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const WorkStartDate: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu comecei a trabalhar nessa empresa há...”"
			options={[
				'menos de 1 ano',
				'1 ano',
				'2 anos',
				'3 a 6 anos',
				'7 a 10 anos',
				'mais de 10 anos',
			]}
			formDataName="startDate"
		/>
	);
};

export default WorkStartDate;
