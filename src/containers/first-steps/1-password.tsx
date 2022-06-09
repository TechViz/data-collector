import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useCreateLoginCredentials } from '../../api/user/create-login-credentials';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';
import { useAccessKey } from '../../contexts/access-key';

const Title = styled.p`
	text-align: center;
	margin: 0 0 42px 0;
	font-size: 30px;
`;

const FirstStepPassword: FC<{}> = ({}) => {
	const router = useRouter();
	const { nextStage, prevStage, formValue } = useMultistep();
	const [password, setPassword] = React.useState('');
	const [confirmPassword, setConfirmPassword] = React.useState('');
	const { mutate: initializeUser, isSuccess, isLoading } = useCreateLoginCredentials();
	const { accessKey } = useAccessKey();

	async function handleSubmit() {
		if (!accessKey) return router.push('/broken-link');
		if (password !== confirmPassword) return toast.error('Os campos de senha são diferentes');

		initializeUser({
			accessKey,
			cpf: (formValue as any).cpf,
			password,
		});
		return;
	}

	React.useEffect(() => {
		if (!isSuccess) return;
		nextStage();
	}, [isSuccess]);

	const isActionDisabled = password !== confirmPassword || !accessKey;

	return (
		<CardPageTemplate
			showBackArrow
			onBack={prevStage}
			onSubmit={handleSubmit}
			actionDisabled={isActionDisabled}
			actionLoading={isLoading}
			actionText="CONTINUAR"
		>
			<Title>Crie uma senha de acesso.</Title>
			<TextInput
				defaultValue={(formValue as any).password}
				type="password"
				onChange={val => setPassword(val.trim())}
				fullWidth
				label="Digite sua senha"
			/>
			<TextInput
				defaultValue={(formValue as any).password}
				type="password"
				onChange={val => setConfirmPassword(val.trim())}
				fullWidth
				label="Confirme sua senha"
			/>
		</CardPageTemplate>
	);
};

export default FirstStepPassword;
