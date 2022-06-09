import React, { FC } from 'react';
import styled from 'styled-components';

const CrossSVG = styled.svg`
	width: 20px;
	height: 20px;
	cursor: pointer;
	right: 12px;
	top: 12px;
`;

type CloseButtonComponent = FC<
	{
		onClick?: () => void;
	} & Omit<React.ComponentProps<'svg'>, 'ref'>
>;

const CloseButton: CloseButtonComponent = ({ onClick, ...props }) => {
	return (
		<CrossSVG
			onClick={onClick}
			viewBox="0 0 100 100"
			strokeWidth="20"
			fill="none"
			stroke="#444444"
			strokeLinecap="round"
			{...props}
		>
			<path d="M 10 10 L 90 90" />
			<path d="M 90 10 L 10 90" />
		</CrossSVG>
	);
};

export default CloseButton;
