import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Slider from '../../components/reusable/slider';
import CardPageTemplate from '../../components/styling/card-page-template';
import WorkAtHomeSVG from '../../images/immediate-svg/work-at-home';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 16px 0;
`;

const WorkRemoteWorkAdaptation: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	const isInputValid = Boolean((formValue as any).remoteWorkAdaptation);

	return (
		<CardPageTemplate
			actionDisabled={!isInputValid}
			onSubmit={() => isInputValid && nextStage()}
			showBackArrow
			actionText="CONTINUAR"
			onBack={() => {
				if ((formValue as any).livesInWorkingCity === 'Não') {
					prevStage();
					prevStage();
					prevStage();
				} else {
					prevStage();
				}
			}}
			showProgressBar
		>
			<Text>“A minha adaptação no trabalho remoto foi...”</Text>
			<Slider
				iconElement={<WorkAtHomeSVG />}
				onChange={value => updateFormValue({ remoteWorkAdaptation: value })}
				defaultValue={(formValue as any).remoteWorkAdaptation}
				options={['muito difícil', 'difícil', 'indiferente', 'fácil', 'muito fácil']}
			/>
		</CardPageTemplate>
	);
};

export default WorkRemoteWorkAdaptation;
