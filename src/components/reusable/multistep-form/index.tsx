import React, { FC, PropsWithChildren } from 'react';
import MultistepProvider from './context';
import PageRenderer from './page-renderer';

const MultistepForm: FC<
	PropsWithChildren<{
		pages: React.ReactNode[];
		writeHashToURL?: boolean;
		onForwardAtLastPage?: () => void;
		onChangePage?: (newPage: number) => void;
	}>
> = ({ pages, onChangePage = () => {}, writeHashToURL = false, onForwardAtLastPage, children }) => {
	return (
		<MultistepProvider
			onChangePage={onChangePage}
			writeHashToURL={writeHashToURL}
			maxStage={pages.length - 1}
			onForwardAtLastPage={onForwardAtLastPage}
		>
			<PageRenderer pages={pages} onChangePage={onChangePage} />
			{children}
		</MultistepProvider>
	);
};

export default MultistepForm;
