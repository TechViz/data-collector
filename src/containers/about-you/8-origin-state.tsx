import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Select from '../../components/reusable/select';
import CardPageTemplate from '../../components/styling/card-page-template';
import { countriesDictionary } from '../../constants/all-countries';
import { useCountryStates } from '../../api/location-api/state';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const AboutYouOriginState: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, formValue, prevStage } = useMultistep();
	const { isLoading, data: fetchStatesResult } = useCountryStates(
		(countriesDictionary as any)[(formValue as any).originCountry],
	);

	const isActionDisabled = !(formValue as any).originState;

	return (
		<CardPageTemplate
			showBackArrow
			showProgressBar
			onBack={prevStage}
			actionText="CONTINUAR"
			onSubmit={nextStage}
			actionDisabled={isActionDisabled}
		>
			<Text>“Sou natural do estado...”</Text>
			{isLoading || !fetchStatesResult ? (
				'Carregando...'
			) : (
				<Select
					initialValue={(formValue as any).originState}
					onChange={originState => updateFormValue({ originState })}
					options={fetchStatesResult!}
				/>
			)}
		</CardPageTemplate>
	);
};

export default AboutYouOriginState;
