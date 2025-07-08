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
exports.id = "app/api/user/inngest/route";
exports.ids = ["app/api/user/inngest/route"];
exports.modules = {

/***/ "(rsc)/./app/api/user/inngest/route.ts":
/*!***************************************!*\
  !*** ./app/api/user/inngest/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var inngest_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inngest/next */ \"(rsc)/./node_modules/inngest/next.js\");\n/* harmony import */ var _inngest_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../inngest/client */ \"(rsc)/./inngest/client.ts\");\n/* harmony import */ var _inngest_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../inngest/functions */ \"(rsc)/./inngest/functions.ts\");\n\n\n // Correct import path\nconst { GET, POST, PUT } = (0,inngest_next__WEBPACK_IMPORTED_MODULE_0__.serve)({\n    client: _inngest_client__WEBPACK_IMPORTED_MODULE_1__.inngest,\n    functions: [\n        _inngest_functions__WEBPACK_IMPORTED_MODULE_2__.AiJobAssistant\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvaW5uZ2VzdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUM7QUFDZ0I7QUFDc0IsQ0FBRSxzQkFBc0I7QUFFNUYsTUFBTSxFQUFFRyxHQUFHLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFLEdBQUdMLG1EQUFLQSxDQUFDO0lBQ3RDTSxRQUFRTCxvREFBT0E7SUFDZk0sV0FBVztRQUNUTCw4REFBY0E7S0FDZjtBQUNILEdBQUciLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9hcHAvYXBpL3VzZXIvaW5uZ2VzdC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXJ2ZSB9IGZyb20gXCJpbm5nZXN0L25leHRcIjtcbmltcG9ydCB7IGlubmdlc3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5uZ2VzdC9jbGllbnRcIjtcbmltcG9ydCB7IEFpSm9iQXNzaXN0YW50LCBoZWxsb1dvcmxkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2lubmdlc3QvZnVuY3Rpb25zXCI7ICAvLyBDb3JyZWN0IGltcG9ydCBwYXRoXG5cbmV4cG9ydCBjb25zdCB7IEdFVCwgUE9TVCwgUFVUIH0gPSBzZXJ2ZSh7XG4gIGNsaWVudDogaW5uZ2VzdCwgIC8vIFBhc3MgdGhlIGNsaWVudFxuICBmdW5jdGlvbnM6IFtcbiAgICBBaUpvYkFzc2lzdGFudFxuICBdLCAgLy8gUGFzcyB0aGUgZnVuY3Rpb24gaGVyZVxufSk7XG4iXSwibmFtZXMiOlsic2VydmUiLCJpbm5nZXN0IiwiQWlKb2JBc3Npc3RhbnQiLCJHRVQiLCJQT1NUIiwiUFVUIiwiY2xpZW50IiwiZnVuY3Rpb25zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/inngest/route.ts\n");

/***/ }),

/***/ "(rsc)/./inngest/client.ts":
/*!***************************!*\
  !*** ./inngest/client.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inngest: () => (/* binding */ inngest)\n/* harmony export */ });\n/* harmony import */ var inngest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inngest */ \"(rsc)/./node_modules/inngest/index.js\");\n/* harmony import */ var inngest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inngest__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a client to send and receive events\nconst inngest = new inngest__WEBPACK_IMPORTED_MODULE_0__.Inngest({\n    id: \"ai-job-assistant\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9pbm5nZXN0L2NsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFFbEMsNkNBQTZDO0FBQ3RDLE1BQU1DLFVBQVUsSUFBSUQsNENBQU9BLENBQUM7SUFBRUUsSUFBSTtBQUFtQixHQUFHIiwic291cmNlcyI6WyIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvaW5uZ2VzdC9jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZ2VzdCB9IGZyb20gXCJpbm5nZXN0XCI7XG5cbi8vIENyZWF0ZSBhIGNsaWVudCB0byBzZW5kIGFuZCByZWNlaXZlIGV2ZW50c1xuZXhwb3J0IGNvbnN0IGlubmdlc3QgPSBuZXcgSW5uZ2VzdCh7IGlkOiBcImFpLWpvYi1hc3Npc3RhbnRcIiB9KTtcbiJdLCJuYW1lcyI6WyJJbm5nZXN0IiwiaW5uZ2VzdCIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./inngest/client.ts\n");

