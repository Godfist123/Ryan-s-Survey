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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionCheckbox.module.scss */ \"./src/components/QuestionComponents/QuestionCheckbox.module.scss\");\n/* harmony import */ var _QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst QuestionCheckbox = (param)=>{\n    let { fe_id, props } = param;\n    _s();\n    const { title, isVertical, list } = props;\n    const [checkedList, setCheckedList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        list.map((item)=>{\n            if (item.checked) {\n                setCheckedList(checkedList.concat(item.value));\n                console.log(checkedList);\n            }\n        });\n    }, [\n        list\n    ]);\n    const toggleCheckbox = (value)=>{\n        if (checkedList.includes(value)) {\n            setCheckedList(checkedList.filter((item)=>item !== value));\n        } else {\n            setCheckedList([\n                ...checkedList,\n                value\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().list),\n                children: list.map((item, index)=>{\n                    const { value, text, checked } = item;\n                    let className;\n                    if (isVertical) {\n                        className = (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().verticalItem);\n                    } else {\n                        className = (_QuestionCheckbox_module_scss__WEBPACK_IMPORTED_MODULE_2___default().horizontalItem);\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: className,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    onChange: ()=>toggleCheckbox(value),\n                                    checked: checkedList.includes(value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                text\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, undefined)\n                    }, value, false, {\n                        fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/renpenghao/Desktop/work-place/Ryan's Survey/survey_client/src/components/QuestionComponents/QuestionCheckbox.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(QuestionCheckbox, \"4TiIKjUr33iGZbm71xEN49SKuio=\");\n_c = QuestionCheckbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionCheckbox);\nvar _c;\n$RefreshReg$(_c, \"QuestionCheckbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvUXVlc3Rpb25DaGVja2JveC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlDO0FBQ1c7QUFlcEQsTUFBTUcsbUJBQW9EO1FBQUMsRUFDekRDLEtBQUssRUFDTEMsS0FBSyxFQUNOOztJQUNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRSxHQUFHSDtJQUVwQyxNQUFNLENBQUNJLGFBQWFDLGVBQWUsR0FBR1YscURBQWMsQ0FBZ0IsRUFBRTtJQUV0RUMsZ0RBQVNBLENBQUM7UUFDUk8sS0FBS0ksR0FBRyxDQUFDLENBQUNDO1lBQ1IsSUFBSUEsS0FBS0MsT0FBTyxFQUFFO2dCQUNoQkosZUFBZUQsWUFBWU0sTUFBTSxDQUFDRixLQUFLRyxLQUFLO2dCQUM1Q0MsUUFBUUMsR0FBRyxDQUFDVDtZQUNkO1FBQ0Y7SUFDRixHQUFHO1FBQUNEO0tBQUs7SUFFVCxNQUFNVyxpQkFBaUIsQ0FBQ0g7UUFDdEIsSUFBSVAsWUFBWVcsUUFBUSxDQUFDSixRQUFRO1lBQy9CTixlQUFlRCxZQUFZWSxNQUFNLENBQUMsQ0FBQ1IsT0FBU0EsU0FBU0c7UUFDdkQsT0FBTztZQUNMTixlQUFlO21CQUFJRDtnQkFBYU87YUFBTTtRQUN4QztJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDTTswQkFBR2hCOzs7Ozs7MEJBQ0osOERBQUNpQjtnQkFBR0MsV0FBV3RCLDJFQUFXOzBCQUN2Qk0sS0FBS0ksR0FBRyxDQUFDLENBQUNDLE1BQU1ZO29CQUNmLE1BQU0sRUFBRVQsS0FBSyxFQUFFVSxJQUFJLEVBQUVaLE9BQU8sRUFBRSxHQUFHRDtvQkFFakMsSUFBSVc7b0JBQ0osSUFBSWpCLFlBQVk7d0JBQ2RpQixZQUFZdEIsbUZBQW1CO29CQUNqQyxPQUFPO3dCQUNMc0IsWUFBWXRCLHFGQUFxQjtvQkFDbkM7b0JBQ0EscUJBQ0UsOERBQUMyQjt3QkFBZUwsV0FBV0E7a0NBQ3pCLDRFQUFDTTs7OENBQ0MsOERBQUNDO29DQUNDQyxNQUFLO29DQUNMQyxVQUFVLElBQU1kLGVBQWVIO29DQUMvQkYsU0FBU0wsWUFBWVcsUUFBUSxDQUFDSjs7Ozs7O2dDQUUvQlU7Ozs7Ozs7dUJBUElWOzs7OztnQkFXYjs7Ozs7Ozs7QUFJUjtHQXRETWI7S0FBQUE7QUF3RE4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkNvbXBvbmVudHMvUXVlc3Rpb25DaGVja2JveC50c3g/OWUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1F1ZXN0aW9uQ2hlY2tib3gubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIFF1ZXN0aW9uQ2hlY2tib3hQcm9wcyB7XG4gIGZlX2lkOiBzdHJpbmc7XG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpc1ZlcnRpY2FsPzogYm9vbGVhbjtcbiAgICBsaXN0OiBBcnJheTx7XG4gICAgICB2YWx1ZTogc3RyaW5nO1xuICAgICAgdGV4dDogc3RyaW5nO1xuICAgICAgY2hlY2tlZDogYm9vbGVhbjtcbiAgICB9PjtcbiAgfTtcbn1cblxuY29uc3QgUXVlc3Rpb25DaGVja2JveDogUmVhY3QuRkM8UXVlc3Rpb25DaGVja2JveFByb3BzPiA9ICh7XG4gIGZlX2lkLFxuICBwcm9wcyxcbn0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSwgaXNWZXJ0aWNhbCwgbGlzdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2NoZWNrZWRMaXN0LCBzZXRDaGVja2VkTGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxBcnJheTxzdHJpbmc+PihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICBzZXRDaGVja2VkTGlzdChjaGVja2VkTGlzdC5jb25jYXQoaXRlbS52YWx1ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhjaGVja2VkTGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtsaXN0XSk7XG5cbiAgY29uc3QgdG9nZ2xlQ2hlY2tib3ggPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmIChjaGVja2VkTGlzdC5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIHNldENoZWNrZWRMaXN0KGNoZWNrZWRMaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q2hlY2tlZExpc3QoWy4uLmNoZWNrZWRMaXN0LCB2YWx1ZV0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cD57dGl0bGV9PC9wPlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB2YWx1ZSwgdGV4dCwgY2hlY2tlZCB9ID0gaXRlbTtcblxuICAgICAgICAgIGxldCBjbGFzc05hbWU7XG4gICAgICAgICAgaWYgKGlzVmVydGljYWwpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHN0eWxlcy52ZXJ0aWNhbEl0ZW07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHN0eWxlcy5ob3Jpem9udGFsSXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaSBrZXk9e3ZhbHVlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gdG9nZ2xlQ2hlY2tib3godmFsdWUpfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZExpc3QuaW5jbHVkZXModmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uQ2hlY2tib3g7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJRdWVzdGlvbkNoZWNrYm94IiwiZmVfaWQiLCJwcm9wcyIsInRpdGxlIiwiaXNWZXJ0aWNhbCIsImxpc3QiLCJjaGVja2VkTGlzdCIsInNldENoZWNrZWRMaXN0IiwidXNlU3RhdGUiLCJtYXAiLCJpdGVtIiwiY2hlY2tlZCIsImNvbmNhdCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZUNoZWNrYm94IiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJwIiwidWwiLCJjbGFzc05hbWUiLCJpbmRleCIsInRleHQiLCJ2ZXJ0aWNhbEl0ZW0iLCJob3Jpem9udGFsSXRlbSIsImxpIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/QuestionComponents/QuestionCheckbox.tsx\n"));

/***/ })

});