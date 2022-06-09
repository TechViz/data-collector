import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: `checkbox` })`
	cursor: pointer;
`;

const Label = styled.label`
	cursor: pointer;
	display: flex;
	align-items: center;
`;

type CheckboxProps = React.PropsWithChildren<{
	onChange?: (value: boolean) => void;
}> &
	Omit<React.ComponentProps<'input'>, 'onChange' | 'ref' | 'type'>;

type CheckboxComponent = React.FunctionComponent<CheckboxProps>;

const Checkbox: CheckboxComponent = ({ children, onChange = () => {}, className, ...props }) => {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const value = event.target.checked;
		onChange(value);
	}

	return (
		<Label className={className}>
			<Input
				style={{ marginRight: children ? 24 : 4 }}
				type="checkbox"
				onChange={handleChange}
				{...props}
			/>
			{children}
		</Label>
	);
};

export default Checkbox;
