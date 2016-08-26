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
* Throw a run-time error on React Warnings that occur in test-suite
* This will help ensure that we catch these types of issues in our CI check versus at run-time
*
* Using a suggestion found in this issue: https://github.com/facebook/react/issues/4302
*
*/
const errorFn = window.console.error;
window.console.error = function(msg) {
	// Detect react warnings & error
	if (/^Warning: /.test(msg)) {
		throw new Error(`React: ${msg}`);
	}
	return errorFn.apply(this, arguments);
};