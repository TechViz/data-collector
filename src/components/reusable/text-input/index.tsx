import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const Label = styled.label<{ fullWidth: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	margin: 8px 0px;
	row-gap: 25px;
	width: ${props => (props.fullWidth ? '100%' : 'max-content')};
`;

const Input = styled.input`
	border: 2px solid ${props => props.theme.colors.primary.main};
	height: 100%;
	width: 100%;
	border-radius: 30px;
	padding: 8px 12px;
	font-size: inherit;
	outline: none;
	resize: inherit;
`;

const LabelText = styled.span<{ shouldAppearOnTop?: boolean }>`
	color: ${props => props.theme.colors.gray.dark};
	padding: 4px 12px;
	position: absolute;
	font-size: inherit;
	pointer-events: none;
	${({ shouldAppearOnTop }) => (shouldAppearOnTop ? `top: 8px;` : ``)}

	${Input}:focus + & {
		color: transparent;
	}
`;

const TextArea = styled(Input).attrs({ as: `textarea` })<{ rows: number }>``;

/**
 * This is the application's default text input component
 */
const TextInput: FC<
	{
		/** The text that indicates the field's name */
		label: string;
		numberOfLines?: number;
		inputProps?: Omit<React.ComponentProps<'input'>, 'ref'>;
		labelProps?: Omit<React.ComponentProps<'span'>, 'ref'>;
		name?: string;
		type?: string;
		value?: string;
		onChange?: (newValue: string, event: React.ChangeEvent<HTMLInputElement>) => void;
		inputRef?: React.RefObject<HTMLInputElement>;
		defaultValue?: string;
		autoComplete?: string;
		fullWidth?: boolean;
		error?: null | string;
	} & Omit<React.ComponentProps<'label'>, 'onChange' | 'defaultValue' | 'ref'>
> = ({
	label,
	numberOfLines = 1,
	inputProps,
	labelProps,
	name,
	type,
	onChange = () => {},
	inputRef,
	value: valueProps,
	defaultValue = ``,
	autoComplete = '',
	fullWidth = false,
	error,
	...props
}) => {
	const theme = useTheme();
	const [value, setValue] = React.useState(valueProps || defaultValue);

	function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
		const newValue = event.target.value;
		onChange(newValue, event);
		if (typeof valueProps === 'undefined') setValue(newValue);
	}

	React.useEffect(() => {
		if (typeof valueProps === 'undefined') return;
		setValue(valueProps);
	}, [valueProps]);

	const isValueEmpty = value === '';

	return (
		<Label {...props} fullWidth={fullWidth}>
			{isValueEmpty && (
				<LabelText shouldAppearOnTop={numberOfLines > 0} {...labelProps}>
					{label}
				</LabelText>
			)}
			{numberOfLines === 1 ? (
				<Input
					name={name}
					type={type}
					value={value}
					onInput={handleChangeInput}
					ref={inputRef}
					autoComplete={autoComplete}
					style={{ borderColor: error ? theme.colors.error.main : '' }}
					title={error || ''}
					{...inputProps}
				/>
			) : (
				<TextArea
					name={name}
					type={type}
					value={value}
					ref={inputRef}
					onInput={handleChangeInput}
					rows={numberOfLines}
					{...inputProps}
				/>
			)}
		</Label>
	);
};

export default TextInput;
