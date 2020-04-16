import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { SelectBox, SelectBoxOption } from "../src/index";
import Code from "./lib/Code";
import { propertyNameStyle, propertyDescriptionStyle, storyStyle } from "./style";
import "./css/normalize.css";
import "./css/style.css";

const basicCodeExample = `<SelectBox
  value={this.state.selectedValue}
  defaultText="Select a Table Type..."
  onChange={(v) => { this.setState({selectedValue: v}) }}>
  <SelectBoxOption value="round" displayLabel="Round">
  </SelectBoxOption>
  <SelectBoxOption value="rectangle" displayLabel="Rectangle">
  </SelectBoxOption>
  <SelectBoxOption value="square" displayLabel="Square">
  </SelectBoxOption>
</SelectBox>`;
const disabledCodeExample = `<SelectBox disabled={true} value="round" defaultText="Select a Table Type">
  <SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
  <SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
  <SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
</SelectBox>`;
const disabledOptionCodeExample = `<SelectBox
  value={this.state.disabledSpecificSelectedValue}
  defaultText="Select a Table Type..."
  onChange={(v) => { this.setState({disabledSpecificSelectedValue: v}) }}>
  <SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
  <SelectBoxOption disabled value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
  <SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
</SelectBox>`;
const sizeOptionCodeExample = `<SelectBox
  value={this.state.sizeSelectedValue}
  size={6}
  defaultText="Select a Table Type"
  onChange={(v) => { this.setState({sizeSelectedValue: v}) }}>
  <SelectBoxOption value="3-round" displayLabel="3' Round Table"></SelectBoxOption>
  <SelectBoxOption value="3.5-round" displayLabel="3.5' Round Table"></SelectBoxOption>
  <SelectBoxOption value="4-round" displayLabel="4' Round Table"></SelectBoxOption>
  <SelectBoxOption value="4.5-round" displayLabel="4.5' Round Table"></SelectBoxOption>
  <SelectBoxOption value="5-round" displayLabel="5' Round Table"></SelectBoxOption>
  <SelectBoxOption value="5.5-round" displayLabel="5.5' Round Table"></SelectBoxOption>
  <SelectBoxOption value="6-round" displayLabel="6' Round Table"></SelectBoxOption>
  <SelectBoxOption value="6.5-round" displayLabel="6.5' Round Table"></SelectBoxOption>
  <SelectBoxOption value="7-round" displayLabel="7' Round Table"></SelectBoxOption>
  <SelectBoxOption value="2-square" displayLabel="2' Square Table"></SelectBoxOption>
  <SelectBoxOption value="3-square" displayLabel="3' Square Table"></SelectBoxOption>
  <SelectBoxOption value="4-square" displayLabel="4' Square Table"></SelectBoxOption>
  <SelectBoxOption value="5-square" displayLabel="5' Square Table"></SelectBoxOption>
  <SelectBoxOption value="5.5-square" displayLabel="5.5' Square Table"></SelectBoxOption>
  <SelectBoxOption value="6-square" displayLabel="6' Square Table"></SelectBoxOption>
</SelectBox>`;
const transitionDurationCodeExample = `<SelectBox
  value={this.state.transitionDurationSelectedValue}
  transitionDuration={0.8}
  defaultText="Select a Table Type..."
  onChange={(v) => { this.setState({transitionDurationSelectedValue: v}) }}>
  <SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
  <SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
  <SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
</SelectBox>`;
const radiumStylesCodeExample = `<SelectBox
  value={this.state.overrideRadiumValue}
  style={{base: { width: 150 }}}
  defaultText="Select a Letter..."
  onChange={(v) => { this.setState({overrideRadiumValue: v}) }}>
	<SelectBoxOption value="A" displayLabel="A"></SelectBoxOption>
	<SelectBoxOption value="B" displayLabel="B"></SelectBoxOption>
	<SelectBoxOption value="C" displayLabel="C"></SelectBoxOption>
</SelectBox>`;
const overrideStylesExample = `<SelectBox
  value={this.state.overrideOptionValue}
  style={{
	selectBox: {
	  backgroundColor: "#494949",
	  color: "white",
	  arrowIcon: {fill: "white"},
	  selectedOption: {color: "white"}
	},
	optionList: {
	  backgroundColor: "#494949",
	  color: "white"
	},
	option: {
	  enabled: {":hover": {background: "#cb5599"}}
	}
  }}
  defaultText="Select a Color"
  onChange={(v) => { this.setState({overrideOptionValue: v}) }}>
  <SelectBoxOption value="Red" displayLabel="Red"></SelectBoxOption>
  <SelectBoxOption value="Blue" displayLabel="Blue"></SelectBoxOption>
  <SelectBoxOption value="Yellow" displayLabel="Yellow"></SelectBoxOption>
</SelectBox>`;

export default {
	title: "SelectBox",
	component: SelectBox
};

