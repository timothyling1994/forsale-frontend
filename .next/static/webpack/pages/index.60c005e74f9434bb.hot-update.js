"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: createPrivateRoom,\n            children: \"Create Private Room\"\n        }, void 0, false, {\n            fileName: \"/Users/tling/Desktop/forsale-frontend/pages/index.js\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tling/Desktop/forsale-frontend/pages/index.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Home;\nconst createPrivateRoom = async ()=>{\n    console.log(\"reach\");\n    try {\n        let response = await fetch(\"http://localhost:8080/createRoom\", {\n            //let response = await fetch('https://collab-drums-backend.herokuapp.com/create-public-room',{\n            method: \"POST\",\n            mode: \"cors\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        response = await response.json();\n        console.log(response);\n    } catch (e) {\n        console.error(e);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsT0FBTztJQUVYLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBT0MsU0FBU0M7c0JBQW1COzs7Ozs7Ozs7OztBQUcxQztLQVBNSjtBQVNOLE1BQU1JLG9CQUFvQjtJQUN0QkMsUUFBUUMsR0FBRyxDQUFDO0lBQ1osSUFBSTtRQUNGLElBQUlDLFdBQVcsTUFBTUMsTUFBTSxvQ0FBbUM7WUFDNUQsOEZBQThGO1lBQzVGQyxRQUFRO1lBQ1JDLE1BQU07WUFDTkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFFSjtRQUNBSixXQUFXLE1BQU1BLFNBQVNLLElBQUk7UUFDOUJQLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDZCxFQUNBLE9BQU1NLEdBQUU7UUFDTlIsUUFBUVMsS0FBSyxDQUFDRDtJQUNoQjtBQUNKO0FBRUEsK0RBQWViLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlUHJpdmF0ZVJvb219PkNyZWF0ZSBQcml2YXRlIFJvb208L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByaXZhdGVSb29tID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicmVhY2hcIik7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvY3JlYXRlUm9vbScse1xuICAgICAgICAvL2xldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2NvbGxhYi1kcnVtcy1iYWNrZW5kLmhlcm9rdWFwcC5jb20vY3JlYXRlLXB1YmxpYy1yb29tJyx7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuXG4gICAgICB9KTtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIb21lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImNyZWF0ZVByaXZhdGVSb29tIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJtb2RlIiwiaGVhZGVycyIsImpzb24iLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});