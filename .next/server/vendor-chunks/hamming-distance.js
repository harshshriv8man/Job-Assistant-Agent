/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hamming-distance";
exports.ids = ["vendor-chunks/hamming-distance"];
exports.modules = {

/***/ "(rsc)/../../../node_modules/hamming-distance/index.js":
/*!*******************************************************!*\
  !*** ../../../node_modules/hamming-distance/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar assert = __webpack_require__(/*! assert */ \"assert\");\n\nmodule.exports = compare;\n\nfunction compare(a, b) {\n  a = hexToBinary(a)\n  b = hexToBinary(b)\n  assert.equal(a.length, b.length, 'Argument must have equal lengths.');\n  return hammingDistance(a, b);\n}\n\nvar lookup = {\n  '0': '0000',\n  '1': '0001',\n  '2': '0010',\n  '3': '0011',\n  '4': '0100',\n  '5': '0101',\n  '6': '0110',\n  '7': '0111',\n  '8': '1000',\n  '9': '1001',\n  'a': '1010',\n  'b': '1011',\n  'c': '1100',\n  'd': '1101',\n  'e': '1110',\n  'f': '1111',\n  'A': '1010',\n  'B': '1011',\n  'C': '1100',\n  'D': '1101',\n  'E': '1110',\n  'F': '1111'\n};\n\nfunction hexToBinary(s) {\n  if (Buffer.isBuffer(s)) s = s.toString('hex');\n  s = s.replace(/^0x/, '');\n  assert(/^[0-9a-fA-F]+$/.test(s));\n  var ret = '';\n  for (var i = 0; i < s.length; i++) ret += lookup[s[i]];\n  return ret;\n}\n\nfunction hammingDistance(a, b) {\n  a = hexToBinary(a);\n  b = hexToBinary(b);\n  var count = 0;\n  for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) count++;\n  return count;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hhbW1pbmctZGlzdGFuY2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUNBLGFBQWEsbUJBQU8sQ0FBQyxzQkFBUTs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJzaHNocml2YXN0YXYvbm9kZV9tb2R1bGVzL2hhbW1pbmctZGlzdGFuY2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZTtcblxuZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gIGEgPSBoZXhUb0JpbmFyeShhKVxuICBiID0gaGV4VG9CaW5hcnkoYilcbiAgYXNzZXJ0LmVxdWFsKGEubGVuZ3RoLCBiLmxlbmd0aCwgJ0FyZ3VtZW50IG11c3QgaGF2ZSBlcXVhbCBsZW5ndGhzLicpO1xuICByZXR1cm4gaGFtbWluZ0Rpc3RhbmNlKGEsIGIpO1xufVxuXG52YXIgbG9va3VwID0ge1xuICAnMCc6ICcwMDAwJyxcbiAgJzEnOiAnMDAwMScsXG4gICcyJzogJzAwMTAnLFxuICAnMyc6ICcwMDExJyxcbiAgJzQnOiAnMDEwMCcsXG4gICc1JzogJzAxMDEnLFxuICAnNic6ICcwMTEwJyxcbiAgJzcnOiAnMDExMScsXG4gICc4JzogJzEwMDAnLFxuICAnOSc6ICcxMDAxJyxcbiAgJ2EnOiAnMTAxMCcsXG4gICdiJzogJzEwMTEnLFxuICAnYyc6ICcxMTAwJyxcbiAgJ2QnOiAnMTEwMScsXG4gICdlJzogJzExMTAnLFxuICAnZic6ICcxMTExJyxcbiAgJ0EnOiAnMTAxMCcsXG4gICdCJzogJzEwMTEnLFxuICAnQyc6ICcxMTAwJyxcbiAgJ0QnOiAnMTEwMScsXG4gICdFJzogJzExMTAnLFxuICAnRic6ICcxMTExJ1xufTtcblxuZnVuY3Rpb24gaGV4VG9CaW5hcnkocykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHMpKSBzID0gcy50b1N0cmluZygnaGV4Jyk7XG4gIHMgPSBzLnJlcGxhY2UoL14weC8sICcnKTtcbiAgYXNzZXJ0KC9eWzAtOWEtZkEtRl0rJC8udGVzdChzKSk7XG4gIHZhciByZXQgPSAnJztcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSByZXQgKz0gbG9va3VwW3NbaV1dO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBoYW1taW5nRGlzdGFuY2UoYSwgYikge1xuICBhID0gaGV4VG9CaW5hcnkoYSk7XG4gIGIgPSBoZXhUb0JpbmFyeShiKTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSBpZiAoYVtpXSAhPT0gYltpXSkgY291bnQrKztcbiAgcmV0dXJuIGNvdW50O1xufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../node_modules/hamming-distance/index.js\n");

/***/ })

};
;