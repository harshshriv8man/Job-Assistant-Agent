"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ansi-regex";
exports.ids = ["vendor-chunks/ansi-regex"];
exports.modules = {

/***/ "(rsc)/./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/***/ ((module) => {

eval("\nmodule.exports = (options)=>{\n    options = Object.assign({\n        onlyFirst: false\n    }, options);\n    const pattern = [\n        '[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)',\n        '(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-ntqry=><~]))'\n    ].join('|');\n    return new RegExp(pattern, options.onlyFirst ? undefined : 'g');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUViQSxPQUFPQyxPQUFPLEdBQUdDLENBQUFBO0lBQ2hCQSxVQUFVQyxPQUFPQyxNQUFNLENBQUM7UUFDdkJDLFdBQVc7SUFDWixHQUFHSDtJQUVILE1BQU1JLFVBQVU7UUFDZjtRQUNBO0tBQ0EsQ0FBQ0MsSUFBSSxDQUFDO0lBRVAsT0FBTyxJQUFJQyxPQUFPRixTQUFTSixRQUFRRyxTQUFTLEdBQUdJLFlBQVk7QUFDNUQiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvRGVza3RvcC9Db2RpbmcgUHJvamVjdHMvSm9iLUFzc2lzdGFudC1BZ2VudC9ub2RlX21vZHVsZXMvYW5zaS1yZWdleC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gb3B0aW9ucyA9PiB7XG5cdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcblx0XHRvbmx5Rmlyc3Q6IGZhbHNlXG5cdH0sIG9wdGlvbnMpO1xuXG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0J1tcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10rKSp8W2EtekEtWlxcXFxkXSsoPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopP1xcXFx1MDAwNyknLFxuXHRcdCcoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW50cXJ5PT48fl0pKSdcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb3B0aW9ucy5vbmx5Rmlyc3QgPyB1bmRlZmluZWQgOiAnZycpO1xufTtcbiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIm9ubHlGaXJzdCIsInBhdHRlcm4iLCJqb2luIiwiUmVnRXhwIiwidW5kZWZpbmVkIl0sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ansi-regex/index.js\n");

/***/ })

};
;