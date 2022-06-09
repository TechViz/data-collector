import React, { FC } from 'react';
import SendOtherCard from '../../components/layout/send-other-card';

const RespectSendOtherPositive: FC<{}> = ({}) => {
	return (
		<SendOtherCard
			text="Você gostaria de contar outra situação?"
			textAreaFormDataName={['positive_situation_opinion', 'positive_situation']}
		/>
	);
};

export default RespectSendOtherPositive;
