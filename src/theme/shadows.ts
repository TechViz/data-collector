export type DefaultThemeShadows = {
	/** Layout shadows are shadows related to things like cards, the navbar, etc...
	 * These shadows are usually larger and more subtle */
	card: {
		medium: string;
	};
	/** Button shadows are shadows for clickable elements. They are usually
	 * sharper and more dynamic. */
	button: {
		medium: string;
	};
	navbar: {
		medium: string;
	};
	sidemenu: {
		medium: string;
	};
};

export const DefaultThemeShadows = {
	card: {
		medium: `-2px 2px 15px rgba(0, 0, 0, 0.25)`,
	},
	button: {
		smallButton: `-2px 2px 5px rgba(0, 0, 0, 0.25)`,
		medium: `-2px 2px 5px rgba(0, 0, 0, 0.25)`,
		// medium: `-2px 7px 5px rgba(0, 0, 0, 0.25)`,
	},
	navbar: {
		medium: `0px 4px 4px 0 rgba(0, 0, 0, 0.25)`,
	},
	sidemenu: {
		medium: `4px 4px 4px 4px rgba(0, 0, 0, 0.25)`,
	},
} as DefaultThemeShadows;
