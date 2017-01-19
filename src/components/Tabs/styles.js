import colors from "../../shared-styles/colors";

export default function() {
	return {
		base: {
			height: "50px",
			paddingTop: "0px",
			paddingBottom: "0px",
			paddingLeft: "20px",
			paddingRight: "20px",
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
			paddingTop: "0px",
			paddingBottom: "0px",
			paddingLeft: "46px",
			paddingRight: "46px"
		},
		header: {
			backgroundColor: colors.colorMain,
			color: colors.white,
			fontSize: "24px",
			paddingTop: "20px",
			paddingBottom: "20px",
			paddingLeft: "0px",
			paddingRight: "0px"
		},
		tabBar: {
			backgroundColor: colors.colorMain
		},
		tabContent: {
			marginTop: "0px",
			marginBotton: "0px",
			marginLeft: "46px",
			marginRight: "46px"
		}
	}
}
