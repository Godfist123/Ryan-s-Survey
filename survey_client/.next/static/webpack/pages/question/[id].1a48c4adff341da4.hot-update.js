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

/***/ "./src/components/QuestionComponents/QuestionCheckbox.tsx":
/*!****************************************************************!*\
  !*** ./src/components/QuestionComponents/QuestionCheckbox.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionCheckbox.module.scss */ \"./src/components/QuestionComponents/QuestionCheckbox.module.scss\");\n/* harmony import */ var _QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst QuestionCheckbox = (param)=>{\n    let { fe_id, props } = param;\n    _s();\n    const { title, isVertical, list } = props;\n    const [checkedList, setCheckedList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        list.map((item)=>{\n            const newCheckedList = list.filter((item)=>item.checked).map((item)=>item.value);\n            setCheckedList(newCheckedList);\n        });\n    }, [\n        list\n    ]);\n    const toggleCheckbox = (value)=>{\n        if (checkedList.includes(value)) {\n            setCheckedList(checkedList.filter((item)=>item !== value));\n        } else {\n            setCheckedList([\n                ...checkedList,\n                value\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"hidden\",\n                name: fe_id,\n                value: checkedList.join(\",\")\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list),\n                children: list.map((item, index)=>{\n                    const { value, text, checked } = item;\n                    let className;\n                    if (isVertical) {\n                        className = (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().verticalItem);\n                    } else {\n                        className = (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().horizontalItem);\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: className,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    onChange: ()=>toggleCheckbox(value),\n                                    checked: checkedList.includes(value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                text\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, undefined)\n                    }, value, false, {\n                        fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(QuestionCheckbox, \"4TiIKjUr33iGZbm71xEN49SKuio=\");\n_c = QuestionCheckbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCheckbox);\nvar _c;\n$RefreshReg$(_c, \"QuestionCheckbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvUXVlc3Rpb25DaGVja2JveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ1c7QUFlcEQsTUFBTUcsbUJBQW9EO1FBQUMsRUFDekRDLEtBQUssRUFDTEMsS0FBSyxFQUNOOztJQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRSxHQUFHSDtJQUVwQyxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR1YscURBQWMsQ0FBZ0IsRUFBRTtJQUV0RUMsZ0RBQVNBLENBQUM7UUFDUk8sS0FBS0ksR0FBRyxDQUFDLENBQUNDO1lBQ1IsTUFBTUMsaUJBQWlCTixLQUNwQk8sTUFBTSxDQUFDLENBQUNGLE9BQVNBLEtBQUtHLE9BQU8sRUFDN0JKLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLSSxLQUFLO1lBQzNCUCxlQUFlSTtRQUNqQjtJQUNGLEdBQUc7UUFBQ047S0FBSztJQUVULE1BQU1VLGlCQUFpQixDQUFDRDtRQUN0QixJQUFJUixZQUFZVSxRQUFRLENBQUNGLFFBQVE7WUFDL0JQLGVBQWVELFlBQVlNLE1BQU0sQ0FBQyxDQUFDRixPQUFTQSxTQUFTSTtRQUN2RCxPQUFPO1lBQ0xQLGVBQWU7bUJBQUlEO2dCQUFhUTthQUFNO1FBQ3hDO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNHOzBCQUFHZDs7Ozs7OzBCQUNKLDhEQUFDZTtnQkFBTUMsTUFBSztnQkFBU0MsTUFBTW5CO2dCQUFPYSxPQUFPUixZQUFZZSxJQUFJLENBQUM7Ozs7OzswQkFDMUQsOERBQUNDO2dCQUFHQyxXQUFXeEIsMkVBQVc7MEJBQ3ZCTSxLQUFLSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTWM7b0JBQ2YsTUFBTSxFQUFFVixLQUFLLEVBQUVXLElBQUksRUFBRVosT0FBTyxFQUFFLEdBQUdIO29CQUVqQyxJQUFJYTtvQkFDSixJQUFJbkIsWUFBWTt3QkFDZG1CLFlBQVl4QixtRkFBbUI7b0JBQ2pDLE9BQU87d0JBQ0x3QixZQUFZeEIscUZBQXFCO29CQUNuQztvQkFDQSxxQkFDRSw4REFBQzZCO3dCQUFlTCxXQUFXQTtrQ0FDekIsNEVBQUNNOzs4Q0FDQyw4REFBQ1g7b0NBQ0NDLE1BQUs7b0NBQ0xXLFVBQVUsSUFBTWYsZUFBZUQ7b0NBQy9CRCxTQUFTUCxZQUFZVSxRQUFRLENBQUNGOzs7Ozs7Z0NBRS9CVzs7Ozs7Ozt1QkFQSVg7Ozs7O2dCQVdiOzs7Ozs7OztBQUlSO0dBdkRNZDtLQUFBQTtBQXlETiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uQ29tcG9uZW50cy9RdWVzdGlvbkNoZWNrYm94LnRzeD85ZTJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUXVlc3Rpb25DaGVja2JveC5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgUXVlc3Rpb25DaGVja2JveFByb3BzIHtcbiAgZmVfaWQ6IHN0cmluZztcbiAgcHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlzVmVydGljYWw/OiBib29sZWFuO1xuICAgIGxpc3Q6IEFycmF5PHtcbiAgICAgIHZhbHVlOiBzdHJpbmc7XG4gICAgICB0ZXh0OiBzdHJpbmc7XG4gICAgICBjaGVja2VkOiBib29sZWFuO1xuICAgIH0+O1xuICB9O1xufVxuXG5jb25zdCBRdWVzdGlvbkNoZWNrYm94OiBSZWFjdC5GQzxRdWVzdGlvbkNoZWNrYm94UHJvcHM+ID0gKHtcbiAgZmVfaWQsXG4gIHByb3BzLFxufSkgPT4ge1xuICBjb25zdCB7IHRpdGxlLCBpc1ZlcnRpY2FsLCBsaXN0IH0gPSBwcm9wcztcblxuICBjb25zdCBbY2hlY2tlZExpc3QsIHNldENoZWNrZWRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBuZXdDaGVja2VkTGlzdCA9IGxpc3RcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jaGVja2VkKVxuICAgICAgICAubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcbiAgICAgIHNldENoZWNrZWRMaXN0KG5ld0NoZWNrZWRMaXN0KTtcbiAgICB9KTtcbiAgfSwgW2xpc3RdKTtcblxuICBjb25zdCB0b2dnbGVDaGVja2JveCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGNoZWNrZWRMaXN0LmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgc2V0Q2hlY2tlZExpc3QoY2hlY2tlZExpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSB2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDaGVja2VkTGlzdChbLi4uY2hlY2tlZExpc3QsIHZhbHVlXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e2ZlX2lkfSB2YWx1ZT17Y2hlY2tlZExpc3Quam9pbihcIixcIil9IC8+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgIHtsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlLCB0ZXh0LCBjaGVja2VkIH0gPSBpdGVtO1xuXG4gICAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gc3R5bGVzLnZlcnRpY2FsSXRlbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gc3R5bGVzLmhvcml6b250YWxJdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17dmFsdWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVDaGVja2JveCh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkTGlzdC5pbmNsdWRlcyh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25DaGVja2JveDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlF1ZXN0aW9uQ2hlY2tib3giLCJmZV9pZCIsInByb3BzIiwidGl0bGUiLCJpc1ZlcnRpY2FsIiwibGlzdCIsImNoZWNrZWRMaXN0Iiwic2V0Q2hlY2tlZExpc3QiLCJ1c2VTdGF0ZSIsIm1hcCIsIml0ZW0iLCJuZXdDaGVja2VkTGlzdCIsImZpbHRlciIsImNoZWNrZWQiLCJ2YWx1ZSIsInRvZ2dsZUNoZWNrYm94IiwiaW5jbHVkZXMiLCJwIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImpvaW4iLCJ1bCIsImNsYXNzTmFtZSIsImluZGV4IiwidGV4dCIsInZlcnRpY2FsSXRlbSIsImhvcml6b250YWxJdGVtIiwibGkiLCJsYWJlbCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/QuestionComponents/QuestionCheckbox.tsx\n"));

/***/ })

});