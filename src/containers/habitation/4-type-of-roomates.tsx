import React, { FC } from 'react';
import styled from 'styled-components';
import ArrayButtonSelection from '../../components/reusable/array-button-selection';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import CardPageTemplate from '../../components/styling/card-page-template';

const Title = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0;
`;

const Text = styled.p`
	font-size: 20px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const HabitationTypeOfRoomates: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();

	function handleSubmit() {
		nextStage();
	}

	function handleSelect(newType: string) {
		const currValue = (formValue as any).typeOfRoomates || [];
		updateFormValue({ typeOfRoomates: [...currValue, newType] });
	}

	function handleUnselect(typeOfRoomate: string) {
		const currValue = (formValue as any).typeOfRoomates || [];
		const newValue = [...currValue];
		newValue.splice(
			currValue.findIndex((value: string) => value === typeOfRoomate),
			1,
		);
		updateFormValue({ typeOfRoomates: newValue });
	}

	return (
		<CardPageTemplate
			actionText="CONTINUAR"
			actionDisabled={!(formValue as any).typeOfRoomates?.length}
			onSubmit={handleSubmit}
			showProgressBar
			showBackArrow
			onBack={prevStage}
		>
			<Title>“Essas pessoas são eu e...”</Title>
			<Text>(selecione mais de uma opção se necessário)</Text>
			<ArrayButtonSelection
				selectedOptions={(formValue as any).typeOfRoomates || []}
				onSelect={handleSelect}
				onUnselect={handleUnselect}
				options={[
					'mãe',
					'pai',
					'irmão(s)',
					'filho(s)',
					'marido',
					'esposa',
					'animais',
					'companheiro(a)',
					'amigo(s)',
					'outro',
				]}
			/>
		</CardPageTemplate>
	);
};

export default HabitationTypeOfRoomates;
