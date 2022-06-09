import React, { FC } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useMultistep } from '../../reusable/multistep-form/context';
import TextInput from '../../reusable/text-input';
import CardPageTemplate from '../../styling/card-page-template';

const Title = styled.p`
	font-size: 30px;
	margin: 0;
`;

const TitleContainer = styled.div`
	display: flex;
	margin: 0 0 42px 0;
`;

const TextAreaCard: FC<{
	title: React.ReactNode;
	formDataName: string;
	text?: React.ReactNode;
	titleFontSize?: number;
	lateralIcon?: React.ReactNode;
}> = ({ title, lateralIcon, formDataName, titleFontSize }) => {
	const { prevStage, nextStage, updateFormValue, formValue } = useMultistep();
	const [isValid, setIsValid] = React.useState(false);

	const currentFormArray: string[] = (formValue as any)[formDataName] || [''];
	const lasFormArrayItem = currentFormArray[currentFormArray.length - 1];

	function handleSubmit() {
		const validationError = getValidationError();

		if (validationError) {
			toast.error(validationError);
		} else {
			nextStage();
		}
	}

	function getValidationError() {
		if (!lasFormArrayItem) return 'Você deve escrever alguma coisa!';
		else if (lasFormArrayItem.length < 10) return 'O seu texto deve ser um pouco maior que isso';
		else return null;
	}

	function handleChange(value: string) {
		const newCurrentFormArray = [...currentFormArray];
		newCurrentFormArray[newCurrentFormArray.length - 1] = value;
		updateFormValue({ [formDataName]: newCurrentFormArray });
	}

	React.useEffect(() => {
		if (getValidationError()) setIsValid(false);
		else setIsValid(true);
	}, [lasFormArrayItem]);

	return (
		<CardPageTemplate
			actionText="ENVIAR"
			onSubmit={handleSubmit}
			showProgressBar
			showBackArrow
			actionDisabled={!isValid}
			onBack={prevStage}
		>
			<TitleContainer>
				{lateralIcon}
				<Title style={{ fontSize: titleFontSize, textAlign: lateralIcon ? undefined : 'center' }}>
					{title}
				</Title>
			</TitleContainer>
			<TextInput
				onChange={handleChange}
				defaultValue={lasFormArrayItem}
				fullWidth
				numberOfLines={8}
				label="Digite aqui..."
			/>
		</CardPageTemplate>
	);
};

export default TextAreaCard;
