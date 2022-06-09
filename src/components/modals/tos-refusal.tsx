import React, { FC } from 'react';
import styled from 'styled-components';
import TextInput from '../reusable/text-input';
import ButtonTemplate from '../reusable/button/white-variant';
import { useModal } from '../../contexts/modal';
import { useSendTOSRefusalMessage } from '../../api/tos-refusal-message/send';
import { toastifyProblems } from '../../libs/toastify-problems';
import { useRouter } from 'next/router';

const Root = styled.form`
	padding: 16px;
	background-color: white;
	border-radius: 12px;
	box-shadow: ${({ theme }) => theme.shadows.card.medium};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: auto;
	max-width: 700px;
	max-height: 100%;
	row-gap: 16px;
	position: relative;
	width: 100vw;
	padding: 32px 64px;
`;

const Title = styled.h1`
	margin: 0;
`;

const Text = styled.p`
	margin: 0;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-top: 16px;
`;

const Button = styled(ButtonTemplate)`
	box-shadow: none;
	padding: 4px 16px;
	border-width: 2px;
	font-weight: bold;
`;

const TOSRefusalModal: FC<{}> = ({}) => {
	const { closeModal } = useModal();
	const router = useRouter();
	const { mutate: sendTOSRefusalMessage, isLoading, isSuccess } = useSendTOSRefusalMessage();

	function validate(message: string) {
		if (!message) return ['Você deve especificar uma mensagem'];
		return [];
	}

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		const formElem = event.target as HTMLFormElement;
		const commentElem = formElem['comment'] as HTMLInputElement;
		const comment = commentElem.value.trim();

		const problems = validate(comment);
		if (problems.length > 0) return toastifyProblems(problems);

		sendTOSRefusalMessage({ message: comment });
	}

	React.useEffect(() => {
		if (!isSuccess) return;
		closeModal();
		router.push('/thanks');
	}, [isSuccess]);

	return (
		<Root onSubmit={handleSubmit}>
			<Title>Queremos te ouvir</Title>
			<Text>Por qual motivo você não concordou com nossos Termos de Privacidade?</Text>
			<TextInput name="comment" label="Digite seu comentário aqui" fullWidth />
			<ButtonContainer>
				<Button type="button" onClick={closeModal}>
					VOLTAR
				</Button>
				<Button isLoading={isLoading} type="submit">
					ENVIAR
				</Button>
			</ButtonContainer>
		</Root>
	);
};

export default TOSRefusalModal;
