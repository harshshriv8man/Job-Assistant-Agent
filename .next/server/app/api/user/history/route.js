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
exports.id = "app/api/user/history/route";
exports.ids = ["app/api/user/history/route"];
exports.modules = {

/***/ "(rsc)/./app/api/user/history/route.tsx":
/*!****************************************!*\
  !*** ./app/api/user/history/route.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _configs_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../configs/db */ \"(rsc)/./configs/db.tsx\");\n/* harmony import */ var _configs_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../configs/schema */ \"(rsc)/./configs/schema.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n\n // Importing HistoryTable schema\n // Importing NextResponse for handling responses\n // Importing currentUser from Clerk for user authentication\n // Importing eq for equality checks in queries\nasync function POST(req) {\n    const { content, recordId, aiAgentType } = await req.json();\n    const user = await (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__.currentUser)();\n    try {\n        // Insert Record\n        const result = await _configs_db__WEBPACK_IMPORTED_MODULE_0__.db.insert(_configs_schema__WEBPACK_IMPORTED_MODULE_1__.HistoryTable).values({\n            recordId: recordId,\n            content: content,\n            userEmail: user?.primaryEmailAddress?.emailAddress,\n            createdAt: new Date().toString(),\n            aiAgentType: aiAgentType\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(result);\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(e);\n    }\n}\nasync function PUT(req) {\n    const { content, recordId } = await req.json();\n    try {\n        // Insert Record\n        const result = await _configs_db__WEBPACK_IMPORTED_MODULE_0__.db.update(_configs_schema__WEBPACK_IMPORTED_MODULE_1__.HistoryTable).set({\n            content: content\n        }).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.eq)(_configs_schema__WEBPACK_IMPORTED_MODULE_1__.HistoryTable.recordId, recordId));\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(result);\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(e);\n    }\n}\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const recordId = searchParams.get('recordId');\n    try {\n        if (recordId) {\n            const result = await _configs_db__WEBPACK_IMPORTED_MODULE_0__.db.select().from(_configs_schema__WEBPACK_IMPORTED_MODULE_1__.HistoryTable).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.eq)(_configs_schema__WEBPACK_IMPORTED_MODULE_1__.HistoryTable.recordId, recordId));\n            return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(result[0]);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({});\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvaGlzdG9yeS9yb3V0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDZ0IsQ0FBRSxnQ0FBZ0M7QUFDaEQsQ0FBRSxnREFBZ0Q7QUFDMUMsQ0FBRSwyREFBMkQ7QUFDL0UsQ0FBRSw4Q0FBOEM7QUFFMUUsZUFBZUssS0FBS0MsR0FBTztJQUM5QixNQUFNLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFDQyxXQUFXLEVBQUMsR0FBRyxNQUFNSCxJQUFJSSxJQUFJO0lBQ3RELE1BQU1DLE9BQU8sTUFBTVIsaUVBQVdBO0lBQzlCLElBQUk7UUFDQSxnQkFBZ0I7UUFDaEIsTUFBTVMsU0FBUyxNQUFNWiwyQ0FBRUEsQ0FBQ2EsTUFBTSxDQUFDWix5REFBWUEsRUFBRWEsTUFBTSxDQUFDO1lBQ2hETixVQUFTQTtZQUNURCxTQUFRQTtZQUNSUSxXQUFXSixNQUFNSyxxQkFBcUJDO1lBQ3RDQyxXQUFXLElBQUtDLE9BQVFDLFFBQVE7WUFDaENYLGFBQWFBO1FBQ2pCO1FBQ0EsT0FBT1AscURBQVlBLENBQUNRLElBQUksQ0FBQ0U7SUFDN0IsRUFBRSxPQUFNUyxHQUFFO1FBQ04sT0FBT25CLHFEQUFZQSxDQUFDUSxJQUFJLENBQUNXO0lBQzdCO0FBRUo7QUFFTyxlQUFlQyxJQUFJaEIsR0FBTztJQUM3QixNQUFNLEVBQUNDLE9BQU8sRUFBRUMsUUFBUSxFQUFDLEdBQUksTUFBTUYsSUFBSUksSUFBSTtJQUMzQyxJQUFJO1FBQ0EsZ0JBQWdCO1FBQ2hCLE1BQU1FLFNBQVMsTUFBTVosMkNBQUVBLENBQUN1QixNQUFNLENBQUN0Qix5REFBWUEsRUFBRXVCLEdBQUcsQ0FBQztZQUM3Q2pCLFNBQVFBO1FBQ1osR0FBR2tCLEtBQUssQ0FBQ3JCLCtDQUFFQSxDQUFDSCx5REFBWUEsQ0FBQ08sUUFBUSxFQUFFQTtRQUNuQyxPQUFPTixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDRTtJQUM3QixFQUFFLE9BQU1TLEdBQUU7UUFDTixPQUFPbkIscURBQVlBLENBQUNRLElBQUksQ0FBQ1c7SUFDN0I7QUFFSjtBQUVPLGVBQWdCSyxJQUFJcEIsR0FBTztJQUM5QixNQUFNLEVBQUNxQixZQUFZLEVBQUMsR0FBRyxJQUFJQyxJQUFJdEIsSUFBSXVCLEdBQUc7SUFDdEMsTUFBTXJCLFdBQVdtQixhQUFhRyxHQUFHLENBQUM7SUFDbEMsSUFBRztRQUNDLElBQUl0QixVQUFVO1lBQ1YsTUFBTUksU0FBUyxNQUFNWiwyQ0FBRUEsQ0FBQytCLE1BQU0sR0FBR0MsSUFBSSxDQUFDL0IseURBQVlBLEVBQUV3QixLQUFLLENBQUNyQiwrQ0FBRUEsQ0FBQ0gseURBQVlBLENBQUNPLFFBQVEsRUFBRUE7WUFDcEYsT0FBT04scURBQVlBLENBQUNRLElBQUksQ0FBQ0UsTUFBTSxDQUFDLEVBQUU7UUFDdEM7UUFDQSxPQUFPVixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDLENBQUM7SUFDOUIsRUFBQyxPQUFNVyxHQUFFO1FBQ0wsT0FBT25CLHFEQUFZQSxDQUFDUSxJQUFJLENBQUNXO0lBQzdCO0FBQ0oiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9hcHAvYXBpL3VzZXIvaGlzdG9yeS9yb3V0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYn0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlncy9kYidcbmltcG9ydCB7IEhpc3RvcnlUYWJsZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbmZpZ3Mvc2NoZW1hJyAgLy8gSW1wb3J0aW5nIEhpc3RvcnlUYWJsZSBzY2hlbWFcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJzsgIC8vIEltcG9ydGluZyBOZXh0UmVzcG9uc2UgZm9yIGhhbmRsaW5nIHJlc3BvbnNlc1xuaW1wb3J0IHsgY3VycmVudFVzZXIgfSBmcm9tICdAY2xlcmsvbmV4dGpzL3NlcnZlcic7ICAvLyBJbXBvcnRpbmcgY3VycmVudFVzZXIgZnJvbSBDbGVyayBmb3IgdXNlciBhdXRoZW50aWNhdGlvblxuaW1wb3J0IHsgZXEgfSBmcm9tICdkcml6emxlLW9ybSc7ICAvLyBJbXBvcnRpbmcgZXEgZm9yIGVxdWFsaXR5IGNoZWNrcyBpbiBxdWVyaWVzXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTphbnkpIHtcbiAgICBjb25zdCB7Y29udGVudCwgcmVjb3JkSWQsYWlBZ2VudFR5cGV9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgY3VycmVudFVzZXIoKTtcbiAgICB0cnkge1xuICAgICAgICAvLyBJbnNlcnQgUmVjb3JkXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmluc2VydChIaXN0b3J5VGFibGUpLnZhbHVlcyh7XG4gICAgICAgICAgICByZWNvcmRJZDpyZWNvcmRJZCxcbiAgICAgICAgICAgIGNvbnRlbnQ6Y29udGVudCxcbiAgICAgICAgICAgIHVzZXJFbWFpbDogdXNlcj8ucHJpbWFyeUVtYWlsQWRkcmVzcz8uZW1haWxBZGRyZXNzLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiAobmV3IERhdGUoKSkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGFpQWdlbnRUeXBlOiBhaUFnZW50VHlwZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVzdWx0KVxuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihlKVxuICAgIH1cbiAgICBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6YW55KSB7XG4gICAgY29uc3Qge2NvbnRlbnQsIHJlY29yZElkfSA9ICBhd2FpdCByZXEuanNvbigpO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEluc2VydCBSZWNvcmRcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIudXBkYXRlKEhpc3RvcnlUYWJsZSkuc2V0KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6Y29udGVudFxuICAgICAgICB9KS53aGVyZShlcShIaXN0b3J5VGFibGUucmVjb3JkSWQsIHJlY29yZElkKSkgXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXN1bHQpXG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGUpXG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIEdFVChyZXE6YW55KSB7XG4gICAgY29uc3Qge3NlYXJjaFBhcmFtc30gPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgIGNvbnN0IHJlY29yZElkID0gc2VhcmNoUGFyYW1zLmdldCgncmVjb3JkSWQnKTtcbiAgICB0cnl7XG4gICAgICAgIGlmIChyZWNvcmRJZCkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGIuc2VsZWN0KCkuZnJvbShIaXN0b3J5VGFibGUpLndoZXJlKGVxKEhpc3RvcnlUYWJsZS5yZWNvcmRJZCwgcmVjb3JkSWQpKTtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXN1bHRbMF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7fSk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJkYiIsIkhpc3RvcnlUYWJsZSIsIk5leHRSZXNwb25zZSIsImN1cnJlbnRVc2VyIiwiZXEiLCJQT1NUIiwicmVxIiwiY29udGVudCIsInJlY29yZElkIiwiYWlBZ2VudFR5cGUiLCJqc29uIiwidXNlciIsInJlc3VsdCIsImluc2VydCIsInZhbHVlcyIsInVzZXJFbWFpbCIsInByaW1hcnlFbWFpbEFkZHJlc3MiLCJlbWFpbEFkZHJlc3MiLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9TdHJpbmciLCJlIiwiUFVUIiwidXBkYXRlIiwic2V0Iiwid2hlcmUiLCJHRVQiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJnZXQiLCJzZWxlY3QiLCJmcm9tIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/history/route.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HistoryTable: () => (/* binding */ HistoryTable),\n/* harmony export */   usersTable: () => (/* binding */ usersTable)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/varchar.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/json.js\");\n\nconst usersTable = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"users\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.integer)().primaryKey().generatedAlwaysAsIdentity(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)({\n        length: 255\n    }).notNull(),\n    email: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)({\n        length: 255\n    }).notNull().unique()\n});\nconst HistoryTable = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('historyTable', {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.integer)().primaryKey().generatedAlwaysAsIdentity(),\n    recordId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)().notNull(),\n    content: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.json)(),\n    userEmail: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)('userEmail').references(()=>usersTable.email),\n    createdAt: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)(),\n    aiAgentType: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWdzL3NjaGVtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUU7QUFDOUQsTUFBTUksYUFBYUgsNERBQU9BLENBQUMsU0FBUztJQUN2Q0ksSUFBSUwsNERBQU9BLEdBQUdNLFVBQVUsR0FBR0MseUJBQXlCO0lBQ3BEQyxNQUFNTiw0REFBT0EsQ0FBQztRQUFFTyxRQUFRO0lBQUksR0FBR0MsT0FBTztJQUN0Q0MsT0FBT1QsNERBQU9BLENBQUM7UUFBRU8sUUFBUTtJQUFJLEdBQUdDLE9BQU8sR0FBR0UsTUFBTTtBQUVwRCxHQUFHO0FBRUksTUFBTUMsZUFBZVosNERBQU9BLENBQUMsZ0JBQWdCO0lBQ2hESSxJQUFJTCw0REFBT0EsR0FBR00sVUFBVSxHQUFHQyx5QkFBeUI7SUFDcERPLFVBQVVaLDREQUFPQSxHQUFHUSxPQUFPO0lBQzNCSyxTQUFRWix5REFBSUE7SUFDWmEsV0FBVWQsNERBQU9BLENBQUMsYUFBYWUsVUFBVSxDQUFDLElBQUliLFdBQVdPLEtBQUs7SUFDOURPLFdBQVdoQiw0REFBT0E7SUFDbEJpQixhQUFhakIsNERBQU9BO0FBRXhCLEdBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9jb25maWdzL3NjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbnRlZ2VyLCBwZ1RhYmxlLCB2YXJjaGFyLGpzb24gfSBmcm9tIFwiZHJpenpsZS1vcm0vcGctY29yZVwiO1xuZXhwb3J0IGNvbnN0IHVzZXJzVGFibGUgPSBwZ1RhYmxlKFwidXNlcnNcIiwge1xuICAgIGlkOiBpbnRlZ2VyKCkucHJpbWFyeUtleSgpLmdlbmVyYXRlZEFsd2F5c0FzSWRlbnRpdHkoKSxcbiAgICBuYW1lOiB2YXJjaGFyKHsgbGVuZ3RoOiAyNTUgfSkubm90TnVsbCgpLFxuICAgIGVtYWlsOiB2YXJjaGFyKHsgbGVuZ3RoOiAyNTUgfSkubm90TnVsbCgpLnVuaXF1ZSgpLFxuXG59KTtcblxuZXhwb3J0IGNvbnN0IEhpc3RvcnlUYWJsZSA9IHBnVGFibGUoJ2hpc3RvcnlUYWJsZScsIHtcbiAgICBpZDogaW50ZWdlcigpLnByaW1hcnlLZXkoKS5nZW5lcmF0ZWRBbHdheXNBc0lkZW50aXR5KCksXG4gICAgcmVjb3JkSWQ6IHZhcmNoYXIoKS5ub3ROdWxsKCksXG4gICAgY29udGVudDpqc29uKCksXG4gICAgdXNlckVtYWlsOnZhcmNoYXIoJ3VzZXJFbWFpbCcpLnJlZmVyZW5jZXMoKCk9PnVzZXJzVGFibGUuZW1haWwpLFxuICAgIGNyZWF0ZWRBdDogdmFyY2hhcigpLFxuICAgIGFpQWdlbnRUeXBlOiB2YXJjaGFyKClcblxufSkiXSwibmFtZXMiOlsiaW50ZWdlciIsInBnVGFibGUiLCJ2YXJjaGFyIiwianNvbiIsInVzZXJzVGFibGUiLCJpZCIsInByaW1hcnlLZXkiLCJnZW5lcmF0ZWRBbHdheXNBc0lkZW50aXR5IiwibmFtZSIsImxlbmd0aCIsIm5vdE51bGwiLCJlbWFpbCIsInVuaXF1ZSIsIkhpc3RvcnlUYWJsZSIsInJlY29yZElkIiwiY29udGVudCIsInVzZXJFbWFpbCIsInJlZmVyZW5jZXMiLCJjcmVhdGVkQXQiLCJhaUFnZW50VHlwZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./configs/schema.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fhistory%2Froute&page=%2Fapi%2Fuser%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fhistory%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fhistory%2Froute&page=%2Fapi%2Fuser%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fhistory%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_history_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/history/route.tsx */ \"(rsc)/./app/api/user/history/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/history/route\",\n        pathname: \"/api/user/history\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/history/route\"\n    },\n    resolvedPagePath: \"/Users/harshshrivastav/Desktop/Coding Projects/Job-Assistant-Agent/app/api/user/history/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_history_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGaGlzdG9yeSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlciUyRmhpc3RvcnklMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VyJTJGaGlzdG9yeSUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZoYXJzaHNocml2YXN0YXYlMkZEZXNrdG9wJTJGQ29kaW5nJTIwUHJvamVjdHMlMkZKb2ItQXNzaXN0YW50LUFnZW50JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhcnNoc2hyaXZhc3RhdiUyRkRlc2t0b3AlMkZDb2RpbmclMjBQcm9qZWN0cyUyRkpvYi1Bc3Npc3RhbnQtQWdlbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lEO0FBQzlIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL2hpc3Rvcnkvcm91dGUudHN4XCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2VyL2hpc3Rvcnkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2VyL2hpc3RvcnlcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvaGlzdG9yeS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9hcHAvYXBpL3VzZXIvaGlzdG9yeS9yb3V0ZS50c3hcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fhistory%2Froute&page=%2Fapi%2Fuser%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fhistory%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

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

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@clerk","vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/tslib","vendor-chunks/cookie","vendor-chunks/map-obj","vendor-chunks/no-case","vendor-chunks/lower-case","vendor-chunks/snakecase-keys","vendor-chunks/snake-case","vendor-chunks/dot-case","vendor-chunks/drizzle-orm","vendor-chunks/@neondatabase"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Fhistory%2Froute&page=%2Fapi%2Fuser%2Fhistory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Fhistory%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();