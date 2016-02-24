import colors from "../../shared-styles/colors";

export default function() {
	return {
		base: {
			height: "50px",
			padding: "0 20px",
			lineHeight: "50px"
		},
		active: {
			transition: "color 0.2s",
			":hover": {
				color: colors.primary
			}
		},
		selected: {
			background: colors.white,
			color: colors.primary
		},
		tabContainer: {
			background: colors.colorMain,
			padding: "0 8%"
		},
		header: {
			background: colors.colorMain,
			color: colors.white,
			fontSize: "24px",
			padding: "20px 0"
		},
		tabBar: {
			background: colors.colorMain
		},
		tabContent: {
			margin: "0 8%"
		}
	}
};