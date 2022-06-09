import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Navbar from '../../components/layout/navbar';
import Sidemenu from '../../components/layout/sidemenu';
import Bubble from './bubble';
import Images from '../../images';
import ButtonTemplate from '../../components/reusable/button/white-variant';

const Main = styled.div`
	width: 100%;
	height: 100%;
	font-size: 20px;
	background-color: ${props => props.theme.colors.white.background};
	transition: 200ms;
	color: white;
	display: grid;
	grid-template-columns: 35% auto;
`;

const Root = styled.div`
	height: 100vh;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
`;

const LeftSide = styled.div`
	background-color: ${({ theme }) => theme.colors.primary.main};
	color: ${({ theme }) => theme.colors.white.background};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 96px;
	padding: 0 72px;
`;

const RightSide = styled.div`
	background-color: ${({ theme }) => theme.colors.white.background};
	color: black;
	width: 100%;
	display: grid;
	grid-template-rows: 2fr 1fr;
	align-items: center;
	justify-items: center;
	padding: 0 0 0 0;
`;

const Button = styled(ButtonTemplate)`
	font-size: 24px;
	border-width: 3px;
	box-shadow: none;
	font-weight: bold;
`;

const Title = styled.h1`
	font-size: 52px;
	color: ${props => props.theme.colors.primary.main};
	font-weight: bold;
	text-align: center;
	margin: 0;
`;

const LogoWithWhiteBackground = styled(Images.logo)`
	background-color: white;
	height: max-content;
	padding: 12px;
`;

export default function Home() {
	const router = useRouter();

	return (
		<>
			<Root>
				<Navbar title="Tech Viz" />
				<Sidemenu />
				<Main>
					<LeftSide>
						<LogoWithWhiteBackground />
					</LeftSide>
					<RightSide>
						<Bubble>
							<Title>
								Agradecemos pela
								<br />
								sua participação!
							</Title>
						</Bubble>
						<Button backgroundColor="transparent" onClick={() => router.push('/')}>
							VOLTAR PARA O INÍCIO
						</Button>
					</RightSide>
				</Main>
			</Root>
		</>
	);
}
