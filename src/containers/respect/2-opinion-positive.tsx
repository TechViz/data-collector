import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';

const RespectOpinionPositive: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			formDataName="positive_situation_opinion"
			title={
				<>
					O que você <strong>sentiu</strong> durante essa situação que acabou de nos relatar?
				</>
			}
		/>
	);
};

export default RespectOpinionPositive;
