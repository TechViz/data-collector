import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Select from '../../components/reusable/select';
import CardPageTemplate from '../../components/styling/card-page-template';
import { allBrazilStates } from '../../constants/brazil-states';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const AboutYouCurrentState: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, formValue, prevStage } = useMultistep();

	function handleSubmit(currentState: string | null) {
		updateFormValue({ currentState });
	}

	const isActionDisabled = !(formValue as any).currentState;

	return (
		<CardPageTemplate
			showBackArrow
			onBack={prevStage}
			showProgressBar
			actionText="CONTINUAR"
			onSubmit={nextStage}
			actionDisabled={isActionDisabled}
		>
			<Text>“O estado em que moro hoje é...”</Text>
			<Select
				initialValue={(formValue as any).currentState}
				onChange={handleSubmit}
				options={allBrazilStates}
			/>
		</CardPageTemplate>
	);
};

export default AboutYouCurrentState;
