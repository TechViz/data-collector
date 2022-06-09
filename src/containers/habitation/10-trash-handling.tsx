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

const HabitationTrashHandling: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();
	const [isAnswerText, setIsAnswerText] = React.useState(
		(formValue as any).trashHandling === 'Outro destino',
	);
	const [isActionDisabled, setIsActionDisabled] = React.useState(!(formValue as any).trashHandling);

	function handleSelectOption(trashHandling: string) {
		if (trashHandling === 'Outro destino') {
			updateFormValue({ trashHandling });
			setIsAnswerText(true);
		} else {
			updateFormValue({ trashHandling, specificTrashHandling: null });
			nextStage();
		}
	}

	function handleSubmit(form: HTMLFormElement) {
		const specificTrashHandling = (form['trash-handling'] as HTMLInputElement).value.trim();

		updateFormValue({ trashHandling: 'Outro destino', specificTrashHandling });
		nextStage();
	}

	function handleBack() {
		if (isAnswerText) {
			setIsAnswerText(false);
		} else {
			prevStage();
		}
	}

	return (
		<CardPageTemplate
			showProgressBar
			actionDisabled={isActionDisabled}
			actionText={isAnswerText ? 'CONTINUAR' : undefined}
			showBackArrow
			maxWidth={850}
			onSubmit={handleSubmit}
			onBack={handleBack}
		>
			<Text>“O lixo da minha casa é...”</Text>
			{isAnswerText ? (
				<TextInput
					onChange={newValue => setIsActionDisabled(!newValue)}
					defaultValue={(formValue as any).specificTrashHandling || ''}
					name="trash-handling"
					label="Digite aqui"
					fullWidth
				/>
			) : (
				<span style={{ fontSize: 16 }}>
					<ButtonSelection
						defaultValue={(formValue as any).trashHandling}
						onChange={handleSelectOption}
						isRoundButtons
						roundOptionSize={180}
						options={[
							'Coletado no domicílio por serviço de limpeza',
							'Depositado na rua e coletado por serviço de limpeza',
							'Outro destino',
						]}
					/>
				</span>
			)}
		</CardPageTemplate>
	);
};

export default HabitationTrashHandling;
