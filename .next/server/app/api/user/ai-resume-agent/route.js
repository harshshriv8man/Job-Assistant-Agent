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
exports.id = "app/api/user/ai-resume-agent/route";
exports.ids = ["app/api/user/ai-resume-agent/route"];
exports.modules = {

/***/ "(rsc)/./app/api/user/ai-resume-agent/route.tsx":
/*!************************************************!*\
  !*** ./app/api/user/ai-resume-agent/route.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   getRuns: () => (/* binding */ getRuns)\n/* harmony export */ });\n/* harmony import */ var _langchain_community_document_loaders_web_pdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @langchain/community/document_loaders/web/pdf */ \"(rsc)/../../../node_modules/@langchain/community/document_loaders/web/pdf.js\");\n/* harmony import */ var _inngest_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/inngest/client */ \"(rsc)/./inngest/client.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\nasync function POST(req) {\n    const FormData = await req.formData();\n    const resumeFile = FormData.get(\"resumeFile\");\n    const recordId = FormData.get(\"recordId\");\n    const loader = new _langchain_community_document_loaders_web_pdf__WEBPACK_IMPORTED_MODULE_0__.WebPDFLoader(resumeFile);\n    const docs = await loader.load();\n    console.log(docs[0]);\n    const arrayBuffer = await resumeFile.arrayBuffer();\n    const base64 = Buffer.from(arrayBuffer).toString('base64');\n    const resultIds = await _inngest_client__WEBPACK_IMPORTED_MODULE_1__.inngest.send({\n        name: \"AiResumeAgent\",\n        data: {\n            recordId: recordId,\n            base64ResumeFile: base64,\n            pdfText: docs[0]?.pageContent\n        }\n    });\n    const runId = resultIds?.ids[0];\n    let runStatus;\n    while(true){\n        runStatus = await getRuns(runId);\n        if (runStatus?.data[0]?.status === \"Completed\") {\n            break;\n        }\n        await new Promise((resolve)=>setTimeout(resolve, 500));\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(runStatus.data?.[0].output?.output[0]);\n}\nasync function getRuns(runId) {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(`${process.env.INNGEST_SERVER_HOST}/v1/events/${runId}/runs`, {\n        headers: {\n            Authorization: `Bearer ${process.env.INNGEST_SIGNING_KEY}`\n        }\n    });\n    return result.data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvYWktcmVzdW1lLWFnZW50L3JvdXRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDNkU7QUFDbEM7QUFDakI7QUFDaUI7QUFHcEMsZUFBZUksS0FBS0MsR0FBZTtJQUN0QyxNQUFNQyxXQUFXLE1BQU1ELElBQUlFLFFBQVE7SUFDbkMsTUFBTUMsYUFBaUJGLFNBQVNHLEdBQUcsQ0FBQztJQUNwQyxNQUFNQyxXQUFXSixTQUFTRyxHQUFHLENBQUM7SUFFOUIsTUFBTUUsU0FBUyxJQUFJWCx1RkFBWUEsQ0FBQ1E7SUFDaEMsTUFBTUksT0FBTyxNQUFNRCxPQUFPRSxJQUFJO0lBQzlCQyxRQUFRQyxHQUFHLENBQUNILElBQUksQ0FBQyxFQUFFO0lBRW5CLE1BQU9JLGNBQWMsTUFBTVIsV0FBV1EsV0FBVztJQUNqRCxNQUFNQyxTQUFTQyxPQUFPQyxJQUFJLENBQUNILGFBQWFJLFFBQVEsQ0FBQztJQUVqRCxNQUFNQyxZQUFZLE1BQU1wQixvREFBT0EsQ0FBQ3FCLElBQUksQ0FBQztRQUNqQ0MsTUFBTTtRQUNOQyxNQUFNO1lBQ0ZkLFVBQVVBO1lBQ1ZlLGtCQUFrQlI7WUFDbEJTLFNBQVNkLElBQUksQ0FBQyxFQUFFLEVBQUVlO1FBQ3RCO0lBQ0o7SUFDQSxNQUFNQyxRQUFRUCxXQUFXUSxHQUFHLENBQUMsRUFBRTtJQUUvQixJQUFJQztJQUNKLE1BQU8sS0FBTTtRQUNUQSxZQUFZLE1BQU1DLFFBQVFIO1FBQzFCLElBQUlFLFdBQVdOLElBQUksQ0FBQyxFQUFFLEVBQUVRLFdBQVcsYUFBYTtZQUM1QztRQUNKO1FBQ0EsTUFBTSxJQUFJQyxRQUFRQyxDQUFBQSxVQUFXQyxXQUFXRCxTQUFTO0lBQ3JEO0lBRUEsT0FBTy9CLHFEQUFZQSxDQUFDaUMsSUFBSSxDQUFDTixVQUFVTixJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUNhLFFBQVFBLE1BQU0sQ0FBQyxFQUFFO0FBQ2xFO0FBRU8sZUFBZU4sUUFBUUgsS0FBYTtJQUN2QyxNQUFNVSxTQUFTLE1BQU1wQyw2Q0FBS0EsQ0FBQ08sR0FBRyxDQUFDLEdBQUc4QixRQUFRQyxHQUFHLENBQUNDLG1CQUFtQixDQUFDLFdBQVcsRUFBRWIsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6RmMsU0FBUztZQUNMQyxlQUFlLENBQUMsT0FBTyxFQUFFSixRQUFRQyxHQUFHLENBQUNJLG1CQUFtQixFQUFFO1FBQzlEO0lBQ0o7SUFDQSxPQUFPTixPQUFPZCxJQUFJO0FBQ3RCIiwic291cmNlcyI6WyIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL2FpLXJlc3VtZS1hZ2VudC9yb3V0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IFdlYlBERkxvYWRlciB9IGZyb20gXCJAbGFuZ2NoYWluL2NvbW11bml0eS9kb2N1bWVudF9sb2FkZXJzL3dlYi9wZGZcIjtcbmltcG9ydCB7IGlubmdlc3QgfSBmcm9tIFwiQC9pbm5nZXN0L2NsaWVudFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOk5leHRSZXF1ZXN0KSB7XG4gICAgY29uc3QgRm9ybURhdGEgPSBhd2FpdCByZXEuZm9ybURhdGEoKTtcbiAgICBjb25zdCByZXN1bWVGaWxlOmFueSA9IEZvcm1EYXRhLmdldChcInJlc3VtZUZpbGVcIik7XG4gICAgY29uc3QgcmVjb3JkSWQgPSBGb3JtRGF0YS5nZXQoXCJyZWNvcmRJZFwiKTtcblxuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBXZWJQREZMb2FkZXIocmVzdW1lRmlsZSlcbiAgICBjb25zdCBkb2NzID0gYXdhaXQgbG9hZGVyLmxvYWQoKTtcbiAgICBjb25zb2xlLmxvZyhkb2NzWzBdKTtcblxuICAgIGNvbnN0ICBhcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3VtZUZpbGUuYXJyYXlCdWZmZXIoKTtcbiAgICBjb25zdCBiYXNlNjQgPSBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlcikudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXG4gICAgY29uc3QgcmVzdWx0SWRzID0gYXdhaXQgaW5uZ2VzdC5zZW5kKHtcbiAgICAgICAgbmFtZTogXCJBaVJlc3VtZUFnZW50XCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHJlY29yZElkOiByZWNvcmRJZCxcbiAgICAgICAgICAgIGJhc2U2NFJlc3VtZUZpbGU6IGJhc2U2NCxcbiAgICAgICAgICAgIHBkZlRleHQ6IGRvY3NbMF0/LnBhZ2VDb250ZW50XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBydW5JZCA9IHJlc3VsdElkcz8uaWRzWzBdO1xuXG4gICAgbGV0IHJ1blN0YXR1cztcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBydW5TdGF0dXMgPSBhd2FpdCBnZXRSdW5zKHJ1bklkKTtcbiAgICAgICAgaWYgKHJ1blN0YXR1cz8uZGF0YVswXT8uc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgNTAwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJ1blN0YXR1cy5kYXRhPy5bMF0ub3V0cHV0Py5vdXRwdXRbMF0pOyAgXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSdW5zKHJ1bklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuSU5OR0VTVF9TRVJWRVJfSE9TVH0vdjEvZXZlbnRzLyR7cnVuSWR9L3J1bnNgLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5JTk5HRVNUX1NJR05JTkdfS0VZfWAsXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG59Il0sIm5hbWVzIjpbIldlYlBERkxvYWRlciIsImlubmdlc3QiLCJheGlvcyIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJGb3JtRGF0YSIsImZvcm1EYXRhIiwicmVzdW1lRmlsZSIsImdldCIsInJlY29yZElkIiwibG9hZGVyIiwiZG9jcyIsImxvYWQiLCJjb25zb2xlIiwibG9nIiwiYXJyYXlCdWZmZXIiLCJiYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJyZXN1bHRJZHMiLCJzZW5kIiwibmFtZSIsImRhdGEiLCJiYXNlNjRSZXN1bWVGaWxlIiwicGRmVGV4dCIsInBhZ2VDb250ZW50IiwicnVuSWQiLCJpZHMiLCJydW5TdGF0dXMiLCJnZXRSdW5zIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwianNvbiIsIm91dHB1dCIsInJlc3VsdCIsInByb2Nlc3MiLCJlbnYiLCJJTk5HRVNUX1NFUlZFUl9IT1NUIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJJTk5HRVNUX1NJR05JTkdfS0VZIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/ai-resume-agent/route.tsx\n");

