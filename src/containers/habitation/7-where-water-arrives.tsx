import React, { FC } from 'react';
import styled from 'styled-components';
import ButtonSelection from '../../components/reusable/button-selection';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import CardPageTemplate from '../../components/styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const HabitationWhereWaterArrives: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	function handleSubmit(whereWaterArrives: string) {
		updateFormValue({ whereWaterArrives });
		nextStage();
	}

	return (
		<CardPageTemplate showProgressBar showBackArrow onBack={prevStage}>
			<Text>“A água que utilizo em casa chega...”</Text>
			<ButtonSelection
				defaultValue={(formValue as any).whereWaterArrives}
				onChange={handleSubmit}
				options={[
					'encanada, até dentro da casa',
					'encanada, mas apenas no terreno',
					'não chega encanada',
				]}
			/>
		</CardPageTemplate>
	);
};

export default HabitationWhereWaterArrives;
