import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';
import ThumbsDownSVG from '../../images/immediate-svg/thumbs-down';

const RespectNegativeSituation: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			lateralIcon={<ThumbsDownSVG />}
			titleFontSize={22}
			formDataName="negative_situation"
			title="Descreva uma situação em que presenciou falta de respeito dentro do ambiente de trabalho."
		/>
	);
};

export default RespectNegativeSituation;
