/* global jest describe beforeEach it expect */

jest.dontMock("../components/Tabs/Tabs");

import React from "react";
import TestUtils from "react-addons-test-utils";

// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const Tabs = require("../components/Tabs/Tabs");
const Tab = require("../components/Tabs/Tab");

describe("Tabs", () => {
	describe("without any properties", () => {
		let tabs;
		let tabsNode;

		beforeEach(() => {
			tabs = TestUtils.renderIntoDocument(
				<Tabs className="tabs"><Tab></Tab></Tabs>
			);
			tabsNode = TestUtils.findRenderedDOMComponentWithClass(tabs, "tabs");
		});

		it("tabs should not allow user to override container styles", () => {
			expect(tabsNode.hasAttribute("style")).toBe(false);
		});

		it("should come with default styles", () => {
			expect(tabsNode.children[0].hasAttribute("style")).toBeTruthy();
			expect(tabsNode.children[1].hasAttribute("style")).toBeTruthy();
		});
	});

	it("should only accept Tab Components as children", () => {
		const badTabs = TestUtils.renderIntoDocument(
			<Tabs className="badTabs"><div></div><div></div></Tabs>
		);
		const badTabsNode = TestUtils.findRenderedDOMComponentWithClass(badTabs, "badTabs");
		expect(badTabsNode.children[0].children[0].children.length).toBe(0);

		const oneDivTabs = TestUtils.renderIntoDocument(
			<Tabs className="oneDivTabs"><div></div><Tab></Tab></Tabs>
		);
		const oneDivTabsNode = TestUtils.findRenderedDOMComponentWithClass(oneDivTabs, "oneDivTabs");
		expect(oneDivTabsNode.children[0].children[0].children.length).toBe(1);
	});
});
