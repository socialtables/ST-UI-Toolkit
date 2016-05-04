/* global jest describe beforeEach it expect */

jest.dontMock("../../components/Card/Card");

import TestUtils from "react-addons-test-utils";
import Card from "../../components/Card/Card";

describe("Card", () => {

	it("should render its children", () => {
		const card = TestUtils.renderIntoDocument(
			<Card><span>Hello there</span></Card>
		);
		const divNode = TestUtils.findRenderedDOMComponentWithTag(card, "div");
		const spanNode = TestUtils.findRenderedDOMComponentWithTag(card, "span");

		expect(divNode.tagName).toEqual("DIV");
		expect(divNode.childNodes[0].tagName).toEqual("SPAN");
		expect(spanNode.textContent).toEqual("Hello there");
	});
});
