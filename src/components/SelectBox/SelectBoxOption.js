import ConfiguredRadium from "../../utils/ConfiguredRadium";
import {Component, PropTypes} from "react";

import styles from "./styles";

/**
 * SelectBoxOption component
 *
 * This component is the option for the select box
 */
@ConfiguredRadium
export default class SelectBoxOption extends Component {

	constructor(properties) {
		super(properties);
		const { style, displayLabel, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
		this._handleClick = this._handleClick.bind(this);
	}

	/**
	 * Update the childProps based on the updated properties passed to the text box.
	 */
	componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	componentWillUnmount() {
		this._childProps = null;
	}

	_handleClick() {
		if (!this.props.disabled) {
			this.props.onMouseDown(this.props.value);
		}
	}

	_getStyle(styleName) {
		return (this.props.style && this.props.style.option && this.props.style.option[styleName]) || styles.option[styleName];
	}

	render() {
		const enabledStyles = this._getStyle("enabled");
		const disabledStyles = this._getStyle("disabled");
		const label = (this.props.displayLabel === undefined) ? this.props.value : this.props.displayLabel;

		return (
			<div
				{...this._childProps}
				onMouseDown={this._handleClick}
				style={[
					styles.option,
					!this.props.disabled && enabledStyles,
					this.props.disabled && disabledStyles,
					this.props.style && this.props.style.option
				]}
				value={this.props.value}>
				{label}
			</div>
		);
	}
}

SelectBoxOption.displayName = "SelectBoxOption";

SelectBoxOption.propTypes = {
	style: PropTypes.object,
	disabled: PropTypes.bool,
	value: PropTypes.any,
	displayLabel: PropTypes.string,
	onMouseDown: PropTypes.func
};

SelectBoxOption.defaultProps = {
	disabled: false,
	value: undefined,
	displayLabel: undefined
};
