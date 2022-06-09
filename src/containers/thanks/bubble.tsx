import React, { FC, PropsWithChildren } from 'react';
import styled, { useTheme } from 'styled-components';

import Text from '../../components/styling/text';

const Root = styled(Text)`
	width: 100%;
	height: 100%;
	background-color: ${props => props.theme.colors.white.full};
	padding: 64px 0;
	position: relative;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
`;

const PaddleSvg = styled.svg`
	width: 100px;
	height: 50px;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
`;

const Bubble: FC<PropsWithChildren<{}>> = ({ children }) => {
	const theme = useTheme();

	return (
		<Root>
			<PaddleSvg style={{ top: '100%' }} fill={theme.colors.white.full} viewBox="0 0 100 50">
				<path d="M 0 0 H 100 L 50 25 Z" />
			</PaddleSvg>
			{children}
		</Root>
	);
};

export default Bubble;
