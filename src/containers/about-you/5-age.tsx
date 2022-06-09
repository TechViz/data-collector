import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const AboutYouAge: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu tenho...”"
			options={[
				'menos de 20 anos ',
				'entre 20 e 30 anos',
				'entre 31 e 40 anos',
				'entre 41 e 50 anos',
				'mais de 51 anos',
			]}
			formDataName="age"
		/>
	);
};

export default AboutYouAge;
