import Radium from "radium";
import React, {Component, PropTypes} from "react";
import styles from "./styles";

const ROLE = "checkbox";

/**
 * Checkbox component
 */
@Radium
export default class Checkbox extends Component {

	constructor(properties) {
		super(properties);
		const { style, ...childProps } = properties;
		this._childProps = childProps;
	}

	/**
	 * Update the childProps based on the updated properties passed to the checkbox.
	 */
	componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties;
		this._childProps = childProps;
	}

	_renderCheckMark() {
		const checkedStyles = (this.props.style
			&& this.props.style.checkMark
			&& this.props.style.checkMark.checked) || styles.checkMark.checked;

		return (
			<svg
				style={[
					styles.checkMark.base,
					this.props.checked && checkedStyles,
					this.props.disabled && styles.checkMark.disabled
				]}
				viewBox="0 0 12 16"
				aria-hidden="true"
				role="img"
				version="1.1">
				<path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path>
			</svg>
		);
	}

	_removeFocus() {
		if (document.activeElement != document.body) {
			document && document.activeElement && document.activeElement.blur();
		}
	}

	_getStyle(styleName) {
		return (this.props.style && this.props.style[styleName]) || styles[styleName];
	}

	_getOnClickHandler() {
		if (this.props.disabled) {
			return null;
		}
		else {
			return (e) => {
				this._removeFocus(); this.props.onClick(e);
			};
		}
	}

	render() {
		const checkMark = this._renderCheckMark();
		const checkedStateStyles = this._getStyle("checked");
		const disabledStateStyles = this._getStyle("disabled");
		const onClickHandler = this._getOnClickHandler();

		return (
			<div
				{...this._childProps}
				onClick={onClickHandler}
				tabIndex="0"
				type={ROLE}
				role={ROLE}
				style={[
					styles.base,
					this.props.checked && checkedStateStyles,
					this.props.disabled && disabledStateStyles,
					this.props.style && this.props.style && this.props.style.base
				]}>
				<div style={[styles.checkBoxContentContainer]}>
					{checkMark}
				</div>
			</div>
		);
	}
}

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
	style: PropTypes.object,
	disabled: PropTypes.bool,
	checked: PropTypes.bool,
	onClick: PropTypes.func
};

Checkbox.defaultProps = {
	disabled: false,
	checked: false,
	onClick: function() {}
};
