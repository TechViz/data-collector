import React from 'react';
import Styled from 'styled-components';

const Root = Styled.button`
	width: max-content;
	height: max-content;
	margin: 0.2rem 0.5rem;
	background-color: transparent;
	border: none;
	outline: none;
	cursor: pointer;
`;

const Bar = Styled.div<{ animationTime: number }>`
	position: relative;
	width: 30px;
	height: 4px;
	border-radius: 24px;
	background-color: ${props => props.theme.colors.black.full};
	margin: 4px 0;
	top: 0;
	transition: ${({ animationTime }) => animationTime}ms cubic-bezier(0.77, 0, 0.175, 1);
`;

type HamburguerProps = React.PropsWithRef<{
	onOpen?: () => void;
	onClose?: () => void;
	onClick?: (newState: boolean) => void;
	/** Time (in milisseconds) it takes to animate the hamburguer */
	animationTime?: number;
	/** If value is provided, it will override the hamburguer's internal state */
	value?: boolean;
}>;

type HamburguerComponent = React.ForwardRefRenderFunction<HTMLButtonElement, HamburguerProps>;

/**
 * This is a simple hamburguer, with an opening and closing animation.
 */
const Hamburguer: HamburguerComponent = (
	{
		onOpen = () => {},
		onClose = () => {},
		onClick = () => {},
		animationTime = 200, // In milisseconds
		value,
		...props
	},
	ref,
) => {
	const [isOpenState, setIsOpenState] = React.useState<boolean>(value || false);

	function handleClick() {
		if (typeof value === `undefined`) {
			// Value is not set, use the component's internal state.
			setIsOpenState(!isOpenState);
			onClick(!isOpenState);
		} else if (value) {
			// Value is set. Don't touch the component's state
			onClose();
			onClick(false);
		} else {
			onOpen();
			onClick(true);
		}
	}

	React.useEffect(() => {
		if (typeof value !== `undefined`) return;

		if (isOpenState) onOpen();
		else onClose();
	}, [isOpenState, value]);

	const isOpen = typeof value === `undefined` ? isOpenState : value;

	return (
		<Root {...props} aria-label="Abrir menu" onClick={handleClick} ref={ref}>
			<Bar
				animationTime={animationTime}
				style={{
					top: isOpen ? `7px` : `0px`,
					transform: isOpen ? `rotate(45deg)` : `rotate(0deg)`,
				}}
			/>
			<Bar animationTime={animationTime} style={{ opacity: isOpen ? `0` : `1` }} />
			<Bar
				animationTime={animationTime}
				style={{
					top: isOpen ? `-9px` : `0px`,
					transform: isOpen ? `rotate(-45deg)` : `rotate(0deg)`,
				}}
			/>
		</Root>
	);
};

export default React.forwardRef(Hamburguer);
