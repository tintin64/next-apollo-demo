module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/apollo-client/cache/index.ts":
/*!******************************************!*\
  !*** ./app/apollo-client/cache/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _type_policies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type-policies */ \"./app/apollo-client/cache/type-policies/index.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]({\n  typePolicies: _type_policies__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS9pbmRleC50cz83ZWU2Il0sIm5hbWVzIjpbIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVlLG1FQUFJQSw0REFBSixDQUFrQjtBQUM3QkMsc0VBQVlBO0FBRGlCLENBQWxCLENBQWYiLCJmaWxlIjoiLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgdHlwZVBvbGljaWVzIGZyb20gJy4vdHlwZS1wb2xpY2llcyc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICB0eXBlUG9saWNpZXNcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/apollo-client/cache/index.ts\n");

/***/ }),

/***/ "./app/apollo-client/cache/type-policies/index.ts":
/*!********************************************************!*\
  !*** ./app/apollo-client/cache/type-policies/index.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query */ \"./app/apollo-client/cache/type-policies/query/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: _query__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL2luZGV4LnRzP2RlZmYiXSwibmFtZXMiOlsiUXVlcnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlO0FBQ1hBLHVEQUFLQTtBQURNLENBQWYiLCJmaWxlIjoiLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgUXVlcnlcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/apollo-client/cache/type-policies/index.ts\n");

/***/ }),

/***/ "./app/apollo-client/cache/type-policies/query/fields/index.ts":
/*!*********************************************************************!*\
  !*** ./app/apollo-client/cache/type-policies/query/fields/index.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./app/apollo-client/cache/type-policies/query/fields/user/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  users: _user__WEBPACK_IMPORTED_MODULE_0__[\"users\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL3F1ZXJ5L2ZpZWxkcy9pbmRleC50cz8wNTMzIl0sIm5hbWVzIjpbInVzZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZTtBQUNYQSxvREFBS0E7QUFETSxDQUFmIiwiZmlsZSI6Ii4vYXBwL2Fwb2xsby1jbGllbnQvY2FjaGUvdHlwZS1wb2xpY2llcy9xdWVyeS9maWVsZHMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VycyB9IGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB1c2Vyc1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/apollo-client/cache/type-policies/query/fields/index.ts\n");

/***/ }),

/***/ "./app/apollo-client/cache/type-policies/query/fields/user/index.ts":
/*!**************************************************************************!*\
  !*** ./app/apollo-client/cache/type-policies/query/fields/user/index.ts ***!
  \**************************************************************************/
/*! exports provided: users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ \"./app/apollo-client/cache/type-policies/query/fields/user/users.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"users\", function() { return _users__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL3F1ZXJ5L2ZpZWxkcy91c2VyL2luZGV4LnRzP2Y4OGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL3F1ZXJ5L2ZpZWxkcy91c2VyL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VycyB9IGZyb20gJy4vdXNlcnMnOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/apollo-client/cache/type-policies/query/fields/user/index.ts\n");

/***/ }),

