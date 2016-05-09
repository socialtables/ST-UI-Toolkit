import { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import GrowlerContentWrapper from "./GrowlerContentWrapper";

/**
 * Declare animation-related properties at the top so that they can be changed in this one spot in the code
 */
const REVEALED_GROWLER_CONTENT_TRANSFORM = "translateY(-50%)";
const HIDDEN_GROWLER_CONTENT_TRANSFORM = "translateY(-53%)";
const ST_UI_REVEALED_GROWLER_CLASS = "ST_UI_REVEALED_GROWLER_CLASS";
const ST_UI_HIDDEN_GROWLER_CLASS = "ST_UI_HIDDEN_GROWLER_CLASS";

/**
 * Growler component
 */
export default class Growler extends Component {

	constructor(props) {
		super(props);
		const { style, ...childProps } = props; // eslint-disable-line no-unused-vars
		this._childProps = childProps;

		this._triggerOnCloseRequestOnEscKeyPress = this._triggerOnCloseRequestOnEscKeyPress.bind(this);
		this._fadeInGrowler = this._fadeInGrowler.bind(this);
		this._fadeOutGrowler = this._fadeOutGrowler.bind(this);

		if (!this._growlerContentElement) {
			this._createGrowlerContentElement();
		}
	}

	/**
	 * Update the childProps based on the updated properties passed to the growler.
	 */
	componentWillReceiveProps(props) {
		const { style, ...childProps } = props; // eslint-disable-line no-unused-vars
		this._childProps = childProps;
	}

	componentWillMount() {
		this._hideShowGrowlerContentElement(this.props);

		if (this.props.timeToClose && this.props.open) {
			setTimeout(this._fadeOutGrowler, this.props.timeToClose);
		}
	}

	componentWillUpdate(nextProps) {
		this._hideShowGrowlerContentElement(nextProps);

		if (nextProps.timeToClose && nextProps.open) {
			setTimeout(this._fadeOutGrowler, nextProps.timeToClose);
		}
	}

	componentDidMount() {
		this._renderGrowlerContent();
	}

	componentDidUpdate() {
		this._renderGrowlerContent();
	}

	componentWillUnmount() {
		// Remove event listeners
		this._removeCloseRequestListeners();

		// Remove growler content from DOM
		if (this._growlerContentElement) {
			document.body.removeChild(this._growlerContentElement);
		}

		// Nullify references to DOM nodes to ensure proper garbage collection
		this._growlerContentElement = null;
		this._cachedBodyElementReference = null;
		this._childProps = null;
	}

	_hideShowGrowlerContentElement({ open }) {
		if (open) {
			// mark growler as revealed
			this._growlerContentElement.className = ST_UI_REVEALED_GROWLER_CLASS;

			// reveal growler
			this._fadeInGrowler();

			// bind event listeners
			if (this.props.listenForExternalCloseEvent) {
				this._bindCloseRequestListeners();
			}
		}
		else {
			// mark growler as hidden
			this._growlerContentElement.className = ST_UI_HIDDEN_GROWLER_CLASS;

			// remove event listeners
			if (this.props.listenForExternalCloseEvent) {
				this._removeCloseRequestListeners();
			}
		}
	}

	_fadeInGrowler() {
		let op = 0.1;  // initial opacity

		var fadeIn = (op) => {
			if (this._growlerContentElement) {
				if (op >= 0.7) {
					this._growlerContentElement.style.transform = REVEALED_GROWLER_CONTENT_TRANSFORM;
				}
				else {
					op += op * 0.1;
					this._growlerContentElement.style.opacity = op;
					this._growlerContentElement.style.filter = `alpha(opacity= ${op * 100} )`;
					requestAnimationFrame(() => fadeIn(op));
				}
			}
		};

		fadeIn(op);
	}

	_fadeOutGrowler() {
		let op = 0.7;  // initial opacity

		var fadeOut = (op) => {
			if (this._growlerContentElement) {
				if (op <= 0.1) {
					this._growlerContentElement.style.transform = HIDDEN_GROWLER_CONTENT_TRANSFORM;
					this.props.onCloseRequest();
				}
				else {
					op -= op * 0.1;
					this._growlerContentElement.style.opacity = op;
					this._growlerContentElement.style.filter = `alpha(opacity= ${op * 100} )`;
					requestAnimationFrame(() => fadeOut(op));
				}
			}
		};

		fadeOut(op);
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
			this._fadeOutGrowler();
		}
	}

	_createGrowlerContentElement() {
		// Create content element
		this._growlerContentElement = document.createElement("div");
		this._growlerContentElement.style.display = "block";
		this._growlerContentElement.style.margin = "0 auto";
		this._growlerContentElement.style.position = "fixed";
		this._growlerContentElement.style.borderRadius = "10px";
		this._growlerContentElement.style.top = "60px";
		this._growlerContentElement.style.right = "30px";
		this._growlerContentElement.style.transform = HIDDEN_GROWLER_CONTENT_TRANSFORM;
		this._growlerContentElement.style.transition = "transform 0.28s ease-in";
		this._growlerContentElement.style.background = "black";
		this._growlerContentElement.style.color = "white";
		this._growlerContentElement.style.opacity = 0.7;
		this._growlerContentElement.style.maxWidth = "750px";
		this._growlerContentElement.style.zIndex = 9999;

		// Append growler layer to DOM
		this._cachedBodyElementReference = this._cachedBodyElementReference || document.body;

		requestAnimationFrame(() => {
			this._cachedBodyElementReference.appendChild(this._growlerContentElement);
		})
	}

	_renderGrowlerContent() {
		if (this.props.open) {
			ReactDOM.render(
				<GrowlerContentWrapper style={this.props.style} key={"growler-content-wrapper"}>
					{this.props.children}
				</GrowlerContentWrapper>,
				this._growlerContentElement
			);
		}
		else if (!this.props.open && this._growlerContentElement) {
			ReactDOM.unmountComponentAtNode(this._growlerContentElement);
		}
	}

	render() {
		return null;
	}
}

Growler.displayName = "Growler";

Growler.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]),
	style: PropTypes.object, 
	open: PropTypes.bool,
	listenForExternalCloseEvent: PropTypes.bool,
	onCloseRequest: PropTypes.func,
	timeToClose: PropTypes.number
};

Growler.defaultProps = {
	open: false,
	listenForExternalCloseEvent: true,
	onCloseRequest: function() {},
	timeToClose: null
};
