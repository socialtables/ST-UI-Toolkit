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

      <Button onClick={() => console.log("yolo")}>CLICK HERE</Button>

      <Code value={ basicCodeExample } style={ {marginTop: 40} } />

      <h3>Properties</h3>

      <table><tbody>
        <tr>
          <td style={ propertyNameStyle }>
            disabled
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p >
              <i>Boolean</i>
              <br />
              default: <b>false</b>
            </p>
            <p>If true, the button will appear disabled and click handlers will not work</p>
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
              default: <b>'button'</b>
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
            style
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>Object</i>
              <br />
              default: See <b>/src/components/Button/styles.js</b> file
            </p>
            <p>Radium-based inline-style</p>
          </td>
        </tr>

      </tbody></table>

      <p>Any other property valid for a HTML button like <b>className</b>, <b>onClick</b>, …<p>


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
