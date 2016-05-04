/* global jest describe beforeEach it expect */

jest.dontMock("../../components/RadioButton/RadioButton");

import TestUtils from "react-addons-test-utils";
import RadioButtonGroup from "../../components/RadioButton/RadioButtonGroup";
import RadioButton from "../../components/RadioButton/RadioButton";

describe("RadioButton", () => {
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
		const labelDivNode = TestUtils.findRenderedDOMComponentWithClass(radioButtonGroup, "radioButton").children[1];

		// Simulate a click
		TestUtils.Simulate.click(labelDivNode);

		expect(wasClicked).toBeTruthy();
	});

});
