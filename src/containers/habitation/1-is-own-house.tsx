import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Slider from '../../components/reusable/slider';
import CardPageTemplate from '../../components/styling/card-page-template';
import HouseSVG from '../../images/immediate-svg/house';

const Title = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 16px 0;
`;

const HabitationIsOwnHouse: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, formValue, prevStage } = useMultistep();

	const isInputValid = Boolean((formValue as any).isOwnHouse);

	return (
		<CardPageTemplate
			actionDisabled={!isInputValid}
			onSubmit={() => isInputValid && nextStage()}
			showBackArrow
			actionText="CONTINUAR"
			onBack={prevStage}
			showProgressBar
		>
			<Title>“Eu moro em um imóvel...”</Title>
			<Slider
				iconElement={<HouseSVG />}
				onChange={value => updateFormValue({ isOwnHouse: value })}
				defaultValue={(formValue as any).isOwnHouse}
				options={['próprio', 'alugado', 'financiado']}
			/>
		</CardPageTemplate>
	);
};

export default HabitationIsOwnHouse;
