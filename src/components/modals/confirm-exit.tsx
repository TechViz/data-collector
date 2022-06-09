import React, { FC } from 'react';
import styled from 'styled-components';
import { useModal } from '../../contexts/modal';
import WhiteButtonTemplate from '../reusable/button/white-variant';

const Root = styled.div`
	padding: 16px;
	background-color: white;
	border-radius: 12px;
	box-shadow: ${({ theme }) => theme.shadows.card.medium};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: auto;
	max-width: 600px;
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

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	column-gap: 16px;
`;

const WhiteButton = styled(WhiteButtonTemplate)`
	box-shadow: none;
	padding: 4px 16px;
	border-width: 2px;
	font-weight: bold;
`;

const ConfirmExitModal: FC<{
	onLeave: () => void;
}> = ({ onLeave }) => {
	const { closeModal } = useModal();

	return (
		<Root>
			<Title>Você quer mesmo sair?</Title>
			<Text>
				Seu progresso foi salvo e você pode continuar de onde parou em sua próxima visita.
			</Text>
			<ButtonsContainer>
				<WhiteButton fullWidth onClick={closeModal}>
					VOLTAR
				</WhiteButton>
				<WhiteButton
					fullWidth
					onClick={() => {
						closeModal();
						onLeave();
					}}
				>
					SAIR
				</WhiteButton>
			</ButtonsContainer>
		</Root>
	);
};

export default ConfirmExitModal;
