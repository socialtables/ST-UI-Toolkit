/* global jest describe beforeEach it expect */

jest.dontMock("../../components/SelectBox/SelectBox");

import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import SelectBox from "../../components/SelectBox/SelectBox";
import SelectBoxOption from "../../components/SelectBox/SelectBoxOption";

describe("SelectBox", () => {

	it("should be able to provide a className", () => {
		const selectBox = TestUtils.renderIntoDocument(
			<SelectBox className="test-me">
				<SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
				<SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
				<SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
			</SelectBox>
		);

		let textBoxNode = TestUtils.findRenderedDOMComponentWithClass(selectBox, "test-me");
		expect(textBoxNode).toBeDefined();
	});

	it("should be disabled if prop 'disabled' is specified", () => {
		const selectBox = TestUtils.renderIntoDocument(
			<SelectBox disabled value="round">
				<SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
				<SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
				<SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
			</SelectBox>
		);

		let selectBoxNode = TestUtils.findRenderedDOMComponentWithTag(selectBox, "select");
		selectBoxNode = ReactDOM.findDOMNode(selectBoxNode);

		expect(selectBoxNode.attributes.disabled).toBeDefined();
	});

	it("displays `defaultText` when no option is selected", function() {
		const defaultText = "My Default Text";

		const selectBox = TestUtils.renderIntoDocument(
			<SelectBox defaultText={defaultText} value={""}>
				<SelectBoxOption value="round" displayLabel="Round"></SelectBoxOption>
				<SelectBoxOption value="rectangle" displayLabel="Rectangle"></SelectBoxOption>
				<SelectBoxOption value="square" displayLabel="Square"></SelectBoxOption>
			</SelectBox>
		);

		let selectBoxSelectedOptionText = TestUtils.findRenderedDOMComponentWithClass(selectBox, "st-ui-toolkit-roundselectbox-selected-option-text");
		selectBoxSelectedOptionText = ReactDOM.findDOMNode(selectBoxSelectedOptionText);

		expect(selectBoxSelectedOptionText.textContent).toEqual(defaultText);
	});

	it("triggers `onChange()` method when unselected option is clicked on", function() {
		let newOptionValue;

		const selectBox = TestUtils.renderIntoDocument(
			<SelectBox value="round" onChange={(v) => newOptionValue = v}>
				<SelectBoxOption value="round"></SelectBoxOption>
				<SelectBoxOption className="rectangle-option" value="rectangle"></SelectBoxOption>
				<SelectBoxOption value="square"></SelectBoxOption>
			</SelectBox>
		);

		// Open menu by simulating click
		const selectBoxNode = TestUtils.findRenderedDOMComponentWithTag(selectBox, "select");
		TestUtils.Simulate.focus(selectBoxNode);

		// Select option by simulating click
		const optionNode = TestUtils.findRenderedDOMComponentWithClass(selectBox, "rectangle-option");
		TestUtils.Simulate.mouseDown(optionNode);

		// Assert
		expect(newOptionValue).toEqual("rectangle");
	});

	it("does not trigger `onChange()` method when disabled option is clicked on", function() {
		let newOptionValue = null;

		const selectBox = TestUtils.renderIntoDocument(
			<SelectBox value="round" onChange={(v) => newOptionValue = v}>
				<SelectBoxOption value="round"></SelectBoxOption>
				<SelectBoxOption disabled className="rectangle-option" value="rectangle"></SelectBoxOption>
				<SelectBoxOption value="square"></SelectBoxOption>
			</SelectBox>
		);

		// Open menu by simulating click
		const selectBoxNode = TestUtils.findRenderedDOMComponentWithTag(selectBox, "select");
		TestUtils.Simulate.focus(selectBoxNode);

		// Select option by simulating click
		const optionNode = TestUtils.findRenderedDOMComponentWithClass(selectBox, "rectangle-option");
		TestUtils.Simulate.mouseDown(optionNode);

		// Assert
		expect(newOptionValue).toBeNull();
	});

	it("does not trigger `onChange()` method when currently selected option is clicked on", function() {
		let newOptionValue = null;

		const selectBox = TestUtils.renderIntoDocument(
			<SelectBox value="rectangle" onChange={(v) => newOptionValue = v}>
				<SelectBoxOption value="round"></SelectBoxOption>
				<SelectBoxOption className="rectangle-option" value="rectangle"></SelectBoxOption>
				<SelectBoxOption value="square"></SelectBoxOption>
			</SelectBox>
		);

		// Open menu by simulating click
		const selectBoxNode = TestUtils.findRenderedDOMComponentWithTag(selectBox, "select");
		TestUtils.Simulate.focus(selectBoxNode);

		// Select option by simulating click
		const optionNode = TestUtils.findRenderedDOMComponentWithClass(selectBox, "rectangle-option");
		TestUtils.Simulate.mouseDown(optionNode);

		// Assert
		expect(newOptionValue).toBeNull();
	});
});
