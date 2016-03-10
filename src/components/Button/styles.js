import colorLib from "color";
import colors from "../../shared-styles/colors";
import fonts from "../../shared-styles/fonts";
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
	const btnBackgroundColor = getColorFromTheme(theme);
	const borderRadius = getBorderRadius(shape);

	return {
		base: {
			background: btnBackgroundColor,
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
				background: colorLib(btnBackgroundColor).darken(0.25).hexString(),
			}
		},
		disabled: {
			background: colors.disabled,
			color: colors.disabledText,
			cursor: "not-allowed"
		}
	};
};
