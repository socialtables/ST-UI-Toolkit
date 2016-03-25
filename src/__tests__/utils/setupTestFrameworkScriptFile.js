/*
* Attach React to global namespace
*/
window.React = require("react");

/*
* Create dumb polyfill for requestAnimationFrame
*/
window.requestAnimationFrame = function(cb) {
	setTimeout(cb, 1);
};