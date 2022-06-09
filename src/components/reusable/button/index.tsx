import React from 'react';
import type { DefaultTheme } from 'styled-components';
import styled, { useTheme } from 'styled-components';
import SpinnerTemplate from '../spinner';

export type ColorDescriptor = string | ((theme: DefaultTheme) => string);

function solveColorDescriptor(colorDescriptor: ColorDescriptor, theme: DefaultTheme) {
	return typeof colorDescriptor === `string` ? colorDescriptor : colorDescriptor(theme);
}

const Root = styled.button<{
	fullWidth: boolean;
	backgroundColor: ColorDescriptor;
	textColor: ColorDescriptor;
	borderColor: ColorDescriptor;
	hoverBackgroundColor: ColorDescriptor;
	hoverTextColor: ColorDescriptor;
	hoverBorderColor: ColorDescriptor;
	isDisabled?: boolean;
}>`
	width: ${({ fullWidth }) => (fullWidth ? `100%` : `max-content`)};
	padding: 8px 96px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0;
	font-size: inherit;
	font-weight: inherit;
	transition: 200ms;
	cursor: pointer;
	border-radius: 37px;
	user-select: none;
	border: 1.5px solid;
	box-shadow: ${({ theme }) => theme.shadows.button.medium};
	background-color: ${({ backgroundColor, theme }) => solveColorDescriptor(backgroundColor, theme)};
	${props =>
		props.isDisabled
			? `
		background-color: ${props.theme.colors.gray.main};
	`
			: ``}
	border-color: ${({ borderColor, theme }) => solveColorDescriptor(borderColor, theme)};
	${props =>
		props.isDisabled
			? `
		border-color: ${props.theme.colors.gray.main};
	`
			: ``}
	color: ${({ textColor, theme }) => solveColorDescriptor(textColor, theme)};

	${props =>
		props.isDisabled
			? ``
			: `
		:hover {
			background-color: ${solveColorDescriptor(props.hoverBackgroundColor, props.theme)};
			color: ${solveColorDescriptor(props.hoverTextColor, props.theme)};
			border-color: ${solveColorDescriptor(props.hoverBorderColor, props.theme)};
		}
		:active {
		}
	`}
`;

const Spinner = styled(SpinnerTemplate)<{
	hoverColor: string;
	isDisabled?: boolean;
}>`
	margin-left: 8px;
	transition: 200ms;
	${Root}:hover & {
		stroke: ${props => props.hoverColor};
	}
`;

/** This is the application's default button. */
const Button: React.ForwardRefRenderFunction<
	HTMLButtonElement,
	{
		backgroundColor?: ColorDescriptor;
		textColor?: ColorDescriptor;
		borderColor?: ColorDescriptor;
		hoverBorderColor?: ColorDescriptor;
		hoverBackgroundColor?: ColorDescriptor;
		hoverTextColor?: ColorDescriptor;
		spinnerColor?: ColorDescriptor;
		hoverSpinnerColor?: ColorDescriptor;
		selected?: boolean;

		/**
		 * If true, the button's width will be set to `100%`.
		 */
		fullWidth?: boolean;
		isLoading?: boolean;
		isDisabled?: boolean;
		onClickWhileDisabled?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	} & React.ComponentProps<'button'>
> = (
	{
		children,
		fullWidth = false,
		backgroundColor = theme => theme.colors.primary.main,
		textColor = theme => theme.colors.white.full,
		borderColor = theme => theme.colors.primary.main,
		hoverBackgroundColor = theme => theme.colors.primary.main,
		hoverTextColor = theme => theme.colors.white.full,
		hoverBorderColor = theme => theme.colors.primary.main,
		spinnerColor = theme => theme.colors.white.full,
		hoverSpinnerColor = theme => theme.colors.white.full,
		isLoading,
		isDisabled,
		onClickWhileDisabled = () => {},
		onClick = () => {},
		selected = false,
		...props
	},
	ref,
) => {
	const theme = useTheme();

	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		if (isDisabled || isLoading) {
			onClickWhileDisabled(event);
		} else {
			onClick(event);
		}
	}

	function resolveColorProps() {
		if (selected) {
			return {
				textColor: hoverTextColor,
				borderColor: hoverBorderColor,
				hoverBorderColor,
				backgroundColor: hoverBackgroundColor,
				hoverBackgroundColor,
				hoverTextColor,
			};
		} else {
			return {
				textColor,
				borderColor,
				hoverBorderColor,
				backgroundColor,
				hoverBackgroundColor,
				hoverTextColor,
			};
		}
	}

	return (
		<Root
			fullWidth={fullWidth}
			{...resolveColorProps()}
			isDisabled={isDisabled}
			onClick={handleClick}
			{...props}
			ref={ref}
		>
			{children}
			{isLoading && (
				<Spinner
					isDisabled={isDisabled || isLoading}
					hoverColor={solveColorDescriptor(hoverSpinnerColor, theme)}
					color={solveColorDescriptor(spinnerColor, theme)}
					strokeWidth={2}
					size={20}
				/>
			)}
		</Root>
	);
};

export default React.forwardRef(Button);
