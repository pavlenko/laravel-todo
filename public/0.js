(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/store/desks.js":
/*!*************************************!*\
  !*** ./resources/js/store/desks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_DesksAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/DesksAPI */ "./resources/js/api/DesksAPI.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");



var state = function state() {
  return {
    desks: []
  };
};

var getters = {
  desks: function desks(state) {
    return state.desks;
  }
};
var mutations = {
  FETCH_DESKS_SUCCESS: function FETCH_DESKS_SUCCESS(state, desks) {
    state.desks = desks;
  },
  FETCH_DESKS_FAILURE: function FETCH_DESKS_FAILURE() {}
};
var actions = {
  fetchDesks: function fetchDesks(_ref) {
    var commit = _ref.commit,
        state = _ref.state;
    return _api_DesksAPI__WEBPACK_IMPORTED_MODULE_0__["default"].getAllDesk().then(function (desks) {
      return commit('FETCH_DESKS_SUCCESS', desks);
    })["catch"](function () {
      return commit('FETCH_DESKS_FAILURE');
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}));

/***/ })

}]);