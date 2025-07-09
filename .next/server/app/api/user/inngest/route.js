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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var inngest_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inngest/next */ \"(rsc)/./node_modules/inngest/next.js\");\n/* harmony import */ var _inngest_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../inngest/client */ \"(rsc)/./inngest/client.ts\");\n/* harmony import */ var _inngest_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../inngest/functions */ \"(rsc)/./inngest/functions.ts\");\n\n\n // Correct import path\nconst { GET, POST, PUT } = (0,inngest_next__WEBPACK_IMPORTED_MODULE_0__.serve)({\n    client: _inngest_client__WEBPACK_IMPORTED_MODULE_1__.inngest,\n    functions: [\n        _inngest_functions__WEBPACK_IMPORTED_MODULE_2__.AiJobAssistant,\n        _inngest_functions__WEBPACK_IMPORTED_MODULE_2__.AiResumeAgent\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvaW5uZ2VzdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUM7QUFDZ0I7QUFDcUMsQ0FBRSxzQkFBc0I7QUFFM0csTUFBTSxFQUFFSSxHQUFHLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFLEdBQUdOLG1EQUFLQSxDQUFDO0lBQ3RDTyxRQUFRTixvREFBT0E7SUFDZk8sV0FBVztRQUNUTiw4REFBY0E7UUFDZEMsNkRBQWFBO0tBQ2Q7QUFDSCxHQUFHIiwic291cmNlcyI6WyIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL2lubmdlc3Qvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VydmUgfSBmcm9tIFwiaW5uZ2VzdC9uZXh0XCI7XG5pbXBvcnQgeyBpbm5nZXN0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2lubmdlc3QvY2xpZW50XCI7XG5pbXBvcnQgeyBBaUpvYkFzc2lzdGFudCwgQWlSZXN1bWVBZ2VudCwgaGVsbG9Xb3JsZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbm5nZXN0L2Z1bmN0aW9uc1wiOyAgLy8gQ29ycmVjdCBpbXBvcnQgcGF0aFxuXG5leHBvcnQgY29uc3QgeyBHRVQsIFBPU1QsIFBVVCB9ID0gc2VydmUoe1xuICBjbGllbnQ6IGlubmdlc3QsICAvLyBQYXNzIHRoZSBjbGllbnRcbiAgZnVuY3Rpb25zOiBbXG4gICAgQWlKb2JBc3Npc3RhbnQsXG4gICAgQWlSZXN1bWVBZ2VudFxuICBdLCAgLy8gUGFzcyB0aGUgZnVuY3Rpb24gaGVyZVxufSk7XG4iXSwibmFtZXMiOlsic2VydmUiLCJpbm5nZXN0IiwiQWlKb2JBc3Npc3RhbnQiLCJBaVJlc3VtZUFnZW50IiwiR0VUIiwiUE9TVCIsIlBVVCIsImNsaWVudCIsImZ1bmN0aW9ucyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/inngest/route.ts\n");

/***/ }),

/***/ "(rsc)/./configs/db.tsx":
/*!************************!*\
  !*** ./configs/db.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_neon_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/neon-http */ \"(rsc)/./node_modules/drizzle-orm/neon-http/driver.js\");\n\nconst db = (0,drizzle_orm_neon_http__WEBPACK_IMPORTED_MODULE_0__.drizzle)(\"postgresql://neondb_owner:npg_dQkKYBL0Ns6T@ep-long-mud-a8n5yn0i-pooler.eastus2.azure.neon.tech/Job%20Assistant%20Agent?sslmode=require&channel_binding=require\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWdzL2RiLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFnRDtBQUN6QyxNQUFNQyxLQUFLRCw4REFBT0EsQ0FBQ0UsZ0tBQWlELEVBQUciLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9jb25maWdzL2RiLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkcml6emxlIH0gZnJvbSAnZHJpenpsZS1vcm0vbmVvbi1odHRwJztcbmV4cG9ydCBjb25zdCBkYiA9IGRyaXp6bGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTkVPTl9EQl9DT05ORUNUSU9OX1NUUklORyEpOyJdLCJuYW1lcyI6WyJkcml6emxlIiwiZGIiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTkVPTl9EQl9DT05ORUNUSU9OX1NUUklORyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./configs/db.tsx\n");

/***/ }),

