import React, { FC, PropsWithChildren } from 'react';
import { getHashMarker, writeHashMarker } from '../../../libs/hash';
import { useEffectUpdate } from '../../../libs/hooks/use-effect-update';

type MultistepContext = {
	stage: number;
	nextStage: () => void;
	prevStage: () => void;
	setStage: (stage: number) => void;
	formValue: Object;
	clearFormValue: () => void;
	updateFormValue: (formValueToAppend: Object) => void;
};

const context = React.createContext<MultistepContext>(null as unknown as MultistepContext);

const MultistepProvider: FC<
	PropsWithChildren<{
		maxStage: number;
		writeHashToURL: boolean;
		onChangePage: (newPage: number) => void;
		onForwardAtLastPage?: () => void;
	}>
> = ({ maxStage, writeHashToURL, onChangePage, onForwardAtLastPage = () => {}, ...props }) => {
	const [formValue, setFormValue] = React.useState<Object>({});
	const [stage, rawSetStage] = React.useState<number>(0);

	React.useLayoutEffect(() => {
		const oldFormStep = getHashMarker('form-step');

		if (!oldFormStep) {
			if (!writeHashToURL) return;
			writeHashMarker('form-step', '0');
			return;
		} else {
			setStage(Number(oldFormStep));
		}
	}, []);

	useEffectUpdate(() => {
		if (!writeHashToURL) return;
		writeHashMarker('form-step', stage.toString());
	}, [stage]);

	const nextStage = React.useCallback(() => {
		rawSetStage(stage => {
			const nextStage = Math.min(stage + 1, maxStage);
			onChangePage(nextStage);
			if (nextStage === stage) onForwardAtLastPage();
			return nextStage;
		});
	}, [onChangePage, maxStage, onForwardAtLastPage]);

	const prevStage = React.useCallback(() => {
		rawSetStage(stage => {
			onChangePage(stage - 1);
			return Math.max(stage - 1, 0);
		});
	}, [onChangePage]);

	const setStage = React.useCallback(
		(newStage: number) => {
			onChangePage(newStage);
			rawSetStage(Math.min(maxStage, Math.max(0, newStage)));
		},
		[maxStage, onChangePage],
	);

	const updateFormValue = React.useCallback((formValueToAppend: Object) => {
		setFormValue(formValue => ({ ...formValue, ...formValueToAppend }));
	}, []);

	const clearFormValue = React.useCallback(() => {
		setFormValue({});
	}, []);

	return (
		<context.Provider
			value={React.useMemo(
				() => ({
					stage,
					nextStage,
					prevStage,
					setStage,
					formValue,
					updateFormValue,
					clearFormValue,
				}),
				[stage, formValue],
			)}
			{...props}
		/>
	);
};

const useMultistep = () => {
	return React.useContext<MultistepContext>(context);
};

export { useMultistep };
export default MultistepProvider;
