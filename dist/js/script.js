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

eval("window.onload = function() {\n\tconst overlayer = document.querySelector(\".js-overlayer\");\n\toverlayer.style.display = \"none\";\n\n\tconst data = fetch(\"data.json\")\n\t\t.then(response => response.json())\n\t\t.then(data => {\n\t\t\tconsole.log(data);\n\t\t\treturn data;\n\t\t})\n\t\t.catch(error => console.log(error));\n\n\tlet chartContainer = document.querySelector(\".js-chart__container\");\n\n\tdata.then(data => {\n\t\tdata.forEach(element => {\n\t\t\tlet chartCell = document.createElement(\"div\");\n\n\t\t\tchartCell.classList.add(\"chart__cell\");\n\t\t\tchartCell.innerHTML = `\n\t\t<div class=\"chart__amount\">$${element.amount}</div>\n\t\t\t<div class=\"chart__cell-wrapper\">\n\t\t\t<div class=\"chart__bar\" style=\"height:${element.amount * 2.5}px\">\n\t\t\t</div>\n\t\t\t<p class=\"chart__label\">${element.day}</p>\n\t\t\t</div>`;\n\n\t\t\tchartContainer.appendChild(chartCell);\n\t\t});\n\t});\n\n\tsetTimeout(triggerFunction, 500);\n\n\tfunction triggerFunction() {\n\t\tlet card = document.querySelector(\".card\");\n\t\tcard.classList.add(\"card--animated\");\n\n\t\tcard.style.opacity = \"1\";\n\t}\n};\n\n\n//# sourceURL=webpack://expenses-chart---frontend-mentor/./src/js/script.js?");

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