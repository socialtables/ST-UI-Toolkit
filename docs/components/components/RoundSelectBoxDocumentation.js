import React, {Component} from 'react';
import {RoundSelectBox, RoundSelectBoxOption} from '@socialtables/st-ui-toolkit';
import Code from '../Code';
import {propertyNameStyle, propertyDescriptionStyle} from '../../style';

const basicCodeExample = `<RoundSelectBox
  value={this.state.selectedValue}
  defaultText="Select a Table Type..."
  onChange={(v) => { this.setState({selectedValue: v}) }}>
  <RoundSelectBoxOption value="round" displayLabel="Round">
  </RoundSelectBoxOption>
  <RoundSelectBoxOption value="rectangle" displayLabel="Rectangle">
  </RoundSelectBoxOption>
  <RoundSelectBoxOption value="square" displayLabel="Square">
  </RoundSelectBoxOption>
</RoundSelectBox>`;
const disabledCodeExample = `<RoundSelectBox disabled={true} value="round" defaultText="Select a Table Type">
  <RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
</RoundSelectBox>`;
const disabledOptionCodeExample = `<RoundSelectBox
  value={this.state.disabledSpecificSelectedValue}
  defaultText="Select a Table Type..."
  onChange={(v) => { this.setState({disabledSpecificSelectedValue: v}) }}>
  <RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
  <RoundSelectBoxOption disabled value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
</RoundSelectBox>`;
const sizeOptionCodeExample = `<RoundSelectBox
  value={this.state.sizeSelectedValue}
  size={6}
  defaultText="Select a Table Type"
  onChange={(v) => { this.setState({sizeSelectedValue: v}) }}>
  <RoundSelectBoxOption value="3-round" displayLabel="3' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="3.5-round" displayLabel="3.5' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="4-round" displayLabel="4' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="4.5-round" displayLabel="4.5' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="5-round" displayLabel="5' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="5.5-round" displayLabel="5.5' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="6-round" displayLabel="6' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="6.5-round" displayLabel="6.5' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="7-round" displayLabel="7' Round Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="2-square" displayLabel="2' Square Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="3-square" displayLabel="3' Square Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="4-square" displayLabel="4' Square Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="5-square" displayLabel="5' Square Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="5.5-square" displayLabel="5.5' Square Table"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="6-square" displayLabel="6' Square Table"></RoundSelectBoxOption>
</RoundSelectBox>`;
const radiumStylesCodeExample = `<RoundSelectBox
  value={this.state.overrideRadiumValue}
  style={{base: { width: 150 }}}
  defaultText="Select a Letter..."
  onChange={(v) => { this.setState({overrideRadiumValue: v}) }}>
    <RoundSelectBoxOption value="A" displayLabel="A"></RoundSelectBoxOption>
    <RoundSelectBoxOption value="B" displayLabel="B"></RoundSelectBoxOption>
    <RoundSelectBoxOption value="C" displayLabel="C"></RoundSelectBoxOption>
</RoundSelectBox>`;
const overrideStylesExample = `<RoundSelectBox
  value={this.state.overrideOptionValue}
  style={{
    selectBox: {
      background: "#494949",
      color: "white",
      arrowIcon: {fill: "white"},
      selectedOption: {color: "white"}
    },
    optionList: {
      background: "#494949",
      color: "white"
    },
    option: {
      enabled: {":hover": {background: "#cb5599"}}
    }
  }}
  defaultText="Select a Color"
  onChange={(v) => { this.setState({overrideOptionValue: v}) }}>
  <RoundSelectBoxOption value="Red" displayLabel="Red"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="Blue" displayLabel="Blue"></RoundSelectBoxOption>
  <RoundSelectBoxOption value="Yellow" displayLabel="Yellow"></RoundSelectBoxOption>
</RoundSelectBox>`;

export default class RoundSelectBoxDocumentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
      disabledSpecificSelectedValue: "square",
      sizeSelectedValue: "3-round",
      overrideRadiumValue: null
    };
  }


  render() {
    return (<div>

      <h2 style={ {marginTop: 0, marginBottom: 40} }>RoundSelectBox</h2>

      <RoundSelectBox defaultText="Select a Table Type..." value={this.state.selectedValue} onChange={(v) => { console.log(v); this.setState({selectedValue: v}) }}>
        <RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
        <RoundSelectBoxOption value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
        <RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
      </RoundSelectBox>

      <Code value={ basicCodeExample } style={ {marginTop: 40} } />

      <h3>Properties</h3>

      <h4>RoundSelectBox</h4>
      <table><tbody>
        <tr>
          <td style={ propertyNameStyle }>
            value
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <i>Any Value</i>
            <br />
            <b>default:</b> undefined
            <br />
            <p>The value of the selected option</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            defaultText
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <i>String</i>
            <br />
            <b>default:</b> "Please Select Option...",
            <br />
            <p>Text to display when an option is not selected</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            onChange
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <i>Function(selectedOptionValue)</i>,
            <br />
            <b>default:</b> no-op function
            <p>Callback function that is fired when an option is selected</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            disabled
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <i>Boolean</i>
            <br />
            <b>default:</b> false
            <p>If true, the select box will be disabled, and clicking on it will not do anything</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            size
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <i>Number</i>
            <br />
            <b>default:</b> null
            <p>The max number of rows to display in the options list</p>
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
              <b>default:</b> See <b>/src/components/RoundSelectBox/styles.js</b> file
            </p>
            <p>Radium-based inline-style</p>
          </td>
        </tr>

      </tbody></table>

      <h4>RoundSelectBoxOption</h4>
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
            <p>If true, the option will appear disabled and clicking on it will not do anything</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            value
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p >
              <i>Any</i>
              <br />
              <b>default:</b> undefined
            </p>
            <p>the value of the option</p>
          </td>
        </tr>

        <tr>
          <td style={ propertyNameStyle }>
            displayLabel
          </td>
        </tr>
        <tr>
          <td style={ propertyDescriptionStyle }>
            <p >
              <i>Any</i>
              <br />
              <b>default:</b> undefined
            </p>
            <p>If this option is specified, it is displayed when the option is selected. If this is not specified, the <b>value</b> will be displayed instead.</p>
          </td>
        </tr>

      </tbody></table>

      <h3>More Examples</h3>

      <ul>
        <li>
          <h4>Disabled input</h4>
          <RoundSelectBox disabled={true} value="round" defaultText="Select a Table Type...">
            <RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
          </RoundSelectBox>
          <Code value={ disabledCodeExample } style={ {marginTop: 20} } />
        </li>
        <li>
          <h4>Disable specific options</h4>
          <RoundSelectBox
            value={this.state.disabledSpecificSelectedValue}
            defaultText="Select a Table Type..."
            onChange={(v) => { this.setState({disabledSpecificSelectedValue: v}) }}>
            <RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
            <RoundSelectBoxOption disabled value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
          </RoundSelectBox>
          <Code value={ disabledOptionCodeExample } style={ {marginTop: 20} } />
        </li>
        <li>
          <h4><i>size</i> property specified</h4>
          <RoundSelectBox
            value={this.state.sizeSelectedValue}
            size={6}
            defaultText="Select a Table Type"
            onChange={(v) => { this.setState({sizeSelectedValue: v}) }}>
            <RoundSelectBoxOption value="3-round" displayLabel="3' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="3.5-round" displayLabel="3.5' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="4-round" displayLabel="4' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="4.5-round" displayLabel="4.5' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="5-round" displayLabel="5' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="5.5-round" displayLabel="5.5' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="6-round" displayLabel="6' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="6.5-round" displayLabel="6.5' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="7-round" displayLabel="7' Round Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="2-square" displayLabel="2' Square Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="3-square" displayLabel="3' Square Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="4-square" displayLabel="4' Square Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="5-square" displayLabel="5' Square Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="5.5-square" displayLabel="5.5' Square Table"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="6-square" displayLabel="6' Square Table"></RoundSelectBoxOption>
          </RoundSelectBox>
          <Code value={ sizeOptionCodeExample } style={ {marginTop: 20} } />
        </li>
        <li>
          <h4>Override Radium Styles</h4>
          <RoundSelectBox
            value={this.state.overrideRadiumValue}
            style={{base: { width: 150 }}}
            defaultText="Select a Letter..."
            onChange={(v) => { this.setState({overrideRadiumValue: v}) }}>
            <RoundSelectBoxOption value="A" displayLabel="A"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="B" displayLabel="B"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="C" displayLabel="C"></RoundSelectBoxOption>
          </RoundSelectBox>
          <Code value={ radiumStylesCodeExample } style={ {marginTop: 20} } />
        </li>
        <li>
          <h4>Override Option Styles</h4>
          <RoundSelectBox
            value={this.state.overrideOptionValue}
            style={{selectBox: {background: "#494949", color: "white", arrowIcon: {fill: "white"}, selectedOption: {color: "white"}}, optionList: {background: "#494949", color: "white"}, option: {enabled: {":hover": {background: "#cb5599"}}}}}
            defaultText="Select a Color"
            onChange={(v) => { this.setState({overrideOptionValue: v}) }}>
            <RoundSelectBoxOption value="Red" displayLabel="Red"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="Blue" displayLabel="Blue"></RoundSelectBoxOption>
            <RoundSelectBoxOption value="Yellow" displayLabel="Yellow"></RoundSelectBoxOption>
          </RoundSelectBox>
          <Code value={ overrideStylesExample } style={ {marginTop: 20} } />
        </li>
      </ul>

    </div>);
  }
}
