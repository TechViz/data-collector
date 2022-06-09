import React, { FC } from 'react';
import styled from 'styled-components';
import { useUpdateCategory } from '../../../api/submissions/update-category';
import ButtonSelection from '../../reusable/button-selection';
import { useMultistep } from '../../reusable/multistep-form/context';
import CardPageTemplate from '../../styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const SendOtherCard: FC<{
	text: string;
	textAreaFormDataName: string | string[];
	formDataName?: string;
	shouldSendFormRequest?: boolean;
	titleFontSize?: number;
}> = ({ text, shouldSendFormRequest, titleFontSize, textAreaFormDataName, formDataName }) => {
	const { nextStage, prevStage, formValue, updateFormValue } = useMultistep();
	const { mutate: updateCategoryMutation, isSuccess } = useUpdateCategory();

	function handleSubmit(value: string) {
		const formDataNames =
			typeof textAreaFormDataName === 'string' ? [textAreaFormDataName] : textAreaFormDataName;

		if (value === 'Sim') {
			formDataNames.forEach(formDataName => {
				const newFormData = [...((formValue as any)[formDataName] as string[])];
				newFormData.push('');
				updateFormValue({ [formDataName]: newFormData });
				prevStage();
			});
		} else {
			if (shouldSendFormRequest) updateCategoryMutation({ [formDataName!]: formValue });
			else nextStage();
		}
	}

	React.useEffect(() => {
		if (!isSuccess) return;
		nextStage();
	}, [isSuccess]);

	React.useEffect(() => {
		if (shouldSendFormRequest && !formDataName)
			throw new Error(
				`You set the "shouldSendFormRequest" flag, but didn't provide a formDataName`,
			);
	}, [formDataName, shouldSendFormRequest]);

	return (
		<CardPageTemplate showProgressBar showBackArrow onBack={prevStage}>
			<Text style={{ fontSize: titleFontSize || '' }}>{text}</Text>
			<ButtonSelection isRoundButtons onChange={handleSubmit} options={['Sim', 'Não']} />
		</CardPageTemplate>
	);
};

export default SendOtherCard;
