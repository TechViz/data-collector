import React from 'react';
import styled from 'styled-components';

export const ARROW_WIDTH_SPACE = 6;

const Root = styled.svg`
	position: absolute;
	right: 6px;
	top: calc(50% - 10px);
	width: 20px;
	height: 20px;
	transition: 200ms;
	stroke: ${props => props.theme.colors.primary.main};
	fill: ${props => props.theme.colors.primary.main};
`;

type SelectArrowProps = React.PropsWithoutRef<{ isOpen: boolean }>;

type SelectArrowComponent = React.FunctionComponent<SelectArrowProps>;

const SelectArrow: SelectArrowComponent = ({ isOpen }) => {
	return (
		<Root
			viewBox="-0.15 -0.15 2.3 1.3"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="0.3"
			style={{ transform: `rotate(${isOpen ? '90deg' : '0deg'})` }}
		>
			<path d="m0,0h2L1,1z" />
		</Root>
	);
};

export default SelectArrow;
