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
exports.id = "app/api/user/route";
exports.ids = ["app/api/user/route"];
exports.modules = {

/***/ "(rsc)/./app/api/user/route.tsx":
/*!********************************!*\
  !*** ./app/api/user/route.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var drizzle_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! drizzle-orm */ \"(rsc)/./node_modules/drizzle-orm/sql/expressions/conditions.js\");\n/* harmony import */ var _configs_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/configs/db */ \"(rsc)/./configs/db.tsx\");\n/* harmony import */ var _configs_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/configs/schema */ \"(rsc)/./configs/schema.ts\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(rsc)/./node_modules/@clerk/nextjs/dist/esm/server/index.js\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function POST(req) {\n    try {\n        const user = await (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_3__.currentUser)();\n        if (!user || !user.primaryEmailAddress?.emailAddress) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized or missing email address\"\n            }, {\n                status: 401\n            });\n        }\n        const email = user.primaryEmailAddress.emailAddress;\n        // Check if user already exists\n        const existingUsers = await _configs_db__WEBPACK_IMPORTED_MODULE_1__.db.select().from(_configs_schema__WEBPACK_IMPORTED_MODULE_2__.usersTable).where((0,drizzle_orm__WEBPACK_IMPORTED_MODULE_4__.eq)(_configs_schema__WEBPACK_IMPORTED_MODULE_2__.usersTable.email, email));\n        if (existingUsers.length > 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(existingUsers[0]);\n        }\n        // Insert new user\n        const insertedUsers = await _configs_db__WEBPACK_IMPORTED_MODULE_1__.db.insert(_configs_schema__WEBPACK_IMPORTED_MODULE_2__.usersTable).values({\n            name: user.fullName ?? \"\",\n            email: email\n        }).returning();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(insertedUsers[0]);\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e.message || \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3VzZXIvcm91dGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDdkI7QUFDQztBQUNZO0FBQ0s7QUFFNUMsZUFBZUssS0FBS0MsR0FBZ0I7SUFDdkMsSUFBSTtRQUNBLE1BQU1DLE9BQU8sTUFBTUgsaUVBQVdBO1FBRTlCLElBQUksQ0FBQ0csUUFBUSxDQUFDQSxLQUFLQyxtQkFBbUIsRUFBRUMsY0FBYztZQUNsRCxPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUNwQjtnQkFBRUMsT0FBTztZQUF3QyxHQUNqRDtnQkFBRUMsUUFBUTtZQUFJO1FBRXRCO1FBRUEsTUFBTUMsUUFBUU4sS0FBS0MsbUJBQW1CLENBQUNDLFlBQVk7UUFFbkQsK0JBQStCO1FBQy9CLE1BQU1LLGdCQUFnQixNQUFNWiwyQ0FBRUEsQ0FDekJhLE1BQU0sR0FDTkMsSUFBSSxDQUFDYix1REFBVUEsRUFDZmMsS0FBSyxDQUFDaEIsK0NBQUVBLENBQUNFLHVEQUFVQSxDQUFDVSxLQUFLLEVBQUVBO1FBRWhDLElBQUlDLGNBQWNJLE1BQU0sR0FBRyxHQUFHO1lBQzFCLE9BQU9sQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDSSxhQUFhLENBQUMsRUFBRTtRQUM3QztRQUVBLGtCQUFrQjtRQUNsQixNQUFNSyxnQkFBZ0IsTUFBTWpCLDJDQUFFQSxDQUN6QmtCLE1BQU0sQ0FBQ2pCLHVEQUFVQSxFQUNqQmtCLE1BQU0sQ0FBQztZQUNKQyxNQUFNZixLQUFLZ0IsUUFBUSxJQUFJO1lBQ3ZCVixPQUFPQTtRQUNYLEdBQ0NXLFNBQVM7UUFFZCxPQUFPeEIscURBQVlBLENBQUNVLElBQUksQ0FBQ1MsYUFBYSxDQUFDLEVBQUU7SUFDN0MsRUFBRSxPQUFPTSxHQUFRO1FBQ2IsT0FBT3pCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBT2MsRUFBRUMsT0FBTyxJQUFJO1FBQWUsR0FBRztZQUFFZCxRQUFRO1FBQUk7SUFDbkY7QUFDSiIsInNvdXJjZXMiOlsiL1VzZXJzL2hhcnNoc2hyaXZhc3Rhdi9EZXNrdG9wL0NvZGluZyBQcm9qZWN0cy9Kb2ItQXNzaXN0YW50LUFnZW50L2FwcC9hcGkvdXNlci9yb3V0ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgZXEgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvY29uZmlncy9kYlwiO1xuaW1wb3J0IHsgdXNlcnNUYWJsZSB9IGZyb20gXCJAL2NvbmZpZ3Mvc2NoZW1hXCI7XG5pbXBvcnQgeyBjdXJyZW50VXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzL3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgaWYgKCF1c2VyIHx8ICF1c2VyLnByaW1hcnlFbWFpbEFkZHJlc3M/LmVtYWlsQWRkcmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICAgICAgICAgIHsgZXJyb3I6IFwiVW5hdXRob3JpemVkIG9yIG1pc3NpbmcgZW1haWwgYWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW1haWwgPSB1c2VyLnByaW1hcnlFbWFpbEFkZHJlc3MuZW1haWxBZGRyZXNzO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHVzZXIgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgY29uc3QgZXhpc3RpbmdVc2VycyA9IGF3YWl0IGRiXG4gICAgICAgICAgICAuc2VsZWN0KClcbiAgICAgICAgICAgIC5mcm9tKHVzZXJzVGFibGUpXG4gICAgICAgICAgICAud2hlcmUoZXEodXNlcnNUYWJsZS5lbWFpbCwgZW1haWwpKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdVc2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZXhpc3RpbmdVc2Vyc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbnNlcnQgbmV3IHVzZXJcbiAgICAgICAgY29uc3QgaW5zZXJ0ZWRVc2VycyA9IGF3YWl0IGRiXG4gICAgICAgICAgICAuaW5zZXJ0KHVzZXJzVGFibGUpXG4gICAgICAgICAgICAudmFsdWVzKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLmZ1bGxOYW1lID8/IFwiXCIsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZXR1cm5pbmcoKTtcblxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oaW5zZXJ0ZWRVc2Vyc1swXSk7XG4gICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlLm1lc3NhZ2UgfHwgXCJTZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJlcSIsImRiIiwidXNlcnNUYWJsZSIsImN1cnJlbnRVc2VyIiwiUE9TVCIsInJlcSIsInVzZXIiLCJwcmltYXJ5RW1haWxBZGRyZXNzIiwiZW1haWxBZGRyZXNzIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiZW1haWwiLCJleGlzdGluZ1VzZXJzIiwic2VsZWN0IiwiZnJvbSIsIndoZXJlIiwibGVuZ3RoIiwiaW5zZXJ0ZWRVc2VycyIsImluc2VydCIsInZhbHVlcyIsIm5hbWUiLCJmdWxsTmFtZSIsInJldHVybmluZyIsImUiLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/user/route.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HistoryTable: () => (/* binding */ HistoryTable),\n/* harmony export */   usersTable: () => (/* binding */ usersTable)\n/* harmony export */ });\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/table.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/integer.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/varchar.js\");\n/* harmony import */ var drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! drizzle-orm/pg-core */ \"(rsc)/./node_modules/drizzle-orm/pg-core/columns/json.js\");\n\nconst usersTable = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)(\"users\", {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.integer)().primaryKey().generatedAlwaysAsIdentity(),\n    name: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)({\n        length: 255\n    }).notNull(),\n    email: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)({\n        length: 255\n    }).notNull().unique()\n});\nconst HistoryTable = (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_0__.pgTable)('historyTable', {\n    id: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_1__.integer)().primaryKey().generatedAlwaysAsIdentity(),\n    recordId: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)().notNull(),\n    content: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_3__.json)(),\n    userEmail: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)('userEmail').references(()=>usersTable.email),\n    createdAt: (0,drizzle_orm_pg_core__WEBPACK_IMPORTED_MODULE_2__.varchar)()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWdzL3NjaGVtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBcUU7QUFDOUQsTUFBTUksYUFBYUgsNERBQU9BLENBQUMsU0FBUztJQUN2Q0ksSUFBSUwsNERBQU9BLEdBQUdNLFVBQVUsR0FBR0MseUJBQXlCO0lBQ3BEQyxNQUFNTiw0REFBT0EsQ0FBQztRQUFFTyxRQUFRO0lBQUksR0FBR0MsT0FBTztJQUN0Q0MsT0FBT1QsNERBQU9BLENBQUM7UUFBRU8sUUFBUTtJQUFJLEdBQUdDLE9BQU8sR0FBR0UsTUFBTTtBQUVwRCxHQUFHO0FBRUksTUFBTUMsZUFBZVosNERBQU9BLENBQUMsZ0JBQWdCO0lBQ2hESSxJQUFJTCw0REFBT0EsR0FBR00sVUFBVSxHQUFHQyx5QkFBeUI7SUFDcERPLFVBQVVaLDREQUFPQSxHQUFHUSxPQUFPO0lBQzNCSyxTQUFRWix5REFBSUE7SUFDWmEsV0FBVWQsNERBQU9BLENBQUMsYUFBYWUsVUFBVSxDQUFDLElBQUliLFdBQVdPLEtBQUs7SUFDOURPLFdBQVdoQiw0REFBT0E7QUFFdEIsR0FBRSIsInNvdXJjZXMiOlsiL1VzZXJzL2hhcnNoc2hyaXZhc3Rhdi9EZXNrdG9wL0NvZGluZyBQcm9qZWN0cy9Kb2ItQXNzaXN0YW50LUFnZW50L2NvbmZpZ3Mvc2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGludGVnZXIsIHBnVGFibGUsIHZhcmNoYXIsanNvbiB9IGZyb20gXCJkcml6emxlLW9ybS9wZy1jb3JlXCI7XG5leHBvcnQgY29uc3QgdXNlcnNUYWJsZSA9IHBnVGFibGUoXCJ1c2Vyc1wiLCB7XG4gICAgaWQ6IGludGVnZXIoKS5wcmltYXJ5S2V5KCkuZ2VuZXJhdGVkQWx3YXlzQXNJZGVudGl0eSgpLFxuICAgIG5hbWU6IHZhcmNoYXIoeyBsZW5ndGg6IDI1NSB9KS5ub3ROdWxsKCksXG4gICAgZW1haWw6IHZhcmNoYXIoeyBsZW5ndGg6IDI1NSB9KS5ub3ROdWxsKCkudW5pcXVlKCksXG5cbn0pO1xuXG5leHBvcnQgY29uc3QgSGlzdG9yeVRhYmxlID0gcGdUYWJsZSgnaGlzdG9yeVRhYmxlJywge1xuICAgIGlkOiBpbnRlZ2VyKCkucHJpbWFyeUtleSgpLmdlbmVyYXRlZEFsd2F5c0FzSWRlbnRpdHkoKSxcbiAgICByZWNvcmRJZDogdmFyY2hhcigpLm5vdE51bGwoKSxcbiAgICBjb250ZW50Ompzb24oKSxcbiAgICB1c2VyRW1haWw6dmFyY2hhcigndXNlckVtYWlsJykucmVmZXJlbmNlcygoKT0+dXNlcnNUYWJsZS5lbWFpbCksXG4gICAgY3JlYXRlZEF0OiB2YXJjaGFyKClcblxufSkiXSwibmFtZXMiOlsiaW50ZWdlciIsInBnVGFibGUiLCJ2YXJjaGFyIiwianNvbiIsInVzZXJzVGFibGUiLCJpZCIsInByaW1hcnlLZXkiLCJnZW5lcmF0ZWRBbHdheXNBc0lkZW50aXR5IiwibmFtZSIsImxlbmd0aCIsIm5vdE51bGwiLCJlbWFpbCIsInVuaXF1ZSIsIkhpc3RvcnlUYWJsZSIsInJlY29yZElkIiwiY29udGVudCIsInVzZXJFbWFpbCIsInJlZmVyZW5jZXMiLCJjcmVhdGVkQXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./configs/schema.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_route_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/user/route.tsx */ \"(rsc)/./app/api/user/route.tsx\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/user/route\",\n        pathname: \"/api/user\",\n        filename: \"route\",\n        bundlePath: \"app/api/user/route\"\n    },\n    resolvedPagePath: \"/Users/harshshrivastav/Desktop/Coding Projects/Job-Assistant-Agent/app/api/user/route.tsx\",\n    nextConfigOutput,\n    userland: _Users_harshshrivastav_Desktop_Coding_Projects_Job_Assistant_Agent_app_api_user_route_tsx__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlciUyRnJvdXRlLnRzeCZhcHBEaXI9JTJGVXNlcnMlMkZoYXJzaHNocml2YXN0YXYlMkZEZXNrdG9wJTJGQ29kaW5nJTIwUHJvamVjdHMlMkZKb2ItQXNzaXN0YW50LUFnZW50JTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmhhcnNoc2hyaXZhc3RhdiUyRkRlc2t0b3AlMkZDb2RpbmclMjBQcm9qZWN0cyUyRkpvYi1Bc3Npc3RhbnQtQWdlbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL3JvdXRlLnRzeFwiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaGFyc2hzaHJpdmFzdGF2L0Rlc2t0b3AvQ29kaW5nIFByb2plY3RzL0pvYi1Bc3Npc3RhbnQtQWdlbnQvYXBwL2FwaS91c2VyL3JvdXRlLnRzeFwiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@clerk","vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/drizzle-orm","vendor-chunks/@neondatabase"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fuser%2Froute&page=%2Fapi%2Fuser%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fuser%2Froute.tsx&appDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fharshshrivastav%2FDesktop%2FCoding%20Projects%2FJob-Assistant-Agent&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();