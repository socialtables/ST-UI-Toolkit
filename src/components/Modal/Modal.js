import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";

import ModalContentWrapper from "./ModalContentWrapper";

/**
 * Declare animation-related properties at the top so that they can be changed in this one spot in the code
 */
const REVEALED_MODAL_STYLES = {
	MODAL_TOP_LAYER_DISPLAY:  "block",
	OVERLAY_BACKGROUND: "black",
	MODAL_CONTENT_TRANSFORM: "translateY(-50%)"
};

const HIDDEN_MODAL_STYLES = {
	MODAL_TOP_LAYER_DISPLAY: "none",
	OVERLAY_BACKGROUND: "none",
	MODAL_CONTENT_TRANSFORM: "translateY(-53%)"
};


const ST_UI_REVEALED_MODAL_CLASS = "ST_UI_REVEALED_MODAL_CLASS";
const ST_UI_HIDDEN_MODAL_CLASS = "ST_UI_HIDDEN_MODAL_CLASS";

/**
 * Modal component
 */
export default class Modal extends Component {

	constructor(properties) {
		super(properties);
		const { style, ...childProps } = properties;
		this._childProps = childProps;
		this._triggerOnCloseRequestOnEscKeyPress = this._triggerOnCloseRequestOnEscKeyPress.bind(this);

		if (!this._modalTopLayer) {
			this._createModalContainer();
		}
	}

	/**
	 * Update the childProps based on the updated properties passed to the modal.
	 */
	componentWillReceiveProps(properties) {
		const { style, ...childProps } = properties;
		this._childProps = childProps;
	}

	componentWillMount() {
		this._hideShowModalContainer(this.props)
	}

	componentWillUpdate(nextProps) {
		this._hideShowModalContainer(nextProps);
	}

	componentDidMount() {
		this._renderModalContent();
	}

	componentDidUpdate() {
		this._renderModalContent();
	}

	componentWillUnmount() {
		// Remove event listeners
		this._removeCloseRequestListeners();

		// Remove modal content from DOM
		if (this._modalContentElement) {
			ReactDOM.unmountComponentAtNode(this._modalContentElement);
		}

		// Remove modal-specific nodes from DOM
		this._modalTopLayer.removeChild(this._overlayElement);
		this._modalTopLayer.removeChild(this._modalContentElement);
		this._cachedBodyElementReference.removeChild(this._modalTopLayer);

		// Nullify references to DOM nodes to ensure proper garbage collection
		this._modalTopLayer = null;
		this._overlayElement = null;
		this._modalContentElement = null;
		this._cachedBodyElementReference = null;
	}

	_hideShowModalContainer({ open }) {
		if (open) {
			// mark modal as revealed
			this._modalTopLayer.className = ST_UI_REVEALED_MODAL_CLASS;

			// reveal modal
			this._revealModal();

			// bind event listeners
			if (this.props.listenForExternalCloseEvent) {
				this._bindCloseRequestListeners();
			}
		}
		else {
			// mark modal as hidden
			this._modalTopLayer.className = ST_UI_HIDDEN_MODAL_CLASS;

			// hide modal
			this._hideModal();

			// remove event listeners
			if (this.props.listenForExternalCloseEvent) {
				this._removeCloseRequestListeners();
			}
		}

		const revealedModals = document.getElementsByClassName(ST_UI_REVEALED_MODAL_CLASS) || {};
		if (revealedModals.length) {
			this._cachedBodyElementReference.style.overflow = "hidden";
		}
		else {
			this._cachedBodyElementReference.style.overflow = "";
		}
	}

	_revealModal() {

		requestAnimationFrame(() => {
			this._modalTopLayer.style.display = REVEALED_MODAL_STYLES.MODAL_TOP_LAYER_DISPLAY;
		});

		setTimeout(() => {
			requestAnimationFrame(() => {
				this._modalContentElement.style.transform = REVEALED_MODAL_STYLES.MODAL_CONTENT_TRANSFORM;
				this._overlayElement.style.background = REVEALED_MODAL_STYLES.OVERLAY_BACKGROUND;
			});
		}, 50);
	}

