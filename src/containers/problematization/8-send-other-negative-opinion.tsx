import React, { FC } from 'react';
import SendOtherCard from '../../components/layout/send-other-card';

const ProblematizationSendOtherNegativeOpinion: FC<{}> = ({}) => {
	return (
		<SendOtherCard
			text="Você gostaria de compartilhar algo mais?"
			textAreaFormDataName={['negative_things_opinion', 'conflict_case']}
			formDataName={'problematization'}
			shouldSendFormRequest
		/>
	);
};

export default ProblematizationSendOtherNegativeOpinion;
