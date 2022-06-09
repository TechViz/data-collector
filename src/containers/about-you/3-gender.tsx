import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const AboutYouGender: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu sou...”"
			options={['mulher', 'homem', 'não-binário', 'outro']}
			formDataName="gender"
		/>
	);
};

export default AboutYouGender;
