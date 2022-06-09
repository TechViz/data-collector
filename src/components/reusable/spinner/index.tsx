import React from 'react';
import styled, { keyframes } from 'styled-components';

const Svg = styled.svg<{
	color: string;
	size: number;
}>`
	${({ size = 24, color }) => `
		height: ${size}px;
		width: ${size}px;
		viewBox: 0 0 ${size} ${size};
		stroke: ${color};
		x: 0;
		y: 0;
	`}
`;

const Circle = styled.circle<{
	size: number;
	strokeWidth: number;
	animation: ReturnType<typeof keyframes>;
}>`
	fill: transparent;
	stroke: inherit;
	stroke-width: ${({ strokeWidth }) => strokeWidth};
	stroke-linecap: round;
	stroke-dasharray: ${({ size }) => 3.14 * size};
	animation: ${({ animation }) => animation} 3000ms linear Infinite;
	transform-origin: 50% 50% 0;
`;

type SpinnerProps = React.PropsWithRef<{
	/** The radius of the spinner in pixels. Default is 40. */
	size?: number;
	/** The width (thickness) of the spinner's outline. Default is 2. */
	strokeWidth?: number;
	/** The spinner's color. Default is black. */
	color?: string;
}> &
	React.ComponentProps<'svg'>;

type SpinnerComponent = React.FunctionComponent<SpinnerProps>;

/**
 * This is a spinner component. It is often use to indicate to the user that a
 * server request is being made.
 */
const Spinner: SpinnerComponent = ({
	size = 40,
	strokeWidth = 2,
	color = `black`,
	ref,
	...props
}) => {
	const { current: animation } = React.useRef(keyframes`
		0% {
			stroke-dashoffset: ${0.66 * size};
			transform: rotate(0deg);
		} 50% {
			stroke-dashoffset: ${3.14 * size};
			transform: rotate(720deg);
		} 100% {
			stroke-dashoffset: ${0.66 * size};
			transform: rotate(1080deg);
		}
	`);

	return (
		<Svg viewBox={`0 0 ${size} ${size}`} size={size} color={color} {...props}>
			<Circle
				strokeWidth={strokeWidth}
				animation={animation}
				cx={size / 2}
				cy={size / 2}
				r={(size - strokeWidth) / 2}
				size={size}
			/>
		</Svg>
	);
};

export default Spinner;
