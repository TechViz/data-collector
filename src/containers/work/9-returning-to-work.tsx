import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Slider from '../../components/reusable/slider';
import CardPageTemplate from '../../components/styling/card-page-template';
import ComputerMonitorSVG from '../../images/immediate-svg/computer-monitor';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 16px 0;
`;

const WorkTransportTime: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	const isInputValid = Boolean((formValue as any).returningToWork);

	return (
		<CardPageTemplate
			actionDisabled={!isInputValid}
			onSubmit={() => isInputValid && nextStage()}
			showBackArrow
			actionText="CONTINUAR"
			onBack={prevStage}
			showProgressBar
		>
			<Text>“Após o período de pandemia eu gostaria de...”</Text>
			<Slider
				iconElement={<ComputerMonitorSVG />}
				onChange={value => updateFormValue({ returningToWork: value })}
				defaultValue={(formValue as any).returningToWork}
				options={['permancer remoto', 'voltar ao presencial', 'trabalhar híbrido']}
			/>
		</CardPageTemplate>
	);
};

export default WorkTransportTime;
