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

const HabitationWaterSource: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();
	const [isAnswerText, setIsAnswerText] = React.useState(
		(formValue as any).waterSource === 'outro',
	);
	const [isActionDisabled, setIsActionDisabled] = React.useState(
		!(formValue as any).specificWaterSource,
	);

	function handleSelectOption(waterSource: string) {
		if (waterSource === 'outro') {
			updateFormValue({ waterSource });
			setIsAnswerText(true);
		} else {
			updateFormValue({ waterSource, specificWaterSource: null });
			nextStage();
		}
	}

	function handleSubmit(form: HTMLFormElement) {
		const specificWaterSource = (form['water-source'] as HTMLInputElement).value.trim();

		updateFormValue({ waterSource: 'outro', specificWaterSource });
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
			actionText={isAnswerText ? 'CONTINUAR' : undefined}
			actionDisabled={isActionDisabled}
			showProgressBar
			showBackArrow
			onSubmit={handleSubmit}
			onBack={handleBack}
		>
			<Text>“A caixa d’água é abastecida via...”</Text>
			{isAnswerText ? (
				<TextInput
					onChange={newValue => setIsActionDisabled(!newValue)}
					defaultValue={(formValue as any).specificWaterSource || ''}
					name="water-source"
					label="Digite aqui"
					fullWidth
				/>
			) : (
				<ButtonSelection
					defaultValue={(formValue as any).waterSource}
					onChange={handleSelectOption}
					options={[
						'rede geral de distribuição ',
						'carro pipa',
						'poço profundo ou artesiano',
						'outro',
					]}
				/>
			)}
		</CardPageTemplate>
	);
};

export default HabitationWaterSource;
