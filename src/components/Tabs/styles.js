import colors from "../../shared-styles/colors";

export default function() {
	return {
		base: {
			height: "50px",
			padding: "0 20px",
			lineHeight: "50px",
			backgroundColor: "transparent"
		},
		active: {
			transition: "color 0.2s",
			":hover": {
				color: colors.primary
			}
		},
		selected: {
			backgroundColor: colors.white,
			color: colors.primary
		},
		tabContainer: {
			backgroundColor: colors.colorMain,
			padding: "0 46px"
		},
		header: {
			backgroundColor: colors.colorMain,
			color: colors.white,
			fontSize: "24px",
			padding: "20px 0"
		},
		tabBar: {
			backgroundColor: colors.colorMain
		},
		tabContent: {
			margin: "0 46px"
		}
	}
}