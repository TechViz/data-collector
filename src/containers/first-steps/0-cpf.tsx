import { useRouter } from 'next/router';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import TextInput from '../../components/reusable/text-input';
import CardPageTemplate from '../../components/styling/card-page-template';
import { maskCPF } from '../../libs/mask-cpf';
import { toastifyProblems } from '../../libs/toastify-problems';
import { getCPFValidationErrors, isCPFInvalid } from '../../libs/validate-cpf';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const FirstStepCPF: FC<{}> = ({}) => {
	const router = useRouter();
	const { updateFormValue, formValue, nextStage } = useMultistep();
	const [cpf, setCpf] = React.useState((formValue as any).cpf);
	const [isActionDisabled, setIsActionDisabled] = React.useState(!(formValue as any).cpf);

	React.useEffect(() => setIsActionDisabled(isCPFInvalid(cpf)), [cpf]);

	function handleSubmit() {
		const problem = getCPFValidationErrors(cpf);
		if (problem.length > 0) return toastifyProblems(problem);
		updateFormValue({ cpf });
		nextStage();
		return;
	}

	return (
		<CardPageTemplate
			onSubmit={handleSubmit}
			actionDisabled={isActionDisabled}
			actionText="CONTINUAR"
			showBackArrow
			onBack={() => router.back()}
		>
			<Text>Digite seu CPF, apenas os números, para fazer login na plataforma.</Text>
			<TextInput
				value={cpf}
				onChange={cpf => setCpf(maskCPF(cpf))}
				name="cpf"
				fullWidth
				label="Digite seu CPF"
			/>
		</CardPageTemplate>
	);
};

export default FirstStepCPF;
