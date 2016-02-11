import colors from "../../shared-styles/colors";

function getJustification(justify) {
	switch (justify) {
		case "left":
			return "flex-start";
		case "right":
			return "flex-end";
		case "center":
			return "center";
		default:
			return "flex-start";
	}
}

export default function({ justify }) {
	const justification = getJustification(justify);

	return {
		base: {
			height: "50px",
			padding: "0 5%",
			flexBasis: "auto",
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
			background: colors.colorMain,
			display: "flex",
			flexDirection: "row",
			justifyContent: justification
		},
		tabContent: {
			margin: "0 8%"
		}
	}
};