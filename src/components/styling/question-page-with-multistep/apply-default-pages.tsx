import { PageDescriptor } from '.';

export function applyDefaultPage(
	pages: (Partial<PageDescriptor> & { component: React.ReactNode; progress: number })[],
	defaultValues: Omit<PageDescriptor, 'component' | 'progress'>,
): PageDescriptor[] {
	return pages.map(page => ({ ...defaultValues, ...page }));
}
