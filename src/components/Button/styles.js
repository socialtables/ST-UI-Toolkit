import colorLib from "color";
import colors from "../../shared-styles/colors";
import fonts from "../../shared-styles/fonts";
import getColorFromTheme from "../../utils/get-color-from-theme";
/*
	Default Styles
*/
export default function({ theme }) {
	const btnBackgroundColor = getColorFromTheme(theme);

	return {
		base: {
			background: btnBackgroundColor,
			color: colors.white,
			border: 0,
			outline: 0,
			userSelect: "none"
		},
		active: {
			transition: "background 0.2s",
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