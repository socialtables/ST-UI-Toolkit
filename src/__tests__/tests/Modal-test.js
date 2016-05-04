/* global jest describe beforeEach it expect */

jest.dontMock("../../components/Modal/Modal");

import TestUtils from "react-addons-test-utils";
import sinon from "sinon";
import Modal from "../../components/Modal/Modal";

// Helpers
function _triggerEscKeyUpEvent() {
	const keyboardEvent = new KeyboardEvent("keyup", {keyCode: 27});
	document.dispatchEvent(keyboardEvent);
}

function _triggerClickEventOnOpenModalOverlay() {
	// Trigger `click` event in top left-hand corner (should be outside of modal content)
	const mouseClick = new MouseEvent("click", {
		bubbles: true
	});
	const overlayElement = document.querySelectorAll(".ST_UI_REVEALED_MODAL_CLASS .ST_UI_MODAL_OVERLAY");
	overlayElement.dispatchEvent(mouseClick);
}

describe("Modal", () => {

	it("should be open if prop 'open' is 'true'", () => {
		TestUtils.renderIntoDocument(
			<Modal open={true}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);
		const modalContent = document.querySelector(".modal-content");

		expect(modalContent).toBeDefined();
	});

	it("should be closed if prop 'open' is 'false'", () => {
		TestUtils.renderIntoDocument(
			<Modal open={false}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);

		const modalContent = document.querySelector(".modal-content");

		expect(modalContent).toBeNull();
	});

	it("should trigger 'onCloseRequest()' function when Esc key is pressed (if 'listenForExternalCloseEvent' prop is 'true')", () => {
		const callback = sinon.spy();
		TestUtils.renderIntoDocument(
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
		TestUtils.renderIntoDocument(
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

	// NOTE: Jest is not respecting setTimeout
	it("should trigger 'onCloseRequest()' function when clicked outside of modal content (if 'listenForExternalCloseEvent' prop is 'true')", (done) => {
		const callback = sinon.spy();
		TestUtils.renderIntoDocument(
			<Modal
				open={true}
				listenForExternalCloseEvent={true}
				onCloseRequest={callback}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);

		// Must wait some time for component to appear fully rendered before triggering click event
		window.requestAnimationFrame(function() {
			_triggerClickEventOnOpenModalOverlay();

			expect(callback.called).toBeTruthy();

			done();
		});
	});

	it("should not trigger 'onCloseRequest()' function when clicked outside of modal content (if 'listenForExternalCloseEvent' prop is 'false')", (done) => {
		const callback = sinon.spy();
		TestUtils.renderIntoDocument(
			<Modal
				open={true}
				listenForExternalCloseEvent={false}
				onCloseRequest={callback}>
				<div className="modal-content">Yolo Swag</div>
			</Modal>
		);

		// Must wait some time for component to appear fully rendered before triggering click event
		window.requestAnimationFrame(function() {
			_triggerClickEventOnOpenModalOverlay();

			expect(callback.called).toBeFalsy();

			done();
		});
	});

});