export const SelectBoxStory = () => {
	const [selectedValue, setSelectedValue] = useState();
	const [disabledSpecificSelectedValue, setDisabledSpecificSelectedValue] = useState();
	const [sizeSelectedValue, setSizeSelectedValue] = useState();
	const [transitionDurationSelectedValue, setTransitionDurationSelectedValue] = useState();
	const [overrideRadiumValue, setOverrideRadiumValue] = useState();
	const [overrideOptionValue, setOverrideOptionValue] = useState();
	return (<div style={storyStyle}>
				<h2 style={ {marginTop: 0, marginBottom: 40} }>SelectBox</h2>

				<SelectBox defaultText="Select a Table Type..." value={selectedValue} onChange={(v) => { console.log(v); setSelectedValue(v) }}>
					<SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
					<SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
					<SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
				</SelectBox>

				<Code value={ basicCodeExample } style={ {marginTop: 40} } />

				<h3>Properties</h3>

				<h4>SelectBox</h4>
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
					transitionDuration
					</td>
				</tr>
				<tr>
					<td style={ propertyDescriptionStyle }>
					<i>Number</i>
					<br />
					<b>default:</b> null
					<p>The duration of the dropdown transition in seconds</p>
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
						<b>default:</b> See <b>/src/components/SelectBox/styles.js</b> file
					</p>
					<p>Radium-based inline-style</p>
					</td>
				</tr>

				</tbody></table>

				<h4>SelectBoxOption</h4>
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
						<SelectBox disabled={true} value="round" defaultText="Select a Table Type...">
						<SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
						<SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
						<SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
						</SelectBox>
						<Code value={ disabledCodeExample } style={ {marginTop: 20} } />
					</li>
					<li>
						<h4>Disable specific options</h4>
						<SelectBox
						value={disabledSpecificSelectedValue}
						defaultText="Select a Table Type..."
						onChange={(v) => { setDisabledSpecificSelectedValue(v) }}>
						<SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
						<SelectBoxOption disabled value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
						<SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
						</SelectBox>
						<Code value={ disabledOptionCodeExample } style={ {marginTop: 20} } />
					</li>
					<li>
						<h4><i>size</i> property specified</h4>
						<SelectBox
						value={sizeSelectedValue}
						size={6}
						defaultText="Select a Table Type"
						onChange={(v) => { setSizeSelectedValue(v) }}>
						<SelectBoxOption value="3-round" displayLabel="3' Round Table"></SelectBoxOption>
						<SelectBoxOption value="3.5-round" displayLabel="3.5' Round Table"></SelectBoxOption>
						<SelectBoxOption value="4-round" displayLabel="4' Round Table"></SelectBoxOption>
						<SelectBoxOption value="4.5-round" displayLabel="4.5' Round Table"></SelectBoxOption>
						<SelectBoxOption value="5-round" displayLabel="5' Round Table"></SelectBoxOption>
						<SelectBoxOption value="5.5-round" displayLabel="5.5' Round Table"></SelectBoxOption>
						<SelectBoxOption value="6-round" displayLabel="6' Round Table"></SelectBoxOption>
						<SelectBoxOption value="6.5-round" displayLabel="6.5' Round Table"></SelectBoxOption>
						<SelectBoxOption value="7-round" displayLabel="7' Round Table"></SelectBoxOption>
						<SelectBoxOption value="2-square" displayLabel="2' Square Table"></SelectBoxOption>
						<SelectBoxOption value="3-square" displayLabel="3' Square Table"></SelectBoxOption>
						<SelectBoxOption value="4-square" displayLabel="4' Square Table"></SelectBoxOption>
						<SelectBoxOption value="5-square" displayLabel="5' Square Table"></SelectBoxOption>
						<SelectBoxOption value="5.5-square" displayLabel="5.5' Square Table"></SelectBoxOption>
						<SelectBoxOption value="6-square" displayLabel="6' Square Table"></SelectBoxOption>
						</SelectBox>
						<Code value={ sizeOptionCodeExample } style={ {marginTop: 20} } />
					</li>
					<li>
						<h4><i>transitionDuration</i> property specified</h4>
						<SelectBox
						value={transitionDurationSelectedValue}
						transitionDuration={0.8}
						defaultText="Select a Table Type..."
						onChange={(v) => { setTransitionDurationSelectedValue(v); }}>
						<SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
						<SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
						<SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
						</SelectBox>
						<Code value={ transitionDurationCodeExample } style={ {marginTop: 20} } />
					</li>
					<li>
						<h4>Override Radium Styles</h4>
						<SelectBox
						value={overrideRadiumValue}
						style={{base: { width: 150 }}}
						defaultText="Select a Letter..."
						onChange={(v) => { setOverrideRadiumValue(v); }}>
						<SelectBoxOption value="A" displayLabel="A"></SelectBoxOption>
						<SelectBoxOption value="B" displayLabel="B"></SelectBoxOption>
						<SelectBoxOption value="C" displayLabel="C"></SelectBoxOption>
						</SelectBox>
						<Code value={ radiumStylesCodeExample } style={ {marginTop: 20} } />
					</li>
					<li>
						<h4>Override Option Styles</h4>
						<SelectBox
						value={overrideOptionValue}
						style={{selectBox: {backgroundColor: "#494949", color: "white", arrowIcon: {fill: "white"}, selectedOption: {color: "white"}}, optionList: {backgroundColor: "#494949", color: "white"}, option: {enabled: {":hover": {backgroundColor: "#cb5599"}}}}}
						defaultText="Select a Color"
						onChange={(v) => { setOverrideOptionValue(v); }}>
						<SelectBoxOption value="Red" displayLabel="Red"></SelectBoxOption>
						<SelectBoxOption value="Blue" displayLabel="Blue"></SelectBoxOption>
						<SelectBoxOption value="Yellow" displayLabel="Yellow"></SelectBoxOption>
						</SelectBox>
						<Code value={ overrideStylesExample } style={ {marginTop: 20} } />
					</li>
				</ul>
	</div>);
};

SelectBox.story = {
	name: "SelectBox"
};