import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const AboutYouTrans: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu sou...”"
			options={[
				'trans: sou de gênero diferente daquele atribuído ao nascimento.',
				'cis: sou do mesmo gênero atribuído ao nascimento.',
				'outro',
			]}
			formDataName="trans"
		/>
	);
};

export default AboutYouTrans;
