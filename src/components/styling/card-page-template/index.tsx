import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { useProgressBar } from '../../../contexts/progress-bar';
import { useSubmissionState } from '../../../contexts/submission-state';
import { CategoryNames } from '../../../models/categories';
import Button, { ColorDescriptor } from '../../reusable/button';
import ProgressBar from './progress-bar';

const Root = styled.form`
	width: 100%;
	max-width: 750px;
	padding: 16px;
	border-radius: 50px;
	background-color: ${props => props.theme.colors.white.full};
	box-shadow: ${props => props.theme.shadows.card.medium};
	display: grid;
	grid-template-columns: max-content auto max-content;
	flex-direction: column;
	position: relative;
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ActionButton = styled(Button)`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 50%);
`;

const Top = styled.div`
	background-color: transparent;
	border: 0;
	padding: 0;
`;

const ProgressText = styled.p`
	margin: 0;
	display: flex;
	align-items: center;
	height: 100%;
	text-align: center;
	width: 100%;
`;

const CardPageTemplate: FC<{
	showBackArrow?: boolean;
	actionText?: string;
	actionDisabled?: boolean;
	actionLoading?: boolean;
	onSubmit?: (formElem: HTMLFormElement) => void;
	onBack?: () => void;
	showProgressBar?: boolean;
	actionButtonBorderColor?: ColorDescriptor;
	maxWidth?: number;
}> = ({
	children,
	showBackArrow,
	maxWidth,
	actionText,
	actionDisabled,
	onSubmit = () => {},
	onBack,
	actionLoading,
	showProgressBar,
	actionButtonBorderColor,
}) => {
	const { categoriesDone } = useSubmissionState();
	const { progress } = useProgressBar();

	const shouldShowActionButton = Boolean(actionText);

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();
		onSubmit(event.target as HTMLFormElement);
	}

	return (
		<Root onSubmit={handleSubmit} style={{ maxWidth }}>
			{/* Top row */}
			<BackArrow
				onClick={onBack}
				show={showBackArrow}
				// Prevents user tab selecting the back arrow when it's hidden
				tabIndex={showBackArrow ? 0 : -1}
			/>
			{showProgressBar ? <ProgressBar progress={progress} /> : <span />}
			<BackArrowSubstitute>
				{progress === 100 && showProgressBar && (
					<ProgressText>
						{categoriesDone} de {CategoryNames.length}
					</ProgressText>
				)}
			</BackArrowSubstitute>

			{/* Middle row */}
			<span />
			<Bottom>{children}</Bottom>
			<span />

			{/* Bottom row */}
			<BackArrowSubstitute />
			<span />
			<BackArrowSubstitute />

			{shouldShowActionButton && (
				<ActionButton
					borderColor={actionButtonBorderColor}
					hoverBorderColor={actionButtonBorderColor}
					type="submit"
					isDisabled={actionDisabled}
					isLoading={actionLoading}
				>
					{actionText}
				</ActionButton>
			)}
		</Root>
	);
};

const BackArrow: FC<{ show?: boolean; onClick?: () => void; tabIndex: number }> = ({
	show,
	onClick,
	tabIndex,
}) => {
	const theme = useTheme();

	return (
		<Top as="button" type="button" onClick={onClick} tabIndex={tabIndex}>
			<svg
				width="69"
				height="69"
				viewBox="0 0 69 69"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{
					opacity: show ? 1 : 0,
					pointerEvents: show ? 'unset' : 'none',
					cursor: 'pointer',
				}}
			>
				<path
					d="M21 36.5L20.296 35.7898L19.5796 36.5L20.296 37.2102L21 36.5ZM50 37.5C50.5523 37.5 51 37.0523 51 36.5C51 35.9477 50.5523 35.5 50 35.5V37.5ZM31.896 24.2898L20.296 35.7898L21.704 37.2102L33.304 25.7102L31.896 24.2898ZM20.296 37.2102L31.896 48.7102L33.304 47.2898L21.704 35.7898L20.296 37.2102ZM21 37.5H50V35.5H21V37.5Z"
					fill={theme.colors.primary.main}
				/>
				<circle cx="34.5" cy="34.5" r="34" stroke={theme.colors.primary.main} />
			</svg>
		</Top>
	);
};

const BackArrowSubstitute: FC<{}> = ({ children }) => {
	return (
		<Top>
			<div style={{ width: 69, height: 69 }}>{children}</div>
		</Top>
	);
};

export default CardPageTemplate;
