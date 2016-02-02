import { stColorPalette } from "../shared-styles/colors";

export default function(theme) {
	switch (theme) {
		case "light":
			return stColorPalette.stPink;
		case "dark":
			return stColorPalette.stDarkGray;
		case "success":
			return stColorPalette.stGreen;
		case "fail":
			return stColorPalette.stRed;
		default:
			return stColorPalette.stPink;
	}
};