import React, {Component, PropTypes} from 'react';


/**
 * Button component
 *
 * The button behaves exactly like a normal html button except:
 * - Once a user clicks on the button it will loose focus
 * - By default every button is of type="button" instead of "submit"
 */
export default class Button extends Component {

  constructor(properties) {
    super(properties);
  }

  render() {
    return (
      <button>
        { this.props.children }
      </button>
    );
  }
}
