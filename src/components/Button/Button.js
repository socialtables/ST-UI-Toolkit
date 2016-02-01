import Radium from "radium";
import {Component, PropTypes} from "react";

import defaultStyles from "./styles";

/**
 * Button component
 *
 * The button behaves exactly like a normal html button except:
 * - Once a user clicks on the button it will loose focus
 * - By default every button is of type="button" instead of "submit"
 */
@Radium
export default class Button extends Component {

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
      <button
        {...this._childProps}
        type={this.props.type}
        style={[
          defaultStyles.base,
          this.props.disabled && defaultStyles.disabled,
          this.props.style
        ]}
        onClick={(this.props.disabled) ? null : this.props.onClick} >
        { this.props.children }
      </button>
    );
  }
}

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object,
  type: PropTypes.string,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  type: "button",
  disabled: false
};
