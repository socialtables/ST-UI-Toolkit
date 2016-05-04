/* global jest describe beforeEach it expect */

jest.dontMock("../../components/Tabs/Tabs");

import TestUtils from "react-addons-test-utils";
import Tabs from "../../components/Tabs/Tabs";
import Tab from "../../components/Tabs/Tab";

describe("Tabs", () => {
	describe("without any properties", () => {
		let tabs;
		let tabsNode;

		beforeEach(() => {
			tabs = TestUtils.renderIntoDocument(
				<Tabs className="tabs">
					<Tab className="firstTab"></Tab>
					<Tab className="secondTab"></Tab>
				</Tabs>
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
			<Tabs className="badTabs">
				<div></div>
				<div></div>
			</Tabs>
		);
		const badTabsNode = TestUtils.findRenderedDOMComponentWithClass(badTabs, "badTabs");
		expect(badTabsNode.children[0].children[0].children.length).toBe(0);

		const oneDivTabs = TestUtils.renderIntoDocument(
			<Tabs className="oneDivTabs">
				<div></div>
				<Tab></Tab>
			</Tabs>
		);
		const oneDivTabsNode = TestUtils.findRenderedDOMComponentWithClass(oneDivTabs, "oneDivTabs");
		expect(oneDivTabsNode.children[0].children[0].children.length).toBe(1);
	});

	it("should be able to specify a label for the set of tabs", () => {
		const tabs = TestUtils.renderIntoDocument(
			<Tabs className="tabs" label={"Account Settings"}>
				<Tab className="firstTab"></Tab>
				<Tab className="secondTab"></Tab>
				<Tab className="thirdTabNode"></Tab>
			</Tabs>
		);
		const tabsNode = TestUtils.findRenderedDOMComponentWithClass(tabs, "tabs");
		expect(tabsNode.hasAttribute("label")).toBe(true);
		expect(tabsNode.children[0].children[0].innerHTML).toBe("Account Settings");
	});

	it("should trigger `onChange()` prop when un-selected Tab is clicked on and selected", () => {
		let selectedIndex = null;

		const tabs = TestUtils.renderIntoDocument(
			<Tabs
				initialSelectedIndex={0}
				className="tabs"
				label="Account Settings"
				onChange={(newIndex) => {
					selectedIndex = newIndex;
				}}>
				<Tab className="firstTab"></Tab>
				<Tab className="secondTab"></Tab>
			</Tabs>
		);
		// Simulate a click on second tab
		TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(tabs, "secondTab"));

		// Assert
		expect(selectedIndex).toEqual(1);
	});
});
