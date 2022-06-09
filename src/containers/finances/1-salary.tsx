import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Slider from '../../components/reusable/slider';
import CardPageTemplate from '../../components/styling/card-page-template';
import MoneyStacksSVG from '../../images/immediate-svg/money-stacks';

const Title = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 16px 0;
`;

const FinancesSalary: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, formValue, prevStage } = useMultistep();

	const isInputValid = Boolean((formValue as any).salary);

	return (
		<CardPageTemplate
			actionDisabled={!isInputValid}
			onSubmit={() => isInputValid && nextStage()}
			showBackArrow
			actionText="CONTINUAR"
			onBack={prevStage}
			showProgressBar
		>
			<Title>“Minha faixa salarial hoje é de....”</Title>
			<Slider
				iconElement={<MoneyStacksSVG />}
				onChange={value => updateFormValue({ salary: value })}
				defaultValue={(formValue as any).salary}
				options={[
					'até R$ 1.000',
					'R$ 1.001 à R$ 3.000',
					'R$ 3.001 à R$ 5.000',
					'R$ 5.001 à R$ 10.000',
					'mais de R$ 10.000',
				]}
			/>
		</CardPageTemplate>
	);
};

export default FinancesSalary;
