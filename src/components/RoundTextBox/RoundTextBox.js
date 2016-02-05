import Radium from "radium";
import React, {Component, PropTypes} from "react";

import styles from "./styles";
import VALID_TYPES from "./valid_types";

/**
 * RoundTextBox component
 *
 * This component is the rounded-input box
 */
@Radium
export default class RoundTextBox extends Component {

	constructor(properties) {
		super(properties);
		const { style, ...childProps } = properties;
		this._childProps = childProps;
	}

	/**
	 * Update the childProps based on the updated properties passed to the card.
	 */
	componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties;
		this._childProps = childProps;
	}

	render() {
		return (
			<input
				{...this._childProps}
				type={this.props.type}
				style={[
					styles.base,
					this.props.disabled && styles.disabled,
					this.props.style
				]}
			/>
		);
	}
}

RoundTextBox.displayName = "RoundTextBox";

RoundTextBox.propTypes = {
	style: PropTypes.object,
	type: React.PropTypes.oneOf(VALID_TYPES).isRequired,
	disabled: PropTypes.bool
};

RoundTextBox.defaultProps = {
	type: "text",
	disabled: false
};
