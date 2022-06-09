import React, { FC } from 'react';
import IntroCard from '../../components/layout/intro-card';

const WelcomeAboutYou: FC<{}> = ({}) => {
	return (
		<IntroCard
			text="Nessa primeira parte, gostaríamos de te conhecer um pouco mais."
			title="Sobre Você"
		/>
	);
};

export default WelcomeAboutYou;
