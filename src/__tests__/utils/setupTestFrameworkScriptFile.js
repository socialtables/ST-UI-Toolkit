/*
* Create dumb polyfill for requestAnimationFrame
*/
window.requestAnimationFrame = function(cb) {
	setTimeout(cb, 1);
};