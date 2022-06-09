import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Slider from '../../components/reusable/slider';
import CardPageTemplate from '../../components/styling/card-page-template';
import ClockSVG from '../../images/immediate-svg/clock';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 16px 0;
`;

const options = [
	'bem menos de 1 hora',
	'menos de 1 hora',
	'mais ou menos 1 hora',
	'mais de 1 hora',
	'bem mais de 1 hora.',
];

const WorkTransportTime: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	const isInputValid = Boolean((formValue as any).transportTime);

	return (
		<CardPageTemplate
			actionDisabled={!isInputValid}
			onSubmit={() => isInputValid && nextStage()}
			showBackArrow
			actionText="CONTINUAR"
			onBack={prevStage}
			showProgressBar
		>
			<Text>“E demoro ___ no trajeto.”</Text>
			<Slider
				iconElement={<ClockSVG />}
				onChange={value => updateFormValue({ transportTime: value })}
				defaultValue={(formValue as any).transportTime}
				options={options}
			/>
		</CardPageTemplate>
	);
};

export default WorkTransportTime;
