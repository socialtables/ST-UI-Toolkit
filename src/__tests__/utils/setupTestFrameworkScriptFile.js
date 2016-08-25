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

/*
* Throw run-time error when React Warnings are triggered in test suite
*
* This will allow us to catch any potential React warnings in our CI check versus run-time
*
* Long-term, hopefully React will expose a way to this
* Reference this issue for future developments: https://github.com/facebook/react/issues/4302
*/
// const warn = window.console.warn;

// window.console.warn = function(msg) {
// 	window.console.log("console.warn", msg);

// 	// Detect react warnings & error
// 	if (/^Warning: /.test(msg)) {
// 		throw new Error("React " + msg);
// 	}

// 	return warn.apply(this, arguments);
// };