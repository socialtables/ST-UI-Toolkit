import ConfiguredRadium from "../../utils/ConfiguredRadium";
import filterReactDomProps from "filter-react-dom-props";
import React, {
	Children,
	Component,
	createElement,
	cloneElement
} from "react";
import PropTypes from "prop-types";
import TabTemplate from "./TabTemplate";
import getStyles from "./styles";

/**
 * Tabs component.
 *
 * TODO: add description
*/
@ConfiguredRadium
export default class Tabs extends Component {
	constructor(props) {
		super(props);
		const { style, initialSelectedIndex, onChange, ...childProps } = props; // eslint-disable-line no-unused-vars
		this._childProps = childProps;

		this.state = {
			selectedIndex: (initialSelectedIndex < this.getTabCount()) ? initialSelectedIndex : 0
		};

		this._handleTabSelection = this._handleTabSelection.bind(this);
		this._renderTabsAndContent = this._renderTabsAndContent.bind(this);
	}

	/**
	 * Update the childProps based on the updated properties passed to the card.
	 */
	UNSAFE_componentWillReceiveProps(properties) {
		const { style, initialSelectedIndex, onChange, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	componentWillUnmount() {
		this._childProps = null;
	}

	getTabCount() {
		return Children.count(this.props.children);
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
			this.props.onChange(tabIndex);
			this.setState({
				selectedIndex: tabIndex
			});
		}
	}

	_renderTabsAndContent(children) {
		let tabContent = [];
		let tabs = Children.map(children, (tab, index) => {
			if (tab.type && tab.type.displayName !== "Tab") {
				window.console.warn(`Tabs only accepts Tab Components as children.
					Found ${tab.type.displayName || tab.type} as child number ${index + 1} of Tabs`);
			}
			else {
				tabContent.push(
					(tab.props.children) ? createElement(TabTemplate, {
						key: index,
						selected: this._getSelected(tab, index)
					}, tab.props.children) : undefined
				);

				return cloneElement(tab, {
					key: index,
					selected: this._getSelected(tab, index),
					tabIndex: index,
					onSelect: this._handleTabSelection
				});
			}
		});

		return { tabs, tabContent };
	}

	render() {
		const {
			tabs,
			tabContent
		} = this._renderTabsAndContent(this.props.children);

		const styles = getStyles();
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
			<div {...filterReactDomProps(this._childProps)}>
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
	label: PropTypes.string,
	initialSelectedIndex: PropTypes.number,
	onChange: PropTypes.func,
	style: PropTypes.object,
	value: PropTypes.any
};

Tabs.defaultProps = {
	onChange: function() {}
};
