import colorLib from "color";
import { default as colors, stColorPalette } from "../../shared-styles/colors";

const PADDING = "5px 10px";

export default {
	content: {
		position: "relative",
		display: "inline-block",
		width: "100%",
		height: "100%"
	},
	/* Main Box Styles */
	selectBox: {
		padding: PADDING,
		width: "100%",
		height: "100%",
		transition: "border-color .3s",
		color: stColorPalette.stDarkGray,
		borderColor: stColorPalette.stSilver,
		backgroundColor: colors.white,
		borderStyle: "solid",
		borderWidth: 2,
		userSelect: "none",
		zIndex: 2,
		enabled: {
			":focus": {
				borderColor: stColorPalette.stPink,
				outline: 0
			},
			":hover": {
				cursor: "pointer",
				borderColor: stColorPalette.stPink,
				outline: 0
			}
		},
		disabled: {
			background: colors.disabledBg,
			cursor: "not-allowed"
		},
		arrowIcon: {
			height: "100%",
			width: 15,
			verticalAlign: "middle"
		},
		content: {
			position: "relative",
			overflow: "auto",
			display: "table",
			width: "100%",
			height: "100%"
		},
		selectedOption: {
			display: "table-cell",
			width: "100%",
			verticalAlign: "middle",
			selected: {
				color: "black"
			},
			unselected: {
				color: colorLib(stColorPalette.stLightGray).darken(0.3).hexString()
			}
		}
	},
	/* Option Styles */
	optionList: {
		position: "absolute",
		background: stColorPalette.stWhite,
		overflow: "auto",
		width: "100%",
		left: 0,
		right: 0,
		top: 0,
		zIndex: 3,
		borderStyle: "solid",
		borderColor: colorLib(stColorPalette.stLightGray).darken(0.1).hexString(),
		backgroundColor: colors.white,
		borderWidth: 2,
		boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px",
		transition: "max-height 0.4s ease-in, opacity 0.2s ease-out",
		open: {
			maxHeight: 200,
			opacity: 1
		},
		closed: {
			maxHeight: 0,
			opacity: 0
		}
	},
	option: {
		minHeight: 35,
		padding: PADDING,
		userSelect: "none",
		transition: "background .4s ease-in-out",
		enabled: {
			":hover": {
				cursor: "pointer",
				background: colorLib(stColorPalette.stPink).lighten(0.6).hexString()
			}
		},
		disabled: {
			cursor: "not-allowed",
			background: colors.disabledBg,
			color: colors.disabledText
		}
	},
	hiddenHTMLSelect: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		opacity: 0,
		zIndex: 1
	}
};
