import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';
import { useMultistep } from '../../components/reusable/multistep-form/context';

const WorkRemoteAdaptationJustification: FC<{}> = ({}) => {
	const { formValue } = useMultistep();

	return (
		<TextAreaCard
			formDataName="conversation"
			title={`Por que a sua adaptação foi ${(formValue as any).remoteWorkAdaptation}?`}
			titleFontSize={24}
		/>
	);
};

export default WorkRemoteAdaptationJustification;
