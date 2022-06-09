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
	'Trainee ou estágiário',
	'Assistente',
	'Técnico',
	'Analista ou especialista júnior',
	'Analista ou especialista pleno',
	'Analista ou especialista sênior',
	'Cordenação',
	'Supervisão',
	'Gerência',
	'Diretoria',
	'Presidência',
];

const WorkStartHeirarchy: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	return (
		<CardPageTemplate
			showProgressBar
			showBackArrow
			onBack={prevStage}
			onSubmit={nextStage}
			actionText="CONTINUAR"
			actionDisabled={!(formValue as any).startHierarchy}
		>
			<Text>“Eu entrei aqui no nível hierárquico de”</Text>
			<Select
				onChange={startHierarchy => updateFormValue({ startHierarchy })}
				initialValue={(formValue as any).startHierarchy}
				options={options}
			/>
		</CardPageTemplate>
	);
};

export default WorkStartHeirarchy;
