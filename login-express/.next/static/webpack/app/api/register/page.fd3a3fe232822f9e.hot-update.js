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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize email and password to empty strings when the component mounts\n        setEmail(\"\");\n        setPassword(\"\");\n    }, []); // Empty dependency array ensures this effect runs only once when the component mounts\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"submit\");\n        const submitData = {\n            email,\n            password\n        }; //data tot submit\n        try {\n            const res = await fetch(\"http://localhost:3000/register\", {\n                //credentials: 'include',\n                cache: \"no-store\",\n                method: \"POST\",\n                body: JSON.stringify(submitData),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (res.ok) {\n                console.log(\"ok\");\n            //router.push('dashboard/dashboardIndex');\n            } else {\n                console.log(\"not ok\");\n            }\n        //res.ok ? console.log(\"ok\") : console.log(\"not ok\")\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block bg-gray-700  text-white text-sm font-bold p-2 shadow-md rounded-t\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"email\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"email\",\n                                        type: \"email\",\n                                        placeholder: \"Email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"password\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"password\",\n                                        type: \"password\",\n                                        placeholder: \"Password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-gray-500  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                    type: \"submit\",\n                                    children: \"Register\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\register\\\\page.tsx\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(page, \"Azh4nDFCECfuvkgNaiGV+xdRyGQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL3JlZ2lzdGVyL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV1RDtBQUV2RCxNQUFNRSxPQUFPOztJQUVULE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBUztJQUMzQyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQVM7SUFFakRELGdEQUFTQSxDQUFDO1FBQ04sMkVBQTJFO1FBQzNFSSxTQUFTO1FBQ1RFLFlBQVk7SUFDaEIsR0FBRyxFQUFFLEdBQUcsc0ZBQXNGO0lBSTlGLE1BQU1DLGVBQWUsT0FBT0M7UUFFeEJBLEVBQUVDLGNBQWM7UUFFaEJDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1DLGFBQWE7WUFBRVQ7WUFBT0U7UUFBUyxHQUFFLGlCQUFpQjtRQUV4RCxJQUFJO1lBRUEsTUFBTVEsTUFBTSxNQUFNQyxNQUFNLGtDQUFrQztnQkFDdEQseUJBQXlCO2dCQUN6QkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtnQkFDckJRLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtZQUNKO1lBRUEsSUFBSVAsSUFBSVEsRUFBRSxFQUFFO2dCQUNSWCxRQUFRQyxHQUFHLENBQUM7WUFDWiwwQ0FBMEM7WUFFOUMsT0FBTztnQkFDSEQsUUFBUUMsR0FBRyxDQUFDO1lBQ2hCO1FBQ0Esb0RBQW9EO1FBQ3hELEVBQUUsT0FBT1csT0FBTztZQUNaWixRQUFRQyxHQUFHLENBQUNXO1FBQ2hCO0lBRUo7SUFHQSxxQkFFSTtrQkFFSSw0RUFBQ0M7WUFBSUMsV0FBVTtzQkFFWCw0RUFBQ0Q7O2tDQUNHLDhEQUFDQTt3QkFBSUMsV0FBVTtrQ0FBMEU7Ozs7OztrQ0FDekYsOERBQUNDO3dCQUFLQyxVQUFVbkI7d0JBQWNpQixXQUFVOzswQ0FDcEMsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0c7d0NBQU1ILFdBQVU7d0NBQTZDSSxTQUFRO2tEQUFROzs7Ozs7a0RBRzlFLDhEQUFDQzt3Q0FDR0wsV0FBVTt3Q0FDVk0sSUFBRzt3Q0FDSEMsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWkMsT0FBTzlCO3dDQUNQK0IsVUFBVSxDQUFDMUIsSUFBTUosU0FBU0ksRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDeENHLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FJaEIsOERBQUNiO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0c7d0NBQU1ILFdBQVU7d0NBQTZDSSxTQUFRO2tEQUFXOzs7Ozs7a0RBR2pGLDhEQUFDQzt3Q0FDR0wsV0FBVTt3Q0FDVk0sSUFBRzt3Q0FDSEMsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWkMsT0FBTzVCO3dDQUNQNkIsVUFBVSxDQUFDMUIsSUFBTUYsWUFBWUUsRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDM0NHLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FJaEIsOERBQUNiO2dDQUFJQyxXQUFVOzBDQUNYLDRFQUFDYTtvQ0FDR2IsV0FBVTtvQ0FDVk8sTUFBSzs4Q0FDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhN0I7R0F4R003QjtBQTBHTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FwaS9yZWdpc3Rlci9wYWdlLnRzeD8wOGM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBwYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZW1wdHkgc3RyaW5ncyB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkKCcnKTtcclxuICAgIH0sIFtdKTsgLy8gRW1wdHkgZGVwZW5kZW5jeSBhcnJheSBlbnN1cmVzIHRoaXMgZWZmZWN0IHJ1bnMgb25seSBvbmNlIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VibWl0RGF0YSA9IHsgZW1haWwsIHBhc3N3b3JkIH07Ly9kYXRhIHRvdCBzdWJtaXRcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICAgICAgICAgIC8vY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICAgICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzdWJtaXREYXRhKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpXHJcbiAgICAgICAgICAgICAgICAvL3JvdXRlci5wdXNoKCdkYXNoYm9hcmQvZGFzaGJvYXJkSW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBva1wiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmVzLm9rID8gY29uc29sZS5sb2coXCJva1wiKSA6IGNvbnNvbGUubG9nKFwibm90IG9rXCIpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIGJnLWdyYXktNzAwICB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHAtMiBzaGFkb3ctbWQgcm91bmRlZC10XCI+UmVnaXN0ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbWItMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAwICBob3ZlcjpiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwYWdlIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3VibWl0RGF0YSIsInJlcyIsImZldGNoIiwiY2FjaGUiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/register/page.tsx\n"));

/***/ })

});