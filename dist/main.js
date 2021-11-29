/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module) => {

eval("function Asteroid () {\r\n    console.log(\"this is the asteroid.js file!\")\r\n  }\r\n  \r\nmodule.exports = Asteroid;\r\n\n\n//# sourceURL=webpack://W9D1/./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nwindow.asteroid = Asteroid;\r\nwindow.MovingObject = MovingObject;\r\n\r\nAsteroid();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const canvas1 = document.getElementById('canvas');\r\n    const ctx = canvas1.getContext('2d');\r\n    canvas1.width = 900;\r\n    canvas1.height = 600;\r\n    \r\n    const circle = new MovingObject([100, 100], [1, 1], 50, \"red\");\r\n    circle.draw(ctx); \r\n})\r\n\n\n//# sourceURL=webpack://W9D1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (pos, vel, radius, color) {\r\n    this.pos = pos;\r\n    this.vel = vel;\r\n    this.radius = radius;\r\n    this.color = color;\r\n}\r\n\r\nMovingObject.prototype.draw = function (ctx) {\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);\r\n    ctx.closePath;\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n}\r\n\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://W9D1/./src/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;