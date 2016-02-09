/* global jest describe beforeEach it expect */

jest.dontMock("../components/Checkbox/Checkbox");

import React from "react";
import TestUtils from "react-addons-test-utils";

// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const Checkbox = require("../components/Checkbox/Checkbox");

describe("Checkbox", () => {

	it("should be able to provide a className", () => {
		const classname = "test-me";

		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox className={classname}></Checkbox>
		);

		let checkboxNode = TestUtils.findRenderedDOMComponentWithClass(checkbox, classname);
		expect(checkboxNode.className).toBeDefined();
	});

	it("should be able to bind to onChange", () => {
		let wasClicked = false;
		const myCheckboxClass = "my-checkbox-class";

		// Render with an onClick handler
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox
				className={myCheckboxClass}
				onChange={ () => wasClicked = true }>
			</Checkbox>
		);

		// Simulate a change
		TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithClass(checkbox, myCheckboxClass));

		expect(wasClicked).toBeTruthy();
	});

	it("should supress onChange listener if disabled", () => {
		let wasClicked = false;
		const myCheckboxClass = "my-checkbox-class";

		// Render with an onChange handler
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox
				disabled
				className={myCheckboxClass}
				onChange={() => {
					wasClicked = true;
				}}>
			</Checkbox>
		);

		// Simulate a change
		TestUtils.Simulate.change(TestUtils.findRenderedDOMComponentWithClass(checkbox, myCheckboxClass));

		expect(wasClicked).toBeFalsy();
	});

	it("should apply `checked` attribute to invisible input element if passed down as prop", function() {
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox checked></Checkbox>
		);

		const hiddenInput = TestUtils.findRenderedDOMComponentWithTag(checkbox, "input");
		const checked = hiddenInput.getAttribute("checked");

		expect(checked).not.toBeNull();
	});

	it("should not apply `checked` attribute to invisible input element if it is not specified as prop", function() {
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox></Checkbox>
		);

		const hiddenInput = TestUtils.findRenderedDOMComponentWithTag(checkbox, "input");
		const checked = hiddenInput.getAttribute("checked");

		expect(checked).toBeNull();
	});

	it("should set `checked` attribute on invisible input element if `defaultChecked` prop is true", function() {
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox defaultChecked={true}></Checkbox>
		);

		const hiddenInput = TestUtils.findRenderedDOMComponentWithTag(checkbox, "input");
		const checked = hiddenInput.getAttribute("checked");

		expect(checked).not.toBeNull();
	});

	it("should not set `checked` attribute on invisible input element if `defaultChecked` prop is false", function() {
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox defaultChecked={false}></Checkbox>
		);

		const hiddenInput = TestUtils.findRenderedDOMComponentWithTag(checkbox, "input");
		const checked = hiddenInput.getAttribute("checked");

		expect(checked).toBeNull();
	});

});
