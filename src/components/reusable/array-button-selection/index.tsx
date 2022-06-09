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

export type ButtonSelectionOption = string;

const ArrayButtonSelection: FC<{
	options: ButtonSelectionOption[];
	onSelect?: (option: ButtonSelectionOption) => void;
	onUnselect?: (option: ButtonSelectionOption) => void;
	selectedOptions: ButtonSelectionOption[];
}> = ({ options, onSelect = () => {}, onUnselect = () => {}, selectedOptions }) => {
	return (
		<Root>
			{options.map(option => {
				const isSelected = selectedOptions.find(selected => selected === option);
				return (
					<OptionButton
						type="button"
						backgroundColor={isSelected ? theme => theme.colors.primary.main : undefined}
						textColor={isSelected ? theme => theme.colors.white.full : undefined}
						onClick={() => (isSelected ? onUnselect(option) : onSelect(option))}
						key={option}
					>
						{option}
					</OptionButton>
				);
			})}
		</Root>
	);
};

export default ArrayButtonSelection;
