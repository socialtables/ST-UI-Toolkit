/* global jest describe beforeEach it expect */

jest.dontMock("../components/RoundTextBox/RoundTextBox");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import sinon from "sinon";


// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const RoundTextBox = require("../components/RoundTextBox/RoundTextBox");

describe("RoundTextBox", () => {

	it("should be able to provide a className", () => {
		const roundTextBox = TestUtils.renderIntoDocument(
			<RoundTextBox className="test-me"></RoundTextBox>
		);

		let roundTextBoxNode = TestUtils.findRenderedDOMComponentWithTag(roundTextBox, "input");
		expect(roundTextBoxNode.className).toContain("test-me");
	});

	it("should be disabled if prop 'disabled' is specified", () => {
		const roundTextBox = TestUtils.renderIntoDocument(
			<RoundTextBox disabled></RoundTextBox>
		);

		let roundTextBoxNode = TestUtils.findRenderedDOMComponentWithTag(roundTextBox, "input");
		roundTextBoxNode = ReactDOM.findDOMNode(roundTextBoxNode);

		expect(roundTextBoxNode.attributes.disabled).toBeDefined();
	});

	it("defaults to a 'type' of 'text'", () => {
		const roundTextBox = TestUtils.renderIntoDocument(
			<RoundTextBox></RoundTextBox>
		);

		let roundTextBoxNode = TestUtils.findRenderedDOMComponentWithTag(roundTextBox, "input");
		roundTextBoxNode = ReactDOM.findDOMNode(roundTextBoxNode);

		expect(roundTextBoxNode.type).toBeDefined();
		expect(roundTextBoxNode.type).toEqual("text");
	});

	it("cannot take an invalid 'type' prop such as 'checkbox'", () => {
		let stub = sinon.stub(window.console, "error");

		const roundTextBox = TestUtils.renderIntoDocument(
			<RoundTextBox type="checkbox"></RoundTextBox>
		);

		expect(stub.calledOnce).toEqual(true);

		window.console.error.restore();
	});

});
