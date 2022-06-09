import React, { FC } from 'react';
import styled from 'styled-components';
import { useMultistep } from '../../components/reusable/multistep-form/context';
import SelectBase from '../../components/reusable/select';
import CardPageTemplate from '../../components/styling/card-page-template';
import { allCountriesPortuguese } from '../../constants/all-countries';

const Text = styled.p`
	font-size: 30px;
	text-align: center;
	margin: 0 0 42px 0;
`;

const BrasilText = styled.span`
	background-color: ${props => props.theme.colors.primary.main};
	color: ${props => props.theme.colors.white.full};
	display: block;
	width: 100%;
	height: 100%;
`;

const Select = styled(SelectBase)`
	font-size: 20px;
`;

const countriesWithEmphasis = allCountriesPortuguese.map(country => {
	if (country === 'Brasil')
		return {
			labelText: 'Brasil',
			optionText: <BrasilText>Brasil</BrasilText>,
			value: 'Brasil',
		};
	return country;
});

const AboutYouOriginCountry: FC<{}> = ({}) => {
	const { nextStage, updateFormValue, formValue, prevStage } = useMultistep();

	const isActionDisabled = !(formValue as any).originCountry;

	return (
		<CardPageTemplate
			showBackArrow
			showProgressBar
			onBack={prevStage}
			actionText="CONTINUAR"
			onSubmit={nextStage}
			actionDisabled={isActionDisabled}
		>
			<Text>“Meu país de origem é...”</Text>
			<Select
				initialValue={(formValue as any).originCountry}
				onChange={originCountry => updateFormValue({ originCountry })}
				options={countriesWithEmphasis}
			/>
		</CardPageTemplate>
	);
};

export default AboutYouOriginCountry;
