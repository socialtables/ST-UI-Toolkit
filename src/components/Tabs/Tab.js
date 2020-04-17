import ConfiguredRadium from "../../utils/ConfiguredRadium";
import filterReactDomProps from "filter-react-dom-props";
import React, {Component} from "react";
import PropTypes from "prop-types";
import getStyles from "./styles";
import Button from "../Button/Button";

/**
 * Tab component.
 *
 * TODO: add description
 */
@ConfiguredRadium
export default class Tab extends Component {
	constructor(props) {
		super(props);
		const { style, ...childProps } = props; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
		this._handleSelect = this._handleSelect.bind(this);
	}

	/**
	 * Update the childProps based on the updated props passed to the tab.
	 */
	componentWillReceiveProps(props) {
		const { style, ...childProps } = props; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	componentWillUnmount() {
		this._childProps = null;
	}

	_handleSelect(event) {
		if (this.props.onSelect) {
			this.props.onSelect(event, this);
		}
	}

	_getStyle(styleName, styles) {
		return (this.props.style && this.props.style[styleName]) || styles[styleName];
	}

	render() {
		const { label, selected } = this.props;
		const styles = getStyles();
		const tabStyle = selected ? this._getStyle("selected", styles) : {};
		const baseStyle = this._getStyle("base", styles);
		const activeStyle = this._getStyle("active", styles);

		return (
			<Button
				{...filterReactDomProps(this._childProps)}
				style={{
					base: [baseStyle, tabStyle],
					active: activeStyle
				}}
				color="dark"
				onClick={this._handleSelect}
			>
				{label}
			</Button>
		)
	}
}

Tab.displayName = "Tab";

Tab.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	label: PropTypes.node,
	onSelect: PropTypes.func,
	selected: PropTypes.bool,
	style: PropTypes.object,
	value: PropTypes.any
};
