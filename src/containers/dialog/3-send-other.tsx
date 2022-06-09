import React, { FC } from 'react';
import SendOtherCard from '../../components/layout/send-other-card';

const DialogSendOther: FC<{}> = ({}) => {
	return (
		<SendOtherCard
			text="Você gostaria de enviar outro relato?"
			textAreaFormDataName={['conversation', 'opinion']}
			formDataName="dialog"
			shouldSendFormRequest
		/>
	);
};

export default DialogSendOther;