/***/ }),

/***/ "(rsc)/./inngest/client.ts":
/*!***************************!*\
  !*** ./inngest/client.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inngest: () => (/* binding */ inngest)\n/* harmony export */ });\n/* harmony import */ var inngest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inngest */ \"(rsc)/./node_modules/inngest/index.js\");\n/* harmony import */ var inngest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inngest__WEBPACK_IMPORTED_MODULE_0__);\n\n// Create a client to send and receive events\nconst inngest = new inngest__WEBPACK_IMPORTED_MODULE_0__.Inngest({\n    id: \"ai-job-assistant\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9pbm5nZXN0L2NsaWVudC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0M7QUFFbEMsNkNBQTZDO0FBQ3RDLE1BQU1DLFVBQVUsSUFBSUQsNENBQU9BLENBQUM7SUFBRUUsSUFBSTtBQUFtQixHQUFHIiwic291cmNlcyI6WyIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvaW5uZ2VzdC9jbGllbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5uZ2VzdCB9IGZyb20gXCJpbm5nZXN0XCI7XG5cbi8vIENyZWF0ZSBhIGNsaWVudCB0byBzZW5kIGFuZCByZWNlaXZlIGV2ZW50c1xuZXhwb3J0IGNvbnN0IGlubmdlc3QgPSBuZXcgSW5uZ2VzdCh7IGlkOiBcImFpLWpvYi1hc3Npc3RhbnRcIiB9KTtcbiJdLCJuYW1lcyI6WyJJbm5nZXN0IiwiaW5uZ2VzdCIsImlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./inngest/client.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-resume-agent%2Froute&page=%2Fapi%2Fuser%2Fai-resume-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-resume-agent%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-resume-agent%2Froute&page=%2Fapi%2Fuser%2Fai-resume-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-resume-agent%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_ai_resume_agent_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/ai-resume-agent/route.tsx */ \"(rsc)/./app/api/user/ai-resume-agent/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/ai-resume-agent/route\",\n        pathname: \"/api/user/ai-resume-agent\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/ai-resume-agent/route\"\n    },\n    resolvedPagePath: \"/Users/harshshrivastav/Desktop/Coding Projects/Job-Assistant-Agent/app/api/user/ai-resume-agent/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_ai_resume_agent_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGYWktcmVzdW1lLWFnZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VyJTJGYWktcmVzdW1lLWFnZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlciUyRmFpLXJlc3VtZS1hZ2VudCUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZoYXJzaHNocml2YXN0YXYlMkZEZXNrdG9wJTJGQ29kaW5nJTIwUHJvamVjdHMlMkZKb2ItQXNzaXN0YW50LUFnZW50JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhcnNoc2hyaXZhc3RhdiUyRkRlc2t0b3AlMkZDb2RpbmclMjBQcm9qZWN0cyUyRkpvYi1Bc3Npc3RhbnQtQWdlbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lEO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL2FpLXJlc3VtZS1hZ2VudC9yb3V0ZS50c3hcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXIvYWktcmVzdW1lLWFnZW50L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdXNlci9haS1yZXN1bWUtYWdlbnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvYWktcmVzdW1lLWFnZW50L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2hhcnNoc2hyaXZhc3Rhdi9EZXNrdG9wL0NvZGluZyBQcm9qZWN0cy9Kb2ItQXNzaXN0YW50LUFnZW50L2FwcC9hcGkvdXNlci9haS1yZXN1bWUtYWdlbnQvcm91dGUudHN4XCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-resume-agent%2Froute&page=%2Fapi%2Fuser%2Fai-resume-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-resume-agent%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

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

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/get-intrinsic","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-symbols","vendor-chunks/delayed-stream","vendor-chunks/function-bind","vendor-chunks/es-set-tostringtag","vendor-chunks/get-proto","vendor-chunks/call-bind-apply-helpers","vendor-chunks/dunder-proto","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/has-flag","vendor-chunks/gopd","vendor-chunks/es-define-property","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/inngest","vendor-chunks/zod","vendor-chunks/tr46","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/hash.js","vendor-chunks/color-convert","vendor-chunks/chalk","vendor-chunks/uuid","vendor-chunks/ansi-styles","vendor-chunks/webidl-conversions","vendor-chunks/color-name","vendor-chunks/serialize-error-cjs","vendor-chunks/inherits","vendor-chunks/json-stringify-safe","vendor-chunks/canonicalize","vendor-chunks/cross-fetch","vendor-chunks/ansi-regex","vendor-chunks/minimalistic-assert","vendor-chunks/strip-ansi","vendor-chunks/@langchain","vendor-chunks/langsmith","vendor-chunks/@cfworker","vendor-chunks/retry","vendor-chunks/p-queue","vendor-chunks/p-timeout","vendor-chunks/p-retry","vendor-chunks/p-finally","vendor-chunks/eventemitter3","vendor-chunks/decamelize","vendor-chunks/camelcase"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fai-resume-agent%2Froute&page=%2Fapi%2Fuser%2Fai-resume-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fai-resume-agent%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();