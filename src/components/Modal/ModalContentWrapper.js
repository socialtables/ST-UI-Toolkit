import ConfiguredRadium from "../../utils/ConfiguredRadium";
import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./styles";

/**
 * ModalContentWrapper component
 */
@ConfiguredRadium
export default class ModalContentWrapper extends Component {
	constructor(props) {
		super(props);
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

ModalContentWrapper.displayName = "ModalContentWrapper";

ModalContentWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object
};
