import React, { FC } from 'react';
import styled from 'styled-components';
import { useEffectUpdate } from '../../../libs/hooks/use-effect-update';
import { useMouseDrag } from '../../../libs/use-mouse-drag';

const Root = styled.div`
	width: 100%;
`;

const BarContainer = styled.div<{ numberOfOptions: number }>`
	position: relative;
	margin-bottom: 24px;
	margin-top: 64px;
	width: ${props => 100 - 100 / props.numberOfOptions}%;
	left: ${props => 100 / props.numberOfOptions / 2}%;
`;

const BarBackground = styled.div`
	position: relative;
	width: 100%;
	height: 5px;
	background-color: white;
	border: 1px solid ${props => props.theme.colors.primary.main};
`;

const Bar = styled.div`
	height: 5px;
	background-color: ${props => props.theme.colors.primary.main};
	transition: 200ms;
`;

const IconContainer = styled.div`
	position: absolute;
	height: 60px;
	width: 60px;
	transform: translate(-50%, -50%);
	top: calc(50% - 15px);
	cursor: pointer;
	transition: 200ms;
	user-select: none;
`;

const OptionsTextContainer = styled.div<{ numberOfOptions: number }>`
	display: grid;
	position: relative;
	grid-template-columns: repeat(${props => props.numberOfOptions}, 1fr);
	column-gap: 16px;
`;

const Option = styled.p`
	margin: 0;
	text-align: center;
	font-size: 15px;
	color: ${props => props.theme.colors.primary.main};
`;

const KnotsContainer = styled.div`
	position: absolute;
	width: 100%;
	top: 50%;
	transform: translate(0, -50%);
	display: flex;
	justify-content: space-between;
	cursor: pointer;
`;

const Knot = styled.div<{ filled: boolean }>`
	width: 14px;
	height: 14px;
	border-radius: 100%;
	border: 1px solid ${props => props.theme.colors.primary.main};
	background-color: ${props => (props.filled ? props.theme.colors.primary.main : 'white')};
	transition: 200ms;
`;

const Slider: FC<{
	options: string[];
	iconElement: React.ReactNode;
	defaultValue?: string;
	onChange?: (newValue: string) => void;
}> = ({ options, defaultValue, iconElement, onChange }) => {
	const numberOfOptions = options.length - 1;

	const [selectedIndex, setSelectedIndex] = React.useState(() => {
		const index = options.findIndex(option => option === defaultValue);
		if (index !== -1) return index;
		else return null;
	});

	const progress = (100 * (selectedIndex || 0)) / numberOfOptions;

	const iconRef = React.useRef<HTMLDivElement | null>(null);
	const barRef = React.useRef<HTMLDivElement | null>(null);
	const knotContainerRef = React.useRef<HTMLDivElement | null>(null);

	function handleMouseDownEvent({ x }: { x: number }) {
		const boundingRect = barRef.current!.getBoundingClientRect();
		const distanceFromStart = x - boundingRect.left;
		const progressPercentage = (100 * distanceFromStart) / boundingRect.width;

		const percentagePerStep = 100 / numberOfOptions;
		const closestStep = Math.max(
			0,
			Math.min(numberOfOptions, Math.round(progressPercentage / percentagePerStep)),
		);
		setSelectedIndex(closestStep);
	}

	useMouseDrag(iconRef, {
		onDrag: event => handleMouseDownEvent(event.mousePosition),
		onMouseDown: handleMouseDownEvent,
	});

	useMouseDrag(knotContainerRef, {
		onDrag: event => handleMouseDownEvent(event.mousePosition),
		onMouseDown: handleMouseDownEvent,
	});

	function handleKeyDown(event: React.KeyboardEvent) {
		const key = event.key;

		if (key === 'ArrowLeft') {
			setSelectedIndex(Math.max((selectedIndex ?? 0) - 1, 0));
		} else if (key === 'ArrowRight') {
			setSelectedIndex(Math.min((selectedIndex ?? 0) + 1, numberOfOptions));
		}
	}

	useEffectUpdate(() => {
		if (onChange) onChange(options[selectedIndex!]);
	}, [selectedIndex]);

	return (
		<Root>
			<BarContainer numberOfOptions={numberOfOptions + 1}>
				<BarBackground ref={barRef}>
					<Bar style={{ width: `${progress}%` }} />
					<KnotsContainer ref={knotContainerRef}>
						{options.map((option, index) => (
							<Knot
								style={{
									left: `${(100 * index) / numberOfOptions}%`,
									transform: `translate(${
										index === 0 ? '-50%' : index === options.length - 1 ? '50%' : '0'
									}, 0)`,
								}}
								key={option}
								filled={(selectedIndex || 0) >= index}
							/>
						))}
					</KnotsContainer>
				</BarBackground>
				<IconContainer
					onKeyDown={handleKeyDown}
					tabIndex={0}
					ref={iconRef}
					style={{ left: `${progress}%` }}
				>
					{iconElement}
				</IconContainer>
			</BarContainer>
			<OptionsTextContainer numberOfOptions={numberOfOptions + 1}>
				{options.map(option => (
					<Option key={option}>{option}</Option>
				))}
			</OptionsTextContainer>
		</Root>
	);
};

export default Slider;
