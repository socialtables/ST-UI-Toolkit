import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./styles";

/**
 * GrowlerContentWrapper component
 */
export default class GrowlerContentWrapper extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div style={[
				styles.base,
				this.props.style && this.props.style.base
			]}>
				{this.props.children}
			</div>
		);
	}
}

GrowlerContentWrapper.displayName = "GrowlerContentWrapper";

GrowlerContentWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object
};