/**
 * Colors with a gradient. Allows for multiple shades of the same color.
 */
type GradientColor = {
	main: string;
	light: string;
	lighter: string;
	dark: string;
	darker: string;
};

export type DefaultThemeColors = {
	primary: GradientColor;
	blue: GradientColor;

	/** Sometimes, pages will have a color dedicated to objects that should
	 * attract the user's attention, like a call-to-action button on a landing page.
	 * This is the Action color. */

	success: GradientColor;
	error: GradientColor;
	warning: GradientColor;

	/** Useful if you have lots of gray colors in your app, and want to have
	 * consistency between them. */
	gray: GradientColor;
	black: {
		full: string;
	};

	white: {
		background: string;
		full: string;
	};
};

/* TODO - replace this with an actual color. */
const EMPTY_COLOR = ``;

export const DefaultThemeColors = {
	primary: {
		main: `#398aff`,
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: EMPTY_COLOR,
		lighter: EMPTY_COLOR,
	},
	blue: {
		main: '#ADC6EA',
		dark: EMPTY_COLOR,
		darker: EMPTY_COLOR,
		light: '#A7AEDB',
		lighter: EMPTY_COLOR,
	},
	gray: {
		light: `#eeeeee`,
		lighter: EMPTY_COLOR,
		main: `#C4C4C4`,
		dark: `#666666`,
		darker: `#202020`,
	},
	white: {
		background: `#E5E5E5`,
		full: `white`,
	},
	black: {
		full: `black`,
	},

	// Material UI's default success colors.
	success: {
		lighter: `#a7d7a9`,
		light: `#81c784`,
		main: `#4caf50`,
		dark: `#388e3c`,
		darker: EMPTY_COLOR,
	},

	// Material UI's default error colors.
	error: {
		lighter: `#eb9393`,
		light: `#e57373`,
		main: `#f44336`,
		dark: `#d32f2f`,
		darker: EMPTY_COLOR,
	},

	// Material UI's default warning colors.
	warning: {
		lighter: EMPTY_COLOR,
		light: `#ffb74d`,
		main: `#ff9800`,
		dark: `#f57c00`,
		darker: EMPTY_COLOR,
	},
} as DefaultThemeColors;
