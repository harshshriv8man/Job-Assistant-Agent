/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/user/ai-chat/route";
exports.ids = ["app/api/user/ai-chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/user/ai-chat/route.tsx":
/*!****************************************!*\
  !*** ./app/api/user/ai-chat/route.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   getRuns: () => (/* binding */ getRuns)\n/* harmony export */ });\n/* harmony import */ var _inngest_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/inngest/client */ \"(rsc)/./inngest/client.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(req) {\n    const { userInput } = await req.json();\n    const resultIds = await _inngest_client__WEBPACK_IMPORTED_MODULE_0__.inngest.send({\n        name: \"AiJobAssistant\",\n        data: {\n            userInput: userInput\n        }\n    });\n    const runId = resultIds?.ids[0];\n    let runStatus;\n    while(true){\n        runStatus = await getRuns(runId);\n        if (runStatus?.data[0]?.status === \"Completed\") {\n            break;\n        }\n        await new Promise((resolve)=>setTimeout(resolve, 500));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(runStatus.data?.[0].output?.output[0]);\n}\nasync function getRuns(runId) {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`, {\n        headers: {\n            Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`\n        }\n    });\n    return result.data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvYWktY2hhdC9yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMkM7QUFDakI7QUFDaUI7QUFFcEMsZUFBZUcsS0FBS0MsR0FBUTtJQUMvQixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7SUFFcEMsTUFBTUMsWUFBWSxNQUFNUCxvREFBT0EsQ0FBQ1EsSUFBSSxDQUFDO1FBQ2pDQyxNQUFNO1FBQ05DLE1BQU07WUFDRkwsV0FBV0E7UUFDZjtJQUNKO0lBQ0EsTUFBTU0sUUFBUUosV0FBV0ssR0FBRyxDQUFDLEVBQUU7SUFFL0IsSUFBSUM7SUFDSixNQUFPLEtBQU07UUFDVEEsWUFBWSxNQUFNQyxRQUFRSDtRQUMxQixJQUFJRSxXQUFXSCxJQUFJLENBQUMsRUFBRSxFQUFFSyxXQUFXLGFBQWE7WUFDNUM7UUFDSjtRQUNBLE1BQU0sSUFBSUMsUUFBUUMsQ0FBQUEsVUFBV0MsV0FBV0QsU0FBUztJQUNyRDtJQUVBLE9BQU9mLHFEQUFZQSxDQUFDSSxJQUFJLENBQUNPLFVBQVVILElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQ1MsUUFBUUEsTUFBTSxDQUFDLEVBQUU7QUFDbEU7QUFFTyxlQUFlTCxRQUFRSCxLQUFhO0lBQ3ZDLE1BQU1TLFNBQVMsTUFBTW5CLDZDQUFLQSxDQUFDb0IsR0FBRyxDQUFDLEdBQUdDLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLENBQUMsV0FBVyxFQUFFYixNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3pGYyxTQUFTO1lBQ0xDLGVBQWUsQ0FBQyxPQUFPLEVBQUVKLFFBQVFDLEdBQUcsQ0FBQ0ksbUJBQW1CLEVBQUU7UUFDOUQ7SUFDSjtJQUNBLE9BQU9QLE9BQU9WLElBQUk7QUFDdEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9hcHAvYXBpL3VzZXIvYWktY2hhdC9yb3V0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5uZ2VzdCB9IGZyb20gXCJAL2lubmdlc3QvY2xpZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBhbnkpIHsgXG4gICAgY29uc3QgeyB1c2VySW5wdXQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBjb25zdCByZXN1bHRJZHMgPSBhd2FpdCBpbm5nZXN0LnNlbmQoe1xuICAgICAgICBuYW1lOiBcIkFpSm9iQXNzaXN0YW50XCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHVzZXJJbnB1dDogdXNlcklucHV0XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBydW5JZCA9IHJlc3VsdElkcz8uaWRzWzBdO1xuXG4gICAgbGV0IHJ1blN0YXR1cztcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBydW5TdGF0dXMgPSBhd2FpdCBnZXRSdW5zKHJ1bklkKTtcbiAgICAgICAgaWYgKHJ1blN0YXR1cz8uZGF0YVswXT8uc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJ1blN0YXR1cy5kYXRhPy5bMF0ub3V0cHV0Py5vdXRwdXRbMF0pOyAgXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSdW5zKHJ1bklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuSU5OR0VTVF9TRVJWRVJfSE9TVH0vdjEvZXZlbnRzLyR7cnVuSWR9L3J1bnNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5JTk5HRVNUX1NJR05JTkdfS0VZfWAsXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG59XG4iXSwibmFtZXMiOlsiaW5uZ2VzdCIsImF4aW9zIiwiTmV4dFJlc3BvbnNlIiwiUE9TVCIsInJlcSIsInVzZXJJbnB1dCIsImpzb24iLCJyZXN1bHRJZHMiLCJzZW5kIiwibmFtZSIsImRhdGEiLCJydW5JZCIsImlkcyIsInJ1blN0YXR1cyIsImdldFJ1bnMiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJvdXRwdXQiLCJyZXN1bHQiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiSU5OR0VTVF9TRVJWRVJfSE9TVCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiSU5OR0VTVF9TSUdOSU5HX0tFWSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/ai-chat/route.tsx\n");

