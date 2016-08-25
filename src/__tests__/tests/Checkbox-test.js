/* global jest describe beforeEach it expect */

jest.dontMock("../../components/Checkbox/Checkbox");

import TestUtils from "react-addons-test-utils";
import Checkbox from "../../components/Checkbox/Checkbox";

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

	it("should correctly set the 'value' property on the wrapped <input type='checkbox'> element", () => {
		// Setup
		const checkboxValue = "yolo";

		// Render
		const checkbox = TestUtils.renderIntoDocument(
			<Checkbox checked value={checkboxValue} />
		);

		// Extract the nested <input type='checkbox'> element
		const nativeInputElement = TestUtils.findRenderedDOMComponentWithTag(checkbox, "input");

		// Assert
		expect(nativeInputElement.value).toEqual(checkboxValue);
	});

});
