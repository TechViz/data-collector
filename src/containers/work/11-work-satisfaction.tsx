import React, { FC } from 'react';
import styled from 'styled-components';
import { useUpdateCategory } from '../../api/submissions/update-category';
import ButtonSelection from '../../components/reusable/button-selection';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import CardPageTemplate from '../../components/styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const WorkSatisfaction: FC<{}> = ({}) => {
	const { nextStage, prevStage, formValue } = useMultistep();
	const { mutate: updateCategoryMutation, status: updateCategoryStatus } = useUpdateCategory();

	function handleSubmit(workSatisfaction: string) {
		const newFormValue = { ...formValue, workSatisfaction };
		updateCategoryMutation({ userWork: newFormValue });
	}

	React.useEffect(() => {
		if (updateCategoryStatus !== 'success') return;
		nextStage();
	}, [updateCategoryStatus]);

	return (
		<CardPageTemplate showProgressBar showBackArrow onBack={prevStage}>
			<Text>“Atualmente meu nível de satisfação com o trabalho é...”</Text>
			<ButtonSelection
				defaultValue={(formValue as any).workSatisfaction}
				onChange={handleSubmit}
				options={['muito alto', 'alto', 'médio', 'baixo', 'muito baixo']}
			/>
		</CardPageTemplate>
	);
};

export default WorkSatisfaction;
