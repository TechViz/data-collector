import React, { FC } from 'react';
import styled from 'styled-components';
import { useUpdateCategory } from '../../api/submissions/update-category';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Slider from '../../components/reusable/slider';
import CardPageTemplate from '../../components/styling/card-page-template';
import LampSVG from '../../images/immediate-svg/lamp';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 16px 0;
`;

const HabitationEnergyDisponibility: FC<{}> = ({}) => {
	const { nextStage, prevStage, formValue, updateFormValue } = useMultistep();
	const { mutate: updateCategoryMutation, status: updateCategoryStatus } = useUpdateCategory();

	const isInputValid = Boolean((formValue as any).energyDisponibility);

	function handleSubmit() {
		if (!isInputValid) return;
		updateCategoryMutation({ habitation: formValue });
	}

	React.useEffect(() => {
		if (updateCategoryStatus !== 'success') return;
		nextStage();
	}, [updateCategoryStatus]);

	return (
		<CardPageTemplate
			showProgressBar
			showBackArrow
			onBack={prevStage}
			onSubmit={handleSubmit}
			actionDisabled={!isInputValid}
			actionText="CONTINUAR"
		>
			<Text>“A disponibilidade de energia elétrica na minha casa é...”</Text>
			<Slider
				options={['Diária, por algumas horas', 'Diária, em tempo integral', 'Outra frequência']}
				iconElement={<LampSVG />}
				onChange={value => updateFormValue({ energyDisponibility: value })}
				defaultValue={(formValue as any).energyDisponibility}
			/>
		</CardPageTemplate>
	);
};

export default HabitationEnergyDisponibility;
