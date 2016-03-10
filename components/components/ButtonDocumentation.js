import React, {Component} from 'react';
import {Button} from '@socialtables/st-ui-toolkit';
import Code from '../Code';
import {propertyNameStyle, propertyDescriptionStyle} from '../../style';

const basicCodeExample = `<Button onClick={() => console.log("yolo")}>Click Here</Button>`;
const disabledButtonCodeExample = `<Button disabled>Follow</Button>`;
const darkButtonCodeExample = `<Button color="dark">Dark Button</Button>`;
const roundButtonCodeExample = `<Button shape="round" style={{base: { width: 30, height: 30}}}>+</Button>`;
const radiumStylesCodeExample = `<Button style={{ base: { background: "orange", border: "solid black 2px" } }}>Yolo</Button>`;

export default class ButtonDocumentation extends Component {

  render() {
    return (<div>

      <h2 style={ {marginTop: 0, marginBottom: 40} }>Button</h2>

      <Button onClick={() => console.log("yolo")}>CLICK HERE</Button>

      <br/>
      <br/>

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
              <b>default:</b> false
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
              <b>default:</b> 'button'
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
            color
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>String</i> of 'light', 'dark', 'success', 'fail'
              <br />
              <b>default:</b>'light'
            </p>
            <p>String used to set primary color of button</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            shape
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>String</i> of 'round', 'square'
              <br />
              <b>default:</b> 'square'
            </p>
            <p>
              If the shape is specified as 'round', a borderRadius is applied to the button to give it a rounded appearance.
              If the shape is specified as 'square', a borderRadius of 0 is applied, which gives the button a square appearance.
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
              <b>default:</b> See <b>/src/components/Button/styles.js</b> file
            </p>
            <p>Radium-based inline-style</p>
          </td>
        </tr>

      </tbody></table>

      <p>Any other property valid for a HTML button like <b>className</b>, <b>onClick</b>, …</p>


      <h3>More Examples</h3>

      <ul>
        <li>
          <h4>Disabled button</h4>
          <Button disabled>Follow</Button>
          <Code value={ disabledButtonCodeExample } style={ {marginTop: 20} } />
        </li>
        <li>
          <h4>Dark button</h4>
          <Button color="dark">Dark</Button>
          <Code value={ darkButtonCodeExample } />
        </li>
        <li>
          <h4>Rounded button</h4>
          <Button shape="round" style={{base: { width: 30, height: 30}}}>+</Button>
          <Code value={ roundButtonCodeExample } />
        </li>
        <li>
          <h4>Override default Radium styles</h4>
          <Button style={{ base: { background: "orange", border: "solid black 2px" } }}>Yolo</Button>
          <Code value={ radiumStylesCodeExample } />
        </li>
      </ul>

    </div>);
  }
}
