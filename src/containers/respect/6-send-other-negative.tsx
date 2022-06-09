import React, { FC } from 'react';
import SendOtherCard from '../../components/layout/send-other-card';

const RespectSendOtherNegative: FC<{}> = ({}) => {
	return (
		<SendOtherCard
			text="Você gostaria de contar outra situação?"
			textAreaFormDataName={['negative_situation_opinion', 'negative_situation']}
			formDataName="respect"
			shouldSendFormRequest
		/>
	);
};

export default RespectSendOtherNegative;
