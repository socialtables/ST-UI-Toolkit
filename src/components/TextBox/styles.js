import { default as colors, stColorPalette } from "../../shared-styles/colors";

export default {
	base: {
		color: stColorPalette.stDarkGray,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		transition: "all .2s",
		borderColor: stColorPalette.stSilver,
		borderStyle: "solid",
		borderWidth: 2,
		":focus": {
			borderColor: colors.primary,
			outline: 0
		}
	},
	disabled: {
		backgroundColor: colors.disabledBg,
		color: colors.disabledText,
		cursor: "not-allowed"
	}
};
