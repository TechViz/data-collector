import React, { FC } from 'react';
import SendOtherCard from '../../components/layout/send-other-card';

const ProblematizationSendOtherProblem: FC<{}> = ({}) => {
	return (
		<SendOtherCard
			text="Você gostaria de mudar alguma outra coisa?"
			textAreaFormDataName="what_to_change"
			titleFontSize={28}
		/>
	);
};

export default ProblematizationSendOtherProblem;
