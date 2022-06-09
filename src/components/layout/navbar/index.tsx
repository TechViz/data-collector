import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useModal } from '../../../contexts/modal';
import { useSidemenuOpen } from '../../../contexts/sidemenu-open';
import ConfirmExitModal from '../../modals/confirm-exit';
import CloseButton from '../../reusable/close-button';

import Hamburguer from '../../reusable/hamburguer';

const Root = styled.div`
	background-color: ${props => props.theme.colors.white.full};
	box-shadow: ${props => props.theme.shadows.navbar.medium};
	z-index: ${props => props.theme.zIndex.navbar};
	display: flex;
	justify-content: center;
	padding: 8px 0;
`;

const ContentContainer = styled.div`
	width: 100%;
	max-width: 1100px;
	padding: 0 16px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.p`
	margin: 0;
	text-align: center;
	font-size: 18px;
`;

const Navbar: FC<{ title: React.ReactNode; showCloseButton?: boolean }> = ({
	title,
	showCloseButton,
}) => {
	const { setIsSidemenuOpen, isSidemenuOpen } = useSidemenuOpen();
	const { openModal } = useModal();
	const router = useRouter();

	return (
		<Root>
			<ContentContainer>
				<Hamburguer value={isSidemenuOpen} onClick={newValue => setIsSidemenuOpen(newValue)} />
				<Title>{title}</Title>
				{showCloseButton && (
					<span style={{ width: 'max-width', display: 'block', justifySelf: 'flex-end' }}>
						<CloseButton
							onClick={() => openModal(<ConfirmExitModal onLeave={() => router.push('/thanks')} />)}
						/>
					</span>
				)}
			</ContentContainer>
		</Root>
	);
};

export default Navbar;
