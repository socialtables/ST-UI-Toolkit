import color from "color";

// The following color names were adapted from the ST Style Guide
// https://app.frontify.com/d/D1f3khsW7KQG/social-tables-style-guide#/basics/colors

export const stColorPalette = {
	stPink: "#cb5599",
	stDarkGray: "#494949",
	stTeal: "#49c6b7",
	stBlue: "#65a0d6",
	stDarkTeal: "#4f8d9d",
	stGreen: "#9ecd75",
	stRed: "#e6615d",
	stOrange: "#ea8d63",
	stYellow: "#ffd000",
	stLightGray: "#eaedef",
	stSilver: "#cbd1d4",
	stGray: "#898b8f",
	stMediumGray: "#5e6063",
	stWhite: "#ffffff"
};

export default {
	primary: stColorPalette.stPink,
	secondary: stColorPalette.stTeal,
	tertiary: stColorPalette.stDarkTeal,
	success: stColorPalette.stGreen,
	warning: stColorPalette.stOrange,
	pending: stColorPalette.stYellow,
	info: stColorPalette.stBlue,
	disabledBg: stColorPalette.stLightGray,
	disabledText: color(stColorPalette.stDarkGray).lighten(0.4).hexString(),
	colorBackground: stColorPalette.stLightGray,
	colorSelected: stColorPalette.stSilver,
	colorUnselected: stColorPalette.stGray,
	colorPanel: stColorPalette.stMediumGray,
	colorMain: stColorPalette.stDarkGray,
	white: stColorPalette.stWhite
};
