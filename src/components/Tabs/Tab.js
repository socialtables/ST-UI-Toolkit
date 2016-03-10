import Radium from "radium";
import React, {Component, PropTypes} from "react";
import getStyles from "./styles";
import Button from "../Button/Button";

/**
 * Tab component.
 *
 * TODO: add description
 */
@Radium
export default class Tab extends Component {
	constructor(props) {
		super(props);
		const { style, ...childProps } = props;
		this._childProps = childProps;
		this._handleSelect = this._handleSelect.bind(this);
	}

	/**
	 * Update the childProps based on the updated props passed to the tab.
	 */
	componentWillReceiveProps(props) {
		const { style, ...childProps } = props;
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
		const {
			children,
			label,
			onSelect,
			selected,
			style,
			value
		} = this.props;

		const styles = getStyles();
		const tabStyle = this.props.selected ? this._getStyle("selected", styles) : {};

		return (
			<Button
				{...this._childProps}
				style={{
					base: [styles.base, tabStyle],
					active: styles.active
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
