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
	'Alimentação',
	'Habitação',
	'Vestuário',
	'Transporte',
	'Higiene e cuidados pessoais',
	'Assistência à saude',
	'Educação',
	'Recreação e cultura',
	'Fumo',
	'Serviços pessoais',
	'Outros',
];

const FinancesSalaryDestination: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, prevStage, formValue } = useMultistep();
	const [isAlternateAnswer, setIsAlternateAnswer] = React.useState(
		(formValue as any).salaryDestination === 'Outros',
	);
	const [isActionDisabled, setIsActionDisabled] = React.useState(
		!(formValue as any).specificSalaryDestination,
	);

	function handleChangeOption(salaryDestination: string | null) {
		updateFormValue({ salaryDestination, specificSalaryDestination: null });
		setIsActionDisabled(false);
	}

	function handleMainSubmit() {
		const salaryDestination = (formValue as any).salaryDestination;
		if (salaryDestination === 'Outros') {
			setIsAlternateAnswer(true);
			setIsActionDisabled(true);
		} else {
			nextStage();
		}
	}

	function handleAlternateSubmit(form: HTMLFormElement) {
		const specificSalaryDestination = (form['salary-destination'] as HTMLInputElement).value.trim();

		updateFormValue({ salaryDestination: 'Outros', specificSalaryDestination });
		nextStage();
	}

	function handleSubmit(form: HTMLFormElement) {
		if (isAlternateAnswer) handleAlternateSubmit(form);
		else handleMainSubmit();
	}

	function handleBack() {
		if (isAlternateAnswer) {
			setIsAlternateAnswer(false);
		} else {
			prevStage();
		}
	}

	return (
		<CardPageTemplate
			actionText="CONTINUAR"
			onSubmit={handleSubmit}
			showProgressBar
			showBackArrow
			onBack={handleBack}
			actionDisabled={isActionDisabled}
		>
			<Text>“A maior parte do meu salário vai para despesas com...”</Text>

			{isAlternateAnswer ? (
				<>
					<TextInput
						onChange={newValue => setIsActionDisabled(!newValue)}
						defaultValue={(formValue as any).specificSalaryDestination || ''}
						name="salary-destination"
						label="Digite aqui"
						fullWidth
					/>
				</>
			) : (
				<Select
					initialValue={(formValue as any).salaryDestination}
					onChange={handleChangeOption}
					options={options}
				/>
			)}
		</CardPageTemplate>
	);
};

export default FinancesSalaryDestination;