/***/ }),

/***/ "(rsc)/./inngest/client.ts":
/*!***************************!*\
  !*** ./inngest/client.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inngest: () => (/* binding */ inngest)\n/* harmony export */ });\n/* harmony import */ var inngest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inngest */ \"(rsc)/./node_modules/inngest/index.js\");\n/* harmony import */ var inngest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inngest__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a client to send and receive events\nconst inngest = new inngest__WEBPACK_IMPORTED_MODULE_0__.Inngest({\n    id: \"ai-job-assistant\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9pbm5nZXN0L2NsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFFbEMsNkNBQTZDO0FBQ3RDLE1BQU1DLFVBQVUsSUFBSUQsNENBQU9BLENBQUM7SUFBRUUsSUFBSTtBQUFtQixHQUFHIiwic291cmNlcyI6WyIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvaW5uZ2VzdC9jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZ2VzdCB9IGZyb20gXCJpbm5nZXN0XCI7XG5cbi8vIENyZWF0ZSBhIGNsaWVudCB0byBzZW5kIGFuZCByZWNlaXZlIGV2ZW50c1xuZXhwb3J0IGNvbnN0IGlubmdlc3QgPSBuZXcgSW5uZ2VzdCh7IGlkOiBcImFpLWpvYi1hc3Npc3RhbnRcIiB9KTtcbiJdLCJuYW1lcyI6WyJJbm5nZXN0IiwiaW5uZ2VzdCIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./inngest/client.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-chat%2Froute&page=%2Fapi%2Fuser%2Fai-chat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-chat%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-chat%2Froute&page=%2Fapi%2Fuser%2Fai-chat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-chat%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_ai_chat_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/ai-chat/route.tsx */ \"(rsc)/./app/api/user/ai-chat/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/ai-chat/route\",\n        pathname: \"/api/user/ai-chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/ai-chat/route\"\n    },\n    resolvedPagePath: \"/Users/harshshrivastav/Desktop/Coding Projects/Job-Assistant-Agent/app/api/user/ai-chat/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_ai_chat_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGYWktY2hhdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlciUyRmFpLWNoYXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyJTJGYWktY2hhdCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZoYXJzaHNocml2YXN0YXYlMkZEZXNrdG9wJTJGQ29kaW5nJTIwUHJvamVjdHMlMkZKb2ItQXNzaXN0YW50LUFnZW50JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhcnNoc2hyaXZhc3RhdiUyRkRlc2t0b3AlMkZDb2RpbmclMjBQcm9qZWN0cyUyRkpvYi1Bc3Npc3RhbnQtQWdlbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lEO0FBQzlIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL2FpLWNoYXQvcm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyL2FpLWNoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyL2FpLWNoYXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvYWktY2hhdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9hcHAvYXBpL3VzZXIvYWktY2hhdC9yb3V0ZS50c3hcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-chat%2Froute&page=%2Fapi%2Fuser%2Fai-chat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-chat%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:async_hooks");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/debug","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-flag","vendor-chunks/inngest","vendor-chunks/mime-db","vendor-chunks/@inngest","vendor-chunks/axios","vendor-chunks/tr46","vendor-chunks/zod","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/follow-redirects","vendor-chunks/hash.js","vendor-chunks/form-data","vendor-chunks/color-convert","vendor-chunks/asynckit","vendor-chunks/chalk","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/webidl-conversions","vendor-chunks/delayed-stream","vendor-chunks/color-name","vendor-chunks/serialize-error-cjs","vendor-chunks/inherits","vendor-chunks/json-stringify-safe","vendor-chunks/canonicalize","vendor-chunks/cross-fetch","vendor-chunks/minimalistic-assert"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-chat%2Froute&page=%2Fapi%2Fuser%2Fai-chat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-chat%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();