import ConfiguredRadium from "../../utils/ConfiguredRadium";
import filterReactProps from "filter-react-props";
import React, {Component} from "react";
import PropTypes from "prop-types";
import getStyles from "./styles";

@ConfiguredRadium
export default class RadioButton extends Component {
	constructor(props) {
		super(props);
		const { style, align, ...childProps } = props; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
		this._handleSelect = this._handleSelect.bind(this);
		this._getStyle = this._getStyle.bind(this);
		this.onSelect = this.props.onSelect.bind(this);
	}
	UNSAFE_componentWillReceiveProps(props) {
		const { style, align, ...childProps } = props; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}
	componentWillUnmount() {
		this._childProps = null;
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
		const rowStyles = this._getStyle("row", styles);
		const radioStyles = this._getStyle("radio", styles);
		const makeRow = this.props.align === "row";

		return (
			<div
				{...filterReactProps(this._childProps)}
				style={[
					styles.base,
					this.props.disabled && styles.base.disabled,
					makeRow && rowStyles
				]}
				>
				<div
					onClick={this._handleSelect}
					style={[
						styles.radio,
						this.props.selected && (radioStyles.selected || styles.radio.selected),
						this.props.disabled && (radioStyles.disabled || styles.radio.disabled),
						this.props.style && this.props.style.radio
					]}>
					<div>
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
				<div onClick={this._handleSelect} style={[styles.labelWrapper]}>
				{this.props.label}
				</div>
			</div>
		)
	}
}

RadioButton.displayName = "RadioButton";

RadioButton.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object,
	selected: PropTypes.bool,
	disabled: PropTypes.bool,
	name: PropTypes.string,
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

