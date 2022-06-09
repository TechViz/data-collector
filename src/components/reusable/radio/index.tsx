import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components';

const Root = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	color: inherit;
`;

const Input = styled.input`
	position: absolute;
	opacity: 0;
	height: 0;
	width: 0;
	color: inherit;
`;

const Label = styled.label`
	margin-left: 8px;
	cursor: pointer;
	color: inherit;
`;

type RadioComponent = FC<{
	onChange?: (newValue: boolean) => void;
	value?: boolean;
	label: React.ReactNode;
}>;

const Radio: RadioComponent = ({ onChange = () => {}, label, value: propsValue }) => {
	const isControlledExternally = typeof propsValue !== 'undefined';

	const [isSelected, setIsSelected] = React.useState(isControlledExternally ? propsValue : false);
	const inputRef = React.useRef<HTMLInputElement | null>(null);
	const theme = useTheme();

	function handleClick() {
		onChange(!isSelected);
		if (isControlledExternally) return;

		inputRef.current!.checked = !isSelected;
		setIsSelected(!isSelected);
	}

	React.useEffect(() => {
		if (!isControlledExternally) return;
		setIsSelected(propsValue);
	}, [isControlledExternally, propsValue]);

	return (
		<Root onClick={handleClick}>
			<Input type="radio" ref={inputRef} />
			<svg width={18} height={18} strokeWidth="10" stroke="none" fill="none" viewBox="0 0 100 100">
				<rect
					x="5"
					width="90"
					y="5"
					height="90"
					rx="24"
					ry="24"
					stroke={theme.colors.primary.main}
				/>
				{isSelected && (
					<>
						<rect
							x="5"
							width="90"
							y="5"
							height="90"
							rx="24"
							ry="24"
							fill={theme.colors.primary.main}
						/>
						<svg
							width="90"
							height="90"
							viewBox="0 0 17 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1.66634 6.5L6.79134 11.625L15.333 1.375" stroke="white" stroke-width="3" />
						</svg>
					</>
				)}
			</svg>
			<Label>{label}</Label>
		</Root>
	);
};

export default Radio;
