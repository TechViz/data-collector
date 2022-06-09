import React, { FC } from 'react';
import styled from 'styled-components';
import ButtonSelection from '../../components/reusable/button-selection';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const HabitationTypeOfHouse: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();
	const [isAnswerText, setIsAnswerText] = React.useState(
		(formValue as any).typeOfHouse === 'outro',
	);
	const [isActionDisabled, setIsActionDisabled] = React.useState(
		!(formValue as any).specificTypeOfHouse,
	);

	function handleSelectOption(typeOfHouse: string) {
		if (typeOfHouse === 'outro') {
			updateFormValue({ typeOfHouse });
			setIsAnswerText(true);
		} else {
			updateFormValue({ typeOfHouse, specificTypeOfHouse: null });
			nextStage();
		}
	}

	function handleSubmit(form: HTMLFormElement) {
		const specificTypeOfHouse = ((form['type-of-house'] as HTMLInputElement).value || '').trim();

		updateFormValue({ typeOfHouse: 'outro', specificTypeOfHouse });
		nextStage();
	}

	function handleBack() {
		if (isAnswerText) setIsAnswerText(false);
		else prevStage();
	}

	return (
		<CardPageTemplate
			actionText={isAnswerText ? 'CONTINUAR' : undefined}
			actionDisabled={isActionDisabled}
			onSubmit={handleSubmit}
			showProgressBar
			showBackArrow
			onBack={handleBack}
		>
			<Text>“Esse imóvel é um(a)”</Text>

			{isAnswerText ? (
				<TextInput
					onChange={newValue => setIsActionDisabled(!newValue)}
					defaultValue={(formValue as any).specificTypeOfHouse || ''}
					name="type-of-house"
					label="Digite aqui"
					fullWidth
				/>
			) : (
				<ButtonSelection
					defaultValue={(formValue as any).typeOfHouse}
					onChange={handleSelectOption}
					options={['casa', 'apartamento', 'kitnet', 'hotel ou pensão', 'outro']}
				/>
			)}
		</CardPageTemplate>
	);
};

export default HabitationTypeOfHouse;
