import ConfiguredRadium from "../../utils/ConfiguredRadium";
import filterReactProps from "filter-react-props";
import React, {Component} from "react";
import PropTypes from "prop-types";

import styles from "./styles";
import VALID_TYPES from "./valid_types";

/**
 * TextBox component
 *
 * This component is the rounded-input box
 */
@ConfiguredRadium
export default class TextBox extends Component {

	constructor(properties) {
		super(properties);
		const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	/**
	 * Update the childProps based on the updated properties passed to the text box.
	 */
	UNSAFE_componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	componentWillUnmount() {
		this._childProps = null;
	}

	render() {
		const disabledStyles = (this.props.style && this.props.style.disabledStyles) || styles.disabled;

		return (
			<input
				{...filterReactProps(this._childProps)}
				type={this.props.type}
				style={[
					styles.base,
					this.props.disabled && disabledStyles,
					this.props.style && this.props.style && this.props.style.base
				]}
			/>
		);
	}
}

TextBox.displayName = "TextBox";

TextBox.propTypes = {
	style: PropTypes.object,
	type: PropTypes.oneOf(VALID_TYPES).isRequired,
	disabled: PropTypes.bool
};

TextBox.defaultProps = {
	type: "text",
	disabled: false
};
