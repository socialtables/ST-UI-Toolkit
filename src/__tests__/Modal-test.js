/* global jest describe beforeEach it expect */

jest.dontMock("../components/Modal/Modal");

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import sinon from "sinon";

// Helpers
function _triggerEscKeyUpEvent() {
	const keyboardEvent = new KeyboardEvent("keyup", {keyCode: 27});
	document.dispatchEvent(keyboardEvent);
}

// Babel would move an import in front of the jest.dontMock. That"s why require
// is used instead of import.
const Modal = require("../components/Modal/Modal");

describe("Modal", () => {

	it("should be open if prop 'open' is 'true'", () => {
		const modal = TestUtils.renderIntoDocument(
			<Modal open={true}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);
		const modalContent = document.querySelector(".modal-content");

		expect(modalContent).toBeDefined();
	});

	it("should be closed if prop 'open' is 'false'", () => {
		const modal = TestUtils.renderIntoDocument(
			<Modal open={false}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);

		const modalContent = document.querySelector(".modal-content");

		expect(modalContent).toBeNull();
	});

	it("should trigger 'onCloseRequest()' function when Esc key is pressed (if 'listenForExternalCloseEvent' prop is 'true')", () => {
		const callback = sinon.spy();
		const modal = TestUtils.renderIntoDocument(
			<Modal
				open={true}
				listenForExternalCloseEvent={true}
				onCloseRequest={callback}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);

		_triggerEscKeyUpEvent();

		expect(callback.called).toBeTruthy();
	});

	it("should not trigger 'onCloseRequest()' function when Esc key is pressed (if 'listenForExternalCloseEvent' prop is 'false')", () => {
		const callback = sinon.spy();
		const modal = TestUtils.renderIntoDocument(
			<Modal
				open={true}
				listenForExternalCloseEvent={false}
				onCloseRequest={callback}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);

		_triggerEscKeyUpEvent();

		expect(callback.called).toBeFalsy();
	});

});
