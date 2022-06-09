import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import ButtonSelection from '../../components/reusable/button-selection';
import CardPageTemplate from '../../components/styling/card-page-template';
import QuestionPageTemplate from '../../components/styling/question-page-template';

const Title = styled.p`
	font-size: 30px;
	margin: 0 0 32px 0;
`;

const IsFirstAccessPage: FC<{}> = ({}) => {
	const router = useRouter();

	function handleSubmit(value: string) {
		if (value === 'Não') {
			router.push('/login');
		} else {
			router.push('/first-steps');
		}
	}

	return (
		<QuestionPageTemplate title="Primeiro acesso">
			<CardPageTemplate showBackArrow onBack={() => router.back()}>
				<Title>Esse é o seu primerio acesso?</Title>
				<ButtonSelection onChange={handleSubmit} options={['Não', 'Sim']} isRoundButtons />
			</CardPageTemplate>
		</QuestionPageTemplate>
	);
};

export default IsFirstAccessPage;
