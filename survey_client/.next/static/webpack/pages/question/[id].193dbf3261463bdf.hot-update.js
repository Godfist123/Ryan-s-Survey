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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionCheckbox.module.scss */ \"./src/components/QuestionComponents/QuestionCheckbox.module.scss\");\n/* harmony import */ var _QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst QuestionCheckbox = (param)=>{\n    let { fe_id, props } = param;\n    _s();\n    const { title, isVertical, list } = props;\n    const [checkedList, setCheckedList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const toggleCheckbox = (value)=>{\n        if (checkedList.includes(value)) {\n            setCheckedList(checkedList.filter((item)=>item !== value));\n        } else {\n            setCheckedList([\n                ...checkedList,\n                value\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list),\n                children: list.map((item, index)=>{\n                    const { value, text, checked } = item;\n                    let className;\n                    if (isVertical) {\n                        className = (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().verticalItem);\n                    } else {\n                        className = (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().horizontalItem);\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: className,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    onChange: ()=>toggleCheckbox(value),\n                                    checked: checkedList.includes(value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, undefined),\n                                text\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, undefined)\n                    }, value, false, {\n                        fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(QuestionCheckbox, \"2+FOXQ9cxolf3xqKTXpoalr+rxc=\");\n_c = QuestionCheckbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCheckbox);\nvar _c;\n$RefreshReg$(_c, \"QuestionCheckbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvUXVlc3Rpb25DaGVja2JveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQzBCO0FBZXBELE1BQU1FLG1CQUFvRDtRQUFDLEVBQ3pEQyxLQUFLLEVBQ0xDLEtBQUssRUFDTjs7SUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsVUFBVSxFQUFFQyxJQUFJLEVBQUUsR0FBR0g7SUFFcEMsTUFBTSxDQUFDSSxhQUFhQyxlQUFlLEdBQUdULHFEQUFjLENBQWdCLEVBQUU7SUFFdEUsTUFBTVcsaUJBQWlCLENBQUNDO1FBQ3RCLElBQUlKLFlBQVlLLFFBQVEsQ0FBQ0QsUUFBUTtZQUMvQkgsZUFBZUQsWUFBWU0sTUFBTSxDQUFDLENBQUNDLE9BQVNBLFNBQVNIO1FBQ3ZELE9BQU87WUFDTEgsZUFBZTttQkFBSUQ7Z0JBQWFJO2FBQU07UUFDeEM7SUFDRjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ0k7MEJBQUdYOzs7Ozs7MEJBQ0osOERBQUNZO2dCQUFHQyxXQUFXakIsMkVBQVc7MEJBQ3ZCTSxLQUFLWSxHQUFHLENBQUMsQ0FBQ0osTUFBTUs7b0JBQ2YsTUFBTSxFQUFFUixLQUFLLEVBQUVTLElBQUksRUFBRUMsT0FBTyxFQUFFLEdBQUdQO29CQUVqQyxJQUFJRztvQkFDSixJQUFJWixZQUFZO3dCQUNkWSxZQUFZakIsbUZBQW1CO29CQUNqQyxPQUFPO3dCQUNMaUIsWUFBWWpCLHFGQUFxQjtvQkFDbkM7b0JBQ0EscUJBQ0UsOERBQUN3Qjt3QkFBZVAsV0FBV0E7a0NBQ3pCLDRFQUFDUTs7OENBQ0MsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxVQUFVLElBQU1sQixlQUFlQztvQ0FDL0JVLFNBQVNkLFlBQVlLLFFBQVEsQ0FBQ0Q7Ozs7OztnQ0FFL0JTOzs7Ozs7O3VCQVBJVDs7Ozs7Z0JBV2I7Ozs7Ozs7O0FBSVI7R0E1Q01WO0tBQUFBO0FBOENOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25Db21wb25lbnRzL1F1ZXN0aW9uQ2hlY2tib3gudHN4PzllMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9RdWVzdGlvbkNoZWNrYm94Lm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBRdWVzdGlvbkNoZWNrYm94UHJvcHMge1xuICBmZV9pZDogc3RyaW5nO1xuICBwcm9wczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaXNWZXJ0aWNhbD86IGJvb2xlYW47XG4gICAgbGlzdDogQXJyYXk8e1xuICAgICAgdmFsdWU6IHN0cmluZztcbiAgICAgIHRleHQ6IHN0cmluZztcbiAgICAgIGNoZWNrZWQ6IGJvb2xlYW47XG4gICAgfT47XG4gIH07XG59XG5cbmNvbnN0IFF1ZXN0aW9uQ2hlY2tib3g6IFJlYWN0LkZDPFF1ZXN0aW9uQ2hlY2tib3hQcm9wcz4gPSAoe1xuICBmZV9pZCxcbiAgcHJvcHMsXG59KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUsIGlzVmVydGljYWwsIGxpc3QgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtjaGVja2VkTGlzdCwgc2V0Q2hlY2tlZExpc3RdID0gUmVhY3QudXNlU3RhdGU8QXJyYXk8c3RyaW5nPj4oW10pO1xuXG4gIGNvbnN0IHRvZ2dsZUNoZWNrYm94ID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoY2hlY2tlZExpc3QuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICBzZXRDaGVja2VkTGlzdChjaGVja2VkTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldENoZWNrZWRMaXN0KFsuLi5jaGVja2VkTGlzdCwgdmFsdWVdKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgIHtsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHZhbHVlLCB0ZXh0LCBjaGVja2VkIH0gPSBpdGVtO1xuXG4gICAgICAgICAgbGV0IGNsYXNzTmFtZTtcbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gc3R5bGVzLnZlcnRpY2FsSXRlbTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gc3R5bGVzLmhvcml6b250YWxJdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17dmFsdWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB0b2dnbGVDaGVja2JveCh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkTGlzdC5pbmNsdWRlcyh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25DaGVja2JveDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlF1ZXN0aW9uQ2hlY2tib3giLCJmZV9pZCIsInByb3BzIiwidGl0bGUiLCJpc1ZlcnRpY2FsIiwibGlzdCIsImNoZWNrZWRMaXN0Iiwic2V0Q2hlY2tlZExpc3QiLCJ1c2VTdGF0ZSIsInRvZ2dsZUNoZWNrYm94IiwidmFsdWUiLCJpbmNsdWRlcyIsImZpbHRlciIsIml0ZW0iLCJwIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInRleHQiLCJjaGVja2VkIiwidmVydGljYWxJdGVtIiwiaG9yaXpvbnRhbEl0ZW0iLCJsaSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/QuestionComponents/QuestionCheckbox.tsx\n"));

/***/ })

});