"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/question/[id]",{

/***/ "./src/components/QuestionComponents/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/QuestionComponents/index.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComponent: function() { return /* binding */ getComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _QuestionInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionInfo */ \"./src/components/QuestionComponents/QuestionInfo.tsx\");\n/* harmony import */ var _QuestionInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionInput */ \"./src/components/QuestionComponents/QuestionInput.tsx\");\n/* harmony import */ var _QuestionParagraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionParagraph */ \"./src/components/QuestionComponents/QuestionParagraph.tsx\");\n/* harmony import */ var _QuestionRadio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuestionRadio */ \"./src/components/QuestionComponents/QuestionRadio.tsx\");\n/* harmony import */ var _QuestionTextarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QuestionTextarea */ \"./src/components/QuestionComponents/QuestionTextarea.tsx\");\n/* harmony import */ var _QuestionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QuestionTitle */ \"./src/components/QuestionComponents/QuestionTitle.tsx\");\n\n\n\n\n\n\n\nconst getComponent = (comp)=>{\n    const { fe_id, type, props = {}, isHidden } = comp;\n    if (isHidden) {\n        return null;\n    }\n    if (type === \"QuestionInput\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            fe_id: fe_id,\n            props: props\n        }, void 0, false, {\n            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (type === \"QuestionRadio\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionRadio__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            fe_id: fe_id,\n            props: props\n        }, void 0, false, {\n            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/index.tsx\",\n            lineNumber: 27,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (type === \"QuestionTitle\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionTitle__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (type === \"QuestionParagraph\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionParagraph__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/index.tsx\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (type === \"QuestionInfo\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/index.tsx\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (type === \"TextArea\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_QuestionTextarea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            fe_id: fe_id,\n            props: props\n        }, void 0, false, {\n            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/index.tsx\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, undefined);\n    }\n    return null;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDRTtBQUNRO0FBQ1I7QUFDTTtBQUNOO0FBVXJDLE1BQU1NLGVBQWUsQ0FBQ0M7SUFDM0IsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsUUFBUSxDQUFDLENBQUMsRUFBRUMsUUFBUSxFQUFFLEdBQUdKO0lBQzlDLElBQUlJLFVBQVU7UUFDWixPQUFPO0lBQ1Q7SUFFQSxJQUFJRixTQUFTLGlCQUFpQjtRQUM1QixxQkFBTyw4REFBQ1Isc0RBQWFBO1lBQUNPLE9BQU9BO1lBQU9FLE9BQU9BOzs7Ozs7SUFDN0M7SUFFQSxJQUFJRCxTQUFTLGlCQUFpQjtRQUM1QixxQkFBTyw4REFBQ04sc0RBQWFBO1lBQUNLLE9BQU9BO1lBQU9FLE9BQU9BOzs7Ozs7SUFDN0M7SUFFQSxJQUFJRCxTQUFTLGlCQUFpQjtRQUM1QixxQkFBTyw4REFBQ0osc0RBQWFBO1lBQUUsR0FBR0ssS0FBSzs7Ozs7O0lBQ2pDO0lBRUEsSUFBSUQsU0FBUyxxQkFBcUI7UUFDaEMscUJBQU8sOERBQUNQLDBEQUFpQkE7WUFBRSxHQUFHUSxLQUFLOzs7Ozs7SUFDckM7SUFFQSxJQUFJRCxTQUFTLGdCQUFnQjtRQUMzQixxQkFBTyw4REFBQ1QscURBQVlBO1lBQUUsR0FBR1UsS0FBSzs7Ozs7O0lBQ2hDO0lBRUEsSUFBSUQsU0FBUyxZQUFZO1FBQ3ZCLHFCQUFPLDhEQUFDTCx5REFBZ0JBO1lBQUNJLE9BQU9BO1lBQU9FLE9BQU9BOzs7Ozs7SUFDaEQ7SUFDQSxPQUFPO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvaW5kZXgudHN4Pzg5MzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXN0aW9uSW5mbyBmcm9tIFwiLi9RdWVzdGlvbkluZm9cIjtcbmltcG9ydCBRdWVzdGlvbklucHV0IGZyb20gXCIuL1F1ZXN0aW9uSW5wdXRcIjtcbmltcG9ydCBRdWVzdGlvblBhcmFncmFwaCBmcm9tIFwiLi9RdWVzdGlvblBhcmFncmFwaFwiO1xuaW1wb3J0IFF1ZXN0aW9uUmFkaW8gZnJvbSBcIi4vUXVlc3Rpb25SYWRpb1wiO1xuaW1wb3J0IFF1ZXN0aW9uVGV4dGFyZWEgZnJvbSBcIi4vUXVlc3Rpb25UZXh0YXJlYVwiO1xuaW1wb3J0IFF1ZXN0aW9uVGl0bGUgZnJvbSBcIi4vUXVlc3Rpb25UaXRsZVwiO1xuXG50eXBlIENvbXBvbmVudEluZm9UeXBlID0ge1xuICBmZV9pZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIC8vdGl0bGU6IHN0cmluZztcbiAgaXNIaWRkZW46IGJvb2xlYW47XG4gIHByb3BzOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50ID0gKGNvbXA6IENvbXBvbmVudEluZm9UeXBlKSA9PiB7XG4gIGNvbnN0IHsgZmVfaWQsIHR5cGUsIHByb3BzID0ge30sIGlzSGlkZGVuIH0gPSBjb21wO1xuICBpZiAoaXNIaWRkZW4pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlID09PSBcIlF1ZXN0aW9uSW5wdXRcIikge1xuICAgIHJldHVybiA8UXVlc3Rpb25JbnB1dCBmZV9pZD17ZmVfaWR9IHByb3BzPXtwcm9wc30gLz47XG4gIH1cblxuICBpZiAodHlwZSA9PT0gXCJRdWVzdGlvblJhZGlvXCIpIHtcbiAgICByZXR1cm4gPFF1ZXN0aW9uUmFkaW8gZmVfaWQ9e2ZlX2lkfSBwcm9wcz17cHJvcHN9IC8+O1xuICB9XG5cbiAgaWYgKHR5cGUgPT09IFwiUXVlc3Rpb25UaXRsZVwiKSB7XG4gICAgcmV0dXJuIDxRdWVzdGlvblRpdGxlIHsuLi5wcm9wc30gLz47XG4gIH1cblxuICBpZiAodHlwZSA9PT0gXCJRdWVzdGlvblBhcmFncmFwaFwiKSB7XG4gICAgcmV0dXJuIDxRdWVzdGlvblBhcmFncmFwaCB7Li4ucHJvcHN9IC8+O1xuICB9XG5cbiAgaWYgKHR5cGUgPT09IFwiUXVlc3Rpb25JbmZvXCIpIHtcbiAgICByZXR1cm4gPFF1ZXN0aW9uSW5mbyB7Li4ucHJvcHN9IC8+O1xuICB9XG5cbiAgaWYgKHR5cGUgPT09IFwiVGV4dEFyZWFcIikge1xuICAgIHJldHVybiA8UXVlc3Rpb25UZXh0YXJlYSBmZV9pZD17ZmVfaWR9IHByb3BzPXtwcm9wc30gLz47XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbIlF1ZXN0aW9uSW5mbyIsIlF1ZXN0aW9uSW5wdXQiLCJRdWVzdGlvblBhcmFncmFwaCIsIlF1ZXN0aW9uUmFkaW8iLCJRdWVzdGlvblRleHRhcmVhIiwiUXVlc3Rpb25UaXRsZSIsImdldENvbXBvbmVudCIsImNvbXAiLCJmZV9pZCIsInR5cGUiLCJwcm9wcyIsImlzSGlkZGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/QuestionComponents/index.tsx\n"));

/***/ })

});