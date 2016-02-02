import Radium from "radium";
import React, {Component, PropTypes} from "react";
import cardStyle from "./styles";

/**
 * Card component with a light shadow.
 *
 * This component will apply any attribute to the div that has been provided as
 * property & is valid for a div.
 */
@Radium
export default class Card extends Component {

  constructor(properties) {
    super(properties);
    const { style, ...childProps } = properties;
    this._childProps = childProps;
  }

  /**
   * Update the childProps based on the updated properties passed to the card.
   */
  componentWillReceiveProps(properties) {
    const { style, ...childProps } = properties;
    this._childProps = childProps;
  }

  render() {
    return (
      <div
        {...this._childProps}
        style={[cardStyle.base, this.props.style]}>
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