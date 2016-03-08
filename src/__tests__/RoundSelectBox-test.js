/* global jest describe beforeEach it expect */

jest.dontMock("../components/RoundSelectBox/RoundSelectBox");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import sinon from "sinon";


// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const RoundSelectBox = require("../components/RoundSelectBox/RoundSelectBox");
const RoundSelectBoxOption = require("../components/RoundSelectBox/RoundSelectBoxOption");

describe("RoundSelectBox", () => {

	it("should be able to provide a className", () => {
		const roundSelectBox = TestUtils.renderIntoDocument(
			<RoundSelectBox className="test-me">
				<RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
			</RoundSelectBox>
		);

		let roundTextBoxNode = TestUtils.findRenderedDOMComponentWithClass(roundSelectBox, "test-me");
		expect(roundTextBoxNode).toBeDefined();
	});

	it("should be disabled if prop 'disabled' is specified", () => {
		const roundSelectBox = TestUtils.renderIntoDocument(
			<RoundSelectBox disabled value="round">
				<RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
			</RoundSelectBox>
		);

		let roundSelectBoxNode = TestUtils.findRenderedDOMComponentWithTag(roundSelectBox, "select");
		roundSelectBoxNode = ReactDOM.findDOMNode(roundSelectBoxNode);

		expect(roundSelectBoxNode.attributes.disabled).toBeDefined();
	});

	it("displays `defaultText` when no option is selected", function() {
		const defaultText = "My Default Text";

		const roundSelectBox = TestUtils.renderIntoDocument(
			<RoundSelectBox defaultText={defaultText} value={null}>
				<RoundSelectBoxOption value="round" displayLabel="Round"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="rectangle" displayLabel="Rectangle"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="square" displayLabel="Square"></RoundSelectBoxOption>
			</RoundSelectBox>
		);

		let roundSelectBoxSelectedOptionText = TestUtils.findRenderedDOMComponentWithClass(roundSelectBox, "st-ui-toolkit-roundselectbox-selected-option-text");
		roundSelectBoxSelectedOptionText = ReactDOM.findDOMNode(roundSelectBoxSelectedOptionText);

		expect(roundSelectBoxSelectedOptionText.textContent).toEqual(defaultText);
	});

	it("triggers `onChange()` method when unselected option is clicked on", function() {
		let newOptionValue;

		const roundSelectBox = TestUtils.renderIntoDocument(
			<RoundSelectBox value="round" onChange={(v) => newOptionValue = v}>
				<RoundSelectBoxOption value="round"></RoundSelectBoxOption>
  			<RoundSelectBoxOption className="rectangle-option" value="rectangle"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="square"></RoundSelectBoxOption>
			</RoundSelectBox>
		);

		// Open menu by simulating click
		const roundSelectBoxNode = TestUtils.findRenderedDOMComponentWithTag(roundSelectBox, "select");
		TestUtils.Simulate.focus(roundSelectBoxNode);

		// Select option by simulating click
		const optionNode = TestUtils.findRenderedDOMComponentWithClass(roundSelectBox, "rectangle-option");
		TestUtils.Simulate.mouseDown(optionNode);

		// Assert
		expect(newOptionValue).toEqual("rectangle");
	});

	it("does not trigger `onChange()` method when disabled option is clicked on", function() {
		let newOptionValue = null;

		const roundSelectBox = TestUtils.renderIntoDocument(
			<RoundSelectBox value="round" onChange={(v) => newOptionValue = v}>
				<RoundSelectBoxOption value="round"></RoundSelectBoxOption>
  			<RoundSelectBoxOption disabled className="rectangle-option" value="rectangle"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="square"></RoundSelectBoxOption>
			</RoundSelectBox>
		);

		// Open menu by simulating click
		const roundSelectBoxNode = TestUtils.findRenderedDOMComponentWithTag(roundSelectBox, "select");
		TestUtils.Simulate.focus(roundSelectBoxNode);

		// Select option by simulating click
		const optionNode = TestUtils.findRenderedDOMComponentWithClass(roundSelectBox, "rectangle-option");
		TestUtils.Simulate.mouseDown(optionNode);

		// Assert
		expect(newOptionValue).toBeNull();
	});

	it("does not trigger `onChange()` method when currently selected option is clicked on", function() {
		let newOptionValue = null;

		const roundSelectBox = TestUtils.renderIntoDocument(
			<RoundSelectBox value="rectangle" onChange={(v) => newOptionValue = v}>
				<RoundSelectBoxOption value="round"></RoundSelectBoxOption>
  			<RoundSelectBoxOption className="rectangle-option" value="rectangle"></RoundSelectBoxOption>
  			<RoundSelectBoxOption value="square"></RoundSelectBoxOption>
			</RoundSelectBox>
		);

		// Open menu by simulating click
		const roundSelectBoxNode = TestUtils.findRenderedDOMComponentWithTag(roundSelectBox, "select");
		TestUtils.Simulate.focus(roundSelectBoxNode);

		// Select option by simulating click
		const optionNode = TestUtils.findRenderedDOMComponentWithClass(roundSelectBox, "rectangle-option");
		TestUtils.Simulate.mouseDown(optionNode);

		// Assert
		expect(newOptionValue).toBeNull();
	});
});
