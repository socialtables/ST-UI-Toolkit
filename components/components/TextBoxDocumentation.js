import React, {Component} from 'react';
import {TextBox} from '@socialtables/st-ui-toolkit';
import Code from '../Code';
import {propertyNameStyle, propertyDescriptionStyle} from '../../style';

const basicCodeExample = `<TextBox placeholder="Placeholder Text"></TextBox>`;
const disabledTextBoxCodeExample = `<TextBox disabled placeholder="Placeholder Text"></TextBox>`;
const radiumStylesCodeExample = `<TextBox style={{ base: {background: "orange", color: "black", borderColor: "black"} }}></TextBox>`;

export default class TextBoxDocumentation extends Component {

  render() {
    return (<div>

      <h2 style={ {marginTop: 0, marginBottom: 40} }>TextBox</h2>

      <TextBox placeholder="Placeholder Text"></TextBox>

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
            <ul>
              <li>
                <i>String</i>,
              </li>
              <li>
                <b>default:</b> "text",
              </li>
              <li>
                <b>Potential Values:</b>
                <ul>
                  <li>"datetime"</li>
                  <li>"email"</li>
                  <li>"hidden"</li>
                  <li>"month"</li>
                  <li>"number"</li>
                  <li>"password"</li>
                  <li>"reset"</li>
                  <li>"search"</li>
                  <li>"submit"</li>
                  <li>"tel"</li>
                  <li>"text"</li>
                  <li>"time"</li>
                  <li>"url"</li>
                  <li>"week"</li>
                </ul>
              </li>
            </ul>
            <p>If an invalid type is passed in, React will throw a warning</p>
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
              <b>default:</b> See <b>/src/components/TextBox/styles.js</b> file
            </p>
            <p>Radium-based inline-style</p>
          </td>
        </tr>

      </tbody></table>

      <p>Any other property valid for a HTML input like <b>className</b>, …</p>


      <h3>More Examples</h3>

      <ul>
        <li>
          <h4>Disabled input</h4>
          <TextBox disabled placeholder="Placeholder Text"></TextBox>
          <Code value={ disabledTextBoxCodeExample } style={ {marginTop: 20} } />
        </li>
        <li>
          <h4>Override default Radium styles</h4>
          <TextBox style={{ base: {background: "orange", color: "black", borderColor: "black"} }}></TextBox>
          <Code value={ radiumStylesCodeExample } />
        </li>
      </ul>

    </div>);
  }
}