/***/ "(rsc)/./configs/schema.ts":
/*!***************************!*\
  !*** ./configs/schema.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HistoryTable: () => (/* binding */ HistoryTable),\n/* harmony export */   usersTable: () => (/* binding */ usersTable)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/varchar.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/json.js\");\n\nconst usersTable = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"users\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.integer)().primaryKey().generatedAlwaysAsIdentity(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)({\n        length: 255\n    }).notNull(),\n    email: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)({\n        length: 255\n    }).notNull().unique()\n});\nconst HistoryTable = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('historyTable', {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.integer)().primaryKey().generatedAlwaysAsIdentity(),\n    recordId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)().notNull(),\n    content: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.json)(),\n    userEmail: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)('userEmail').references(()=>usersTable.email),\n    createdAt: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(),\n    aiAgentType: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(),\n    metaData: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWdzL3NjaGVtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDcUU7QUFDOUQsTUFBTUksYUFBYUgsNERBQU9BLENBQUMsU0FBUztJQUN2Q0ksSUFBSUwsNERBQU9BLEdBQUdNLFVBQVUsR0FBR0MseUJBQXlCO0lBQ3BEQyxNQUFNTiw0REFBT0EsQ0FBQztRQUFFTyxRQUFRO0lBQUksR0FBR0MsT0FBTztJQUN0Q0MsT0FBT1QsNERBQU9BLENBQUM7UUFBRU8sUUFBUTtJQUFJLEdBQUdDLE9BQU8sR0FBR0UsTUFBTTtBQUVwRCxHQUFHO0FBRUksTUFBTUMsZUFBZVosNERBQU9BLENBQUMsZ0JBQWdCO0lBQ2hESSxJQUFJTCw0REFBT0EsR0FBR00sVUFBVSxHQUFHQyx5QkFBeUI7SUFDcERPLFVBQVVaLDREQUFPQSxHQUFHUSxPQUFPO0lBQzNCSyxTQUFRWix5REFBSUE7SUFDWmEsV0FBVWQsNERBQU9BLENBQUMsYUFBYWUsVUFBVSxDQUFDLElBQUliLFdBQVdPLEtBQUs7SUFDOURPLFdBQVdoQiw0REFBT0E7SUFDbEJpQixhQUFhakIsNERBQU9BO0lBQ3BCa0IsVUFBVWxCLDREQUFPQTtBQUVyQixHQUFFIiwic291cmNlcyI6WyIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvY29uZmlncy9zY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWV0YWRhdGEgfSBmcm9tIFwiQC9hcHAvbGF5b3V0XCI7XG5pbXBvcnQgeyBpbnRlZ2VyLCBwZ1RhYmxlLCB2YXJjaGFyLGpzb24gfSBmcm9tIFwiZHJpenpsZS1vcm0vcGctY29yZVwiO1xuZXhwb3J0IGNvbnN0IHVzZXJzVGFibGUgPSBwZ1RhYmxlKFwidXNlcnNcIiwge1xuICAgIGlkOiBpbnRlZ2VyKCkucHJpbWFyeUtleSgpLmdlbmVyYXRlZEFsd2F5c0FzSWRlbnRpdHkoKSxcbiAgICBuYW1lOiB2YXJjaGFyKHsgbGVuZ3RoOiAyNTUgfSkubm90TnVsbCgpLFxuICAgIGVtYWlsOiB2YXJjaGFyKHsgbGVuZ3RoOiAyNTUgfSkubm90TnVsbCgpLnVuaXF1ZSgpLFxuXG59KTtcblxuZXhwb3J0IGNvbnN0IEhpc3RvcnlUYWJsZSA9IHBnVGFibGUoJ2hpc3RvcnlUYWJsZScsIHtcbiAgICBpZDogaW50ZWdlcigpLnByaW1hcnlLZXkoKS5nZW5lcmF0ZWRBbHdheXNBc0lkZW50aXR5KCksXG4gICAgcmVjb3JkSWQ6IHZhcmNoYXIoKS5ub3ROdWxsKCksXG4gICAgY29udGVudDpqc29uKCksXG4gICAgdXNlckVtYWlsOnZhcmNoYXIoJ3VzZXJFbWFpbCcpLnJlZmVyZW5jZXMoKCk9PnVzZXJzVGFibGUuZW1haWwpLFxuICAgIGNyZWF0ZWRBdDogdmFyY2hhcigpLFxuICAgIGFpQWdlbnRUeXBlOiB2YXJjaGFyKCksXG4gICAgbWV0YURhdGE6IHZhcmNoYXIoKVxuXG59KSJdLCJuYW1lcyI6WyJpbnRlZ2VyIiwicGdUYWJsZSIsInZhcmNoYXIiLCJqc29uIiwidXNlcnNUYWJsZSIsImlkIiwicHJpbWFyeUtleSIsImdlbmVyYXRlZEFsd2F5c0FzSWRlbnRpdHkiLCJuYW1lIiwibGVuZ3RoIiwibm90TnVsbCIsImVtYWlsIiwidW5pcXVlIiwiSGlzdG9yeVRhYmxlIiwicmVjb3JkSWQiLCJjb250ZW50IiwidXNlckVtYWlsIiwicmVmZXJlbmNlcyIsImNyZWF0ZWRBdCIsImFpQWdlbnRUeXBlIiwibWV0YURhdGEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./configs/schema.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AiJobAssistant: () => (/* binding */ AiJobAssistant),\n/* harmony export */   AiJobAssistantAgent: () => (/* binding */ AiJobAssistantAgent),\n/* harmony export */   AiResumeAgent: () => (/* binding */ AiResumeAgent),\n/* harmony export */   AiResumeAnalyzerAgent: () => (/* binding */ AiResumeAnalyzerAgent),\n/* harmony export */   helloWorld: () => (/* binding */ helloWorld)\n/* harmony export */ });\n/* harmony import */ var _configs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/configs/db */ \"(rsc)/./configs/db.tsx\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ \"(rsc)/./inngest/client.ts\");\n/* harmony import */ var _inngest_agent_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inngest/agent-kit */ \"(rsc)/./node_modules/@inngest/agent-kit/dist/index.js\");\n/* harmony import */ var imagekit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! imagekit */ \"(rsc)/../../../node_modules/imagekit/dist/index.js\");\n/* harmony import */ var imagekit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(imagekit__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _configs_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/configs/schema */ \"(rsc)/./configs/schema.ts\");\n\n // Ensure correct import\n\n\n\nconst helloWorld = _client__WEBPACK_IMPORTED_MODULE_1__.inngest.createFunction({\n    id: \"hello-world\"\n}, {\n    event: \"test/hello.world\"\n}, async ({ event, step })=>{\n    await step.sleep(\"wait-a-moment\", \"1s\");\n    return {\n        message: `Hello ${event.data.email}!`\n    };\n});\nconst AiJobAssistantAgent = (0,_inngest_agent_kit__WEBPACK_IMPORTED_MODULE_2__.createAgent)({\n    name: \"AI Job Assistant\",\n    description: \"An AI Job Assistant that helps users with job-related queries.\",\n    system: `You are a helpful AI job assistant designed to guide users in finding job opportunities, optimizing resumes, preparing for interviews, and offering career advice. Be empathetic, professional, and provide personalized recommendations based on users' skills and goals.`,\n    model: (0,_inngest_agent_kit__WEBPACK_IMPORTED_MODULE_2__.gemini)({\n        model: \"gemini-2.5-pro\",\n        apiKey: process.env.GEMINI_API_KEY\n    })\n});\nconst AiResumeAnalyzerAgent = (0,_inngest_agent_kit__WEBPACK_IMPORTED_MODULE_2__.createAgent)({\n    name: 'AiResumeAnalyzerAgent',\n    description: '',\n    system: `You are an advanced AI Resume Analyzer Agent.\n\nYour task is to evaluate a candidate's resume and return a detailed analysis in the following structured JSON schema format.\n\nThe schema must match the layout and structure of a visual UI that includes overall score, section scores, summary feedback, improvement tips, strengths, and weaknesses.\n\n\n\n📤 INPUT: I will provide a plain text resume.\n\n🎯 GOAL: Output a JSON report as per the schema below. The report should reflect:\n\n\n\noverall_score (0–100)\n\n\n\noverall_feedback (short message e.g., \"Excellent\", \"Needs improvement\")\n\n\n\nsummary_comment (1–2 sentence evaluation summary)\n\n\n\nSection scores for:\n\n\n\nContact Info\n\n\n\nExperience\n\n\n\nEducation\n\n\n\nSkills\n\n\n\nEach section should include:\n\n\n\nscore (as percentage)\n\n\n\nOptional comment about that section\n\n\n\nTips for improvement (3–5 tips)\n\n\n\nWhat’s Good (1–3 strengths)\n\n\n\nNeeds Improvement (1–3 weaknesses)\n\n\n\n🧠 Output JSON Schema:\n\njson\n\nCopy\n\nEdit\n\n{\n\n  \"overall_score\": 85,\n\n  \"overall_feedback\": \"Excellent!\",\n\n  \"summary_comment\": \"Your resume is strong, but there are areas to refine.\",\n\n  \"sections\": {\n\n    \"contact_info\": {\n\n      \"score\": 95,\n\n      \"comment\": \"Perfectly structured and complete.\"\n\n    },\n\n    \"experience\": {\n\n      \"score\": 88,\n\n      \"comment\": \"Strong bullet points and impact.\"\n\n    },\n\n    \"education\": {\n\n      \"score\": 70,\n\n      \"comment\": \"Consider adding relevant coursework.\"\n\n    },\n\n    \"skills\": {\n\n      \"score\": 60,\n\n      \"comment\": \"Expand on specific skill proficiencies.\"\n\n    }\n\n  },\n\n  \"tips_for_improvement\": [\n\n    \"Add more numbers and metrics to your experience section to show impact.\",\n\n    \"Integrate more industry-specific keywords relevant to your target roles.\",\n\n    \"Start bullet points with strong action verbs to make your achievements stand out.\"\n\n  ],\n\n  \"whats_good\": [\n\n    \"Clean and professional formatting.\",\n\n    \"Clear and concise contact information.\",\n\n    \"Relevant work experience.\"\n\n  ],\n\n  \"needs_improvement\": [\n\n    \"Skills section lacks detail.\",\n\n    \"Some experience bullet points could be stronger.\",\n\n    \"Missing a professional summary/objective.\"\n\n  ]\n\n} \n`,\n    model: (0,_inngest_agent_kit__WEBPACK_IMPORTED_MODULE_2__.gemini)({\n        model: \"gemini-2.5-pro\",\n        apiKey: process.env.GEMINI_API_KEY\n    })\n});\nconst AiJobAssistant = _client__WEBPACK_IMPORTED_MODULE_1__.inngest.createFunction({\n    id: \"AiJobAssistant\"\n}, {\n    event: \"AiJobAssistant\"\n}, async ({ event, step })=>{\n    const { userInput } = await event?.data;\n    const result = await AiJobAssistantAgent.run(userInput);\n    return result;\n});\nvar imagekit = new (imagekit__WEBPACK_IMPORTED_MODULE_3___default())({\n    //@ts-ignore\n    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,\n    //@ts-ignore\n    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,\n    //@ts-ignore\n    urlEndpoint: process.env.IMAGEKIT_ENDPOINT_URL\n});\nconst AiResumeAgent = _client__WEBPACK_IMPORTED_MODULE_1__.inngest.createFunction({\n    id: \"AiResumeAgent\"\n}, {\n    event: \"AiResumeAgent\"\n}, async ({ event, step })=>{\n    const { recordId, base64ResumeFile, pdfText, aiAgentType, userEmail } = await event.data;\n    // Upload file to cloud\n    const uploadFileUrl = await step.run(\"uploadImage\", async ()=>{\n        const imageKitFile = await imagekit.upload({\n            file: base64ResumeFile,\n            fileName: `${Date.now()}.pdf`,\n            isPublished: true\n        });\n        return imageKitFile.url;\n    });\n    const aiResumeReport = await AiResumeAnalyzerAgent.run(pdfText);\n    //@ts-ignore\n    const rawContent = aiResumeReport.output[0].content;\n    const rawContentJson = rawContent.replace('```json', '').replace('```', '');\n    const parseJson = JSON.parse(rawContentJson);\n    // return parseJson;\n    // Save to Database\n    const saveToDb = await step.run('SaveToDb', async ()=>{\n        const result = await _configs_db__WEBPACK_IMPORTED_MODULE_0__.db.insert(_configs_schema__WEBPACK_IMPORTED_MODULE_4__.HistoryTable).values({\n            recordId: recordId,\n            content: parseJson,\n            aiAgentType: aiAgentType,\n            createdAt: new Date().toString(),\n            userEmail: userEmail,\n            metaData: uploadFileUrl\n        });\n        console.log(result);\n        return parseJson;\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9pbm5nZXN0L2Z1bmN0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNDLENBQUUsd0JBQXdCO0FBQ2U7QUFFNUM7QUFDZ0I7QUFFekMsTUFBTU0sYUFBYUwsNENBQU9BLENBQUNNLGNBQWMsQ0FDOUM7SUFBRUMsSUFBSTtBQUFjLEdBQ3BCO0lBQUVDLE9BQU87QUFBbUIsR0FDNUIsT0FBTyxFQUFFQSxLQUFLLEVBQUVDLElBQUksRUFBRTtJQUNwQixNQUFNQSxLQUFLQyxLQUFLLENBQUMsaUJBQWlCO0lBQ2xDLE9BQU87UUFBRUMsU0FBUyxDQUFDLE1BQU0sRUFBRUgsTUFBTUksSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQUM7QUFDakQsR0FDQTtBQUVLLE1BQU1DLHNCQUFzQmIsK0RBQVdBLENBQUM7SUFDN0NjLE1BQUs7SUFDTEMsYUFBYTtJQUNiQyxRQUFRLENBQUMsMFFBQTBRLENBQUM7SUFDcFJDLE9BQU9oQiwwREFBTUEsQ0FBQztRQUNaZ0IsT0FBTTtRQUNOQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7SUFDcEM7QUFDRixHQUFFO0FBRUssTUFBTUMsd0JBQXNCdEIsK0RBQVdBLENBQUM7SUFDN0NjLE1BQU07SUFDTkMsYUFBWTtJQUNaQyxRQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlKVixDQUFDO0lBQ0NDLE9BQU9oQiwwREFBTUEsQ0FBQztRQUNaZ0IsT0FBTTtRQUNOQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGNBQWM7SUFDcEM7QUFFRixHQUFFO0FBRUssTUFBTUUsaUJBQWlCeEIsNENBQU9BLENBQUNNLGNBQWMsQ0FDbEQ7SUFBQ0MsSUFBRztBQUFnQixHQUNwQjtJQUFDQyxPQUFNO0FBQWdCLEdBQ3ZCLE9BQU8sRUFBRUEsS0FBSyxFQUFFQyxJQUFJLEVBQUU7SUFDcEIsTUFBTSxFQUFDZ0IsU0FBUyxFQUFDLEdBQUcsTUFBTWpCLE9BQU9JO0lBQ2pDLE1BQU1jLFNBQVMsTUFBTVosb0JBQW9CYSxHQUFHLENBQUNGO0lBQzdDLE9BQU9DO0FBQ1QsR0FDRDtBQUVELElBQUlFLFdBQVcsSUFBSXpCLGlEQUFRQSxDQUFDO0lBQzFCLFlBQVk7SUFDWjBCLFdBQVlULFFBQVFDLEdBQUcsQ0FBQ1MsbUJBQW1CO0lBQzNDLFlBQVk7SUFDWkMsWUFBYVgsUUFBUUMsR0FBRyxDQUFDVyxvQkFBb0I7SUFDN0MsWUFBWTtJQUNaQyxhQUFjYixRQUFRQyxHQUFHLENBQUNhLHFCQUFxQjtBQUNqRDtBQUVPLE1BQU1DLGdCQUFjbkMsNENBQU9BLENBQUNNLGNBQWMsQ0FDL0M7SUFBQ0MsSUFBRztBQUFlLEdBQ25CO0lBQUNDLE9BQU07QUFBZSxHQUN0QixPQUFNLEVBQUNBLEtBQUssRUFBQ0MsSUFBSSxFQUFDO0lBQ2hCLE1BQU0sRUFBQzJCLFFBQVEsRUFBRUMsZ0JBQWdCLEVBQUNDLE9BQU8sRUFBQ0MsV0FBVyxFQUFDQyxTQUFTLEVBQUMsR0FBRyxNQUFNaEMsTUFBTUksSUFBSTtJQUNuRix1QkFBdUI7SUFDdkIsTUFBTTZCLGdCQUFnQixNQUFNaEMsS0FBS2tCLEdBQUcsQ0FBQyxlQUFjO1FBQ2pELE1BQU1lLGVBQWdCLE1BQU1kLFNBQVNlLE1BQU0sQ0FBQztZQUMxQ0MsTUFBTVA7WUFDTlEsVUFBVSxHQUFHQyxLQUFLQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQzdCQyxhQUFhO1FBQ2Y7UUFDQSxPQUFPTixhQUFhTyxHQUFHO0lBQ3pCO0lBQ0EsTUFBTUMsaUJBQWlCLE1BQU0zQixzQkFBc0JJLEdBQUcsQ0FBQ1c7SUFDdkQsWUFBWTtJQUNaLE1BQU1hLGFBQVdELGVBQWVFLE1BQU0sQ0FBQyxFQUFFLENBQUNDLE9BQU87SUFDakQsTUFBTUMsaUJBQWlCSCxXQUFXSSxPQUFPLENBQUMsV0FBVSxJQUFJQSxPQUFPLENBQUMsT0FBTTtJQUN0RSxNQUFNQyxZQUFZQyxLQUFLQyxLQUFLLENBQUNKO0lBQzdCLG9CQUFvQjtJQUVwQixtQkFBbUI7SUFDakIsTUFBTUssV0FBVyxNQUFNbEQsS0FBS2tCLEdBQUcsQ0FBQyxZQUFXO1FBQzNDLE1BQU1ELFNBQVMsTUFBTTNCLDJDQUFFQSxDQUFDNkQsTUFBTSxDQUFDeEQseURBQVlBLEVBQUV5RCxNQUFNLENBQUM7WUFDbER6QixVQUFVQTtZQUNWaUIsU0FBU0c7WUFDVGpCLGFBQWFBO1lBQ2J1QixXQUFXLElBQUtoQixPQUFRaUIsUUFBUTtZQUNoQ3ZCLFdBQVdBO1lBQ1h3QixVQUFVdkI7UUFDWjtRQUNBd0IsUUFBUUMsR0FBRyxDQUFDeEM7UUFDWixPQUFPOEI7SUFDVDtBQUNGLEdBQ0QiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9pbm5nZXN0L2Z1bmN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2NvbmZpZ3MvZGJcIjtcbmltcG9ydCB7IGlubmdlc3QgfSBmcm9tIFwiLi9jbGllbnRcIjsgIC8vIEVuc3VyZSBjb3JyZWN0IGltcG9ydFxuaW1wb3J0IHsgY3JlYXRlQWdlbnQsIGFudGhyb3BpYywgb3BlbmFpLCBnZW1pbmkgfSBmcm9tICdAaW5uZ2VzdC9hZ2VudC1raXQnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcImRvbWFpblwiO1xuaW1wb3J0IEltYWdlS2l0IGZyb20gJ2ltYWdla2l0JztcbmltcG9ydCB7IEhpc3RvcnlUYWJsZSB9IGZyb20gXCJAL2NvbmZpZ3Mvc2NoZW1hXCI7XG5cbmV4cG9ydCBjb25zdCBoZWxsb1dvcmxkID0gaW5uZ2VzdC5jcmVhdGVGdW5jdGlvbihcbiAgeyBpZDogXCJoZWxsby13b3JsZFwiIH0sXG4gIHsgZXZlbnQ6IFwidGVzdC9oZWxsby53b3JsZFwiIH0sXG4gIGFzeW5jICh7IGV2ZW50LCBzdGVwIH0pID0+IHtcbiAgICBhd2FpdCBzdGVwLnNsZWVwKFwid2FpdC1hLW1vbWVudFwiLCBcIjFzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IGBIZWxsbyAke2V2ZW50LmRhdGEuZW1haWx9IWAgfTtcbiAgfVxuKTtcblxuZXhwb3J0IGNvbnN0IEFpSm9iQXNzaXN0YW50QWdlbnQgPSBjcmVhdGVBZ2VudCh7XG4gIG5hbWU6XCJBSSBKb2IgQXNzaXN0YW50XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFuIEFJIEpvYiBBc3Npc3RhbnQgdGhhdCBoZWxwcyB1c2VycyB3aXRoIGpvYi1yZWxhdGVkIHF1ZXJpZXMuXCIsXG4gIHN5c3RlbTogYFlvdSBhcmUgYSBoZWxwZnVsIEFJIGpvYiBhc3Npc3RhbnQgZGVzaWduZWQgdG8gZ3VpZGUgdXNlcnMgaW4gZmluZGluZyBqb2Igb3Bwb3J0dW5pdGllcywgb3B0aW1pemluZyByZXN1bWVzLCBwcmVwYXJpbmcgZm9yIGludGVydmlld3MsIGFuZCBvZmZlcmluZyBjYXJlZXIgYWR2aWNlLiBCZSBlbXBhdGhldGljLCBwcm9mZXNzaW9uYWwsIGFuZCBwcm92aWRlIHBlcnNvbmFsaXplZCByZWNvbW1lbmRhdGlvbnMgYmFzZWQgb24gdXNlcnMnIHNraWxscyBhbmQgZ29hbHMuYCxcbiAgbW9kZWw6IGdlbWluaSh7XG4gICAgbW9kZWw6XCJnZW1pbmktMi41LXByb1wiLFxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuR0VNSU5JX0FQSV9LRVlcbiAgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBBaVJlc3VtZUFuYWx5emVyQWdlbnQ9Y3JlYXRlQWdlbnQoe1xuICBuYW1lOiAnQWlSZXN1bWVBbmFseXplckFnZW50JyxcbiAgZGVzY3JpcHRpb246JycsXG4gIHN5c3RlbTpgWW91IGFyZSBhbiBhZHZhbmNlZCBBSSBSZXN1bWUgQW5hbHl6ZXIgQWdlbnQuXG5cbllvdXIgdGFzayBpcyB0byBldmFsdWF0ZSBhIGNhbmRpZGF0ZSdzIHJlc3VtZSBhbmQgcmV0dXJuIGEgZGV0YWlsZWQgYW5hbHlzaXMgaW4gdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmVkIEpTT04gc2NoZW1hIGZvcm1hdC5cblxuVGhlIHNjaGVtYSBtdXN0IG1hdGNoIHRoZSBsYXlvdXQgYW5kIHN0cnVjdHVyZSBvZiBhIHZpc3VhbCBVSSB0aGF0IGluY2x1ZGVzIG92ZXJhbGwgc2NvcmUsIHNlY3Rpb24gc2NvcmVzLCBzdW1tYXJ5IGZlZWRiYWNrLCBpbXByb3ZlbWVudCB0aXBzLCBzdHJlbmd0aHMsIGFuZCB3ZWFrbmVzc2VzLlxuXG5cblxu8J+TpCBJTlBVVDogSSB3aWxsIHByb3ZpZGUgYSBwbGFpbiB0ZXh0IHJlc3VtZS5cblxu8J+OryBHT0FMOiBPdXRwdXQgYSBKU09OIHJlcG9ydCBhcyBwZXIgdGhlIHNjaGVtYSBiZWxvdy4gVGhlIHJlcG9ydCBzaG91bGQgcmVmbGVjdDpcblxuXG5cbm92ZXJhbGxfc2NvcmUgKDDigJMxMDApXG5cblxuXG5vdmVyYWxsX2ZlZWRiYWNrIChzaG9ydCBtZXNzYWdlIGUuZy4sIFwiRXhjZWxsZW50XCIsIFwiTmVlZHMgaW1wcm92ZW1lbnRcIilcblxuXG5cbnN1bW1hcnlfY29tbWVudCAoMeKAkzIgc2VudGVuY2UgZXZhbHVhdGlvbiBzdW1tYXJ5KVxuXG5cblxuU2VjdGlvbiBzY29yZXMgZm9yOlxuXG5cblxuQ29udGFjdCBJbmZvXG5cblxuXG5FeHBlcmllbmNlXG5cblxuXG5FZHVjYXRpb25cblxuXG5cblNraWxsc1xuXG5cblxuRWFjaCBzZWN0aW9uIHNob3VsZCBpbmNsdWRlOlxuXG5cblxuc2NvcmUgKGFzIHBlcmNlbnRhZ2UpXG5cblxuXG5PcHRpb25hbCBjb21tZW50IGFib3V0IHRoYXQgc2VjdGlvblxuXG5cblxuVGlwcyBmb3IgaW1wcm92ZW1lbnQgKDPigJM1IHRpcHMpXG5cblxuXG5XaGF04oCZcyBHb29kICgx4oCTMyBzdHJlbmd0aHMpXG5cblxuXG5OZWVkcyBJbXByb3ZlbWVudCAoMeKAkzMgd2Vha25lc3NlcylcblxuXG5cbvCfp6AgT3V0cHV0IEpTT04gU2NoZW1hOlxuXG5qc29uXG5cbkNvcHlcblxuRWRpdFxuXG57XG5cbiAgXCJvdmVyYWxsX3Njb3JlXCI6IDg1LFxuXG4gIFwib3ZlcmFsbF9mZWVkYmFja1wiOiBcIkV4Y2VsbGVudCFcIixcblxuICBcInN1bW1hcnlfY29tbWVudFwiOiBcIllvdXIgcmVzdW1lIGlzIHN0cm9uZywgYnV0IHRoZXJlIGFyZSBhcmVhcyB0byByZWZpbmUuXCIsXG5cbiAgXCJzZWN0aW9uc1wiOiB7XG5cbiAgICBcImNvbnRhY3RfaW5mb1wiOiB7XG5cbiAgICAgIFwic2NvcmVcIjogOTUsXG5cbiAgICAgIFwiY29tbWVudFwiOiBcIlBlcmZlY3RseSBzdHJ1Y3R1cmVkIGFuZCBjb21wbGV0ZS5cIlxuXG4gICAgfSxcblxuICAgIFwiZXhwZXJpZW5jZVwiOiB7XG5cbiAgICAgIFwic2NvcmVcIjogODgsXG5cbiAgICAgIFwiY29tbWVudFwiOiBcIlN0cm9uZyBidWxsZXQgcG9pbnRzIGFuZCBpbXBhY3QuXCJcblxuICAgIH0sXG5cbiAgICBcImVkdWNhdGlvblwiOiB7XG5cbiAgICAgIFwic2NvcmVcIjogNzAsXG5cbiAgICAgIFwiY29tbWVudFwiOiBcIkNvbnNpZGVyIGFkZGluZyByZWxldmFudCBjb3Vyc2V3b3JrLlwiXG5cbiAgICB9LFxuXG4gICAgXCJza2lsbHNcIjoge1xuXG4gICAgICBcInNjb3JlXCI6IDYwLFxuXG4gICAgICBcImNvbW1lbnRcIjogXCJFeHBhbmQgb24gc3BlY2lmaWMgc2tpbGwgcHJvZmljaWVuY2llcy5cIlxuXG4gICAgfVxuXG4gIH0sXG5cbiAgXCJ0aXBzX2Zvcl9pbXByb3ZlbWVudFwiOiBbXG5cbiAgICBcIkFkZCBtb3JlIG51bWJlcnMgYW5kIG1ldHJpY3MgdG8geW91ciBleHBlcmllbmNlIHNlY3Rpb24gdG8gc2hvdyBpbXBhY3QuXCIsXG5cbiAgICBcIkludGVncmF0ZSBtb3JlIGluZHVzdHJ5LXNwZWNpZmljIGtleXdvcmRzIHJlbGV2YW50IHRvIHlvdXIgdGFyZ2V0IHJvbGVzLlwiLFxuXG4gICAgXCJTdGFydCBidWxsZXQgcG9pbnRzIHdpdGggc3Ryb25nIGFjdGlvbiB2ZXJicyB0byBtYWtlIHlvdXIgYWNoaWV2ZW1lbnRzIHN0YW5kIG91dC5cIlxuXG4gIF0sXG5cbiAgXCJ3aGF0c19nb29kXCI6IFtcblxuICAgIFwiQ2xlYW4gYW5kIHByb2Zlc3Npb25hbCBmb3JtYXR0aW5nLlwiLFxuXG4gICAgXCJDbGVhciBhbmQgY29uY2lzZSBjb250YWN0IGluZm9ybWF0aW9uLlwiLFxuXG4gICAgXCJSZWxldmFudCB3b3JrIGV4cGVyaWVuY2UuXCJcblxuICBdLFxuXG4gIFwibmVlZHNfaW1wcm92ZW1lbnRcIjogW1xuXG4gICAgXCJTa2lsbHMgc2VjdGlvbiBsYWNrcyBkZXRhaWwuXCIsXG5cbiAgICBcIlNvbWUgZXhwZXJpZW5jZSBidWxsZXQgcG9pbnRzIGNvdWxkIGJlIHN0cm9uZ2VyLlwiLFxuXG4gICAgXCJNaXNzaW5nIGEgcHJvZmVzc2lvbmFsIHN1bW1hcnkvb2JqZWN0aXZlLlwiXG5cbiAgXVxuXG59IFxuYCxcbiAgbW9kZWw6IGdlbWluaSh7XG4gICAgbW9kZWw6XCJnZW1pbmktMi41LXByb1wiLFxuICAgIGFwaUtleTogcHJvY2Vzcy5lbnYuR0VNSU5JX0FQSV9LRVlcbiAgfSlcblxufSlcblxuZXhwb3J0IGNvbnN0IEFpSm9iQXNzaXN0YW50ID0gaW5uZ2VzdC5jcmVhdGVGdW5jdGlvbihcbiAge2lkOlwiQWlKb2JBc3Npc3RhbnRcIn0sXG4gIHtldmVudDpcIkFpSm9iQXNzaXN0YW50XCJ9LFxuICBhc3luYyAoeyBldmVudCwgc3RlcCB9KSA9PiB7XG4gICAgY29uc3Qge3VzZXJJbnB1dH0gPSBhd2FpdCBldmVudD8uZGF0YTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBBaUpvYkFzc2lzdGFudEFnZW50LnJ1bih1c2VySW5wdXQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbilcblxudmFyIGltYWdla2l0ID0gbmV3IEltYWdlS2l0KHtcbiAgLy9AdHMtaWdub3JlXG4gIHB1YmxpY0tleSA6IHByb2Nlc3MuZW52LklNQUdFS0lUX1BVQkxJQ19LRVksXG4gIC8vQHRzLWlnbm9yZVxuICBwcml2YXRlS2V5IDogcHJvY2Vzcy5lbnYuSU1BR0VLSVRfUFJJVkFURV9LRVksXG4gIC8vQHRzLWlnbm9yZVxuICB1cmxFbmRwb2ludCA6IHByb2Nlc3MuZW52LklNQUdFS0lUX0VORFBPSU5UX1VSTFxufSk7XG5cbmV4cG9ydCBjb25zdCBBaVJlc3VtZUFnZW50PWlubmdlc3QuY3JlYXRlRnVuY3Rpb24oXG4gIHtpZDpcIkFpUmVzdW1lQWdlbnRcIn0sXG4gIHtldmVudDpcIkFpUmVzdW1lQWdlbnRcIn0sXG4gIGFzeW5jKHtldmVudCxzdGVwfSk9PntcbiAgICBjb25zdCB7cmVjb3JkSWQsIGJhc2U2NFJlc3VtZUZpbGUscGRmVGV4dCxhaUFnZW50VHlwZSx1c2VyRW1haWx9ID0gYXdhaXQgZXZlbnQuZGF0YTtcbiAgICAvLyBVcGxvYWQgZmlsZSB0byBjbG91ZFxuICAgIGNvbnN0IHVwbG9hZEZpbGVVcmwgPSBhd2FpdCBzdGVwLnJ1bihcInVwbG9hZEltYWdlXCIsYXN5bmMoKT0+e1xuICAgICAgY29uc3QgaW1hZ2VLaXRGaWxlID0gIGF3YWl0IGltYWdla2l0LnVwbG9hZCh7XG4gICAgICAgIGZpbGU6IGJhc2U2NFJlc3VtZUZpbGUsXG4gICAgICAgIGZpbGVOYW1lOiBgJHtEYXRlLm5vdygpfS5wZGZgLFxuICAgICAgICBpc1B1Ymxpc2hlZDogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVybiBpbWFnZUtpdEZpbGUudXJsO1xuICAgIH0pXG4gICAgY29uc3QgYWlSZXN1bWVSZXBvcnQgPSBhd2FpdCBBaVJlc3VtZUFuYWx5emVyQWdlbnQucnVuKHBkZlRleHQpO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIGNvbnN0IHJhd0NvbnRlbnQ9YWlSZXN1bWVSZXBvcnQub3V0cHV0WzBdLmNvbnRlbnQ7XG4gICAgY29uc3QgcmF3Q29udGVudEpzb24gPSByYXdDb250ZW50LnJlcGxhY2UoJ2BgYGpzb24nLCcnKS5yZXBsYWNlKCdgYGAnLCcnKTtcbiAgICBjb25zdCBwYXJzZUpzb24gPSBKU09OLnBhcnNlKHJhd0NvbnRlbnRKc29uKTtcbiAgICAvLyByZXR1cm4gcGFyc2VKc29uO1xuXG4gICAgLy8gU2F2ZSB0byBEYXRhYmFzZVxuICAgICAgY29uc3Qgc2F2ZVRvRGIgPSBhd2FpdCBzdGVwLnJ1bignU2F2ZVRvRGInLGFzeW5jKCk9PntcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmluc2VydChIaXN0b3J5VGFibGUpLnZhbHVlcyh7XG4gICAgICAgIHJlY29yZElkOiByZWNvcmRJZCxcbiAgICAgICAgY29udGVudDogcGFyc2VKc29uLFxuICAgICAgICBhaUFnZW50VHlwZTogYWlBZ2VudFR5cGUsXG4gICAgICAgIGNyZWF0ZWRBdDogKG5ldyBEYXRlKCkpLnRvU3RyaW5nKCksXG4gICAgICAgIHVzZXJFbWFpbDogdXNlckVtYWlsLFxuICAgICAgICBtZXRhRGF0YTogdXBsb2FkRmlsZVVybFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgcmV0dXJuIHBhcnNlSnNvbjtcbiAgICB9KVxuICB9XG4pXG4iXSwibmFtZXMiOlsiZGIiLCJpbm5nZXN0IiwiY3JlYXRlQWdlbnQiLCJnZW1pbmkiLCJJbWFnZUtpdCIsIkhpc3RvcnlUYWJsZSIsImhlbGxvV29ybGQiLCJjcmVhdGVGdW5jdGlvbiIsImlkIiwiZXZlbnQiLCJzdGVwIiwic2xlZXAiLCJtZXNzYWdlIiwiZGF0YSIsImVtYWlsIiwiQWlKb2JBc3Npc3RhbnRBZ2VudCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInN5c3RlbSIsIm1vZGVsIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIkdFTUlOSV9BUElfS0VZIiwiQWlSZXN1bWVBbmFseXplckFnZW50IiwiQWlKb2JBc3Npc3RhbnQiLCJ1c2VySW5wdXQiLCJyZXN1bHQiLCJydW4iLCJpbWFnZWtpdCIsInB1YmxpY0tleSIsIklNQUdFS0lUX1BVQkxJQ19LRVkiLCJwcml2YXRlS2V5IiwiSU1BR0VLSVRfUFJJVkFURV9LRVkiLCJ1cmxFbmRwb2ludCIsIklNQUdFS0lUX0VORFBPSU5UX1VSTCIsIkFpUmVzdW1lQWdlbnQiLCJyZWNvcmRJZCIsImJhc2U2NFJlc3VtZUZpbGUiLCJwZGZUZXh0IiwiYWlBZ2VudFR5cGUiLCJ1c2VyRW1haWwiLCJ1cGxvYWRGaWxlVXJsIiwiaW1hZ2VLaXRGaWxlIiwidXBsb2FkIiwiZmlsZSIsImZpbGVOYW1lIiwiRGF0ZSIsIm5vdyIsImlzUHVibGlzaGVkIiwidXJsIiwiYWlSZXN1bWVSZXBvcnQiLCJyYXdDb250ZW50Iiwib3V0cHV0IiwiY29udGVudCIsInJhd0NvbnRlbnRKc29uIiwicmVwbGFjZSIsInBhcnNlSnNvbiIsIkpTT04iLCJwYXJzZSIsInNhdmVUb0RiIiwiaW5zZXJ0IiwidmFsdWVzIiwiY3JlYXRlZEF0IiwidG9TdHJpbmciLCJtZXRhRGF0YSIsImNvbnNvbGUiLCJsb2ciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./inngest/functions.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/follow-redirects","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/get-intrinsic","vendor-chunks/asynckit","vendor-chunks/combined-stream","vendor-chunks/mime-types","vendor-chunks/proxy-from-env","vendor-chunks/ms","vendor-chunks/supports-color","vendor-chunks/has-symbols","vendor-chunks/delayed-stream","vendor-chunks/function-bind","vendor-chunks/es-set-tostringtag","vendor-chunks/get-proto","vendor-chunks/call-bind-apply-helpers","vendor-chunks/dunder-proto","vendor-chunks/math-intrinsics","vendor-chunks/es-errors","vendor-chunks/has-flag","vendor-chunks/gopd","vendor-chunks/es-define-property","vendor-chunks/hasown","vendor-chunks/has-tostringtag","vendor-chunks/es-object-atoms","vendor-chunks/inngest","vendor-chunks/zod","vendor-chunks/tr46","vendor-chunks/drizzle-orm","vendor-chunks/@neondatabase","vendor-chunks/semver","vendor-chunks/zod-to-json-schema","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/hash.js","vendor-chunks/color-convert","vendor-chunks/chalk","vendor-chunks/ansi-styles","vendor-chunks/webidl-conversions","vendor-chunks/color-name","vendor-chunks/serialize-error-cjs","vendor-chunks/inherits","vendor-chunks/json-stringify-safe","vendor-chunks/canonicalize","vendor-chunks/cross-fetch","vendor-chunks/ansi-regex","vendor-chunks/minimalistic-assert","vendor-chunks/strip-ansi","vendor-chunks/ajv","vendor-chunks/imagekit","vendor-chunks/gaxios","vendor-chunks/@inngest","vendor-chunks/@modelcontextprotocol","vendor-chunks/cross-spawn","vendor-chunks/@dmitryrechkin","vendor-chunks/xxhashjs","vendor-chunks/json-bigint","vendor-chunks/isexe","vendor-chunks/google-logging-utils","vendor-chunks/forwarded-parse","vendor-chunks/cuint","vendor-chunks/eventsource-parser","vendor-chunks/https-proxy-agent","vendor-chunks/gcp-metadata","vendor-chunks/agent-base","vendor-chunks/pkce-challenge","vendor-chunks/eventsource","vendor-chunks/lodash","vendor-chunks/hamming-distance","vendor-chunks/which","vendor-chunks/uri-js","vendor-chunks/shimmer","vendor-chunks/shebang-regex","vendor-chunks/shebang-command","vendor-chunks/path-key","vendor-chunks/json-schema-traverse","vendor-chunks/is-stream","vendor-chunks/fast-json-stable-stringify","vendor-chunks/fast-deep-equal","vendor-chunks/extend","vendor-chunks/bignumber.js"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Finngest%2Froute&page=%2Fapi%2Fuser%2Finngest%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Finngest%2Froute.ts&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();