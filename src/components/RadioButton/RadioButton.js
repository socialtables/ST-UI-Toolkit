import Radium from "radium";
import React, {Component, PropTypes} from "react";
import getStyles from "./styles";

@Radium
export default class RadioButton extends Component {
	constructor(props) {
		super(props);
		const { style, ...childProps } = props;
		this._childProps = childProps;
		this._handleSelect = this._handleSelect.bind(this);
		this._getStyle = this._getStyle.bind(this);
		this.onSelect = this.props.onSelect.bind(this);
	}
	componentWillReceiveProps(props) {
		const { style, ...childProps } = props;
		this._childProps = childProps;
	}
	_handleSelect(event) {
		if (this.props.onSelect && !this.props.disabled) {
			this.props.onSelect(event, this.props.value);
		}
	}
	_getStyle(styleName, styles) {
		return (this.props.style && this.props.style[styleName]) || styles[styleName];
	}
	render() {
		const styles = getStyles();
		const selectedStyles = this._getStyle("selected", styles);
		const disabledStyles = this._getStyle("disabled", styles);
		const rowStyles = this._getStyle("row", styles)
		const makeRow = this.props.align === "row";

		return (
			<div {...this._childProps} style={[styles.base, makeRow && rowStyles]}>
				<div style={[
					styles.radio,
					this.props.style && this.props.style.radio,
					this.props.selected && selectedStyles,
					this.props.disabled && disabledStyles
				]}>
					<div style={[styles.radioButtonContentContainer]}>
						<input
							type="radio"
							name={this.props.name}
							value={this.props.value}
							disabled={this.props.disabled}
							selected={this.props.selected}
							onChange={this._handleSelect}
							style={[
								styles.baseHiddenInput.base,
								this.props.disabled && styles.baseHiddenInput.disabled
							]}
						/>
					</div>
				</div>
				<div style={[styles.labelWrapper]}>
				{this.props.label}
				</div>
			</div>
		)
	}
};

RadioButton.displayName = "RadioButton";

RadioButton.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object,
	selected: PropTypes.bool,
	disabled: PropTypes.bool,
	value: PropTypes.string,
	label: PropTypes.string,
	align: PropTypes.string,
	onSelect: PropTypes.func
};

RadioButton.defaultProps = {
	selected: false,
	disabled: false,
	align: "column",
	onSelect: function() {}
};

