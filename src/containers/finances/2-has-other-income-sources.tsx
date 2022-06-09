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

const FinancesHasOtherIncomeSources: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();
	const [isAlternateAnswer, setIsAlternateAnswer] = React.useState(
		(formValue as any).hasOtherIncomeSources === 'possuo',
	);

	function handleSelectOption(hasOtherIncomeSources: string) {
		if (hasOtherIncomeSources === 'possuo') {
			updateFormValue({ hasOtherIncomeSources });
			setIsAlternateAnswer(true);
		} else {
			updateFormValue({ hasOtherIncomeSources, otherIncomeSources: null });
			nextStage();
		}
	}

	function handleSelectAlternativeOption(otherIncomeSources: string) {
		updateFormValue({ hasOtherIncomeSources: 'possuo', otherIncomeSources });
		nextStage();
	}

	function handleBack() {
		if (isAlternateAnswer) setIsAlternateAnswer(false);
		else prevStage();
	}

	return (
		<CardPageTemplate showProgressBar showBackArrow onBack={handleBack}>
			{isAlternateAnswer ? (
				<>
					<Text>“Minha renda representa ___ do total da renda da minha família.”</Text>
					<ButtonSelection
						defaultValue={(formValue as any).otherIncomeSources}
						onChange={handleSelectAlternativeOption}
						options={['uma pequena parte', 'metade', 'mais da metade', 'o valor inteiro']}
					/>
				</>
			) : (
				<>
					<Text>“Eu ___ outra fonte de renda.”</Text>
					<ButtonSelection
						defaultValue={(formValue as any).hasOtherIncomeSources}
						isRoundButtons
						onChange={handleSelectOption}
						options={['possuo', 'não possuo']}
					/>
				</>
			)}
		</CardPageTemplate>
	);
};

export default FinancesHasOtherIncomeSources;
