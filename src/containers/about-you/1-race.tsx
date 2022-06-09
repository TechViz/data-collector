import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const AboutYouRace: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu me indetifico com a cor / raça...”"
			options={['indígena', 'amarela', 'preta', 'parda', 'branca']}
			formDataName="race"
		/>
	);
};

export default AboutYouRace;
