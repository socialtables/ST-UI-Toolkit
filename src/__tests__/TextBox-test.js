/* global jest describe beforeEach it expect */

jest.dontMock("../components/TextBox/TextBox");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import sinon from "sinon";


// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const TextBox = require("../components/TextBox/TextBox");

describe("TextBox", () => {

	it("should be able to provide a className", () => {
		const textBox = TestUtils.renderIntoDocument(
			<TextBox className="test-me"></TextBox>
		);

		let textBoxNode = TestUtils.findRenderedDOMComponentWithTag(textBox, "input");
		expect(textBoxNode.className).toContain("test-me");
	});

	it("should be disabled if prop 'disabled' is specified", () => {
		const textBox = TestUtils.renderIntoDocument(
			<TextBox disabled></TextBox>
		);

		let textBoxNode = TestUtils.findRenderedDOMComponentWithTag(textBox, "input");
		textBoxNode = ReactDOM.findDOMNode(textBoxNode);

		expect(textBoxNode.attributes.disabled).toBeDefined();
	});

	it("defaults to a 'type' of 'text'", () => {
		const textBox = TestUtils.renderIntoDocument(
			<TextBox></TextBox>
		);

		let textBoxNode = TestUtils.findRenderedDOMComponentWithTag(textBox, "input");
		textBoxNode = ReactDOM.findDOMNode(textBoxNode);

		expect(textBoxNode.type).toBeDefined();
		expect(textBoxNode.type).toEqual("text");
	});

	it("cannot take an invalid 'type' prop such as 'checkbox'", () => {
		let stub = sinon.stub(window.console, "error");

		const textBox = TestUtils.renderIntoDocument(
			<TextBox type="checkbox"></TextBox>
		);

		expect(stub.calledOnce).toEqual(true);

		window.console.error.restore();
	});

});
