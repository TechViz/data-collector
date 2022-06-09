import React from 'react';

type ProgressBarContext = {
	progress: number;
	setProgress: (newProgress: number) => void;
};

const context = React.createContext<ProgressBarContext>(null as unknown as ProgressBarContext);

const ProgressBarProvider = ({ ...props }) => {
	const [progress, rawSetProgress] = React.useState<number>(0);

	const setProgress = React.useCallback((newProgress: number) => {
		let progress = Math.max(Math.min(newProgress, 100), 0);
		rawSetProgress(progress);
	}, []);

	return (
		<context.Provider
			value={React.useMemo(
				() => ({
					progress,
					setProgress,
				}),
				[progress],
			)}
			{...props}
		/>
	);
};

const useProgressBar = () => {
	return React.useContext(context);
};

export { useProgressBar };
export default ProgressBarProvider;
