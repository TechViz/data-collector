import React, { FC } from 'react';
import styled from 'styled-components';

const Root = styled.div`
	width: 100%;
	padding: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Background = styled.div`
	background-color: ${props => props.theme.colors.white.background};
	width: 100%;
	height: 20px;
	border-radius: 16px;
	position: relative;
	align-self: center;
`;

const Bar = styled.div`
	border-radius: 16px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 20px;
	transition: 200ms;
	background-color: ${props => props.theme.colors.primary.main};
`;

const ProgressBar: FC<{ progress: number }> = ({ progress }) => {
	return (
		<Root>
			<Background>
				<Bar style={{ width: `max(${progress}%, 16px)` }} />
			</Background>
		</Root>
	);
};

export default ProgressBar;
