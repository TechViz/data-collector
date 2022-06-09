import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { useSendRating } from '../../api/ratings/send-rating';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';
import QuestionPageTemplate from '../../components/styling/question-page-template';
import { useProgressBar } from '../../contexts/progress-bar';
import { useRequireAuth } from '../../libs/hooks/use-require-auth';

const Text = styled.p`
	font-size: 28px;
	text-align: center;
	margin: 0;
`;

const FeedbackContainer = styled.div`
	display: flex;
	width: 100%;
	max-width: 400px;
	justify-content: space-between;
	align-items: center;
	margin: 32px 0 16px 0;
`;

const StarContainer = styled.div`
	display: flex;
	column-gap: 8px;
`;

const FeedbackText = styled.p`
	margin: 0;
	font-size: 30px;
	color: ${props => props.theme.colors.primary.main};
	text-align: end;
`;

const Feedback: FC<{}> = ({}) => {
	useRequireAuth();
	const { mutate: sendRating, isSuccess, isLoading } = useSendRating();
	const { setProgress } = useProgressBar();
	const router = useRouter();
	const [starValue, setStarValue] = React.useState<number | null>(null);
	const [hoverStarValue, setHoverStarValue] = React.useState<number | null>(null);
	const [textValue, setTextValue] = React.useState('');

	React.useEffect(() => setProgress(100), []);

	function handleSubmit() {
		sendRating({ score: starValue!, message: textValue });
	}

	React.useEffect(() => {
		if (!isSuccess) return;
		router.push('/thanks');
	}, [isSuccess]);

	const feedbackText = ['', 'Péssima!', 'Ruim!', 'Boa!', 'Muito boa!', 'Excelente!'][
		starValue ?? hoverStarValue ?? 0
	];

	console.log(hoverStarValue, feedbackText);

	function createStarComponents() {
		const starComponents: React.ReactNode[] = [];

		for (let i = 1; i <= 5; i++) {
			starComponents.push(
				<Star
					key={i}
					onMouseEnter={() => setHoverStarValue(i)}
					onClick={() => setStarValue(i)}
					filled={starValue !== null && starValue >= i}
				/>,
			);
		}

		return starComponents;
	}

	const isActionDisabled = starValue === null || !textValue;

	return (
		<QuestionPageTemplate
			title={
				<>
					Mônada Analytics / <strong>Avaliação</strong>
				</>
			}
			backgroundColor={theme => theme.colors.primary.main}
		>
			<CardPageTemplate
				actionDisabled={isActionDisabled}
				showProgressBar
				actionLoading={isLoading}
				actionText="CONTINUAR"
				onSubmit={handleSubmit}
				actionButtonBorderColor={theme => theme.colors.white.full}
			>
				<Text>Como você avalia sua experiência com a plataforma Mônada Analytics?</Text>
				<FeedbackContainer>
					<StarContainer>{createStarComponents()}</StarContainer>
					<FeedbackText>{feedbackText}</FeedbackText>
				</FeedbackContainer>
				<TextInput
					onChange={setTextValue}
					style={{ visibility: starValue === null ? 'hidden' : 'visible' }}
					label="Deixe um comentário pra gente!"
					fullWidth
				/>
			</CardPageTemplate>
		</QuestionPageTemplate>
	);
};

const Star: FC<{ filled?: boolean } & React.ComponentProps<'svg'>> = ({ filled, ...props }) => {
	const theme = useTheme();

	return (
		<svg
			width="42"
			height="40"
			viewBox="0 0 42 40"
			fill={filled ? theme.colors.primary.main : 'transparent'}
			stroke={theme.colors.primary.main}
			strokeWidth="2"
			xmlns="http://www.w3.org/2000/svg"
			style={{ cursor: 'pointer', transition: '200ms' }}
			{...props}
		>
			<path d="M18.9425 2.7806C19.5412 0.937976 22.148 0.937979 22.7467 2.7806L25.5412 11.3812C26.0767 13.0293 27.6125 14.1451 29.3454 14.1451H38.3886C40.3261 14.1451 41.1316 16.6244 39.5642 17.7632L32.2481 23.0786C30.8461 24.0972 30.2595 25.9027 30.795 27.5508L33.5895 36.1514C34.1882 37.994 32.0793 39.5263 30.5118 38.3875L23.1957 33.072C21.7938 32.0534 19.8954 32.0534 18.4934 33.072L11.1773 38.3875C9.60989 39.5263 7.50093 37.994 8.09964 36.1514L10.8941 27.5508C11.4296 25.9027 10.843 24.0972 9.44106 23.0786L2.12494 17.7632C0.557515 16.6244 1.36307 14.1451 3.30051 14.1451H12.3437C14.0766 14.1451 15.6125 13.0293 16.148 11.3812L18.9425 2.7806Z" />
		</svg>
	);
};

export default Feedback;
