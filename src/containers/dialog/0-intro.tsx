import React, { FC } from 'react';
import IntroCard from '../../components/layout/intro-card';

const DialogIntro: FC<{}> = ({}) => {
	return (
		<IntroCard
			text="À partir de agora vamos pedir para que você relate alguns acontecimentos que vivênciou no ambiente de trabalho. Vamos começar com a comunicação."
			title="Diálogo"
		/>
	);
};

export default DialogIntro;
