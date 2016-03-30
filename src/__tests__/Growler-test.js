/* global jest describe beforeEach it expect */

jest.dontMock("../components/Growler/Growler");

import TestUtils from "react-addons-test-utils";
import sinon from "sinon";

// Helpers
function _triggerEscKeyUpEvent() {
	const keyboardEvent = new KeyboardEvent("keyup", {keyCode: 27});
	document.dispatchEvent(keyboardEvent);
}

// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const Growler = require("../components/Growler/Growler");

describe("Growler", () => {

	it("should be open if prop 'open' is 'true'", () => {
		TestUtils.renderIntoDocument(
			<Growler open={true}>
				<div className="growler-content">Grrrrrrrrrrr</div>
			</Growler>
		);
		const growlerContent = document.querySelector(".growler-content");

		expect(growlerContent).toBeDefined();
	});

	it("should be closed if prop 'open' is 'false'", () => {
		TestUtils.renderIntoDocument(
			<Growler open={false}>
				<div className="growler-content">Grrrrrrrrrrr</div>
			</Growler>
		);
		const growlerContent = document.querySelector(".growler-content");

		expect(growlerContent).toBeNull();
	});

	it("should trigger 'onCloseRequest()' function when Esc key is pressed (if 'listenForExternalCloseEvent' prop is 'true')", (done) => {
		const callback = sinon.spy();
		TestUtils.renderIntoDocument(
			<Growler
				open={true}
				listenForExternalCloseEvent={true}
				onCloseRequest={callback}>
				<div className="growler-content">Grrrrrrrrrrr</div>
			</Growler>
		);

		// Must wait some time for component to appear fully rendered before triggering esc event
		requestAnimationFrame(() => {
			_triggerEscKeyUpEvent();
			expect(callback.called).toBeTruthy();
			done();
		});
	});

	it("should not trigger 'onCloseRequest()' function when Esc key is pressed (if 'listenForExternalCloseEvent' prop is 'false')", (done) => {
		const callback = sinon.spy();
		TestUtils.renderIntoDocument(
			<Growler
				open={true}
				listenForExternalCloseEvent={false}
				onCloseRequest={callback}>
				<div className="growler-content">Grrrrrrrrrrr</div>
			</Growler>
		);

		// Must wait some time for component to appear fully rendered before triggering esc event
		requestAnimationFrame(() => {
			_triggerEscKeyUpEvent();
			expect(callback.called).toBeFalsy();
			done();
		});
	});

	it("should trigger 'onCloseRequest()' function after number of milliseconds specified by the 'timeToClose' prop", (done) => {
		const callback = sinon.spy();
		TestUtils.renderIntoDocument(
			<Growler
				open={true}
				listenForExternalCloseEvent={true}
				timeToClose={3000}
				onCloseRequest={callback}>
				<div className="growler-content">Grrrrrrrrrrr</div>
			</Growler>
		);

		// Must wait some time for component to appear fully rendered before testing
		requestAnimationFrame(() => {
			expect(callback.called).toBeTruthy();
			done();
		});
	});

	it("should not trigger 'onCloseRequest()' function on its own if 'timeToClose' prop is not passed", (done) => {
		const callback = sinon.spy();
		TestUtils.renderIntoDocument(
			<Growler
				open={true}
				listenForExternalCloseEvent={true}
				onCloseRequest={callback}>
				<div className="growler-content">Grrrrrrrrrrr</div>
			</Growler>
		);

		// Must wait some time for component to appear fully rendered before testing
		requestAnimationFrame(() => {
			expect(callback.called).toBeFalsy();
			done();
		});
	});
});
