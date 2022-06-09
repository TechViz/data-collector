import React, { FC } from 'react';
import styled from 'styled-components';
import { useStateCity } from '../../api/location-api/city-by-state';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import Select from '../../components/reusable/select';
import CardPageTemplate from '../../components/styling/card-page-template';
import { brasilStateDictionary } from '../../constants/brazil-states';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const AboutYouCity: FC<{}> = ({}) => {
	const { nextStage, formValue, prevStage, updateFormValue } = useMultistep();
	const { isLoading, data: fetchCitiesResult } = useStateCity(
		'Brazil',
		(brasilStateDictionary as any)[(formValue as any).currentState],
	);

	const isActionDisabled = !(formValue as any).currentCity;

	return (
		<CardPageTemplate
			showProgressBar
			showBackArrow
			onBack={prevStage}
			onSubmit={nextStage}
			actionText="CONTINUAR"
			actionDisabled={isActionDisabled}
		>
			<Text>“Eu moro na cidade...”</Text>
			{isLoading || !fetchCitiesResult ? (
				'Carregando...'
			) : (
				<Select
					initialValue={(formValue as any).currentCity}
					onChange={currentCity => updateFormValue({ currentCity })}
					options={fetchCitiesResult!}
				/>
			)}
		</CardPageTemplate>
	);
};

export default AboutYouCity;
