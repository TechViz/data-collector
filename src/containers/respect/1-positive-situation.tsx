import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';
import ThumbsUpSVG from '../../images/immediate-svg/thumbs-up';

const RespectPositiveSituation: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			formDataName="positive_situation"
			title="Descreva uma situação positiva que você vivenciou no trabalho. Aonde você estava? Quem estava envolvido? Seja detalhista!"
			lateralIcon={<ThumbsUpSVG />}
			titleFontSize={22}
		/>
	);
};

export default RespectPositiveSituation;