/***/ "./app/apollo-client/cache/type-policies/query/fields/user/users.ts":
/*!**************************************************************************!*\
  !*** ./app/apollo-client/cache/type-policies/query/fields/user/users.ts ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client/utilities */ \"@apollo/client/utilities\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_objectSpread(_objectSpread({}, Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_0__[\"offsetLimitPagination\"])()), {}, {\n  read: existing => existing,\n  merge: (existing, incoming) => {\n    if (existing) {\n      return _objectSpread(_objectSpread({}, incoming), {}, {\n        result: [...existing.result, ...incoming.result]\n      });\n    }\n\n    return incoming;\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL3F1ZXJ5L2ZpZWxkcy91c2VyL3VzZXJzLnRzPzczYWMiXSwibmFtZXMiOlsib2Zmc2V0TGltaXRQYWdpbmF0aW9uIiwicmVhZCIsImV4aXN0aW5nIiwibWVyZ2UiLCJpbmNvbWluZyIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHZSwrRkFDUkEsc0ZBQXFCLEVBRDVCO0FBRUlDLE1BQUksRUFBR0MsUUFBRCxJQUFxQ0EsUUFGL0M7QUFHSUMsT0FBSyxFQUFFLENBQUNELFFBQUQsRUFBc0JFLFFBQXRCLEtBQXlEO0FBQzVELFFBQUlGLFFBQUosRUFBYztBQUNWLDZDQUNPRSxRQURQO0FBRUlDLGNBQU0sRUFBRSxDQUNKLEdBQUdILFFBQVEsQ0FBQ0csTUFEUixFQUVKLEdBQUdELFFBQVEsQ0FBQ0MsTUFGUjtBQUZaO0FBT0g7O0FBQ0QsV0FBT0QsUUFBUDtBQUNIO0FBZEwiLCJmaWxlIjoiLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL3F1ZXJ5L2ZpZWxkcy91c2VyL3VzZXJzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2Zmc2V0TGltaXRQYWdpbmF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiO1xuaW1wb3J0IHsgVXNlcnNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdHlwZXMvdXNlci10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAuLi5vZmZzZXRMaW1pdFBhZ2luYXRpb24oKSxcbiAgICByZWFkOiAoZXhpc3Rpbmc6IFVzZXJzVHlwZSk6IFVzZXJzVHlwZSA9PiAgZXhpc3RpbmcsXG4gICAgbWVyZ2U6IChleGlzdGluZzogVXNlcnNUeXBlLCBpbmNvbWluZzogVXNlcnNUeXBlKTogVXNlcnNUeXBlID0+IHtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmluY29taW5nLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogW1xuICAgICAgICAgICAgICAgICAgICAuLi5leGlzdGluZy5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgIC4uLmluY29taW5nLnJlc3VsdFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluY29taW5nO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/apollo-client/cache/type-policies/query/fields/user/users.ts\n");

/***/ }),

/***/ "./app/apollo-client/cache/type-policies/query/index.ts":
/*!**************************************************************!*\
  !*** ./app/apollo-client/cache/type-policies/query/index.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields */ \"./app/apollo-client/cache/type-policies/query/fields/index.ts\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  fields: _fields__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBvbGxvLWNsaWVudC9jYWNoZS90eXBlLXBvbGljaWVzL3F1ZXJ5L2luZGV4LnRzPzg4YzIiXSwibmFtZXMiOlsiZmllbGRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFZTtBQUNYQSx5REFBTUE7QUFESyxDQUFmIiwiZmlsZSI6Ii4vYXBwL2Fwb2xsby1jbGllbnQvY2FjaGUvdHlwZS1wb2xpY2llcy9xdWVyeS9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaWVsZHMgZnJvbSAnLi9maWVsZHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZmllbGRzXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/apollo-client/cache/type-policies/query/index.ts\n");

/***/ }),

/***/ "./app/apollo-client/index.ts":
/*!************************************!*\
  !*** ./app/apollo-client/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache */ \"./app/apollo-client/cache/index.ts\");\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n  uri: \"http://localhost:5000/graphql\",\n  cache: _cache__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBvbGxvLWNsaWVudC9pbmRleC50cz85NmI2Il0sIm5hbWVzIjpbImNsaWVudCIsIkFwb2xsb0NsaWVudCIsInVyaSIsInByb2Nlc3MiLCJjYWNoZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLDJEQUFKLENBQWlCO0FBQzVCQyxLQUFHLEVBQUVDLCtCQUR1QjtBQUU1QkMsdURBQUtBO0FBRnVCLENBQWpCLENBQWY7QUFLZUoscUVBQWYiLCJmaWxlIjoiLi9hcHAvYXBvbGxvLWNsaWVudC9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBjYWNoZSBmcm9tICcuL2NhY2hlJztcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHVyaTogcHJvY2Vzcy5lbnYuYXBvbGxvQmFzZVVSTCxcbiAgICBjYWNoZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/apollo-client/index.ts\n");

/***/ }),

/***/ "./app/global-style/index.ts":
/*!***********************************!*\
  !*** ./app/global-style/index.ts ***!
  \***********************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spacing */ \"./app/global-style/spacing.ts\");\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  html {\n    font-size: 10px;\n  }\n  body {\n    font-size: 1.6rem;\n    font-family: Montserrat, sans-serif;\n  }\n  ${_spacing__WEBPACK_IMPORTED_MODULE_1__[\"default\"]};\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFsLXN0eWxlL2luZGV4LnRzPzk2ODciXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIlNwYWNpbmdDbGFzc2VzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBR0MsbUVBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlDLGdEQUFlO0FBQ25CLENBZE8iLCJmaWxlIjoiLi9hcHAvZ2xvYmFsLXN0eWxlL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3BhY2luZ0NsYXNzZXMgZnJvbSAnLi9zcGFjaW5nJztcblxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICB9XG4gICR7U3BhY2luZ0NsYXNzZXN9O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/global-style/index.ts\n");

