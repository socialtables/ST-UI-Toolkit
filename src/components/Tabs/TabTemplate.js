import Radium from "radium";
import {Component, PropTypes} from "react";

@Radium
export default class TabTemplate extends Component {
	render() {
		const styles = {
			width: "100%"
		};

		if (!this.props.selected) {
			styles.height = 0;
			styles.overflow = "hidden";
		}

		return (
			<div style={styles}>
				{this.props.children}
			</div>
		)
	}
};

TabTemplate.displayName = "TabTemplate";

TabTemplate.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	selected: PropTypes.bool
};