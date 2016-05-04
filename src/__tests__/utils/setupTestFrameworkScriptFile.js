window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

/*
* Attach React to global namespace
*/
window.React = require("react");

/*
* Create dumb polyfill for requestAnimationFrame
*/
window.requestAnimationFrame = function(cb) {
	window.setTimeout(cb, 100);
};