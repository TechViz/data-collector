import React, { FC } from 'react';

import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const AboutYouSexuality: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu sou...”"
			options={['homossexual', 'bissexual', 'assexual', 'heterossexual', 'outro']}
			formDataName="sexuality"
		/>
	);
};

export default AboutYouSexuality;
