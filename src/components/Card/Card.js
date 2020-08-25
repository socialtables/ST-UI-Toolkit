import ConfiguredRadium from "../../utils/ConfiguredRadium";
import filterReactProps from "filter-react-props";
import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./styles";

/**
 * Card component with a light shadow.
 *
 * This component will apply any attribute to the div that has been provided as
 * property & is valid for a div.
 */
@ConfiguredRadium
export default class Card extends Component {

	constructor(properties) {
		super(properties);
		const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	/**
	 * Update the childProps based on the updated properties passed to the card.
	 */
	UNSAFE_componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	componentWillUnmount() {
		this._childProps = null;
	}

	render() {
		return (
			<div
				{...filterReactProps(this._childProps)}
				style={[
					styles.base,
					this.props.style && this.props.style && this.props.style.base
				]}>
				{ this.props.children }
			</div>
		);
	}
}

Card.displayName = "Card";

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object
};
