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

const HabitationDidFriendsDie: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	function handleSubmit(didFriendsDie: string) {
		updateFormValue({ didFriendsDie });
		nextStage();
	}

	function handleBack() {
		if ((formValue as any).roomates === 'apenas eu') {
			prevStage();
			prevStage();
		} else {
			prevStage();
		}
	}

	return (
		<CardPageTemplate showProgressBar showBackArrow onBack={handleBack}>
			<Text>“De março de 2020 à setembro de 2021 pessoas próximas a mim faleceram. ”</Text>
			<ButtonSelection
				isRoundButtons
				defaultValue={(formValue as any).didFriendsDie}
				onChange={handleSubmit}
				options={['Sim', 'Não']}
			/>
		</CardPageTemplate>
	);
};

export default HabitationDidFriendsDie;