/***/ }),

/***/ "(rsc)/./inngest/functions.ts":
/*!******************************!*\
  !*** ./inngest/functions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AiJobAssistant: () => (/* binding */ AiJobAssistant),\n/* harmony export */   AiJobAssistantAgent: () => (/* binding */ AiJobAssistantAgent),\n/* harmony export */   helloWorld: () => (/* binding */ helloWorld)\n/* harmony export */ });\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ \"(rsc)/./inngest/client.ts\");\n/* harmony import */ var _inngest_agent_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inngest/agent-kit */ \"(rsc)/./node_modules/@inngest/agent-kit/dist/index.js\");\n // Ensure correct import\n\nconst helloWorld = _client__WEBPACK_IMPORTED_MODULE_0__.inngest.createFunction({\n    id: \"hello-world\"\n}, {\n    event: \"test/hello.world\"\n}, async ({ event, step })=>{\n    await step.sleep(\"wait-a-moment\", \"1s\");\n    return {\n        message: `Hello ${event.data.email}!`\n    };\n});\nconst AiJobAssistantAgent = (0,_inngest_agent_kit__WEBPACK_IMPORTED_MODULE_1__.createAgent)({\n    name: \"AI Job Assistant\",\n    description: \"An AI Job Assistant that helps users with job-related queries.\",\n    system: \"You are a helpful AI job assistant designed to guide users in finding job opportunities, optimizing resumes, preparing for interviews, and offering career advice. Be empathetic, professional, and provide personalized recommendations based on users' skills and goals.\",\n    model: (0,_inngest_agent_kit__WEBPACK_IMPORTED_MODULE_1__.gemini)({\n        model: \"gemini-2.5-pro\",\n        apiKey: process.env.GEMINI_API_KEY\n    })\n});\nconst AiJobAssistant = _client__WEBPACK_IMPORTED_MODULE_0__.inngest.createFunction({\n    id: \"AiJobAssistant\"\n}, {\n    event: \"AiJobAssistant\"\n}, async ({ event, step })=>{\n    const { userInput } = await event?.data;\n    const result = await AiJobAssistantAgent.run(userInput);\n    return result;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9pbm5nZXN0L2Z1bmN0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtQyxDQUFFLHdCQUF3QjtBQUNlO0FBRXJFLE1BQU1HLGFBQWFILDRDQUFPQSxDQUFDSSxjQUFjLENBQzlDO0lBQUVDLElBQUk7QUFBYyxHQUNwQjtJQUFFQyxPQUFPO0FBQW1CLEdBQzVCLE9BQU8sRUFBRUEsS0FBSyxFQUFFQyxJQUFJLEVBQUU7SUFDcEIsTUFBTUEsS0FBS0MsS0FBSyxDQUFDLGlCQUFpQjtJQUNsQyxPQUFPO1FBQUVDLFNBQVMsQ0FBQyxNQUFNLEVBQUVILE1BQU1JLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUFDO0FBQ2pELEdBQ0E7QUFFSyxNQUFNQyxzQkFBc0JYLCtEQUFXQSxDQUFDO0lBQzdDWSxNQUFLO0lBQ0xDLGFBQWE7SUFDYkMsUUFBUTtJQUNSQyxPQUFPZCwwREFBTUEsQ0FBQztRQUNaYyxPQUFNO1FBQ05DLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztJQUNwQztBQUNGLEdBQUU7QUFFSyxNQUFNQyxpQkFBaUJyQiw0Q0FBT0EsQ0FBQ0ksY0FBYyxDQUNsRDtJQUFDQyxJQUFHO0FBQWdCLEdBQ3BCO0lBQUNDLE9BQU07QUFBZ0IsR0FDdkIsT0FBTyxFQUFFQSxLQUFLLEVBQUVDLElBQUksRUFBRTtJQUNwQixNQUFNLEVBQUNlLFNBQVMsRUFBQyxHQUFHLE1BQU1oQixPQUFPSTtJQUNqQyxNQUFNYSxTQUFTLE1BQU1YLG9CQUFvQlksR0FBRyxDQUFDRjtJQUM3QyxPQUFPQztBQUNULEdBQ0QiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9pbm5nZXN0L2Z1bmN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbm5nZXN0IH0gZnJvbSBcIi4vY2xpZW50XCI7ICAvLyBFbnN1cmUgY29ycmVjdCBpbXBvcnRcbmltcG9ydCB7IGNyZWF0ZUFnZW50LCBhbnRocm9waWMsIG9wZW5haSwgZ2VtaW5pIH0gZnJvbSAnQGlubmdlc3QvYWdlbnQta2l0JztcblxuZXhwb3J0IGNvbnN0IGhlbGxvV29ybGQgPSBpbm5nZXN0LmNyZWF0ZUZ1bmN0aW9uKFxuICB7IGlkOiBcImhlbGxvLXdvcmxkXCIgfSxcbiAgeyBldmVudDogXCJ0ZXN0L2hlbGxvLndvcmxkXCIgfSxcbiAgYXN5bmMgKHsgZXZlbnQsIHN0ZXAgfSkgPT4ge1xuICAgIGF3YWl0IHN0ZXAuc2xlZXAoXCJ3YWl0LWEtbW9tZW50XCIsIFwiMXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogYEhlbGxvICR7ZXZlbnQuZGF0YS5lbWFpbH0hYCB9O1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgQWlKb2JBc3Npc3RhbnRBZ2VudCA9IGNyZWF0ZUFnZW50KHtcbiAgbmFtZTpcIkFJIEpvYiBBc3Npc3RhbnRcIixcbiAgZGVzY3JpcHRpb246IFwiQW4gQUkgSm9iIEFzc2lzdGFudCB0aGF0IGhlbHBzIHVzZXJzIHdpdGggam9iLXJlbGF0ZWQgcXVlcmllcy5cIixcbiAgc3lzdGVtOiBcIllvdSBhcmUgYSBoZWxwZnVsIEFJIGpvYiBhc3Npc3RhbnQgZGVzaWduZWQgdG8gZ3VpZGUgdXNlcnMgaW4gZmluZGluZyBqb2Igb3Bwb3J0dW5pdGllcywgb3B0aW1pemluZyByZXN1bWVzLCBwcmVwYXJpbmcgZm9yIGludGVydmlld3MsIGFuZCBvZmZlcmluZyBjYXJlZXIgYWR2aWNlLiBCZSBlbXBhdGhldGljLCBwcm9mZXNzaW9uYWwsIGFuZCBwcm92aWRlIHBlcnNvbmFsaXplZCByZWNvbW1lbmRhdGlvbnMgYmFzZWQgb24gdXNlcnMnIHNraWxscyBhbmQgZ29hbHMuXCIsXG4gIG1vZGVsOiBnZW1pbmkoe1xuICAgIG1vZGVsOlwiZ2VtaW5pLTIuNS1wcm9cIixcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52LkdFTUlOSV9BUElfS0VZXG4gIH0pXG59KVxuXG5leHBvcnQgY29uc3QgQWlKb2JBc3Npc3RhbnQgPSBpbm5nZXN0LmNyZWF0ZUZ1bmN0aW9uKFxuICB7aWQ6XCJBaUpvYkFzc2lzdGFudFwifSxcbiAge2V2ZW50OlwiQWlKb2JBc3Npc3RhbnRcIn0sXG4gIGFzeW5jICh7IGV2ZW50LCBzdGVwIH0pID0+IHtcbiAgICBjb25zdCB7dXNlcklucHV0fSA9IGF3YWl0IGV2ZW50Py5kYXRhO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IEFpSm9iQXNzaXN0YW50QWdlbnQucnVuKHVzZXJJbnB1dCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuKVxuIl0sIm5hbWVzIjpbImlubmdlc3QiLCJjcmVhdGVBZ2VudCIsImdlbWluaSIsImhlbGxvV29ybGQiLCJjcmVhdGVGdW5jdGlvbiIsImlkIiwiZXZlbnQiLCJzdGVwIiwic2xlZXAiLCJtZXNzYWdlIiwiZGF0YSIsImVtYWlsIiwiQWlKb2JBc3Npc3RhbnRBZ2VudCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN5c3RlbSIsIm1vZGVsIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkdFTUlOSV9BUElfS0VZIiwiQWlKb2JBc3Npc3RhbnQiLCJ1c2VySW5wdXQiLCJyZXN1bHQiLCJydW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./inngest/functions.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/@opentelemetry/instrumentation/build/esm/platform/node sync recursive":
