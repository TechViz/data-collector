import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';

const DialogConversation: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			formDataName="conversation"
			title="Relate duas ou mais conversas que você teve durante o trabalho que acha importante nos contar."
			titleFontSize={24}
		/>
	);
};

export default DialogConversation;
