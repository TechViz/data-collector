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

const FinancesHasHealthInsurance: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();
	const [isAlternateAnswer, setIsAlternateAnswer] = React.useState(
		(formValue as any).hasHealthInsurance === 'tenho',
	);

	function handleSelectOption(hasHealthInsurance: string) {
		if (hasHealthInsurance === 'tenho') {
			updateFormValue({ hasHealthInsurance });
			setIsAlternateAnswer(true);
		} else {
			updateFormValue({ hasHealthInsurance, isHealthInsuranceTitular: null });
			nextStage();
		}
	}

	function handleSelectAlternativeOption(isHealthInsuranceTitular: string) {
		updateFormValue({ hasHealthInsurance: 'tenho', isHealthInsuranceTitular });
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
					<Text>“Eu sou ____ do meu plano de saúde.”</Text>
					<ButtonSelection
						isRoundButtons
						defaultValue={(formValue as any).isHealthInsuranceTitular}
						onChange={handleSelectAlternativeOption}
						options={['titular', 'dependente de outro titular']}
					/>
				</>
			) : (
				<>
					<Text>“Eu ___ plano de saúde.”</Text>
					<ButtonSelection
						isRoundButtons
						defaultValue={(formValue as any).hasHealthInsurance}
						onChange={handleSelectOption}
						options={['tenho', 'não tenho']}
					/>
				</>
			)}
		</CardPageTemplate>
	);
};

export default FinancesHasHealthInsurance;
