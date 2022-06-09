import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import CardPageTemplate from '../../components/styling/card-page-template';

const Root = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary.main};
	width: 100%;
	height: 100vh;
`;

const Title = styled.h1`
	text-align: center;
	margin: 0;
	font-size: 60px;
	color: ${({ theme }) => theme.colors.primary.main};
`;

const Text = styled.p`
	font-size: 24px;
	text-align: center;
	max-width: 454px;
`;

const Thanks: FC<{}> = () => {
	const router = useRouter();

	return (
		<Root>
			<CardPageTemplate
				actionText="OK"
				actionButtonBorderColor="white"
				onSubmit={() => router.push('/')}
			>
				<Title>Ops!</Title>
				<Text>
					O seu link pessoal de acesso à plataforma foi enviado para o seu e-mail de trabalho.
					<br />
					<br />
					<span style={{ fontSize: 20 }}>
						Caso você não tenho recebido, escreva pra gente através do{' '}
						<strong>contato@monada.tech</strong> que enviaremos seu link novamente.
					</span>
				</Text>
			</CardPageTemplate>
		</Root>
	);
};

export default Thanks;
