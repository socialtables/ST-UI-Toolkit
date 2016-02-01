import Radium from "radium";
import React, {Component, PropTypes} from "react";

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
  }

  render() {
    return (
      <button
        disabled={this.props.disabled}
        type={this.props.type || "button"}
        style={[
          defaultStyles.base,
          this.props.disabled && defaultStyles.disabled,
          this.props.style
        ]}
        className={this.props.className}
        onClick={this.props.onClick}>
        { this.props.children }
      </button>
    );
  }
}