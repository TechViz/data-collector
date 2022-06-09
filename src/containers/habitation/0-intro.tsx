import React, { FC } from 'react';
import IntroCard from '../../components/layout/intro-card';

const HabitationIntro: FC<{}> = ({}) => {
	return (
		<IntroCard
			text="Conte-nos como é a sua casa e a relação com as pessoas que moram com você."
			title="Lar, doce lar..."
		/>
	);
};

export default HabitationIntro;
