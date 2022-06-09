import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useAuth } from '../../../contexts/auth';
import { useSidemenuOpen } from '../../../contexts/sidemenu-open';
import { categories } from '../../../models/categories';
import Button from '../../reusable/button';
import WhiteButton from '../../reusable/button/white-variant';
import ShowHide from './show-hide';
import CategoryStatus from './category-status';

const Section = styled.div`
	border-bottom: 1px solid ${props => props.theme.colors.gray.dark};
	width: calc(100% - 32px);
	margin: 0 16px;
	padding: 32px 16px;
`;

const UserGreeting = styled(Section)`
	display: flex;
	align-items: center;
	column-gap: 16px;
`;

const UserActions = styled(Section)`
	font-size: 24px;
`;

const UserActionButton = styled.button`
	background-color: transparent;
	font-size: inherit;
	border: none;
	cursor: pointer;
`;

const CategoryCounter = styled(Section)`
	display: flex;
	flex-direction: column;
	row-gap: 16px;
`;
const ActionsContainer = styled(Section)`
	padding: 16px 64px;
	border-bottom: 0;
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	padding-top: 64px;
`;

const UserPortrait = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 100%;
	border: 3px solid black;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
`;

const Username = styled.p`
	margin: 0;
	font-size: 24px;
`;

const CategoryTitle = styled.p`
	font-size: 24px;
	margin: 0;
	font-weight: bold;
`;

const CategoryStatusContainer = styled.div`
	width: 100;
	display: flex;
	flex-direction: column;
	font-size: 20px;
	margin-left: 16px;
	row-gap: 8px;
`;

const Sidemenu: FC<{}> = ({}) => {
	const { closeSidemenu } = useSidemenuOpen();

	const router = useRouter();

	const { auth, logout } = useAuth();

	const username = auth?.user.name;
	const isUserLoggedIn = Boolean(auth);

	async function handleLeave() {
		logout();
		router.push('/thanks');
	}

	async function handleAlterPasswordClick() {
		toast.info(
			<div>
				Ainda não implementamos essa funcionalidade :(
				<br />
				Se você precisar mesmo trocar sua senha, por favor, mande um e-mail pra gente resolver!
			</div>,
		);
	}

	return (
		<ShowHide>
			<UserGreeting>
				{isUserLoggedIn ? (
					<>
						<UserPortrait>{username![0]}</UserPortrait>
						<Username>
							Olá, <strong>{username}!</strong>
						</Username>
					</>
				) : (
					<>
						<GenericProfilePicture />
						<Username>
							Olá!
							<br />
							Vamos começar?
						</Username>
					</>
				)}
			</UserGreeting>
			{isUserLoggedIn ? (
				<>
					<UserActions>
						<UserActionButton onClick={handleAlterPasswordClick}>Alterar senha</UserActionButton>
					</UserActions>
				</>
			) : (
				<></>
			)}
			<CategoryCounter>
				<CategoryTitle>Categorias</CategoryTitle>
				<CategoryStatusContainer>
					{categories.map(category => (
						<CategoryStatus key={category.path} categoryItem={category} />
					))}
				</CategoryStatusContainer>
			</CategoryCounter>
			<ActionsContainer>
				<Button fullWidth onClick={closeSidemenu}>
					CONTINUAR
				</Button>
				<WhiteButton fullWidth onClick={handleLeave}>
					SAIR
				</WhiteButton>
			</ActionsContainer>
		</ShowHide>
	);
};

export default Sidemenu;

const GenericProfilePicture = () => (
	<svg width="64" height="64" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
		<ellipse
			cx="39.5"
			cy="31.25"
			rx="12.375"
			ry="12.375"
			stroke="black"
			strokeWidth="3"
			strokeLinecap="round"
		/>
		<circle cx="39.5" cy="39.5" r="37.125" stroke="black" strokeWidth="3" />
		<path
			d="M64.25 67.1619C62.7901 62.7763 59.5733 58.901 55.0984 56.1371C50.6234 53.3731 45.1405 51.875 39.5 51.875C33.8595 51.875 28.3766 53.3731 23.9017 56.1371C19.4267 58.901 16.2099 62.7763 14.75 67.1618"
			stroke="black"
			strokeWidth="3"
			strokeLinecap="round"
		/>
	</svg>
);