/***/ }),

/***/ "./app/global-style/spacing.ts":
/*!*************************************!*\
  !*** ./app/global-style/spacing.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst properties = [['m', 'margin'], ['p', 'padding']];\nconst directions = [['l', ['left']], ['r', ['right']], ['t', ['top']], ['b', ['bottom']], ['x', ['left', 'right']], ['y', ['top', 'bottom']]];\nconst defaultSpacing = 2;\nconst spacers = [[0, 0], [1, defaultSpacing / 4], [2, defaultSpacing / 2], [3, defaultSpacing], [4, defaultSpacing * 1.5], [5, defaultSpacing * 3]];\n\nconst generateProperty = (property, sides, value) => sides.map(side => `\n    ${property}-${side}: ${value};\n`).join('');\n\nconst generateClasses = ([propertyKey, property], [sideKey, sides]) => spacers.map(([spacer, value]) => `\n        .${propertyKey}${sideKey}-${spacer} {\n            ${generateProperty(property, sides, `${value}rem`)}\n        }\n        ${propertyKey === 'm' && `\n            .${propertyKey}${sideKey}-auto {\n                ${generateProperty(property, sides, 'auto')}\n            }\n        `}\n    `).join('');\n\nconst spacingClasses = `\n    ${properties.map(property => directions.map(direction => generateClasses(property, direction)).join(''))}\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (spacingClasses);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvZ2xvYmFsLXN0eWxlL3NwYWNpbmcudHM/NjMwZSJdLCJuYW1lcyI6WyJwcm9wZXJ0aWVzIiwiZGlyZWN0aW9ucyIsImRlZmF1bHRTcGFjaW5nIiwic3BhY2VycyIsImdlbmVyYXRlUHJvcGVydHkiLCJwcm9wZXJ0eSIsInNpZGVzIiwidmFsdWUiLCJtYXAiLCJzaWRlIiwiam9pbiIsImdlbmVyYXRlQ2xhc3NlcyIsInByb3BlcnR5S2V5Iiwic2lkZUtleSIsInNwYWNlciIsInNwYWNpbmdDbGFzc2VzIiwiZGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLFVBQVUsR0FBRyxDQUNmLENBQUMsR0FBRCxFQUFNLFFBQU4sQ0FEZSxFQUVmLENBQUMsR0FBRCxFQUFNLFNBQU4sQ0FGZSxDQUFuQjtBQUlBLE1BQU1DLFVBQTBDLEdBQUUsQ0FDOUMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxNQUFELENBQU4sQ0FEOEMsRUFFOUMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxPQUFELENBQU4sQ0FGOEMsRUFHOUMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxLQUFELENBQU4sQ0FIOEMsRUFJOUMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxRQUFELENBQU4sQ0FKOEMsRUFLOUMsQ0FBQyxHQUFELEVBQU0sQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFOLENBTDhDLEVBTTlDLENBQUMsR0FBRCxFQUFNLENBQUMsS0FBRCxFQUFRLFFBQVIsQ0FBTixDQU44QyxDQUFsRDtBQVNBLE1BQU1DLGNBQWMsR0FBRyxDQUF2QjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUNaLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FEWSxFQUVaLENBQUMsQ0FBRCxFQUFJRCxjQUFjLEdBQUcsQ0FBckIsQ0FGWSxFQUdaLENBQUMsQ0FBRCxFQUFJQSxjQUFjLEdBQUcsQ0FBckIsQ0FIWSxFQUlaLENBQUMsQ0FBRCxFQUFJQSxjQUFKLENBSlksRUFLWixDQUFDLENBQUQsRUFBSUEsY0FBYyxHQUFHLEdBQXJCLENBTFksRUFNWixDQUFDLENBQUQsRUFBSUEsY0FBYyxHQUFHLENBQXJCLENBTlksQ0FBaEI7O0FBU0EsTUFBTUUsZ0JBQWdCLEdBQUcsQ0FDckJDLFFBRHFCLEVBQ0hDLEtBREcsRUFDbUJDLEtBRG5CLEtBRXBCRCxLQUFLLENBQUNFLEdBQU4sQ0FBV0MsSUFBRCxJQUFXO0FBQzFCLE1BQU1KLFFBQVMsSUFBR0ksSUFBSyxLQUFJRixLQUFNO0FBQ2pDLENBRkssRUFFRkcsSUFGRSxDQUVHLEVBRkgsQ0FGTDs7QUFNQSxNQUFNQyxlQUFlLEdBQUcsQ0FDcEIsQ0FBQ0MsV0FBRCxFQUFjUCxRQUFkLENBRG9CLEVBQ29CLENBQUNRLE9BQUQsRUFBVVAsS0FBVixDQURwQixLQUVuQkgsT0FBTyxDQUNQSyxHQURBLENBQ0ksQ0FBQyxDQUFDTSxNQUFELEVBQVNQLEtBQVQsQ0FBRCxLQUFzQjtBQUMvQixXQUFXSyxXQUFZLEdBQUVDLE9BQVEsSUFBR0MsTUFBTztBQUMzQyxjQUFjVixnQkFBZ0IsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQW1CLEdBQUVDLEtBQU0sS0FBM0IsQ0FBaUM7QUFDL0Q7QUFDQSxVQUFVSyxXQUFXLEtBQUssR0FBaEIsSUFBd0I7QUFDbEMsZUFBZUEsV0FBWSxHQUFFQyxPQUFRO0FBQ3JDLGtCQUFrQlQsZ0JBQWdCLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxFQUFrQixNQUFsQixDQUEwQjtBQUM1RDtBQUNBLFNBQVU7QUFDVixLQVZLLEVBVUVJLElBVkYsQ0FVTyxFQVZQLENBRkw7O0FBY0EsTUFBTUssY0FBYyxHQUFJO0FBQ3hCLE1BQU1mLFVBQVUsQ0FBQ1EsR0FBWCxDQUNHSCxRQUFELElBQWNKLFVBQVUsQ0FBQ08sR0FBWCxDQUNUUSxTQUFELElBQWVMLGVBQWUsQ0FBQ04sUUFBRCxFQUFXVyxTQUFYLENBRHBCLEVBRVpOLElBRlksQ0FFUCxFQUZPLENBRGhCLENBSUE7QUFDTixDQU5BO0FBUWVLLDZFQUFmIiwiZmlsZSI6Ii4vYXBwL2dsb2JhbC1zdHlsZS9zcGFjaW5nLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICBbJ20nLCAnbWFyZ2luJ10sXG4gICAgWydwJywgJ3BhZGRpbmcnXSxcbl07XG5jb25zdCBkaXJlY3Rpb25zOiBBcnJheTxbU3RyaW5nLCBBcnJheTxTdHJpbmc+XT49IFtcbiAgICBbJ2wnLCBbJ2xlZnQnXV0sXG4gICAgWydyJywgWydyaWdodCddXSxcbiAgICBbJ3QnLCBbJ3RvcCddXSxcbiAgICBbJ2InLCBbJ2JvdHRvbSddXSxcbiAgICBbJ3gnLCBbJ2xlZnQnLCAncmlnaHQnXV0sXG4gICAgWyd5JywgWyd0b3AnLCAnYm90dG9tJ11dLFxuXTtcblxuY29uc3QgZGVmYXVsdFNwYWNpbmcgPSAyO1xuY29uc3Qgc3BhY2VycyA9IFtcbiAgICBbMCwgMF0sXG4gICAgWzEsIGRlZmF1bHRTcGFjaW5nIC8gNF0sXG4gICAgWzIsIGRlZmF1bHRTcGFjaW5nIC8gMl0sXG4gICAgWzMsIGRlZmF1bHRTcGFjaW5nXSxcbiAgICBbNCwgZGVmYXVsdFNwYWNpbmcgKiAxLjVdLFxuICAgIFs1LCBkZWZhdWx0U3BhY2luZyAqIDNdLFxuXTtcblxuY29uc3QgZ2VuZXJhdGVQcm9wZXJ0eSA9IChcbiAgICBwcm9wZXJ0eTogU3RyaW5nLCBzaWRlczogQXJyYXk8U3RyaW5nPiwgdmFsdWU6IFN0cmluZ1xuKSA9PiBzaWRlcy5tYXAoKHNpZGUpID0+IGBcbiAgICAke3Byb3BlcnR5fS0ke3NpZGV9OiAke3ZhbHVlfTtcbmApLmpvaW4oJycpO1xuXG5jb25zdCBnZW5lcmF0ZUNsYXNzZXMgPSAoXG4gICAgW3Byb3BlcnR5S2V5LCBwcm9wZXJ0eV06IEFycmF5PFN0cmluZz4sIFtzaWRlS2V5LCBzaWRlc106IFtTdHJpbmcsIEFycmF5PFN0cmluZz5dXG4pID0+IHNwYWNlcnNcbiAgICAubWFwKChbc3BhY2VyLCB2YWx1ZV0pID0+IGBcbiAgICAgICAgLiR7cHJvcGVydHlLZXl9JHtzaWRlS2V5fS0ke3NwYWNlcn0ge1xuICAgICAgICAgICAgJHtnZW5lcmF0ZVByb3BlcnR5KHByb3BlcnR5LCBzaWRlcywgYCR7dmFsdWV9cmVtYCl9XG4gICAgICAgIH1cbiAgICAgICAgJHtwcm9wZXJ0eUtleSA9PT0gJ20nICYmIGBcbiAgICAgICAgICAgIC4ke3Byb3BlcnR5S2V5fSR7c2lkZUtleX0tYXV0byB7XG4gICAgICAgICAgICAgICAgJHtnZW5lcmF0ZVByb3BlcnR5KHByb3BlcnR5LCBzaWRlcywgJ2F1dG8nKX1cbiAgICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICBgKS5qb2luKCcnKTtcblxuY29uc3Qgc3BhY2luZ0NsYXNzZXMgPSBgXG4gICAgJHtwcm9wZXJ0aWVzLm1hcChcbiAgICAgICAgKHByb3BlcnR5KSA9PiBkaXJlY3Rpb25zLm1hcChcbiAgICAgICAgICAgIChkaXJlY3Rpb24pID0+IGdlbmVyYXRlQ2xhc3Nlcyhwcm9wZXJ0eSwgZGlyZWN0aW9uKVxuICAgICAgICApLmpvaW4oJycpXG4gICAgKX1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHNwYWNpbmdDbGFzc2VzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/global-style/spacing.ts\n");

/***/ }),

