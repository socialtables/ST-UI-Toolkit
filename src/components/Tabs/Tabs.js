import Radium from "radium";
import React, {Component, PropTypes} from "react";
import TabTemplate from "./TabTemplate";
import getStyles from "./styles";

/**
 * Tabs component.
 *
 * TODO: add description
*/
@Radium
export default class Tabs extends Component {
	constructor(props) {
		super(props);
		const { style, ...childProps } = props;
		this._childProps = childProps;

		const initialIndex = props.initialSelectedIndex
		this.state = {
			selectedIndex: (initialIndex < this.getTabCount()) ? initialIndex : 0
		};

		this._handleTabSelection = this._handleTabSelection.bind(this);
	}

	/**
	 * Update the childProps based on the updated properties passed to the card.
	 */
	componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties;
		this._childProps = childProps;
	}

	getTabCount() {
		return React.Children.count(this.props.children);
	}

	_getSelected(tab, index) {
		return this.state.selectedIndex === index;
	}

	_getStyle(styleName, styles) {
		return (this.props.style && this.props.style[styleName]) || styles[styleName];
	}

	_handleTabSelection(event, tab) {
		const tabIndex = tab.props.tabIndex;
		if (this.state.selectedIndex !== tabIndex) {
			this.setState({
				selectedIndex: tabIndex
			});
		}
	}

	render() {
		const {
			children,
			initialSelectedIndex,
			onChange,
			style,
			value
		} = this.props;

		let tabContent = [];
		let tabs = React.Children.map(children, (tab, index) => {
			if (tab.type && tab.type.displayName !== "Tab") {
				console.warn(`Tabs only accepts Tab Components as children.
					Found ${tab.type.displayName || tab.type} as child number ${index + 1} of Tabs`);
			}

			tabContent.push(
				(tab.props.children) ? React.createElement(TabTemplate, {
					key: index,
					selected: this._getSelected(tab, index)
				}, tab.props.children) : undefined
			);

			return React.cloneElement(tab, {
				key: index,
				selected: this._getSelected(tab, index),
				tabIndex: index,
				onSelect: this._handleTabSelection
			});
		});

		const styles = getStyles({ justify: this.props.justify });
		const tabContainerStyle = this._getStyle("tabContainer", styles);
		const headerStyle = this._getStyle("header", styles);
		const tabBarStyle = this._getStyle("tabBar", styles);
		const tabContentStyle = this._getStyle("tabContent", styles);
		const label = (this.props.label) ? (
			<div style={headerStyle}>
				{this.props.label}
			</div>
		) : null;

		return (
			<div {...this._childProps}>
				<div style={tabContainerStyle}>
					{label}
					<div style={tabBarStyle}>
						{tabs}
					</div>
				</div>
				<div style={tabContentStyle}>
					{tabContent}
				</div>
			</div>
		)
	}
}

Tabs.displayName = "Tabs";

Tabs.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	initialSelectedIndex: PropTypes.number,
	onChange: PropTypes.func,
	style: PropTypes.object,
	value: PropTypes.any
};
