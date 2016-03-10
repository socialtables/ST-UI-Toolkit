/* global jest describe beforeEach it expect */

jest.dontMock("../components/RadioButton/RadioButton");

import React from "react";
import TestUtils from "react-addons-test-utils";

// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const RadioButtonGroup = require("../components/RadioButton/RadioButtonGroup");
const RadioButton = require("../components/RadioButton/RadioButton");

describe("RadioButton", () => {
	it("should be able to set a default selected radio button", () => {
		const radioButtonGroup = TestUtils.renderIntoDocument(
			<RadioButtonGroup defaultSelected="first">
				<RadioButton value="first" label="First" className="firstRadioButton"/>
				<RadioButton value="second" label="Second" className="secondRadioButton"/>
				<RadioButton value="third" label="Third" className="thirdRadioButton"/>
			</RadioButtonGroup>
		);
		const firstRadioButtonNode = TestUtils.findRenderedDOMComponentWithClass(radioButtonGroup, "firstRadioButton");
		const secondRadioButtonNode = TestUtils.findRenderedDOMComponentWithClass(radioButtonGroup, "secondRadioButton");
		const thirdRadioButtonNode = TestUtils.findRenderedDOMComponentWithClass(radioButtonGroup, "thirdRadioButton");

		expect(firstRadioButtonNode.hasAttribute("selected")).toBe(true);
		expect(secondRadioButtonNode.hasAttribute("selected")).toBe(false);
		expect(thirdRadioButtonNode.hasAttribute("selected")).toBe(false);
	});

	it("should be able to provide a className", () => {
		const radioButtonGroup = TestUtils.renderIntoDocument(
			<RadioButtonGroup className="test">
				<RadioButton value="test" label="Test"/>
			</RadioButtonGroup>
		);
		const radioButtonGroupNode = TestUtils.findRenderedDOMComponentWithClass(radioButtonGroup, "test");

		expect(radioButtonGroupNode.className).toContain("test");
	});

	it("should be able to bind to onSelect", () => {
		let wasClicked = false;

		// Render a RadioButtonGroup with an onSelect handler
		const radioButtonGroup = TestUtils.renderIntoDocument(
			<RadioButtonGroup onSelect={ () => wasClicked = true}>
				<RadioButton value="test" label="Test"/>
			</RadioButtonGroup>
		);

		// Simulate a click
		TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(radioButtonGroup, "input"), {});

		expect(wasClicked).toBeTruthy();
	});

	it("should call onSelect with the event and value", () => {
		const handler = jest.genMockFunction();

		// Render a RadioButtonGroup with an onSelect handler
		const radioButtonGroup = TestUtils.renderIntoDocument(
			<RadioButtonGroup onSelect={ handler }>
				<RadioButton value="test1" label="Test2"/>
				<RadioButton value="test2" label="Test2" className="test2"/>
			</RadioButtonGroup>
		);

		// Simulate a click
		const el = TestUtils.scryRenderedDOMComponentsWithTag(radioButtonGroup, "input")[1]
		TestUtils.Simulate.click(el);
		const calledWith = handler.mock.calls[0]
		
		// make sure called with a synthetic event
		expect(calledWith[0].nativeEvent).toBeDefined()
		expect(calledWith[1]).toBe("test2");
	});

	it("should surpress onSelect listener if disabled", () => {
		let wasClicked = false;

		// Render a RadioButtonGroup with an onSelect handler
		const radioButtonGroup = TestUtils.renderIntoDocument(
			<RadioButtonGroup onSelect={ () => wasClicked = true}>
				<RadioButton disabled={true} value="test" label="Test"/>
			</RadioButtonGroup>
		);

		// Simulate a click
		TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithTag(radioButtonGroup, "input"), {});

		expect(wasClicked).toBeFalsy();
	});

	it("should be able to select on label click", () => {
		let wasClicked = false;

		// Render a RadioButtonGroup with an onSelect handler
		const radioButtonGroup = TestUtils.renderIntoDocument(
			<RadioButtonGroup onSelect={ () => wasClicked = true}>
				<RadioButton value="test" label="Test" className="radioButton"/>
			</RadioButtonGroup>
		);
		const labelDivNode = TestUtils.findRenderedDOMComponentWithClass(radioButtonGroup, "radioButton").children[0];

		// Simulate a click
		TestUtils.Simulate.click(labelDivNode);

		expect(wasClicked).toBeTruthy();
	});

});
