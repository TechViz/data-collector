import React, { FC } from 'react';
import MultipleButtonsCard from '../../components/layout/multiple-buttons-card';

const AboutYouDeficiency: FC<{}> = ({}) => {
	return (
		<MultipleButtonsCard
			title="“Eu sou uma pessoa ____ deficiencia”"
			options={['sem', 'visivelmente com', 'que não aparenta, porém com ']}
			formDataName="deficiency"
		/>
	);
};

export default AboutYouDeficiency;
