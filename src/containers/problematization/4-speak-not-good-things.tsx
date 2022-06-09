import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';

const ProblematizationSpeakNotGoodThings: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			titleFontSize={26}
			formDataName="speak_not_good_things"
			title="O que faria você falar coisas que não estão boas?"
		/>
	);
};

export default ProblematizationSpeakNotGoodThings;
