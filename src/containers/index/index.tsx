import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import { deployedURLHome } from '../../constants/deployed-url';

import Navbar from '../../components/layout/navbar';
import Sidemenu from '../../components/layout/sidemenu';
import Bubble from './bubble';
import Images from '../../images';
import Radio from '../../components/reusable/radio';
import { useModal } from '../../contexts/modal';
import ButtonTemplate from '../../components/reusable/button';
import TermsOfServiceModal from '../../components/modals/terms-of-service';
import TOSRefusalModal from '../../components/modals/tos-refusal';
import { useAccessKey } from '../../contexts/access-key';

const Main = styled.div`
	width: 100%;
	height: 100%;
	font-size: 20px;
	background-color: ${props => props.theme.colors.white.background};
	transition: 200ms;
	color: white;
	display: grid;
	grid-template-columns: 35% auto;
`;

const Root = styled.div`
	height: 100vh;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`;

const LeftSide = styled.div`
	background-color: ${({ theme }) => theme.colors.primary.main};
	color: ${({ theme }) => theme.colors.white.background};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 96px;
	padding: 0 72px;
`;

const RightSide = styled.div`
	background-color: ${({ theme }) => theme.colors.white.background};
	color: black;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 64px 0 64px 0;
`;

const Button = styled(ButtonTemplate)`
	font-size: 24px;
`;

const Title = styled.h1`
	font-size: 52px;
	color: ${props => props.theme.colors.primary.main};
	font-weight: bold;
	text-align: center;
	margin: 0;
`;

const LogoWithWhiteBackground = styled(Images.logo)`
	background-color: white;
	height: max-content;
	padding: 12px;
`;

export default function Home() {
	const { isLoading, accessKey } = useAccessKey();
	const theme = useTheme();

	const { openModal, closeModal } = useModal();
	const router = useRouter();

	const [hasUserAgreed, setHasUserAgreed] = React.useState(false);

	function openTermsModal() {
		openModal(
			<TermsOfServiceModal
				onRefuse={() => openModal(<TOSRefusalModal />)}
				onAccept={() => {
					setHasUserAgreed(true);
					closeModal();
				}}
			/>,
		);
	}

	function handleShowTerms(event: React.MouseEvent) {
		event.stopPropagation();
		openTermsModal();
	}

	function handleContinueButton() {
		if (accessKey) router.push(`/is-first-access`);
		else router.push('/broken-link');
	}

	return (
		<>
			<Head>
				<title>Formulário - Tech Viz</title>
				<link rel="canonical" href={deployedURLHome} />
			</Head>
			<Root>
				<Navbar title="Tech Viz" />
				<Sidemenu />
				<Main>
					<LeftSide>
						<LogoWithWhiteBackground />
					</LeftSide>
					<RightSide>
						<Title>Olá, somos a equipe Tech Viz!</Title>
						<Bubble>
							<strong>Estamos aqui para realizar uma pesquisa.</strong>
							<br />
							Podemos contar com a sua participação?
						</Bubble>
						<Radio
							onChange={value => setHasUserAgreed(value)}
							value={hasUserAgreed}
							label={
								<>
									Li e estou de acordo com os{' '}
									<strong
										onClick={handleShowTerms}
										style={{ textDecoration: 'underline', color: theme.colors.primary.main }}
									>
										Termos de Privacidade
									</strong>{' '}
									para realização da pesquisa.
								</>
							}
						/>
						<Button
							isLoading={isLoading}
							isDisabled={!hasUserAgreed}
							onClick={handleContinueButton}
						>
							COMEÇAR
						</Button>
					</RightSide>
				</Main>
			</Root>
		</>
	);
}