/***/ "./app/theme/break-points.ts":
/*!***********************************!*\
  !*** ./app/theme/break-points.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  xlarge: 1440,\n  large: 1200,\n  medium: 1000,\n  small: 800,\n  xsmall: 600\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGhlbWUvYnJlYWstcG9pbnRzLnRzPzA4NGQiXSwibmFtZXMiOlsieGxhcmdlIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsInhzbWFsbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNYQSxRQUFNLEVBQUUsSUFERztBQUVYQyxPQUFLLEVBQUUsSUFGSTtBQUdYQyxRQUFNLEVBQUUsSUFIRztBQUlYQyxPQUFLLEVBQUUsR0FKSTtBQUtYQyxRQUFNLEVBQUU7QUFMRyxDQUFmIiwiZmlsZSI6Ii4vYXBwL3RoZW1lL2JyZWFrLXBvaW50cy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICB4bGFyZ2U6IDE0NDAsXG4gICAgbGFyZ2U6IDEyMDAsXG4gICAgbWVkaXVtOiAxMDAwLFxuICAgIHNtYWxsOiA4MDAsXG4gICAgeHNtYWxsOiA2MDAsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/theme/break-points.ts\n");

/***/ }),

/***/ "./app/theme/container-max-width.ts":
/*!******************************************!*\
  !*** ./app/theme/container-max-width.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  xlarge: 1200,\n  large: 1100,\n  medium: 900,\n  small: 760,\n  xsmall: 600\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGhlbWUvY29udGFpbmVyLW1heC13aWR0aC50cz8wNjRlIl0sIm5hbWVzIjpbInhsYXJnZSIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJ4c21hbGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDWEEsUUFBTSxFQUFFLElBREc7QUFFWEMsT0FBSyxFQUFFLElBRkk7QUFHWEMsUUFBTSxFQUFFLEdBSEc7QUFJWEMsT0FBSyxFQUFFLEdBSkk7QUFLWEMsUUFBTSxFQUFFO0FBTEcsQ0FBZiIsImZpbGUiOiIuL2FwcC90aGVtZS9jb250YWluZXItbWF4LXdpZHRoLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIHhsYXJnZTogMTIwMCxcbiAgICBsYXJnZTogMTEwMCxcbiAgICBtZWRpdW06IDkwMCxcbiAgICBzbWFsbDogNzYwLFxuICAgIHhzbWFsbDogNjAwLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/theme/container-max-width.ts\n");

/***/ }),

