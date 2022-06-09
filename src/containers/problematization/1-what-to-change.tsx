import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';

const ProblematizationWhatToChange: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			titleFontSize={25}
			formDataName="what_to_change"
			title="O que você tem vontade de mudar dentro do seu ambiente de trabalho?"
		/>
	);
};

export default ProblematizationWhatToChange;
