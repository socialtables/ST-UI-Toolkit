import ConfiguredRadium from "../../utils/ConfiguredRadium";
import React, {Component} from "react";
import filterReactDomProps from "filter-react-dom-props";
import PropTypes from "prop-types";

import getStyles from "./styles";

/**
 * Button component
 *
 * The button behaves exactly like a normal html button except:
 * - Once a user clicks on the button it will loose focus
 * - By default every button is of type="button" instead of "submit"
 */
@ConfiguredRadium
export default class Button extends Component {

	constructor(properties) {
		super(properties);
		const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	/**
	 * Update the childProps based on the updated properties passed to the button.
	 */
	componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	componentWillUnmount() {
		this._childProps = null;
	}

	_getStyle(styleName, styles) {
		return (this.props.style && this.props.style[styleName]) || styles[styleName];
	}

	render() {
		const styles = getStyles({theme: this.props.color, shape: this.props.shape });
		const activeStateStyles = this._getStyle("active", styles);
		const disabledStateStyles = this._getStyle("disabled", styles);

		return (
			<button
				{...filterReactDomProps(this._childProps)}
				type={this.props.type}
				style={[
					styles.base,
					!this.props.disabled && activeStateStyles,
					this.props.disabled && disabledStateStyles,
					this.props.style && this.props.style && this.props.style.base
				]}
				onClick={(this.props.disabled) ? null : this.props.onClick} >
					{ this.props.children }
			</button>
		);
	}
}

Button.displayName = "Button";

Button.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	color: PropTypes.string,
	shape: PropTypes.string,
	onClick: PropTypes.func
};

Button.defaultProps = {
	type: "button",
	disabled: false,
	color: "light",
	shape: "square"
};