	_hideModal() {
		requestAnimationFrame(() => {
			this._modalTopLayer.style.display = HIDDEN_MODAL_STYLES.MODAL_TOP_LAYER_DISPLAY;
			this._overlayElement.style.background = HIDDEN_MODAL_STYLES.OVERLAY_BACKGROUND;
			this._modalContentElement.style.transform = HIDDEN_MODAL_STYLES.MODAL_CONTENT_TRANSFORM;
		});
	}

	_bindCloseRequestListeners() {
		// trigger closeRequest on ESC key press
		document.addEventListener("keyup", this._triggerOnCloseRequestOnEscKeyPress, false);
	}

	_removeCloseRequestListeners() {
		document.removeEventListener("keyup", this._triggerOnCloseRequestOnEscKeyPress, false);
	}

	_triggerOnCloseRequestOnEscKeyPress(e) {
		if (e.keyCode === 27) {
			this.props.onCloseRequest();
		}
	}

	_createModalContainer() {
		// Create modal layer
		this._modalTopLayer = document.createElement("div");
		this._modalTopLayer.class = "STmodal";
		this._modalTopLayer.style.display = HIDDEN_MODAL_STYLES.MODAL_TOP_LAYER_DISPLAY;
		this._modalTopLayer.style.position = "fixed";
		this._modalTopLayer.style.top = 0;
		this._modalTopLayer.style.left = 0;
		this._modalTopLayer.style.bottom = 0;
		this._modalTopLayer.style.right = 0;
		this._modalTopLayer.style.zIndex = 1500;
		this._modalTopLayer.className = ST_UI_HIDDEN_MODAL_CLASS;

		// Create overlay element
		this._overlayElement = document.createElement("div");
		this._overlayElement.style.position = "absolute";
		this._overlayElement.style.background = HIDDEN_MODAL_STYLES.OVERLAY_BACKGROUND;
		this._overlayElement.style.opacity = 0.7;
		this._overlayElement.style.width = "100%";
		this._overlayElement.style.height = "100%";
		this._overlayElement.style.transition = "background 0.15s";

		// Create content element
		this._modalContentElement = document.createElement("div");
		this._modalContentElement.style.display = "block";
		this._modalContentElement.style.margin = "0 auto";
		this._modalContentElement.style.position = "absolute";
		this._modalContentElement.style.top = "50%";
		this._modalContentElement.style.left = 0;
		this._modalContentElement.style.right = 0;
		this._modalContentElement.style.transform = HIDDEN_MODAL_STYLES.MODAL_CONTENT_TRANSFORM;
		this._modalContentElement.style.opacity = 1;
		this._modalContentElement.style.transition = "transform 0.28s ease-in";
		this._modalContentElement.style.background = "white";
		this._modalContentElement.style.width = "75%";
		this._modalContentElement.style.maxWidth = "750px";

		// Construct complete modal layer
		this._modalTopLayer.appendChild(this._overlayElement);
		this._modalTopLayer.appendChild(this._modalContentElement);

		// Append modal layer to DOM
		this._cachedBodyElementReference = this._cachedBodyElementReference || document.body;

		requestAnimationFrame(() => {
			this._cachedBodyElementReference.appendChild(this._modalTopLayer);
		});
	}

	_renderModalContent() {
		if (this.props.open) {
			ReactDOM.render(
				<ModalContentWrapper style={this.props.style}>
					{this.props.children}
				</ModalContentWrapper>,
				this._modalContentElement
			);
		}
		else if (!this.props.open && this._modalContentElement) {
			ReactDOM.unmountComponentAtNode(this._modalContentElement);
		}
	}

	render() {
		return null;
	}

}

Modal.displayName = "Modal";

Modal.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	open: PropTypes.bool,
	listenForExternalCloseEvent: PropTypes.bool,
	onCloseRequest: PropTypes.func
};

Modal.defaultProps = {
	open: false,
	listenForExternalCloseEvent: true,
	onCloseRequest: function() {}
};
