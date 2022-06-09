import React, { FC } from 'react';
import styled from 'styled-components';
import ArrayButtonSelection from '../../reusable/array-button-selection';
import ButtonSelection from '../../reusable/button-selection';
import { useMultistep } from '../../reusable/multistep-form/context';
import CardPageTemplate from '../../styling/card-page-template';

const Title = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const Text = styled.p`
	font-size: 16px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const MultipleButtonsCard: FC<{
	title: string;
	options: string[];
	formDataName: string;
	text?: string;
	isMultipleOptions?: boolean;
	isRoundButtons?: boolean;
	onBack?: () => void;
}> = ({ title, onBack, isRoundButtons, text, formDataName, options, isMultipleOptions }) => {
	const { nextStage, updateFormValue, formValue, prevStage } = useMultistep();

	function handleSubmit(value: string) {
		updateFormValue({ [formDataName]: value });
		nextStage();
	}

	function handleSelect(selectedValue: string) {
		const currArray = (formValue as any)[formDataName] || [];
		updateFormValue({ [formDataName]: [...currArray, selectedValue] });
	}

	function handleUnselect(unselectedValue: string) {
		const currArray = (formValue as any)[formDataName] || [];
		const newArray = [...currArray];
		newArray.splice(
			currArray.findIndex((value: string) => value === unselectedValue),
			1,
		);
		updateFormValue({ [formDataName]: newArray });
	}

	return (
		<CardPageTemplate
			actionText={isMultipleOptions ? 'CONTINUAR' : undefined}
			actionDisabled={(formValue as any)[formDataName]?.length === 0}
			onSubmit={nextStage}
			showBackArrow
			onBack={onBack ?? prevStage}
			showProgressBar
		>
			<Title style={{ marginBottom: text ? '4px' : '' }}>{title}</Title>
			{text && <Text>{text}</Text>}
			{isMultipleOptions ? (
				<ArrayButtonSelection
					options={options}
					selectedOptions={(formValue as any)[formDataName] || []}
					onSelect={handleSelect}
					onUnselect={handleUnselect}
				/>
			) : (
				<ButtonSelection
					isRoundButtons={isRoundButtons}
					defaultValue={(formValue as any)[formDataName]}
					onChange={handleSubmit}
					options={options}
				/>
			)}
		</CardPageTemplate>
	);
};

export default MultipleButtonsCard;
