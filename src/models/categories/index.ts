export const categories = [
	{ name: 'aboutYou', label: 'Sobre Você', path: '/about-you' },
	{ name: 'habitation', label: 'Lar doce lar', path: '/habitation' },
	{ name: 'finances', label: 'Finanças', path: '/finances' },
	{ name: 'userWork', label: 'Trabalho', path: '/work' },
	{ name: 'dialog', label: 'Diálogo', path: '/dialog' },
	{ name: 'respect', label: 'Respeito', path: '/respect' },
	{ name: 'problematization', label: 'Argumentação', path: '/problematization' },
] as const;

export type CategoryItem = {
	name: string;
	label: string;
	path: string;
};

export const CategoryNames = categories.map(category => category.name);

export type CategoryNames = typeof categories[number]['name'];

export const CategoryLabels = categories.map(category => category.label);

export type CategoryLabels = typeof categories[number]['label'];
