import React, { FC } from 'react';
import styled from 'styled-components';
import WhiteButton from '../button/white-variant';

const Root = styled.div`
	width: 100%;
	display: flex;
	column-gap: 24px;
	row-gap: 24px;
	flex-wrap: wrap;
	justify-content: center;
`;

const OptionButton = styled(WhiteButton)`
	padding-left: 32px;
	padding-right: 32px;
	box-shadow: none;
`;

const RoundOptionButton = styled(WhiteButton)`
	border-radius: 100%;
	width: 160px;
	height: 160px;
	padding: 0;
`;

export type ButtonSelectionOption = string;

const ButtonSelection: FC<{
	options: ButtonSelectionOption[];
	onChange?: (option: ButtonSelectionOption) => void;
	defaultValue?: ButtonSelectionOption;
	isRoundButtons?: boolean;
	roundOptionSize?: number;
}> = ({ options, onChange = () => {}, defaultValue, isRoundButtons, roundOptionSize }) => {
	const OptionElem = isRoundButtons ? RoundOptionButton : OptionButton;

	return (
		<Root
			style={{
				columnGap: isRoundButtons ? '48px' : '',
				rowGap: isRoundButtons ? '48px' : '',
			}}
		>
			{options.map(option => {
				const isSelected = defaultValue === option;
				return (
					<OptionElem
						type="button"
						backgroundColor={isSelected ? theme => theme.colors.primary.main : undefined}
						textColor={isSelected ? theme => theme.colors.white.full : undefined}
						onClick={() => onChange(option)}
						key={option}
						style={{
							width: isRoundButtons ? roundOptionSize : undefined,
							height: isRoundButtons ? roundOptionSize : undefined,
						}}
					>
						{option}
					</OptionElem>
				);
			})}
		</Root>
	);
};

export default ButtonSelection;
