import colorLib from "color";
import { default as colors, stColorPalette } from "../../shared-styles/colors";

const DEFAULT_CHECKBOX_SIZE = 25;

export default {
	base: {
		height: DEFAULT_CHECKBOX_SIZE,
		width: DEFAULT_CHECKBOX_SIZE
	},
	contentWrapper: {
		position: "relative",
		width: "100%",
		height: "100%"
	},
	// Styles for the hidden checkbox <input> element
	baseHiddenInput: {
		base: {
			position: "absolute",
			opacity: 0,
			height: "100%",
			width: "100%",
			cursor: "pointer",
			zIndex: 2,
			top: 0,
    			right: 0,
    			bottom: 0,
    			left: 0
		},
		disabled: {
			cursor: "not-allowed"
		}
	},
	// Styles for custom checkbox element
	customCheckbox: {
		base: {
			height: "100%",
			width: "100%",
			position: "absolute",
			borderRadius: 3,
			borderStyle: "solid",
			borderColor: stColorPalette.stSilver,
			borderWidth: 2,
			cursor: "pointer",
			transition: "all 0.20s",
			zIndex: 1,
			":focus": {
				borderColor: colorLib(colors.primary).lighten(0.25).hexString(),
				outline: 0
			}
		},
		checked: {
			background: colors.primary,
			borderColor: colors.primary,
			":focus": {
				borderColor: colors.primary
			}
		},
		disabled: {
			background: colors.disabledBg,
			borderColor: stColorPalette.stSilver,
			cursor: "not-allowed",
			":focus": {
				borderColor: stColorPalette.stSilver
			}
		}
	},
	// Styles for checkbox content container
	checkBoxContentContainer: {
		position: "relative",
		width: "100%",
		height: "100%"
	},
	// Styles for checkmark icon
	checkMark: {
		base: {
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			width: "100%",
			height: "100%",
			fill: stColorPalette.stWhite,
			visibility: "hidden"
		},
		checked: {
			visibility: "visible"
		},
		disabled: {
			fill: stColorPalette.stSilver
		}
	}
};
