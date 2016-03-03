import React, {Component} from 'react';
import {RadioButton, RadioButtonGroup} from '@socialtables/st-ui-toolkit';
import Code from '../Code';
import {propertyNameStyle, propertyDescriptionStyle} from '../../style';

const basicCodeExample = `<RadioButtonGroup name="examples" defaultSelected="second">
  <RadioButton
    value="first"
    label="First Choice"/>
  <RadioButton
    value="second"
    label="Default Choice"/>
  <RadioButton
    value="third"
    label="Disabled Choice"
    disabled={true}/>
</RadioButtonGroup>`;
const rowCodeExample = `<RadioButtonGroup name="row-example" align="row">
  <RadioButton
    value="one"
    label="One"/>
  <RadioButton
    value="two"
    label="Two"/>
  <RadioButton
    value="three"
    label="Three"/>
</RadioButtonGroup>`;

export default class RadioButtonDocumentation extends Component {
	render() {
		return (<div>

      <h2 style={ {marginTop: 0, marginBottom: 40} }>Radio Button</h2>

      <RadioButtonGroup name="examples" defaultSelected="second">
        <RadioButton
          value="first"
          label="First Choice"/>
        <RadioButton
          value="second"
          label="Default Choice"/>
        <RadioButton
          value="third"
          label="Disabled Choice"
          disabled={true}/>
      </RadioButtonGroup>

      <Code value={ basicCodeExample } style={ {marginTop: 40, marginBottom: 40} } />

      <RadioButtonGroup name="row-example" align="row" >
        <RadioButton
          value="one"
          label="One"/>
        <RadioButton
          value="two"
          label="Two"/>
        <RadioButton
          value="three"
          label="Three"/>
      </RadioButtonGroup>

      <Code value={ rowCodeExample } style={ {marginTop: 40} } />

      <h3>RadioButtonGroup Properties</h3>

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
            <p>If true, the radio button will appear disabled and click handlers will not work</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            name
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p >
              <i>String</i>
            </p>
            <p>The name that will be applied to all radio buttons inside the RadioButtonGroup</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            defaultSelected
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>String</i>
            </p>
            <p>
              Sets the default radio button to be the one whose value matches defaultSelected (case-sensitive).
            </p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            align
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p>
              <i>String</i> of 'row', 'column'
              <br />
              <b>default:</b> 'column'
            </p>
            <p>
              This property is set to type 'column' by default. The radio button group will
              be aligned in a column or row depending on what value is passed.
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

      <h3>RadioButton Properties</h3>

      <table><tbody>
      <tr>
          <td style={ propertyNameStyle }>
            value
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p >
              <i>String</i>
            </p>
            <p>The value of the radio button component</p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            label
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p >
              <i>String</i>
            </p>
            <p>The label displayed for the radio button component</p>
          </td>
        </tr>

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
            <p>If true, the radio button will appear disabled and click handlers will not work</p>
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

    </div>);
	}
};
