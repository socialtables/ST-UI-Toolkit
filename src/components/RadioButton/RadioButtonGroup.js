import Radium from "radium";
import React, {Component, PropTypes} from "react";
import RadioButton from "./RadioButton";
import getStyles from "./styles";

@Radium
export default class RadioButtonGroup extends Component {
	constructor(props) {
		super(props);
		const { style, ...childProps } = props;

		this.state = {
			numberCheckedRadioButtons: 0,
			selected: this.props.valueSelected || this.props.defaultSelected || ""
		}

		this._childProps = childProps;
		this._updateRadioButtons = this._updateRadioButtons.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps, nextContext) {
		const { style, ...childProps } = nextProps;
		this._childProps = childProps;

		if (nextProps.hasOwnProperty("valueSedlected")) {
			this.setState({
				selected: nextProps.valueSelected
			})
		}
	}
	_updateRadioButtons(newSelection) {
		if (this.state.numberCheckedRadioButtons === 0) {
			this.setState({selected: newSelection});
		}
	}
	_handleChange(event, newSelection) {
		this._updateRadioButtons(newSelection);

		if (this.props.onSelect) {
			this.props.onSelect(event, newSelection);
		}
	}
	_getStyle(styleName, styles) {
		return (this.props.style && this.props.style[styleName]) || styles[styleName];
	}
	render() {
		const styles = getStyles();
		const radioButtonGroupStyles = this._getStyle("radioButtonGroup", styles);
		const options = React.Children.map(this.props.children, (option) => {
			const {
				name,
				value,
				label,
				onSelect,
				...other,
			} = option.props;

			return (
				<RadioButton
					{...other}
					style={this.props.style}
					ref={option.props.value}
					name={this.props.name}
					key={option.props.value}
					value={option.props.value}
					label={option.props.label}
					align={this.props.align}
					onSelect={this._handleChange}
					checked={option.props.value === this.state.selected}
					selected={option.props.value === this.state.selected}
				/>
			);
		}, this);

		return (
			<div {...this._childProps} style={[radioButtonGroupStyles]}>
				{options}
			</div>
		)
	}
};

RadioButtonGroup.displayName = "RadioButtonGroup";

RadioButtonGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object,
	name: PropTypes.string,
	defaultSelected: PropTypes.string
};
