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

	it("should be able to bind to onClick", () => {
		let wasClicked = false;
		const myCheckboxClass = "my-checkbox-class";

		// Render a button with an onClick handler
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox
				className={myCheckboxClass}
				onClick={ () => wasClicked = true }>
			</Checkbox>
		);

		// Simulate a click
		TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(checkbox, myCheckboxClass));

		expect(wasClicked).toBeTruthy();
	});

	it("should supress onClick listener if disabled", () => {
		let wasClicked = false;
		const myCheckboxClass = "my-checkbox-class";

		// Render a button with an onClick handler
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox
				disabled
				className={myCheckboxClass}
				onClick={() => {
					wasClicked = true;
				}}>
			</Checkbox>
		);

		// Simulate a click
		TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(checkbox, myCheckboxClass));

		expect(wasClicked).toBeFalsy();
	});
});