/*!***********************************************************************************!*\
  !*** ./node_modules/@opentelemetry/instrumentation/build/esm/platform/node/ sync ***!
  \***********************************************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/@opentelemetry/instrumentation/build/esm/platform/node sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Finngest%2Froute&page=%2Fapi%2Fuser%2Finngest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Finngest%2Froute.ts&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Finngest%2Froute&page=%2Fapi%2Fuser%2Finngest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Finngest%2Froute.ts&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_inngest_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/inngest/route.ts */ \"(rsc)/./app/api/user/inngest/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/inngest/route\",\n        pathname: \"/api/user/inngest\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/inngest/route\"\n    },\n    resolvedPagePath: \"/Users/harshshrivastav/Desktop/Coding Projects/Job-Assistant-Agent/app/api/user/inngest/route.ts\",\n    nextConfigOutput,\n    userland: _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_inngest_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGaW5uZ2VzdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlciUyRmlubmdlc3QlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyJTJGaW5uZ2VzdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmhhcnNoc2hyaXZhc3RhdiUyRkRlc2t0b3AlMkZDb2RpbmclMjBQcm9qZWN0cyUyRkpvYi1Bc3Npc3RhbnQtQWdlbnQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGaGFyc2hzaHJpdmFzdGF2JTJGRGVza3RvcCUyRkNvZGluZyUyMFByb2plY3RzJTJGSm9iLUFzc2lzdGFudC1BZ2VudCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9hcHAvYXBpL3VzZXIvaW5uZ2VzdC9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci9pbm5nZXN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlci9pbm5nZXN0XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2VyL2lubmdlc3Qvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL2lubmdlc3Qvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Finngest%2Froute&page=%2Fapi%2Fuser%2Finngest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Finngest%2Froute.ts&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "diagnostics_channel":
