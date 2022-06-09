import React, { FC } from 'react';
import styled from 'styled-components';
import { useUpdateCategory } from '../../api/submissions/update-category';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Slider from '../../components/reusable/slider';

import CardPageTemplate from '../../components/styling/card-page-template';
import PiggyBankSVG from '../../images/immediate-svg/piggy-bank';

const Title = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 16px 0;
`;

const FinancesCanStoreMoney: FC<{}> = ({}) => {
	const { nextStage, formValue, prevStage, updateFormValue } = useMultistep();
	const { mutate: updateCategoryMutation, status: updateCategoryStatus } = useUpdateCategory();

	const isInputValid = Boolean((formValue as any).canStoreMoney);

	function handleSubmit() {
		if (!isInputValid) return;
		updateCategoryMutation({ finances: formValue });
	}

	React.useEffect(() => {
		if (updateCategoryStatus !== 'success') return;
		nextStage();
	}, [updateCategoryStatus]);

	return (
		<CardPageTemplate
			showProgressBar
			showBackArrow
			onBack={prevStage}
			onSubmit={handleSubmit}
			actionDisabled={!isInputValid}
			actionText="CONTINUAR"
		>
			<Title>“Eu ___ guardar dinheiro no fim do mês.”</Title>
			<Slider
				iconElement={<PiggyBankSVG style={{ position: 'relative', top: 20 }} />}
				onChange={value => updateFormValue({ canStoreMoney: value })}
				defaultValue={(formValue as any).canStoreMoney}
				options={['consigo', 'não consigo', 'às vezes consigo']}
			/>
		</CardPageTemplate>
	);
};

export default FinancesCanStoreMoney;
