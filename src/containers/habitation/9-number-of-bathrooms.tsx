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

const HabitationNumberOfBathrooms: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	function handleSubmit(numberOfBathrooms: string) {
		updateFormValue({ numberOfBathrooms });
		nextStage();
		return;
	}

	return (
		<CardPageTemplate showProgressBar showBackArrow onBack={prevStage}>
			<Text>“A minha casa tem ___ banheiro(s) com chuveiro, pia e vaso sanitário.”</Text>
			<ButtonSelection
				options={['0', '1', '2', '3', '4 ou mais']}
				defaultValue={(formValue as any).numberOfBathrooms}
				onChange={handleSubmit}
			/>
		</CardPageTemplate>
	);
};

export default HabitationNumberOfBathrooms;
