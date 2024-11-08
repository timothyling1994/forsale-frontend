"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameContext */ \"./pages/gameContext.js\");\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gameContext__WEBPACK_IMPORTED_MODULE_1__.GameProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/tling/Desktop/forsale-frontend/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tling/Desktop/forsale-frontend/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBRzdDLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILHNEQUFZQTtrQkFDWCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9yc2FsZS1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lUHJvdmlkZXIgfSBmcm9tICcuL2dhbWVDb250ZXh0JztcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8R2FtZVByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvR2FtZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiR2FtZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/gameContext.js":
/*!******************************!*\
  !*** ./pages/gameContext.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GameProvider: () => (/* binding */ GameProvider),\n/* harmony export */   useGameContext: () => (/* binding */ useGameContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst GameContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction GameProvider({ children }) {\n    const [gameConfig, setGameConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        numPlayers: 3,\n        numTokens: 15\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n        value: {\n            gameConfig,\n            setGameConfig\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/tling/Desktop/forsale-frontend/pages/gameContext.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\nconst useGameContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GameContext);\n    if (context === undefined) {\n        throw new Error(\"useGameContext must be used within a GameProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTREO0FBRTVELE1BQU1HLDRCQUFjSCxvREFBYUE7QUFFMUIsU0FBU0ksYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFFdkMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO1FBQzNDTSxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDTixZQUFZTyxRQUFRO1FBQUNDLE9BQU87WUFBRUw7WUFBWUM7UUFBYztrQkFDdERGOzs7Ozs7QUFHUDtBQUVPLE1BQU1PLGlCQUFpQjtJQUMxQixNQUFNQyxVQUFVWixpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSVUsWUFBWUMsV0FBVztRQUN6QixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRjtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JzYWxlLWZyb250ZW5kLy4vcGFnZXMvZ2FtZUNvbnRleHQuanM/MTVlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgR2FtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBHYW1lUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgXG4gIGNvbnN0IFtnYW1lQ29uZmlnLCBzZXRHYW1lQ29uZmlnXSA9IHVzZVN0YXRlKHtcbiAgICBudW1QbGF5ZXJzOiAzLFxuICAgIG51bVRva2VuczogMTVcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8R2FtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZ2FtZUNvbmZpZywgc2V0R2FtZUNvbmZpZyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0dhbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlR2FtZUNvbnRleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoR2FtZUNvbnRleHQpO1xuICAgIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndXNlR2FtZUNvbnRleHQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEdhbWVQcm92aWRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfTsiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkdhbWVDb250ZXh0IiwiR2FtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJnYW1lQ29uZmlnIiwic2V0R2FtZUNvbmZpZyIsIm51bVBsYXllcnMiLCJudW1Ub2tlbnMiLCJQcm92aWRlciIsInZhbHVlIiwidXNlR2FtZUNvbnRleHQiLCJjb250ZXh0IiwidW5kZWZpbmVkIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/gameContext.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();