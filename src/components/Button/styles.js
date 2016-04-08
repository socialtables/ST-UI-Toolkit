import colorLib from "color";
import colors from "../../shared-styles/colors";
import getColorFromTheme from "../../utils/get-color-from-theme";


function getBorderRadius(shape) {
	switch (shape) {
		case "round":
			return "50%";
		case "square":
		default:
			return "0";
	}
}


/*
	Default Styles
*/
export default function({ theme, shape }) {
	let btnBackgroundColor = getColorFromTheme(theme);
	btnBackgroundColor = (btnBackgroundColor === null) ? theme : btnBackgroundColor;

	const borderRadius = getBorderRadius(shape);

	return {
		base: {
			backgroundColor: btnBackgroundColor,
			color: colors.white,
			border: 0,
			outline: 0,
			userSelect: "none",
			cursor: "pointer",
			transition: "background 0.2s",
			borderRadius: borderRadius
		},
		active: {
			":hover": {
				backgroundColor: colorLib(btnBackgroundColor).darken(0.25).hexString(),
			}
		},
		disabled: {
			backgroundColor: colors.disabled,
			color: colors.disabledText,
			cursor: "not-allowed"
		}
	};
};
