import colorLib from "color";
import { default as colors, stColorPalette } from "../../shared-styles/colors";

export default {
	base: {
		color: stColorPalette.stDarkGray,
		padding: 10,
		transition: "all .2s",
		borderColor: stColorPalette.stSilver,
		borderRadius: 5,
		borderStyle: "solid",
		borderWidth: 2,
		":focus": {
			borderColor: colors.primary,
			outline: 0
		}
	},
	disabled: {
		background: colors.disabledBg,
		color: colors.disabledText,
		cursor: "not-allowed"
	}
};
