import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import CardPageTemplate from '../../components/styling/card-page-template';

const Title = styled.p`
	font-size: 40px;
	text-align: center;
	font-weight: bold;
	margin: 32px 0 0px 0;
`;

const Text = styled.p`
	font-size: 28px;
	text-align: center;
	margin: 0;
`;

const DialogDone: FC<{}> = ({}) => {
	const { nextStage, prevStage } = useMultistep();

	return (
		<CardPageTemplate
			showProgressBar
			onSubmit={nextStage}
			actionButtonBorderColor={theme => theme.colors.white.full}
			showBackArrow
			onBack={prevStage}
			actionText="CONTINUAR"
		>
			<svg
				width="130"
				height="130"
				viewBox="0 0 130 130"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="65" cy="65" r="63" fill="#19DA43" stroke="#19DA43" strokeWidth="3" />
				<path d="M36.998 65L57.998 86L92.998 44" stroke="white" strokeWidth="10" />
			</svg>

			<Title>Você concluiu essa categoria!!</Title>
			<Text>Vamos para a próxima etapa?</Text>
		</CardPageTemplate>
	);
};

export default DialogDone;
