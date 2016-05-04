import colors from "../../shared-styles/colors";
import { stColorPalette } from "../../shared-styles/colors";

const DEFAULT_RADIO_BUTTON_SIZE = 16;

export default function() {
	return {
		base: {
			lineHeight: "initial",
			margin: "5px 0px",
			disabled: {
				opacity: "0.5"
			}
		},
		radio: {
			display: "table-cell",
			height: DEFAULT_RADIO_BUTTON_SIZE,
			width: DEFAULT_RADIO_BUTTON_SIZE,
			borderRadius: "50%",
			borderStyle: "solid",
			borderColor: stColorPalette.stSilver,
			backgroundColor: stColorPalette.stSilver,
			borderWidth: 2,
			cursor: "pointer",
			transition: "all 0.20s",
			lineHeight: "unset",
			selected: {
				backgroundColor: colors.primary
			},
			disabled: {
				backgroundColor: colors.disabledBg,
				cursor: "not-allowed",
				":focus:": {
					borderColor: stColorPalette.stSilver
				}
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
		// styles for the radio button label
		labelWrapper: {
			display: "table-cell",
			padding: "0px 5px"
		}
	};
}
