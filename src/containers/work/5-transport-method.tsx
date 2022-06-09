import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Select from '../../components/reusable/select';
import CardPageTemplate from '../../components/styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const options = [
	'andando',
	'pedalando',
	'dirigindo',
	'de carona',
	'de Uber / 99 / táxi',
	'de transporte público',
];

const WorkTransportMethod: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	return (
		<CardPageTemplate
			showProgressBar
			showBackArrow
			onBack={prevStage}
			onSubmit={nextStage}
			actionText="CONTINUAR"
			actionDisabled={!(formValue as any).transportMethod}
		>
			<Text>“Quando presencial eu vou ___ até o trabalho.”</Text>
			<Select
				initialValue={(formValue as any).transportMethod}
				onChange={transportMethod => updateFormValue({ transportMethod })}
				options={options}
			/>
		</CardPageTemplate>
	);
};

export default WorkTransportMethod;
