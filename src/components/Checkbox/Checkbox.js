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

		this.state = {
			checked: this.props.checked || this.props.defaultChecked || false
		};
	}

	/**
	 * Update the childProps based on the updated properties passed to the checkbox.
	 */
	componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties;
		this._childProps = childProps;

		if (properties.hasOwnProperty("checked")) {
			this.setState({
				checked: properties.checked
			});
		}
	}

	_focusOnCustomCheckbox() {
		this._customCheckbox.focus();
	}

	_getStyle(styleName) {
		return (this.props.style && this.props.style.customCheckbox && this.props.style.customCheckbox[styleName]) || styles.customCheckbox[styleName];
	}

	_getOnChangeHandler() {
		if (this.props.disabled) {
			return null;
		}
		else {
			return (e) => {
				if ( !this.props.hasOwnProperty("checked") ) {
					this.setState({ checked: !this.state.checked });
				};
				this._customCheckbox.blur();
				this.props.onChange(e);
			};
		}
	}

	_renderCheckMark() {
		const checkedStyles = (this.props.style
			&& this.props.style.checkMark
			&& this.props.style.checkMark.checked) || styles.checkMark.checked;

		return (
			<svg
				style={[
					styles.checkMark.base,
					this.state.checked && checkedStyles,
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

	render() {
		const checkMark = this._renderCheckMark();
		const checkedStateStyles = this._getStyle("checked");
		const disabledStateStyles = this._getStyle("disabled");
		const onChangeHandler = this._getOnChangeHandler();

		return (
			<div style={[styles.base, this.props.style && this.props.style && this.props.style.base]}>
				<div style={[styles.contentWrapper]}>
					<div
						ref={(c) => this._customCheckbox = c}
						tabIndex="0"
						type={ROLE}
						role={ROLE}
						style={[
							styles.customCheckbox.base,
							this.state.checked && checkedStateStyles,
							this.props.disabled && disabledStateStyles,
							this.props.style && this.props.style.customCheckbox && this.props.style.customCheckbox.base
						]}>
						<div style={[styles.checkBoxContentContainer]}>
							{checkMark}
						</div>
					</div>
					<input
						{...this._childProps}
						tabIndex="-1"
						onChange={onChangeHandler}
						onFocus={() => this._focusOnCustomCheckbox()}
						type={ROLE}
						role={ROLE}
						style={[
							styles.baseHiddenInput.base,
							this.state.checked && styles.baseHiddenInput.checked,
							this.props.disabled && styles.baseHiddenInput.disabled
						]}
					/>
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
	defaultChecked: PropTypes.bool,
	onChange: PropTypes.func
};

Checkbox.defaultProps = {
	onChange: function() {}
};
