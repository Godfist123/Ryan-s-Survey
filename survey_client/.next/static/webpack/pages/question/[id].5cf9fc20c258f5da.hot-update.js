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

/***/ "./src/components/QuestionComponents/QuestionRadio.tsx":
/*!*************************************************************!*\
  !*** ./src/components/QuestionComponents/QuestionRadio.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuestionRadio_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionRadio.module.scss */ \"./src/components/QuestionComponents/QuestionRadio.module.scss\");\n/* harmony import */ var _QuestionRadio_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_QuestionRadio_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst QuestionRadio = (param)=>{\n    let { fe_id, props } = param;\n    const { title, options, value, isVertical } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionRadio.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_QuestionRadio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list),\n                children: options.map((option)=>{\n                    let liClassName = \"\";\n                    if (isVertical) {\n                        liClassName = (_QuestionRadio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().verticalItem);\n                    } else {\n                        liClassName = (_QuestionRadio_module_scss__WEBPACK_IMPORTED_MODULE_2___default().horizontalItem);\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: liClassName,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"radio\",\n                                    name: fe_id,\n                                    value: option.value,\n                                    defaultChecked: value === option.value\n                                }, void 0, false, {\n                                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionRadio.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, undefined),\n                                option.text\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionRadio.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, undefined)\n                    }, option.value, false, {\n                        fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionRadio.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionRadio.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionRadio.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = QuestionRadio;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionRadio);\nvar _c;\n$RefreshReg$(_c, \"QuestionRadio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvUXVlc3Rpb25SYWRpby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFDdUI7QUFlakQsTUFBTUUsZ0JBQThDO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUU7SUFDbkUsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUUsR0FBR0o7SUFDOUMscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0M7MEJBQUdMOzs7Ozs7MEJBQ0osOERBQUNNO2dCQUFHQyxXQUFXWCx3RUFBVzswQkFDdkJLLFFBQVFRLEdBQUcsQ0FBQyxDQUFDQztvQkFDWixJQUFJQyxjQUFjO29CQUNsQixJQUFJUixZQUFZO3dCQUNkUSxjQUFjZixnRkFBbUI7b0JBQ25DLE9BQU87d0JBQ0xlLGNBQWNmLGtGQUFxQjtvQkFDckM7b0JBQ0EscUJBQ0UsOERBQUNrQjt3QkFBc0JQLFdBQVdJO2tDQUNoQyw0RUFBQ0k7OzhDQUNDLDhEQUFDQztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBTXBCO29DQUNOSSxPQUFPUSxPQUFPUixLQUFLO29DQUNuQmlCLGdCQUFnQmpCLFVBQVVRLE9BQU9SLEtBQUs7Ozs7OztnQ0FFdkNRLE9BQU9VLElBQUk7Ozs7Ozs7dUJBUlBWLE9BQU9SLEtBQUs7Ozs7O2dCQVl6Qjs7Ozs7Ozs7Ozs7O0FBSVI7S0E5Qk1MO0FBZ0NOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uQ29tcG9uZW50cy9RdWVzdGlvblJhZGlvLnRzeD83NGRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUXVlc3Rpb25SYWRpby5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgUXVlc3Rpb25SYWRpb1Byb3BzIHtcbiAgZmVfaWQ6IHN0cmluZztcbiAgcHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG9wdGlvbnM6IEFycmF5PHtcbiAgICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgfT47XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBpc1ZlcnRpY2FsOiBib29sZWFuO1xuICB9O1xufVxuXG5jb25zdCBRdWVzdGlvblJhZGlvOiBSZWFjdC5GQzxRdWVzdGlvblJhZGlvUHJvcHM+ID0gKHsgZmVfaWQsIHByb3BzIH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgb3B0aW9ucywgdmFsdWUsIGlzVmVydGljYWwgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgIGxldCBsaUNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIGxpQ2xhc3NOYW1lID0gc3R5bGVzLnZlcnRpY2FsSXRlbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlDbGFzc05hbWUgPSBzdHlsZXMuaG9yaXpvbnRhbEl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGkga2V5PXtvcHRpb24udmFsdWV9IGNsYXNzTmFtZT17bGlDbGFzc05hbWV9PlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT17ZmVfaWR9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9uLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e3ZhbHVlID09PSBvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7b3B0aW9uLnRleHR9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uUmFkaW87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJRdWVzdGlvblJhZGlvIiwiZmVfaWQiLCJwcm9wcyIsInRpdGxlIiwib3B0aW9ucyIsInZhbHVlIiwiaXNWZXJ0aWNhbCIsImRpdiIsInAiLCJ1bCIsImNsYXNzTmFtZSIsImxpc3QiLCJtYXAiLCJvcHRpb24iLCJsaUNsYXNzTmFtZSIsInZlcnRpY2FsSXRlbSIsImhvcml6b250YWxJdGVtIiwibGkiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJkZWZhdWx0Q2hlY2tlZCIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/QuestionComponents/QuestionRadio.tsx\n"));

/***/ })

});