import React, {Component} from 'react';
import {Checkbox} from '@socialtables/st-ui-toolkit';
import Code from '../Code';
import {propertyNameStyle, propertyDescriptionStyle} from '../../style';

const basicCodeExample = `<Checkbox
  checked={this.state.isChecked}
  onChange={() => {
    this.setState({ isChecked: !this.state.isChecked })
  }} >
</Checkbox>`;
const disabledEmptyExample = `<Checkbox disabled></Checkbox>`;
const disabledCheckedExample = `<Checkbox checked disabled></Checkbox>`;
const radiumStylesCodeExample = `
<Checkbox
  checked
  style={{
    base: { width: 100, height: 100 },
    customCheckbox: {
      checked: { background: "green" }
    }
  }}>
</Checkbox>`;
const checkedExample = `<Checkbox checked></Checkbox>`;
const uncontrolledExample = `<Checkbox defaultChecked={true}></Checkbox>`;
const emptyExample = `<Checkbox></Checkbox>`;

export default class CheckboxComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false // isChecked status for checkbox one
    };
  };

  render() {
    return (
      <div>
        <h2 style={ {marginTop: 0, marginBottom: 40} }>Checkbox</h2>

        <Checkbox
          checked={this.state.isChecked}
          onClick={() => { this.setState({ isChecked: !this.state.isChecked }) }}>
        </Checkbox>

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
              <p>If true, the checkbox will appear disabled and click handlers will not work</p>
            </td>
          </tr>

          <tr>
            <td style={ propertyNameStyle }>
              checked
            </td>
          </tr>
          <tr>
            <td style={ propertyDescriptionStyle }>
              <p >
                <i>Boolean</i>
                <br />
                <b>default:</b> false
              </p>
              <p>If true, the checkbox will appear checked</p>
            </td>
          </tr>

          <tr>
            <td style={ propertyNameStyle }>
              onClick(SyntheticEvent e)
            </td>
          </tr>
          <tr>
            <td style={ propertyDescriptionStyle }>
              <p>
                <i>Function</i>
                <br />
                <b>default:</b> no-op function
              </p>
              <p>On-click event handler</p>
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
                <b>default:</b> See <b>/src/components/Checkbox/styles.js</b> file
              </p>
              <p>Radium-based inline-style</p>
            </td>
          </tr>

        </tbody></table>

        <p>Any other property valid for a HTML checkbox like <b>className</b>, …</p>


        <h3>More Examples</h3>

        <ul>
          <li>
            <h4>Disabled (empty) checkbox</h4>
            <Checkbox disabled></Checkbox>
            <Code value={ disabledEmptyExample } style={ {marginTop: 20} } />
          </li>
          <li>
            <h4>Disabled (checked) checkbox</h4>
            <Checkbox 
              checked
              disabled
              onChange={() => console.log("yolo")}>
            </Checkbox>
            <Code value={ disabledCheckedExample } />
          </li>
          <li>
            <h4>Checked</h4>
            <Checkbox checked></Checkbox>
            <Code value={ checkedExample } />
          </li>
          <li>
            <h4>Empty</h4>
            <Checkbox></Checkbox>
            <Code value={ emptyExample } />
          </li>
          <li>
            <h4>Uncontrolled Component</h4>
            <Checkbox defaultChecked={true}></Checkbox>
            <Code value={ uncontrolledExample } />
          </li>
          <li>
            <h4>Override default Radium styles</h4>
            <Checkbox
              checked
              style={{
                base: { width: 100, height: 100 },
                customCheckbox: {
                  checked: { background: "green" }
                }
              }}>
            </Checkbox>
            <Code value={ radiumStylesCodeExample } />
          </li>
        </ul>

      </div>
    );
  }
}
