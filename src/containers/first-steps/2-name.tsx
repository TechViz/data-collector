import React, { FC } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useCreateName } from '../../api/user/create-name';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';

const Title = styled.p`
	font-size: 30px;
	text-align: center;
	font-weight: bold;
	margin: 0 0 42px 0;
`;

const FirstStepsName: FC<{}> = ({}) => {
	const { nextStage } = useMultistep();
	const [isActionDisabled, setIsActionDisabled] = React.useState(false);
	const { mutate: createName, isLoading, isSuccess } = useCreateName();

	function handleSubmit(formElem: HTMLFormElement) {
		const name = (formElem['user_name'] as HTMLInputElement).value.trim();
		if (!name) return toast.error('Você deve fornecer um nome');

		createName({ name });
		return;
	}

	React.useEffect(() => {
		if (!isSuccess) return;
		nextStage();
	}, [isSuccess]);

	return (
		<CardPageTemplate
			actionButtonBorderColor={theme => theme.colors.white.full}
			onSubmit={handleSubmit}
			actionText="CONTINUAR"
			actionLoading={isLoading}
			actionDisabled={isActionDisabled}
		>
			<Title>Como você gostaria que a gente te chamasse?</Title>
			<TextInput
				onChange={name => setIsActionDisabled(!name)}
				name="user_name"
				fullWidth
				label="Digite seu nome"
			/>
		</CardPageTemplate>
	);
};

export default FirstStepsName;
