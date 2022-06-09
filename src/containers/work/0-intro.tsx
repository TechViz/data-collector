import React, { FC } from 'react';

import IntroCard from '../../components/layout/intro-card';

const WorkIntro: FC<{}> = ({}) => {
	return (
		<IntroCard
			text="Conte-nos um pouco sobre sua relação com o ambiente de trabalho. Você considera que é uma relação saudável?"
			title="Trabalho"
		/>
	);
};

export default WorkIntro;
