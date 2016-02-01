import React, {Component} from 'react';
import {Button} from 'belle';
import Code from '../Code';
import {propertyNameStyle, propertyDescriptionStyle} from '../../style';

const basicCodeExample = `<Button onClick={() => console.log("yolo")}>Click Here</Button>`;
const disabledButtonCodeExample = `<Button disabled>Follow</Button>`;
const redButtonCodeExample = `<Button style={{ background: "red" }}>This Button Is Red</Button>`;

export default class ButtonDocumentation extends Component {

  render() {
    return (<div>

      <h2 style={ {marginTop: 0, marginBottom: 40} }>Button</h2>

      <Button onClick={() => console.log("yolo")}>Click Here</Button>

      <Code value={ basicCodeExample } style={ {marginTop: 40} } />

      <h3>Properties</h3>

      <table><tbody>
        <tr>
          <td style={ propertyNameStyle }>
            primary
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p >
              <i>Boolean</i>
              <br />
              default: false</p>
            <p>If true the Button will be appear with the primary button styles</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            type
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>String</i> of 'button', 'submit', 'reset'
              <br />
              default: 'button'
            </p>
            <p>
              This button by is set to type 'button' by default. This different
              to the default behavior in HTML where a button would submit in case
              the 'type' attribute is not defined.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            disabled
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Boolean</i>
              <br />
              default: false</p>
            <p>If true the Button will be disabled and can't be pressed by a user.</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            hoverStyle
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              Works like React's built-in style property.
              Becomes active once the user hovers over the button with the cursor.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            focusStyle
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              Works like React's built-in style property except that it extends
              the properties from the base style.
              Becomes active once the button is the element focused in the DOM.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            activeStyle
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              Works like React's built-in style property except that it extends
              the properties from the base style.
              Becomes active once the button is pressed by a user, but yet not release.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            disabledStyle
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              Works like React's built-in style property except that it extends
              the properties from the base style.
              Becomes active once the button is disabled.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            disabledHoverStyle
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              Works like React's built-in style property except that it extends
              the properties from the base disabledStyle.
              Becomes active once the button is disabled and a user hovers over it.
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            preventFocusStyleForTouchAndClick
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Boolean</i>
              <br />
              optional (default: true)
            </p>
            <p>
              Prevents the focus style being applied in case the buttons becomes
              focused by a click or touch.<br />
              <b>Background:</b>
              Focus styles are helpful to identify which element is currently
              in focus when tabbing through the elements e.g. a user wants to
              switch to the next input element. Yet it feels somewhat distracting
              when clicking on the Button. That's why Belle by default prevents
              the focus style being applied in case the Button is focused on
              by a touch or click event.
            </p>
          </td>
        </tr>
      </tbody></table>

      <h3>More Examples</h3>

      <ul>
        <li>
          <h4>Disabled button</h4>
          <Button disabled>Follow</Button>
          <Code value={ disabledButtonCodeExample } style={ {marginTop: 20} } />
        </li>
        <li>
          <h4>Red button</h4>
          <Button style={{ background: "red" }}>This Button Is Red</Button>
          <Code value={ redButtonCodeExample } style={ {marginTop: 20} } />
        </li>
      </ul>

    </div>);
  }
}
