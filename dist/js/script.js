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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://expenses-chart---frontend-mentor/./src/scss/style.scss?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("const data = fetch(\"data.json\")\n\t.then(response => response.json())\n\t.then(data => {\n\t\tconsole.log(data);\n\t\treturn data;\n\t})\n\t.catch(error => console.log(error));\n\nlet chartContainer = document.querySelector(\".js-chart__container\");\n\ndata.then(data => {\n\tdata.forEach(element => {\n\t\tconsole.log(element);\n\n\t\tlet chartCell = document.createElement(\"div\");\n\t\tchartCell.classList.add(\"chart__cell\");\n\t\tchartCell.innerHTML = `<div class=\"chart__bar\" style=\"height:${element.amount *\n\t\t\t2}px\"></div><p class=\"chart__label\">${element.day}</p>`;\n\t\tchartContainer.appendChild(chartCell);\n\t});\n});\n\n\n//# sourceURL=webpack://expenses-chart---frontend-mentor/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/scss/style.scss"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;