/*!**************************************!*\
  !*** external "diagnostics_channel" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("diagnostics_channel");

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

/***/ "import-in-the-middle":
/*!***************************************!*\
  !*** external "import-in-the-middle" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("import-in-the-middle");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

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

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:events");

/***/ }),

/***/ "node:process":
/*!*******************************!*\
  !*** external "node:process" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:process");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:util");

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

/***/ "perf_hooks":
/*!*****************************!*\
  !*** external "perf_hooks" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("perf_hooks");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "require-in-the-middle":
/*!****************************************!*\
  !*** external "require-in-the-middle" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("require-in-the-middle");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/debug","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-flag","vendor-chunks/extend","vendor-chunks/@inngest","vendor-chunks/semver","vendor-chunks/inngest","vendor-chunks/ajv","vendor-chunks/gaxios","vendor-chunks/@modelcontextprotocol","vendor-chunks/hash.js","vendor-chunks/@dmitryrechkin","vendor-chunks/zod","vendor-chunks/cross-spawn","vendor-chunks/whatwg-url","vendor-chunks/chalk","vendor-chunks/xxhashjs","vendor-chunks/json-bigint","vendor-chunks/isexe","vendor-chunks/google-logging-utils","vendor-chunks/forwarded-parse","vendor-chunks/cuint","vendor-chunks/color-convert","vendor-chunks/eventsource-parser","vendor-chunks/tr46","vendor-chunks/serialize-error-cjs","vendor-chunks/inherits","vendor-chunks/https-proxy-agent","vendor-chunks/gcp-metadata","vendor-chunks/agent-base","vendor-chunks/pkce-challenge","vendor-chunks/node-fetch","vendor-chunks/eventsource","vendor-chunks/which","vendor-chunks/webidl-conversions","vendor-chunks/uri-js","vendor-chunks/shimmer","vendor-chunks/shebang-regex","vendor-chunks/shebang-command","vendor-chunks/path-key","vendor-chunks/minimalistic-assert","vendor-chunks/json-stringify-safe","vendor-chunks/json-schema-traverse","vendor-chunks/is-stream","vendor-chunks/fast-json-stable-stringify","vendor-chunks/fast-deep-equal","vendor-chunks/cross-fetch","vendor-chunks/color-name","vendor-chunks/canonicalize","vendor-chunks/bignumber.js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Finngest%2Froute&page=%2Fapi%2Fuser%2Finngest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Finngest%2Froute.ts&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();