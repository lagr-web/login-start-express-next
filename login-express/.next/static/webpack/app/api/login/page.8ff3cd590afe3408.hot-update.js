"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/api/login/page",{

/***/ "(app-pages-browser)/./src/app/api/login/page.tsx":
/*!************************************!*\
  !*** ./src/app/api/login/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n//src/app/api/login/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n //husk import\nconst Page = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"submit\");\n        const submitData = {\n            email,\n            password\n        }; //data tot submit\n        try {\n            const res = await fetch(\"http://localhost:3000/login\", {\n                credentials: \"include\",\n                cache: \"no-store\",\n                method: \"POST\",\n                body: JSON.stringify(submitData),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (res.ok) {\n                console.log(\"ok\");\n                router.push(\"dashboard/dashboardIndex\");\n            } else {\n                console.log(\"not ok\");\n            }\n        //res.ok ? console.log(\"ok\") : console.log(\"not ok\")\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center items-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"block bg-gray-700  text-white text-sm font-bold p-2 shadow-md rounded-t\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"email\",\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"email\",\n                                        type: \"email\",\n                                        placeholder: \"Email\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                        htmlFor: \"password\",\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline\",\n                                        id: \"password\",\n                                        type: \"password\",\n                                        placeholder: \"Password\",\n                                        value: password,\n                                        onChange: (e)=>setPassword(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-gray-500  hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                    type: \"submit\",\n                                    children: \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"... or register \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                className: \"hover:text-gray-200\",\n                                href: \"/api/register\",\n                                children: \"here\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 38\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\lars_work\\\\undervisning-avanceret-frontend\\\\login-start-express-next_git\\\\login-start-express-next\\\\login-express\\\\src\\\\app\\\\api\\\\login\\\\page.tsx\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Page, \"LSjBy/+8e694Z8+hBRmcdVALamQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL2xvZ2luL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDRCQUE0Qjs7O0FBR0M7QUFDZTtBQUVBLENBQUMsYUFBYTtBQUUxRCxNQUFNRyxPQUFPOztJQUVULE1BQU1DLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0osK0NBQVFBLENBQVM7SUFDM0MsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFTO0lBRWpELE1BQU1PLGVBQWUsT0FBT0M7UUFFeEJBLEVBQUVDLGNBQWM7UUFFaEJDLFFBQVFDLEdBQUcsQ0FBQztRQUVaLE1BQU1DLGFBQWE7WUFBRVQ7WUFBT0U7UUFBUyxHQUFFLGlCQUFpQjtRQUV4RCxJQUFJO1lBRUEsTUFBTVEsTUFBTSxNQUFNQyxNQUFNLCtCQUErQjtnQkFDbkRDLGFBQVk7Z0JBQ1pDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1I7Z0JBQ3JCUyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7WUFDSjtZQUVBLElBQUlSLElBQUlTLEVBQUUsRUFBRTtnQkFDUlosUUFBUUMsR0FBRyxDQUFDO2dCQUNaVCxPQUFPcUIsSUFBSSxDQUFDO1lBQ2hCLE9BQU87Z0JBQ0hiLFFBQVFDLEdBQUcsQ0FBQztZQUNoQjtRQUNBLG9EQUFvRDtRQUN4RCxFQUFFLE9BQU9hLE9BQU87WUFDWmQsUUFBUUMsR0FBRyxDQUFDYTtRQUNoQjtJQUVKO0lBR0EscUJBRUk7a0JBRUksNEVBQUNDO1lBQUlDLFdBQVU7c0JBRVgsNEVBQUNEOztrQ0FDRCw4REFBQ0E7d0JBQUlDLFdBQVU7a0NBQTBFOzs7Ozs7a0NBQ3pGLDhEQUFDQzt3QkFBS0MsVUFBVXJCO3dCQUFjbUIsV0FBVTs7MENBQ3BDLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNHO3dDQUFNSCxXQUFVO3dDQUE2Q0ksU0FBUTtrREFBUTs7Ozs7O2tEQUc5RSw4REFBQ0M7d0NBQ0dMLFdBQVU7d0NBQ1ZNLElBQUc7d0NBQ0hDLE1BQUs7d0NBQ0xDLGFBQVk7d0NBQ1pDLE9BQU9oQzt3Q0FDUGlDLFVBQVUsQ0FBQzVCLElBQU1KLFNBQVNJLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7d0NBQ3hDRyxRQUFROzs7Ozs7Ozs7Ozs7MENBSWhCLDhEQUFDYjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNHO3dDQUFNSCxXQUFVO3dDQUE2Q0ksU0FBUTtrREFBVzs7Ozs7O2tEQUdqRiw4REFBQ0M7d0NBQ0dMLFdBQVU7d0NBQ1ZNLElBQUc7d0NBQ0hDLE1BQUs7d0NBQ0xDLGFBQVk7d0NBQ1pDLE9BQU85Qjt3Q0FDUCtCLFVBQVUsQ0FBQzVCLElBQU1GLFlBQVlFLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7d0NBQzNDRyxRQUFROzs7Ozs7Ozs7Ozs7MENBSWhCLDhEQUFDYjtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ2E7b0NBQ0diLFdBQVU7b0NBQ1ZPLE1BQUs7OENBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUtULDhEQUFDUjs7NEJBQUk7MENBQWdCLDhEQUFDM0IsaURBQUlBO2dDQUFDNEIsV0FBVTtnQ0FBc0JjLE1BQUs7MENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEc7R0FqR012Qzs7UUFFYUYsc0RBQVNBOzs7S0FGdEJFO0FBbUdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvYXBpL2xvZ2luL3BhZ2UudHN4P2U2YTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy9zcmMvYXBwL2FwaS9sb2dpbi9wYWdlLnRzeFxyXG5cInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5pbXBvcnQgeyBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7IC8vaHVzayBpbXBvcnRcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pdCcpO1xyXG5cclxuICAgICAgICBjb25zdCBzdWJtaXREYXRhID0geyBlbWFpbCwgcGFzc3dvcmQgfTsvL2RhdGEgdG90IHN1Ym1pdFxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvbG9naW5cIiwge1xyXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6J2luY2x1ZGUnLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6ICduby1zdG9yZScsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHN1Ym1pdERhdGEpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib2tcIilcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCdkYXNoYm9hcmQvZGFzaGJvYXJkSW5kZXgnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm90IG9rXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXMub2sgPyBjb25zb2xlLmxvZyhcIm9rXCIpIDogY29uc29sZS5sb2coXCJub3Qgb2tcIilcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBiZy1ncmF5LTcwMCAgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBwLTIgc2hhZG93LW1kIHJvdW5kZWQtdFwiPkxvZ2luPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MDAgIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXY+Li4uIG9yIHJlZ2lzdGVyIDxMaW5rIGNsYXNzTmFtZT0naG92ZXI6dGV4dC1ncmF5LTIwMCcgaHJlZj1cIi9hcGkvcmVnaXN0ZXJcIj5oZXJlPC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiUGFnZSIsInJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN1Ym1pdERhdGEiLCJyZXMiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJvayIsInB1c2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/login/page.tsx\n"));

/***/ })

});