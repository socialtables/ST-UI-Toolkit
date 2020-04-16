import ConfiguredRadium from "../../utils/ConfiguredRadium";
import filterReactDomProps from "filter-react-dom-props";
import React, {Children, Component} from "react";
import PropTypes from "prop-types";
import RadioButton from "./RadioButton";
import getStyles from "./styles";

@ConfiguredRadium
export default class RadioButtonGroup extends Component {
	constructor(props) {
		super(props);
		const { style, ...childProps } = props; // eslint-disable-line no-unused-vars

		this.state = {
			numberCheckedRadioButtons: 0,
			selected: this.props.valueSelected || this.props.defaultSelected || ""
		}

		this._childProps = childProps;
		this._updateRadioButtons = this._updateRadioButtons.bind(this);
		this._handleChange = this._handleChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		const { style, ...childProps } = nextProps; // eslint-disable-line no-unused-vars
		this._childProps = childProps;

		if (nextProps.hasOwnProperty("valueSedlected")) {
			this.setState({
				selected: nextProps.valueSelected
			})
		}
	}
	componentWillUnmount() {
		this._childProps = null;
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
		const options = Children.map(this.props.children, (option) => {
			const {
				name,
				value,
				label,
				align,
				...other
			} = option.props;

			return (
				<RadioButton
					{...other}
					key={option.props.value}
					style={this.props.style}
					ref={option.props.value}
					name={name}
					value={value}
					label={label}
					align={align}
					onSelect={this._handleChange}
					checked={option.props.value === this.state.selected}
					selected={option.props.value === this.state.selected}
				/>
			);
		}, this);

		return (
			<div {...filterReactDomProps(this._childProps)} style={[radioButtonGroupStyles]}>
				{options}
			</div>
		)
	}
}

RadioButtonGroup.displayName = "RadioButtonGroup";

RadioButtonGroup.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object,
	name: PropTypes.string,
	align: PropTypes.string,
	defaultSelected: PropTypes.string,
	valueSelected: PropTypes.bool,
	onSelect: PropTypes.func
};
