import React, { FC } from 'react';
import SendOtherCard from '../../components/layout/send-other-card';

const ProblematizationSendOtherNotGoodThing: FC<{}> = ({}) => {
	return (
		<SendOtherCard
			text="Você gostaria de compartilhar algo mais?"
			textAreaFormDataName="speak_not_good_things"
		/>
	);
};

export default ProblematizationSendOtherNotGoodThing;
