"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/api/register/page",{

/***/ "(app-pages-browser)/./src/app/api/register/page.tsx":
/*!***************************************!*\
  !*** ./src/app/api/register/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"submit\");\n        const submitData = {\n            email,\n            password\n        }; //data tot submit\n        try {\n            const res = await fetch(\"http://localhost:3000/login\", {\n                credentials: \"include\",\n                cache: \"no-store\",\n                method: \"POST\",\n                body: JSON.stringify(submitData),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (res.ok) {\n                console.log(\"ok\");\n            //router.push('dashboard/dashboardIndex');\n            } else {\n                console.log(\"not ok\");\n            }\n        //res.ok ? console.log(\"ok\") : console.log(\"not ok\")\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block bg-gray-700  text-white text-sm font-bold p-2 shadow-md rounded-t\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"email\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 24\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"email\",\n                                        type: \"email\",\n                                        placeholder: \"Email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 24\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"password\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 24\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"password\",\n                                        type: \"password\",\n                                        placeholder: \"Password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 24\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-gray-500  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                    type: \"submit\",\n                                    children: \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 24\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 20\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 16\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"... or register \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                className: \"font-bold text-gray-500 hover:text-gray-700\",\n                                href: \"/api/register\",\n                                children: \"here\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 37\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 16\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 16\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n            lineNumber: 49,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"TSZhDBNy8CmbxXgprY/vvMmTG1Q=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3JlZ2lzdGVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUU0QztBQUU1QyxNQUFNQyxPQUFPOztJQUVULE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFHakQsTUFBTU0sZUFBZSxPQUFPQztRQUV4QkEsRUFBRUMsY0FBYztRQUVoQkMsUUFBUUMsR0FBRyxDQUFDO1FBRVosTUFBTUMsYUFBYTtZQUFFVDtZQUFPRTtRQUFTLEdBQUUsaUJBQWlCO1FBRXhELElBQUk7WUFFQSxNQUFNUSxNQUFNLE1BQU1DLE1BQU0sK0JBQStCO2dCQUNuREMsYUFBWTtnQkFDWkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUjtnQkFDckJTLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtZQUNKO1lBRUEsSUFBSVIsSUFBSVMsRUFBRSxFQUFFO2dCQUNSWixRQUFRQyxHQUFHLENBQUM7WUFDWiwwQ0FBMEM7WUFDOUMsT0FBTztnQkFDSEQsUUFBUUMsR0FBRyxDQUFDO1lBQ2hCO1FBQ0Esb0RBQW9EO1FBQ3hELEVBQUUsT0FBT1ksT0FBTztZQUNaYixRQUFRQyxHQUFHLENBQUNZO1FBQ2hCO0lBRUo7SUFHQSxxQkFFSTtrQkFFUiw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFFQSw0RUFBQ0Q7O2tDQUNELDhEQUFDQTt3QkFBSUMsV0FBVTtrQ0FBMEU7Ozs7OztrQ0FDekYsOERBQUNDO3dCQUFLQyxVQUFVcEI7d0JBQWNrQixXQUFVOzswQ0FDcEMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0c7d0NBQU1ILFdBQVU7d0NBQTZDSSxTQUFRO2tEQUFROzs7Ozs7a0RBRzlFLDhEQUFDQzt3Q0FDR0wsV0FBVTt3Q0FDVk0sSUFBRzt3Q0FDSEMsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWkMsT0FBTy9CO3dDQUNQZ0MsVUFBVSxDQUFDM0IsSUFBTUosU0FBU0ksRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDeENHLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FJaEIsOERBQUNiO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0c7d0NBQU1ILFdBQVU7d0NBQTZDSSxTQUFRO2tEQUFXOzs7Ozs7a0RBR2pGLDhEQUFDQzt3Q0FDR0wsV0FBVTt3Q0FDVk0sSUFBRzt3Q0FDSEMsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWkMsT0FBTzdCO3dDQUNQOEIsVUFBVSxDQUFDM0IsSUFBTUYsWUFBWUUsRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDM0NHLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FJaEIsOERBQUNiO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDYTtvQ0FDR2IsV0FBVTtvQ0FDVk8sTUFBSzs4Q0FDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS1QsOERBQUNSOzs0QkFBSTswQ0FBZ0IsOERBQUNlO2dDQUFLZCxXQUFVO2dDQUE4Q2UsTUFBSzswQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2SDtHQWhHTXRDO0FBa0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXBpL3JlZ2lzdGVyL3BhZ2UudHN4PzA4YzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCk9PntcclxuXHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VibWl0RGF0YSA9IHsgZW1haWwsIHBhc3N3b3JkIH07Ly9kYXRhIHRvdCBzdWJtaXRcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luXCIsIHtcclxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOidpbmNsdWRlJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdWJtaXREYXRhKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpXHJcbiAgICAgICAgICAgICAgICAvL3JvdXRlci5wdXNoKCdkYXNoYm9hcmQvZGFzaGJvYXJkSW5kZXgnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IG9rXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXMub2sgPyBjb25zb2xlLmxvZyhcIm9rXCIpIDogY29uc29sZS5sb2coXCJub3Qgb2tcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuKFxyXG5cclxuICAgICAgICA8PlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBiZy1ncmF5LTcwMCAgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBwLTIgc2hhZG93LW1kIHJvdW5kZWQtdFwiPkxvZ2luPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImJnLXdoaXRlIHNoYWRvdy1tZCByb3VuZGVkIHB4LTggcHQtNiBwYi04IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwICBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gSW5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgIDxkaXY+Li4uIG9yIHJlZ2lzdGVyIDxMaW5rIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCcgaHJlZj1cIi9hcGkvcmVnaXN0ZXJcIj5oZXJlPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXREYXRhIiwicmVzIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImNhY2hlIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJMaW5rIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/register/page.tsx\n"));

/***/ })

});