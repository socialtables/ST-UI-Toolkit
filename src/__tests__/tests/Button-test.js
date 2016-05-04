/* global jest describe beforeEach it expect */

jest.dontMock("../../components/Button/Button");

import TestUtils from "react-addons-test-utils";
import Button from "../../components/Button/Button";

describe("Button", () => {
	describe("without any properties", () => {
		let button;
		let buttonNode;

		beforeEach(() => {
			button = TestUtils.renderIntoDocument(
				<Button>Follow</Button>
			);
			buttonNode = TestUtils.findRenderedDOMComponentWithTag(button, "button");
		});

		it("should set the type to button by default", () => {
			expect(buttonNode.type).toBe("button");
		});
	});

	it("should be able to bind onClick", () => {
		let wasClicked = false;

		// Render a button with an onClick handler
		const button = TestUtils.renderIntoDocument(
			<Button onClick={ () => wasClicked = true }>Follow</Button>
		);

		// Simulate a click
		TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(button, "button"));

		expect(wasClicked).toBeTruthy();
	});

	it("should supress onClick listener if disabled", () => {
		let wasClicked = false;

		// Render a button with an onClick handler
		const button = TestUtils.renderIntoDocument(
			<Button disabled onClick={ () => wasClicked = true }>Follow</Button>
		);

		// Simulate a click
		TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(button, "button"));

		expect(wasClicked).toBeFalsy();
	});

	it("should be able to provide a className", () => {
		const button = TestUtils.renderIntoDocument(
			<Button className="test-me">Follow</Button>
		);

		const buttonNode = TestUtils.findRenderedDOMComponentWithTag(button, "button");
		expect(buttonNode.className).toContain("test-me");
	});

	it("should be able to change the type to submit or reset", () => {
		const submitButton = TestUtils.renderIntoDocument(
			<Button type="submit">Submit</Button>
		);
		const submitButtonNode = TestUtils.findRenderedDOMComponentWithTag(submitButton, "button");
		expect(submitButtonNode.type).toBe("submit");

		const resetButton = TestUtils.renderIntoDocument(
			<Button type="reset">Submit</Button>
		);
		const resetButtonNode = TestUtils.findRenderedDOMComponentWithTag(resetButton, "button");
		expect(resetButtonNode.type).toBe("reset");
	});

});
