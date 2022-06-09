import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useUserLogin } from '../../api/user/login';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';
import { useAccessKey } from '../../contexts/access-key';
import { maskCPF } from '../../libs/mask-cpf';
import { toastifyProblems } from '../../libs/toastify-problems';
import { getCPFValidationErrors } from '../../libs/validate-cpf';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

function validate(cpf: string, password: string) {
	const cpfProblems = getCPFValidationErrors(cpf);
	const problems: string[] = [];

	if (!password) problems.push('Você deve fornecer uma senha');
	return [...cpfProblems, ...problems];
}

const LoginCPFPassword: FC<{}> = ({}) => {
	const router = useRouter();
	const { nextStage } = useMultistep();
	const [cpf, setCpf] = React.useState('');
	const [password, setPassword] = React.useState('');
	const { accessKey } = useAccessKey();
	const { mutate: userLogin, isSuccess, isLoading } = useUserLogin();

	function handleSubmit() {
		if (!accessKey) return router.push('/broken-link');
		const problems = validate(cpf, password);
		if (problems.length > 0) return toastifyProblems(problems);
		userLogin({ cpf, password, accessKey });
		return;
	}

	React.useEffect(() => {
		if (!isSuccess) return;

		nextStage();
	}, [isSuccess]);

	const isActionDisabled = validate(cpf, password).length > 0;

	return (
		<CardPageTemplate
			onSubmit={handleSubmit}
			actionDisabled={isActionDisabled}
			actionText="CONTINUAR"
			actionLoading={isLoading}
			showBackArrow
			onBack={() => router.back()}
		>
			<Text>Digite seu login e senha.</Text>
			<TextInput
				name="cpf"
				onChange={cpf => setCpf(maskCPF(cpf))}
				value={cpf}
				fullWidth
				label="Seu login é o seu CPF"
			/>
			<TextInput
				onChange={setPassword}
				name="password"
				type="password"
				fullWidth
				label="Digite sua senha"
			/>
		</CardPageTemplate>
	);
};

export default LoginCPFPassword;
