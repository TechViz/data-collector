import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Select from '../../components/reusable/select';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const options = [
	'sou a',
	'me casei com a',
	'tenho uma união estável com a',
	'sou mãe da',
	'sou pai da',
	'não sou parente e/ou não convivo com a',
	'outro',
];

const HabitationRelationshipWithHouseOwner: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();
	const [isAnswerText, setIsAnswerText] = React.useState(
		(formValue as any).relationshipWithHouseOwner === 'outro',
	);
	const [isActionDisabled, setIsActionDisabled] = React.useState(true);
	const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

	React.useEffect(() => {
		setIsActionDisabled(
			isAnswerText
				? !(formValue as any).specificRelationshipWithHouseOwner
				: !(formValue as any).relationshipWithHouseOwner,
		);
	}, [formValue]);

	function handleSelectOption(relationshipWithHouseOwner: string | null) {
		updateFormValue({ relationshipWithHouseOwner });
		setSelectedOption(relationshipWithHouseOwner);
	}

	function handleSubmit(form: HTMLFormElement) {
		if (isAnswerText) {
			const specificRelationshipWithHouseOwner = (
				form['relationship-with-house-owner'] as HTMLInputElement
			).value.trim();

			updateFormValue({ relationshipWithHouseOwner: 'outro', specificRelationshipWithHouseOwner });
			nextStage();
		} else {
			if (selectedOption === 'outro') {
				updateFormValue({ relationshipWithHouseOwner: selectedOption });
				setIsAnswerText(true);
			} else {
				updateFormValue({
					relationshipWithHouseOwner: selectedOption,
					specificRelationshipWithHouseOwner: null,
				});
				nextStage();
			}
		}
	}

	function handleBack() {
		if (isAnswerText) {
			setIsAnswerText(false);
		} else {
			prevStage();
		}
	}

	return (
		<CardPageTemplate
			actionText="CONTINUAR"
			actionDisabled={isActionDisabled}
			showProgressBar
			showBackArrow
			onSubmit={handleSubmit}
			onBack={handleBack}
		>
			<Text>
				{isAnswerText ? (
					<span style={{ fontSize: 25 }}>
						Descreva o seu grau de parentesco ou de convivência com a pessoa responsável pelo imóvel
					</span>
				) : (
					<>“Eu ____ pessoa proprieária do imóvel.”</>
				)}
			</Text>
			{isAnswerText ? (
				<TextInput
					onChange={newValue => setIsActionDisabled(!newValue)}
					defaultValue={(formValue as any).specificRelationshipWithHouseOwner || ''}
					name="relationship-with-house-owner"
					label="Digite aqui"
					fullWidth
				/>
			) : (
				<Select
					initialValue={(formValue as any).relationshipWithHouseOwner}
					onChange={handleSelectOption}
					options={options}
				/>
			)}
		</CardPageTemplate>
	);
};

export default HabitationRelationshipWithHouseOwner;
