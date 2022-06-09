import React, { FC } from 'react';
import styled from 'styled-components';
import { useModal } from '../../contexts/modal';
import WhiteButton from '../reusable/button/white-variant';
import CloseButton from '../reusable/close-button';

const Root = styled.div`
	padding: 16px;
	background-color: white;
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.primary.main};
	box-shadow: ${({ theme }) => theme.shadows.card.medium};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: auto;
	max-width: 800px;
	max-height: 100%;
	position: relative;
	width: 100vw;
	height: 100vh;
`;

const TextContainer = styled.div`
	width: 100%;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 16px;
`;

const ActionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 16px;
`;

const TermsOfServiceModal: FC<{
	onAccept?: () => void;
	onRefuse?: () => void;
}> = ({ onAccept = () => {}, onRefuse = () => {} }) => {
	const { closeModal } = useModal();

	function handleAccept() {
		onAccept();
	}

	function handleRefuse() {
		onRefuse();
	}

	return (
		<Root>
			<CloseButton style={{ position: 'absolute' }} onClick={closeModal} />
			<TextContainer>
				<object data="/privacy_policy.pdf" type="application/pdf" width="100%" height="100%">
					<p>
						Seu Browser não consegue mostrar arquivos PDF
						<a href="/privacy_policy.pdf">Clique aqui para baixar o arquivo PDF</a>
					</p>
				</object>
			</TextContainer>
			<ActionsContainer>
				<WhiteButton fullWidth onClick={handleAccept}>
					ESTOU DE ACORDO
				</WhiteButton>
				<WhiteButton fullWidth onClick={handleRefuse}>
					NÃO ESTOU DE ACORDO
				</WhiteButton>
			</ActionsContainer>
		</Root>
	);
};

export default TermsOfServiceModal;
