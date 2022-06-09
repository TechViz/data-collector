import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';

const ProblematizationConflictCase: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			formDataName="conflict_case"
			title="Conte um caso de conflito que você participou durante o trabalho."
		/>
	);
};

export default ProblematizationConflictCase;
