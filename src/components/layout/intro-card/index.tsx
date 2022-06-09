import React, { FC } from 'react';
import styled from 'styled-components';

import { useMultistep } from '../../reusable/multistep-form/context';
import CardPageTemplate from '../../styling/card-page-template';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0;
`;

const Title = styled.p`
	margin: 0;
	font-size: 40px;
	font-weight: bold;
	margin: 0 0 42px 0;
`;

const IntroCard: FC<{ title: string; text: string; onBack?: () => void }> = ({
	text,
	title,
	onBack,
}) => {
	const { nextStage } = useMultistep();

	return (
		<CardPageTemplate
			actionText="CONTINUAR"
			onSubmit={nextStage}
			showBackArrow={Boolean(onBack)}
			onBack={onBack}
			actionButtonBorderColor={theme => theme.colors.white.full}
		>
			<Title>{title}</Title>
			<Text>{text}</Text>
		</CardPageTemplate>
	);
};

export default IntroCard;
