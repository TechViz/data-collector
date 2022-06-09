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

const WorkCurrentHeirarchy: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	return (
		<CardPageTemplate
			showProgressBar
			showBackArrow
			onBack={prevStage}
			onSubmit={nextStage}
			actionText="CONTINUAR"
			actionDisabled={!(formValue as any).currentHierarchy}
		>
			<Text>“Hoje, meu nível hierárquico é de...”</Text>
			<Select
				initialValue={(formValue as any).currentHierarchy}
				onChange={currentHierarchy => updateFormValue({ currentHierarchy })}
				options={options}
			/>
		</CardPageTemplate>
	);
};

export default WorkCurrentHeirarchy;
