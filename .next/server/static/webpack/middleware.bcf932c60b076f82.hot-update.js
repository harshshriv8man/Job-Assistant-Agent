"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.tsx":
/*!************************!*\
  !*** ./middleware.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/routeMatcher.js\");\n\n// Correct the route to match the actual API path\nconst isPublicRoute = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.createRouteMatcher)([\n    '/sign-in(.*)',\n    '/sign-up(.*)',\n    '/',\n    '/api/user/inngest' // Correct route\n]);\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files\n        '/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',\n        // Always run for API routes\n        '/(api|trpc)(.*)'\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkU7QUFFM0UsaURBQWlEO0FBQ2pELE1BQU1DLGdCQUFnQkQsd0VBQWtCQSxDQUFDO0lBQ3JDO0lBQ0E7SUFDQTtJQUNBLG9CQUFxQixnQkFBZ0I7Q0FDeEM7QUFHTSxNQUFNRSxTQUFTO0lBQ2xCQyxTQUFTO1FBQ0wsOENBQThDO1FBQzlDO1FBQ0EsNEJBQTRCO1FBQzVCO0tBQ0g7QUFDTCxFQUFFIiwic291cmNlcyI6WyIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvbWlkZGxld2FyZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xlcmtNaWRkbGV3YXJlLCBjcmVhdGVSb3V0ZU1hdGNoZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcic7XG5cbi8vIENvcnJlY3QgdGhlIHJvdXRlIHRvIG1hdGNoIHRoZSBhY3R1YWwgQVBJIHBhdGhcbmNvbnN0IGlzUHVibGljUm91dGUgPSBjcmVhdGVSb3V0ZU1hdGNoZXIoW1xuICAgICcvc2lnbi1pbiguKiknLFxuICAgICcvc2lnbi11cCguKiknLFxuICAgICcvJyxcbiAgICAnL2FwaS91c2VyL2lubmdlc3QnICAvLyBDb3JyZWN0IHJvdXRlXG5dKTtcblxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIG1hdGNoZXI6IFtcbiAgICAgICAgLy8gU2tpcCBOZXh0LmpzIGludGVybmFscyBhbmQgYWxsIHN0YXRpYyBmaWxlc1xuICAgICAgICAnLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopJyxcbiAgICAgICAgLy8gQWx3YXlzIHJ1biBmb3IgQVBJIHJvdXRlc1xuICAgICAgICAnLyhhcGl8dHJwYykoLiopJywgIC8vIE1ha2Ugc3VyZSBBUEkgcm91dGVzIGFyZSBpbmNsdWRlZFxuICAgIF0sXG59O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVJvdXRlTWF0Y2hlciIsImlzUHVibGljUm91dGUiLCJjb25maWciLCJtYXRjaGVyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./middleware.tsx\n");

/***/ })

});