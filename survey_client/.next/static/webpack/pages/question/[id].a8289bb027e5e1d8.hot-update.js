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

/***/ "./src/pages/question/[id].tsx":
/*!*************************************!*\
  !*** ./src/pages/question/[id].tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Question; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_QuestionComponents_QuestionInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/QuestionComponents/QuestionInput */ \"./src/components/QuestionComponents/QuestionInput.tsx\");\n/* harmony import */ var _components_QuestionComponents_QuestionRadio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/QuestionComponents/QuestionRadio */ \"./src/components/QuestionComponents/QuestionRadio.tsx\");\n/* harmony import */ var _components_PageWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageWrapper */ \"./src/components/PageWrapper.tsx\");\n\n\n\n\nvar __N_SSP = true;\nfunction Question(props) {\n    const { errno, data, msg = \"\" } = props;\n    const { id, title = \"\" } = data || {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        title: title,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            method: \"post\",\n            action: \"/api/answer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"hidden\",\n                    name: \"questionId\",\n                    value: id\n                }, void 0, false, {\n                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/pages/question/[id].tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionComponents_QuestionInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    fe_id: \"c1\",\n                    props: {\n                        title: \"Question\",\n                        placeholder: \"test\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/pages/question/[id].tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_QuestionComponents_QuestionRadio__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    fe_id: \"c2\",\n                    props: {\n                        title: \"Question\",\n                        options: [\n                            {\n                                value: \"male\",\n                                text: \"male\"\n                            },\n                            {\n                                value: \"female\",\n                                text: \"female\"\n                            }\n                        ],\n                        value: \"male\",\n                        isVertical: false\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/pages/question/[id].tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/pages/question/[id].tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/pages/question/[id].tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/pages/question/[id].tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = Question;\nvar _c;\n$RefreshReg$(_c, \"Question\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVlc3Rpb24vW2lkXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEU7QUFDQTtBQUl2Qjs7QUFpQnBDLFNBQVNHLFNBQVNDLEtBQW9CO0lBQ25ELE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxFQUFFLEdBQUdIO0lBQ2xDLE1BQU0sRUFBRUksRUFBRSxFQUFFQyxRQUFRLEVBQUUsRUFBRSxHQUFHSCxRQUFRLENBQUM7SUFDcEMscUJBQ0UsOERBQUNKLCtEQUFXQTtRQUFDTyxPQUFPQTtrQkFDbEIsNEVBQUNDO1lBQUtDLFFBQU87WUFBT0MsUUFBTzs7OEJBQ3pCLDhEQUFDQztvQkFBTUMsTUFBSztvQkFBU0MsTUFBSztvQkFBYUMsT0FBT1I7Ozs7Ozs4QkFDOUMsOERBQUNSLG9GQUFhQTtvQkFDWmlCLE9BQU07b0JBQ05iLE9BQU87d0JBQUVLLE9BQU87d0JBQVlTLGFBQWE7b0JBQU87Ozs7Ozs4QkFFbEQsOERBQUNqQixvRkFBYUE7b0JBQ1pnQixPQUFNO29CQUNOYixPQUFPO3dCQUNMSyxPQUFPO3dCQUNQVSxTQUFTOzRCQUNQO2dDQUFFSCxPQUFPO2dDQUFRSSxNQUFNOzRCQUFPOzRCQUM5QjtnQ0FBRUosT0FBTztnQ0FBVUksTUFBTTs0QkFBUzt5QkFDbkM7d0JBQ0RKLE9BQU87d0JBQ1BLLFlBQVk7b0JBQ2Q7Ozs7Ozs4QkFFRiw4REFBQ0M7b0JBQU9SLE1BQUs7OEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0tBM0J3QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1ZXN0aW9uL1tpZF0udHN4P2Y1ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXN0aW9uSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvUXVlc3Rpb25JbnB1dFwiO1xuaW1wb3J0IFF1ZXN0aW9uUmFkaW8gZnJvbSBcIkAvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvUXVlc3Rpb25SYWRpb1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9xdWVzdGlvbi5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgZ2V0UXVlc3Rpb25CeUlkIH0gZnJvbSBcIkAvc2VydmljZS9xdWVzdGlvblwiO1xuaW1wb3J0IFBhZ2VXcmFwcGVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZVdyYXBwZXJcIjtcblxuaW50ZXJmYWNlIFF1ZXN0aW9uUHJvcHMge1xuICBlcnJubzogbnVtYmVyO1xuICBkYXRhPzoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjPzogc3RyaW5nO1xuICAgIGpzPzogc3RyaW5nO1xuICAgIGNzcz86IHN0cmluZztcbiAgICBpc1B1Ymxpc2hlZDogYm9vbGVhbjtcbiAgICBpc0RlbGV0ZWQ6IGJvb2xlYW47XG4gICAgY29tcG9uZW50TGlzdDogYW55W107XG4gIH07XG4gIG1zZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVlc3Rpb24ocHJvcHM6IFF1ZXN0aW9uUHJvcHMpIHtcbiAgY29uc3QgeyBlcnJubywgZGF0YSwgbXNnID0gXCJcIiB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIHRpdGxlID0gXCJcIiB9ID0gZGF0YSB8fCB7fTtcbiAgcmV0dXJuIChcbiAgICA8UGFnZVdyYXBwZXIgdGl0bGU9e3RpdGxlfT5cbiAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCIvYXBpL2Fuc3dlclwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJxdWVzdGlvbklkXCIgdmFsdWU9e2lkfSAvPlxuICAgICAgICA8UXVlc3Rpb25JbnB1dFxuICAgICAgICAgIGZlX2lkPVwiYzFcIlxuICAgICAgICAgIHByb3BzPXt7IHRpdGxlOiBcIlF1ZXN0aW9uXCIsIHBsYWNlaG9sZGVyOiBcInRlc3RcIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8UXVlc3Rpb25SYWRpb1xuICAgICAgICAgIGZlX2lkPVwiYzJcIlxuICAgICAgICAgIHByb3BzPXt7XG4gICAgICAgICAgICB0aXRsZTogXCJRdWVzdGlvblwiLFxuICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICB7IHZhbHVlOiBcIm1hbGVcIiwgdGV4dDogXCJtYWxlXCIgfSxcbiAgICAgICAgICAgICAgeyB2YWx1ZTogXCJmZW1hbGVcIiwgdGV4dDogXCJmZW1hbGVcIiB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHZhbHVlOiBcIm1hbGVcIixcbiAgICAgICAgICAgIGlzVmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvUGFnZVdyYXBwZXI+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogYW55KSB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucGFyYW1zO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRRdWVzdGlvbkJ5SWQoaWQpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IC4uLmRhdGEgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVzdGlvbklucHV0IiwiUXVlc3Rpb25SYWRpbyIsIlBhZ2VXcmFwcGVyIiwiUXVlc3Rpb24iLCJwcm9wcyIsImVycm5vIiwiZGF0YSIsIm1zZyIsImlkIiwidGl0bGUiLCJmb3JtIiwibWV0aG9kIiwiYWN0aW9uIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiZmVfaWQiLCJwbGFjZWhvbGRlciIsIm9wdGlvbnMiLCJ0ZXh0IiwiaXNWZXJ0aWNhbCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/question/[id].tsx\n"));

/***/ })

});