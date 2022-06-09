import React, { FC } from 'react';
import TextAreaCard from '../../components/layout/text-area-card';

const DialogOpinion: FC<{}> = ({}) => {
	return (
		<TextAreaCard
			formDataName="opinion"
			title={
				<>
					O que você <strong>sentiu</strong> durante esse acontecimento que acabou de nos relatar?
				</>
			}
		/>
	);
};

export default DialogOpinion;
