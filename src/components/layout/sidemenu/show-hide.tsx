import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { useSidemenuOpen } from '../../../contexts/sidemenu-open';
import CloseButton from '../../reusable/close-button';

const Root = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;

	z-index: ${props => props.theme.zIndex.sidebar};
`;

const Backdrop = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.5);
	transition: 200ms;
`;

const MenuRoot = styled.div`
	position: relative;
	background-color: ${props => props.theme.colors.white.full};
	width: 100%;
	max-width: 540px;
	height: 100%;
	transition: 200ms;
	overflow-y: auto;
	box-shadow: ${props => props.theme.shadows.sidemenu.medium};
`;

const TopContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
	padding: 16px;
`;

const ShowHide: FC<PropsWithChildren<{}>> = ({ children }) => {
	const { isSidemenuOpen, closeSidemenu } = useSidemenuOpen();

	function handleClose() {
		closeSidemenu();
	}

	return (
		<Root
			style={{
				pointerEvents: isSidemenuOpen ? 'unset' : 'none',
			}}
		>
			<Backdrop
				style={{
					opacity: isSidemenuOpen ? 1 : 0,
				}}
				onClick={handleClose}
			/>
			<MenuRoot style={{ left: isSidemenuOpen ? '0' : '-100%' }}>
				<TopContainer>
					<CloseButton onClick={closeSidemenu} />
				</TopContainer>
				{children}
			</MenuRoot>
		</Root>
	);
};

export default ShowHide;
