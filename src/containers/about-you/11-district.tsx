import React, { FC } from 'react';
import styled from 'styled-components';
import { useUpdateCategory } from '../../api/submissions/update-category';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const AboutDistrict: FC<{}> = ({}) => {
	const { nextStage, formValue, prevStage, updateFormValue } = useMultistep();
	const { mutate: updateCategoryMutation, status: updateCategoryStatus } = useUpdateCategory();

	function handleSubmit() {
		updateCategoryMutation({ aboutYou: formValue });
	}

	React.useEffect(() => {
		if (updateCategoryStatus !== 'success') return;
		nextStage();
	}, [updateCategoryStatus]);

	const isActionDisabled = !(formValue as any).currentDistrict;

	return (
		<CardPageTemplate
			showProgressBar
			showBackArrow
			onBack={prevStage}
			onSubmit={handleSubmit}
			actionText="CONTINUAR"
			actionDisabled={isActionDisabled}
		>
			<Text>“Eu moro no bairro...”</Text>
			<TextInput
				defaultValue={(formValue as any).currentDistrict}
				onChange={currentDistrict => updateFormValue({ currentDistrict })}
				label="Digite seu bairro"
			/>
		</CardPageTemplate>
	);
};

export default AboutDistrict;
