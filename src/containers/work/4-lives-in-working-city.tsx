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

const WorkLivesInWorkingCity: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	function handleChange(option: string) {
		updateFormValue({ livesInWorkingCity: option });
		if (option === 'Sim') {
			nextStage();
		} else {
			nextStage();
			nextStage();
			nextStage();
		}
	}

	return (
		<CardPageTemplate showProgressBar showBackArrow onBack={prevStage}>
			<Text>”Eu moro na mesma cidade em que trabalho.”</Text>
			<ButtonSelection
				isRoundButtons
				options={['Sim', 'Não']}
				onChange={handleChange}
				defaultValue={(formValue as any).livesInWorkingCity}
			/>
		</CardPageTemplate>
	);
};

export default WorkLivesInWorkingCity;
