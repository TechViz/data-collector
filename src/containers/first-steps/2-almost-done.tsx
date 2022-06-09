import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import CardPageTemplate from '../../components/styling/card-page-template';

const Title = styled.p`
	font-size: 30px;
	text-align: center;
	font-weight: bold;
	margin: 0 0 42px 0;
`;

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0;
`;

const FirstStepsAlmostDone: FC<{}> = ({}) => {
	const { nextStage } = useMultistep();

	return (
		<CardPageTemplate
			actionButtonBorderColor={theme => theme.colors.white.full}
			onSubmit={nextStage}
			actionText="CONTINUAR"
		>
			<Title>Estamos muito felizes em te receber aqui!</Title>
			<Text>
				À partir de agora você está em um ambiente controlado exclusivamente por nós, a equipe
				Mônada.
			</Text>
		</CardPageTemplate>
	);
};

export default FirstStepsAlmostDone;
