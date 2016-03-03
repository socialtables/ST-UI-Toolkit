import colorLib from "color";
import colors from "../../shared-styles/colors";
import fonts from "../../shared-styles/fonts";
import { stColorPalette } from "../../shared-styles/colors";

const DEFAULT_RADIO_BUTTON_SIZE = 16;

export default function() {
	return {
		base: {
			lineHeight: "initial",
			margin: "5px 0px"
		},
		radio: {
			display: "table-cell",
			height: DEFAULT_RADIO_BUTTON_SIZE,
			width: DEFAULT_RADIO_BUTTON_SIZE,
			lineHeight: "initial",
			borderRadius: "50%",
			borderStyle: "solid",
			borderColor: stColorPalette.stSilver,
			background: stColorPalette.stSilver,
			borderWidth: 2,
			cursor: "pointer",
			transition: "all 0.20s",
			lineHeight: "unset"

		},
		selected: {
			background: colors.primary
		},
		disabled: {
			background: colors.disabledBg,
			cursor: "not-allowed",
			":focus:": {
				borderColor: stColorPalette.stSilver
			}
		},
		row: {
			display: "table-cell"
		},
		// styles for the radio button group
		radioButtonGroup: {
			display: "table"
		},
		// styles for the hidden <input> element
		baseHiddenInput: {
			base: {
				position: "absolute",
				opacity: 0,
				cursor: "pointer",
				zIndex: 2
			},
			disabled: {
				cursor: "not-allowed"
			}
		},
		// styles for radio button content container
		radioButtonContentContainer: {
			position: "absolute",
			width: "100%",
			height: "100%"
		},
		// styles for the radio button label
		labelWrapper: {
			display: "table-cell",
			padding: "0px 5px"
		}
	};
};
