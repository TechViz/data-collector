import React from 'react';
import { useMultistep } from './context';

type PageRendererProps = React.PropsWithoutRef<{
	pages: React.ReactNode[];
	onChangePage?: (newPage: number) => void;
}>;

type PageRendererComponent = React.FunctionComponent<PageRendererProps>;

const PageRenderer: PageRendererComponent = ({ pages }) => {
	const { stage } = useMultistep();

	return <>{pages[stage]}</>;
};

export default PageRenderer;
