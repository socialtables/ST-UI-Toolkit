import React, {Component} from "react";
import {Tab, Tabs, Checkbox} from "@socialtables/st-ui-toolkit";
import Code from "../Code";
import {propertyNameStyle, propertyDescriptionStyle} from '../../style';

const basicCodeExample = `<Tabs label="Example Tabs With Label">
  <Tab label="Tab 1">
    <p>This is example tab content. Update the checkbox and watch how I keep my state!</p>
    <Checkbox defaultChecked={true}></Checkbox>
  </Tab>
  <Tab label="Second Tab">
    <p>This is the second example tab and has a longer name than the others.</p>
  </Tab>
  <Tab label="Tab 3">
    <p>This is the third example tab. Only Tab Components can be passed as children to Tabs.</p>
  </Tab>
</Tabs>`;

const inlineLabelExample = `<Tabs label="Example Tabs With Inline Label" inlineLabel>
  <Tab label="Tab 1">
    <p>Tab 1!</p>
  </Tab>
  <Tab label="Tab 2">
    <p>Tab 2!</p>
  </Tab>
  <Tab label="Tab 3">
    <p>Tab 3!</p>
  </Tab>
</Tabs>`;

const noLabelExample = `<Tabs>
  <Tab label="TAB A">
    <p>This example doesn't have a label.</p>
  </Tab>
  <Tab label="TAB B">
    <p>More info...</p>
  </Tab>
</Tabs>`;

const radiumTabsStylesCodeExample = `<Tabs style={{
	tabContainer: {
		background: "black"
	},
	tabBar: {
		background: "black",
		paddingLeft: 120
	}
}}>
  <Tab label="First Tab">
    First Tab
  </Tab>
  <Tab label="Second Tab">
    Second Tab
  </Tab>
</Tabs>`;

const radiumTabStylesCodeExample = `<Tabs>
  <Tab label="First Tab"
    style={{
      base: {
        color: "black"
      },
      active: {
        ":hover": {
          backgroundColor: "black",
          color: "#cb5599"
        }
      },
      selected: {
        border: "2px solid #cb5599"
      }
    }}>
    First Tab
  </Tab>
  <Tab label="Second Tab"
    style={{
      base: {
        color: "black"
      },
      active: {
        ":hover": {
          backgroundColor: "black",
          color: "#cb5599"
        }
      },
      selected: {
        border: "2px solid #cb5599"
      }
    }}>
    Second Tab
  </Tab>
</Tabs>`;

export default class TabsDocumentation extends Component {
	render() {
		return (
		<div>

			<h2 style={ {marginTop: 0, marginBottom: 40} }>Tabs</h2>

			<Tabs label="Example Tabs With Label">
				<Tab label="Tab 1">
					<p>This is example tab content. Update the checkbox and watch how I keep my state!</p>
					<Checkbox defaultChecked={true}></Checkbox>
				</Tab>
				<Tab label="Second Tab">
					<p>This is the second example tab and has a longer name than the others.</p>
				</Tab>
				<Tab label="Tab 3">
					<p>This is the third example tab. Only Tab Components can be passed as children to Tabs.</p>
				</Tab>
			</Tabs>

			<Code value={ basicCodeExample } style={ {marginTop: 40} } />

			<Tabs label="Example Tabs With Inline Label" inlineLabel>
				<Tab label="Tab 1">
					<p>Tab 1!</p>
				</Tab>
				<Tab label="Tab 2">
					<p>Tab 2!</p>
				</Tab>
				<Tab label="Tab 3">
					<p>Tab 3!</p>
				</Tab>
			</Tabs>

			<Code value={ inlineLabelExample } style={ {marginTop: 40} } />

			<Tabs>
				<Tab label="TAB A">
					<p>This example doesn't have a label.</p>
				</Tab>
				<Tab label="TAB B">
					<p>More info...</p>
				</Tab>
			</Tabs>

			<Code value={ noLabelExample } style={ {marginTop: 40} } />

			<h3>Properties</h3>

			<table><tbody>
			<tr>
				<td style={ propertyNameStyle }>
				initialSelectedIndex
				</td>
			</tr>
			<tr>
				<td style={ propertyDescriptionStyle }>
				<p>
					<i>Number</i>
					<br />
					<b>default:</b> 0
				</p>
				<p>Specify initial visible tab index. Initial selected index is set by default to 0.
				If initialSelectedIndex is set but larger than the total amount of specified tabs,
				initialSelectedIndex will revert back to default.</p>
				</td>
			</tr>

			<tr>
				<td style={ propertyNameStyle }>
				onChange(int newTabIndex newTabIndex)
				</td>
			</tr>
			<tr>
				<td style={ propertyDescriptionStyle }>
				<p >
					<i>onChange(number newTabIndex)</i>
					<br />
					<b>default:</b> no-op function
				</p>
				<p>Callback function that is triggered when a new tab is selected. The function is invoked with
				the index of the newly-selected tab.</p>
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
					<br />
					<b>default:</b> null
				</p>
				<p>If set, a label will appear for the set of tabs.</p>
				</td>
			</tr>

			<tr>
				<td style={ propertyNameStyle }>
				inlineLabel
				</td>
			</tr>
			<tr>
				<td style={ propertyDescriptionStyle }>
				<p >
					<i>Boolean</i>
					<br />
					<b>default:</b> false
				</p>
				<p>If true, the label will appear to the left of the tabs rather than above.</p>
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
					<b>default:</b> See <b>/src/components/Tabs/styles.js</b> file
				</p>
				<p>Radium-based inline-style</p>
				</td>
			</tr>

			</tbody></table>

			<h3>More Examples</h3>

      <ul>
        <li>
          <h4>Override Tabs Component Radium Styles</h4>
          <Tabs style={{
						tabContainer: {
							background: "black"
						},
						tabBar: {
							background: "black",
							paddingLeft: 120
						}
					}}>
					  <Tab label="First Tab">
					    First Tab
					  </Tab>
					  <Tab label="Second Tab">
					    Second Tab
					  </Tab>
					</Tabs>
          <Code value={ radiumTabsStylesCodeExample } style={ {marginTop: 20} } />
        </li>
				<li>
					<h4>Override Tab Component Radium Styles</h4>
					<Tabs>
						<Tab label="First Tab"
							style={{
								base: {
									color: "black"
								},
								active: {
									":hover": {
										backgroundColor: "black",
										color: "#cb5599"
									}
								},
								selected: {
									border: "2px solid #cb5599"
								}
							}}>
							First Tab
						</Tab>
						<Tab label="Second Tab" style={{
								base: {
									color: "black"
								},
								active: {
									":hover": {
										backgroundColor: "black",
										color: "#cb5599"
									}
								},
								selected: {
									border: "2px solid #cb5599"
								}
							}}>
							Second Tab
						</Tab>
					</Tabs>
					<Code value={ radiumTabStylesCodeExample } style={ {marginTop: 20} } />
				</li>
      </ul>

		</div>)
	}
};