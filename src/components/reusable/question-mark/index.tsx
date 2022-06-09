import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Root = styled.div`
	position: relative;
	cursor: pointer;
	margin: 0;
`;

const QuestionMarkContainer = styled.span`
	display: block;
	width: 16px;
	height: 16px;
	font-size: 16px;
	background-color: ${props => props.theme.colors.gray.main};
	color: ${props => props.theme.colors.primary.main};
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 0 0 4px 8px;
`;

const Tooltip = styled.div`
	position: absolute;
	font-size: 16px;
	background-color: white;
	width: max-content;
	height: max-content;
	max-width: 300px;
	padding: 8px;
	text-align: justify;
	box-shadow: ${props => props.theme.shadows.card.medium};
	border-radius: 4px;
	transition: 500ms;
	z-index: 99;

	opacity: 0;
	pointer-events: none;
	${Root}:hover & {
		opacity: 1;
		pointer-events: unset;
	}
`;

const QuestionMark: FC<PropsWithChildren<{}>> = ({ children }) => {
	const tooltipRef = React.useRef<HTMLDivElement | null>(null);

	async function updateTooltipPosition() {
		const style = tooltipRef.current!.style;
		style.top = '';
		style.left = '';
		style.right = '';
		style.bottom = '';
		const { right, bottom } = tooltipRef.current!.getBoundingClientRect();
		const x = right > window.innerWidth ? 'right' : 'left';
		const y = bottom > window.innerHeight ? 'bottom' : 'top';
		style[x] = '100%';
		style[y] = '100%';
	}

	return (
		<Root onMouseEnter={updateTooltipPosition}>
			<QuestionMarkContainer>?</QuestionMarkContainer>
			<Tooltip ref={tooltipRef}>{children}</Tooltip>
		</Root>
	);
};

export default QuestionMark;