/***/ "./app/theme/index.ts":
/*!****************************!*\
  !*** ./app/theme/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _break_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./break-points */ \"./app/theme/break-points.ts\");\n/* harmony import */ var _container_max_width__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container-max-width */ \"./app/theme/container-max-width.ts\");\n\n\nconst theme = {\n  breakpoints: _break_points__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  containerMaxWidth: _container_max_width__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  colors: {\n    primary: '#0070f3'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvdGhlbWUvaW5kZXgudHM/NTRhOCJdLCJuYW1lcyI6WyJ0aGVtZSIsImJyZWFrcG9pbnRzIiwiY29udGFpbmVyTWF4V2lkdGgiLCJjb2xvcnMiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsS0FBSyxHQUFHO0FBQ1ZDLG9FQURVO0FBRVZDLGlGQUZVO0FBR1ZDLFFBQU0sRUFBRTtBQUNKQyxXQUFPLEVBQUU7QUFETDtBQUhFLENBQWQ7QUFRZUosb0VBQWYiLCJmaWxlIjoiLi9hcHAvdGhlbWUvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJlYWtwb2ludHMgZnJvbSAnLi9icmVhay1wb2ludHMnO1xuaW1wb3J0IGNvbnRhaW5lck1heFdpZHRoIGZyb20gJy4vY29udGFpbmVyLW1heC13aWR0aCc7XG5jb25zdCB0aGVtZSA9IHtcbiAgICBicmVha3BvaW50cyxcbiAgICBjb250YWluZXJNYXhXaWR0aCxcbiAgICBjb2xvcnM6IHtcbiAgICAgICAgcHJpbWFyeTogJyMwMDcwZjMnLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/theme/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/react */ \"@apollo/client/react\");\n/* harmony import */ var _apollo_client_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app/apollo-client */ \"./app/apollo-client/index.ts\");\n/* harmony import */ var _app_global_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/global-style */ \"./app/global-style/index.ts\");\n/* harmony import */ var _app_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/theme */ \"./app/theme/index.ts\");\n\n\n\nvar _jsxFileName = \"/Users/sandeeppasunuri/workspace/next-apollo-demo/client/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_app_global_style__WEBPACK_IMPORTED_MODULE_6__[\"GlobalStyle\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"ThemeProvider\"], {\n      theme: _app_theme__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client_react__WEBPACK_IMPORTED_MODULE_3__[\"ApolloProvider\"], {\n        client: _app_apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {\n          key: router.asPath,\n          __self: undefined,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 21\n          }\n        }))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidGhlbWUiLCJjbGllbnQiLCJhc1BhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FBd0M7QUFDbEQsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLHFFQUFDLCtEQUFEO0FBQWUsV0FBSyxFQUFFQyxrREFBdEI7QUFBQSw2QkFDSSxxRUFBQyxtRUFBRDtBQUFnQixjQUFNLEVBQUVDLDBEQUF4QjtBQUFBLCtCQUNJLDREQUFDLFNBQUQsa0NBQWVKLFNBQWY7QUFBMEIsYUFBRyxFQUFFQyxNQUFNLENBQUNJLE1BQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSjtBQUFBLGtCQURKO0FBVUgsQ0FaRDs7QUFjZVAsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vYXBwL2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcuLi9hcHAvZ2xvYmFsLXN0eWxlJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9hcHAvdGhlbWUnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLmFzUGF0aH0gLz5cbiAgICAgICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@apollo/client/react":
/*!***************************************!*\
  !*** external "@apollo/client/react" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9yZWFjdFwiPzFhODUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQvcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client/react\n");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client/utilities\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIj9lNDYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBhcG9sbG8vY2xpZW50L3V0aWxpdGllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client/utilities\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });