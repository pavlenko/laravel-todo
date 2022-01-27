(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desks */ "./resources/js/components/Desks.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    Desks: _Desks__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardsItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsItem */ "./resources/js/components/CardsItem.vue");
/* harmony import */ var _CardsCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsCreate */ "./resources/js/components/CardsCreate.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DTO/CardDTO */ "./resources/js/DTO/CardDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardsItem: _CardsItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardsCreate: _CardsCreate__WEBPACK_IMPORTED_MODULE_1__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    listId: Number
  },
  data: function data() {
    return {
      cards: [],
      loading: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loading = true;
    axios.get(__baseURL + '/api/V1/cards/', {
      params: {
        list_id: this.listId
      }
    }).then(function (response) {
      _this.cards = [].map.call(response.data.data, function (item) {
        return new _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_3__["default"](item);
      });
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      _this.loading = false;
    });
  },
  methods: {
    createCard: function createCard(card) {
      this.cards.push(card);
    },
    updateCard: function updateCard(card) {
      var index = this.cards.findIndex(function (item) {
        return String(item.id) === String(card.id);
      });

      if (index !== -1) {
        this.cards.splice(index, 1, card);
      }
    },
    deleteCard: function deleteCard(card) {
      this.cards = this.cards.filter(function (item) {
        return String(item.id) !== String(card.id);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/CardDTO */ "./resources/js/DTO/CardDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    listId: Number
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      card: new _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_1__["default"]({
        list_id: this.listId
      }),
      loading: false,
      errored: false
    };
  },
  methods: {
    createCard: function createCard(event) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/cards', this.card).then(function (response) {
        _this.$emit('createCard', new _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_1__["default"](response.data.data));

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsDelete.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsDelete.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/CardDTO */ "./resources/js/DTO/CardDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    card: _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      loading: false,
      errored: false
    };
  },
  methods: {
    deleteCard: function deleteCard() {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/cards/' + this.card.id, {
        _method: 'DELETE'
      }).then(function (response) {
        _this.$emit('deleteCard', _this.card);

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _CardsUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsUpdate */ "./resources/js/components/CardsUpdate.vue");
/* harmony import */ var _CardsDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardsDelete */ "./resources/js/components/CardsDelete.vue");
/* harmony import */ var _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DTO/CardDTO */ "./resources/js/DTO/CardDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //import Tasks from "./Tasks";

 //import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CardsUpdate: _CardsUpdate__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardsDelete: _CardsDelete__WEBPACK_IMPORTED_MODULE_2__["default"],
    Tasks: function Tasks() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Tasks.vue */ "./resources/js/components/Tasks.vue"));
    }
  },
  props: {
    card: _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      editor: null
    };
  },
  methods: {
    editText: function editText() {//TODO optimize usage
      // this.editor = ClassicEditor
      //     .create(this.$refs.text)
      //     .then(editor => {
      //         editor.editing.view.focus();
      //         editor.ui.focusTracker.on('change:isFocused', (evt, name, isFocused) => {
      //             if (!isFocused) {
      //                 // Do whatever you want with current editor data:
      //                 console.log(editor.getData());
      //                 editor.destroy();
      //                 //TODO call save only if changed content
      //             }
      //         });
      //         this.editor = editor;
      //     })
      //     .catch(error => { console.error(error); });
    },
    viewText: function viewText() {//TODO destroy editor
      // if (this.editor) {
      //     this.editor.destroy();
      // }
    },
    updateCard: function updateCard(card) {
      this.$emit('updateCard', card);
    },
    deleteCard: function deleteCard(card) {
      this.$emit('deleteCard', card);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsUpdate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsUpdate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _Tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks */ "./resources/js/components/Tasks.vue");
/* harmony import */ var _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DTO/CardDTO */ "./resources/js/DTO/CardDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import Editor from '@ckeditor/ckeditor5-build-classic';



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Tasks: _Tasks__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    card: _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      loading: false,
      errored: false,
      //editor: Editor,
      editor: null,
      editorData: 'AAA',
      editorConfig: {}
    };
  },
  methods: {
    updateCard: function updateCard(event) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/cards/' + this.card.id, Object.assign({
        _method: 'PUT'
      }, this.card)).then(function (response) {
        _this.$emit('updateCard', new _DTO_CardDTO__WEBPACK_IMPORTED_MODULE_2__["default"](response.data.data));

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Desks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Desks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesksItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesksItem */ "./resources/js/components/DesksItem.vue");
/* harmony import */ var _DesksCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesksCreate */ "./resources/js/components/DesksCreate.vue");
/* harmony import */ var _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DTO/DeskDTO */ "./resources/js/DTO/DeskDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DesksItem: _DesksItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    DesksCreate: _DesksCreate__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      desks: [],
      loading: false,
      errored: false
    };
  },
  mounted: function mounted() {
    this.load();
  },
  methods: {
    load: function load() {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.get(__baseURL + '/api/V1/desks').then(function (response) {
        _this.desks = [].map.call(response.data.data, function (item) {
          return new _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_2__["default"](item);
        });
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    },
    createDesk: function createDesk(desk) {
      this.desks.unshift(desk);
    },
    updateDesk: function updateDesk(desk) {
      var index = this.desks.findIndex(function (item) {
        return String(item.id) === String(desk.id);
      });

      if (index !== -1) {
        this.desks.splice(index, 1, desk);
      }
    },
    deleteDesk: function deleteDesk(desk) {
      this.desks = this.desks.filter(function (item) {
        return String(item.id) !== String(desk.id);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/DeskDTO */ "./resources/js/DTO/DeskDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      desk: new _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__["default"](),
      loading: false,
      errored: false
    };
  },
  methods: {
    createDesk: function createDesk(event) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/desks', this.desk).then(function (response) {
        _this.$emit('createDesk', new _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__["default"](response.data.data));

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksDelete.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksDelete.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/DeskDTO */ "./resources/js/DTO/DeskDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    desk: _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      loading: false,
      errored: false
    };
  },
  methods: {
    deleteDesk: function deleteDesk() {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/desks/' + this.desk.id, {
        _method: 'DELETE'
      }).then(function (response) {
        _this.$emit('deleteDesk', _this.desk);

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesksUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesksUpdate */ "./resources/js/components/DesksUpdate.vue");
/* harmony import */ var _DesksDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesksDelete */ "./resources/js/components/DesksDelete.vue");
/* harmony import */ var _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DTO/DeskDTO */ "./resources/js/DTO/DeskDTO.js");
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    DesksUpdate: _DesksUpdate__WEBPACK_IMPORTED_MODULE_0__["default"],
    DesksDelete: _DesksDelete__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    desk: _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {
    updateDesk: function updateDesk(desk) {
      this.$emit('updateDesk', desk);
    },
    deleteDesk: function deleteDesk(desk) {
      this.$emit('deleteDesk', desk);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksUpdate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksUpdate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/DeskDTO */ "./resources/js/DTO/DeskDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    desk: _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      loading: false,
      errored: false
    };
  },
  methods: {
    updateDesk: function updateDesk(event) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/desks/' + this.desk.id, Object.assign({
        _method: 'PUT'
      }, this.desk)).then(function (response) {
        _this.$emit('updateDesk', new _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_1__["default"](response.data.data));

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Lists.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListsItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListsItem */ "./resources/js/components/ListsItem.vue");
/* harmony import */ var _ListsCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListsCreate */ "./resources/js/components/ListsCreate.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DTO/ListDTO */ "./resources/js/DTO/ListDTO.js");
/* harmony import */ var _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DTO/DeskDTO */ "./resources/js/DTO/DeskDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ListsItem: _ListsItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    ListsCreate: _ListsCreate__WEBPACK_IMPORTED_MODULE_1__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      deskId: this.$route.params.id,
      desk: {},
      lists: [],
      loading: false,
      errored: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loading = true;
    this.errored = false;
    axios.all([axios.get(__baseURL + '/api/V1/desks/' + this.deskId).then(function (response) {
      _this.desk = new _DTO_DeskDTO__WEBPACK_IMPORTED_MODULE_4__["default"](response.data.data);
    }), axios.get(__baseURL + '/api/V1/lists/', {
      params: {
        desk_id: this.deskId
      }
    }).then(function (response) {
      _this.lists = [].map.call(response.data.data, function (item) {
        return new _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_3__["default"](item);
      });
    })])["catch"](function (error) {
      _this.errored = true;
      console.log(error);
    })["finally"](function () {
      _this.loading = false;
    });
  },
  methods: {
    createList: function createList(list) {
      this.lists.push(list);
    },
    updateList: function updateList(list) {
      var index = this.lists.findIndex(function (item) {
        return String(item.id) === String(list.id);
      });

      if (index !== -1) {
        this.lists.splice(index, 1, list);
      }
    },
    deleteList: function deleteList(list) {
      this.lists = this.lists.filter(function (item) {
        return String(item.id) !== String(list.id);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/ListDTO */ "./resources/js/DTO/ListDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    deskId: Number
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      list: new _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__["default"]({
        desk_id: this.deskId
      }),
      loading: false,
      errored: false
    };
  },
  methods: {
    createList: function createList(event) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/lists', this.list).then(function (response) {
        _this.$emit('createList', new _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__["default"](response.data.data));

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsDelete.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsDelete.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/ListDTO */ "./resources/js/DTO/ListDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    list: _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      loading: false,
      errored: false
    };
  },
  methods: {
    deleteList: function deleteList() {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/lists/' + this.list.id, {
        _method: 'DELETE'
      }).then(function (response) {
        _this.$emit('deleteList', _this.list);

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListsUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListsUpdate */ "./resources/js/components/ListsUpdate.vue");
/* harmony import */ var _ListsDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListsDelete */ "./resources/js/components/ListsDelete.vue");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cards */ "./resources/js/components/Cards.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ListsUpdate: _ListsUpdate__WEBPACK_IMPORTED_MODULE_0__["default"],
    ListsDelete: _ListsDelete__WEBPACK_IMPORTED_MODULE_1__["default"],
    Cards: _Cards__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    list: Object
  },
  methods: {
    updateList: function updateList(list) {
      this.$emit('updateList', list);
    },
    deleteList: function deleteList(list) {
      this.$emit('deleteList', list);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsUpdate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsUpdate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DTO/ListDTO */ "./resources/js/DTO/ListDTO.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    list: _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      loading: false,
      errored: false
    };
  },
  methods: {
    updateList: function updateList(event) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/lists/' + this.list.id, Object.assign({
        _method: 'PUT'
      }, this.list)).then(function (response) {
        _this.$emit('updateList', new _DTO_ListDTO__WEBPACK_IMPORTED_MODULE_1__["default"](response.data.data));

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tasks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksCreate */ "./resources/js/components/TasksCreate.vue");
/* harmony import */ var _TasksItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksItem */ "./resources/js/components/TasksItem.vue");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TasksItem: _TasksItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    TasksCreate: _TasksCreate__WEBPACK_IMPORTED_MODULE_0__["default"],
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    cardId: Number
  },
  data: function data() {
    return {
      tasks: [],
      loading: false,
      errored: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.loading = true;
    this.errored = false;
    axios.get(__baseURL + '/api/V1/tasks', {
      params: {
        card_id: this.cardId
      }
    }).then(function (response) {
      _this.tasks = response.data.data;
      console.log(response);
    })["catch"](function (error) {
      _this.errored = true;
      console.log(error);
    })["finally"](function () {
      _this.loading = false;
    });
  },
  methods: {
    createTask: function createTask(task) {
      this.tasks.push(task);
    },
    updateTask: function updateTask(task) {
      console.log(task);
      var index = this.tasks.findIndex(function (item) {
        return String(item.id) === String(task.id);
      });

      if (index !== -1) {
        this.tasks.splice(index, 1, task);
      }
    },
    deleteTask: function deleteTask(task) {
      this.tasks = this.tasks.filter(function (item) {
        return String(item.id) !== String(task.id);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksCreate.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksCreate.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    cardId: Number
  },
  data: function data() {
    return {
      loading: false,
      errored: false
    };
  },
  methods: {
    createTask: function createTask(event) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/tasks', new FormData(event.target)).then(function (response) {
        _this.$emit('createTask', response.data.data);

        event.target.reset();
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksDelete.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksDelete.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    task: Object
  },
  data: function data() {
    return {
      uuid: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
      loading: false,
      errored: false
    };
  },
  methods: {
    deleteTask: function deleteTask() {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/tasks/' + this.task.id, {
        _method: 'DELETE'
      }).then(function () {
        _this.$emit('deleteTask', _this.task);

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksDelete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksDelete */ "./resources/js/components/TasksDelete.vue");
/* harmony import */ var _TasksStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksStatus */ "./resources/js/components/TasksStatus.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TasksStatus: _TasksStatus__WEBPACK_IMPORTED_MODULE_1__["default"],
    TasksDelete: _TasksDelete__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    task: Object
  },
  data: function data() {
    return {
      name: '',
      editing: false,
      loading: false,
      errored: false,
      statuses: [{
        label: 'New',
        "class": 'badge-secondary'
      }, {
        label: 'In Progress',
        "class": 'badge-primary'
      }, {
        label: 'Done',
        "class": 'badge-success'
      }]
    };
  },
  methods: {
    statusClass: function statusClass(code) {
      return this.statuses[code]["class"];
    },
    statusLabel: function statusLabel(code) {
      return this.statuses[code].label;
    },
    viewName: function viewName() {
      var _this = this;

      setTimeout(function () {
        _this.editing = false;
      }, 300);
    },
    editName: function editName() {
      var _this2 = this;

      this.name = this.task.name;
      this.editing = true;
      this.$nextTick(function () {
        _this2.$refs.name.focus();
      });
    },
    saveName: function saveName() {
      this.task.name = this.name;
      this.updateTask();
      this.viewName();
    },
    updateTask: function updateTask() {
      var _this3 = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/tasks/' + this.task.id, Object.assign({
        _method: 'PUT'
      }, this.task)).then(function (response) {
        _this3.$emit('updateTask', response.data.data);
      })["catch"](function (error) {
        _this3.errored = true;
        console.log(error);
      })["finally"](function () {
        _this3.loading = false;
      });
    },
    deleteTask: function deleteTask(task) {
      this.$emit('deleteTask', task);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksStatus.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksStatus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    task: Object
  },
  data: function data() {
    return {
      statuses: [{
        label: 'New',
        "class": 'badge-secondary'
      }, {
        label: 'In Progress',
        "class": 'badge-primary'
      }, {
        label: 'Done',
        "class": 'badge-success'
      }]
    };
  },
  methods: {
    statusClass: function statusClass(code) {
      return this.statuses[code]["class"];
    },
    statusLabel: function statusLabel(code) {
      return this.statuses[code].label;
    },
    updateTask: function updateTask(code) {
      var _this = this;

      this.loading = true;
      this.errored = false;
      axios.post(__baseURL + '/api/V1/tasks/' + this.task.id, {
        _method: 'PUT',
        name: this.task.name,
        status: code
      }).then(function (response) {
        _this.$emit('updateTask', response.data.data);

        _this.$bvModal.hide(_this.uuid);
      })["catch"](function (error) {
        _this.errored = true;
        console.log(error);
      })["finally"](function () {
        _this.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/dist/bootstrap-vue.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/bootstrap-vue/dist/bootstrap-vue.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * BootstrapVue 2.21.2
 *
 * @link https://bootstrap-vue.org
 * @source https://github.com/bootstrap-vue/bootstrap-vue
 * @copyright (c) 2016-2021 BootstrapVue
 * @license MIT
 * https://github.com/bootstrap-vue/bootstrap-vue/blob/master/LICENSE
 */
!function(t,e){ true?module.exports=e(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js")):undefined}(this,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=e(t);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t,e,i){return(p=f()?Reflect.construct:function(t,e,i){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return i&&h(o,i.prototype),o}).apply(null,arguments)}function m(t){var e="function"==typeof Map?new Map:void 0;return(m=function(t){if(null===t||(i=t,-1===Function.toString.call(i).indexOf("[native code]")))return t;var i;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return p(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)})(t)}function v(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function b(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?v(t):e}function g(t){var e=f();return function(){var i,n=d(t);if(e){var o=d(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return b(this,i)}}function y(t,e,i){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(i):o.value}})(t,e,i||t)}function w(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],n=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return i}(t,e)||C(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||C(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){if(t){if("string"==typeof t)return x(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var S=function(){return(S=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},k=/-(\w)/g,$=/:(.*)/,B=/;(?![^(]*\))/g;function _(t,e){return e?e.toUpperCase():""}function D(t){for(var e,i={},n=0,o=t.split(B);n<o.length;n++){var r=o[n].split($),s=r[0],a=r[1];(s=s.trim())&&("string"==typeof a&&(a=a.trim()),i[(e=s,e.replace(k,_))]=a)}return i}function F(){for(var t,e,i={},n=arguments.length;n--;)for(var o=0,r=Object.keys(arguments[n]);o<r.length;o++)switch(t=r[o]){case"class":case"style":case"directives":if(Array.isArray(i[t])||(i[t]=[]),"style"===t){var s=void 0;s=Array.isArray(arguments[n].style)?arguments[n].style:[arguments[n].style];for(var a=0;a<s.length;a++){var l=s[a];"string"==typeof l&&(s[a]=D(l))}arguments[n].style=s}i[t]=i[t].concat(arguments[n][t]);break;case"staticClass":if(!arguments[n][t])break;void 0===i[t]&&(i[t]=""),i[t]&&(i[t]+=" "),i[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":i[t]||(i[t]={});for(var c=0,u=Object.keys(arguments[n][t]||{});c<u.length;c++)e=u[c],i[t][e]?i[t][e]=[].concat(i[t][e],arguments[n][t][e]):i[t][e]=arguments[n][t][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":i[t]||(i[t]={}),i[t]=S({},arguments[n][t],i[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:i[t]||(i[t]=arguments[n][t])}return i}var I,P,O,V="undefined"!=typeof window,E="undefined"!=typeof document,L="undefined"!=typeof navigator,A="undefined"!=typeof Promise,R="undefined"!=typeof MutationObserver||"undefined"!=typeof WebKitMutationObserver||"undefined"!=typeof MozMutationObserver,M=V&&E&&L,H=V?window:{},z=E?document:{},N=L?navigator:{},j=(N.userAgent||"").toLowerCase(),G=j.indexOf("jsdom")>0,W=(/msie|trident/.test(j),function(){var t=!1;if(M)try{var e={get passive(){t=!0}};H.addEventListener("test",e,e),H.removeEventListener("test",e,e)}catch(e){t=!1}return t}()),Y=M&&("ontouchstart"in z.documentElement||N.maxTouchPoints>0),U=M&&Boolean(H.PointerEvent||H.MSPointerEvent),q=M&&"IntersectionObserver"in H&&"IntersectionObserverEntry"in H&&"intersectionRatio"in H.IntersectionObserverEntry.prototype,K="BvConfig",X=["xs","sm","md","lg","xl"],Z=/\[(\d+)]/g,J=/^(BV?)/,Q=/^\d+$/,tt=/^\..+/,et=/^#/,it=/^#[A-Za-z]+[\w\-:.]*$/,nt=/(<([^>]+)>)/gi,ot=/\B([A-Z])/g,rt=/([a-z])([A-Z])/g,st=/^[0-9]*\.?[0-9]+$/,at=/\+/g,lt=/[-/\\^$*+?.()|[\]{}]/g,ct=/[\s\uFEFF\xA0]+/g,ut=/\s+/,dt=/\/\*$/,ht=/(\s|^)(\w)/g,ft=/^\s+/,pt=/_/g,mt=/-(\w)/g,vt=/^\d+-\d\d?-\d\d?(?:\s|T|$)/,bt=/-|\s|T/,gt=/^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9](:[0-5]?[0-9])?$/,yt=/^.*(#[^#]+)$/,wt=/%2C/g,Tt=/[!'()*]/g,Ct=/^(\?|#|&)/,xt=/^\d+(\.\d*)?[/:]\d+(\.\d*)?$/,St=/[/:]/,kt=/^col-/,$t=/^BIcon/,Bt=/-u-.+/,Element=V?H.Element:function(t){u(Element,t);var e=g(Element);function Element(){return o(this,Element),e.apply(this,arguments)}return Element}(m(Object)),HTMLElement=V?H.HTMLElement:function(t){u(HTMLElement,t);var e=g(HTMLElement);function HTMLElement(){return o(this,HTMLElement),e.apply(this,arguments)}return HTMLElement}(Element),SVGElement=V?H.SVGElement:function(t){u(SVGElement,t);var e=g(SVGElement);function SVGElement(){return o(this,SVGElement),e.apply(this,arguments)}return SVGElement}(Element),_t=V?H.File:function(t){u(i,t);var e=g(i);function i(){return o(this,i),e.apply(this,arguments)}return i}(m(Object)),Dt=function(t){return n(t)},Ft=function(t){return void 0===t},It=function(t){return null===t},Pt=function(t){return Ft(t)||It(t)},Ot=function(t){return"function"===Dt(t)},Vt=function(t){return"boolean"===Dt(t)},Et=function(t){return"string"===Dt(t)},Lt=function(t){return"number"===Dt(t)},At=function(t){return st.test(String(t))},Rt=function(t){return Array.isArray(t)},Mt=function(t){return null!==t&&"object"===n(t)},Ht=function(t){return"[object Object]"===Object.prototype.toString.call(t)},zt=function(t){return t instanceof Date},Nt=function(t){return t instanceof Event},jt=function(t){return"RegExp"===function(t){return Object.prototype.toString.call(t).slice(8,-1)}(t)},Gt=function(){return Object.assign.apply(Object,arguments)},Wt=function(t,e){return Object.create(t,e)},Yt=function(t,e){return Object.defineProperties(t,e)},Ut=function(t,e,i){return Object.defineProperty(t,e,i)},qt=function(t){return Object.getOwnPropertyNames(t)},Kt=function(t){return Object.keys(t)},Xt=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},Zt=function(t){return c({},t)},Jt=function(t,e){return Kt(t).filter((function(t){return-1!==e.indexOf(t)})).reduce((function(e,i){return c(c({},e),{},a({},i,t[i]))}),{})},Qt=function(t,e){return Kt(t).filter((function(t){return-1===e.indexOf(t)})).reduce((function(e,i){return c(c({},e),{},a({},i,t[i]))}),{})},te=function t(e,i){return Mt(e)&&Mt(i)&&Kt(i).forEach((function(n){Mt(i[n])?(e[n]&&Mt(e[n])||(e[n]=i[n]),t(e[n],i[n])):Gt(e,a({},n,i[n]))})),e},ee=function(t){return Kt(t).sort().reduce((function(e,i){return c(c({},e),{},a({},i,t[i]))}),{})},ie=function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return Rt(e)?e.reduce((function(e,i){return[].concat(T(e),[t(i,i)])}),[]):Ht(e)?Kt(e).reduce((function(i,n){return c(c({},i),{},a({},n,t(e[n],e[n])))}),{}):i},ne=function(t){return t},oe=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(!(e=Rt(e)?e.join("."):e)||!Mt(t))return i;if(e in t)return t[e];var n=(e=String(e).replace(Z,".$1")).split(".").filter(ne);return 0===n.length?i:n.every((function(e){return Mt(t)&&e in t&&!Pt(t=t[e])}))?t:It(t)?null:i},re=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=oe(t,e);return Pt(n)?i:n},se=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i="undefined"!=typeof process&&process&&process.env||{};return t?i[t]||e:i},ae=function(){return se("BOOTSTRAP_VUE_NO_WARN")||"production"===se("NODE_ENV")},le=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;ae()||console.warn("[BootstrapVue warn]: ".concat(e?"".concat(e," - "):"").concat(t))},ce=function(t){return!M&&(le("".concat(t,": Can not be called during SSR.")),!0)},ue=function(t){return!A&&(le("".concat(t,": Requires Promise support.")),!0)},de=function(){function t(){o(this,t),this.$_config={}}return s(t,[{key:"setConfig",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(Ht(e)){var i=qt(e);i.forEach((function(i){var n=e[i];"breakpoints"===i?!Rt(n)||n.length<2||n.some((function(t){return!Et(t)||0===t.length}))?le('"breakpoints" must be an array of at least 2 breakpoint names',K):t.$_config[i]=ie(n):Ht(n)&&(t.$_config[i]=qt(n).reduce((function(t,e){return Ft(n[e])||(t[e]=ie(n[e])),t}),t.$_config[i]||{}))}))}}},{key:"resetConfig",value:function(){this.$_config={}}},{key:"getConfig",value:function(){return ie(this.$_config)}},{key:"getConfigValue",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return ie(oe(this.$_config,t,e))}}]),t}(),he=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.default;e.prototype.$bvConfig=i.default.prototype.$bvConfig=e.prototype.$bvConfig||i.default.prototype.$bvConfig||new de,e.prototype.$bvConfig.setConfig(t)},fe=(I=!1,P=["Multiple instances of Vue detected!","You may need to set up an alias for Vue in your bundler config.","See: https://bootstrap-vue.org/docs#using-module-bundlers"].join("\n"),function(t){I||i.default===t||G||le(P),I=!0}),pe=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.components,i=t.directives,n=t.plugins,o=function t(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,fe(o),he(r,o),ge(o,e),we(o,i),ve(o,n))};return o.installed=!1,o},me=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(c({},e),{},{install:pe(t)})},ve=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var i in e)i&&e[i]&&t.use(e[i])},be=function(t,e,i){t&&e&&i&&t.component(e,i)},ge=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var i in e)be(t,i,e[i])},ye=function(t,e,i){t&&e&&i&&t.directive(e.replace(/^VB/,"B"),i)},we=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var i in e)ye(t,i,e[i])},Te="BAlert",Ce="BAspect",xe="BAvatar",Se="BAvatarGroup",ke="BBadge",$e="BBreadcrumb",Be="BBreadcrumbItem",_e="BBreadcrumbLink",De="BButton",Fe="BButtonClose",Ie="BButtonGroup",Pe="BButtonToolbar",Oe="BCalendar",Ve="BCard",Ee="BCardBody",Le="BCardFooter",Ae="BCardGroup",Re="BCardHeader",Me="BCardImg",He="BCardImgLazy",ze="BCardSubTitle",Ne="BCardText",je="BCardTitle",Ge="BCarousel",We="BCarouselSlide",Ye="BCol",Ue="BCollapse",qe="BContainer",Ke="BDropdown",Xe="BDropdownDivider",Ze="BDropdownForm",Je="BDropdownGroup",Qe="BDropdownHeader",ti="BDropdownItem",ei="BDropdownItemButton",ii="BDropdownText",ni="BEmbed",oi="BForm",ri="BFormCheckbox",si="BFormCheckboxGroup",ai="BFormDatalist",li="BFormDatepicker",ci="BFormFile",ui="BFormGroup",di="BFormInput",hi="BFormInvalidFeedback",fi="BFormRadio",pi="BFormRadioGroup",mi="BFormRating",vi="BFormRow",bi="BFormSelect",gi="BFormSelectOption",yi="BFormSelectOptionGroup",wi="BFormSpinbutton",Ti="BFormTag",Ci="BFormTags",xi="BFormText",Si="BFormTextarea",ki="BFormTimepicker",$i="BFormValidFeedback",Bi="BIcon",_i="BImg",Di="BImgLazy",Fi="BInputGroup",Ii="BInputGroupAddon",Pi="BInputGroupAppend",Oi="BInputGroupPrepend",Vi="BInputGroupText",Ei="BJumbotron",Li="BLink",Ai="BListGroup",Ri="BListGroupItem",Mi="BMedia",Hi="BMediaAside",zi="BMediaBody",Ni="BModal",ji="BNav",Gi="BNavbar",Wi="BNavbarBrand",Yi="BNavbarNav",Ui="BNavbarToggle",qi="BNavForm",Ki="BNavItem",Xi="BNavItemDropdown",Zi="BOverlay",Ji="BPagination",Qi="BPaginationNav",tn="BPopover",en="BProgress",nn="BProgressBar",on="BRow",rn="BSidebar",sn="BSkeleton",an="BSkeletonIcon",ln="BSkeletonImg",cn="BSkeletonTable",un="BSkeletonWrapper",dn="BSpinner",hn="BTab",fn="BTable",pn="BTableCell",mn="BTableLite",vn="BTableSimple",bn="BTabs",gn="BTbody",yn="BTfoot",wn="BThead",Tn="BTime",Cn="BToast",xn="BToaster",Sn="BTooltip",kn="cancel",$n="change",Bn="click",_n="close",Dn="context",Fn="context-changed",In="destroyed",Pn="disable",On="disabled",Vn="enable",En="enabled",Ln="filtered",An="first",Rn="focusin",Mn="focusout",Hn="head-clicked",zn="hidden",Nn="hide",jn="input",Gn="last",Wn="mouseenter",Yn="mouseleave",Un="next",qn="open",Kn="page-click",Xn="prev",Zn="refreshed",Jn="row-clicked",Qn="selected",to="show",eo="shown",io="sliding-end",no="toggle",oo="hook:beforeDestroy",ro="hook:destroyed",so="bv",ao={passive:!0},lo={passive:!0,capture:!1},co=void 0,uo=Array,ho=Boolean,fo=Date,po=Function,mo=Number,vo=Object,bo=RegExp,go=String,yo=[uo,po],wo=[uo,vo],To=[uo,vo,go],Co=[uo,go],xo=[ho,mo],So=[ho,mo,go],ko=[ho,go],$o=[fo,go],Bo=[po,go],_o=[mo,go],Do=[mo,vo,go],Fo=[vo,po],Io=[vo,go],Po="append",Oo="badge",Vo="bottom-row",Eo="button-content",Lo="custom-foot",Ao="default",Ro="empty",Mo="file-name",Ho="first",zo="footer",No="header",jo="label",Go="lead",Wo="modal-cancel",Yo="modal-ok",Uo="modal-title",qo="prepend",Ko="row-details",Xo="table-busy",Zo="table-caption",Jo="table-colgroup",Qo="thead-top",tr="title",er="top-row",ir=function(){return Array.from.apply(Array,arguments)},nr=function(t,e){return-1!==t.indexOf(e)},or=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return Array.prototype.concat.apply([],e)},rr=function(t,e){var i=Ot(e)?e:function(){return e};return Array.apply(null,{length:t}).map(i)},sr=function(t){return t.reduce((function(t,e){return or(t,e)}),[])},ar=function t(e){return e.reduce((function(e,i){return or(e,Array.isArray(i)?t(i):i)}),[])},lr=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,i=parseInt(t,10);return isNaN(i)?e:i},cr=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,i=parseFloat(t);return isNaN(i)?e:i},ur=function(t,e){return cr(t).toFixed(lr(e,0))},dr=function(t){return t.replace(ot,"-$1").toLowerCase()},hr=function(t){return(t=dr(t).replace(mt,(function(t,e){return e?e.toUpperCase():""}))).charAt(0).toUpperCase()+t.slice(1)},fr=function(t){return t.replace(pt," ").replace(rt,(function(t,e,i){return e+" "+i})).replace(ht,(function(t,e,i){return e+i.toUpperCase()}))},pr=function(t){return(t=Et(t)?t.trim():String(t)).charAt(0).toUpperCase()+t.slice(1)},mr=function(t){return t.replace(lt,"\\$&")},vr=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Pt(t)?"":Rt(t)||Ht(t)&&t.toString===Object.prototype.toString?JSON.stringify(t,null,e):String(t)},br=function(t){return vr(t).trim()},gr=function(t){return vr(t).toLowerCase()},yr=Element.prototype,wr=["button","[href]:not(.disabled)","input","select","textarea","[tabindex]","[contenteditable]"].map((function(t){return"".concat(t,":not(:disabled):not([disabled])")})).join(", "),Tr=yr.matches||yr.msMatchesSelector||yr.webkitMatchesSelector,Cr=yr.closest||function(t){var e=this;do{if(Vr(e,t))return e;e=e.parentElement||e.parentNode}while(!It(e)&&e.nodeType===Node.ELEMENT_NODE);return null},xr=H.requestAnimationFrame||H.webkitRequestAnimationFrame||H.mozRequestAnimationFrame||H.msRequestAnimationFrame||H.oRequestAnimationFrame||function(t){return setTimeout(t,16)},Sr=H.MutationObserver||H.WebKitMutationObserver||H.MozMutationObserver||null,kr=function(t){return!(!t||t.nodeType!==Node.ELEMENT_NODE)},$r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=z.activeElement;return e&&!t.some((function(t){return t===e}))?e:null},Br=function(t,e){return vr(t).toLowerCase()===vr(e).toLowerCase()},_r=function(t){return kr(t)&&t===$r()},Dr=function(t){if(!kr(t)||!t.parentNode||!Lr(z.body,t))return!1;if("none"===Ur(t,"display"))return!1;var e=qr(t);return!!(e&&e.height>0&&e.width>0)},Fr=function(t){return!kr(t)||t.disabled||Gr(t,"disabled")||Hr(t,"disabled")},Ir=function(t){return kr(t)&&t.offsetHeight},Pr=function(t,e){return ir((kr(e)?e:z).querySelectorAll(t))},Or=function(t,e){return(kr(e)?e:z).querySelector(t)||null},Vr=function(t,e){return!!kr(t)&&Tr.call(t,e)},Er=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!kr(e))return null;var n=Cr.call(e,t);return i?n:n===e?null:n},Lr=function(t,e){return!(!t||!Ot(t.contains))&&t.contains(e)},Ar=function(t){return z.getElementById(/^#/.test(t)?t.slice(1):t)||null},Rr=function(t,e){e&&kr(t)&&t.classList&&t.classList.add(e)},Mr=function(t,e){e&&kr(t)&&t.classList&&t.classList.remove(e)},Hr=function(t,e){return!!(e&&kr(t)&&t.classList)&&t.classList.contains(e)},zr=function(t,e,i){e&&kr(t)&&t.setAttribute(e,i)},Nr=function(t,e){e&&kr(t)&&t.removeAttribute(e)},jr=function(t,e){return e&&kr(t)?t.getAttribute(e):null},Gr=function(t,e){return e&&kr(t)?t.hasAttribute(e):null},Wr=function(t,e,i){e&&kr(t)&&(t.style[e]=i)},Yr=function(t,e){e&&kr(t)&&(t.style[e]="")},Ur=function(t,e){return e&&kr(t)&&t.style[e]||null},qr=function(t){return kr(t)?t.getBoundingClientRect():null},Kr=function(t){var e=H.getComputedStyle;return e&&kr(t)?e(t):{}},Xr=function(){return H.getSelection?H.getSelection():null},Zr=function(t){var e={top:0,left:0};if(!kr(t)||0===t.getClientRects().length)return e;var i=qr(t);if(i){var n=t.ownerDocument.defaultView;e.top=i.top+n.pageYOffset,e.left=i.left+n.pageXOffset}return e},Jr=function(t){var e={top:0,left:0};if(!kr(t))return e;var i={top:0,left:0},n=Kr(t);if("fixed"===n.position)e=qr(t)||e;else{e=Zr(t);for(var o=t.ownerDocument,r=t.offsetParent||o.documentElement;r&&(r===o.body||r===o.documentElement)&&"static"===Kr(r).position;)r=r.parentNode;if(r&&r!==t&&r.nodeType===Node.ELEMENT_NODE){i=Zr(r);var s=Kr(r);i.top+=cr(s.borderTopWidth,0),i.left+=cr(s.borderLeftWidth,0)}}return{top:e.top-i.top-cr(n.marginTop,0),left:e.left-i.left-cr(n.marginLeft,0)}},Qr=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return Pr(wr,t).filter(Dr).filter((function(t){return t.tabIndex>-1&&!t.disabled}))},ts=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{t.focus(e)}catch(t){}return _r(t)},es=function(t){try{t.blur()}catch(t){}return!_r(t)},is=function(t){var e=Wt(null);return function(){for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];var r=JSON.stringify(n);return e[r]=e[r]||t.apply(null,n)}},ns=i.default.prototype,os=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=ns.$bvConfig;return i?i.getConfigValue(t,e):ie(e)},rs=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return e?os("".concat(t,".").concat(e),i):os(t,{})},ss=function(){return os("breakpoints",X)},as=is((function(){return ss()})),ls=is((function(){var t=ie(as());return t[0]="",t})),cs=function(t,e){return t+pr(e)},us=function(t,e){return i=e.replace(t,""),(i=Et(i)?i.trim():String(i)).charAt(0).toLowerCase()+i.slice(1);var i},ds=function(t,e){return e+(t?pr(t):"")},hs=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:co,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,o=!0===i;return n=o?n:i,c(c(c({},t?{type:t}:{}),o?{required:o}:Ft(e)?{}:{default:Mt(e)?function(){return e}:e}),Ft(n)?{}:{validator:n})},fs=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ne;if(Rt(t))return t.map(e);var i={};for(var n in t)Xt(t,n)&&(i[e(n)]=Mt(t[n])?Zt(t[n]):t[n]);return i},ps=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ne;return(Rt(t)?t.slice():Kt(t)).reduce((function(t,n){return t[i(n)]=e[n],t}),{})},ms=function(t,e,i){return c(c({},ie(t)),{},{default:function(){var n=rs(i,e,t.default);return Ot(n)?n():n}})},vs=function(t,e){return Kt(t).reduce((function(i,n){return c(c({},i),{},a({},n,ms(t[n],n,e)))}),{})},bs=ms({},"","").default.name,gs=function(t){return Ot(t)&&t.name!==bs},ys=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,o=void 0===n?co:n,r=e.defaultValue,s=void 0===r?void 0:r,l=e.validator,c=void 0===l?void 0:l,u=e.event,d=void 0===u?jn:u,h=a({},t,hs(o,s,c)),f=i.default.extend({model:{prop:t,event:d},props:h});return{mixin:f,props:h,prop:t,event:d}},ws=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return(t=or(t).filter(ne)).some((function(t){return e[t]||i[t]}))},Ts=function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t=or(t).filter(ne);for(var r=0;r<t.length&&!e;r++){var s=t[r];e=n[s]||o[s]}return Ot(e)?e(i):e},Cs=i.default.extend({methods:{hasNormalizedSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ao,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.$scopedSlots,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.$slots;return ws(t,e,i)},normalizeSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ao,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.$scopedSlots,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.$slots,o=Ts(t,e,i,n);return o?or(o):o}}}),xs=function(t){return W?Mt(t)?t:{capture:!!t||!1}:!!(Mt(t)?t.capture:t)},Ss=function(t,e,i,n){t&&t.addEventListener&&t.addEventListener(e,i,xs(n))},ks=function(t,e,i,n){t&&t.removeEventListener&&t.removeEventListener(e,i,xs(n))},$s=function(t){for(var e=t?Ss:ks,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];e.apply(void 0,n)},Bs=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.preventDefault,n=void 0===i||i,o=e.propagation,r=void 0===o||o,s=e.immediatePropagation,a=void 0!==s&&s;n&&t.preventDefault(),r&&t.stopPropagation(),a&&t.stopImmediatePropagation()},_s=function(t){return dr(t.replace(J,""))},Ds=function(t,e){return[so,_s(t),e].join("::")},Fs=function(t,e){return[so,e,_s(t)].join("::")},Is=vs({ariaLabel:hs(go,"Close"),content:hs(go,"&times;"),disabled:hs(ho,!1),textVariant:hs(go)},Fe),Ps=i.default.extend({name:Fe,functional:!0,props:Is,render:function(t,e){var i=e.props,n=e.data,o=e.slots,r=e.scopedSlots,s=o(),l=r||{},c={staticClass:"close",class:a({},"text-".concat(i.textVariant),i.textVariant),attrs:{type:"button",disabled:i.disabled,"aria-label":i.ariaLabel?String(i.ariaLabel):null},on:{click:function(t){i.disabled&&Nt(t)&&Bs(t)}}};return ws(Ao,l,s)||(c.domProps={innerHTML:i.content}),t("button",F(n,c),Ts(Ao,{},l,s))}}),Os={name:"",enterClass:"",enterActiveClass:"",enterToClass:"show",leaveClass:"show",leaveActiveClass:"",leaveToClass:""},Vs=c(c({},Os),{},{enterActiveClass:"fade",leaveActiveClass:"fade"}),Es={appear:hs(ho,!1),mode:hs(go),noFade:hs(ho,!1),transProps:hs(vo)},Ls=i.default.extend({name:"BVTransition",functional:!0,props:Es,render:function(t,e){var i=e.children,n=e.data,o=e.props,r=o.transProps;return Ht(r)||(r=o.noFade?Os:Vs,o.appear&&(r=c(c({},r),{},{appear:!0,appearClass:r.enterClass,appearActiveClass:r.enterActiveClass,appearToClass:r.enterToClass}))),t("transition",F(n,{props:r=c(c({mode:o.mode},r),{},{css:!0})}),i)}}),As=ys("show",{type:So,defaultValue:!1}),Rs=As.mixin,Ms=As.props,Hs=As.prop,zs=As.event,Ns=function(t){return""===t||Vt(t)?0:(t=lr(t,0))>0?t:0},js=function(t){return""===t||!0===t||!(lr(t,0)<1)&&!!t},Gs=vs(ee(c(c({},Ms),{},{dismissLabel:hs(go,"Close"),dismissible:hs(ho,!1),fade:hs(ho,!1),variant:hs(go,"info")})),Te),Ws=me({components:{BAlert:i.default.extend({name:Te,mixins:[Rs,Cs],props:Gs,data:function(){return{countDown:0,localShow:js(this[Hs])}},watch:(O={},a(O,Hs,(function(t){this.countDown=Ns(t),this.localShow=js(t)})),a(O,"countDown",(function(t){var e=this;this.clearCountDownInterval();var i=this[Hs];At(i)&&(this.$emit("dismiss-count-down",t),i!==t&&this.$emit(zs,t),t>0?(this.localShow=!0,this.$_countDownTimeout=setTimeout((function(){e.countDown--}),1e3)):this.$nextTick((function(){xr((function(){e.localShow=!1}))})))})),a(O,"localShow",(function(t){var e=this[Hs];t||!this.dismissible&&!At(e)||this.$emit("dismissed"),At(e)||e===t||this.$emit(zs,t)})),O),created:function(){this.$_filterTimer=null;var t=this[Hs];this.countDown=Ns(t),this.localShow=js(t)},beforeDestroy:function(){this.clearCountDownInterval()},methods:{dismiss:function(){this.clearCountDownInterval(),this.countDown=0,this.localShow=!1},clearCountDownInterval:function(){clearTimeout(this.$_countDownTimeout),this.$_countDownTimeout=null}},render:function(t){var e=t();if(this.localShow){var i=this.dismissible,n=this.variant,o=t();i&&(o=t(Ps,{attrs:{"aria-label":this.dismissLabel},on:{click:this.dismiss}},[this.normalizeSlot("dismiss")])),e=t("div",{staticClass:"alert",class:a({"alert-dismissible":i},"alert-".concat(n),n),attrs:{role:"alert","aria-live":"polite","aria-atomic":!0},key:this._uid},[o,this.normalizeSlot()])}return t(Ls,{props:{noFade:!this.fade}},[e])}})}}),Ys=Math.min,Us=Math.max,qs=Math.abs,Ks=Math.ceil,Xs=Math.floor,Zs=Math.pow,Js=Math.round,Qs="b-aspect",ta=vs({aspect:hs(_o,"1:1"),tag:hs(go,"div")},Ce),ea=i.default.extend({name:Ce,mixins:[Cs],props:ta,computed:{padding:function(){var t=this.aspect,e=1;if(xt.test(t)){var i=w(t.split(St).map((function(t){return cr(t)||1})),2);e=i[0]/i[1]}else e=cr(t)||1;return"".concat(100/qs(e),"%")}},render:function(t){var e=t("div",{staticClass:"".concat(Qs,"-sizer flex-grow-1"),style:{paddingBottom:this.padding,height:0}}),i=t("div",{staticClass:"".concat(Qs,"-content flex-grow-1 w-100 mw-100"),style:{marginLeft:"-100%"}},this.normalizeSlot());return t(this.tag,{staticClass:"".concat(Qs," d-flex")},[e,i])}}),ia=me({components:{BAspect:ea}}),na=function(t){return"%"+t.charCodeAt(0).toString(16)},oa=function(t){return encodeURIComponent(vr(t)).replace(Tt,na).replace(wt,",")},ra=decodeURIComponent,sa=function(t){if(!Ht(t))return"";var e=Kt(t).map((function(e){var i=t[e];return Ft(i)?"":It(i)?oa(e):Rt(i)?i.reduce((function(t,i){return It(i)?t.push(oa(e)):Ft(i)||t.push(oa(e)+"="+oa(i)),t}),[]).join("&"):oa(e)+"="+oa(i)})).filter((function(t){return t.length>0})).join("&");return e?"?".concat(e):""},aa=function(t){var e={};return(t=vr(t).trim().replace(Ct,""))?(t.split("&").forEach((function(t){var i=t.replace(at," ").split("="),n=ra(i.shift()),o=i.length>0?ra(i.join("=")):null;Ft(e[n])?e[n]=o:Rt(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e},la=function(t){return!(!t.href&&!t.to)},ca=function(t){return!(!t||Br(t,"a"))},ua=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.href,i=t.to,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"a",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/";if(e)return e;if(ca(n))return null;if(Et(i))return i||r;if(Ht(i)&&(i.path||i.query||i.hash)){var s=vr(i.path),a=sa(i.query),l=vr(i.hash);return l=l&&"#"!==l.charAt(0)?"#".concat(l):l,"".concat(s).concat(a).concat(l)||r}return o},da={viewBox:"0 0 16 16",width:"1em",height:"1em",focusable:"false",role:"img","aria-label":"icon"},ha={width:null,height:null,focusable:null,role:null,"aria-label":null},fa={animation:hs(go),content:hs(go),flipH:hs(ho,!1),flipV:hs(ho,!1),fontScale:hs(_o,1),rotate:hs(_o,0),scale:hs(_o,1),shiftH:hs(_o,0),shiftV:hs(_o,0),stacked:hs(ho,!1),title:hs(go),variant:hs(go)},pa=i.default.extend({name:"BIconBase",functional:!0,props:fa,render:function(t,e){var i,n=e.data,o=e.props,r=e.children,s=o.animation,l=o.content,c=o.flipH,u=o.flipV,d=o.stacked,h=o.title,f=o.variant,p=Us(cr(o.fontScale,1),0)||1,m=Us(cr(o.scale,1),0)||1,v=cr(o.rotate,0),b=cr(o.shiftH,0),g=cr(o.shiftV,0),y=c||u||1!==m,w=y||v,T=b||g,C=!Pt(l),x=t("g",{attrs:{transform:[w?"translate(8 8)":null,y?"scale(".concat((c?-1:1)*m," ").concat((u?-1:1)*m,")"):null,v?"rotate(".concat(v,")"):null,w?"translate(-8 -8)":null].filter(ne).join(" ")||null},domProps:C?{innerHTML:l||""}:{}},r);T&&(x=t("g",{attrs:{transform:"translate(".concat(16*b/16," ").concat(-16*g/16,")")}},[x])),d&&(x=t("g",[x]));var S=[h?t("title",h):null,x].filter(ne);return t("svg",F({staticClass:"b-icon bi",class:(i={},a(i,"text-".concat(f),f),a(i,"b-icon-animation-".concat(s),s),i),attrs:da,style:d?{}:{fontSize:1===p?null:"".concat(100*p,"%")}},n,d?{attrs:ha}:{},{attrs:{xmlns:d?null:"http://www.w3.org/2000/svg",fill:"currentColor"}}),S)}}),ma=function(t,e){var n=dr(t),o="BIcon".concat(hr(t)),r="bi-".concat(n),s=n.replace(/-/g," "),a=br(e||"");return i.default.extend({name:o,functional:!0,props:Qt(fa,["content"]),render:function(t,e){var i=e.data,n=e.props;return t(pa,F({props:{title:s},attrs:{"aria-label":s}},i,{staticClass:r,props:c(c({},n),{},{content:a})}))}})},va=ma("Blank",""),ba=ma("Calendar",'<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>'),ga=ma("CalendarFill",'<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>'),ya=ma("ChevronBarLeft",'<path fill-rule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0zM4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"/>'),wa=ma("ChevronDoubleLeft",'<path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'),Ta=ma("ChevronDown",'<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>'),Ca=ma("ChevronLeft",'<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>'),xa=ma("ChevronUp",'<path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>'),Sa=ma("CircleFill",'<circle cx="8" cy="8" r="8"/>'),ka=ma("Clock",'<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>'),$a=ma("ClockFill",'<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>'),Ba=ma("Dash",'<path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>'),_a=ma("PersonFill",'<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>'),Da=ma("Plus",'<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>'),Fa=ma("Star",'<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>'),Ia=ma("StarFill",'<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'),Pa=ma("StarHalf",'<path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z"/>'),Oa=ma("X",'<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>'),Va=function t(e,i){return e?(e.$options||{}).components[i]||t(e.$parent,i):null},Ea=Qt(fa,["content"]),La=vs(ee(c(c({},Ea),{},{icon:hs(go)})),Bi),Aa=i.default.extend({name:Bi,functional:!0,props:La,render:function(t,e){var i=e.data,n=e.props,o=e.parent,r=hr(br(n.icon||"")).replace($t,"");return t(r&&Va(o,"BIcon".concat(r))||va,F(i,{props:ps(Ea,n)}))}}),Ra=40,Ma=35,Ha=13,za=36,Na=37,ja=39,Ga=32,Wa=38,Ya=function(t,e){if(t.length!==e.length)return!1;for(var i=!0,n=0;i&&n<t.length;n++)i=Ua(t[n],e[n]);return i},Ua=function t(e,i){if(e===i)return!0;var n=zt(e),o=zt(i);if(n||o)return!(!n||!o)&&e.getTime()===i.getTime();if(n=Rt(e),o=Rt(i),n||o)return!(!n||!o)&&Ya(e,i);if(n=Mt(e),o=Mt(i),n||o){if(!n||!o)return!1;if(Kt(e).length!==Kt(i).length)return!1;for(var r in e){var s=Xt(e,r),a=Xt(i,r);if(s&&!a||!s&&a||!t(e[r],i[r]))return!1}}return String(e)===String(i)},qa=function(t){return!t||0===Kt(t).length},Ka=function(t){return{handler:function(e,i){if(!Ua(e,i))if(qa(e)||qa(i))this[t]=ie(e);else{for(var n in i)Xt(e,n)||this.$delete(this.$data[t],n);for(var o in e)this.$set(this.$data[t],o,e[o])}}}},Xa=function(t,e){return i.default.extend({data:function(){return a({},e,ie(this[t]))},watch:a({},t,Ka(e))})},Za=Xa("$attrs","bvAttrs"),Ja=i.default.extend({methods:{listenOnRoot:function(t,e){var i=this;this.$root.$on(t,e),this.$on(oo,(function(){i.$root.$off(t,e)}))},listenOnRootOnce:function(t,e){var i=this;this.$root.$once(t,e),this.$on(oo,(function(){i.$root.$off(t,e)}))},emitOnRoot:function(t){for(var e,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];(e=this.$root).$emit.apply(e,[t].concat(n))}}}),Qa=Xa("$listeners","bvListeners"),tl=Ds(Li,"clicked"),el={activeClass:hs(go),append:hs(ho,!1),event:hs(Co,Bn),exact:hs(ho,!1),exactActiveClass:hs(go),replace:hs(ho,!1),routerTag:hs(go,"a"),to:hs(Io)},il={noPrefetch:hs(ho,!1),prefetch:hs(ho,null)},nl=vs(ee(c(c(c({},il),el),{},{active:hs(ho,!1),disabled:hs(ho,!1),href:hs(go),rel:hs(go,null),routerComponentName:hs(go),target:hs(go,"_self")})),Li),ol=i.default.extend({name:Li,mixins:[Za,Qa,Ja,Cs],inheritAttrs:!1,props:nl,computed:{computedTag:function(){return function(t,e){var i=t.to,n=t.disabled,o=t.routerComponentName,r=!!e.$router;return!r||r&&(n||!i)?"a":o||(e.$nuxt?"nuxt-link":"router-link")}({to:this.to,disabled:this.disabled,routerComponentName:this.routerComponentName},this)},isRouterLink:function(){return ca(this.computedTag)},computedRel:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.target,i=t.rel;return"_blank"===e&&It(i)?"noopener":i||null}({target:this.target,rel:this.rel})},computedHref:function(){var t=this.to,e=this.href;return ua({to:t,href:e},this.computedTag)},computedProps:function(){var t=this.prefetch;return this.isRouterLink?c(c({},ps(c(c({},el),il),this)),{},{prefetch:Vt(t)?t:void 0,tag:this.routerTag}):{}},computedAttrs:function(){var t=this.bvAttrs,e=this.computedHref,i=this.computedRel,n=this.disabled,o=this.target,r=this.routerTag,s=this.isRouterLink;return c(c(c(c({},t),e?{href:e}:{}),s&&!Br(r,"a")?{}:{rel:i,target:o}),{},{tabindex:n?"-1":Ft(t.tabindex)?null:t.tabindex,"aria-disabled":n?"true":null})},computedListeners:function(){return c(c({},this.bvListeners),{},{click:this.onClick})}},methods:{onClick:function(t){var e=arguments,i=Nt(t),n=this.isRouterLink,o=this.bvListeners.click;i&&this.disabled?Bs(t,{immediatePropagation:!0}):(n&&t.currentTarget.__vue__&&t.currentTarget.__vue__.$emit(Bn,t),or(o).filter((function(t){return Ot(t)})).forEach((function(t){t.apply(void 0,T(e))})),this.emitOnRoot(tl,t),this.emitOnRoot("clicked::link",t)),i&&!n&&"#"===this.computedHref&&Bs(t,{propagation:!1})},focus:function(){ts(this.$el)},blur:function(){es(this.$el)}},render:function(t){var e=this.active,i=this.disabled;return t(this.computedTag,a({class:{active:e,disabled:i},attrs:this.computedAttrs,props:this.computedProps},this.isRouterLink?"nativeOn":"on",this.computedListeners),this.normalizeSlot())}}),rl=Qt(nl,["event","routerTag"]);delete rl.href.default,delete rl.to.default;var sl=vs(ee(c(c({},rl),{},{block:hs(ho,!1),disabled:hs(ho,!1),pill:hs(ho,!1),pressed:hs(ho,null),size:hs(go),squared:hs(ho,!1),tag:hs(go,"button"),type:hs(go,"button"),variant:hs(go,"secondary")})),De),al=function(t){"focusin"===t.type?Rr(t.target,"focus"):"focusout"===t.type&&Mr(t.target,"focus")},ll=function(t){return la(t)||Br(t.tag,"a")},cl=function(t){return Vt(t.pressed)},ul=function(t){return!(ll(t)||t.tag&&!Br(t.tag,"button"))},dl=function(t){return!ll(t)&&!ul(t)},hl=function(t){var e;return["btn-".concat(t.variant||"secondary"),(e={},a(e,"btn-".concat(t.size),t.size),a(e,"btn-block",t.block),a(e,"rounded-pill",t.pill),a(e,"rounded-0",t.squared&&!t.pill),a(e,"disabled",t.disabled),a(e,"active",t.pressed),e)]},fl=function(t){return ll(t)?ps(rl,t):{}},pl=function(t,e){var i=ul(t),n=ll(t),o=cl(t),r=dl(t),s=n&&"#"===t.href,a=e.attrs&&e.attrs.role?e.attrs.role:null,l=e.attrs?e.attrs.tabindex:null;return(r||s)&&(l="0"),{type:i&&!n?t.type:null,disabled:i?t.disabled:null,role:r||s?"button":a,"aria-disabled":r?String(t.disabled):null,"aria-pressed":o?String(t.pressed):null,autocomplete:o?"off":null,tabindex:t.disabled&&!i?"-1":l}},ml=i.default.extend({name:De,functional:!0,props:sl,render:function(t,e){var i=e.props,n=e.data,o=e.listeners,r=e.children,s=cl(i),a=ll(i),l=dl(i),c=a&&"#"===i.href,u={keydown:function(t){if(!i.disabled&&(l||c)){var e=t.keyCode;if(e===Ga||e===Ha&&l){var n=t.currentTarget||t.target;Bs(t,{propagation:!1}),n.click()}}},click:function(t){i.disabled&&Nt(t)?Bs(t):s&&o&&o["update:pressed"]&&or(o["update:pressed"]).forEach((function(t){Ot(t)&&t(!i.pressed)}))}};s&&(u.focusin=al,u.focusout=al);var d={staticClass:"btn",class:hl(i),props:fl(i),attrs:pl(i,n),on:u};return t(a?ol:i.tag,F(n,d),r)}}),vl="b-avatar",bl=["sm",null,"lg"],gl=function(t){return t=Et(t)&&At(t)?cr(t,0):t,Lt(t)?"".concat(t,"px"):t||null},yl=Qt(nl,["active","event","routerTag"]),wl=vs(ee(c(c({},yl),{},{alt:hs(go,"avatar"),ariaLabel:hs(go),badge:hs(ko,!1),badgeLeft:hs(ho,!1),badgeOffset:hs(go),badgeTop:hs(ho,!1),badgeVariant:hs(go,"primary"),button:hs(ho,!1),buttonType:hs(go,"button"),icon:hs(go),rounded:hs(ko,!1),size:hs(_o),square:hs(ho,!1),src:hs(go),text:hs(go),variant:hs(go,"secondary")})),xe),Tl=i.default.extend({name:xe,mixins:[Cs],inject:{bvAvatarGroup:{default:null}},props:wl,data:function(){return{localSrc:this.src||null}},computed:{computedSize:function(){var t=this.bvAvatarGroup;return gl(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,i=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===i||(i||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===bl.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,i=e?e.overlapScale:0,n=t&&i?"calc(".concat(t," * -").concat(i,")"):null;return n?{marginLeft:n,marginRight:n}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,i=this.badgeLeft,n=this.badgeOffset||"0px";return{fontSize:-1===bl.indexOf(t)?"calc(".concat(t," * ").concat(.27999999999999997," )"):null,top:e?n:null,bottom:e?null:n,left:i?n:null,right:i?null:n}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit("img-error",t)},onClick:function(t){this.$emit(Bn,t)}},render:function(t){var e,i=this.computedVariant,n=this.disabled,o=this.computedRounded,r=this.icon,s=this.localSrc,l=this.text,u=this.fontStyle,d=this.marginStyle,h=this.computedSize,f=this.button,p=this.buttonType,m=this.badge,v=this.badgeVariant,b=this.badgeStyle,g=!f&&la(this),y=f?ml:g?ol:"span",w=this.alt,T=this.ariaLabel||null,C=null;this.hasNormalizedSlot()?C=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):s?(C=t("img",{style:i?{}:{width:"100%",height:"100%"},attrs:{src:s,alt:w},on:{error:this.onImgError}}),C=t("span",{staticClass:"b-avatar-img"},[C])):C=r?t(Aa,{props:{icon:r},attrs:{"aria-hidden":"true",alt:w}}):l?t("span",{staticClass:"b-avatar-text",style:u},[t("span",l)]):t(_a,{attrs:{"aria-hidden":"true",alt:w}});var x=t(),S=this.hasNormalizedSlot(Oo);if(m||""===m||S){var k=!0===m?"":m;x=t("span",{staticClass:"b-avatar-badge",class:a({},"badge-".concat(v),v),style:b},[S?this.normalizeSlot(Oo):k])}return t(y,{staticClass:vl,class:(e={},a(e,"".concat(vl,"-").concat(h),h&&-1!==bl.indexOf(h)),a(e,"badge-".concat(i),!f&&i),a(e,"rounded",!0===o),a(e,"rounded-".concat(o),o&&!0!==o),a(e,"disabled",n),e),style:c(c({},d),{},{width:h,height:h}),attrs:{"aria-label":T||null},props:f?{variant:i,disabled:n,type:p}:g?ps(yl,this):{},on:f||g?{click:this.onClick}:{}},[C,x])}}),Cl=vs({overlap:hs(_o,.3),rounded:hs(ko,!1),size:hs(go),square:hs(ho,!1),tag:hs(go,"div"),variant:hs(go)},Se),xl=me({components:{BAvatar:Tl,BAvatarGroup:i.default.extend({name:Se,mixins:[Cs],provide:function(){return{bvAvatarGroup:this}},props:Cl,computed:{computedSize:function(){return gl(this.size)},overlapScale:function(){return Ys(Us(cr(this.overlap,0),0),1)/2},paddingStyle:function(){var t=this.computedSize;return(t=t?"calc(".concat(t," * ").concat(this.overlapScale,")"):null)?{paddingLeft:t,paddingRight:t}:{}}},render:function(t){var e=t("div",{staticClass:"b-avatar-group-inner",style:this.paddingStyle},this.normalizeSlot());return t(this.tag,{staticClass:"b-avatar-group",attrs:{role:"group"}},[e])}})}}),Sl=Qt(nl,["event","routerTag"]);delete Sl.href.default,delete Sl.to.default;var kl,$l=vs(ee(c(c({},Sl),{},{pill:hs(ho,!1),tag:hs(go,"span"),variant:hs(go,"secondary")})),ke),Bl=i.default.extend({name:ke,functional:!0,props:$l,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.active,s=i.disabled,a=la(i),l=a?ol:i.tag,c=i.variant||"secondary";return t(l,F(n,{staticClass:"badge",class:["badge-".concat(c),{"badge-pill":i.pill,active:r,disabled:s}],props:a?ps(Sl,i):{}}),o)}}),_l=me({components:{BBadge:Bl}}),Dl=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(nt,"")},Fl=function(t,e){return t?{innerHTML:t}:e?{textContent:e}:{}},Il=vs(ee(c(c({},Qt(nl,["event","routerTag"])),{},{ariaCurrent:hs(go,"location"),html:hs(go),text:hs(go)})),_e),Pl=i.default.extend({name:_e,functional:!0,props:Il,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.active,s=r?"span":ol,a={attrs:{"aria-current":r?i.ariaCurrent:null},props:ps(Il,i)};return o||(a.domProps=Fl(i.html,i.text)),t(s,F(n,a),o)}}),Ol=vs(Il,Be),Vl=i.default.extend({name:Be,functional:!0,props:Ol,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t("li",F(n,{staticClass:"breadcrumb-item",class:{active:i.active}}),[t(Pl,{props:i},o)])}}),El=vs({items:hs(uo)},$e),Ll=me({components:{BBreadcrumb:i.default.extend({name:$e,functional:!0,props:El,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.items,s=o;if(Rt(r)){var a=!1;s=r.map((function(e,i){Mt(e)||(e={text:vr(e)});var n=e.active;return n&&(a=!0),n||a||(n=i+1===r.length),t(Vl,{props:c(c({},e),{},{active:n})})}))}return t("ol",F(n,{staticClass:"breadcrumb"}),s)}}),BBreadcrumbItem:Vl,BBreadcrumbLink:Pl}}),Al=me({components:{BButton:ml,BBtn:ml,BButtonClose:Ps,BBtnClose:Ps}}),Rl=vs(ee(c(c({},Jt(sl,["size"])),{},{ariaRole:hs(go,"group"),size:hs(go),tag:hs(go,"div"),vertical:hs(ho,!1)})),Ie),Ml=i.default.extend({name:Ie,functional:!0,props:Rl,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.tag,F(n,{class:a({"btn-group":!i.vertical,"btn-group-vertical":i.vertical},"btn-group-".concat(i.size),i.size),attrs:{role:i.ariaRole}}),o)}}),Hl=me({components:{BButtonGroup:Ml,BBtnGroup:Ml}}),zl=[".btn:not(.disabled):not([disabled]):not(.dropdown-item)",".form-control:not(.disabled):not([disabled])","select:not(.disabled):not([disabled])",'input[type="checkbox"]:not(.disabled)','input[type="radio"]:not(.disabled)'].join(","),Nl=vs({justify:hs(ho,!1),keyNav:hs(ho,!1)},Pe),jl=i.default.extend({name:Pe,mixins:[Cs],props:Nl,mounted:function(){this.keyNav&&this.getItems()},methods:{getItems:function(){var t=Pr(zl,this.$el);return t.forEach((function(t){t.tabIndex=-1})),t.filter((function(t){return Dr(t)}))},focusFirst:function(){var t=this.getItems();ts(t[0])},focusPrev:function(t){var e=this.getItems(),i=e.indexOf(t.target);i>-1&&(e=e.slice(0,i).reverse(),ts(e[0]))},focusNext:function(t){var e=this.getItems(),i=e.indexOf(t.target);i>-1&&(e=e.slice(i+1),ts(e[0]))},focusLast:function(){var t=this.getItems().reverse();ts(t[0])},onFocusin:function(t){var e=this.$el;t.target!==e||Lr(e,t.relatedTarget)||(Bs(t),this.focusFirst(t))},onKeydown:function(t){var e=t.keyCode,i=t.shiftKey;e===Wa||e===Na?(Bs(t),i?this.focusFirst(t):this.focusPrev(t)):e!==Ra&&e!==ja||(Bs(t),i?this.focusLast(t):this.focusNext(t))}},render:function(t){var e=this.keyNav;return t("div",{staticClass:"btn-toolbar",class:{"justify-content-between":this.justify},attrs:{role:"toolbar",tabindex:e?"0":null},on:e?{focusin:this.onFocusin,keydown:this.onKeydown}:{}},[this.normalizeSlot()])}}),Gl=me({components:{BButtonToolbar:jl,BBtnToolbar:jl}}),Wl="gregory",Yl="long",Ul="short",ql="2-digit",Kl="numeric",Xl=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return p(Date,e)},Zl=function(t){if(Et(t)&&vt.test(t.trim())){var e=w(t.split(bt).map((function(t){return lr(t,1)})),3),i=e[0],n=e[1],o=e[2];return Xl(i,n-1,o)}return zt(t)?Xl(t.getFullYear(),t.getMonth(),t.getDate()):null},Jl=function(t){if(!(t=Zl(t)))return null;var e=t.getFullYear(),i="0".concat(t.getMonth()+1).slice(-2),n="0".concat(t.getDate()).slice(-2);return"".concat(e,"-").concat(i,"-").concat(n)},Ql=function(t,e){return new Intl.DateTimeFormat(t,e).format},tc=function(t,e){return Jl(t)===Jl(e)},ec=function(t){return(t=Xl(t)).setDate(1),t},ic=function(t){return(t=Xl(t)).setMonth(t.getMonth()+1),t.setDate(0),t},nc=function(t,e){var i=(t=Xl(t)).getMonth();return t.setFullYear(t.getFullYear()+e),t.getMonth()!==i&&t.setDate(0),t},oc=function(t){var e=(t=Xl(t)).getMonth();return t.setMonth(e-1),t.getMonth()===e&&t.setDate(0),t},rc=function(t){var e=(t=Xl(t)).getMonth();return t.setMonth(e+1),t.getMonth()===(e+2)%12&&t.setDate(0),t},sc=function(t){return nc(t,-1)},ac=function(t){return nc(t,1)},lc=function(t){return nc(t,-10)},cc=function(t){return nc(t,10)},uc=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return t=Zl(t),e=Zl(e)||t,i=Zl(i)||t,t?t<e?e:t>i?i:t:null},dc=["ar","az","ckb","fa","he","ks","lrc","mzn","ps","sd","te","ug","ur","yi"].map((function(t){return t.toLowerCase()})),hc=function(t){var e=vr(t).toLowerCase().replace(Bt,"").split("-"),i=e.slice(0,2).join("-"),n=e[0];return nr(dc,i)||nr(dc,n)},fc={id:hs(go)},pc=i.default.extend({props:fc,data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_;return function(e){return t?(e=String(e||"").replace(/\s+/g,"_"))?t+"_"+e:t:null}}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t._uid)}))}}),mc=ys("value",{type:$o}),vc=mc.mixin,bc=mc.props,gc=mc.prop,yc=mc.event,wc=vs(ee(c(c(c({},fc),bc),{},{ariaControls:hs(go),block:hs(ho,!1),dateDisabledFn:hs(po),dateFormatOptions:hs(vo,{year:Kl,month:Yl,day:Kl,weekday:Yl}),dateInfoFn:hs(po),direction:hs(go),disabled:hs(ho,!1),hidden:hs(ho,!1),hideHeader:hs(ho,!1),initialDate:hs($o),labelCalendar:hs(go,"Calendar"),labelCurrentMonth:hs(go,"Current month"),labelHelp:hs(go,"Use cursor keys to navigate calendar dates"),labelNav:hs(go,"Calendar navigation"),labelNextDecade:hs(go,"Next decade"),labelNextMonth:hs(go,"Next month"),labelNextYear:hs(go,"Next year"),labelNoDateSelected:hs(go,"No date selected"),labelPrevDecade:hs(go,"Previous decade"),labelPrevMonth:hs(go,"Previous month"),labelPrevYear:hs(go,"Previous year"),labelSelected:hs(go,"Selected date"),labelToday:hs(go,"Today"),locale:hs(Co),max:hs($o),min:hs($o),navButtonVariant:hs(go,"secondary"),noHighlightToday:hs(ho,!1),noKeyNav:hs(ho,!1),readonly:hs(ho,!1),roleDescription:hs(go),selectedVariant:hs(go,"primary"),showDecadeNav:hs(ho,!1),startWeekday:hs(_o,0),todayVariant:hs(go),valueAsDate:hs(ho,!1),weekdayHeaderFormat:hs(go,Ul,(function(t){return nr([Yl,Ul,"narrow"],t)})),width:hs(go,"270px")})),Oe),Tc=i.default.extend({name:Oe,mixins:[Za,pc,vc,Cs],props:wc,data:function(){var t=Jl(this[gc])||"";return{selectedYMD:t,activeYMD:t||Jl(uc(this.initialDate||this.getToday()),this.min,this.max),gridHasFocus:!1,isLive:!1}},computed:{valueId:function(){return this.safeId()},widgetId:function(){return this.safeId("_calendar-wrapper_")},navId:function(){return this.safeId("_calendar-nav_")},gridId:function(){return this.safeId("_calendar-grid_")},gridCaptionId:function(){return this.safeId("_calendar-grid-caption_")},gridHelpId:function(){return this.safeId("_calendar-grid-help_")},activeId:function(){return this.activeYMD?this.safeId("_cell-".concat(this.activeYMD,"_")):null},selectedDate:function(){return Zl(this.selectedYMD)},activeDate:function(){return Zl(this.activeYMD)},computedMin:function(){return Zl(this.min)},computedMax:function(){return Zl(this.max)},computedWeekStarts:function(){return Us(lr(this.startWeekday,0),0)%7},computedLocale:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Wl;return t=or(t).filter(ne),new Intl.DateTimeFormat(t,{calendar:e}).resolvedOptions().locale}(or(this.locale).filter(ne),Wl)},computedDateDisabledFn:function(){var t=this.dateDisabledFn;return gs(t)?t:function(){return!1}},computedDateInfoFn:function(){var t=this.dateInfoFn;return gs(t)?t:function(){return{}}},calendarLocale:function(){var t=new Intl.DateTimeFormat(this.computedLocale,{calendar:Wl}),e=t.resolvedOptions().calendar,i=t.resolvedOptions().locale;return e!==Wl&&(i=i.replace(/-u-.+$/i,"").concat("-u-ca-gregory")),i},calendarYear:function(){return this.activeDate.getFullYear()},calendarMonth:function(){return this.activeDate.getMonth()},calendarFirstDay:function(){return Xl(this.calendarYear,this.calendarMonth,1,12)},calendarDaysInMonth:function(){var t=Xl(this.calendarFirstDay);return t.setMonth(t.getMonth()+1,0),t.getDate()},computedVariant:function(){return"btn-".concat(this.selectedVariant||"primary")},computedTodayVariant:function(){return"btn-outline-".concat(this.todayVariant||this.selectedVariant||"primary")},computedNavButtonVariant:function(){return"btn-outline-".concat(this.navButtonVariant||"primary")},isRTL:function(){var t=vr(this.direction).toLowerCase();return"rtl"===t||"ltr"!==t&&hc(this.computedLocale)},context:function(){var t=this.selectedYMD,e=this.activeYMD,i=Zl(t),n=Zl(e);return{selectedYMD:t,selectedDate:i,selectedFormatted:i?this.formatDateString(i):this.labelNoDateSelected,activeYMD:e,activeDate:n,activeFormatted:n?this.formatDateString(n):"",disabled:this.dateDisabled(n),locale:this.computedLocale,calendarLocale:this.calendarLocale,rtl:this.isRTL}},dateOutOfRange:function(){var t=this.computedMin,e=this.computedMax;return function(i){return i=Zl(i),t&&i<t||e&&i>e}},dateDisabled:function(){var t=this,e=this.dateOutOfRange;return function(i){i=Zl(i);var n=Jl(i);return!(!e(i)&&!t.computedDateDisabledFn(n,i))}},formatDateString:function(){return Ql(this.calendarLocale,c(c({year:Kl,month:ql,day:ql},this.dateFormatOptions),{},{hour:void 0,minute:void 0,second:void 0,calendar:Wl}))},formatYearMonth:function(){return Ql(this.calendarLocale,{year:Kl,month:Yl,calendar:Wl})},formatWeekdayName:function(){return Ql(this.calendarLocale,{weekday:Yl,calendar:Wl})},formatWeekdayNameShort:function(){return Ql(this.calendarLocale,{weekday:this.weekdayHeaderFormat||Ul,calendar:Wl})},formatDay:function(){var t=new Intl.NumberFormat([this.computedLocale],{style:"decimal",minimumIntegerDigits:1,minimumFractionDigits:0,maximumFractionDigits:0,notation:"standard"});return function(e){return t.format(e.getDate())}},prevDecadeDisabled:function(){var t=this.computedMin;return this.disabled||t&&ic(lc(this.activeDate))<t},prevYearDisabled:function(){var t=this.computedMin;return this.disabled||t&&ic(sc(this.activeDate))<t},prevMonthDisabled:function(){var t=this.computedMin;return this.disabled||t&&ic(oc(this.activeDate))<t},thisMonthDisabled:function(){return this.disabled},nextMonthDisabled:function(){var t=this.computedMax;return this.disabled||t&&ec(rc(this.activeDate))>t},nextYearDisabled:function(){var t=this.computedMax;return this.disabled||t&&ec(ac(this.activeDate))>t},nextDecadeDisabled:function(){var t=this.computedMax;return this.disabled||t&&ec(cc(this.activeDate))>t},calendar:function(){for(var t=[],e=this.calendarFirstDay,i=e.getFullYear(),n=e.getMonth(),o=this.calendarDaysInMonth,r=e.getDay(),s=0-((this.computedWeekStarts>r?7:0)-this.computedWeekStarts)-r,a=0;a<6&&s<o;a++){t[a]=[];for(var l=0;l<7;l++){s++;var u=Xl(i,n,s),d=u.getMonth(),h=Jl(u),f=this.dateDisabled(u),p=this.computedDateInfoFn(h,Zl(h));p=Et(p)||Rt(p)?{class:p}:Ht(p)?c({class:""},p):{class:""},t[a].push({ymd:h,day:this.formatDay(u),label:this.formatDateString(u),isThisMonth:d===n,isDisabled:f,info:p})}}return t},calendarHeadings:function(){var t=this;return this.calendar[0].map((function(e){return{text:t.formatWeekdayNameShort(Zl(e.ymd)),label:t.formatWeekdayName(Zl(e.ymd))}}))}},watch:(kl={},a(kl,gc,(function(t,e){var i=Jl(t)||"",n=Jl(e)||"";tc(i,n)||(this.activeYMD=i||this.activeYMD,this.selectedYMD=i)})),a(kl,"selectedYMD",(function(t,e){t!==e&&this.$emit(yc,this.valueAsDate?Zl(t)||null:t||"")})),a(kl,"context",(function(t,e){Ua(t,e)||this.$emit(Dn,t)})),a(kl,"hidden",(function(t){this.activeYMD=this.selectedYMD||Jl(this[gc]||this.constrainDate(this.initialDate||this.getToday())),this.setLive(!t)})),kl),created:function(){var t=this;this.$nextTick((function(){t.$emit(Dn,t.context)}))},mounted:function(){this.setLive(!0)},activated:function(){this.setLive(!0)},deactivated:function(){this.setLive(!1)},beforeDestroy:function(){this.setLive(!1)},methods:{focus:function(){this.disabled||ts(this.$refs.grid)},blur:function(){this.disabled||es(this.$refs.grid)},setLive:function(t){var e=this;t?this.$nextTick((function(){xr((function(){e.isLive=!0}))})):this.isLive=!1},getToday:function(){return Zl(Xl())},constrainDate:function(t){return uc(t,this.computedMin,this.computedMax)},emitSelected:function(t){var e=this;this.$nextTick((function(){e.$emit(Qn,Jl(t)||"",Zl(t)||null)}))},setGridFocusFlag:function(t){this.gridHasFocus=!this.disabled&&"focus"===t.type},onKeydownWrapper:function(t){if(!this.noKeyNav){var e=t.altKey,i=t.ctrlKey,n=t.keyCode;if(nr([33,34,Ma,za,Na,Wa,ja,Ra],n)){Bs(t);var o=Xl(this.activeDate),r=Xl(this.activeDate),s=o.getDate(),a=this.constrainDate(this.getToday()),l=this.isRTL;33===n?(o=(e?i?lc:sc:oc)(o),(r=Xl(o)).setDate(1)):34===n?(o=(e?i?cc:ac:rc)(o),(r=Xl(o)).setMonth(r.getMonth()+1),r.setDate(0)):n===Na?(o.setDate(s+(l?1:-1)),r=o=this.constrainDate(o)):n===ja?(o.setDate(s+(l?-1:1)),r=o=this.constrainDate(o)):n===Wa?(o.setDate(s-7),r=o=this.constrainDate(o)):n===Ra?(o.setDate(s+7),r=o=this.constrainDate(o)):n===za?r=o=a:n===Ma&&(r=o=Zl(this.selectedDate)||a),this.dateOutOfRange(r)||tc(o,this.activeDate)||(this.activeYMD=Jl(o)),this.focus()}}},onKeydownGrid:function(t){var e=t.keyCode,i=this.activeDate;e!==Ha&&e!==Ga||(Bs(t),this.disabled||this.readonly||this.dateDisabled(i)||(this.selectedYMD=Jl(i),this.emitSelected(i)),this.focus())},onClickDay:function(t){var e=this.selectedDate,i=this.activeDate,n=Zl(t.ymd);this.disabled||t.isDisabled||this.dateDisabled(n)||(this.readonly||(this.selectedYMD=Jl(tc(n,e)?e:n),this.emitSelected(n)),this.activeYMD=Jl(tc(n,i)?i:Xl(n)),this.focus())},gotoPrevDecade:function(){this.activeYMD=Jl(this.constrainDate(lc(this.activeDate)))},gotoPrevYear:function(){this.activeYMD=Jl(this.constrainDate(sc(this.activeDate)))},gotoPrevMonth:function(){this.activeYMD=Jl(this.constrainDate(oc(this.activeDate)))},gotoCurrentMonth:function(){this.activeYMD=Jl(this.constrainDate(this.getToday()))},gotoNextMonth:function(){this.activeYMD=Jl(this.constrainDate(rc(this.activeDate)))},gotoNextYear:function(){this.activeYMD=Jl(this.constrainDate(ac(this.activeDate)))},gotoNextDecade:function(){this.activeYMD=Jl(this.constrainDate(cc(this.activeDate)))},onHeaderClick:function(){this.disabled||(this.activeYMD=this.selectedYMD||Jl(this.getToday()),this.focus())}},render:function(t){var e=this;if(this.hidden)return t();var i=this.valueId,n=this.widgetId,o=this.navId,r=this.gridId,s=this.gridCaptionId,l=this.gridHelpId,u=this.activeId,d=this.disabled,h=this.noKeyNav,f=this.isLive,p=this.isRTL,m=this.activeYMD,v=this.selectedYMD,b=this.safeId,g=!this.showDecadeNav,y=Jl(this.getToday()),w=!this.noHighlightToday,T=t("output",{staticClass:"form-control form-control-sm text-center",class:{"text-muted":d,readonly:this.readonly||d},attrs:{id:i,for:r,role:"status",tabindex:d?null:"-1","data-selected":vr(v),"aria-live":f?"polite":"off","aria-atomic":f?"true":null},on:{click:this.onHeaderClick,focus:this.onHeaderClick}},this.selectedDate?[t("bdi",{staticClass:"sr-only"}," (".concat(vr(this.labelSelected),") ")),t("bdi",this.formatDateString(this.selectedDate))]:this.labelNoDateSelected||" ");T=t("header",{staticClass:"b-calendar-header",class:{"sr-only":this.hideHeader},attrs:{title:this.selectedDate&&this.labelSelectedDate||null}},[T]);var C={isRTL:p},x={shiftV:.5},S=c(c({},x),{},{flipH:p}),k=c(c({},x),{},{flipH:!p}),$=this.normalizeSlot("nav-prev-decade",C)||t(ya,{props:S}),B=this.normalizeSlot("nav-prev-year",C)||t(wa,{props:S}),_=this.normalizeSlot("nav-prev-month",C)||t(Ca,{props:S}),D=this.normalizeSlot("nav-this-month",C)||t(Sa,{props:x}),F=this.normalizeSlot("nav-next-month",C)||t(Ca,{props:k}),I=this.normalizeSlot("nav-next-year",C)||t(wa,{props:k}),P=this.normalizeSlot("nav-next-decade",C)||t(ya,{props:k}),O=function(i,n,o,r,s){return t("button",{staticClass:"btn btn-sm border-0 flex-fill",class:[e.computedNavButtonVariant,{disabled:r}],attrs:{title:n||null,type:"button",tabindex:h?"-1":null,"aria-label":n||null,"aria-disabled":r?"true":null,"aria-keyshortcuts":s||null},on:r?{}:{click:o}},[t("div",{attrs:{"aria-hidden":"true"}},[i])])},V=t("div",{staticClass:"b-calendar-nav d-flex",attrs:{id:o,role:"group",tabindex:h?"-1":null,"aria-hidden":d?"true":null,"aria-label":this.labelNav||null,"aria-controls":r}},[g?t():O($,this.labelPrevDecade,this.gotoPrevDecade,this.prevDecadeDisabled,"Ctrl+Alt+PageDown"),O(B,this.labelPrevYear,this.gotoPrevYear,this.prevYearDisabled,"Alt+PageDown"),O(_,this.labelPrevMonth,this.gotoPrevMonth,this.prevMonthDisabled,"PageDown"),O(D,this.labelCurrentMonth,this.gotoCurrentMonth,this.thisMonthDisabled,"Home"),O(F,this.labelNextMonth,this.gotoNextMonth,this.nextMonthDisabled,"PageUp"),O(I,this.labelNextYear,this.gotoNextYear,this.nextYearDisabled,"Alt+PageUp"),g?t():O(P,this.labelNextDecade,this.gotoNextDecade,this.nextDecadeDisabled,"Ctrl+Alt+PageUp")]),E=t("header",{staticClass:"b-calendar-grid-caption text-center font-weight-bold",class:{"text-muted":d},attrs:{id:s,"aria-live":f?"polite":null,"aria-atomic":f?"true":null},key:"grid-caption"},this.formatYearMonth(this.calendarFirstDay)),L=t("div",{staticClass:"b-calendar-grid-weekdays row no-gutters border-bottom",attrs:{"aria-hidden":"true"}},this.calendarHeadings.map((function(e,i){return t("small",{staticClass:"col text-truncate",class:{"text-muted":d},attrs:{title:e.label===e.text?null:e.label,"aria-label":e.label},key:i},e.text)}))),A=this.calendar.map((function(i){var n=i.map((function(i,n){var o,r=i.ymd===v,s=i.ymd===m,l=i.ymd===y,c=b("_cell-".concat(i.ymd,"_")),u=t("span",{staticClass:"btn border-0 rounded-circle text-nowrap",class:(o={focus:s&&e.gridHasFocus,disabled:i.isDisabled||d,active:r},a(o,e.computedVariant,r),a(o,e.computedTodayVariant,l&&w&&!r&&i.isThisMonth),a(o,"btn-outline-light",!(l&&w||r||s)),a(o,"btn-light",!(l&&w)&&!r&&s),a(o,"text-muted",!i.isThisMonth&&!r),a(o,"text-dark",!(l&&w)&&!r&&!s&&i.isThisMonth),a(o,"font-weight-bold",(r||i.isThisMonth)&&!i.isDisabled),o),on:{click:function(){return e.onClickDay(i)}}},i.day);return t("div",{staticClass:"col p-0",class:i.isDisabled?"bg-light":i.info.class||"",attrs:{id:c,role:"button","data-date":i.ymd,"aria-hidden":i.isThisMonth?null:"true","aria-disabled":i.isDisabled||d?"true":null,"aria-label":[i.label,r?"(".concat(e.labelSelected,")"):null,l?"(".concat(e.labelToday,")"):null].filter(ne).join(" "),"aria-selected":r?"true":null,"aria-current":r?"date":null},key:n},[u])}));return t("div",{staticClass:"row no-gutters",key:i[0].ymd},n)}));A=t("div",{staticClass:"b-calendar-grid-body",style:d?{pointerEvents:"none"}:{}},A);var R=t("footer",{staticClass:"b-calendar-grid-help border-top small text-muted text-center bg-light",attrs:{id:l}},[t("div",{staticClass:"small"},this.labelHelp)]),M=t("div",{staticClass:"b-calendar-grid form-control h-auto text-center",attrs:{id:r,role:"application",tabindex:h?"-1":d?null:"0","data-month":m.slice(0,-3),"aria-roledescription":this.labelCalendar||null,"aria-labelledby":s,"aria-describedby":l,"aria-disabled":d?"true":null,"aria-activedescendant":u},on:{keydown:this.onKeydownGrid,focus:this.setGridFocusFlag,blur:this.setGridFocusFlag},ref:"grid"},[E,L,A,R]),H=this.normalizeSlot();H=H?t("footer",{staticClass:"b-calendar-footer"},H):t();var z=t("div",{staticClass:"b-calendar-inner",style:this.block?{}:{width:this.width},attrs:{id:n,dir:p?"rtl":"ltr",lang:this.computedLocale||null,role:"group","aria-disabled":d?"true":null,"aria-controls":this.ariaControls||null,"aria-roledescription":this.roleDescription||null,"aria-describedby":[this.bvAttrs["aria-describedby"],i,l].filter(ne).join(" ")},on:{keydown:this.onKeydownWrapper}},[T,V,M,H]);return t("div",{staticClass:"b-calendar",class:{"d-block":this.block}},[z])}}),Cc=me({components:{BCalendar:Tc}}),xc=vs({bgVariant:hs(go),borderVariant:hs(go),tag:hs(go,"div"),textVariant:hs(go)},Ve),Sc=(i.default.extend({props:xc}),vs({title:hs(go),titleTag:hs(go,"h4")},je)),kc=i.default.extend({name:je,functional:!0,props:Sc,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.titleTag,F(n,{staticClass:"card-title"}),o||vr(i.title))}}),$c=vs({subTitle:hs(go),subTitleTag:hs(go,"h6"),subTitleTextVariant:hs(go,"muted")},ze),Bc=i.default.extend({name:ze,functional:!0,props:$c,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.subTitleTag,F(n,{staticClass:"card-subtitle",class:[i.subTitleTextVariant?"text-".concat(i.subTitleTextVariant):null]}),o||vr(i.subTitle))}}),_c=vs(ee(c(c(c(c({},Sc),$c),fs(xc,cs.bind(null,"body"))),{},{bodyClass:hs(To),overlay:hs(ho,!1)})),Ee),Dc=i.default.extend({name:Ee,functional:!0,props:_c,render:function(t,e){var i,n=e.props,o=e.data,r=e.children,s=n.bodyBgVariant,l=n.bodyBorderVariant,c=n.bodyTextVariant,u=t();n.title&&(u=t(kc,{props:ps(Sc,n)}));var d=t();return n.subTitle&&(d=t(Bc,{props:ps($c,n),class:["mb-2"]})),t(n.bodyTag,F(o,{staticClass:"card-body",class:[(i={"card-img-overlay":n.overlay},a(i,"bg-".concat(s),s),a(i,"border-".concat(l),l),a(i,"text-".concat(c),c),i),n.bodyClass]}),[u,d,r])}}),Fc=vs(ee(c(c({},fs(xc,cs.bind(null,"header"))),{},{header:hs(go),headerClass:hs(To),headerHtml:hs(go)})),Re),Ic=i.default.extend({name:Re,functional:!0,props:Fc,render:function(t,e){var i,n=e.props,o=e.data,r=e.children,s=n.headerBgVariant,l=n.headerBorderVariant,c=n.headerTextVariant;return t(n.headerTag,F(o,{staticClass:"card-header",class:[n.headerClass,(i={},a(i,"bg-".concat(s),s),a(i,"border-".concat(l),l),a(i,"text-".concat(c),c),i)],domProps:r?{}:Fl(n.headerHtml,n.header)}),r)}}),Pc=vs(ee(c(c({},fs(xc,cs.bind(null,"footer"))),{},{footer:hs(go),footerClass:hs(To),footerHtml:hs(go)})),Le),Oc=i.default.extend({name:Le,functional:!0,props:Pc,render:function(t,e){var i,n=e.props,o=e.data,r=e.children,s=n.footerBgVariant,l=n.footerBorderVariant,c=n.footerTextVariant;return t(n.footerTag,F(o,{staticClass:"card-footer",class:[n.footerClass,(i={},a(i,"bg-".concat(s),s),a(i,"border-".concat(l),l),a(i,"text-".concat(c),c),i)],domProps:r?{}:Fl(n.footerHtml,n.footer)}),r)}}),Vc='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',Ec=vs({alt:hs(go),blank:hs(ho,!1),blankColor:hs(go,"transparent"),block:hs(ho,!1),center:hs(ho,!1),fluid:hs(ho,!1),fluidGrow:hs(ho,!1),height:hs(_o),left:hs(ho,!1),right:hs(ho,!1),rounded:hs(ko,!1),sizes:hs(Co),src:hs(go),srcset:hs(Co),thumbnail:hs(ho,!1),width:hs(_o)},_i),Lc=i.default.extend({name:_i,functional:!0,props:Ec,render:function(t,e){var i,n=e.props,o=e.data,r=n.alt,s=n.src,l=n.block,c=n.fluidGrow,u=n.rounded,d=lr(n.width)||null,h=lr(n.height)||null,f=null,p=or(n.srcset).filter(ne).join(","),m=or(n.sizes).filter(ne).join(",");return n.blank&&(!h&&d?h=d:!d&&h&&(d=h),d||h||(d=1,h=1),s=function(t,e,i){var n=encodeURIComponent(Vc.replace("%{w}",vr(t)).replace("%{h}",vr(e)).replace("%{f}",i));return"data:image/svg+xml;charset=UTF-8,".concat(n)}(d,h,n.blankColor||"transparent"),p=null,m=null),n.left?f="float-left":n.right?f="float-right":n.center&&(f="mx-auto",l=!0),t("img",F(o,{attrs:{src:s,alt:r,width:d?vr(d):null,height:h?vr(h):null,srcset:p||null,sizes:m||null},class:(i={"img-thumbnail":n.thumbnail,"img-fluid":n.fluid||c,"w-100":c,rounded:""===u||!0===u},a(i,"rounded-".concat(u),Et(u)&&""!==u),a(i,f,f),a(i,"d-block",l),i)}))}}),Ac=vs(ee(c(c({},Jt(Ec,["src","alt","width","height","left","right"])),{},{bottom:hs(ho,!1),end:hs(ho,!1),start:hs(ho,!1),top:hs(ho,!1)})),Me),Rc=i.default.extend({name:Me,functional:!0,props:Ac,render:function(t,e){var i=e.props,n=e.data,o=i.src,r=i.alt,s=i.width,a=i.height,l="card-img";return i.top?l+="-top":i.right||i.end?l+="-right":i.bottom?l+="-bottom":(i.left||i.start)&&(l+="-left"),t("img",F(n,{class:l,attrs:{src:o,alt:r,width:s,height:a}}))}}),Mc=fs(Ac,cs.bind(null,"img"));Mc.imgSrc.required=!1;var Hc,zc,Nc,jc=vs(ee(c(c(c(c(c(c({},_c),Fc),Pc),Mc),xc),{},{align:hs(go),noBody:hs(ho,!1)})),Ve),Gc=i.default.extend({name:Ve,functional:!0,props:jc,render:function(t,e){var i,n=e.props,o=e.data,r=e.slots,s=e.scopedSlots,l=n.imgSrc,c=n.imgLeft,u=n.imgRight,d=n.imgStart,h=n.imgEnd,f=n.imgBottom,p=n.header,m=n.headerHtml,v=n.footer,b=n.footerHtml,g=n.align,y=n.textVariant,w=n.bgVariant,T=n.borderVariant,C=s||{},x=r(),S={},k=t(),$=t();if(l){var B=t(Rc,{props:ps(Mc,n,us.bind(null,"img"))});f?$=B:k=B}var _=t(),D=ws(No,C,x);(D||p||m)&&(_=t(Ic,{props:ps(Fc,n),domProps:D?{}:Fl(m,p)},Ts(No,S,C,x)));var I=Ts(Ao,S,C,x);n.noBody||(I=t(Dc,{props:ps(_c,n)},I),n.overlay&&l&&(I=t("div",{staticClass:"position-relative"},[k,I,$]),k=t(),$=t()));var P=t();return(ws(zo,C,x)||v||b)&&(P=t(Oc,{props:ps(Pc,n),domProps:D?{}:Fl(b,v)},Ts(zo,S,C,x))),t(n.tag,F(o,{staticClass:"card",class:(i={"flex-row":c||d,"flex-row-reverse":(u||h)&&!(c||d)},a(i,"text-".concat(g),g),a(i,"bg-".concat(w),w),a(i,"border-".concat(T),T),a(i,"text-".concat(y),y),i)}),[k,_,I,P,$])}}),Wc="__bv__visibility_observer",Yc=function(){function t(e,i,n){o(this,t),this.el=e,this.callback=i.callback,this.margin=i.margin||0,this.once=i.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver(n)}return s(t,[{key:"createObserver",value:function(t){var e=this;if(this.observer&&this.stop(),!this.doneOnce&&Ot(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(t){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}t.context.$nextTick((function(){xr((function(){e.observer&&e.observer.observe(e.el)}))}))}}},{key:"handler",value:function(t){var e=t?t[0]:{},i=Boolean(e.isIntersecting||e.intersectionRatio>0);i!==this.visible&&(this.visible=i,this.callback(i),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}]),t}(),Uc=function(t){var e=t[Wc];e&&e.stop&&e.stop(),delete t[Wc]},qc=function(t,e,i){var n=e.value,o=e.modifiers,r={margin:"0px",once:!1,callback:n};Kt(o).forEach((function(t){Q.test(t)?r.margin="".concat(t,"px"):"once"===t.toLowerCase()&&(r.once=!0)})),Uc(t),t[Wc]=new Yc(t,r,i),t[Wc]._prevModifiers=Zt(o)},Kc={bind:qc,componentUpdated:function(t,e,i){var n=e.value,o=e.oldValue,r=e.modifiers;r=Zt(r),!t||n===o&&t[Wc]&&Ua(r,t[Wc]._prevModifiers)||qc(t,{value:n,modifiers:r},i)},unbind:function(t){Uc(t)}},Xc="show",Zc=Qt(Ec,["blank"]),Jc=vs(c(c({},Zc),{},a({blankColor:hs(go,"transparent"),blankHeight:hs(_o),blankSrc:hs(go,null),blankWidth:hs(_o),offset:hs(_o,360)},Xc,hs(ho,!1))),Di),Qc=i.default.extend({name:Di,directives:{"b-visible":Kc},props:Jc,data:function(){return{isShown:this.show}},computed:{computedSrc:function(){var t=this.blankSrc;return!t||this.isShown?this.src:t},computedBlank:function(){return!(this.isShown||this.blankSrc)},computedWidth:function(){var t=this.width;return this.isShown?t:this.blankWidth||t},computedHeight:function(){var t=this.height;return this.isShown?t:this.blankHeight||t},computedSrcset:function(){var t=or(this.srcset).filter(ne).join(",");return!this.blankSrc||this.isShown?t:null},computedSizes:function(){var t=or(this.sizes).filter(ne).join(",");return!this.blankSrc||this.isShown?t:null}},watch:(Hc={},a(Hc,Xc,(function(t,e){if(t!==e){var i=!q||t;this.isShown=i,i!==t&&this.$nextTick(this.updateShowProp)}})),a(Hc,"isShown",(function(t,e){t!==e&&this.updateShowProp()})),Hc),mounted:function(){this.isShown=!q||this.show},methods:{updateShowProp:function(){this.$emit("update:show",this.isShown)},doShow:function(t){!t&&null!==t||this.isShown||(this.isShown=!0)}},render:function(t){var e,i=[];this.isShown||i.push({name:"b-visible",value:this.doShow,modifiers:(e={},a(e,"".concat(lr(this.offset,0)),!0),a(e,"once",!0),e)});return t(Lc,{directives:i,props:c({src:this.computedSrc,blank:this.computedBlank,width:this.computedWidth,height:this.computedHeight,srcset:this.computedSrcset||null,sizes:this.computedSizes||null},ps(Zc,this.$props))})}}),tu=vs(ee(c(c({},Qt(Jc,Kt(Ec))),Qt(Ac,["src","alt","width","height"]))),He),eu=i.default.extend({name:He,functional:!0,props:tu,render:function(t,e){var i=e.props,n=e.data,o="card-img";return i.top?o+="-top":i.right||i.end?o+="-right":i.bottom?o+="-bottom":(i.left||i.start)&&(o+="-left"),t(Qc,F(n,{class:[o],props:Qt(i,["left","right"])}))}}),iu=vs({textTag:hs(go,"p")},Ne),nu=i.default.extend({name:Ne,functional:!0,props:iu,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.textTag,F(n,{staticClass:"card-text"}),o)}}),ou=vs({columns:hs(ho,!1),deck:hs(ho,!1),tag:hs(go,"div")},Ae),ru=me({components:{BCard:Gc,BCardHeader:Ic,BCardBody:Dc,BCardTitle:kc,BCardSubTitle:Bc,BCardFooter:Oc,BCardImg:Rc,BCardImgLazy:eu,BCardText:nu,BCardGroup:i.default.extend({name:Ae,functional:!0,props:ou,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.tag,F(n,{class:i.deck?"card-deck":i.columns?"card-columns":"card-group"}),o)}})}}),su=function(){},au=function(t,e,i){if(t=t?t.$el||t:null,!kr(t))return null;if(n="observeDom",!R&&(le("".concat(n,": Requires MutationObserver support.")),1))return null;var n,o=new Sr((function(t){for(var i=!1,n=0;n<t.length&&!i;n++){var o=t[n],r=o.type,s=o.target;("characterData"===r&&s.nodeType===Node.TEXT_NODE||"attributes"===r||"childList"===r&&(o.addedNodes.length>0||o.removedNodes.length>0))&&(i=!0)}i&&e()}));return o.observe(t,c({childList:!0,subtree:!0},i)),o},lu=ys("value",{type:mo,defaultValue:0}),cu=lu.mixin,uu=lu.props,du=lu.prop,hu=lu.event,fu={next:{dirClass:"carousel-item-left",overlayClass:"carousel-item-next"},prev:{dirClass:"carousel-item-right",overlayClass:"carousel-item-prev"}},pu={TOUCH:"touch",PEN:"pen"},mu={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend oTransitionEnd",transition:"transitionend"},vu=vs(ee(c(c(c({},fc),uu),{},{background:hs(go),controls:hs(ho,!1),fade:hs(ho,!1),imgHeight:hs(_o),imgWidth:hs(_o),indicators:hs(ho,!1),interval:hs(mo,5e3),labelGotoSlide:hs(go,"Goto slide"),labelIndicators:hs(go,"Select a slide to display"),labelNext:hs(go,"Next slide"),labelPrev:hs(go,"Previous slide"),noAnimation:hs(ho,!1),noHoverPause:hs(ho,!1),noTouch:hs(ho,!1),noWrap:hs(ho,!1)})),Ge),bu=i.default.extend({name:Ge,mixins:[pc,cu,Cs],provide:function(){return{bvCarousel:this}},props:vu,data:function(){return{index:this[du]||0,isSliding:!1,transitionEndEvent:null,slides:[],direction:null,isPaused:!(lr(this.interval,0)>0),touchStartX:0,touchDeltaX:0}},computed:{numSlides:function(){return this.slides.length}},watch:(zc={},a(zc,du,(function(t,e){t!==e&&this.setSlide(lr(t,0))})),a(zc,"interval",(function(t,e){t!==e&&(t?(this.pause(!0),this.start(!1)):this.pause(!1))})),a(zc,"isPaused",(function(t,e){t!==e&&this.$emit(t?"paused":"unpaused")})),a(zc,"index",(function(t,e){t===e||this.isSliding||this.doSlide(t,e)})),zc),created:function(){this.$_interval=null,this.$_animationTimeout=null,this.$_touchTimeout=null,this.$_observer=null,this.isPaused=!(lr(this.interval,0)>0)},mounted:function(){this.transitionEndEvent=function(t){for(var e in mu)if(!Ft(t.style[e]))return mu[e];return null}(this.$el)||null,this.updateSlides(),this.setObserver(!0)},beforeDestroy:function(){this.clearInterval(),this.clearAnimationTimeout(),this.clearTouchTimeout(),this.setObserver(!1)},methods:{clearInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearInterval(this.$_interval),this.$_interval=null})),clearAnimationTimeout:function(){clearTimeout(this.$_animationTimeout),this.$_animationTimeout=null},clearTouchTimeout:function(){clearTimeout(this.$_touchTimeout),this.$_touchTimeout=null},setObserver:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,t&&(this.$_observer=au(this.$refs.inner,this.updateSlides.bind(this),{subtree:!1,childList:!0,attributes:!0,attributeFilter:["id"]}))},setSlide:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(M&&document.visibilityState&&document.hidden)){var n=this.noWrap,o=this.numSlides;t=Xs(t),0!==o&&(this.isSliding?this.$once(io,(function(){xr((function(){return e.setSlide(t,i)}))})):(this.direction=i,this.index=t>=o?n?o-1:0:t<0?n?0:o-1:t,n&&this.index!==t&&this.index!==this[du]&&this.$emit(hu,this.index)))}},prev:function(){this.setSlide(this.index-1,"prev")},next:function(){this.setSlide(this.index+1,"next")},pause:function(t){t||(this.isPaused=!0),this.clearInterval()},start:function(t){t||(this.isPaused=!1),this.clearInterval(),this.interval&&this.numSlides>1&&(this.$_interval=setInterval(this.next,Us(1e3,this.interval)))},restart:function(){this.$el.contains($r())||this.start()},doSlide:function(t,e){var i=this,n=Boolean(this.interval),o=this.calcDirection(this.direction,e,t),r=o.overlayClass,s=o.dirClass,a=this.slides[e],l=this.slides[t];if(a&&l){if(this.isSliding=!0,n&&this.pause(!1),this.$emit("sliding-start",t),this.$emit(hu,this.index),this.noAnimation)Rr(l,"active"),Mr(a,"active"),this.isSliding=!1,this.$nextTick((function(){return i.$emit(io,t)}));else{Rr(l,r),Ir(l),Rr(a,s),Rr(l,s);var c=!1,u=function e(){if(!c){if(c=!0,i.transitionEndEvent)i.transitionEndEvent.split(/\s+/).forEach((function(t){return ks(l,t,e,lo)}));i.clearAnimationTimeout(),Mr(l,s),Mr(l,r),Rr(l,"active"),Mr(a,"active"),Mr(a,s),Mr(a,r),zr(a,"aria-current","false"),zr(l,"aria-current","true"),zr(a,"aria-hidden","true"),zr(l,"aria-hidden","false"),i.isSliding=!1,i.direction=null,i.$nextTick((function(){return i.$emit(io,t)}))}};if(this.transitionEndEvent)this.transitionEndEvent.split(/\s+/).forEach((function(t){return Ss(l,t,u,lo)}));this.$_animationTimeout=setTimeout(u,650)}n&&this.start(!1)}},updateSlides:function(){this.pause(!0),this.slides=Pr(".carousel-item",this.$refs.inner);var t=this.slides.length,e=Us(0,Ys(Xs(this.index),t-1));this.slides.forEach((function(i,n){var o=n+1;n===e?(Rr(i,"active"),zr(i,"aria-current","true")):(Mr(i,"active"),zr(i,"aria-current","false")),zr(i,"aria-posinset",String(o)),zr(i,"aria-setsize",String(t))})),this.setSlide(e),this.start(this.isPaused)},calcDirection:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t?fu[t]:i>e?fu.next:fu.prev},handleClick:function(t,e){var i=t.keyCode;"click"!==t.type&&i!==Ga&&i!==Ha||(Bs(t),e())},handleSwipe:function(){var t=qs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0?this.prev():e<0&&this.next()}},touchStart:function(t){U&&pu[t.pointerType.toUpperCase()]?this.touchStartX=t.clientX:U||(this.touchStartX=t.touches[0].clientX)},touchMove:function(t){t.touches&&t.touches.length>1?this.touchDeltaX=0:this.touchDeltaX=t.touches[0].clientX-this.touchStartX},touchEnd:function(t){U&&pu[t.pointerType.toUpperCase()]&&(this.touchDeltaX=t.clientX-this.touchStartX),this.handleSwipe(),this.pause(!1),this.clearTouchTimeout(),this.$_touchTimeout=setTimeout(this.start,500+Us(1e3,this.interval))}},render:function(t){var e=this,i=this.indicators,n=this.background,o=this.noAnimation,r=this.noHoverPause,s=this.noTouch,a=this.index,l=this.isSliding,c=this.pause,u=this.restart,d=this.touchStart,h=this.touchEnd,f=this.safeId("__BV_inner_"),p=t("div",{staticClass:"carousel-inner",attrs:{id:f,role:"list"},ref:"inner"},[this.normalizeSlot()]),m=t();if(this.controls){var v=function(i,n,o){var r=function(t){l?Bs(t,{propagation:!1}):e.handleClick(t,o)};return t("a",{staticClass:"carousel-control-".concat(i),attrs:{href:"#",role:"button","aria-controls":f,"aria-disabled":l?"true":null},on:{click:r,keydown:r}},[t("span",{staticClass:"carousel-control-".concat(i,"-icon"),attrs:{"aria-hidden":"true"}}),t("span",{class:"sr-only"},[n])])};m=[v("prev",this.labelPrev,this.prev),v("next",this.labelNext,this.next)]}var b=t("ol",{staticClass:"carousel-indicators",directives:[{name:"show",value:i}],attrs:{id:this.safeId("__BV_indicators_"),"aria-hidden":i?"false":"true","aria-label":this.labelIndicators,"aria-owns":f}},this.slides.map((function(n,o){var r=function(t){e.handleClick(t,(function(){e.setSlide(o)}))};return t("li",{class:{active:o===a},attrs:{role:"button",id:e.safeId("__BV_indicator_".concat(o+1,"_")),tabindex:i?"0":"-1","aria-current":o===a?"true":"false","aria-label":"".concat(e.labelGotoSlide," ").concat(o+1),"aria-describedby":n.id||null,"aria-controls":f},on:{click:r,keydown:r},key:"slide_".concat(o)})}))),g={mouseenter:r?su:c,mouseleave:r?su:u,focusin:c,focusout:u,keydown:function(t){if(!/input|textarea/i.test(t.target.tagName)){var i=t.keyCode;i!==Na&&i!==ja||(Bs(t),e[i===Na?"prev":"next"]())}}};return Y&&!s&&(U?(g["&pointerdown"]=d,g["&pointerup"]=h):(g["&touchstart"]=d,g["&touchmove"]=this.touchMove,g["&touchend"]=h)),t("div",{staticClass:"carousel",class:{slide:!o,"carousel-fade":!o&&this.fade,"pointer-event":Y&&U&&!s},style:{background:n},attrs:{role:"region",id:this.safeId(),"aria-busy":l?"true":"false"},on:g},[p,m,b])}}),gu={imgAlt:hs(go),imgBlank:hs(ho,!1),imgBlankColor:hs(go,"transparent"),imgHeight:hs(_o),imgSrc:hs(go),imgWidth:hs(_o)},yu=vs(ee(c(c(c({},fc),gu),{},{background:hs(go),caption:hs(go),captionHtml:hs(go),captionTag:hs(go,"h3"),contentTag:hs(go,"div"),contentVisibleUp:hs(go),text:hs(go),textHtml:hs(go),textTag:hs(go,"p")})),We),wu=me({components:{BCarousel:bu,BCarouselSlide:i.default.extend({name:We,mixins:[pc,Cs],inject:{bvCarousel:{default:function(){return{noTouch:!0}}}},props:yu,computed:{contentClasses:function(){return[this.contentVisibleUp?"d-none":"",this.contentVisibleUp?"d-".concat(this.contentVisibleUp,"-block"):""]},computedWidth:function(){return this.imgWidth||this.bvCarousel.imgWidth||null},computedHeight:function(){return this.imgHeight||this.bvCarousel.imgHeight||null}},render:function(t){var e=this.normalizeSlot("img");if(!e&&(this.imgSrc||this.imgBlank)){var i={};!this.bvCarousel.noTouch&&Y&&(i.dragstart=function(t){return Bs(t,{propagation:!1})}),e=t(Lc,{props:c(c({},ps(gu,this.$props,us.bind(null,"img"))),{},{width:this.computedWidth,height:this.computedHeight,fluidGrow:!0,block:!0}),on:i})}var n=[!(!this.caption&&!this.captionHtml)&&t(this.captionTag,{domProps:Fl(this.captionHtml,this.caption)}),!(!this.text&&!this.textHtml)&&t(this.textTag,{domProps:Fl(this.textHtml,this.text)}),this.normalizeSlot()||!1],o=t();return n.some(ne)&&(o=t(this.contentTag,{staticClass:"carousel-caption",class:this.contentClasses},n.map((function(e){return e||t()})))),t("div",{staticClass:"carousel-item",style:{background:this.background||this.bvCarousel.background||null},attrs:{id:this.safeId(),role:"listitem"}},[e,o])}})}}),Tu="show",Cu={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},xu={enter:function(t){Wr(t,"height",0),xr((function(){Ir(t),Wr(t,"height","".concat(t.scrollHeight,"px"))}))},afterEnter:function(t){Yr(t,"height")},leave:function(t){Wr(t,"height","auto"),Wr(t,"display","block"),Wr(t,"height","".concat(qr(t).height,"px")),Ir(t),Wr(t,"height",0)},afterLeave:function(t){Yr(t,"height")}},Su={appear:hs(ho,!1)},ku=i.default.extend({name:"BVCollapse",functional:!0,props:Su,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t("transition",F(n,{props:Cu,on:xu},{props:i}),o)}}),$u=Fs(Ue,"toggle"),Bu=Fs(Ue,"request-state"),_u=Ds(Ue,"accordion"),Du=Ds(Ue,"state"),Fu=Ds(Ue,"sync-state"),Iu=ys("visible",{type:ho,defaultValue:!1}),Pu=Iu.mixin,Ou=Iu.props,Vu=Iu.prop,Eu=Iu.event,Lu=vs(ee(c(c(c({},fc),Ou),{},{accordion:hs(go),appear:hs(ho,!1),isNav:hs(ho,!1),tag:hs(go,"div")})),Ue),Au=i.default.extend({name:Ue,mixins:[pc,Pu,Cs,Ja],props:Lu,data:function(){return{show:this[Vu],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(Nc={},a(Nc,Vu,(function(t){t!==this.show&&(this.show=t)})),a(Nc,"show",(function(t,e){t!==e&&this.emitState()})),Nc),created:function(){this.show=this[Vu]},mounted:function(){var t=this;this.show=this[Vu],this.listenOnRoot($u,this.handleToggleEvt),this.listenOnRoot(_u,this.handleAccordionEvt),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(Bu,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&M&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){$s(t,window,"resize",this.handleResize,lo),$s(t,window,"orientationchange",this.handleResize,lo)},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(to)},onAfterEnter:function(){this.transitioning=!1,this.$emit(eo)},onLeave:function(){this.transitioning=!0,this.$emit(Nn)},onAfterLeave:function(){this.transitioning=!1,this.$emit(zn)},emitState:function(){var t=this.show,e=this.accordion,i=this.safeId();this.$emit(Eu,t),this.emitOnRoot(Du,i,t),e&&t&&this.emitOnRoot(_u,i,e)},emitSync:function(){this.emitOnRoot(Fu,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Hr(t,Tu);Mr(t,Tu);var i="block"===Kr(t).display;return e&&Rr(t,Tu),i},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Kr(this.$el).display&&(!Vr(e,".nav-link,.dropdown-item")&&!Er(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvt:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvt:function(t,e){var i=this.accordion,n=this.show;if(i&&i===e){var o=t===this.safeId();(o&&!n||!o&&n)&&this.toggle()}},handleResize:function(){this.show="block"===Kr(this.$el).display}},render:function(t){var e=this.appear,i=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(Ao,this.slotScope));return t(ku,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[i])}}),Ru="collapsed",Mu="not-collapsed",Hu="__BV_toggle",zu="".concat(Hu,"_HANDLER__"),Nu="".concat(Hu,"_CLICK__"),ju="".concat(Hu,"_STATE__"),Gu="".concat(Hu,"_TARGETS__"),Wu="aria-controls",Yu="aria-expanded",Uu="role",qu="tabindex",Ku="overflow-anchor",Xu=Fs(Ue,"toggle"),Zu=Ds(Ue,"state"),Ju=Ds(Ue,"sync-state"),Qu=Fs(Ue,"request-state"),td=[Ha,Ga],ed=function(t){return!nr(["button","a"],t.tagName.toLowerCase())},id=function(t){var e=t[Nu];e&&(ks(t,"click",e,ao),ks(t,"keydown",e,ao)),t[Nu]=null},nd=function(t,e){t[zu]&&e.context&&e.context.$root.$off([Zu,Ju],t[zu]),t[zu]=null},od=function(t,e){e?(Mr(t,Ru),Rr(t,Mu),zr(t,Yu,"true")):(Mr(t,Mu),Rr(t,Ru),zr(t,Yu,"false"))},rd=function(t,e){t[e]=null,delete t[e]},sd=function(t,e,i){if(M&&i.context){ed(t)&&(Gr(t,Uu)||zr(t,Uu,"button"),Gr(t,qu)||zr(t,qu,"0")),od(t,t[ju]);var n=function(t,e){var i=t.modifiers,n=t.arg,o=t.value,r=Kt(i||{});if(o=Et(o)?o.split(ut):o,Br(e.tagName,"a")){var s=jr(e,"href")||"";it.test(s)&&r.push(s.replace(et,""))}return or(n,o).forEach((function(t){return Et(t)&&r.push(t)})),r.filter((function(t,e,i){return t&&i.indexOf(t)===e}))}(e,t);n.length>0?(zr(t,Wu,n.join(" ")),Wr(t,Ku,"none")):(Nr(t,Wu),Yr(t,Ku)),xr((function(){!function(t,e){if(id(t),e.context){var i=function(i){"keydown"===i.type&&!nr(td,i.keyCode)||Fr(t)||(t[Gu]||[]).forEach((function(t){e.context.$root.$emit(Xu,t)}))};t[Nu]=i,Ss(t,"click",i,ao),ed(t)&&Ss(t,"keydown",i,ao)}}(t,i)})),Ua(n,t[Gu])||(t[Gu]=n,n.forEach((function(t){i.context.$root.$emit(Qu,t)})))}},ad={bind:function(t,e,i){t[ju]=!1,t[Gu]=[],function(t,e){if(nd(t,e),e.context){var i=function(e,i){nr(t[Gu]||[],e)&&(t[ju]=i,od(t,i))};t[zu]=i,e.context.$root.$on([Zu,Ju],i)}}(t,i),sd(t,e,i)},componentUpdated:sd,updated:sd,unbind:function(t,e,i){id(t),nd(t,i),rd(t,zu),rd(t,Nu),rd(t,ju),rd(t,Gu),Mr(t,Ru),Mr(t,Mu),Nr(t,Yu),Nr(t,Wu),Nr(t,Uu),Yr(t,Ku)}},ld=me({directives:{VBToggle:ad}}),cd=me({components:{BCollapse:Au},plugins:{VBTogglePlugin:ld}}),ud="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,dd=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(ud&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();var hd=ud&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),dd))}};function fd(t){return t&&"[object Function]"==={}.toString.call(t)}function pd(t,e){if(1!==t.nodeType)return[];var i=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?i[e]:i}function md(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function vd(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=pd(t),i=e.overflow,n=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(i+o+n)?t:vd(md(t))}function bd(t){return t&&t.referenceNode?t.referenceNode:t}var gd=ud&&!(!window.MSInputMethodContext||!document.documentMode),yd=ud&&/MSIE 10/.test(navigator.userAgent);function wd(t){return 11===t?gd:10===t?yd:gd||yd}function Td(t){if(!t)return document.documentElement;for(var e=wd(10)?document.body:null,i=t.offsetParent||null;i===e&&t.nextElementSibling;)i=(t=t.nextElementSibling).offsetParent;var n=i&&i.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TH","TD","TABLE"].indexOf(i.nodeName)&&"static"===pd(i,"position")?Td(i):i:t?t.ownerDocument.documentElement:document.documentElement}function Cd(t){return null!==t.parentNode?Cd(t.parentNode):t}function xd(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var i=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,n=i?t:e,o=i?e:t,r=document.createRange();r.setStart(n,0),r.setEnd(o,0);var s,a,l=r.commonAncestorContainer;if(t!==l&&e!==l||n.contains(o))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&Td(s.firstElementChild)!==s?Td(l):l;var c=Cd(t);return c.host?xd(c.host,e):xd(t,Cd(e).host)}function Sd(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",i="top"===e?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[i]}return t[i]}function kd(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Sd(e,"top"),o=Sd(e,"left"),r=i?-1:1;return t.top+=n*r,t.bottom+=n*r,t.left+=o*r,t.right+=o*r,t}function $d(t,e){var i="x"===e?"Left":"Top",n="Left"===i?"Right":"Bottom";return parseFloat(t["border"+i+"Width"])+parseFloat(t["border"+n+"Width"])}function Bd(t,e,i,n){return Math.max(e["offset"+t],e["scroll"+t],i["client"+t],i["offset"+t],i["scroll"+t],wd(10)?parseInt(i["offset"+t])+parseInt(n["margin"+("Height"===t?"Top":"Left")])+parseInt(n["margin"+("Height"===t?"Bottom":"Right")]):0)}function _d(t){var e=t.body,i=t.documentElement,n=wd(10)&&getComputedStyle(i);return{height:Bd("Height",e,i,n),width:Bd("Width",e,i,n)}}var Dd=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Fd=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),Id=function(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t},Pd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function Od(t){return Pd({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Vd(t){var e={};try{if(wd(10)){e=t.getBoundingClientRect();var i=Sd(t,"top"),n=Sd(t,"left");e.top+=i,e.left+=n,e.bottom+=i,e.right+=n}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?_d(t.ownerDocument):{},s=r.width||t.clientWidth||o.width,a=r.height||t.clientHeight||o.height,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var u=pd(t);l-=$d(u,"x"),c-=$d(u,"y"),o.width-=l,o.height-=c}return Od(o)}function Ed(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=wd(10),o="HTML"===e.nodeName,r=Vd(t),s=Vd(e),a=vd(t),l=pd(e),c=parseFloat(l.borderTopWidth),u=parseFloat(l.borderLeftWidth);i&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var d=Od({top:r.top-s.top-c,left:r.left-s.left-u,width:r.width,height:r.height});if(d.marginTop=0,d.marginLeft=0,!n&&o){var h=parseFloat(l.marginTop),f=parseFloat(l.marginLeft);d.top-=c-h,d.bottom-=c-h,d.left-=u-f,d.right-=u-f,d.marginTop=h,d.marginLeft=f}return(n&&!i?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(d=kd(d,e)),d}function Ld(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t.ownerDocument.documentElement,n=Ed(t,i),o=Math.max(i.clientWidth,window.innerWidth||0),r=Math.max(i.clientHeight,window.innerHeight||0),s=e?0:Sd(i),a=e?0:Sd(i,"left"),l={top:s-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:o,height:r};return Od(l)}function Ad(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===pd(t,"position"))return!0;var i=md(t);return!!i&&Ad(i)}function Rd(t){if(!t||!t.parentElement||wd())return document.documentElement;for(var e=t.parentElement;e&&"none"===pd(e,"transform");)e=e.parentElement;return e||document.documentElement}function Md(t,e,i,n){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?Rd(t):xd(t,bd(e));if("viewport"===n)r=Ld(s,o);else{var a=void 0;"scrollParent"===n?"BODY"===(a=vd(md(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===n?t.ownerDocument.documentElement:n;var l=Ed(a,s,o);if("HTML"!==a.nodeName||Ad(s))r=l;else{var c=_d(t.ownerDocument),u=c.height,d=c.width;r.top+=l.top-l.marginTop,r.bottom=u+l.top,r.left+=l.left-l.marginLeft,r.right=d+l.left}}var h="number"==typeof(i=i||0);return r.left+=h?i:i.left||0,r.top+=h?i:i.top||0,r.right-=h?i:i.right||0,r.bottom-=h?i:i.bottom||0,r}function Hd(t){return t.width*t.height}function zd(t,e,i,n,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Md(i,n,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map((function(t){return Pd({key:t},a[t],{area:Hd(a[t])})})).sort((function(t,e){return e.area-t.area})),c=l.filter((function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight})),u=c.length>0?c[0].key:l[0].key,d=t.split("-")[1];return u+(d?"-"+d:"")}function Nd(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=n?Rd(e):xd(e,bd(i));return Ed(i,o,n)}function jd(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),i=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),n=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+n,height:t.offsetHeight+i}}function Gd(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function Wd(t,e,i){i=i.split("-")[0];var n=jd(t),o={width:n.width,height:n.height},r=-1!==["right","left"].indexOf(i),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=e[s]+e[l]/2-n[l]/2,o[a]=i===a?e[a]-n[c]:e[Gd(a)],o}function Yd(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function Ud(t,e,i){return(void 0===i?t:t.slice(0,function(t,e,i){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===i}));var n=Yd(t,(function(t){return t[e]===i}));return t.indexOf(n)}(t,"name",i))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var i=t.function||t.fn;t.enabled&&fd(i)&&(e.offsets.popper=Od(e.offsets.popper),e.offsets.reference=Od(e.offsets.reference),e=i(e,t))})),e}function qd(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=Nd(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=zd(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Wd(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=Ud(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function Kd(t,e){return t.some((function(t){var i=t.name;return t.enabled&&i===e}))}function Xd(t){for(var e=[!1,"ms","Webkit","Moz","O"],i=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<e.length;n++){var o=e[n],r=o?""+o+i:t;if("undefined"!=typeof document.body.style[r])return r}return null}function Zd(){return this.state.isDestroyed=!0,Kd(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Xd("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Jd(t){var e=t.ownerDocument;return e?e.defaultView:window}function Qd(t,e,i,n){var o="BODY"===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,i,{passive:!0}),o||Qd(vd(r.parentNode),e,i,n),n.push(r)}function th(t,e,i,n){i.updateBound=n,Jd(t).addEventListener("resize",i.updateBound,{passive:!0});var o=vd(t);return Qd(o,"scroll",i.updateBound,i.scrollParents),i.scrollElement=o,i.eventsEnabled=!0,i}function eh(){this.state.eventsEnabled||(this.state=th(this.reference,this.options,this.state,this.scheduleUpdate))}function ih(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,Jd(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function nh(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function oh(t,e){Object.keys(e).forEach((function(i){var n="";-1!==["width","height","top","right","bottom","left"].indexOf(i)&&nh(e[i])&&(n="px"),t.style[i]=e[i]+n}))}var rh=ud&&/Firefox/i.test(navigator.userAgent);function sh(t,e,i){var n=Yd(t,(function(t){return t.name===e})),o=!!n&&t.some((function(t){return t.name===i&&t.enabled&&t.order<n.order}));if(!o){var r="`"+e+"`",s="`"+i+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var ah=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],lh=ah.slice(3);function ch(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=lh.indexOf(t),n=lh.slice(i+1).concat(lh.slice(0,i));return e?n.reverse():n}var uh="flip",dh="clockwise",hh="counterclockwise";function fh(t,e,i,n){var o=[0,0],r=-1!==["right","left"].indexOf(n),s=t.split(/(\+|\-)/).map((function(t){return t.trim()})),a=s.indexOf(Yd(s,(function(t){return-1!==t.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==a?[s.slice(0,a).concat([s[a].split(l)[0]]),[s[a].split(l)[1]].concat(s.slice(a+1))]:[s];return(c=c.map((function(t,n){var o=(1===n?!r:r)?"height":"width",s=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,i,n){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=i;break;case"%":case"%r":default:a=n}return Od(a)[e]/100*r}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;return r}(t,o,e,i)}))}))).forEach((function(t,e){t.forEach((function(i,n){nh(i)&&(o[e]+=i*("-"===t[n-1]?-1:1))}))})),o}var ph={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,i=e.split("-")[0],n=e.split("-")[1];if(n){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(i),l=a?"left":"top",c=a?"width":"height",u={start:Id({},l,r[l]),end:Id({},l,r[l]+r[c]-s[c])};t.offsets.popper=Pd({},s,u[n])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var i=e.offset,n=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=n.split("-")[0],l=void 0;return l=nh(+i)?[+i,0]:fh(i,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var i=e.boundariesElement||Td(t.instance.popper);t.instance.reference===i&&(i=Td(i));var n=Xd("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Md(t.instance.popper,t.instance.reference,e.padding,i,t.positionFixed);o.top=r,o.left=s,o[n]=a,e.boundaries=l;var c=e.priority,u=t.offsets.popper,d={primary:function(t){var i=u[t];return u[t]<l[t]&&!e.escapeWithReference&&(i=Math.max(u[t],l[t])),Id({},t,i)},secondary:function(t){var i="right"===t?"left":"top",n=u[i];return u[t]>l[t]&&!e.escapeWithReference&&(n=Math.min(u[i],l[t]-("right"===t?u.width:u.height))),Id({},i,n)}};return c.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";u=Pd({},u,d[e](t))})),t.offsets.popper=u,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,i=e.popper,n=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return i[a]<r(n[l])&&(t.offsets.popper[l]=r(n[l])-i[c]),i[l]>r(n[a])&&(t.offsets.popper[l]=r(n[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var i;if(!sh(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",u=l?"Top":"Left",d=u.toLowerCase(),h=l?"left":"top",f=l?"bottom":"right",p=jd(n)[c];a[f]-p<s[d]&&(t.offsets.popper[d]-=s[d]-(a[f]-p)),a[d]+p>s[f]&&(t.offsets.popper[d]+=a[d]+p-s[f]),t.offsets.popper=Od(t.offsets.popper);var m=a[d]+a[c]/2-p/2,v=pd(t.instance.popper),b=parseFloat(v["margin"+u]),g=parseFloat(v["border"+u+"Width"]),y=m-t.offsets.popper[d]-b-g;return y=Math.max(Math.min(s[c]-p,y),0),t.arrowElement=n,t.offsets.arrow=(Id(i={},d,Math.round(y)),Id(i,h,""),i),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(Kd(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var i=Md(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),n=t.placement.split("-")[0],o=Gd(n),r=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case uh:s=[n,o];break;case dh:s=ch(n);break;case hh:s=ch(n,!0);break;default:s=e.behavior}return s.forEach((function(a,l){if(n!==a||s.length===l+1)return t;n=t.placement.split("-")[0],o=Gd(n);var c=t.offsets.popper,u=t.offsets.reference,d=Math.floor,h="left"===n&&d(c.right)>d(u.left)||"right"===n&&d(c.left)<d(u.right)||"top"===n&&d(c.bottom)>d(u.top)||"bottom"===n&&d(c.top)<d(u.bottom),f=d(c.left)<d(i.left),p=d(c.right)>d(i.right),m=d(c.top)<d(i.top),v=d(c.bottom)>d(i.bottom),b="left"===n&&f||"right"===n&&p||"top"===n&&m||"bottom"===n&&v,g=-1!==["top","bottom"].indexOf(n),y=!!e.flipVariations&&(g&&"start"===r&&f||g&&"end"===r&&p||!g&&"start"===r&&m||!g&&"end"===r&&v),w=!!e.flipVariationsByContent&&(g&&"start"===r&&p||g&&"end"===r&&f||!g&&"start"===r&&v||!g&&"end"===r&&m),T=y||w;(h||b||T)&&(t.flipped=!0,(h||b)&&(n=s[l+1]),T&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=n+(r?"-"+r:""),t.offsets.popper=Pd({},t.offsets.popper,Wd(t.instance.popper,t.offsets.reference,t.placement)),t=Ud(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,i=e.split("-")[0],n=t.offsets,o=n.popper,r=n.reference,s=-1!==["left","right"].indexOf(i),a=-1===["top","left"].indexOf(i);return o[s?"left":"top"]=r[i]-(a?o[s?"width":"height"]:0),t.placement=Gd(e),t.offsets.popper=Od(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!sh(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,i=Yd(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<i.top||e.left>i.right||e.top>i.bottom||e.right<i.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var i=e.x,n=e.y,o=t.offsets.popper,r=Yd(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:e.gpuAcceleration,a=Td(t.instance.popper),l=Vd(a),c={position:o.position},u=function(t,e){var i=t.offsets,n=i.popper,o=i.reference,r=Math.round,s=Math.floor,a=function(t){return t},l=r(o.width),c=r(n.width),u=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),h=e?u||d||l%2==c%2?r:s:a,f=e?r:a;return{left:h(l%2==1&&c%2==1&&!d&&e?n.left-1:n.left),top:f(n.top),bottom:f(n.bottom),right:h(n.right)}}(t,window.devicePixelRatio<2||!rh),d="bottom"===i?"top":"bottom",h="right"===n?"left":"right",f=Xd("transform"),p=void 0,m=void 0;if(m="bottom"===d?"HTML"===a.nodeName?-a.clientHeight+u.bottom:-l.height+u.bottom:u.top,p="right"===h?"HTML"===a.nodeName?-a.clientWidth+u.right:-l.width+u.right:u.left,s&&f)c[f]="translate3d("+p+"px, "+m+"px, 0)",c[d]=0,c[h]=0,c.willChange="transform";else{var v="bottom"===d?-1:1,b="right"===h?-1:1;c[d]=m*v,c[h]=p*b,c.willChange=d+", "+h}var g={"x-placement":t.placement};return t.attributes=Pd({},g,t.attributes),t.styles=Pd({},c,t.styles),t.arrowStyles=Pd({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,i;return oh(t.instance.popper,t.styles),e=t.instance.popper,i=t.attributes,Object.keys(i).forEach((function(t){!1!==i[t]?e.setAttribute(t,i[t]):e.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&oh(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,i,n,o){var r=Nd(o,e,t,i.positionFixed),s=zd(i.placement,r,e,t,i.modifiers.flip.boundariesElement,i.modifiers.flip.padding);return e.setAttribute("x-placement",s),oh(e,{position:i.positionFixed?"fixed":"absolute"}),i},gpuAcceleration:void 0}}},mh=function(){function t(e,i){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Dd(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=hd(this.update.bind(this)),this.options=Pd({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(Pd({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){n.options.modifiers[e]=Pd({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return Pd({name:t},n.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&fd(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Fd(t,[{key:"update",value:function(){return qd.call(this)}},{key:"destroy",value:function(){return Zd.call(this)}},{key:"enableEventListeners",value:function(){return eh.call(this)}},{key:"disableEventListeners",value:function(){return ih.call(this)}}]),t}();mh.Utils=("undefined"!=typeof window?window:global).PopperUtils,mh.placements=ah,mh.Defaults=ph;var vh,bh,gh,yh,wh,Th,Ch,xh,Sh,kh,$h,Bh,BvEvent=function(){function BvEvent(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,BvEvent),!t)throw new TypeError("Failed to construct '".concat(this.constructor.name,"'. 1 argument required, ").concat(arguments.length," given."));Gt(this,BvEvent.Defaults,this.constructor.Defaults,e,{type:t}),Yt(this,{type:{enumerable:!0,configurable:!1,writable:!1},cancelable:{enumerable:!0,configurable:!1,writable:!1},nativeEvent:{enumerable:!0,configurable:!1,writable:!1},target:{enumerable:!0,configurable:!1,writable:!1},relatedTarget:{enumerable:!0,configurable:!1,writable:!1},vueTarget:{enumerable:!0,configurable:!1,writable:!1},componentId:{enumerable:!0,configurable:!1,writable:!1}});var i=!1;this.preventDefault=function(){this.cancelable&&(i=!0)},Ut(this,"defaultPrevented",{enumerable:!0,get:function(){return i}})}return s(BvEvent,null,[{key:"Defaults",get:function(){return{type:"",cancelable:!0,nativeEvent:null,target:null,relatedTarget:null,vueTarget:null,componentId:null}}}]),BvEvent}(),_h=i.default.extend({data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(ks(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,lo),t&&Ss(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,lo))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Ss(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,lo)},beforeDestroy:function(){ks(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,lo)},methods:{isClickOut:function(t){return!Lr(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}}),Dh=i.default.extend({data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(ks(this.focusInElement,"focusin",this._focusInHandler,lo),t&&Ss(this.focusInElement,"focusin",this._focusInHandler,lo))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Ss(this.focusInElement,"focusin",this._focusInHandler,lo)},beforeDestroy:function(){ks(this.focusInElement,"focusin",this._focusInHandler,lo)},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}}),Fh=Ds(Ke,eo),Ih=Ds(Ke,zn),Ph=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),Oh=vs(ee(c(c({},fc),{},{boundary:hs([HTMLElement,go],"scrollParent"),disabled:hs(ho,!1),dropleft:hs(ho,!1),dropright:hs(ho,!1),dropup:hs(ho,!1),noFlip:hs(ho,!1),offset:hs(_o,0),popperOpts:hs(vo,{}),right:hs(ho,!1)})),Ke),Vh=i.default.extend({mixins:[pc,Ja,_h,Dh],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:Oh,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!It(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var i=new BvEvent(t?to:Nn,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(i),i.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off(zn,this.focusToggler);t?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout()},methods:{emitEvent:function(t){var e=t.type;this.emitOnRoot(Ds(Ke,e),t),this.$emit(e,t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if("undefined"==typeof mh)le("Popper.js not found. Falling back to CSS positioning",Ke);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.emitOnRoot(Fh,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit(eo)}))}},hideMenu:function(){this.whileOpenListen(!1),this.emitOnRoot(Ih,this),this.$emit(zn),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new mh(t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t="bottom-start";this.dropup?t=this.right?"top-end":"top-start":this.dropright?t="right-start":this.dropleft?t="left-start":this.right&&(t="bottom-end");var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},i=this.boundary;return i&&(e.modifiers.preventOverflow={boundariesElement:i}),te(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](Fh,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||xr((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once(zn,this.focusToggler))},toggle:function(t){var e=t=t||{},i=e.type,n=e.keyCode;("click"===i||"keydown"===i&&-1!==[Ha,Ga,Ra].indexOf(n))&&(this.disabled?this.visible=!1:(this.$emit(no,t),Bs(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){Bs(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;27===e?this.onEsc(t):e===Ra?this.focusNext(t,!1):e===Wa&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Bs(t),this.$once(zn,this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit(Bn,t)},hideHandler:function(t){var e=this,i=t.target;!this.visible||Lr(this.$refs.menu,i)||Lr(this.toggler,i)||(this.clearHideTimeout(),this.$_hideTimeout=setTimeout((function(){return e.hide()}),this.inNavbar?300:0))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var i=this,n=t.target;!this.visible||t&&Er(".dropdown form",n)||(Bs(t),this.$nextTick((function(){var t=i.getItems();if(!(t.length<1)){var o=t.indexOf(n);e&&o>0?o--:!e&&o<t.length-1&&o++,o<0&&(o=0),i.focusItem(o,t)}})))},focusItem:function(t,e){var i=e.find((function(e,i){return i===t}));ts(i)},getItems:function(){return(Pr(Ph,this.$refs.menu)||[]).filter(Dr)},focusMenu:function(){ts(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){ts(t.toggler)}))}}}),Eh=vs(ee(c(c(c({},fc),Oh),{},{block:hs(ho,!1),html:hs(go),lazy:hs(ho,!1),menuClass:hs(To),noCaret:hs(ho,!1),role:hs(go,"menu"),size:hs(go),split:hs(ho,!1),splitButtonType:hs(go,"button",(function(t){return nr(["button","submit","reset"],t)})),splitClass:hs(To),splitHref:hs(go),splitTo:hs(Io),splitVariant:hs(go),text:hs(go),toggleClass:hs(To),toggleTag:hs(go,"button"),toggleText:hs(go,"Toggle dropdown"),variant:hs(go,"secondary")})),Ke),Lh=i.default.extend({name:Ke,mixins:[pc,Vh,Cs],props:Eh,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,i=this.variant,n=this.size,o=this.block,r=this.disabled,s=this.split,a=this.role,l=this.hide,u=this.toggle,d={variant:i,size:n,block:o,disabled:r},h=this.normalizeSlot(Eo),f=this.hasNormalizedSlot(Eo)?{}:Fl(this.html,this.text),p=t();if(s){var m=this.splitTo,v=this.splitHref,b=this.splitButtonType,g=c(c({},d),{},{variant:this.splitVariant||i});m?g.to=m:v?g.href=v:b&&(g.type=b),p=t(ml,{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:g,domProps:f,on:{click:this.onSplitClick},ref:"button"},h),h=[t("span",{class:["sr-only"]},[this.toggleText])],f={}}var y=t(ml,{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":vr(e)},props:c(c({},d),{},{tag:this.toggleTag,block:o&&!s}),domProps:f,on:{mousedown:this.onMousedown,click:u,keydown:u},ref:"toggle"},h),w=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:a,tabindex:"-1","aria-labelledby":this.safeId(s?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(Ao,{hide:l}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[p,y,w])}}),Ah=Qt(nl,["event","routerTag"]),Rh=vs(ee(c(c({},Ah),{},{linkClass:hs(To),variant:hs(go)})),ti),Mh=i.default.extend({name:ti,mixins:[Za,Cs],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:Rh,computed:{computedAttrs:function(){return c(c({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;xr((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit(Bn,t),this.closeDropdown()}},render:function(t){var e=this.linkClass,i=this.variant,n=this.active,o=this.disabled,r=this.onClick,s=this.bvAttrs;return t("li",{class:s.class,style:s.style,attrs:{role:"presentation"}},[t(ol,{staticClass:"dropdown-item",class:[e,a({},"text-".concat(i),i&&!(n||o))],props:ps(Ah,this.$props),attrs:this.computedAttrs,on:{click:r},ref:"item"},this.normalizeSlot())])}}),Hh=vs({active:hs(ho,!1),activeClass:hs(go,"active"),buttonClass:hs(To),disabled:hs(ho,!1),variant:hs(go)},ei),zh=i.default.extend({name:ei,mixins:[Za,Cs],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:Hh,computed:{computedAttrs:function(){return c(c({},this.bvAttrs),{},{role:"menuitem",type:"button",disabled:this.disabled})}},methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(t){this.$emit(Bn,t),this.closeDropdown()}},render:function(t){var e,i=this.active,n=this.variant,o=this.bvAttrs;return t("li",{class:o.class,style:o.style,attrs:{role:"presentation"}},[t("button",{staticClass:"dropdown-item",class:[this.buttonClass,(e={},a(e,this.activeClass,i),a(e,"text-".concat(n),n&&!(i||this.disabled)),e)],attrs:this.computedAttrs,on:{click:this.onClick},ref:"button"},this.normalizeSlot())])}}),Nh=vs({id:hs(go),tag:hs(go,"header"),variant:hs(go)},Qe),jh=i.default.extend({name:Qe,functional:!0,props:Nh,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.tag,s=i.variant;return t("li",F(Qt(n,["attrs"]),{attrs:{role:"presentation"}}),[t(r,{staticClass:"dropdown-header",class:a({},"text-".concat(s),s),attrs:c(c({},n.attrs||{}),{},{id:i.id||null,role:Br(r,"header")?null:"heading"}),ref:"header"},o)])}}),Gh=vs({tag:hs(go,"hr")},Xe),Wh=i.default.extend({name:Xe,functional:!0,props:Gh,render:function(t,e){var i=e.props,n=e.data;return t("li",F(Qt(n,["attrs"]),{attrs:{role:"presentation"}}),[t(i.tag,{staticClass:"dropdown-divider",attrs:c(c({},n.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}}),Yh=vs({id:hs(go),inline:hs(ho,!1),novalidate:hs(ho,!1),validated:hs(ho,!1)},oi),Uh=i.default.extend({name:oi,functional:!0,props:Yh,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t("form",F(n,{class:{"form-inline":i.inline,"was-validated":i.validated},attrs:{id:i.id,novalidate:i.novalidate}}),o)}}),qh=vs(ee(c(c({},Yh),{},{disabled:hs(ho,!1),formClass:hs(To)})),Ze),Kh=i.default.extend({name:Ze,functional:!0,props:qh,render:function(t,e){var i=e.props,n=e.data,o=e.listeners,r=e.children;return t("li",F(Qt(n,["attrs","on"]),{attrs:{role:"presentation"}}),[t(Uh,{staticClass:"b-dropdown-form",class:[i.formClass,{disabled:i.disabled}],props:i,attrs:c(c({},n.attrs||{}),{},{disabled:i.disabled,tabindex:i.disabled?null:"-1"}),on:o,ref:"form"},r)])}}),Xh=vs({tag:hs(go,"p"),textClass:hs(To),variant:hs(go)},ii),Zh=i.default.extend({name:ii,functional:!0,props:Xh,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.tag,s=i.textClass,l=i.variant;return t("li",F(Qt(n,["attrs"]),{attrs:{role:"presentation"}}),[t(r,{staticClass:"b-dropdown-text",class:[s,a({},"text-".concat(l),l)],props:i,attrs:n.attrs||{},ref:"text"},o)])}}),Jh=vs({ariaDescribedby:hs(go),header:hs(go),headerClasses:hs(To),headerTag:hs(go,"header"),headerVariant:hs(go),id:hs(go)},Je),Qh=i.default.extend({name:Je,functional:!0,props:Jh,render:function(t,e){var i=e.props,n=e.data,o=e.slots,r=e.scopedSlots,s=i.id,l=i.variant,u=i.header,d=i.headerTag,h=o(),f=r||{},p={},m=s?"_bv_".concat(s,"_group_dd_header"):null,v=t();return(ws(No,f,h)||u)&&(v=t(d,{staticClass:"dropdown-header",class:[i.headerClasses,a({},"text-".concat(l),l)],attrs:{id:m,role:Br(d,"header")?null:"heading"}},Ts(No,p,f,h)||u)),t("li",F(Qt(n,["attrs"]),{attrs:{role:"presentation"}}),[v,t("ul",{staticClass:"list-unstyled",attrs:c(c({},n.attrs||{}),{},{id:s,role:"group","aria-describedby":[m,i.ariaDescribedBy].filter(ne).join(" ").trim()||null})},Ts(Ao,p,f,h))])}}),tf=me({components:{BDropdown:Lh,BDd:Lh,BDropdownItem:Mh,BDdItem:Mh,BDropdownItemButton:zh,BDropdownItemBtn:zh,BDdItemButton:zh,BDdItemBtn:zh,BDropdownHeader:jh,BDdHeader:jh,BDropdownDivider:Wh,BDdDivider:Wh,BDropdownForm:Kh,BDdForm:Kh,BDropdownText:Zh,BDdText:Zh,BDropdownGroup:Qh,BDdGroup:Qh}}),ef=["iframe","embed","video","object","img","b-img","b-img-lazy"],nf=vs({aspect:hs(go,"16by9"),tag:hs(go,"div"),type:hs(go,"iframe",(function(t){return nr(ef,t)}))},ni),of=i.default.extend({name:ni,functional:!0,props:nf,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.aspect;return t(i.tag,{staticClass:"embed-responsive",class:a({},"embed-responsive-".concat(r),r),ref:n.ref},[t(i.type,F(Qt(n,["ref"]),{staticClass:"embed-responsive-item"}),o)])}}),rf=me({components:{BEmbed:of}}),sf=vs({disabledField:hs(go,"disabled"),htmlField:hs(go,"html"),options:hs(wo,[]),textField:hs(go,"text"),valueField:hs(go,"value")},"formOptionControls"),af=i.default.extend({props:sf,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Ht(t)){var i=re(t,this.valueField),n=re(t,this.textField);return{value:Ft(i)?e||n:i,text:Dl(String(Ft(n)?e:n)),html:re(t,this.htmlField),disabled:Boolean(re(t,this.disabledField))}}return{value:e||t,text:Dl(String(t)),disabled:!1}},normalizeOptions:function(t){var e=this;return Rt(t)?t.map((function(t){return e.normalizeOption(t)})):Ht(t)?(le('Setting prop "options" to an object is deprecated. Use the array format instead.',this.$options.name),Kt(t).map((function(i){return e.normalizeOption(t[i]||{},i)}))):[]}}}),lf=vs(ee(c(c({},sf),{},{id:hs(go,void 0,!0)})),ai),cf=i.default.extend({name:ai,mixins:[af,Cs],props:lf,render:function(t){var e=this.id,i=this.formOptions.map((function(e,i){var n=e.value,o=e.text,r=e.html,s=e.disabled;return t("option",{attrs:{value:n,disabled:s},domProps:Fl(r,o),key:"option_".concat(i)})}));return t("datalist",{attrs:{id:e}},[i,this.normalizeSlot()])}}),uf=vs({id:hs(go),inline:hs(ho,!1),tag:hs(go,"small"),textVariant:hs(go,"muted")},xi),df=i.default.extend({name:xi,functional:!0,props:uf,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.tag,F(n,{class:a({"form-text":!i.inline},"text-".concat(i.textVariant),i.textVariant),attrs:{id:i.id}}),o)}}),hf=vs({ariaLive:hs(go),forceShow:hs(ho,!1),id:hs(go),role:hs(go),state:hs(ho,null),tag:hs(go,"div"),tooltip:hs(ho,!1)},hi),ff=i.default.extend({name:hi,functional:!0,props:hf,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.tooltip,s=i.ariaLive,a=!0===i.forceShow||!1===i.state;return t(i.tag,F(n,{class:{"d-block":a,"invalid-feedback":!r,"invalid-tooltip":r},attrs:{id:i.id||null,role:i.role||null,"aria-live":s||null,"aria-atomic":s?"true":null}}),o)}}),pf=vs({ariaLive:hs(go),forceShow:hs(ho,!1),id:hs(go),role:hs(go),state:hs(ho,null),tag:hs(go,"div"),tooltip:hs(ho,!1)},$i),mf=i.default.extend({name:$i,functional:!0,props:pf,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.tooltip,s=i.ariaLive,a=!0===i.forceShow||!0===i.state;return t(i.tag,F(n,{class:{"d-block":a,"valid-feedback":!r,"valid-tooltip":r},attrs:{id:i.id||null,role:i.role||null,"aria-live":s||null,"aria-atomic":s?"true":null}}),o)}}),vf=vs({tag:hs(go,"div")},vi),bf=i.default.extend({name:vi,functional:!0,props:vf,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.tag,F(n,{staticClass:"form-row"}),o)}}),gf=me({components:{BForm:Uh,BFormDatalist:cf,BDatalist:cf,BFormText:df,BFormInvalidFeedback:ff,BFormFeedback:ff,BFormValidFeedback:mf,BFormRow:bf}}),yf=function(t,e){for(var i=0;i<t.length;i++)if(Ua(t[i],e))return i;return-1},wf="input, textarea, select",Tf=vs({autofocus:hs(ho,!1),disabled:hs(ho,!1),form:hs(go),id:hs(go),name:hs(go),required:hs(ho,!1)},"formControls"),Cf=i.default.extend({props:Tf,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){xr((function(){var e=t.$el;t.autofocus&&Dr(e)&&(Vr(e,wf)||(e=Or(wf,e)),ts(e))}))}))}}}),xf=vs({plain:hs(ho,!1)},"formControls"),Sf=i.default.extend({props:xf,computed:{custom:function(){return!this.plain}}}),kf=vs({size:hs(go)},"formControls"),$f=i.default.extend({props:kf,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}}),Bf=vs({state:hs(ho,null)},"formState"),_f=i.default.extend({props:Bf,computed:{computedState:function(){return Vt(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}}),Df=ys("checked",{defaultValue:null}),Ff=Df.mixin,If=Df.props,Pf=Df.prop,Of=Df.event,Vf=vs(ee(c(c(c(c(c(c(c({},fc),If),Tf),kf),Bf),xf),{},{ariaLabel:hs(go),ariaLabelledby:hs(go),button:hs(ho,!1),buttonVariant:hs(go),inline:hs(ho,!1),value:hs(co)})),"formRadioCheckControls"),Ef=i.default.extend({mixins:[Za,pc,Ff,Cs,Cf,$f,_f,Sf],inheritAttrs:!1,props:Vf,data:function(){return{localChecked:this.isGroup?this.bvGroup[Pf]:this[Pf],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Ua(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Vt(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},a(t,"btn-".concat(e),e),a(t,"disabled",this.isDisabled),a(t,"active",this.isChecked),a(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return c(c({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(vh={},a(vh,Pf,(function(){this["".concat(Pf,"Watcher")].apply(this,arguments)})),a(vh,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),vh),methods:(bh={},a(bh,"".concat(Pf,"Watcher"),(function(t){Ua(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),a(bh,"computedLocalCheckedWatcher",(function(t,e){Ua(t,e)||this.$emit(Of,t)})),a(bh,"handleChange",(function(t){var e=this,i=t.target.checked,n=this.value,o=i?n:null;this.computedLocalChecked=n,this.$nextTick((function(){e.$emit($n,o),e.isGroup&&e.bvGroup.$emit($n,o)}))})),a(bh,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),a(bh,"focus",(function(){this.isDisabled||ts(this.$refs.input)})),a(bh,"blur",(function(){this.isDisabled||es(this.$refs.input)})),bh),render:function(t){var e=this.isRadio,i=this.isBtnMode,n=this.isPlain,o=this.isCustom,r=this.isInline,s=this.isSwitch,l=this.computedSize,u=this.bvAttrs,d=this.normalizeSlot(),h=t("input",{class:[{"form-check-input":n,"custom-control-input":o,"position-static":n&&!d},i?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:c({change:this.handleChange},i?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(i){var f=t("label",{class:this.buttonClasses},[h,d]);return this.isGroup||(f=t("div",{class:["btn-group-toggle","d-inline-block"]},[f])),f}var p=t();return n&&!d||(p=t("label",{class:{"form-check-label":n,"custom-control-label":o},attrs:{for:this.safeId()}},d)),t("div",{class:[a({"form-check":n,"form-check-inline":n&&r,"custom-control":o,"custom-control-inline":o&&r,"custom-checkbox":o&&!e&&!s,"custom-switch":s,"custom-radio":o&&e},"b-custom-control-".concat(l),l&&!i),u.class],style:u.style},[h,p])}}),Lf="indeterminate",Af="update:indeterminate",Rf=vs(ee(c(c({},Vf),{},(a(gh={},Lf,hs(ho,!1)),a(gh,"switch",hs(ho,!1)),a(gh,"uncheckedValue",hs(co,!1)),a(gh,"value",hs(co,!0)),gh))),ri),Mf=i.default.extend({name:ri,mixins:[Ef],inject:{bvGroup:{from:"bvCheckGroup",default:null}},props:Rf,computed:{isChecked:function(){var t=this.value,e=this.computedLocalChecked;return Rt(e)?yf(e,t)>-1:Ua(e,t)},isRadio:function(){return!1}},watch:a({},Lf,(function(t,e){Ua(t,e)||this.setIndeterminate(t)})),mounted:function(){this.setIndeterminate(this.indeterminate)},methods:{computedLocalCheckedWatcher:function(t,e){if(!Ua(t,e)){this.$emit(Of,t);var i=this.$refs.input;i&&this.$emit(Af,i.indeterminate)}},handleChange:function(t){var e=this,i=t.target,n=i.checked,o=i.indeterminate,r=this.value,s=this.uncheckedValue,a=this.computedLocalChecked;if(Rt(a)){var l=yf(a,r);n&&l<0?a=a.concat(r):!n&&l>-1&&(a=a.slice(0,l).concat(a.slice(l+1)))}else a=n?r:s;this.computedLocalChecked=a,this.$nextTick((function(){e.$emit($n,a),e.isGroup&&e.bvGroup.$emit($n,a),e.$emit(Af,o)}))},setIndeterminate:function(t){Rt(this.computedLocalChecked)&&(t=!1);var e=this.$refs.input;e&&(e.indeterminate=t,this.$emit(Af,t))}}}),Hf=vs(ee(c(c(c(c(c({},fc),Tf),Vf),kf),Bf)),fi),zf=i.default.extend({name:fi,mixins:[pc,Ef,Cf,$f,_f],inject:{bvGroup:{from:"bvRadioGroup",default:!1}},props:Hf,watch:{computedLocalChecked:function(t,e){Ua(t,e)||this.$emit(Of,t)}}}),Nf=["aria-describedby","aria-labelledby"],jf=ys("checked"),Gf=jf.mixin,Wf=jf.props,Yf=jf.prop,Uf=jf.event,qf=vs(ee(c(c(c(c(c(c(c(c({},fc),Wf),Tf),sf),kf),Bf),xf),{},{ariaInvalid:hs(ko,!1),buttonVariant:hs(go),buttons:hs(ho,!1),stacked:hs(ho,!1),validated:hs(ho,!1)})),"formRadioCheckGroups"),Kf=i.default.extend({mixins:[pc,Gf,Cs,Cf,af,$f,_f,Sf],inheritAttrs:!1,props:qf,data:function(){return{localChecked:this[Yf]}},computed:{inline:function(){return!this.stacked},groupName:function(){return this.name||this.safeId()},groupClasses:function(){var t=this.inline,e=this.size,i={"was-validated":this.validated};return this.buttons&&(i=[i,"btn-group-toggle",a({"btn-group":t,"btn-group-vertical":!t},"btn-group-".concat(e),e)]),i}},watch:(yh={},a(yh,Yf,(function(t){Ua(t,this.localChecked)||(this.localChecked=t)})),a(yh,"localChecked",(function(t,e){Ua(t,e)||this.$emit(Uf,t)})),yh),render:function(t){var e=this,i=this.isRadioGroup,n=Jt(this.$attrs,Nf),o=i?zf:Mf,r=this.formOptions.map((function(i,r){var s="BV_option_".concat(r);return t(o,{props:{disabled:i.disabled||!1,id:e.safeId(s),value:i.value},attrs:n,key:s},[t("span",{domProps:Fl(i.html,i.text)})])}));return t("div",{class:[this.groupClasses,"bv-no-focus-ring"],attrs:c(c({},Qt(this.$attrs,Nf)),{},{"aria-invalid":this.computedAriaInvalid,"aria-required":this.required?"true":null,id:this.safeId(),role:i?"radiogroup":"group",tabindex:"-1"})},[this.normalizeSlot(Ho),r,this.normalizeSlot()])}}),Xf=vs(ee(c(c({},qf),{},(a(wh={},Yf,hs(uo,[])),a(wh,"switches",hs(ho,!1)),wh))),si),Zf=i.default.extend({name:si,mixins:[Kf],provide:function(){return{bvCheckGroup:this}},props:Xf,computed:{isRadioGroup:function(){return!1}}}),Jf=me({components:{BFormCheckbox:Mf,BCheckbox:Mf,BCheck:Mf,BFormCheckboxGroup:Zf,BCheckboxGroup:Zf,BCheckGroup:Zf}}),Qf="__BV_hover_handler__",tp="mouseenter",ep=function(t,e,i){$s(t,e,tp,i,lo),$s(t,e,"mouseleave",i,lo)},ip=function(t,e){var i=e.value,n=void 0===i?null:i;if(M){var o=t[Qf],r=Ot(o),s=!(r&&o.fn===n);r&&s&&(ep(!1,t,o),delete t[Qf]),Ot(n)&&s&&(t[Qf]=function(t){var e=function(e){t(e.type===tp,e)};return e.fn=t,e}(n),ep(!0,t,t[Qf]))}},np={bind:ip,componentUpdated:ip,unbind:function(t){ip(t,{value:null})}},op=ee(c(c(c(c(c(c({},fc),kf),Bf),Qt(Oh,["disabled"])),Qt(Tf,["autofocus"])),{},{buttonOnly:hs(ho,!1),buttonVariant:hs(go,"secondary"),formattedValue:hs(go),labelSelected:hs(go),lang:hs(go),menuClass:hs(To),placeholder:hs(go),readonly:hs(ho,!1),rtl:hs(ho,null),value:hs(go,"")})),rp=i.default.extend({name:"BVFormBtnLabelControl",directives:{"b-hover":np},mixins:[pc,$f,_f,Vh,Cs],props:op,data:function(){return{isHovered:!1,hasFocus:!1}},computed:{idButton:function(){return this.safeId()},idLabel:function(){return this.safeId("_value_")},idMenu:function(){return this.safeId("_dialog_")},idWrapper:function(){return this.safeId("_outer_")},computedDir:function(){return!0===this.rtl?"rtl":!1===this.rtl?"ltr":null}},methods:{focus:function(){this.disabled||ts(this.$refs.toggle)},blur:function(){this.disabled||es(this.$refs.toggle)},setFocus:function(t){this.hasFocus="focus"===t.type},handleHover:function(t){this.isHovered=t}},render:function(t){var e,i=this.idButton,n=this.idLabel,o=this.idMenu,r=this.idWrapper,s=this.disabled,l=this.readonly,c=this.required,u=this.name,d=this.state,h=this.visible,f=this.size,p=this.isHovered,m=this.hasFocus,v=this.labelSelected,b=this.buttonVariant,g=this.buttonOnly,y=vr(this.value)||"",w=!1===d||c&&!y,T={isHovered:p,hasFocus:m,state:d,opened:h},C=t("button",{staticClass:"btn",class:(e={},a(e,"btn-".concat(b),g),a(e,"btn-".concat(f),f),a(e,"h-auto",!g),a(e,"dropdown-toggle",g),a(e,"dropdown-toggle-no-caret",g),e),attrs:{id:i,type:"button",disabled:s,"aria-haspopup":"dialog","aria-expanded":h?"true":"false","aria-invalid":w?"true":null,"aria-required":c?"true":null},directives:[{name:"b-hover",value:this.handleHover}],on:{mousedown:this.onMousedown,click:this.toggle,keydown:this.toggle,"!focus":this.setFocus,"!blur":this.setFocus},ref:"toggle"},[this.hasNormalizedSlot(Eo)?this.normalizeSlot(Eo,T):t(Ta,{props:{scale:1.25}})]),x=t();u&&!s&&(x=t("input",{attrs:{type:"hidden",name:u||null,form:this.form||null,value:y}}));var S=t("div",{staticClass:"dropdown-menu",class:[this.menuClass,{show:h,"dropdown-menu-right":this.right}],attrs:{id:o,role:"dialog",tabindex:"-1","aria-modal":"false","aria-labelledby":n},on:{keydown:this.onKeydown},ref:"menu"},[this.normalizeSlot(Ao,{opened:h})]),k=t("label",{class:g?"sr-only":["form-control",{"text-muted":!y},this.stateClass,this.sizeFormClass],attrs:{id:n,for:i,"aria-invalid":w?"true":null,"aria-required":c?"true":null},directives:[{name:"b-hover",value:this.handleHover}],on:{"!click":function(t){Bs(t,{preventDefault:!1})}}},[y?this.formattedValue||y:this.placeholder||"",y&&v?t("bdi",{staticClass:"sr-only"},v):""]);return t("div",{staticClass:"b-form-btn-label-control dropdown",class:[this.directionClass,this.boundaryClass,[{"btn-group":g,"form-control":!g,focus:m&&!g,show:h,"is-valid":!0===d,"is-invalid":!1===d},g?null:this.sizeFormClass]],attrs:{id:r,role:g?null:"group",lang:this.lang||null,dir:this.computedDir,"aria-disabled":s,"aria-readonly":l&&!s,"aria-labelledby":n,"aria-invalid":!1===d||c&&!y?"true":null,"aria-required":c?"true":null}},[C,x,S,k])}}),sp=ys("value",{type:$o}),ap=sp.mixin,lp=sp.props,cp=sp.prop,up=sp.event,dp=Qt(wc,["block","hidden","id","noKeyNav","roleDescription","value","width"]),hp=Qt(op,["formattedValue","id","lang","rtl","value"]),fp=vs(ee(c(c(c(c(c({},fc),lp),dp),hp),{},{calendarWidth:hs(go,"270px"),closeButton:hs(ho,!1),closeButtonVariant:hs(go,"outline-secondary"),dark:hs(ho,!1),labelCloseButton:hs(go,"Close"),labelResetButton:hs(go,"Reset"),labelTodayButton:hs(go,"Select today"),noCloseOnSelect:hs(ho,!1),resetButton:hs(ho,!1),resetButtonVariant:hs(go,"outline-danger"),resetValue:hs($o),todayButton:hs(ho,!1),todayButtonVariant:hs(go,"outline-primary")})),li),pp=i.default.extend({name:li,mixins:[pc,ap],props:fp,data:function(){return{localYMD:Jl(this[cp])||"",isVisible:!1,localLocale:null,isRTL:!1,formattedValue:"",activeYMD:""}},computed:{calendarYM:function(){return this.activeYMD.slice(0,-3)},computedLang:function(){return(this.localLocale||"").replace(/-u-.*$/i,"")||null},computedResetValue:function(){return Jl(uc(this.resetValue))||""}},watch:(Th={},a(Th,cp,(function(t){this.localYMD=Jl(t)||""})),a(Th,"localYMD",(function(t){this.isVisible&&this.$emit(up,this.valueAsDate?Zl(t)||null:t||"")})),a(Th,"calendarYM",(function(t,e){if(t!==e&&e)try{this.$refs.control.updatePopper()}catch(t){}})),Th),methods:{focus:function(){this.disabled||ts(this.$refs.control)},blur:function(){this.disabled||es(this.$refs.control)},setAndClose:function(t){var e=this;this.localYMD=t,this.noCloseOnSelect||this.$nextTick((function(){e.$refs.control.hide(!0)}))},onSelected:function(t){var e=this;this.$nextTick((function(){e.setAndClose(t)}))},onInput:function(t){this.localYMD!==t&&(this.localYMD=t)},onContext:function(t){var e=t.activeYMD,i=t.isRTL,n=t.locale,o=t.selectedYMD,r=t.selectedFormatted;this.isRTL=i,this.localLocale=n,this.formattedValue=r,this.localYMD=o,this.activeYMD=e,this.$emit(Dn,t)},onTodayButton:function(){this.setAndClose(Jl(uc(Xl(),this.min,this.max)))},onResetButton:function(){this.setAndClose(this.computedResetValue)},onCloseButton:function(){this.$refs.control.hide(!0)},onShow:function(){this.isVisible=!0},onShown:function(){var t=this;this.$nextTick((function(){ts(t.$refs.calendar),t.$emit(eo)}))},onHidden:function(){this.isVisible=!1,this.$emit(zn)},defaultButtonFn:function(t){var e=t.isHovered,i=t.hasFocus;return this.$createElement(e||i?ga:ba,{attrs:{"aria-hidden":"true"}})}},render:function(t){var e=this.localYMD,i=this.disabled,n=this.readonly,o=this.dark,r=this.$props,s=this.$scopedSlots,l=Pt(this.placeholder)?this.labelNoDateSelected:this.placeholder,u=[];if(this.todayButton){var d=this.labelTodayButton;u.push(t(ml,{props:{disabled:i||n,size:"sm",variant:this.todayButtonVariant},attrs:{"aria-label":d||null},on:{click:this.onTodayButton}},d))}if(this.resetButton){var h=this.labelResetButton;u.push(t(ml,{props:{disabled:i||n,size:"sm",variant:this.resetButtonVariant},attrs:{"aria-label":h||null},on:{click:this.onResetButton}},h))}if(this.closeButton){var f=this.labelCloseButton;u.push(t(ml,{props:{disabled:i,size:"sm",variant:this.closeButtonVariant},attrs:{"aria-label":f||null},on:{click:this.onCloseButton}},f))}u.length>0&&(u=[t("div",{staticClass:"b-form-date-controls d-flex flex-wrap",class:{"justify-content-between":u.length>1,"justify-content-end":u.length<2}},u)]);var p=t(Tc,{staticClass:"b-form-date-calendar w-100",props:c(c({},ps(dp,r)),{},{hidden:!this.isVisible,value:e,valueAsDate:!1,width:this.calendarWidth}),on:{selected:this.onSelected,input:this.onInput,context:this.onContext},scopedSlots:Jt(s,["nav-prev-decade","nav-prev-year","nav-prev-month","nav-this-month","nav-next-month","nav-next-year","nav-next-decade"]),key:"calendar",ref:"calendar"},u);return t(rp,{staticClass:"b-form-datepicker",props:c(c({},ps(hp,r)),{},{formattedValue:e?this.formattedValue:"",id:this.safeId(),lang:this.computedLang,menuClass:[{"bg-dark":o,"text-light":o},this.menuClass],placeholder:l,rtl:this.isRTL,value:e}),on:{show:this.onShow,shown:this.onShown,hidden:this.onHidden},scopedSlots:a({},Eo,s["button-content"]||this.defaultButtonFn),ref:"control"},[p])}}),mp=me({components:{BFormDatepicker:pp,BDatepicker:pp}}),vp=ys("value",{type:[uo,_t],defaultValue:null,validator:function(t){return""===t?(le(Tp,ci),!0):Pt(t)||Cp(t)}}),bp=vp.mixin,gp=vp.props,yp=vp.prop,wp=vp.event,Tp='Setting "value"/"v-model" to an empty string for reset is deprecated. Set to "null" instead.',Cp=function t(e){return function(t){return t instanceof _t}(e)||Rt(e)&&e.every((function(e){return t(e)}))},xp=function(t){return Ot(t.getAsEntry)?t.getAsEntry():Ot(t.webkitGetAsEntry)?t.webkitGetAsEntry():null},Sp=function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(n){var o=[];!function r(){e.readEntries((function(e){0===e.length?n(Promise.all(o).then((function(t){return sr(t)}))):(o.push(Promise.all(e.map((function(e){if(e){if(e.isDirectory)return t(e.createReader(),"".concat(i).concat(e.name,"/"));if(e.isFile)return new Promise((function(t){e.file((function(e){e.$path="".concat(i).concat(e.name),t(e)}))}))}return null})).filter(ne))),r())}))}()}))},kp=vs(ee(c(c(c(c(c(c(c({},fc),gp),Tf),xf),Bf),kf),{},{accept:hs(go,""),browseText:hs(go,"Browse"),capture:hs(ho,!1),directory:hs(ho,!1),dropPlaceholder:hs(go,"Drop files here"),fileNameFormatter:hs(po),multiple:hs(ho,!1),noDrop:hs(ho,!1),noDropPlaceholder:hs(go,"Not allowed"),noTraverse:hs(ho,!1),placeholder:hs(go,"No file chosen")})),ci),$p=i.default.extend({name:ci,mixins:[Za,pc,bp,Cs,Cf,_f,Sf,Cs],inheritAttrs:!1,props:kp,data:function(){return{files:[],dragging:!1,dropAllowed:!this.noDrop,hasFocus:!1}},computed:{computedAccept:function(){var t=this.accept;return 0===(t=(t||"").trim().split(/[,\s]+/).filter(ne)).length?null:t.map((function(t){var e="name",i="^",n="$";return tt.test(t)?i="":(e="type",dt.test(t)&&(n=".+$",t=t.slice(0,-1))),t=mr(t),{rx:new RegExp("".concat(i).concat(t).concat(n)),prop:e}}))},computedCapture:function(){var t=this.capture;return!0===t||""===t||(t||null)},computedAttrs:function(){var t=this.name,e=this.disabled,i=this.required,n=this.form,o=this.computedCapture,r=this.accept,s=this.multiple,a=this.directory;return c(c({},this.bvAttrs),{},{type:"file",id:this.safeId(),name:t,disabled:e,required:i,form:n||null,capture:o,accept:r||null,multiple:s,directory:a,webkitdirectory:a,"aria-required":i?"true":null})},computedFileNameFormatter:function(){var t=this.fileNameFormatter;return gs(t)?t:this.defaultFileNameFormatter},clonedFiles:function(){return ie(this.files)},flattenedFiles:function(){return ar(this.files)},fileNames:function(){return this.flattenedFiles.map((function(t){return t.name}))},labelContent:function(){if(this.dragging&&!this.noDrop)return this.normalizeSlot("drop-placeholder",{allowed:this.dropAllowed})||(this.dropAllowed?this.dropPlaceholder:this.$createElement("span",{staticClass:"text-danger"},this.noDropPlaceholder));if(0===this.files.length)return this.normalizeSlot("placeholder")||this.placeholder;var t=this.flattenedFiles,e=this.clonedFiles,i=this.fileNames,n=this.computedFileNameFormatter;return this.hasNormalizedSlot(Mo)?this.normalizeSlot(Mo,{files:t,filesTraversed:e,names:i}):n(t,e,i)}},watch:(Ch={},a(Ch,yp,(function(t){(!t||Rt(t)&&0===t.length)&&this.reset()})),a(Ch,"files",(function(t,e){if(!Ua(t,e)){var i=this.multiple,n=this.noTraverse,o=!i||n?ar(t):t;this.$emit(wp,i?o:o[0]||null)}})),Ch),created:function(){this.$_form=null},mounted:function(){var t=Er("form",this.$el);t&&(Ss(t,"reset",this.reset,ao),this.$_form=t)},beforeDestroy:function(){var t=this.$_form;t&&ks(t,"reset",this.reset,ao)},methods:{isFileValid:function(t){if(!t)return!1;var e=this.computedAccept;return!e||e.some((function(e){return e.rx.test(t[e.prop])}))},isFilesArrayValid:function(t){var e=this;return Rt(t)?t.every((function(t){return e.isFileValid(t)})):this.isFileValid(t)},defaultFileNameFormatter:function(t,e,i){return i.join(", ")},setFiles:function(t){this.dropAllowed=!this.noDrop,this.dragging=!1,this.files=this.multiple?this.directory?t:ar(t):ar(t).slice(0,1)},setInputFiles:function(t){try{var e=new ClipboardEvent("").clipboardData||new DataTransfer;ar(ie(t)).forEach((function(t){delete t.$path,e.items.add(t)})),this.$refs.input.files=e.files}catch(t){}},reset:function(){try{var t=this.$refs.input;t.value="",t.type="",t.type="file"}catch(t){}this.files=[]},handleFiles:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){var i=t.filter(this.isFilesArrayValid);i.length>0&&(this.setFiles(i),this.setInputFiles(i))}else this.setFiles(t)},focusHandler:function(t){this.plain||"focusout"===t.type?this.hasFocus=!1:this.hasFocus=!0},onChange:function(t){var e=this,i=t.type,n=t.target,o=t.dataTransfer,r=void 0===o?{}:o,s="drop"===i;this.$emit($n,t);var a=ir(r.items||[]);if(A&&a.length>0&&!It(xp(a[0])))(function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.all(ir(t).filter((function(t){return"file"===t.kind})).map((function(t){var i=xp(t);if(i){if(i.isDirectory&&e)return Sp(i.createReader(),"".concat(i.name,"/"));if(i.isFile)return new Promise((function(t){i.file((function(e){e.$path="",t(e)}))}))}return null})).filter(ne))})(a,this.directory).then((function(t){return e.handleFiles(t,s)}));else{var l=ir(n.files||r.files||[]).map((function(t){return t.$path=t.webkitRelativePath||"",t}));this.handleFiles(l,s)}},onDragenter:function(t){Bs(t),this.dragging=!0;var e=t.dataTransfer,i=void 0===e?{}:e;if(this.noDrop||this.disabled||!this.dropAllowed)return i.dropEffect="none",void(this.dropAllowed=!1);i.dropEffect="copy"},onDragover:function(t){Bs(t),this.dragging=!0;var e=t.dataTransfer,i=void 0===e?{}:e;if(this.noDrop||this.disabled||!this.dropAllowed)return i.dropEffect="none",void(this.dropAllowed=!1);i.dropEffect="copy"},onDragleave:function(t){var e=this;Bs(t),this.$nextTick((function(){e.dragging=!1,e.dropAllowed=!e.noDrop}))},onDrop:function(t){var e=this;Bs(t),this.dragging=!1,this.noDrop||this.disabled||!this.dropAllowed?this.$nextTick((function(){e.dropAllowed=!e.noDrop})):this.onChange(t)}},render:function(t){var e=this.custom,i=this.plain,n=this.size,o=this.dragging,r=this.stateClass,s=this.bvAttrs,l=t("input",{class:[{"form-control-file":i,"custom-file-input":e,focus:e&&this.hasFocus},r],style:e?{zIndex:-5}:{},attrs:this.computedAttrs,on:{change:this.onChange,focusin:this.focusHandler,focusout:this.focusHandler,reset:this.reset},ref:"input"});if(i)return l;var c=t("label",{staticClass:"custom-file-label",class:{dragging:o},attrs:{for:this.safeId(),"data-browse":this.browseText||null}},[t("span",{staticClass:"d-block form-file-text",style:{pointerEvents:"none"}},[this.labelContent])]);return t("div",{staticClass:"custom-file b-form-file",class:[a({},"b-custom-control-".concat(n),n),r,s.class],style:s.style,attrs:{id:this.safeId("_BV_file_outer_")},on:{dragenter:this.onDragenter,dragover:this.onDragover,dragleave:this.onDragleave,drop:this.onDrop}},[l,c])}}),Bp=me({components:{BFormFile:$p,BFile:$p}}),_p=function(t){return"\\"+t},Dp=function(t){var e=(t=vr(t)).length,i=t.charCodeAt(0);return t.split("").reduce((function(n,o,r){var s=t.charCodeAt(r);return 0===s?n+"�":127===s||s>=1&&s<=31||0===r&&s>=48&&s<=57||1===r&&s>=48&&s<=57&&45===i?n+_p("".concat(s.toString(16)," ")):0===r&&45===s&&1===e?n+_p(o):s>=128||45===s||95===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?n+o:n+_p(o)}),"")},Fp=["auto","start","end","center","baseline","stretch"],Ip=is((function(t,e,i){var n=t;if(!Pt(i)&&!1!==i)return e&&(n+="-".concat(e)),"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),gr(n)):gr(n)})),Pp=Wt(null),Op={name:Ye,functional:!0,get props(){return delete this.props,this.props=(t=ls().filter(ne),e=t.reduce((function(t,e){return t[e]=hs(So),t}),Wt(null)),i=t.reduce((function(t,e){return t[ds(e,"offset")]=hs(_o),t}),Wt(null)),n=t.reduce((function(t,e){return t[ds(e,"order")]=hs(_o),t}),Wt(null)),Pp=Gt(Wt(null),{col:Kt(e),offset:Kt(i),order:Kt(n)}),vs(ee(c(c(c(c({},e),i),n),{},{alignSelf:hs(go,null,(function(t){return nr(Fp,t)})),col:hs(ho,!1),cols:hs(_o),offset:hs(_o),order:hs(_o),tag:hs(go,"div")})),Ye));var t,e,i,n},render:function(t,e){var i,n=e.props,o=e.data,r=e.children,s=n.cols,l=n.offset,c=n.order,u=n.alignSelf,d=[];for(var h in Pp)for(var f=Pp[h],p=0;p<f.length;p++){var m=Ip(h,f[p].replace(h,""),n[f[p]]);m&&d.push(m)}var v=d.some((function(t){return kt.test(t)}));return d.push((a(i={col:n.col||!v&&!s},"col-".concat(s),s),a(i,"offset-".concat(l),l),a(i,"order-".concat(c),c),a(i,"align-self-".concat(u),u),i)),t(n.tag,F(o,{class:d}),r)}},Vp=["input","select","textarea"],Ep=Vp.map((function(t){return"".concat(t,":not([disabled])")})).join(),Lp=[].concat(Vp,["a","button","label"]),Ap={name:ui,mixins:[pc,_f,Cs],get props(){return delete this.props,this.props=vs(ee(c(c(c(c({},fc),Bf),ls().reduce((function(t,e){return t[ds(e,"contentCols")]=hs(So),t[ds(e,"labelAlign")]=hs(go),t[ds(e,"labelCols")]=hs(So),t}),Wt(null))),{},{description:hs(go),disabled:hs(ho,!1),feedbackAriaLive:hs(go,"assertive"),invalidFeedback:hs(go),label:hs(go),labelClass:hs(To),labelFor:hs(go),labelSize:hs(go),labelSrOnly:hs(ho,!1),tooltip:hs(ho,!1),validFeedback:hs(go),validated:hs(ho,!1)})),ui)},data:function(){return{ariaDescribedby:null}},computed:{contentColProps:function(){return this.getColProps(this.$props,"content")},labelAlignClasses:function(){return this.getAlignClasses(this.$props,"label")},labelColProps:function(){return this.getColProps(this.$props,"label")},isHorizontal:function(){return Kt(this.contentColProps).length>0||Kt(this.labelColProps).length>0}},watch:{ariaDescribedby:function(t,e){t!==e&&this.updateAriaDescribedby(t,e)}},mounted:function(){var t=this;this.$nextTick((function(){t.updateAriaDescribedby(t.ariaDescribedby)}))},methods:{getAlignClasses:function(t,e){return ls().reduce((function(i,n){var o=t[ds(n,"".concat(e,"Align"))]||null;return o&&i.push(["text",n,o].filter(ne).join("-")),i}),[])},getColProps:function(t,e){return ls().reduce((function(i,n){var o=t[ds(n,"".concat(e,"Cols"))];return Vt(o=""===o||(o||!1))||"auto"===o||(o=(o=lr(o,0))>0&&o),o&&(i[n||(Vt(o)?"col":"cols")]=o),i}),{})},updateAriaDescribedby:function(t,e){var i=this.labelFor;if(M&&i){var n=Or("#".concat(Dp(i)),this.$refs.content);if(n){var o="aria-describedby",r=(t||"").split(ut),s=(e||"").split(ut),a=(jr(n,o)||"").split(ut).filter((function(t){return!nr(s,t)})).concat(r).filter((function(t,e,i){return i.indexOf(t)===e})).filter(ne).join(" ").trim();a?zr(n,o,a):Nr(n,o)}}},onLegendClick:function(t){if(!this.labelFor){var e=t.target,i=e?e.tagName:"";if(-1===Lp.indexOf(i)){var n=Pr(Ep,this.$refs.content).filter(Dr);1===n.length&&ts(n[0])}}}},render:function(t){var e=this.computedState,i=this.feedbackAriaLive,n=this.isHorizontal,o=this.labelFor,r=this.normalizeSlot,s=this.safeId,a=this.tooltip,l=s(),u=!o,d=t(),h=r(jo)||this.label,f=h?s("_BV_label_"):null;if(h||n){var p=this.labelSize,m=this.labelColProps,v=u?"legend":"label";this.labelSrOnly?(h&&(d=t(v,{class:"sr-only",attrs:{id:f,for:o||null}},[h])),d=t(n?Op:"div",{props:n?m:{}},[d])):d=t(n?Op:v,{on:u?{click:this.onLegendClick}:{},props:n?c(c({},m),{},{tag:v}):{},attrs:{id:f,for:o||null,tabindex:u?"-1":null},class:[u?"bv-no-focus-ring":"",n||u?"col-form-label":"",!n&&u?"pt-0":"",n||u?"":"d-block",p?"col-form-label-".concat(p):"",this.labelAlignClasses,this.labelClass]},[h])}var b=t(),g=r("invalid-feedback")||this.invalidFeedback,y=g?s("_BV_feedback_invalid_"):null;g&&(b=t(ff,{props:{ariaLive:i,id:y,role:i?"alert":null,state:e,tooltip:a},attrs:{tabindex:g?"-1":null}},[g]));var w=t(),T=r("valid-feedback")||this.validFeedback,C=T?s("_BV_feedback_valid_"):null;T&&(w=t(mf,{props:{ariaLive:i,id:C,role:i?"alert":null,state:e,tooltip:a},attrs:{tabindex:T?"-1":null}},[T]));var x=t(),S=r("description")||this.description,k=S?s("_BV_description_"):null;S&&(x=t(df,{attrs:{id:k,tabindex:"-1"}},[S]));var $=this.ariaDescribedby=[k,!1===e?y:null,!0===e?C:null].filter(ne).join(" ")||null,B=t(n?Op:"div",{props:n?this.contentColProps:{},ref:"content"},[r(Ao,{ariaDescribedby:$,descriptionId:k,id:l,labelId:f})||t(),b,w,x]);return t(u?"fieldset":n?bf:"div",{staticClass:"form-group",class:[{"was-validated":this.validated},this.stateClass],attrs:{id:l,disabled:u?this.disabled:null,role:u?null:"group","aria-invalid":this.computedAriaInvalid,"aria-labelledby":u&&n?f:null}},n&&u?[t(bf,[d,B])]:[d,B])}},Rp=me({components:{BFormGroup:Ap,BFormFieldset:Ap}}),Mp=i.default.extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}),Hp=ys("value",{type:_o,defaultValue:"",event:"update"}),zp=Hp.mixin,Np=Hp.props,jp=Hp.prop,Gp=Hp.event,Wp=vs(ee(c(c({},Np),{},{ariaInvalid:hs(ko,!1),autocomplete:hs(go),debounce:hs(_o,0),formatter:hs(po),lazy:hs(ho,!1),lazyFormatter:hs(ho,!1),number:hs(ho,!1),placeholder:hs(go),plaintext:hs(ho,!1),readonly:hs(ho,!1),trim:hs(ho,!1)})),"formTextControls"),Yp=i.default.extend({mixins:[zp],props:Wp,data:function(){var t=this[jp];return{localValue:vr(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,i="range"===e,n="color"===e;return[{"custom-range":i,"form-control-plaintext":t&&!i&&!n,"form-control":n||!t&&!i},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Us(lr(this.debounce,0),0)},hasFormatter:function(){return gs(this.formatter)}},watch:a({},jp,(function(t){var e=vr(t),i=this.modifyValue(t);e===this.localValue&&i===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=i)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(oo,this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=vr(t),!this.hasFormatter||this.lazyFormatter&&!i||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=vr(t),this.trim&&(t=t.trim()),this.number&&(t=cr(t,t)),t},updateValue:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||i){this.clearDebounce();var o=function(){if((t=e.modifyValue(t))!==e.vModelValue)e.vModelValue=t,e.$emit(Gp,t);else if(e.hasFormatter){var i=e.$refs.input;i&&t!==i.value&&(i.value=t)}},r=this.computedDebounce;r>0&&!n&&!i?this.$_inputDebounceTimer=setTimeout(o,r):o()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?Bs(t,{propagation:!1}):(this.localValue=i,this.updateValue(i),this.$emit(jn,i))}},onChange:function(t){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?Bs(t,{propagation:!1}):(this.localValue=i,this.updateValue(i,!0),this.$emit($n,i))},onBlur:function(t){var e=t.target.value,i=this.formatValue(e,t,!0);!1!==i&&(this.localValue=vr(this.modifyValue(i)),this.updateValue(i,!0)),this.$emit("blur",t)},focus:function(){this.disabled||ts(this.$el)},blur:function(){this.disabled||es(this.$el)}}}),Up=i.default.extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}),qp=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],Kp=vs(ee(c(c(c(c(c(c({},fc),Tf),kf),Bf),Wp),{},{list:hs(go),max:hs(_o),min:hs(_o),noWheel:hs(ho,!1),step:hs(_o),type:hs(go,"text",(function(t){return nr(qp,t)}))})),di),Xp=i.default.extend({name:di,mixins:[Qa,pc,Cf,$f,_f,Yp,Mp,Up],props:Kp,computed:{localType:function(){var t=this.type;return nr(qp,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,i=this.form,n=this.disabled,o=this.placeholder,r=this.required,s=this.min,a=this.max,l=this.step;return{id:this.safeId(),name:e,form:i,type:t,disabled:n,placeholder:o,required:r,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:s,max:a,step:l,list:"password"!==t?this.list:null,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return c(c({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;$s(t,e,"focus",this.onWheelFocus),$s(t,e,"blur",this.onWheelBlur),t||ks(document,"wheel",this.stopWheel)},onWheelFocus:function(){Ss(document,"wheel",this.stopWheel)},onWheelBlur:function(){ks(document,"wheel",this.stopWheel)},stopWheel:function(t){Bs(t,{propagation:!1}),es(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}}),Zp=me({components:{BFormInput:Xp,BInput:Xp}}),Jp=vs(qf,pi),Qp=i.default.extend({name:pi,mixins:[Kf],provide:function(){return{bvRadioGroup:this}},props:Jp,computed:{isRadioGroup:function(){return!0}}}),tm=me({components:{BFormRadio:zf,BRadio:zf,BFormRadioGroup:Qp,BRadioGroup:Qp}}),em=ys("value",{type:_o,event:$n}),im=em.mixin,nm=em.props,om=em.prop,rm=em.event,sm=function(t){return Us(3,lr(t,5))},am=function(t,e,i){return Us(Ys(t,i),e)},lm=i.default.extend({name:"BVFormRatingStar",mixins:[Cs],props:{disabled:hs(ho,!1),focused:hs(ho,!1),hasClear:hs(ho,!1),rating:hs(mo,0),readonly:hs(ho,!1),star:hs(mo,0),variant:hs(go)},methods:{onClick:function(t){this.disabled||this.readonly||(Bs(t,{propagation:!1}),this.$emit(Qn,this.star))}},render:function(t){var e=this.rating,i=this.star,n=this.focused,o=this.hasClear,r=this.variant,s=this.disabled,a=this.readonly,l=o?0:1,c=e>=i?"full":e>=i-.5?"half":"empty",u={variant:r,disabled:s,readonly:a};return t("span",{staticClass:"b-rating-star",class:{focused:n&&e===i||!lr(e)&&i===l,"b-rating-star-empty":"empty"===c,"b-rating-star-half":"half"===c,"b-rating-star-full":"full"===c},attrs:{tabindex:s||a?null:"-1"},on:{click:this.onClick}},[t("span",{staticClass:"b-rating-icon"},[this.normalizeSlot(c,u)])])}}),cm=vs(ee(c(c(c(c(c({},fc),nm),Qt(Tf,["required","autofocus"])),kf),{},{color:hs(go),iconClear:hs(go,"x"),iconEmpty:hs(go,"star"),iconFull:hs(go,"star-fill"),iconHalf:hs(go,"star-half"),inline:hs(ho,!1),locale:hs(Co),noBorder:hs(ho,!1),precision:hs(_o),readonly:hs(ho,!1),showClear:hs(ho,!1),showValue:hs(ho,!1),showValueMax:hs(ho,!1),stars:hs(_o,5,(function(t){return lr(t)>=3})),variant:hs(go)})),mi),um=i.default.extend({name:mi,components:{BIconStar:Fa,BIconStarHalf:Pa,BIconStarFill:Ia,BIconX:Oa},mixins:[pc,im,$f],props:cm,data:function(){var t=cr(this[om],null),e=sm(this.stars);return{localValue:It(t)?null:am(t,0,e),hasFocus:!1}},computed:{computedStars:function(){return sm(this.stars)},computedRating:function(){var t=cr(this.localValue,0),e=lr(this.precision,3);return am(cr(t.toFixed(e)),0,this.computedStars)},computedLocale:function(){var t=or(this.locale).filter(ne);return new Intl.NumberFormat(t).resolvedOptions().locale},isInteractive:function(){return!this.disabled&&!this.readonly},isRTL:function(){return hc(this.computedLocale)},formattedRating:function(){var t=lr(this.precision),e=this.showValueMax,i=this.computedLocale,n={notation:"standard",minimumFractionDigits:isNaN(t)?0:t,maximumFractionDigits:isNaN(t)?3:t},o=this.computedStars.toLocaleString(i),r=this.localValue;return r=It(r)?e?"-":"":r.toLocaleString(i,n),e?"".concat(r,"/").concat(o):r}},watch:(xh={},a(xh,om,(function(t,e){if(t!==e){var i=cr(t,null);this.localValue=It(i)?null:am(i,0,this.computedStars)}})),a(xh,"localValue",(function(t,e){t!==e&&t!==(this.value||0)&&this.$emit(rm,t||null)})),a(xh,"disabled",(function(t){t&&(this.hasFocus=!1,this.blur())})),xh),methods:{focus:function(){this.disabled||ts(this.$el)},blur:function(){this.disabled||es(this.$el)},onKeydown:function(t){var e=t.keyCode;if(this.isInteractive&&nr([Na,Ra,ja,Wa],e)){Bs(t,{propagation:!1});var i=lr(this.localValue,0),n=this.showClear?0:1,o=this.computedStars,r=this.isRTL?-1:1;e===Na?this.localValue=am(i-r,n,o)||null:e===ja?this.localValue=am(i+r,n,o):e===Ra?this.localValue=am(i-1,n,o)||null:e===Wa&&(this.localValue=am(i+1,n,o))}},onSelected:function(t){this.isInteractive&&(this.localValue=t)},onFocus:function(t){this.hasFocus=!!this.isInteractive&&"focus"===t.type},renderIcon:function(t){return this.$createElement(Aa,{props:{icon:t,variant:this.disabled||this.color?null:this.variant||null}})},iconEmptyFn:function(){return this.renderIcon(this.iconEmpty)},iconHalfFn:function(){return this.renderIcon(this.iconHalf)},iconFullFn:function(){return this.renderIcon(this.iconFull)},iconClearFn:function(){return this.$createElement(Aa,{props:{icon:this.iconClear}})}},render:function(t){var e=this,i=this.disabled,n=this.readonly,o=this.name,r=this.form,s=this.inline,a=this.variant,l=this.color,c=this.noBorder,u=this.hasFocus,d=this.computedRating,h=this.computedStars,f=this.formattedRating,p=this.showClear,m=this.isRTL,v=this.isInteractive,b=this.$scopedSlots,g=[];if(p&&!i&&!n){var y=t("span",{staticClass:"b-rating-icon"},[(b["icon-clear"]||this.iconClearFn)()]);g.push(t("span",{staticClass:"b-rating-star b-rating-star-clear flex-grow-1",class:{focused:u&&0===d},attrs:{tabindex:v?"-1":null},on:{click:function(){return e.onSelected(null)}},key:"clear"},[y]))}for(var w=0;w<h;w++){var T=w+1;g.push(t(lm,{staticClass:"flex-grow-1",style:l&&!i?{color:l}:{},props:{rating:d,star:T,variant:i?null:a||null,disabled:i,readonly:n,focused:u,hasClear:p},on:{selected:this.onSelected},scopedSlots:{empty:b["icon-empty"]||this.iconEmptyFn,half:b["icon-half"]||this.iconHalfFn,full:b["icon-full"]||this.iconFullFn},key:w}))}return o&&g.push(t("input",{attrs:{type:"hidden",value:It(this.localValue)?"":d,name:o,form:r||null},key:"hidden"})),this.showValue&&g.push(t("b",{staticClass:"b-rating-value flex-grow-1",attrs:{"aria-hidden":"true"},key:"value"},vr(f))),t("output",{staticClass:"b-rating form-control align-items-center",class:[{"d-inline-flex":s,"d-flex":!s,"border-0":c,disabled:i,readonly:!i&&n},this.sizeFormClass],attrs:{id:this.safeId(),dir:m?"rtl":"ltr",tabindex:i?null:"0",disabled:i,role:"slider","aria-disabled":i?"true":null,"aria-readonly":!i&&n?"true":null,"aria-live":"off","aria-valuemin":p?"0":"1","aria-valuemax":vr(h),"aria-valuenow":d?vr(d):null},on:{keydown:this.onKeydown,focus:this.onFocus,blur:this.onFocus}},g)}}),dm=me({components:{BFormRating:um,BRating:um}}),hm=ys("value"),fm=hm.mixin,pm=hm.props,mm=hm.prop,vm=hm.event,bm=vs(ee(c(c({},sf),{},{labelField:hs(go,"label"),optionsField:hs(go,"options")})),"formOptions"),gm=i.default.extend({mixins:[af],props:bm,methods:{normalizeOption:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Ht(t)){var i=re(t,this.valueField),n=re(t,this.textField),o=re(t,this.optionsField,null);return It(o)?{value:Ft(i)?e||n:i,text:String(Ft(n)?e:n),html:re(t,this.htmlField),disabled:Boolean(re(t,this.disabledField))}:{label:String(re(t,this.labelField)||n),options:this.normalizeOptions(o)}}return{value:e||t,text:String(t),disabled:!1}}}}),ym=vs({disabled:hs(ho,!1),value:hs(co,void 0,!0)},gi),wm=i.default.extend({name:gi,functional:!0,props:ym,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.value;return t("option",F(n,{attrs:{disabled:i.disabled},domProps:{value:r}}),o)}}),Tm=vs(ee(c(c({},sf),{},{label:hs(go,void 0,!0)})),yi),Cm=i.default.extend({name:yi,mixins:[Cs,af],props:Tm,render:function(t){var e=this.label,i=this.formOptions.map((function(e,i){var n=e.value,o=e.text,r=e.html,s=e.disabled;return t(wm,{attrs:{value:n,disabled:s},domProps:Fl(r,o),key:"option_".concat(i)})}));return t("optgroup",{attrs:{label:e}},[this.normalizeSlot(Ho),i,this.normalizeSlot()])}}),xm=vs(ee(c(c(c(c(c(c(c({},fc),pm),Tf),xf),kf),Bf),{},{ariaInvalid:hs(ko,!1),multiple:hs(ho,!1),selectSize:hs(mo,0)})),bi),Sm=i.default.extend({name:bi,mixins:[pc,fm,Cf,$f,_f,Sf,gm,Cs],props:xm,data:function(){return{localValue:this[mm]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(t){this.localValue=t},localValue:function(){this.$emit(vm,this.localValue)}},methods:{focus:function(){ts(this.$refs.input)},blur:function(){es(this.$refs.input)},onChange:function(t){var e=this,i=t.target,n=ir(i.options).filter((function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));this.localValue=i.multiple?n:n[0],this.$nextTick((function(){e.$emit($n,e.localValue)}))}},render:function(t){var e=this.name,i=this.disabled,n=this.required,o=this.computedSelectSize,r=this.localValue,s=this.formOptions.map((function(e,i){var n=e.value,o=e.label,r=e.options,s=e.disabled,a="option_".concat(i);return Rt(r)?t(Cm,{props:{label:o,options:r},key:a}):t(wm,{props:{value:n,disabled:s},domProps:Fl(e.html,e.text),key:a})}));return t("select",{class:this.inputClass,attrs:{id:this.safeId(),name:e,form:this.form||null,multiple:this.multiple||null,size:o,disabled:i,required:n,"aria-required":n?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:r}],ref:"input"},[this.normalizeSlot(Ho),s,this.normalizeSlot()])}}),km=me({components:{BFormSelect:Sm,BFormSelectOption:wm,BFormSelectOptionGroup:Cm,BSelect:Sm,BSelectOption:wm,BSelectOptionGroup:Cm}}),$m=ys("value",{type:xo}),Bm=$m.mixin,_m=$m.props,Dm=$m.prop,Fm=$m.event,Im=[Wa,Ra,za,Ma,33,34],Pm=vs(ee(c(c(c(c(c(c({},fc),_m),Qt(Tf,["required","autofocus"])),kf),Bf),{},{ariaControls:hs(go),ariaLabel:hs(go),formatterFn:hs(po),inline:hs(ho,!1),labelDecrement:hs(go,"Decrement"),labelIncrement:hs(go,"Increment"),locale:hs(Co),max:hs(_o,100),min:hs(_o,1),placeholder:hs(go),readonly:hs(ho,!1),repeatDelay:hs(_o,500),repeatInterval:hs(_o,100),repeatStepMultiplier:hs(_o,4),repeatThreshold:hs(_o,10),step:hs(_o,1),vertical:hs(ho,!1),wrap:hs(ho,!1)})),wi),Om=i.default.extend({name:wi,mixins:[Za,pc,Bm,$f,_f,Cs],inheritAttrs:!1,props:Pm,data:function(){return{localValue:cr(this[Dm],null),hasFocus:!1}},computed:{spinId:function(){return this.safeId()},computedInline:function(){return this.inline&&!this.vertical},computedReadonly:function(){return this.readonly&&!this.disabled},computedRequired:function(){return this.required&&!this.computedReadonly&&!this.disabled},computedStep:function(){return cr(this.step,1)},computedMin:function(){return cr(this.min,1)},computedMax:function(){var t=cr(this.max,100),e=this.computedStep,i=this.computedMin;return Xs((t-i)/e)*e+i},computedDelay:function(){var t=lr(this.repeatDelay,0);return t>0?t:500},computedInterval:function(){var t=lr(this.repeatInterval,0);return t>0?t:100},computedThreshold:function(){return Us(lr(this.repeatThreshold,10),1)},computedStepMultiplier:function(){return Us(lr(this.repeatStepMultiplier,4),1)},computedPrecision:function(){var t=this.computedStep;return Xs(t)===t?0:(t.toString().split(".")[1]||"").length},computedMultiplier:function(){return Zs(10,this.computedPrecision||0)},valueAsFixed:function(){var t=this.localValue;return It(t)?"":t.toFixed(this.computedPrecision)},computedLocale:function(){var t=or(this.locale).filter(ne);return new Intl.NumberFormat(t).resolvedOptions().locale},computedRTL:function(){return hc(this.computedLocale)},defaultFormatter:function(){var t=this.computedPrecision;return new Intl.NumberFormat(this.computedLocale,{style:"decimal",useGrouping:!1,minimumIntegerDigits:1,minimumFractionDigits:t,maximumFractionDigits:t,notation:"standard"}).format},computedFormatter:function(){var t=this.formatterFn;return gs(t)?t:this.defaultFormatter},computedAttrs:function(){return c(c({},this.bvAttrs),{},{role:"group",lang:this.computedLocale,tabindex:this.disabled?null:"-1",title:this.ariaLabel})},computedSpinAttrs:function(){var t=this.spinId,e=this.localValue,i=this.computedRequired,n=this.disabled,o=this.state,r=this.computedFormatter,s=!It(e);return c(c({dir:this.computedRTL?"rtl":"ltr"},this.bvAttrs),{},{id:t,role:"spinbutton",tabindex:n?null:"0","aria-live":"off","aria-label":this.ariaLabel||null,"aria-controls":this.ariaControls||null,"aria-invalid":!1===o||!s&&i?"true":null,"aria-required":i?"true":null,"aria-valuemin":vr(this.computedMin),"aria-valuemax":vr(this.computedMax),"aria-valuenow":s?e:null,"aria-valuetext":s?r(e):null})}},watch:(Sh={},a(Sh,Dm,(function(t){this.localValue=cr(t,null)})),a(Sh,"localValue",(function(t){this.$emit(Fm,t)})),a(Sh,"disabled",(function(t){t&&this.clearRepeat()})),a(Sh,"readonly",(function(t){t&&this.clearRepeat()})),Sh),created:function(){this.$_autoDelayTimer=null,this.$_autoRepeatTimer=null,this.$_keyIsDown=!1},beforeDestroy:function(){this.clearRepeat()},deactivated:function(){this.clearRepeat()},methods:{focus:function(){this.disabled||ts(this.$refs.spinner)},blur:function(){this.disabled||es(this.$refs.spinner)},emitChange:function(){this.$emit($n,this.localValue)},stepValue:function(t){var e=this.localValue;if(!this.disabled&&!It(e)){var i=this.computedStep*t,n=this.computedMin,o=this.computedMax,r=this.computedMultiplier,s=this.wrap;e=Js((e-n)/i)*i+n+i,e=Js(e*r)/r,this.localValue=e>o?s?n:o:e<n?s?o:n:e}},onFocusBlur:function(t){this.disabled?this.hasFocus=!1:this.hasFocus="focus"===t.type},stepUp:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.localValue;It(e)?this.localValue=this.computedMin:this.stepValue(1*t)},stepDown:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.localValue;It(e)?this.localValue=this.wrap?this.computedMax:this.computedMin:this.stepValue(-1*t)},onKeydown:function(t){var e=t.keyCode,i=t.altKey,n=t.ctrlKey,o=t.metaKey;if(!(this.disabled||this.readonly||i||n||o)&&nr(Im,e)){if(Bs(t,{propagation:!1}),this.$_keyIsDown)return;this.resetTimers(),nr([Wa,Ra],e)?(this.$_keyIsDown=!0,e===Wa?this.handleStepRepeat(t,this.stepUp):e===Ra&&this.handleStepRepeat(t,this.stepDown)):33===e?this.stepUp(this.computedStepMultiplier):34===e?this.stepDown(this.computedStepMultiplier):e===za?this.localValue=this.computedMin:e===Ma&&(this.localValue=this.computedMax)}},onKeyup:function(t){var e=t.keyCode,i=t.altKey,n=t.ctrlKey,o=t.metaKey;this.disabled||this.readonly||i||n||o||nr(Im,e)&&(Bs(t,{propagation:!1}),this.resetTimers(),this.$_keyIsDown=!1,this.emitChange())},handleStepRepeat:function(t,e){var i=this,n=t||{},o=n.type,r=n.button;if(!this.disabled&&!this.readonly){if("mousedown"===o&&r)return;this.resetTimers(),e(1);var s=this.computedThreshold,a=this.computedStepMultiplier,l=this.computedDelay,c=this.computedInterval;this.$_autoDelayTimer=setTimeout((function(){var t=0;i.$_autoRepeatTimer=setInterval((function(){e(t<s?1:a),t++}),c)}),l)}},onMouseup:function(t){var e=t||{},i=e.type,n=e.button;"mouseup"===i&&n||(Bs(t,{propagation:!1}),this.resetTimers(),this.setMouseup(!1),this.emitChange())},setMouseup:function(t){try{$s(t,document.body,"mouseup",this.onMouseup,!1),$s(t,document.body,"touchend",this.onMouseup,!1)}catch(t){}},resetTimers:function(){clearTimeout(this.$_autoDelayTimer),clearInterval(this.$_autoRepeatTimer),this.$_autoDelayTimer=null,this.$_autoRepeatTimer=null},clearRepeat:function(){this.resetTimers(),this.setMouseup(!1),this.$_keyIsDown=!1}},render:function(t){var e=this,i=this.spinId,n=this.localValue,o=this.computedInline,r=this.computedReadonly,s=this.vertical,a=this.disabled,l=this.computedFormatter,c=!It(n),u=function(n,o,l,c,u,d,h){var f=t(l,{props:{scale:e.hasFocus?1.5:1.25},attrs:{"aria-hidden":"true"}}),p={hasFocus:e.hasFocus},m=function(t){a||r||(Bs(t,{propagation:!1}),e.setMouseup(!0),ts(t.currentTarget),e.handleStepRepeat(t,n))};return t("button",{staticClass:"btn btn-sm border-0 rounded-0",class:{"py-0":!s},attrs:{tabindex:"-1",type:"button",disabled:a||r||d,"aria-disabled":a||r||d?"true":null,"aria-controls":i,"aria-label":o||null,"aria-keyshortcuts":u||null},on:{mousedown:m,touchstart:m},key:c||null,ref:c},[e.normalizeSlot(h,p)||f])},d=u(this.stepUp,this.labelIncrement,Da,"inc","ArrowUp",!1,"increment"),h=u(this.stepDown,this.labelDecrement,Ba,"dec","ArrowDown",!1,"decrement"),f=t();this.name&&!a&&(f=t("input",{attrs:{type:"hidden",name:this.name,form:this.form||null,value:this.valueAsFixed},key:"hidden"}));var p=t("output",{staticClass:"flex-grow-1",class:{"d-flex":s,"align-self-center":!s,"align-items-center":s,"border-top":s,"border-bottom":s,"border-left":!s,"border-right":!s},attrs:this.computedSpinAttrs,key:"output",ref:"spinner"},[t("bdi",c?l(n):this.placeholder||"")]);return t("div",{staticClass:"b-form-spinbutton form-control",class:[{disabled:a,readonly:r,focus:this.hasFocus,"d-inline-flex":o||s,"d-flex":!o&&!s,"align-items-stretch":!s,"flex-column":s},this.sizeFormClass,this.stateClass],attrs:this.computedAttrs,on:{keydown:this.onKeydown,keyup:this.onKeyup,"!focus":this.onFocusBlur,"!blur":this.onFocusBlur}},s?[d,f,p,h]:[h,f,p,d])}}),Vm=me({components:{BFormSpinbutton:Om,BSpinbutton:Om}}),Em=vs(ee(c(c({},fc),{},{disabled:hs(ho,!1),noRemove:hs(ho,!1),pill:hs(ho,!1),removeLabel:hs(go,"Remove tag"),tag:hs(go,"span"),title:hs(go),variant:hs(go,"secondary")})),Ti),Lm=i.default.extend({name:Ti,mixins:[pc,Cs],props:Em,methods:{onRemove:function(t){var e=t.type,i=t.keyCode;this.disabled||"click"!==e&&("keydown"!==e||46!==i)||this.$emit("remove")}},render:function(t){var e=this.title,i=this.tag,n=this.variant,o=this.pill,r=this.disabled,s=this.safeId(),a=this.safeId("_taglabel_"),l=t();this.noRemove||r||(l=t(Ps,{staticClass:"b-form-tag-remove",props:{ariaLabel:this.removeLabel},attrs:{"aria-controls":s,"aria-describedby":a,"aria-keyshortcuts":"Delete"},on:{click:this.onRemove,keydown:this.onRemove}}));var c=t("span",{staticClass:"b-form-tag-content flex-grow-1 text-truncate",attrs:{id:a}},this.normalizeSlot()||e);return t(Bl,{staticClass:"b-form-tag d-inline-flex align-items-baseline mw-100",class:{disabled:r},props:{tag:i,variant:n,pill:o},attrs:{id:s,title:e||null,"aria-labelledby":a}},[c,l])}}),Am=ys("value",{type:uo,defaultValue:[]}),Rm=Am.mixin,Mm=Am.props,Hm=Am.prop,zm=Am.event,Nm=["text","email","tel","url","number"],jm=[".b-form-tag","button","input","select"].join(" "),Gm=function(t){return or(t).map((function(t){return br(vr(t))})).filter((function(t,e,i){return t.length>0&&i.indexOf(t)===e}))},Wm=function(t){return Et(t)?t:Nt(t)&&t.target.value||""},Ym=vs(ee(c(c(c(c(c(c({},fc),Mm),Tf),kf),Bf),{},{addButtonText:hs(go,"Add"),addButtonVariant:hs(go,"outline-secondary"),addOnChange:hs(ho,!1),duplicateTagText:hs(go,"Duplicate tag(s)"),ignoreInputFocusSelector:hs(Co,jm),inputAttrs:hs(vo,{}),inputClass:hs(To),inputId:hs(go),inputType:hs(go,"text",(function(t){return nr(Nm,t)})),invalidTagText:hs(go,"Invalid tag(s)"),limit:hs(mo),limitTagsText:hs(go,"Tag limit reached"),noAddOnEnter:hs(ho,!1),noOuterFocus:hs(ho,!1),noTagRemove:hs(ho,!1),placeholder:hs(go,"Add tag..."),removeOnDelete:hs(ho,!1),separator:hs(Co),tagClass:hs(To),tagPills:hs(ho,!1),tagRemoveLabel:hs(go,"Remove tag"),tagRemovedLabel:hs(go,"Tag removed"),tagValidator:hs(po),tagVariant:hs(go,"secondary")})),Ci),Um=i.default.extend({name:Ci,mixins:[pc,Rm,Cf,$f,_f,Cs],props:Ym,data:function(){return{hasFocus:!1,newTag:"",tags:[],removedTags:[],tagsState:{all:[],valid:[],invalid:[],duplicate:[]}}},computed:{computedInputId:function(){return this.inputId||this.safeId("__input__")},computedInputType:function(){return nr(Nm,this.inputType)?this.inputType:"text"},computedInputAttrs:function(){var t=this.disabled,e=this.form;return c(c({},this.inputAttrs),{},{id:this.computedInputId,value:this.newTag,disabled:t,form:e})},computedInputHandlers:function(){return{input:this.onInputInput,change:this.onInputChange,keydown:this.onInputKeydown,reset:this.reset}},computedSeparator:function(){return or(this.separator).filter(Et).filter(ne).join("")},computedSeparatorRegExp:function(){var t=this.computedSeparator;return t?new RegExp("[".concat(mr(t).replace(ct,"\\s"),"]+")):null},computedJoiner:function(){var t=this.computedSeparator.charAt(0);return" "!==t?"".concat(t," "):t},computeIgnoreInputFocusSelector:function(){return or(this.ignoreInputFocusSelector).filter(ne).join(",").trim()},disableAddButton:function(){var t=this,e=br(this.newTag);return""===e||!this.splitTags(e).some((function(e){return!nr(t.tags,e)&&t.validateTag(e)}))},duplicateTags:function(){return this.tagsState.duplicate},hasDuplicateTags:function(){return this.duplicateTags.length>0},invalidTags:function(){return this.tagsState.invalid},hasInvalidTags:function(){return this.invalidTags.length>0},isLimitReached:function(){var t=this.limit;return Lt(t)&&t>=0&&this.tags.length>=t}},watch:(kh={},a(kh,Hm,(function(t){this.tags=Gm(t)})),a(kh,"tags",(function(t,e){Ua(t,this[Hm])||this.$emit(zm,t),Ua(t,e)||(t=or(t).filter(ne),e=or(e).filter(ne),this.removedTags=e.filter((function(e){return!nr(t,e)})))})),a(kh,"tagsState",(function(t,e){Ua(t,e)||this.$emit("tag-state",t.valid,t.invalid,t.duplicate)})),kh),created:function(){this.tags=Gm(this[Hm])},mounted:function(){var t=this,e=Er("form",this.$el);e&&(Ss(e,"reset",this.reset,ao),this.$on(oo,(function(){ks(e,"reset",t.reset,ao)})))},methods:{addTag:function(t){if(t=Et(t)?t:this.newTag,!this.disabled&&""!==br(t)&&!this.isLimitReached){var e=this.parseTags(t);if(e.valid.length>0||0===e.all.length)if(Vr(this.getInput(),"select"))this.newTag="";else{var i=[].concat(T(e.invalid),T(e.duplicate));this.newTag=e.all.filter((function(t){return nr(i,t)})).join(this.computedJoiner).concat(i.length>0?this.computedJoiner.charAt(0):"")}e.valid.length>0&&(this.tags=or(this.tags,e.valid)),this.tagsState=e,this.focus()}},removeTag:function(t){var e=this;this.disabled||(this.tags=this.tags.filter((function(e){return e!==t})),this.$nextTick((function(){e.focus()})))},reset:function(){var t=this;this.newTag="",this.tags=[],this.$nextTick((function(){t.removedTags=[],t.tagsState={all:[],valid:[],invalid:[],duplicate:[]}}))},onInputInput:function(t){if(!(this.disabled||Nt(t)&&t.target.composing)){var e=Wm(t),i=this.computedSeparatorRegExp;this.newTag!==e&&(this.newTag=e),e=vr(e).replace(ft,""),i&&i.test(e.slice(-1))?this.addTag():this.tagsState=""===e?{all:[],valid:[],invalid:[],duplicate:[]}:this.parseTags(e)}},onInputChange:function(t){if(!this.disabled&&this.addOnChange){var e=Wm(t);this.newTag!==e&&(this.newTag=e),this.addTag()}},onInputKeydown:function(t){if(!this.disabled&&Nt(t)){var e=t.keyCode,i=t.target.value||"";this.noAddOnEnter||e!==Ha?!this.removeOnDelete||8!==e&&46!==e||""!==i||(Bs(t,{propagation:!1}),this.tags=this.tags.slice(0,-1)):(Bs(t,{propagation:!1}),this.addTag())}},onClick:function(t){var e=this,i=this.computeIgnoreInputFocusSelector,n=t.target;this.disabled||_r(n)||i&&Er(i,n,!0)||this.$nextTick((function(){e.focus()}))},onFocusin:function(){this.hasFocus=!0},onFocusout:function(){this.hasFocus=!1},handleAutofocus:function(){var t=this;this.$nextTick((function(){xr((function(){t.autofocus&&!t.disabled&&t.focus()}))}))},focus:function(){this.disabled||ts(this.getInput())},blur:function(){this.disabled||es(this.getInput())},splitTags:function(t){t=vr(t);var e=this.computedSeparatorRegExp;return(e?t.split(e):[t]).map(br).filter(ne)},parseTags:function(t){var e=this,i=this.splitTags(t),n={all:i,valid:[],invalid:[],duplicate:[]};return i.forEach((function(t){nr(e.tags,t)||nr(n.valid,t)?nr(n.duplicate,t)||n.duplicate.push(t):e.validateTag(t)?n.valid.push(t):nr(n.invalid,t)||n.invalid.push(t)})),n},validateTag:function(t){var e=this.tagValidator;return!gs(e)||e(t)},getInput:function(){return Or("#".concat(Dp(this.computedInputId)),this.$el)},defaultRender:function(t){var e=t.addButtonText,i=t.addButtonVariant,n=t.addTag,o=t.disableAddButton,r=t.disabled,s=t.duplicateTagText,a=t.inputAttrs,l=t.inputClass,u=t.inputHandlers,d=t.inputType,h=t.invalidTagText,f=t.isDuplicate,p=t.isInvalid,m=t.isLimitReached,v=t.limitTagsText,b=t.noTagRemove,g=t.placeholder,y=t.removeTag,w=t.tagClass,T=t.tagPills,C=t.tagRemoveLabel,x=t.tagVariant,S=t.tags,k=this.$createElement,$=S.map((function(t){return t=vr(t),k(Lm,{class:w,props:{disabled:r,noRemove:b,pill:T,removeLabel:C,tag:"li",title:t,variant:x},on:{remove:function(){return y(t)}},key:"tags_".concat(t)},t)})),B=h&&p?this.safeId("__invalid_feedback__"):null,_=s&&f?this.safeId("__duplicate_feedback__"):null,D=v&&m?this.safeId("__limit_feedback__"):null,F=[a["aria-describedby"],B,_,D].filter(ne).join(" "),I=k("input",{staticClass:"b-form-tags-input w-100 flex-grow-1 p-0 m-0 bg-transparent border-0",class:l,style:{outline:0,minWidth:"5rem"},attrs:c(c({},a),{},{"aria-describedby":F||null,type:d,placeholder:g||null}),domProps:{value:a.value},on:u,directives:[{name:"model",value:a.value}],ref:"input"}),P=k(ml,{staticClass:"b-form-tags-button py-0",class:{invisible:o},style:{fontSize:"90%"},props:{disabled:o||m,variant:i},on:{click:function(){return n()}},ref:"button"},[this.normalizeSlot("add-button-text")||e]),O=this.safeId("__tag_list__"),V=k("li",{staticClass:"b-from-tags-field flex-grow-1",attrs:{role:"none","aria-live":"off","aria-controls":O},key:"tags_field"},[k("div",{staticClass:"d-flex",attrs:{role:"group"}},[I,P])]),E=k("ul",{staticClass:"b-form-tags-list list-unstyled mb-0 d-flex flex-wrap align-items-center",attrs:{id:O},key:"tags_list"},[$,V]),L=k();if(h||s||v){var A=this.computedJoiner,R=k();B&&(R=k(ff,{props:{id:B,forceShow:!0},key:"tags_invalid_feedback"},[this.invalidTagText,": ",this.invalidTags.join(A)]));var M=k();_&&(M=k(df,{props:{id:_},key:"tags_duplicate_feedback"},[this.duplicateTagText,": ",this.duplicateTags.join(A)]));var H=k();D&&(H=k(df,{props:{id:D},key:"tags_limit_feedback"},[v])),L=k("div",{attrs:{"aria-live":"polite","aria-atomic":"true"},key:"tags_feedback"},[R,M,H])}return[E,L]}},render:function(t){var e=this.name,i=this.disabled,n=this.required,o=this.form,r=this.tags,s=this.computedInputId,a=this.hasFocus,l=this.noOuterFocus,u=c({tags:r.slice(),inputAttrs:this.computedInputAttrs,inputType:this.computedInputType,inputHandlers:this.computedInputHandlers,removeTag:this.removeTag,addTag:this.addTag,reset:this.reset,inputId:s,isInvalid:this.hasInvalidTags,invalidTags:this.invalidTags.slice(),isDuplicate:this.hasDuplicateTags,duplicateTags:this.duplicateTags.slice(),isLimitReached:this.isLimitReached,disableAddButton:this.disableAddButton},Jt(this.$props,["addButtonText","addButtonVariant","disabled","duplicateTagText","form","inputClass","invalidTagText","limit","limitTagsText","noTagRemove","placeholder","required","separator","size","state","tagClass","tagPills","tagRemoveLabel","tagVariant"])),d=this.normalizeSlot(Ao,u)||this.defaultRender(u),h=t("output",{staticClass:"sr-only",attrs:{id:this.safeId("__selected_tags__"),role:"status",for:s,"aria-live":a?"polite":"off","aria-atomic":"true","aria-relevant":"additions text"}},this.tags.join(", ")),f=t("div",{staticClass:"sr-only",attrs:{id:this.safeId("__removed_tags__"),role:"status","aria-live":a?"assertive":"off","aria-atomic":"true"}},this.removedTags.length>0?"(".concat(this.tagRemovedLabel,") ").concat(this.removedTags.join(", ")):""),p=t();if(e&&!i){var m=r.length>0;p=(m?r:[""]).map((function(i){return t("input",{class:{"sr-only":!m},attrs:{type:m?"hidden":"text",value:i,required:n,name:e,form:o},key:"tag_input_".concat(i)})}))}return t("div",{staticClass:"b-form-tags form-control h-auto",class:[{focus:a&&!l&&!i,disabled:i},this.sizeFormClass,this.stateClass],attrs:{id:this.safeId(),role:"group",tabindex:i||l?null:"-1","aria-describedby":this.safeId("__selected_tags__")},on:{click:this.onClick,focusin:this.onFocusin,focusout:this.onFocusout}},[h,f,d,p])}}),qm=me({components:{BFormTags:Um,BTags:Um,BFormTag:Lm,BTag:Lm}}),Km=vs(ee(c(c(c(c(c(c({},fc),Tf),kf),Bf),Wp),{},{maxRows:hs(_o),noAutoShrink:hs(ho,!1),noResize:hs(ho,!1),rows:hs(_o,2),wrap:hs(go,"soft")})),Si),Xm=i.default.extend({name:Si,directives:{"b-visible":Kc},mixins:[Qa,pc,Ja,Cf,$f,_f,Yp,Mp,Up],props:Km,data:function(){return{heightInPx:null}},computed:{computedStyle:function(){var t={resize:!this.computedRows||this.noResize?"none":null};return this.computedRows||(t.height=this.heightInPx,t.overflowY="scroll"),t},computedMinRows:function(){return Us(lr(this.rows,2),2)},computedMaxRows:function(){return Us(this.computedMinRows,lr(this.maxRows,0))},computedRows:function(){return this.computedMinRows===this.computedMaxRows?this.computedMinRows:null},computedAttrs:function(){var t=this.disabled,e=this.required;return{id:this.safeId(),name:this.name||null,form:this.form||null,disabled:t,placeholder:this.placeholder||null,required:e,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,rows:this.computedRows,wrap:this.wrap||null,"aria-required":this.required?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return c(c({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{localValue:function(){this.setHeight()}},mounted:function(){this.setHeight()},methods:{visibleCallback:function(t){t&&this.$nextTick(this.setHeight)},setHeight:function(){var t=this;this.$nextTick((function(){xr((function(){t.heightInPx=t.computeHeight()}))}))},computeHeight:function(){if(this.$isServer||!It(this.computedRows))return null;var t=this.$el;if(!Dr(t))return null;var e=Kr(t),i=cr(e.lineHeight,1),n=cr(e.borderTopWidth,0)+cr(e.borderBottomWidth,0),o=cr(e.paddingTop,0)+cr(e.paddingBottom,0),r=n+o,s=i*this.computedMinRows+r,a=Ur(t,"height")||e.height;Wr(t,"height","auto");var l=t.scrollHeight;Wr(t,"height",a);var c=Us((l-o)/i,2),u=Ys(Us(c,this.computedMinRows),this.computedMaxRows),d=Us(Ks(u*i+r),s);return this.noAutoShrink&&cr(a,0)>d?a:"".concat(d,"px")}},render:function(t){return t("textarea",{class:this.computedClass,style:this.computedStyle,directives:[{name:"b-visible",value:this.visibleCallback,modifiers:{640:!0}}],attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}}),Zm=me({components:{BFormTextarea:Xm,BTextarea:Xm}}),Jm=ys("value",{type:go,defaultValue:""}),Qm=Jm.mixin,tv=Jm.props,ev=Jm.prop,iv=Jm.event,nv="numeric",ov=function(t){return"00".concat(t||"").slice(-2)},rv=function(t){t=vr(t);var e=null,i=null,n=null;if(gt.test(t)){var o=w(t.split(":").map((function(t){return lr(t,null)})),3);e=o[0],i=o[1],n=o[2]}return{hours:Pt(e)?null:e,minutes:Pt(i)?null:i,seconds:Pt(n)?null:n,ampm:Pt(e)||e<12?0:1}},sv=vs(ee(c(c(c(c({},fc),tv),Jt(Pm,["labelIncrement","labelDecrement"])),{},{ariaLabelledby:hs(go),disabled:hs(ho,!1),hidden:hs(ho,!1),hideHeader:hs(ho,!1),hour12:hs(ho,null),labelAm:hs(go,"AM"),labelAmpm:hs(go,"AM/PM"),labelHours:hs(go,"Hours"),labelMinutes:hs(go,"Minutes"),labelNoTimeSelected:hs(go,"No time selected"),labelPm:hs(go,"PM"),labelSeconds:hs(go,"Seconds"),labelSelected:hs(go,"Selected time"),locale:hs(Co),minutesStep:hs(_o,1),readonly:hs(ho,!1),secondsStep:hs(_o,1),showSeconds:hs(ho,!1)})),Tn),av=i.default.extend({name:Tn,mixins:[pc,Qm,Cs],props:sv,data:function(){var t=rv(this[ev]||"");return{modelHours:t.hours,modelMinutes:t.minutes,modelSeconds:t.seconds,modelAmpm:t.ampm,isLive:!1}},computed:{computedHMS:function(){return function(t){var e=t.hours,i=t.minutes,n=t.seconds,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return It(e)||It(i)||o&&It(n)?"":[e,i,o?n:0].map(ov).join(":")}({hours:this.modelHours,minutes:this.modelMinutes,seconds:this.modelSeconds},this.showSeconds)},resolvedOptions:function(){var t=or(this.locale).filter(ne),e={hour:nv,minute:nv,second:nv};Pt(this.hour12)||(e.hour12=!!this.hour12);var i=new Intl.DateTimeFormat(t,e).resolvedOptions(),n=i.hour12||!1,o=i.hourCycle||(n?"h12":"h23");return{locale:i.locale,hour12:n,hourCycle:o}},computedLocale:function(){return this.resolvedOptions.locale},computedLang:function(){return(this.computedLocale||"").replace(/-u-.*$/,"")},computedRTL:function(){return hc(this.computedLang)},computedHourCycle:function(){return this.resolvedOptions.hourCycle},is12Hour:function(){return!!this.resolvedOptions.hour12},context:function(){return{locale:this.computedLocale,isRTL:this.computedRTL,hourCycle:this.computedHourCycle,hour12:this.is12Hour,hours:this.modelHours,minutes:this.modelMinutes,seconds:this.showSeconds?this.modelSeconds:0,value:this.computedHMS,formatted:this.formattedTimeString}},valueId:function(){return this.safeId()||null},computedAriaLabelledby:function(){return[this.ariaLabelledby,this.valueId].filter(ne).join(" ")||null},timeFormatter:function(){var t={hour12:this.is12Hour,hourCycle:this.computedHourCycle,hour:nv,minute:nv,timeZone:"UTC"};return this.showSeconds&&(t.second=nv),Ql(this.computedLocale,t)},numberFormatter:function(){return new Intl.NumberFormat(this.computedLocale,{style:"decimal",minimumIntegerDigits:2,minimumFractionDigits:0,maximumFractionDigits:0,notation:"standard"}).format},formattedTimeString:function(){var t=this.modelHours,e=this.modelMinutes,i=this.showSeconds&&this.modelSeconds||0;return this.computedHMS?this.timeFormatter(Xl(Date.UTC(0,0,1,t,e,i))):this.labelNoTimeSelected||" "},spinScopedSlots:function(){var t=this.$createElement;return{increment:function(e){var i=e.hasFocus;return t(xa,{props:{scale:i?1.5:1.25},attrs:{"aria-hidden":"true"}})},decrement:function(e){var i=e.hasFocus;return t(xa,{props:{flipV:!0,scale:i?1.5:1.25},attrs:{"aria-hidden":"true"}})}}}},watch:($h={},a($h,ev,(function(t,e){if(t!==e&&!Ua(rv(t),rv(this.computedHMS))){var i=rv(t),n=i.hours,o=i.minutes,r=i.seconds,s=i.ampm;this.modelHours=n,this.modelMinutes=o,this.modelSeconds=r,this.modelAmpm=s}})),a($h,"computedHMS",(function(t,e){t!==e&&this.$emit(iv,t)})),a($h,"context",(function(t,e){Ua(t,e)||this.$emit(Dn,t)})),a($h,"modelAmpm",(function(t,e){var i=this;if(t!==e){var n=It(this.modelHours)?0:this.modelHours;this.$nextTick((function(){0===t&&n>11?i.modelHours=n-12:1===t&&n<12&&(i.modelHours=n+12)}))}})),a($h,"modelHours",(function(t,e){t!==e&&(this.modelAmpm=t>11?1:0)})),$h),created:function(){var t=this;this.$nextTick((function(){t.$emit(Dn,t.context)}))},mounted:function(){this.setLive(!0)},activated:function(){this.setLive(!0)},deactivated:function(){this.setLive(!1)},beforeDestroy:function(){this.setLive(!1)},methods:{focus:function(){this.disabled||ts(this.$refs.spinners[0])},blur:function(){if(!this.disabled){var t=$r();Lr(this.$el,t)&&es(t)}},formatHours:function(t){var e=this.computedHourCycle;return t=0===(t=this.is12Hour&&t>12?t-12:t)&&"h12"===e?12:0===t&&"h24"===e?24:12===t&&"h11"===e?0:t,this.numberFormatter(t)},formatMinutes:function(t){return this.numberFormatter(t)},formatSeconds:function(t){return this.numberFormatter(t)},formatAmpm:function(t){return 0===t?this.labelAm:1===t?this.labelPm:""},setHours:function(t){this.modelHours=t},setMinutes:function(t){this.modelMinutes=t},setSeconds:function(t){this.modelSeconds=t},setAmpm:function(t){this.modelAmpm=t},onSpinLeftRight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.type,i=t.keyCode;if(!this.disabled&&"keydown"===e&&(i===Na||i===ja)){Bs(t);var n=this.$refs.spinners||[],o=n.map((function(t){return!!t.hasFocus})).indexOf(!0);o=(o+=i===Na?-1:1)>=n.length?0:o<0?n.length-1:o,ts(n[o])}},setLive:function(t){var e=this;t?this.$nextTick((function(){xr((function(){e.isLive=!0}))})):this.isLive=!1}},render:function(t){var e=this;if(this.hidden)return t();var i=this.valueId,n=this.computedAriaLabelledby,o=[],r=function(n,r,s){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=e.safeId("_spinbutton_".concat(r,"_"))||null;return o.push(l),t(Om,{class:s,props:c({id:l,placeholder:"--",vertical:!0,required:!0,disabled:e.disabled,readonly:e.readonly,locale:e.computedLocale,labelIncrement:e.labelIncrement,labelDecrement:e.labelDecrement,wrap:!0,ariaControls:i,min:0},a),scopedSlots:e.spinScopedSlots,on:{change:n},key:r,ref:"spinners",refInFor:!0})},s=function(){return t("div",{staticClass:"d-flex flex-column",class:{"text-muted":e.disabled||e.readonly},attrs:{"aria-hidden":"true"}},[t(Sa,{props:{shiftV:4,scale:.5}}),t(Sa,{props:{shiftV:-4,scale:.5}})])},a=[];a.push(r(this.setHours,"hours","b-time-hours",{value:this.modelHours,max:23,step:1,formatterFn:this.formatHours,ariaLabel:this.labelHours})),a.push(s()),a.push(r(this.setMinutes,"minutes","b-time-minutes",{value:this.modelMinutes,max:59,step:this.minutesStep||1,formatterFn:this.formatMinutes,ariaLabel:this.labelMinutes})),this.showSeconds&&(a.push(s()),a.push(r(this.setSeconds,"seconds","b-time-seconds",{value:this.modelSeconds,max:59,step:this.secondsStep||1,formatterFn:this.formatSeconds,ariaLabel:this.labelSeconds}))),this.is12Hour&&a.push(r(this.setAmpm,"ampm","b-time-ampm",{value:this.modelAmpm,max:1,formatterFn:this.formatAmpm,ariaLabel:this.labelAmpm,required:!1})),a=t("div",{staticClass:"d-flex align-items-center justify-content-center mx-auto",attrs:{role:"group",tabindex:this.disabled||this.readonly?null:"-1","aria-labelledby":n},on:{keydown:this.onSpinLeftRight,click:function(t){t.target===t.currentTarget&&e.focus()}}},a);var l=t("output",{staticClass:"form-control form-control-sm text-center",class:{disabled:this.disabled||this.readonly},attrs:{id:i,role:"status",for:o.filter(ne).join(" ")||null,tabindex:this.disabled?null:"-1","aria-live":this.isLive?"polite":"off","aria-atomic":"true"},on:{click:this.focus,focus:this.focus}},[t("bdi",this.formattedTimeString),this.computedHMS?t("span",{staticClass:"sr-only"}," (".concat(this.labelSelected,") ")):""]),u=t("header",{staticClass:"b-time-header",class:{"sr-only":this.hideHeader}},[l]),d=this.normalizeSlot();return d=d?t("footer",{staticClass:"b-time-footer"},d):t(),t("div",{staticClass:"b-time d-inline-flex flex-column text-center",attrs:{role:"group",lang:this.computedLang||null,"aria-labelledby":n||null,"aria-disabled":this.disabled?"true":null,"aria-readonly":this.readonly&&!this.disabled?"true":null}},[u,a,d])}}),lv=ys("value",{type:go,defaultValue:""}),cv=lv.mixin,uv=lv.props,dv=lv.prop,hv=lv.event,fv=Qt(sv,["hidden","id","value"]),pv=Qt(op,["formattedValue","id","lang","rtl","value"]),mv=vs(ee(c(c(c(c(c({},fc),uv),fv),pv),{},{closeButtonVariant:hs(go,"outline-secondary"),labelCloseButton:hs(go,"Close"),labelNowButton:hs(go,"Select now"),labelResetButton:hs(go,"Reset"),noCloseButton:hs(ho,!1),nowButton:hs(ho,!1),nowButtonVariant:hs(go,"outline-primary"),resetButton:hs(ho,!1),resetButtonVariant:hs(go,"outline-danger"),resetValue:hs($o)})),ki),vv=i.default.extend({name:ki,mixins:[pc,cv],props:mv,data:function(){return{localHMS:this[dv]||"",localLocale:null,isRTL:!1,formattedValue:"",isVisible:!1}},computed:{computedLang:function(){return(this.localLocale||"").replace(/-u-.*$/i,"")||null}},watch:(Bh={},a(Bh,dv,(function(t){this.localHMS=t||""})),a(Bh,"localHMS",(function(t){this.isVisible&&this.$emit(hv,t||"")})),Bh),methods:{focus:function(){this.disabled||ts(this.$refs.control)},blur:function(){this.disabled||es(this.$refs.control)},setAndClose:function(t){var e=this;this.localHMS=t,this.$nextTick((function(){e.$refs.control.hide(!0)}))},onInput:function(t){this.localHMS!==t&&(this.localHMS=t)},onContext:function(t){var e=t.isRTL,i=t.locale,n=t.value,o=t.formatted;this.isRTL=e,this.localLocale=i,this.formattedValue=o,this.localHMS=n||"",this.$emit(Dn,t)},onNowButton:function(){var t=new Date,e=[t.getHours(),t.getMinutes(),this.showSeconds?t.getSeconds():0].map((function(t){return"00".concat(t||"").slice(-2)})).join(":");this.setAndClose(e)},onResetButton:function(){this.setAndClose(this.resetValue)},onCloseButton:function(){this.$refs.control.hide(!0)},onShow:function(){this.isVisible=!0},onShown:function(){var t=this;this.$nextTick((function(){ts(t.$refs.time),t.$emit(eo)}))},onHidden:function(){this.isVisible=!1,this.$emit(zn)},defaultButtonFn:function(t){var e=t.isHovered,i=t.hasFocus;return this.$createElement(e||i?$a:ka,{attrs:{"aria-hidden":"true"}})}},render:function(t){var e=this.localHMS,i=this.disabled,n=this.readonly,o=this.$props,r=Pt(this.placeholder)?this.labelNoTimeSelected:this.placeholder,s=[];if(this.nowButton){var l=this.labelNowButton;s.push(t(ml,{props:{size:"sm",disabled:i||n,variant:this.nowButtonVariant},attrs:{"aria-label":l||null},on:{click:this.onNowButton},key:"now-btn"},l))}if(this.resetButton){s.length>0&&s.push(t("span"," "));var u=this.labelResetButton;s.push(t(ml,{props:{size:"sm",disabled:i||n,variant:this.resetButtonVariant},attrs:{"aria-label":u||null},on:{click:this.onResetButton},key:"reset-btn"},u))}if(!this.noCloseButton){s.length>0&&s.push(t("span"," "));var d=this.labelCloseButton;s.push(t(ml,{props:{size:"sm",disabled:i,variant:this.closeButtonVariant},attrs:{"aria-label":d||null},on:{click:this.onCloseButton},key:"close-btn"},d))}s.length>0&&(s=[t("div",{staticClass:"b-form-date-controls d-flex flex-wrap",class:{"justify-content-between":s.length>1,"justify-content-end":s.length<2}},s)]);var h=t(av,{staticClass:"b-form-time-control",props:c(c({},ps(fv,o)),{},{value:e,hidden:!this.isVisible}),on:{input:this.onInput,context:this.onContext},ref:"time"},s);return t(rp,{staticClass:"b-form-timepicker",props:c(c({},ps(pv,o)),{},{id:this.safeId(),value:e,formattedValue:e?this.formattedValue:"",placeholder:r,rtl:this.isRTL,lang:this.computedLang}),on:{show:this.onShow,shown:this.onShown,hidden:this.onHidden},scopedSlots:a({},Eo,this.$scopedSlots["button-content"]||this.defaultButtonFn),ref:"control"},[h])}}),bv=me({components:{BFormTimepicker:vv,BTimepicker:vv}}),gv=me({components:{BImg:Lc,BImgLazy:Qc}}),yv=vs({tag:hs(go,"div")},Vi),wv=i.default.extend({name:Vi,functional:!0,props:yv,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.tag,F(n,{staticClass:"input-group-text"}),o)}}),Tv=vs({append:hs(ho,!1),id:hs(go),isText:hs(ho,!1),tag:hs(go,"div")},Ii),Cv=i.default.extend({name:Ii,functional:!0,props:Tv,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.append;return t(i.tag,F(n,{class:{"input-group-append":r,"input-group-prepend":!r},attrs:{id:i.id}}),i.isText?[t(wv,o)]:o)}}),xv=vs(Qt(Tv,["append"]),Pi),Sv=i.default.extend({name:Pi,functional:!0,props:xv,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(Cv,F(n,{props:c(c({},i),{},{append:!0})}),o)}}),kv=vs(Qt(Tv,["append"]),Oi),$v=i.default.extend({name:Oi,functional:!0,props:kv,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(Cv,F(n,{props:c(c({},i),{},{append:!1})}),o)}}),Bv=vs({append:hs(go),appendHtml:hs(go),id:hs(go),prepend:hs(go),prependHtml:hs(go),size:hs(go),tag:hs(go,"div")},Fi),_v=me({components:{BInputGroup:i.default.extend({name:Fi,functional:!0,props:Bv,render:function(t,e){var i=e.props,n=e.data,o=e.slots,r=e.scopedSlots,s=i.prepend,l=i.prependHtml,c=i.append,u=i.appendHtml,d=i.size,h=r||{},f=o(),p={},m=t(),v=ws(qo,h,f);(v||s||l)&&(m=t($v,[v?Ts(qo,p,h,f):t(wv,{domProps:Fl(l,s)})]));var b=t(),g=ws(Po,h,f);return(g||c||u)&&(b=t(Sv,[g?Ts(Po,p,h,f):t(wv,{domProps:Fl(u,c)})])),t(i.tag,F(n,{staticClass:"input-group",class:a({},"input-group-".concat(d),d),attrs:{id:i.id||null,role:"group"}}),[m,Ts(Ao,p,h,f),b])}}),BInputGroupAddon:Cv,BInputGroupPrepend:$v,BInputGroupAppend:Sv,BInputGroupText:wv}}),Dv=vs({fluid:hs(ko,!1),tag:hs(go,"div")},qe),Fv=i.default.extend({name:qe,functional:!0,props:Dv,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.fluid;return t(i.tag,F(n,{class:a({container:!(r||""===r),"container-fluid":!0===r||""===r},"container-".concat(r),r&&!0!==r)}),o)}}),Iv=vs({bgVariant:hs(go),borderVariant:hs(go),containerFluid:hs(ko,!1),fluid:hs(ho,!1),header:hs(go),headerHtml:hs(go),headerLevel:hs(_o,3),headerTag:hs(go,"h1"),lead:hs(go),leadHtml:hs(go),leadTag:hs(go,"p"),tag:hs(go,"div"),textVariant:hs(go)},Ei),Pv=me({components:{BJumbotron:i.default.extend({name:Ei,functional:!0,props:Iv,render:function(t,e){var i,n=e.props,o=e.data,r=e.slots,s=e.scopedSlots,l=n.header,c=n.headerHtml,u=n.lead,d=n.leadHtml,h=n.textVariant,f=n.bgVariant,p=n.borderVariant,m=s||{},v=r(),b={},g=t(),y=ws(No,m,v);if(y||l||c){var w=n.headerLevel;g=t(n.headerTag,{class:a({},"display-".concat(w),w),domProps:y?{}:Fl(c,l)},Ts(No,b,m,v))}var T=t(),C=ws(Go,m,v);(C||u||d)&&(T=t(n.leadTag,{staticClass:"lead",domProps:C?{}:Fl(d,u)},Ts(Go,b,m,v)));var x=[g,T,Ts(Ao,b,m,v)];return n.fluid&&(x=[t(Fv,{props:{fluid:n.containerFluid}},x)]),t(n.tag,F(o,{staticClass:"jumbotron",class:(i={"jumbotron-fluid":n.fluid},a(i,"text-".concat(h),h),a(i,"bg-".concat(f),f),a(i,"border-".concat(p),p),a(i,"border",p),i)}),x)}})}}),Ov=["start","end","center"],Vv=is((function(t,e){return(e=br(vr(e)))?gr(["row-cols",t,e].filter(ne).join("-")):null})),Ev=is((function(t){return gr(t.replace("cols",""))})),Lv=[],Av=me({components:{BContainer:Fv,BRow:{name:on,functional:!0,get props(){var t;return delete this.props,this.props=(t=ls().reduce((function(t,e){return t[ds(e,"cols")]=hs(_o),t}),Wt(null)),Lv=Kt(t),vs(ee(c(c({},t),{},{alignContent:hs(go,null,(function(t){return nr(or(Ov,"between","around","stretch"),t)})),alignH:hs(go,null,(function(t){return nr(or(Ov,"between","around"),t)})),alignV:hs(go,null,(function(t){return nr(or(Ov,"baseline","stretch"),t)})),noGutters:hs(ho,!1),tag:hs(go,"div")})),on)),this.props},render:function(t,e){var i,n=e.props,o=e.data,r=e.children,s=n.alignV,l=n.alignH,c=n.alignContent,u=[];return Lv.forEach((function(t){var e=Vv(Ev(t),n[t]);e&&u.push(e)})),u.push((a(i={"no-gutters":n.noGutters},"align-items-".concat(s),s),a(i,"justify-content-".concat(l),l),a(i,"align-content-".concat(c),c),i)),t(n.tag,F(o,{staticClass:"row",class:u}),r)}},BCol:Op,BFormRow:bf}}),Rv=me({components:{BLink:ol}}),Mv=vs({flush:hs(ho,!1),horizontal:hs(ko,!1),tag:hs(go,"div")},Ai),Hv=i.default.extend({name:Ai,functional:!0,props:Mv,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=""===i.horizontal||i.horizontal;r=!i.flush&&r;var s={staticClass:"list-group",class:a({"list-group-flush":i.flush,"list-group-horizontal":!0===r},"list-group-horizontal-".concat(r),Et(r))};return t(i.tag,F(n,s),o)}}),zv=["a","router-link","button","b-link"],Nv=Qt(nl,["event","routerTag"]);delete Nv.href.default,delete Nv.to.default;var jv=vs(ee(c(c({},Nv),{},{action:hs(ho,!1),button:hs(ho,!1),tag:hs(go,"div"),variant:hs(go)})),Ri),Gv=me({components:{BListGroup:Hv,BListGroupItem:i.default.extend({name:Ri,functional:!0,props:jv,render:function(t,e){var i,n=e.props,o=e.data,r=e.children,s=n.button,l=n.variant,c=n.active,u=n.disabled,d=la(n),h=s?"button":d?ol:n.tag,f=!!(n.action||d||s||nr(zv,n.tag)),p={},m={};return Br(h,"button")?(o.attrs&&o.attrs.type||(p.type="button"),n.disabled&&(p.disabled=!0)):m=ps(Nv,n),t(h,F(o,{attrs:p,props:m,staticClass:"list-group-item",class:(i={},a(i,"list-group-item-".concat(l),l),a(i,"list-group-item-action",f),a(i,"active",c),a(i,"disabled",u),i)}),r)}})}}),Wv=vs({right:hs(ho,!1),tag:hs(go,"div"),verticalAlign:hs(go,"top")},Hi),Yv=i.default.extend({name:Hi,functional:!0,props:Wv,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.verticalAlign,s="top"===r?"start":"bottom"===r?"end":r;return t(i.tag,F(n,{staticClass:"media-aside",class:a({"media-aside-right":i.right},"align-self-".concat(s),s)}),o)}}),Uv=vs({tag:hs(go,"div")},zi),qv=i.default.extend({name:zi,functional:!0,props:Uv,render:function(t,e){var i=e.props,n=e.data,o=e.children;return t(i.tag,F(n,{staticClass:"media-body"}),o)}}),Kv=vs({noBody:hs(ho,!1),rightAlign:hs(ho,!1),tag:hs(go,"div"),verticalAlign:hs(go,"top")},Mi),Xv=me({components:{BMedia:i.default.extend({name:Mi,functional:!0,props:Kv,render:function(t,e){var i=e.props,n=e.data,o=e.slots,r=e.scopedSlots,s=e.children,a=i.noBody,l=i.rightAlign,c=i.verticalAlign,u=a?s:[];if(!a){var d={},h=o(),f=r||{};u.push(t(qv,Ts(Ao,d,f,h)));var p=Ts("aside",d,f,h);p&&u[l?"push":"unshift"](t(Yv,{props:{right:l,verticalAlign:c}},p))}return t(i.tag,F(n,{staticClass:"media"}),u)}}),BMediaAside:Yv,BMediaBody:qv}}),Zv="$_bv_documentHandlers_",Jv=i.default.extend({created:function(){var t=this;M&&(this[Zv]={},this.$once(oo,(function(){var e=t[Zv]||{};delete t[Zv],Kt(e).forEach((function(t){(e[t]||[]).forEach((function(e){return ks(document,t,e,lo)}))}))})))},methods:{listenDocument:function(t,e,i){t?this.listenOnDocument(e,i):this.listenOffDocument(e,i)},listenOnDocument:function(t,e){this[Zv]&&Et(t)&&Ot(e)&&(this[Zv][t]=this[Zv][t]||[],nr(this[Zv][t],e)||(this[Zv][t].push(e),Ss(document,t,e,lo)))},listenOffDocument:function(t,e){this[Zv]&&Et(t)&&Ot(e)&&(ks(document,t,e,lo),this[Zv][t]=(this[Zv][t]||[]).filter((function(t){return t!==e})))}}}),Qv="$_bv_windowHandlers_",tb=i.default.extend({beforeCreate:function(){this[Qv]={}},beforeDestroy:function(){if(M){var t=this[Qv];delete this[Qv],Kt(t).forEach((function(e){(t[e]||[]).forEach((function(t){return ks(window,e,t,lo)}))}))}},methods:{listenWindow:function(t,e,i){t?this.listenOnWindow(e,i):this.listenOffWindow(e,i)},listenOnWindow:function(t,e){M&&this[Qv]&&Et(t)&&Ot(e)&&(this[Qv][t]=this[Qv][t]||[],nr(this[Qv][t],e)||(this[Qv][t].push(e),Ss(window,t,e,lo)))},listenOffWindow:function(t,e){M&&this[Qv]&&Et(t)&&Ot(e)&&(ks(window,t,e,lo),this[Qv][t]=(this[Qv][t]||[]).filter((function(t){return t!==e})))}}}),eb=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t&&t.$options._scopeId||e},ib=i.default.extend({computed:{scopedStyleAttrs:function(){var t=eb(this.$parent);return t?a({},t,""):{}}}}),nb=i.default.extend({abstract:!0,name:"BVTransporterTarget",props:{nodes:hs(yo)},data:function(t){return{updatedNodes:t.nodes}},destroyed:function(){var t;(t=this.$el)&&t.parentNode&&t.parentNode.removeChild(t)},render:function(t){var e=this.updatedNodes,i=Ot(e)?e({}):e;return(i=or(i).filter(ne))&&i.length>0&&!i[0].text?i[0]:t()}}),ob={container:hs([HTMLElement,go],"body"),disabled:hs(ho,!1),tag:hs(go,"div")},rb=i.default.extend({name:"BVTransporter",mixins:[Cs],props:ob,watch:{disabled:{immediate:!0,handler:function(t){t?this.unmountTarget():this.$nextTick(this.mountTarget)}}},created:function(){this.$_defaultFn=null,this.$_target=null},beforeMount:function(){this.mountTarget()},updated:function(){this.updateTarget()},beforeDestroy:function(){this.unmountTarget(),this.$_defaultFn=null},methods:{getContainer:function(){if(M){var t=this.container;return Et(t)?Or(t):t}return null},mountTarget:function(){if(!this.$_target){var t=this.getContainer();if(t){var e=document.createElement("div");t.appendChild(e),this.$_target=new nb({el:e,parent:this,propsData:{nodes:or(this.normalizeSlot())}})}}},updateTarget:function(){if(M&&this.$_target){var t=this.$scopedSlots.default;this.disabled||(t&&this.$_defaultFn!==t?this.$_target.updatedNodes=t:t||(this.$_target.updatedNodes=this.$slots.default)),this.$_defaultFn=t}},unmountTarget:function(){this.$_target&&this.$_target.$destroy(),this.$_target=null}},render:function(t){if(this.disabled){var e=or(this.normalizeSlot()).filter(ne);if(e.length>0&&!e[0].text)return e[0]}return t()}}),BvModalEvent=function(t){u(BvModalEvent,t);var e=g(BvModalEvent);function BvModalEvent(t){var i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,BvModalEvent),i=e.call(this,t,n),Yt(v(i),{trigger:{enumerable:!0,configurable:!1,writable:!1}}),i}return s(BvModalEvent,null,[{key:"Defaults",get:function(){return c(c({},y(d(BvModalEvent),"Defaults",this)),{},{trigger:null})}}]),BvModalEvent}(BvEvent),sb=new(i.default.extend({data:function(){return{modals:[],baseZIndex:null,scrollbarWidth:null,isBodyOverflowing:!1}},computed:{modalCount:function(){return this.modals.length},modalsAreOpen:function(){return this.modalCount>0}},watch:{modalCount:function(t,e){M&&(this.getScrollbarWidth(),t>0&&0===e?(this.checkScrollbar(),this.setScrollbar(),Rr(document.body,"modal-open")):0===t&&e>0&&(this.resetScrollbar(),Mr(document.body,"modal-open")),zr(document.body,"data-modal-open-count",String(t)))},modals:function(t){var e=this;this.checkScrollbar(),xr((function(){e.updateModals(t||[])}))}},methods:{registerModal:function(t){var e=this;t&&-1===this.modals.indexOf(t)&&(this.modals.push(t),t.$once(oo,(function(){e.unregisterModal(t)})))},unregisterModal:function(t){var e=this.modals.indexOf(t);e>-1&&(this.modals.splice(e,1),t._isBeingDestroyed||t._isDestroyed||this.resetModal(t))},getBaseZIndex:function(){if(It(this.baseZIndex)&&M){var t=document.createElement("div");Rr(t,"modal-backdrop"),Rr(t,"d-none"),Wr(t,"display","none"),document.body.appendChild(t),this.baseZIndex=lr(Kr(t).zIndex,1040),document.body.removeChild(t)}return this.baseZIndex||1040},getScrollbarWidth:function(){if(It(this.scrollbarWidth)&&M){var t=document.createElement("div");Rr(t,"modal-scrollbar-measure"),document.body.appendChild(t),this.scrollbarWidth=qr(t).width-t.clientWidth,document.body.removeChild(t)}return this.scrollbarWidth||0},updateModals:function(t){var e=this,i=this.getBaseZIndex(),n=this.getScrollbarWidth();t.forEach((function(t,o){t.zIndex=i+o,t.scrollbarWidth=n,t.isTop=o===e.modals.length-1,t.isBodyOverflowing=e.isBodyOverflowing}))},resetModal:function(t){t&&(t.zIndex=this.getBaseZIndex(),t.isTop=!0,t.isBodyOverflowing=!1)},checkScrollbar:function(){var t=qr(document.body),e=t.left,i=t.right;this.isBodyOverflowing=e+i<window.innerWidth},setScrollbar:function(){var t=document.body;if(t._paddingChangedForModal=t._paddingChangedForModal||[],t._marginChangedForModal=t._marginChangedForModal||[],this.isBodyOverflowing){var e=this.scrollbarWidth;Pr(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(i){var n=Ur(i,"paddingRight")||"";zr(i,"data-padding-right",n),Wr(i,"paddingRight","".concat(cr(Kr(i).paddingRight,0)+e,"px")),t._paddingChangedForModal.push(i)})),Pr(".sticky-top").forEach((function(i){var n=Ur(i,"marginRight")||"";zr(i,"data-margin-right",n),Wr(i,"marginRight","".concat(cr(Kr(i).marginRight,0)-e,"px")),t._marginChangedForModal.push(i)})),Pr(".navbar-toggler").forEach((function(i){var n=Ur(i,"marginRight")||"";zr(i,"data-margin-right",n),Wr(i,"marginRight","".concat(cr(Kr(i).marginRight,0)+e,"px")),t._marginChangedForModal.push(i)}));var i=Ur(t,"paddingRight")||"";zr(t,"data-padding-right",i),Wr(t,"paddingRight","".concat(cr(Kr(t).paddingRight,0)+e,"px"))}},resetScrollbar:function(){var t=document.body;t._paddingChangedForModal&&t._paddingChangedForModal.forEach((function(t){Gr(t,"data-padding-right")&&(Wr(t,"paddingRight",jr(t,"data-padding-right")||""),Nr(t,"data-padding-right"))})),t._marginChangedForModal&&t._marginChangedForModal.forEach((function(t){Gr(t,"data-margin-right")&&(Wr(t,"marginRight",jr(t,"data-margin-right")||""),Nr(t,"data-margin-right"))})),t._paddingChangedForModal=null,t._marginChangedForModal=null,Gr(t,"data-padding-right")&&(Wr(t,"paddingRight",jr(t,"data-padding-right")||""),Nr(t,"data-padding-right"))}}})),ab=ys("visible",{type:ho,defaultValue:!1,event:$n}),lb=ab.mixin,cb=ab.props,ub=ab.prop,db=ab.event,hb="FORCE",fb="cancel",pb="headerclose",mb="ok",vb=[fb,pb,mb],bb={subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["style","class"]},gb=vs(ee(c(c(c({},fc),cb),{},{ariaLabel:hs(go),autoFocusButton:hs(go,null,(function(t){return Pt(t)||nr(vb,t)})),bodyBgVariant:hs(go),bodyClass:hs(To),bodyTextVariant:hs(go),busy:hs(ho,!1),buttonSize:hs(go),cancelDisabled:hs(ho,!1),cancelTitle:hs(go,"Cancel"),cancelTitleHtml:hs(go),cancelVariant:hs(go,"secondary"),centered:hs(ho,!1),contentClass:hs(To),dialogClass:hs(To),footerBgVariant:hs(go),footerBorderVariant:hs(go),footerClass:hs(To),footerTextVariant:hs(go),headerBgVariant:hs(go),headerBorderVariant:hs(go),headerClass:hs(To),headerCloseContent:hs(go,"&times;"),headerCloseLabel:hs(go,"Close"),headerCloseVariant:hs(go),headerTextVariant:hs(go),hideBackdrop:hs(ho,!1),hideFooter:hs(ho,!1),hideHeader:hs(ho,!1),hideHeaderClose:hs(ho,!1),ignoreEnforceFocusSelector:hs(Co),lazy:hs(ho,!1),modalClass:hs(To),noCloseOnBackdrop:hs(ho,!1),noCloseOnEsc:hs(ho,!1),noEnforceFocus:hs(ho,!1),noFade:hs(ho,!1),noStacking:hs(ho,!1),okDisabled:hs(ho,!1),okOnly:hs(ho,!1),okTitle:hs(go,"OK"),okTitleHtml:hs(go),okVariant:hs(go,"primary"),returnFocus:hs([HTMLElement,vo,go]),scrollable:hs(ho,!1),size:hs(go,"md"),static:hs(ho,!1),title:hs(go),titleClass:hs(To),titleHtml:hs(go),titleSrOnly:hs(ho,!1),titleTag:hs(go,"h5")})),Ni),yb=i.default.extend({name:Ni,mixins:[Za,pc,lb,Jv,Ja,tb,Cs,ib],inheritAttrs:!1,props:gb,data:function(){return{isHidden:!0,isVisible:!1,isTransitioning:!1,isShow:!1,isBlock:!1,isOpening:!1,isClosing:!1,ignoreBackdropClick:!1,isModalOverflowing:!1,scrollbarWidth:0,zIndex:sb.getBaseZIndex(),isTop:!0,isBodyOverflowing:!1}},computed:{modalId:function(){return this.safeId()},modalOuterId:function(){return this.safeId("__BV_modal_outer_")},modalHeaderId:function(){return this.safeId("__BV_modal_header_")},modalBodyId:function(){return this.safeId("__BV_modal_body_")},modalTitleId:function(){return this.safeId("__BV_modal_title_")},modalContentId:function(){return this.safeId("__BV_modal_content_")},modalFooterId:function(){return this.safeId("__BV_modal_footer_")},modalBackdropId:function(){return this.safeId("__BV_modal_backdrop_")},modalClasses:function(){return[{fade:!this.noFade,show:this.isShow},this.modalClass]},modalStyles:function(){var t="".concat(this.scrollbarWidth,"px");return{paddingLeft:!this.isBodyOverflowing&&this.isModalOverflowing?t:"",paddingRight:this.isBodyOverflowing&&!this.isModalOverflowing?t:"",display:this.isBlock?"block":"none"}},dialogClasses:function(){var t;return[(t={},a(t,"modal-".concat(this.size),this.size),a(t,"modal-dialog-centered",this.centered),a(t,"modal-dialog-scrollable",this.scrollable),t),this.dialogClass]},headerClasses:function(){var t;return[(t={},a(t,"bg-".concat(this.headerBgVariant),this.headerBgVariant),a(t,"text-".concat(this.headerTextVariant),this.headerTextVariant),a(t,"border-".concat(this.headerBorderVariant),this.headerBorderVariant),t),this.headerClass]},titleClasses:function(){return[{"sr-only":this.titleSrOnly},this.titleClass]},bodyClasses:function(){var t;return[(t={},a(t,"bg-".concat(this.bodyBgVariant),this.bodyBgVariant),a(t,"text-".concat(this.bodyTextVariant),this.bodyTextVariant),t),this.bodyClass]},footerClasses:function(){var t;return[(t={},a(t,"bg-".concat(this.footerBgVariant),this.footerBgVariant),a(t,"text-".concat(this.footerTextVariant),this.footerTextVariant),a(t,"border-".concat(this.footerBorderVariant),this.footerBorderVariant),t),this.footerClass]},modalOuterStyle:function(){return{position:"absolute",zIndex:this.zIndex}},slotScope:function(){return{cancel:this.onCancel,close:this.onClose,hide:this.hide,ok:this.onOk,visible:this.isVisible}},computeIgnoreEnforceFocusSelector:function(){return or(this.ignoreEnforceFocusSelector).filter(ne).join(",").trim()},computedAttrs:function(){return c(c(c({},this.static?{}:this.scopedStyleAttrs),this.bvAttrs),{},{id:this.modalOuterId})},computedModalAttrs:function(){var t=this.isVisible,e=this.ariaLabel;return{id:this.modalId,role:"dialog","aria-hidden":t?null:"true","aria-modal":t?"true":null,"aria-label":e,"aria-labelledby":this.hideHeader||e||!(this.hasNormalizedSlot(Uo)||this.titleHtml||this.title)?null:this.modalTitleId,"aria-describedby":this.modalBodyId}}},watch:a({},ub,(function(t,e){t!==e&&this[t?"show":"hide"]()})),created:function(){this.$_observer=null,this.$_returnFocus=this.returnFocus||null},mounted:function(){this.zIndex=sb.getBaseZIndex(),this.listenOnRoot(Fs(Ni,to),this.showHandler),this.listenOnRoot(Fs(Ni,Nn),this.hideHandler),this.listenOnRoot(Fs(Ni,no),this.toggleHandler),this.listenOnRoot(Ds(Ni,to),this.modalListener),!0===this[ub]&&this.$nextTick(this.show)},beforeDestroy:function(){this.setObserver(!1),this.isVisible&&(this.isVisible=!1,this.isShow=!1,this.isTransitioning=!1)},methods:{setObserver:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,t&&(this.$_observer=au(this.$refs.content,this.checkModalOverflow.bind(this),bb))},updateModel:function(t){t!==this[ub]&&this.$emit(db,t)},buildEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new BvModalEvent(t,c(c({cancelable:!1,target:this.$refs.modal||this.$el||null,relatedTarget:null,trigger:null},e),{},{vueTarget:this,componentId:this.modalId}))},show:function(){if(!this.isVisible&&!this.isOpening)if(this.isClosing)this.$once(zn,this.show);else{this.isOpening=!0,this.$_returnFocus=this.$_returnFocus||this.getActiveElement();var t=this.buildEvent(to,{cancelable:!0});if(this.emitEvent(t),t.defaultPrevented||this.isVisible)return this.isOpening=!1,void this.updateModel(!1);this.doShow()}},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(this.isVisible&&!this.isClosing){this.isClosing=!0;var e=this.buildEvent(Nn,{cancelable:t!==hb,trigger:t||null});if(t===mb?this.$emit("ok",e):t===fb?this.$emit(kn,e):t===pb&&this.$emit(_n,e),this.emitEvent(e),e.defaultPrevented||!this.isVisible)return this.isClosing=!1,void this.updateModel(!0);this.setObserver(!1),this.isVisible=!1,this.updateModel(!1)}},toggle:function(t){t&&(this.$_returnFocus=t),this.isVisible?this.hide("toggle"):this.show()},getActiveElement:function(){var t=$r(M?[document.body]:[]);return t&&t.focus?t:null},doShow:function(){var t=this;sb.modalsAreOpen&&this.noStacking?this.listenOnRootOnce(Ds(Ni,zn),this.doShow):(sb.registerModal(this),this.isHidden=!1,this.$nextTick((function(){t.isVisible=!0,t.isOpening=!1,t.updateModel(!0),t.$nextTick((function(){t.setObserver(!0)}))})))},onBeforeEnter:function(){this.isTransitioning=!0,this.setResizeEvent(!0)},onEnter:function(){var t=this;this.isBlock=!0,xr((function(){xr((function(){t.isShow=!0}))}))},onAfterEnter:function(){var t=this;this.checkModalOverflow(),this.isTransitioning=!1,xr((function(){t.emitEvent(t.buildEvent(eo)),t.setEnforceFocus(!0),t.$nextTick((function(){t.focusFirst()}))}))},onBeforeLeave:function(){this.isTransitioning=!0,this.setResizeEvent(!1),this.setEnforceFocus(!1)},onLeave:function(){this.isShow=!1},onAfterLeave:function(){var t=this;this.isBlock=!1,this.isTransitioning=!1,this.isModalOverflowing=!1,this.isHidden=!0,this.$nextTick((function(){t.isClosing=!1,sb.unregisterModal(t),t.returnFocusTo(),t.emitEvent(t.buildEvent(zn))}))},emitEvent:function(t){var e=t.type;this.emitOnRoot(Ds(Ni,e),t,t.componentId),this.$emit(e,t)},onDialogMousedown:function(){var t=this,e=this.$refs.modal;Ss(e,"mouseup",(function i(n){ks(e,"mouseup",i,lo),n.target===e&&(t.ignoreBackdropClick=!0)}),lo)},onClickOut:function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:this.isVisible&&!this.noCloseOnBackdrop&&Lr(document.body,t.target)&&(Lr(this.$refs.content,t.target)||this.hide("backdrop"))},onOk:function(){this.hide(mb)},onCancel:function(){this.hide(fb)},onClose:function(){this.hide(pb)},onEsc:function(t){27===t.keyCode&&this.isVisible&&!this.noCloseOnEsc&&this.hide("esc")},focusHandler:function(t){var e=this.$refs.content,i=t.target;if(!(this.noEnforceFocus||!this.isTop||!this.isVisible||!e||document===i||Lr(e,i)||this.computeIgnoreEnforceFocusSelector&&Er(this.computeIgnoreEnforceFocusSelector,i,!0))){var n=Qr(this.$refs.content),o=this.$refs["bottom-trap"],r=this.$refs["top-trap"];if(o&&i===o){if(ts(n[0]))return}else if(r&&i===r&&ts(n[n.length-1]))return;ts(e,{preventScroll:!0})}},setEnforceFocus:function(t){this.listenDocument(t,"focusin",this.focusHandler)},setResizeEvent:function(t){this.listenWindow(t,"resize",this.checkModalOverflow),this.listenWindow(t,"orientationchange",this.checkModalOverflow)},showHandler:function(t,e){t===this.modalId&&(this.$_returnFocus=e||this.getActiveElement(),this.show())},hideHandler:function(t){t===this.modalId&&this.hide("event")},toggleHandler:function(t,e){t===this.modalId&&this.toggle(e)},modalListener:function(t){this.noStacking&&t.vueTarget!==this&&this.hide()},focusFirst:function(){var t=this;M&&xr((function(){var e=t.$refs.modal,i=t.$refs.content,n=t.getActiveElement();if(e&&i&&(!n||!Lr(i,n))){var o=t.$refs["ok-button"],r=t.$refs["cancel-button"],s=t.$refs["close-button"],a=t.autoFocusButton,l=a===mb&&o?o.$el||o:a===fb&&r?r.$el||r:a===pb&&s?s.$el||s:i;ts(l),l===i&&t.$nextTick((function(){e.scrollTop=0}))}}))},returnFocusTo:function(){var t=this.returnFocus||this.$_returnFocus||null;this.$_returnFocus=null,this.$nextTick((function(){(t=Et(t)?Or(t):t)&&(t=t.$el||t,ts(t))}))},checkModalOverflow:function(){if(this.isVisible){var t=this.$refs.modal;this.isModalOverflowing=t.scrollHeight>document.documentElement.clientHeight}},makeModal:function(t){var e=t();if(!this.hideHeader){var i=this.normalizeSlot("modal-header",this.slotScope);if(!i){var n=t();this.hideHeaderClose||(n=t(Ps,{props:{content:this.headerCloseContent,disabled:this.isTransitioning,ariaLabel:this.headerCloseLabel,textVariant:this.headerCloseVariant||this.headerTextVariant},on:{click:this.onClose},ref:"close-button"},[this.normalizeSlot("modal-header-close")])),i=[t(this.titleTag,{staticClass:"modal-title",class:this.titleClasses,attrs:{id:this.modalTitleId},domProps:this.hasNormalizedSlot(Uo)?{}:Fl(this.titleHtml,this.title)},this.normalizeSlot(Uo,this.slotScope)),n]}e=t("header",{staticClass:"modal-header",class:this.headerClasses,attrs:{id:this.modalHeaderId},ref:"header"},[i])}var o=t("div",{staticClass:"modal-body",class:this.bodyClasses,attrs:{id:this.modalBodyId},ref:"body"},this.normalizeSlot(Ao,this.slotScope)),r=t();if(!this.hideFooter){var s=this.normalizeSlot("modal-footer",this.slotScope);if(!s){var a=t();this.okOnly||(a=t(ml,{props:{variant:this.cancelVariant,size:this.buttonSize,disabled:this.cancelDisabled||this.busy||this.isTransitioning},domProps:this.hasNormalizedSlot(Wo)?{}:Fl(this.cancelTitleHtml,this.cancelTitle),on:{click:this.onCancel},ref:"cancel-button"},this.normalizeSlot(Wo))),s=[a,t(ml,{props:{variant:this.okVariant,size:this.buttonSize,disabled:this.okDisabled||this.busy||this.isTransitioning},domProps:this.hasNormalizedSlot(Yo)?{}:Fl(this.okTitleHtml,this.okTitle),on:{click:this.onOk},ref:"ok-button"},this.normalizeSlot(Yo))]}r=t("footer",{staticClass:"modal-footer",class:this.footerClasses,attrs:{id:this.modalFooterId},ref:"footer"},[s])}var l=t("div",{staticClass:"modal-content",class:this.contentClass,attrs:{id:this.modalContentId,tabindex:"-1"},ref:"content"},[e,o,r]),c=t(),u=t();this.isVisible&&!this.noEnforceFocus&&(c=t("span",{attrs:{tabindex:"0"},ref:"top-trap"}),u=t("span",{attrs:{tabindex:"0"},ref:"bottom-trap"}));var d=t("div",{staticClass:"modal-dialog",class:this.dialogClasses,on:{mousedown:this.onDialogMousedown},ref:"dialog"},[c,l,u]),h=t("div",{staticClass:"modal",class:this.modalClasses,style:this.modalStyles,attrs:this.computedModalAttrs,on:{keydown:this.onEsc,click:this.onClickOut},directives:[{name:"show",value:this.isVisible}],ref:"modal"},[d]);h=t("transition",{props:{enterClass:"",enterToClass:"",enterActiveClass:"",leaveClass:"",leaveActiveClass:"",leaveToClass:""},on:{beforeEnter:this.onBeforeEnter,enter:this.onEnter,afterEnter:this.onAfterEnter,beforeLeave:this.onBeforeLeave,leave:this.onLeave,afterLeave:this.onAfterLeave}},[h]);var f=t();return!this.hideBackdrop&&this.isVisible&&(f=t("div",{staticClass:"modal-backdrop",attrs:{id:this.modalBackdropId}},this.normalizeSlot("modal-backdrop"))),f=t(Ls,{props:{noFade:this.noFade}},[f]),t("div",{style:this.modalOuterStyle,attrs:this.computedAttrs,key:"modal-outer-".concat(this._uid)},[h,f])}},render:function(t){return this.static?this.lazy&&this.isHidden?t():this.makeModal(t):this.isHidden?t():t(rb,[this.makeModal(t)])}}),wb=Fs(Ni,to),Tb="__bv_modal_directive__",Cb=function(t){var e=t.modifiers,i=void 0===e?{}:e,n=t.arg,o=t.value;return Et(o)?o:Et(n)?n:Kt(i).reverse()[0]},xb=function(t){return t&&Vr(t,".dropdown-menu > li, li.nav-item")&&Or("a, button",t)||t},Sb=function(t){t&&"BUTTON"!==t.tagName&&(Gr(t,"role")||zr(t,"role","button"),"A"===t.tagName||Gr(t,"tabindex")||zr(t,"tabindex","0"))},kb=function(t){var e=t[Tb]||{},i=e.trigger,n=e.handler;i&&n&&(ks(i,"click",n,ao),ks(i,"keydown",n,ao),ks(t,"click",n,ao),ks(t,"keydown",n,ao)),delete t[Tb]},$b=function(t,e,i){var n=t[Tb]||{},o=Cb(e),r=xb(t);o===n.target&&r===n.trigger||(kb(t),function(t,e,i){var n=Cb(e),o=xb(t);if(n&&o){var r=function(t){var e=t.currentTarget;if(!Fr(e)){var o=t.type,r=t.keyCode;"click"!==o&&("keydown"!==o||r!==Ha&&r!==Ga)||i.context.$root.$emit(wb,n,e)}};t[Tb]={handler:r,target:n,trigger:o},Sb(o),Ss(o,"click",r,ao),"BUTTON"!==o.tagName&&"button"===jr(o,"role")&&Ss(o,"keydown",r,ao)}}(t,e,i)),Sb(r)},Bb={inserted:$b,updated:function(){},componentUpdated:$b,unbind:kb},_b="$bvModal",Db=["id"].concat(T(Kt(Qt(gb,["busy","lazy","noStacking","static","visible"])))),Fb=function(){},Ib={msgBoxContent:"default",title:"modal-title",okTitle:"modal-ok",cancelTitle:"modal-cancel"},Pb=function(t){return Db.reduce((function(e,i){return Ft(t[i])||(e[i]=t[i]),e}),{})},Ob=me({components:{BModal:yb},directives:{VBModal:Bb},plugins:{BVModalPlugin:me({plugins:{plugin:function(t){var e=t.extend({name:"BMsgBox",extends:yb,destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},mounted:function(){var t=this,e=function(){t.$nextTick((function(){xr((function(){t.$destroy()}))}))};this.$parent.$once(ro,e),this.$once(zn,e),this.$router&&this.$route&&this.$once(oo,this.$watch("$router",e)),this.show()}}),i=function(t,i){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Fb;if(!ce(_b)&&!ue(_b)){var o=new e({parent:t,propsData:c(c(c({},Pb(rs(Ni))),{},{hideHeaderClose:!0,hideHeader:!(i.title||i.titleHtml)},Qt(i,Kt(Ib))),{},{lazy:!1,busy:!1,visible:!1,noStacking:!1,noEnforceFocus:!1})});return Kt(Ib).forEach((function(t){Ft(i[t])||(o.$slots[Ib[t]]=or(i[t]))})),new Promise((function(t,e){var i=!1;o.$once(ro,(function(){i||e(new Error("BootstrapVue MsgBox destroyed before resolve"))})),o.$on(Nn,(function(e){if(!e.defaultPrevented){var o=n(e);e.defaultPrevented||(i=!0,t(o))}}));var r=document.createElement("div");document.body.appendChild(r),o.$mount(r)}))}},n=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(e&&!ue(_b)&&!ce(_b)&&Ot(o))return i(t,c(c({},Pb(n)),{},{msgBoxContent:e}),o)},r=function(){function t(e){o(this,t),Gt(this,{_vm:e,_root:e.$root}),Yt(this,{_vm:{enumerable:!0,configurable:!1,writable:!1},_root:{enumerable:!0,configurable:!1,writable:!1}})}return s(t,[{key:"show",value:function(t){if(t&&this._root){for(var e,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];(e=this._root).$emit.apply(e,[Fs(Ni,"show"),t].concat(n))}}},{key:"hide",value:function(t){if(t&&this._root){for(var e,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];(e=this._root).$emit.apply(e,[Fs(Ni,"hide"),t].concat(n))}}},{key:"msgBoxOk",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c(c({},e),{},{okOnly:!0,okDisabled:!1,hideFooter:!1,msgBoxContent:t});return n(this._vm,t,i,(function(){return!0}))}},{key:"msgBoxConfirm",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=c(c({},e),{},{okOnly:!1,okDisabled:!1,cancelDisabled:!1,hideFooter:!1});return n(this._vm,t,i,(function(t){var e=t.trigger;return"ok"===e||"cancel"!==e&&null}))}}]),t}();t.mixin({beforeCreate:function(){this._bv__modal=new r(this)}}),Xt(t.prototype,_b)||Ut(t.prototype,_b,{get:function(){return this&&this._bv__modal||le('"'.concat(_b,'" must be accessed from a Vue instance "this" context.'),Ni),this._bv__modal}})}}})}}),Vb=vs({align:hs(go),cardHeader:hs(ho,!1),fill:hs(ho,!1),justified:hs(ho,!1),pills:hs(ho,!1),small:hs(ho,!1),tabs:hs(ho,!1),tag:hs(go,"ul"),vertical:hs(ho,!1)},ji),Eb=i.default.extend({name:ji,functional:!0,props:Vb,render:function(t,e){var i,n,o=e.props,r=e.data,s=e.children,l=o.tabs,c=o.pills,u=o.vertical,d=o.align,h=o.cardHeader;return t(o.tag,F(r,{staticClass:"nav",class:(i={"nav-tabs":l,"nav-pills":c&&!l,"card-header-tabs":!u&&h&&l,"card-header-pills":!u&&h&&c&&!l,"flex-column":u,"nav-fill":!u&&o.fill,"nav-justified":!u&&o.justified},a(i,(n=d,"justify-content-".concat(n="left"===n?"start":"right"===n?"end":n)),!u&&d),a(i,"small",o.small),i)}),s)}}),Lb=Qt(nl,["event","routerTag"]),Ab=vs(ee(c(c({},Lb),{},{linkAttrs:hs(vo,{}),linkClasses:hs(To)})),Ki),Rb=i.default.extend({name:Ki,functional:!0,props:Ab,render:function(t,e){var i=e.props,n=e.data,o=e.listeners,r=e.children;return t("li",F(Qt(n,["on"]),{staticClass:"nav-item"}),[t(ol,{staticClass:"nav-link",class:i.linkClasses,attrs:i.linkAttrs,props:ps(Lb,i),on:o},r)])}}),Mb=i.default.extend({name:"BNavText",functional:!0,props:{},render:function(t,e){var i=e.data,n=e.children;return t("li",F(i,{staticClass:"navbar-text"}),n)}}),Hb=Qt(Yh,["inline"]),zb=vs(ee(c(c({},Hb),{},{formClass:hs(To)})),qi),Nb=i.default.extend({name:qi,functional:!0,props:zb,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=e.listeners,s=t(Uh,{class:i.formClass,props:c(c({},ps(Hb,i)),{},{inline:!0}),attrs:n.attrs,on:r},o);return t("li",F(Qt(n,["attrs","on"]),{staticClass:"form-inline"}),[s])}}),jb=vs(ee(c(c({},fc),Jt(Eh,[].concat(T(Kt(Oh)),["html","lazy","menuClass","noCaret","role","text","toggleClass"])))),Xi),Gb=i.default.extend({name:Xi,mixins:[pc,Vh,Cs],props:jb,computed:{toggleId:function(){return this.safeId("_BV_toggle_")},dropdownClasses:function(){return[this.directionClass,this.boundaryClass,{show:this.visible}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){return[this.toggleClass,{"dropdown-toggle-no-caret":this.noCaret}]}},render:function(t){var e=this.toggleId,i=this.visible,n=this.hide,o=t(ol,{staticClass:"nav-link dropdown-toggle",class:this.toggleClasses,props:{href:"#".concat(this.id||""),disabled:this.disabled},attrs:{id:e,role:"button","aria-haspopup":"true","aria-expanded":i?"true":"false"},on:{mousedown:this.onMousedown,click:this.toggle,keydown:this.toggle},ref:"toggle"},[this.normalizeSlot([Eo,"text"])||t("span",{domProps:Fl(this.html,this.text)})]),r=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{tabindex:"-1","aria-labelledby":e},on:{keydown:this.onKeydown},ref:"menu"},!this.lazy||i?this.normalizeSlot(Ao,{hide:n}):[t()]);return t("li",{staticClass:"nav-item b-nav-dropdown dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[o,r])}}),Wb=me({components:{BNav:Eb,BNavItem:Rb,BNavText:Mb,BNavForm:Nb,BNavItemDropdown:Gb,BNavItemDd:Gb,BNavDropdown:Gb,BNavDd:Gb},plugins:{DropdownPlugin:tf}}),Yb=vs({fixed:hs(go),print:hs(ho,!1),sticky:hs(ho,!1),tag:hs(go,"nav"),toggleable:hs(ko,!1),type:hs(go,"light"),variant:hs(go)},Gi),Ub=i.default.extend({name:Gi,mixins:[Cs],provide:function(){return{bvNavbar:this}},props:Yb,computed:{breakpointClass:function(){var t=this.toggleable,e=ss()[0],i=null;return t&&Et(t)&&t!==e?i="navbar-expand-".concat(t):!1===t&&(i="navbar-expand"),i}},render:function(t){var e,i=this.tag,n=this.type,o=this.variant,r=this.fixed;return t(i,{staticClass:"navbar",class:[(e={"d-print":this.print,"sticky-top":this.sticky},a(e,"navbar-".concat(n),n),a(e,"bg-".concat(o),o),a(e,"fixed-".concat(r),r),e),this.breakpointClass],attrs:{role:Br(i,"nav")?null:"navigation"}},[this.normalizeSlot()])}}),qb=vs(Jt(Vb,["tag","fill","justified","align","small"]),Yi),Kb=i.default.extend({name:Yi,functional:!0,props:qb,render:function(t,e){var i,n,o=e.props,r=e.data,s=e.children,l=o.align;return t(o.tag,F(r,{staticClass:"navbar-nav",class:(i={"nav-fill":o.fill,"nav-justified":o.justified},a(i,(n=l,"justify-content-".concat(n="left"===n?"start":"right"===n?"end":n)),l),a(i,"small",o.small),i)}),s)}}),Xb=Qt(nl,["event","routerTag"]);Xb.href.default=void 0,Xb.to.default=void 0;var Zb,Jb,Qb,tg,eg,ig,ng,og,rg,sg=vs(ee(c(c({},Xb),{},{tag:hs(go,"div")})),Wi),ag=i.default.extend({name:Wi,functional:!0,props:sg,render:function(t,e){var i=e.props,n=e.data,o=e.children,r=i.to||i.href;return t(r?ol:i.tag,F(n,{staticClass:"navbar-brand",props:r?ps(Xb,i):{}}),o)}}),lg="navbar-toggler",cg=Ds(Ue,"state"),ug=Ds(Ue,"sync-state"),dg=vs({disabled:hs(ho,!1),label:hs(go,"Toggle navigation"),target:hs(Co,void 0,!0)},Ui),hg=i.default.extend({name:Ui,directives:{VBToggle:ad},mixins:[Ja,Cs],props:dg,data:function(){return{toggleState:!1}},created:function(){this.listenOnRoot(cg,this.handleStateEvt),this.listenOnRoot(ug,this.handleStateEvt)},methods:{onClick:function(t){this.disabled||this.$emit(Bn,t)},handleStateEvt:function(t,e){t===this.target&&(this.toggleState=e)}},render:function(t){var e=this.disabled;return t("button",{staticClass:lg,class:{disabled:e},directives:[{name:"VBToggle",value:this.target}],attrs:{type:"button",disabled:e,"aria-label":this.label},on:{click:this.onClick}},[this.normalizeSlot(Ao,{expanded:this.toggleState})||t("span",{staticClass:"".concat(lg,"-icon")})])}}),fg=me({components:{BNavbar:Ub,BNavbarNav:Kb,BNavbarBrand:ag,BNavbarToggle:hg,BNavToggle:hg},plugins:{NavPlugin:Wb,CollapsePlugin:cd,DropdownPlugin:tf}}),pg=vs({label:hs(go),role:hs(go,"status"),small:hs(ho,!1),tag:hs(go,"span"),type:hs(go,"border"),variant:hs(go)},dn),mg=i.default.extend({name:dn,functional:!0,props:pg,render:function(t,e){var i,n=e.props,o=e.data,r=e.slots,s=e.scopedSlots,l=r(),c=Ts(jo,{},s||{},l)||n.label;return c&&(c=t("span",{staticClass:"sr-only"},c)),t(n.tag,F(o,{attrs:{role:c?n.role||"status":null,"aria-hidden":c?null:"true"},class:(i={},a(i,"spinner-".concat(n.type),n.type),a(i,"spinner-".concat(n.type,"-sm"),n.small),a(i,"text-".concat(n.variant),n.variant),i)}),[c||t()])}}),vg={top:0,left:0,bottom:0,right:0},bg=vs({bgColor:hs(go),blur:hs(go,"2px"),fixed:hs(ho,!1),noCenter:hs(ho,!1),noFade:hs(ho,!1),noWrap:hs(ho,!1),opacity:hs(_o,.85,(function(t){var e=cr(t,0);return e>=0&&e<=1})),overlayTag:hs(go,"div"),rounded:hs(ko,!1),show:hs(ho,!1),spinnerSmall:hs(ho,!1),spinnerType:hs(go,"border"),spinnerVariant:hs(go),variant:hs(go,"light"),wrapTag:hs(go,"div"),zIndex:hs(_o,10)},Zi),gg=i.default.extend({name:Zi,mixins:[Cs],props:bg,computed:{computedRounded:function(){var t=this.rounded;return!0===t||""===t?"rounded":t?"rounded-".concat(t):""},computedVariant:function(){var t=this.variant;return t&&!this.bgColor?"bg-".concat(t):""},slotScope:function(){return{spinnerType:this.spinnerType||null,spinnerVariant:this.spinnerVariant||null,spinnerSmall:this.spinnerSmall}}},methods:{defaultOverlayFn:function(t){var e=t.spinnerType,i=t.spinnerVariant,n=t.spinnerSmall;return this.$createElement(mg,{props:{type:e,variant:i,small:n}})}},render:function(t){var e=this,i=this.show,n=this.fixed,o=this.noFade,r=this.noWrap,s=this.slotScope,a=t();if(i){var l=t("div",{staticClass:"position-absolute",class:[this.computedVariant,this.computedRounded],style:c(c({},vg),{},{opacity:this.opacity,backgroundColor:this.bgColor||null,backdropFilter:this.blur?"blur(".concat(this.blur,")"):null})}),u=t("div",{staticClass:"position-absolute",style:this.noCenter?c({},vg):{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[this.normalizeSlot("overlay",s)||this.defaultOverlayFn(s)]);a=t(this.overlayTag,{staticClass:"b-overlay",class:{"position-absolute":!r||r&&!n,"position-fixed":r&&n},style:c(c({},vg),{},{zIndex:this.zIndex||10}),on:{click:function(t){return e.$emit(Bn,t)}},key:"overlay"},[l,u])}return a=t(Ls,{props:{noFade:o,appear:!0},on:{"after-enter":function(){return e.$emit(eo)},"after-leave":function(){return e.$emit(zn)}}},[a]),r?a:t(this.wrapTag,{staticClass:"b-overlay-wrap position-relative",attrs:{"aria-busy":i?"true":null}},r?[a]:[this.normalizeSlot(),a])}}),yg=me({components:{BOverlay:gg}}),wg=ys("value",{type:So,defaultValue:null,validator:function(t){return!(!It(t)&&lr(t,0)<1)||(le('"v-model" value must be a number greater than "0"',Ji),!1)}}),Tg=wg.mixin,Cg=wg.props,xg=wg.prop,Sg=wg.event,kg=function(t){var e=lr(t)||1;return e<1?5:e},$g=function(t,e){var i=lr(t)||1;return i>e?e:i<1?1:i},Bg=function(t){if(t.keyCode===Ga)return Bs(t,{immediatePropagation:!0}),t.currentTarget.click(),!1},_g=vs(ee(c(c({},Cg),{},{align:hs(go,"left"),ariaLabel:hs(go,"Pagination"),disabled:hs(ho,!1),ellipsisClass:hs(To),ellipsisText:hs(go,"…"),firstClass:hs(To),firstNumber:hs(ho,!1),firstText:hs(go,"«"),hideEllipsis:hs(ho,!1),hideGotoEndButtons:hs(ho,!1),labelFirstPage:hs(go,"Go to first page"),labelLastPage:hs(go,"Go to last page"),labelNextPage:hs(go,"Go to next page"),labelPage:hs(Bo,"Go to page"),labelPrevPage:hs(go,"Go to previous page"),lastClass:hs(To),lastNumber:hs(ho,!1),lastText:hs(go,"»"),limit:hs(_o,5,(function(t){return!(lr(t,0)<1)||(le('Prop "limit" must be a number greater than "0"',Ji),!1)})),nextClass:hs(To),nextText:hs(go,"›"),pageClass:hs(To),pills:hs(ho,!1),prevClass:hs(To),prevText:hs(go,"‹"),size:hs(go)})),"pagination"),Dg=i.default.extend({mixins:[Tg,Cs],props:_g,data:function(){var t=lr(this[xg],0);return{currentPage:t=t>0?t:-1,localNumberOfPages:1,localLimit:5}},computed:{btnSize:function(){var t=this.size;return t?"pagination-".concat(t):""},alignment:function(){var t=this.align;return"center"===t?"justify-content-center":"end"===t||"right"===t?"justify-content-end":"fill"===t?"text-center":""},styleClass:function(){return this.pills?"b-pagination-pills":""},computedCurrentPage:function(){return $g(this.currentPage,this.localNumberOfPages)},paginationParams:function(){var t=this.localLimit,e=this.localNumberOfPages,i=this.computedCurrentPage,n=this.hideEllipsis,o=this.firstNumber,r=this.lastNumber,s=!1,a=!1,l=t,c=1;e<=t?l=e:i<t-1&&t>3?(n&&!r||(a=!0,l=t-(o?0:1)),l=Ys(l,t)):e-i+2<t&&t>3?(n&&!o||(s=!0,l=t-(r?0:1)),c=e-l+1):(t>3&&(l=t-(n?0:2),s=!(n&&!o),a=!(n&&!r)),c=i-Xs(l/2)),c<1?(c=1,s=!1):c>e-l&&(c=e-l+1,a=!1),s&&o&&c<4&&(l+=2,c=1,s=!1);var u=c+l-1;return a&&r&&u>e-3&&(l+=u===e-2?2:3,a=!1),t<=3&&(o&&1===c?l=Ys(l+1,e,t+1):r&&e===c+l-1&&(c=Us(c-1,1),l=Ys(e-c+1,e,t+1))),{showFirstDots:s,showLastDots:a,numberOfLinks:l=Ys(l,e-c+1),startNumber:c}},pageList:function(){var t=this.paginationParams,e=t.numberOfLinks,i=t.startNumber,n=this.computedCurrentPage,o=function(t,e){return rr(e,(function(e,i){return{number:t+i,classes:null}}))}(i,e);if(o.length>3){var r=n-i,s="bv-d-xs-down-none";if(0===r)for(var a=3;a<o.length;a++)o[a].classes=s;else if(r===o.length-1)for(var l=0;l<o.length-3;l++)o[l].classes=s;else{for(var c=0;c<r-1;c++)o[c].classes=s;for(var u=o.length-1;u>r+1;u--)o[u].classes=s}}return o}},watch:(Zb={},a(Zb,xg,(function(t,e){t!==e&&(this.currentPage=$g(t,this.localNumberOfPages))})),a(Zb,"currentPage",(function(t,e){t!==e&&this.$emit(Sg,t>0?t:null)})),a(Zb,"limit",(function(t,e){t!==e&&(this.localLimit=kg(t))})),Zb),created:function(){var t=this;this.localLimit=kg(this.limit),this.$nextTick((function(){t.currentPage=t.currentPage>t.localNumberOfPages?t.localNumberOfPages:t.currentPage}))},methods:{handleKeyNav:function(t){var e=t.keyCode,i=t.shiftKey;this.isNav||(e===Na||e===Wa?(Bs(t,{propagation:!1}),i?this.focusFirst():this.focusPrev()):e!==ja&&e!==Ra||(Bs(t,{propagation:!1}),i?this.focusLast():this.focusNext()))},getButtons:function(){return Pr("button.page-link, a.page-link",this.$el).filter((function(t){return Dr(t)}))},focusCurrent:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().find((function(e){return lr(jr(e,"aria-posinset"),0)===t.computedCurrentPage}));ts(e)||t.focusFirst()}))},focusFirst:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().find((function(t){return!Fr(t)}));ts(e)}))},focusLast:function(){var t=this;this.$nextTick((function(){var e=t.getButtons().reverse().find((function(t){return!Fr(t)}));ts(e)}))},focusPrev:function(){var t=this;this.$nextTick((function(){var e=t.getButtons(),i=e.indexOf($r());i>0&&!Fr(e[i-1])&&ts(e[i-1])}))},focusNext:function(){var t=this;this.$nextTick((function(){var e=t.getButtons(),i=e.indexOf($r());i<e.length-1&&!Fr(e[i+1])&&ts(e[i+1])}))}},render:function(t){var e=this,i=this.disabled,n=this.labelPage,o=this.ariaLabel,r=this.isNav,s=this.localNumberOfPages,a=this.computedCurrentPage,l=this.pageList.map((function(t){return t.number})),c=this.paginationParams,u=c.showFirstDots,d=c.showLastDots,h="fill"===this.align,f=[],p=function(t){return t===a},m=this.currentPage<1,v=function(n,o,a,l,c,u,d){var f=i||p(u)||m||n<1||n>s,v=n<1?1:n>s?s:n,b={disabled:f,page:v,index:v-1},g=e.normalizeSlot(a,b)||vr(l)||t(),y=t(f?"span":r?ol:"button",{staticClass:"page-link",class:{"flex-grow-1":!r&&!f&&h},props:f||!r?{}:e.linkProps(n),attrs:{role:r?null:"menuitem",type:r||f?null:"button",tabindex:f||r?null:"-1","aria-label":o,"aria-controls":e.ariaControls||null,"aria-disabled":f?"true":null},on:f?{}:{"!click":function(t){e.onClick(t,n)},keydown:Bg}},[g]);return t("li",{key:d,staticClass:"page-item",class:[{disabled:f,"flex-fill":h,"d-flex":h&&!r&&!f},c],attrs:{role:r?null:"presentation","aria-hidden":f?"true":null}},[y])},b=function(i){return t("li",{staticClass:"page-item",class:["disabled","bv-d-xs-down-none",h?"flex-fill":"",e.ellipsisClass],attrs:{role:"separator"},key:"ellipsis-".concat(i?"last":"first")},[t("span",{staticClass:"page-link"},[e.normalizeSlot("ellipsis-text")||vr(e.ellipsisText)||t()])])},g=function(o,a){var l=o.number,c=p(l)&&!m,u=i?null:c||m&&0===a?"0":"-1",d={role:r?null:"menuitemradio",type:r||i?null:"button","aria-disabled":i?"true":null,"aria-controls":e.ariaControls||null,"aria-label":gs(n)?n(l):"".concat(Ot(n)?n():n," ").concat(l),"aria-checked":r?null:c?"true":"false","aria-current":r&&c?"page":null,"aria-posinset":r?null:l,"aria-setsize":r?null:s,tabindex:r?null:u},f=vr(e.makePage(l)),v={page:l,index:l-1,content:f,active:c,disabled:i},b=t(i?"span":r?ol:"button",{props:i||!r?{}:e.linkProps(l),staticClass:"page-link",class:{"flex-grow-1":!r&&!i&&h},attrs:d,on:i?{}:{"!click":function(t){e.onClick(t,l)},keydown:Bg}},[e.normalizeSlot("page",v)||f]);return t("li",{staticClass:"page-item",class:[{disabled:i,active:c,"flex-fill":h,"d-flex":h&&!r&&!i},o.classes,e.pageClass],attrs:{role:r?null:"presentation"},key:"page-".concat(l)},[b])},y=t();this.firstNumber||this.hideGotoEndButtons||(y=v(1,this.labelFirstPage,"first-text",this.firstText,this.firstClass,1,"pagination-goto-first")),f.push(y),f.push(v(a-1,this.labelPrevPage,"prev-text",this.prevText,this.prevClass,1,"pagination-goto-prev")),f.push(this.firstNumber&&1!==l[0]?g({number:1},0):t()),f.push(u?b(!1):t()),this.pageList.forEach((function(t,i){var n=u&&e.firstNumber&&1!==l[0]?1:0;f.push(g(t,i+n))})),f.push(d?b(!0):t()),f.push(this.lastNumber&&l[l.length-1]!==s?g({number:s},-1):t()),f.push(v(a+1,this.labelNextPage,"next-text",this.nextText,this.nextClass,s,"pagination-goto-next"));var w=t();this.lastNumber||this.hideGotoEndButtons||(w=v(s,this.labelLastPage,"last-text",this.lastText,this.lastClass,s,"pagination-goto-last")),f.push(w);var T=t("ul",{staticClass:"pagination",class:["b-pagination",this.btnSize,this.alignment,this.styleClass],attrs:{role:r?null:"menubar","aria-disabled":i?"true":"false","aria-label":r?null:o||null},on:r?{}:{keydown:this.handleKeyNav},ref:"ul"},f);return r?t("nav",{attrs:{"aria-disabled":i?"true":null,"aria-hidden":i?"true":"false","aria-label":r&&o||null}},[T]):T}}),Fg=function(t){return Us(lr(t)||20,1)},Ig=function(t){return Us(lr(t)||0,0)},Pg=vs(ee(c(c({},_g),{},{ariaControls:hs(go),perPage:hs(_o,20),totalRows:hs(_o,0)})),Ji),Og=i.default.extend({name:Ji,mixins:[Dg],props:Pg,computed:{numberOfPages:function(){var t=Ks(Ig(this.totalRows)/Fg(this.perPage));return t<1?1:t},pageSizeNumberOfPages:function(){return{perPage:Fg(this.perPage),totalRows:Ig(this.totalRows),numberOfPages:this.numberOfPages}}},watch:{pageSizeNumberOfPages:function(t,e){Pt(e)||(t.perPage!==e.perPage&&t.totalRows===e.totalRows||t.numberOfPages!==e.numberOfPages&&this.currentPage>t.numberOfPages)&&(this.currentPage=1),this.localNumberOfPages=t.numberOfPages}},created:function(){var t=this;this.localNumberOfPages=this.numberOfPages;var e=lr(this[xg],0);e>0?this.currentPage=e:this.$nextTick((function(){t.currentPage=0}))},methods:{onClick:function(t,e){var i=this;if(e!==this.currentPage){var n=t.target,o=new BvEvent(Kn,{cancelable:!0,vueTarget:this,target:n});this.$emit(o.type,o,e),o.defaultPrevented||(this.currentPage=e,this.$emit($n,this.currentPage),this.$nextTick((function(){Dr(n)&&i.$el.contains(n)?ts(n):i.focusCurrent()})))}},makePage:function(t){return t},linkProps:function(){return{}}}}),Vg=me({components:{BPagination:Og}}),Eg=Qt(nl,["event","routerTag"]),Lg=vs(ee(c(c(c({},_g),Eg),{},{baseUrl:hs(go,"/"),linkGen:hs(po),noPageDetect:hs(ho,!1),numberOfPages:hs(_o,1,(function(t){return!(lr(t,0)<1)||(le('Prop "number-of-pages" must be a number greater than "0"',Qi),!1)})),pageGen:hs(po),pages:hs(uo),useRouter:hs(ho,!1)})),Qi),Ag=i.default.extend({name:Qi,mixins:[Dg],props:Lg,computed:{isNav:function(){return!0},computedValue:function(){var t=lr(this.value,0);return t<1?null:t}},watch:{numberOfPages:function(){var t=this;this.$nextTick((function(){t.setNumberOfPages()}))},pages:function(){var t=this;this.$nextTick((function(){t.setNumberOfPages()}))}},created:function(){this.setNumberOfPages()},mounted:function(){var t=this;this.$router&&this.$watch("$route",(function(){t.$nextTick((function(){xr((function(){t.guessCurrentPage()}))}))}))},methods:{setNumberOfPages:function(){var t,e=this;Rt(this.pages)&&this.pages.length>0?this.localNumberOfPages=this.pages.length:this.localNumberOfPages=(t=this.numberOfPages,Us(lr(t,0),1)),this.$nextTick((function(){e.guessCurrentPage()}))},onClick:function(t,e){var i=this;if(e!==this.currentPage){var n=t.currentTarget||t.target,o=new BvEvent(Kn,{cancelable:!0,vueTarget:this,target:n});this.$emit(o.type,o,e),o.defaultPrevented||(xr((function(){i.currentPage=e,i.$emit($n,e)})),this.$nextTick((function(){es(n)})))}},getPageInfo:function(t){if(!Rt(this.pages)||0===this.pages.length||Ft(this.pages[t-1])){var e="".concat(this.baseUrl).concat(t);return{link:this.useRouter?{path:e}:e,text:vr(t)}}var i=this.pages[t-1];if(Mt(i)){var n=i.link;return{link:Mt(n)?n:this.useRouter?{path:n}:n,text:vr(i.text||t)}}return{link:vr(i),text:vr(t)}},makePage:function(t){var e=this.pageGen,i=this.getPageInfo(t);return gs(e)?e(t,i):i.text},makeLink:function(t){var e=this.linkGen,i=this.getPageInfo(t);return gs(e)?e(t,i):i.link},linkProps:function(t){var e=ps(Eg,this),i=this.makeLink(t);return this.useRouter||Mt(i)?e.to=i:e.href=i,e},resolveLink:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{(t=document.createElement("a")).href=ua({to:e},"a","/","/"),document.body.appendChild(t);var i=t,n=i.pathname,o=i.hash,r=i.search;return document.body.removeChild(t),{path:n,hash:o,query:aa(r)}}catch(e){try{t&&t.parentNode&&t.parentNode.removeChild(t)}catch(t){}return{}}},resolveRoute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{var e=this.$router.resolve(t,this.$route).route;return{path:e.path,hash:e.hash,query:e.query}}catch(t){return{}}},guessCurrentPage:function(){var t=this.$router,e=this.$route,i=this.computedValue;if(!this.noPageDetect&&!i&&(M||!M&&t))for(var n=t&&e?{path:e.path,hash:e.hash,query:e.query}:{},o=M?window.location||document.location:null,r=o?{path:o.pathname,hash:o.hash,query:aa(o.search)}:{},s=1;!i&&s<=this.localNumberOfPages;s++){var a=this.makeLink(s);i=t&&(Mt(a)||this.useRouter)?Ua(this.resolveRoute(a),n)?s:null:M?Ua(this.resolveLink(a),r)?s:null:-1}this.currentPage=i>0?i:0}}}),Rg=me({components:{BPaginationNav:Ag}}),Mg={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},Hg={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},zg={arrowPadding:hs(_o,6),boundary:hs([HTMLElement,go],"scrollParent"),boundaryPadding:hs(_o,5),fallbackPlacement:hs(Co,"flip"),offset:hs(_o,0),placement:hs(go,"top"),target:hs([HTMLElement,SVGElement])},Ng=i.default.extend({name:"BVPopper",props:zg,data:function(){return{noFade:!1,localShow:!0,attachment:this.getAttachment(this.placement)}},computed:{templateType:function(){return"unknown"},popperConfig:function(){var t=this,e=this.placement;return{placement:this.getAttachment(e),modifiers:{offset:{offset:this.getOffset(e)},flip:{behavior:this.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.boundaryPadding,boundariesElement:this.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t.popperPlacementChange(e)},onUpdate:function(e){t.popperPlacementChange(e)}}}},created:function(){var t=this;this.$_popper=null,this.localShow=!0,this.$on(to,(function(e){t.popperCreate(e)}));var e=function(){t.$nextTick((function(){xr((function(){t.$destroy()}))}))};this.$parent.$once(ro,e),this.$once(zn,e)},beforeMount:function(){this.attachment=this.getAttachment(this.placement)},updated:function(){this.updatePopper()},beforeDestroy:function(){this.destroyPopper()},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},methods:{hide:function(){this.localShow=!1},getAttachment:function(t){return Mg[String(t).toUpperCase()]||"auto"},getOffset:function(t){if(!this.offset){var e=this.$refs.arrow||Or(".arrow",this.$el),i=cr(Kr(e).width,0)+cr(this.arrowPadding,0);switch(Hg[String(t).toUpperCase()]||0){case 1:return"+50%p - ".concat(i,"px");case-1:return"-50%p + ".concat(i,"px");default:return 0}}return this.offset},popperCreate:function(t){this.destroyPopper(),this.$_popper=new mh(this.target,t,this.popperConfig)},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){this.$_popper&&this.$_popper.scheduleUpdate()},popperPlacementChange:function(t){this.attachment=this.getAttachment(t.placement)},renderTemplate:function(t){return t("div")}},render:function(t){var e=this,i=this.noFade;return t(Ls,{props:{appear:!0,noFade:i},on:{beforeEnter:function(t){return e.$emit(to,t)},afterEnter:function(t){return e.$emit(eo,t)},beforeLeave:function(t){return e.$emit(Nn,t)},afterLeave:function(t){return e.$emit(zn,t)}}},[this.localShow?this.renderTemplate(t):t()])}}),jg={html:hs(ho,!1),id:hs(go)},Gg=i.default.extend({name:"BVTooltipTemplate",extends:Ng,mixins:[ib],props:jg,data:function(){return{title:"",content:"",variant:null,customClass:null,interactive:!0}},computed:{templateType:function(){return"tooltip"},templateClasses:function(){var t,e=this.variant,i=this.attachment,n=this.templateType;return[(t={noninteractive:!this.interactive},a(t,"b-".concat(n,"-").concat(e),e),a(t,"bs-".concat(n,"-").concat(i),i),t),this.customClass]},templateAttributes:function(){var t=this.id;return c(c({},this.$parent.$parent.$attrs),{},{id:t,role:"tooltip",tabindex:"-1"},this.scopedStyleAttrs)},templateListeners:function(){var t=this;return{mouseenter:function(e){t.$emit(Wn,e)},mouseleave:function(e){t.$emit(Yn,e)},focusin:function(e){t.$emit(Rn,e)},focusout:function(e){t.$emit(Mn,e)}}}},methods:{renderTemplate:function(t){var e=this.title,i=Ot(e)?e({}):e,n=this.html&&!Ot(e)?{innerHTML:e}:{};return t("div",{staticClass:"tooltip b-tooltip",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),t("div",{staticClass:"tooltip-inner",domProps:n},[i])])}}}),Wg=".modal-content",Yg=Ds(Ni,zn),Ug=[Wg,".b-sidebar"].join(", "),qg="data-original-title",Kg={title:"",content:"",variant:null,customClass:null,triggers:"",placement:"auto",fallbackPlacement:"flip",target:null,container:null,noFade:!1,boundary:"scrollParent",boundaryPadding:5,offset:0,delay:0,arrowPadding:6,interactive:!0,disabled:!1,id:null,html:!1},Xg=i.default.extend({name:"BVTooltip",mixins:[Ja],data:function(){return c(c({},Kg),{},{activeTrigger:{hover:!1,click:!1,focus:!1},localShow:!1})},computed:{templateType:function(){return"tooltip"},computedId:function(){return this.id||"__bv_".concat(this.templateType,"_").concat(this._uid,"__")},computedDelay:function(){var t={show:0,hide:0};return Ht(this.delay)?(t.show=Us(lr(this.delay.show,0),0),t.hide=Us(lr(this.delay.hide,0),0)):(Lt(this.delay)||Et(this.delay))&&(t.show=t.hide=Us(lr(this.delay,0),0)),t},computedTriggers:function(){return or(this.triggers).filter(ne).join(" ").trim().toLowerCase().split(/\s+/).sort()},isWithActiveTrigger:function(){for(var t in this.activeTrigger)if(this.activeTrigger[t])return!0;return!1},computedTemplateData:function(){return{title:this.title,content:this.content,variant:this.variant,customClass:this.customClass,noFade:this.noFade,interactive:this.interactive}}},watch:{computedTriggers:function(t,e){var i=this;Ua(t,e)||this.$nextTick((function(){i.unListen(),e.forEach((function(e){nr(t,e)||i.activeTrigger[e]&&(i.activeTrigger[e]=!1)})),i.listen()}))},computedTemplateData:function(){this.handleTemplateUpdate()},title:function(t,e){t===e||t||this.hide()},disabled:function(t){t?this.disable():this.enable()}},created:function(){var t=this;this.$_tip=null,this.$_hoverTimeout=null,this.$_hoverState="",this.$_visibleInterval=null,this.$_enabled=!this.disabled,this.$_noop=su.bind(this),this.$parent&&this.$parent.$once(oo,(function(){t.$nextTick((function(){xr((function(){t.$destroy()}))}))})),this.$nextTick((function(){var e=t.getTarget();e&&Lr(document.body,e)?(t.scopeId=eb(t.$parent),t.listen()):le(Et(t.target)?'Unable to find target element by ID "#'.concat(t.target,'" in document.'):"The provided target is no valid HTML element.",t.templateType)}))},updated:function(){this.$nextTick(this.handleTemplateUpdate)},deactivated:function(){this.forceHide()},beforeDestroy:function(){this.unListen(),this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.clearVisibilityInterval(),this.destroyTemplate(),this.$_noop=null},methods:{getTemplate:function(){return Gg},updateData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=!1;Kt(Kg).forEach((function(n){Ft(e[n])||t[n]===e[n]||(t[n]=e[n],"title"===n&&(i=!0))})),i&&this.localShow&&this.fixTitle()},createTemplateAndShow:function(){var t=this.getContainer(),e=this.getTemplate(),i=this.$_tip=new e({parent:this,propsData:{id:this.computedId,html:this.html,placement:this.placement,fallbackPlacement:this.fallbackPlacement,target:this.getPlacementTarget(),boundary:this.getBoundary(),offset:lr(this.offset,0),arrowPadding:lr(this.arrowPadding,0),boundaryPadding:lr(this.boundaryPadding,0)}});this.handleTemplateUpdate(),i.$once(to,this.onTemplateShow),i.$once(eo,this.onTemplateShown),i.$once(Nn,this.onTemplateHide),i.$once(zn,this.onTemplateHidden),i.$once(ro,this.destroyTemplate),i.$on(Rn,this.handleEvent),i.$on(Mn,this.handleEvent),i.$on(Wn,this.handleEvent),i.$on(Yn,this.handleEvent),i.$mount(t.appendChild(document.createElement("div")))},hideTemplate:function(){this.$_tip&&this.$_tip.hide(),this.clearActiveTriggers(),this.$_hoverState=""},destroyTemplate:function(){this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.localPlacementTarget=null;try{this.$_tip.$destroy()}catch(t){}this.$_tip=null,this.removeAriaDescribedby(),this.restoreTitle(),this.localShow=!1},getTemplateElement:function(){return this.$_tip?this.$_tip.$el:null},handleTemplateUpdate:function(){var t=this,e=this.$_tip;if(e){["title","content","variant","customClass","noFade","interactive"].forEach((function(i){e[i]!==t[i]&&(e[i]=t[i])}))}},show:function(){var t=this.getTarget();if(t&&Lr(document.body,t)&&Dr(t)&&!this.dropdownOpen()&&(!Pt(this.title)&&""!==this.title||!Pt(this.content)&&""!==this.content)&&!this.$_tip&&!this.localShow){this.localShow=!0;var e=this.buildEvent(to,{cancelable:!0});this.emitEvent(e),e.defaultPrevented?this.destroyTemplate():(this.fixTitle(),this.addAriaDescribedby(),this.createTemplateAndShow())}},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.getTemplateElement();if(e&&this.localShow){var i=this.buildEvent(Nn,{cancelable:!t});this.emitEvent(i),i.defaultPrevented||this.hideTemplate()}else this.restoreTitle()},forceHide:function(){this.getTemplateElement()&&this.localShow&&(this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.$_tip&&(this.$_tip.noFade=!0),this.hide(!0))},enable:function(){this.$_enabled=!0,this.emitEvent(this.buildEvent(En))},disable:function(){this.$_enabled=!1,this.emitEvent(this.buildEvent(On))},onTemplateShow:function(){this.setWhileOpenListeners(!0)},onTemplateShown:function(){var t=this.$_hoverState;this.$_hoverState="","out"===t&&this.leave(null),this.emitEvent(this.buildEvent(eo))},onTemplateHide:function(){this.setWhileOpenListeners(!1)},onTemplateHidden:function(){this.destroyTemplate(),this.emitEvent(this.buildEvent(zn))},getTarget:function(){var t=this.target;return Et(t)?t=Ar(t.replace(/^#/,"")):Ot(t)?t=t():t&&(t=t.$el||t),kr(t)?t:null},getPlacementTarget:function(){return this.getTarget()},getTargetId:function(){var t=this.getTarget();return t&&t.id?t.id:null},getContainer:function(){var t=!!this.container&&(this.container.$el||this.container),e=document.body,i=this.getTarget();return!1===t?Er(Ug,i)||e:Et(t)&&Ar(t.replace(/^#/,""))||e},getBoundary:function(){return this.boundary?this.boundary.$el||this.boundary:"scrollParent"},isInModal:function(){var t=this.getTarget();return t&&Er(Wg,t)},isDropdown:function(){var t=this.getTarget();return t&&Hr(t,"dropdown")},dropdownOpen:function(){var t=this.getTarget();return this.isDropdown()&&t&&Or(".dropdown-menu.show",t)},clearHoverTimeout:function(){clearTimeout(this.$_hoverTimeout),this.$_hoverTimeout=null},clearVisibilityInterval:function(){clearInterval(this.$_visibleInterval),this.$_visibleInterval=null},clearActiveTriggers:function(){for(var t in this.activeTrigger)this.activeTrigger[t]=!1},addAriaDescribedby:function(){var t=this.getTarget(),e=jr(t,"aria-describedby")||"";e=e.split(/\s+/).concat(this.computedId).join(" ").trim(),zr(t,"aria-describedby",e)},removeAriaDescribedby:function(){var t=this,e=this.getTarget(),i=jr(e,"aria-describedby")||"";(i=i.split(/\s+/).filter((function(e){return e!==t.computedId})).join(" ").trim())?zr(e,"aria-describedby",i):Nr(e,"aria-describedby")},fixTitle:function(){var t=this.getTarget();if(Gr(t,"title")){var e=jr(t,"title");zr(t,"title",""),e&&zr(t,qg,e)}},restoreTitle:function(){var t=this.getTarget();if(Gr(t,qg)){var e=jr(t,qg);Nr(t,qg),e&&zr(t,"title",e)}},buildEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new BvEvent(t,c({cancelable:!1,target:this.getTarget(),relatedTarget:this.getTemplateElement()||null,componentId:this.computedId,vueTarget:this},e))},emitEvent:function(t){var e=t.type;this.emitOnRoot(Ds(this.templateType,e),t),this.$emit(e,t)},listen:function(){var t=this,e=this.getTarget();e&&(this.setRootListener(!0),this.computedTriggers.forEach((function(i){"click"===i?Ss(e,"click",t.handleEvent,lo):"focus"===i?(Ss(e,"focusin",t.handleEvent,lo),Ss(e,"focusout",t.handleEvent,lo)):"blur"===i?Ss(e,"focusout",t.handleEvent,lo):"hover"===i&&(Ss(e,"mouseenter",t.handleEvent,lo),Ss(e,"mouseleave",t.handleEvent,lo))}),this))},unListen:function(){var t=this,e=this.getTarget();this.setRootListener(!1),["click","focusin","focusout","mouseenter","mouseleave"].forEach((function(i){e&&ks(e,i,t.handleEvent,lo)}),this)},setRootListener:function(t){var e=this.$root;if(e){var i=t?"$on":"$off",n=this.templateType;e[i](Fs(n,Nn),this.doHide),e[i](Fs(n,to),this.doShow),e[i](Fs(n,Pn),this.doDisable),e[i](Fs(n,Vn),this.doEnable)}},setWhileOpenListeners:function(t){this.setModalListener(t),this.setDropdownListener(t),this.visibleCheck(t),this.setOnTouchStartListener(t)},visibleCheck:function(t){var e=this;this.clearVisibilityInterval();var i=this.getTarget(),n=this.getTemplateElement();t&&(this.$_visibleInterval=setInterval((function(){!n||!e.localShow||i.parentNode&&Dr(i)||e.forceHide()}),100))},setModalListener:function(t){this.isInModal()&&this.$root[t?"$on":"$off"](Yg,this.forceHide)},setOnTouchStartListener:function(t){var e=this;"ontouchstart"in document.documentElement&&ir(document.body.children).forEach((function(i){$s(t,i,"mouseover",e.$_noop)}))},setDropdownListener:function(t){var e=this.getTarget();e&&this.$root&&this.isDropdown&&e.__vue__&&e.__vue__[t?"$on":"$off"](eo,this.forceHide)},handleEvent:function(t){var e=this.getTarget();if(e&&!Fr(e)&&this.$_enabled&&!this.dropdownOpen()){var i=t.type,n=this.computedTriggers;if("click"===i&&nr(n,"click"))this.click(t);else if("mouseenter"===i&&nr(n,"hover"))this.enter(t);else if("focusin"===i&&nr(n,"focus"))this.enter(t);else if("focusout"===i&&(nr(n,"focus")||nr(n,"blur"))||"mouseleave"===i&&nr(n,"hover")){var o=this.getTemplateElement(),r=t.target,s=t.relatedTarget;if(o&&Lr(o,r)&&Lr(e,s)||o&&Lr(e,r)&&Lr(o,s)||o&&Lr(o,r)&&Lr(o,s)||Lr(e,r)&&Lr(e,s))return;this.leave(t)}}},doHide:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.forceHide()},doShow:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.show()},doDisable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.disable()},doEnable:function(t){t&&this.getTargetId()!==t&&this.computedId!==t||this.enable()},click:function(t){this.$_enabled&&!this.dropdownOpen()&&(ts(t.currentTarget),this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger?this.enter(null):this.leave(null))},toggle:function(){this.$_enabled&&!this.dropdownOpen()&&(this.localShow?this.leave(null):this.enter(null))},enter:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusin"===e.type?"focus":"hover"]=!0),this.localShow||"in"===this.$_hoverState?this.$_hoverState="in":(this.clearHoverTimeout(),this.$_hoverState="in",this.computedDelay.show?(this.fixTitle(),this.$_hoverTimeout=setTimeout((function(){"in"===t.$_hoverState?t.show():t.localShow||t.restoreTitle()}),this.computedDelay.show)):this.show())},leave:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e&&(this.activeTrigger["focusout"===e.type?"focus":"hover"]=!1,"focusout"===e.type&&nr(this.computedTriggers,"blur")&&(this.activeTrigger.click=!1,this.activeTrigger.hover=!1)),this.isWithActiveTrigger||(this.clearHoverTimeout(),this.$_hoverState="out",this.computedDelay.hide?this.$_hoverTimeout=setTimeout((function(){"out"===t.$_hoverState&&t.hide()}),this.computedDelay.hide):this.hide())}}}),Zg="disabled",Jg="update:disabled",Qg="show",ty=vs((a(Jb={boundary:hs([HTMLElement,vo,go],"scrollParent"),boundaryPadding:hs(_o,50),container:hs([HTMLElement,vo,go]),customClass:hs(go),delay:hs(Do,50)},Zg,hs(ho,!1)),a(Jb,"fallbackPlacement",hs(Co,"flip")),a(Jb,"id",hs(go)),a(Jb,"noFade",hs(ho,!1)),a(Jb,"noninteractive",hs(ho,!1)),a(Jb,"offset",hs(_o,0)),a(Jb,"placement",hs(go,"top")),a(Jb,Qg,hs(ho,!1)),a(Jb,"target",hs([HTMLElement,SVGElement,po,vo,go],void 0,!0)),a(Jb,"title",hs(go)),a(Jb,"triggers",hs(Co,"hover focus")),a(Jb,"variant",hs(go)),Jb),Sn),ey=i.default.extend({name:Sn,mixins:[Cs],inheritAttrs:!1,props:ty,data:function(){return{localShow:this.show,localTitle:"",localContent:""}},computed:{templateData:function(){return c({title:this.localTitle,content:this.localContent,interactive:!this.noninteractive},Jt(this.$props,["boundary","boundaryPadding","container","customClass","delay","fallbackPlacement","id","noFade","offset","placement","target","target","triggers","variant",Zg]))},templateTitleContent:function(){return{title:this.title,content:this.content}}},watch:(Qb={},a(Qb,Qg,(function(t,e){t!==e&&t!==this.localShow&&this.$_toolpop&&(t?this.$_toolpop.show():this.$_toolpop.forceHide())})),a(Qb,Zg,(function(t){t?this.doDisable():this.doEnable()})),a(Qb,"localShow",(function(t){this.$emit("update:show",t)})),a(Qb,"templateData",(function(){var t=this;this.$nextTick((function(){t.$_toolpop&&t.$_toolpop.updateData(t.templateData)}))})),a(Qb,"templateTitleContent",(function(){this.$nextTick(this.updateContent)})),Qb),created:function(){this.$_toolpop=null},updated:function(){this.$nextTick(this.updateContent)},beforeDestroy:function(){this.$off(qn,this.doOpen),this.$off(_n,this.doClose),this.$off(Pn,this.doDisable),this.$off(Vn,this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function(){var t=this;this.$nextTick((function(){var e=t.getComponent();t.updateContent();var i=eb(t)||eb(t.$parent),n=t.$_toolpop=new e({parent:t,_scopeId:i||void 0});n.updateData(t.templateData),n.$on(to,t.onShow),n.$on(eo,t.onShown),n.$on(Nn,t.onHide),n.$on(zn,t.onHidden),n.$on(On,t.onDisabled),n.$on(En,t.onEnabled),t.disabled&&t.doDisable(),t.$on(qn,t.doOpen),t.$on(_n,t.doClose),t.$on(Pn,t.doDisable),t.$on(Vn,t.doEnable),t.localShow&&n.show()}))},methods:{getComponent:function(){return Xg},updateContent:function(){this.setTitle(this.normalizeSlot()||this.title)},setTitle:function(t){t=Pt(t)?"":t,this.localTitle!==t&&(this.localTitle=t)},setContent:function(t){t=Pt(t)?"":t,this.localContent!==t&&(this.localContent=t)},onShow:function(t){this.$emit(to,t),t&&(this.localShow=!t.defaultPrevented)},onShown:function(t){this.localShow=!0,this.$emit(eo,t)},onHide:function(t){this.$emit(Nn,t)},onHidden:function(t){this.$emit(zn,t),this.localShow=!1},onDisabled:function(t){t&&t.type===On&&(this.$emit(Jg,!0),this.$emit(On,t))},onEnabled:function(t){t&&t.type===En&&(this.$emit(Jg,!1),this.$emit(En,t))},doOpen:function(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function(){this.$_toolpop&&this.$_toolpop.enable()}},render:function(t){return t()}}),iy=i.default.extend({name:"BVPopoverTemplate",extends:Gg,computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var e=this.title,i=this.content,n=Ot(e)?e({}):e,o=Ot(i)?i({}):i,r=this.html&&!Ot(e)?{innerHTML:e}:{},s=this.html&&!Ot(i)?{innerHTML:i}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),Pt(n)||""===n?t():t("h3",{staticClass:"popover-header",domProps:r},[n]),Pt(o)||""===o?t():t("div",{staticClass:"popover-body",domProps:s},[o])])}}}),ny=i.default.extend({name:"BVPopover",extends:Xg,computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return iy}}}),oy=vs(ee(c(c({},ty),{},{content:hs(go),placement:hs(go,"right"),triggers:hs(Co,Bn)})),tn),ry=i.default.extend({name:tn,extends:ey,inheritAttrs:!1,props:oy,methods:{getComponent:function(){return ny},updateContent:function(){this.setContent(this.normalizeSlot()||this.content),this.setTitle(this.normalizeSlot(tr)||this.title)}}}),sy="__BV_Popover__",ay={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},ly=/^html$/i,cy=/^nofade$/i,uy=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,dy=/^(window|viewport|scrollParent)$/i,hy=/^d\d+$/i,fy=/^ds\d+$/i,py=/^dh\d+$/i,my=/^o-?\d+$/i,vy=/^v-.+$/i,by=/\s+/,gy=function(t,e,i){if(M){var n=function(t,e){var i={title:void 0,content:void 0,trigger:"",placement:"right",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,disabled:!1,id:null,html:!1,delay:rs(tn,"delay",50),boundary:String(rs(tn,"boundary","scrollParent")),boundaryPadding:lr(rs(tn,"boundaryPadding",5),0),variant:rs(tn,"variant"),customClass:rs(tn,"customClass")};if(Et(t.value)||Lt(t.value)||Ot(t.value)?i.content=t.value:Ht(t.value)&&(i=c(c({},i),t.value)),t.arg&&(i.container="#".concat(t.arg)),Ft(i.title)){var n=e.data||{};i.title=n.attrs&&!Pt(n.attrs.title)?n.attrs.title:void 0}Ht(i.delay)||(i.delay={show:lr(i.delay,0),hide:lr(i.delay,0)}),Kt(t.modifiers).forEach((function(t){if(ly.test(t))i.html=!0;else if(cy.test(t))i.animation=!1;else if(uy.test(t))i.placement=t;else if(dy.test(t))t="scrollparent"===t?"scrollParent":t,i.boundary=t;else if(hy.test(t)){var e=lr(t.slice(1),0);i.delay.show=e,i.delay.hide=e}else fy.test(t)?i.delay.show=lr(t.slice(2),0):py.test(t)?i.delay.hide=lr(t.slice(2),0):my.test(t)?i.offset=lr(t.slice(1),0):vy.test(t)&&(i.variant=t.slice(2)||null)}));var o={};return or(i.trigger||"").filter(ne).join(" ").trim().toLowerCase().split(by).forEach((function(t){ay[t]&&(o[t]=!0)})),Kt(t.modifiers).forEach((function(t){t=t.toLowerCase(),ay[t]&&(o[t]=!0)})),i.trigger=Kt(o).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||(i.trigger="click"),i}(e,i);if(!t[sy]){var o=i.context;t[sy]=new ny({parent:o,_scopeId:eb(o,void 0)}),t[sy].__bv_prev_data__={},t[sy].$on(to,(function(){var e={};Ot(n.title)&&(e.title=n.title(t)),Ot(n.content)&&(e.content=n.content(t)),Kt(e).length>0&&t[sy].updateData(e)}))}var r={title:n.title,content:n.content,triggers:n.trigger,placement:n.placement,fallbackPlacement:n.fallbackPlacement,variant:n.variant,customClass:n.customClass,container:n.container,boundary:n.boundary,delay:n.delay,offset:n.offset,noFade:!n.animation,id:n.id,disabled:n.disabled,html:n.html},s=t[sy].__bv_prev_data__;if(t[sy].__bv_prev_data__=r,!Ua(r,s)){var a={target:t};Kt(r).forEach((function(e){r[e]!==s[e]&&(a[e]="title"!==e&&"content"!==e||!Ot(r[e])?r[e]:r[e](t))})),t[sy].updateData(a)}}},yy=me({directives:{VBPopover:{bind:function(t,e,i){gy(t,e,i)},componentUpdated:function(t,e,i){i.context.$nextTick((function(){gy(t,e,i)}))},unbind:function(t){!function(t){t[sy]&&(t[sy].$destroy(),t[sy]=null),delete t[sy]}(t)}}}}),wy=me({components:{BPopover:ry},plugins:{VBPopoverPlugin:yy}}),Ty=vs({animated:hs(ho,null),label:hs(go),labelHtml:hs(go),max:hs(_o,null),precision:hs(_o,null),showProgress:hs(ho,null),showValue:hs(ho,null),striped:hs(ho,null),value:hs(_o,0),variant:hs(go)},nn),Cy=i.default.extend({name:nn,mixins:[Cs],inject:{bvProgress:{default:function(){return{}}}},props:Ty,computed:{progressBarClasses:function(){var t=this.computedAnimated,e=this.computedVariant;return[e?"bg-".concat(e):"",this.computedStriped||t?"progress-bar-striped":"",t?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return cr(this.value,0)},computedMax:function(){var t=cr(this.max)||cr(this.bvProgress.max,0);return t>0?t:100},computedPrecision:function(){return Us(lr(this.precision,lr(this.bvProgress.precision,0)),0)},computedProgress:function(){var t=this.computedPrecision,e=Zs(10,t);return ur(100*e*this.computedValue/this.computedMax/e,t)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Vt(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Vt(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Vt(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Vt(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(t){var e,i=this.label,n=this.labelHtml,o=this.computedValue,r=this.computedPrecision,s={};return this.hasNormalizedSlot()?e=this.normalizeSlot():i||n?s=Fl(n,i):this.computedShowProgress?e=this.computedProgress:this.computedShowValue&&(e=ur(o,r)),t("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":vr(this.computedMax),"aria-valuenow":ur(o,r)},domProps:s},e)}}),xy=Qt(Ty,["label","labelHtml"]),Sy=vs(ee(c(c({},xy),{},{animated:hs(ho,!1),height:hs(go),max:hs(_o,100),precision:hs(_o,0),showProgress:hs(ho,!1),showValue:hs(ho,!1),striped:hs(ho,!1)})),en),ky=me({components:{BProgress:i.default.extend({name:en,mixins:[Cs],provide:function(){return{bvProgress:this}},props:Sy,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(t){var e=this.normalizeSlot();return e||(e=t(Cy,{props:ps(xy,this.$props)})),t("div",{staticClass:"progress",style:this.progressHeight},[e])}}),BProgressBar:Cy}}),$y="b-sidebar",By=Fs(Ue,"request-state"),_y=Fs(Ue,"toggle"),Dy=Ds(Ue,"state"),Fy=Ds(Ue,"sync-state"),Iy=ys("visible",{type:ho,defaultValue:!1,event:$n}),Py=Iy.mixin,Oy=Iy.props,Vy=Iy.prop,Ey=Iy.event,Ly=vs(ee(c(c(c({},fc),Oy),{},{ariaLabel:hs(go),ariaLabelledby:hs(go),backdrop:hs(ho,!1),backdropVariant:hs(go,"dark"),bgVariant:hs(go,"light"),bodyClass:hs(To),closeLabel:hs(go),footerClass:hs(To),headerClass:hs(To),lazy:hs(ho,!1),noCloseOnBackdrop:hs(ho,!1),noCloseOnEsc:hs(ho,!1),noCloseOnRouteChange:hs(ho,!1),noEnforceFocus:hs(ho,!1),noHeader:hs(ho,!1),noHeaderClose:hs(ho,!1),noSlide:hs(ho,!1),right:hs(ho,!1),shadow:hs(ko,!1),sidebarClass:hs(To),tag:hs(go,"div"),textVariant:hs(go,"dark"),title:hs(go),width:hs(go),zIndex:hs(_o)})),rn),Ay=function(t,e){if(e.noHeader)return t();var i=e.normalizeSlot(No,e.slotScope);if(!i){var n=function(t,e){var i=e.normalizeSlot(tr,e.slotScope)||e.title;return i?t("strong",{attrs:{id:e.safeId("__title__")}},[i]):t("span")}(t,e),o=function(t,e){if(e.noHeaderClose)return t();var i=e.closeLabel,n=e.textVariant,o=e.hide;return t(Ps,{props:{ariaLabel:i,textVariant:n},on:{click:o},ref:"close-button"},[e.normalizeSlot("header-close")||t(Oa)])}(t,e);i=e.right?[o,n]:[n,o]}return t("header",{staticClass:"".concat($y,"-header"),class:e.headerClass,key:"header"},i)},Ry=function(t,e){return t("div",{staticClass:"".concat($y,"-body"),class:e.bodyClass,key:"body"},[e.normalizeSlot(Ao,e.slotScope)])},My=function(t,e){var i=e.normalizeSlot(zo,e.slotScope);return i?t("footer",{staticClass:"".concat($y,"-footer"),class:e.footerClass,key:"footer"},[i]):t()},Hy=function(t,e){var i=Ay(t,e);return e.lazy&&!e.isOpen?i:[i,Ry(t,e),My(t,e)]},zy=function(t,e){if(!e.backdrop)return t();var i=e.backdropVariant;return t("div",{directives:[{name:"show",value:e.localShow}],staticClass:"b-sidebar-backdrop",class:a({},"bg-".concat(i),i),on:{click:e.onBackdropClick}})},Ny=me({components:{BSidebar:i.default.extend({name:rn,mixins:[Za,pc,Py,Ja,Cs],inheritAttrs:!1,props:Ly,data:function(){var t=!!this[Vy];return{localShow:t,isOpen:t}},computed:{transitionProps:function(){return this.noSlide?{css:!0}:{css:!0,enterClass:"",enterActiveClass:"slide",enterToClass:"show",leaveClass:"show",leaveActiveClass:"slide",leaveToClass:""}},slotScope:function(){return{hide:this.hide,right:this.right,visible:this.localShow}},hasTitle:function(){var t=this.$scopedSlots,e=this.$slots;return!(this.noHeader||this.hasNormalizedSlot(No)||!this.normalizeSlot(tr,this.slotScope,t,e)&&!this.title)},titleId:function(){return this.hasTitle?this.safeId("__title__"):null},computedAttrs:function(){return c(c({},this.bvAttrs),{},{id:this.safeId(),tabindex:"-1",role:"dialog","aria-modal":this.backdrop?"true":"false","aria-hidden":this.localShow?null:"true","aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||this.titleId||null})}},watch:(tg={},a(tg,Vy,(function(t,e){t!==e&&(this.localShow=t)})),a(tg,"localShow",(function(t,e){t!==e&&(this.emitState(t),this.$emit(Ey,t))})),a(tg,"$route",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.noCloseOnRouteChange||t.fullPath===e.fullPath||this.hide()})),tg),created:function(){this.$_returnFocusEl=null},mounted:function(){var t=this;this.listenOnRoot(_y,this.handleToggle),this.listenOnRoot(By,this.handleSync),this.$nextTick((function(){t.emitState(t.localShow)}))},activated:function(){this.emitSync()},beforeDestroy:function(){this.localShow=!1,this.$_returnFocusEl=null},methods:{hide:function(){this.localShow=!1},emitState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.localShow;this.emitOnRoot(Dy,this.safeId(),t)},emitSync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.localShow;this.emitOnRoot(Fy,this.safeId(),t)},handleToggle:function(t){t&&t===this.safeId()&&(this.localShow=!this.localShow)},handleSync:function(t){var e=this;t&&t===this.safeId()&&this.$nextTick((function(){e.emitSync(e.localShow)}))},onKeydown:function(t){var e=t.keyCode;!this.noCloseOnEsc&&27===e&&this.localShow&&this.hide()},onBackdropClick:function(){this.localShow&&!this.noCloseOnBackdrop&&this.hide()},onTopTrapFocus:function(){var t=Qr(this.$refs.content);this.enforceFocus(t.reverse()[0])},onBottomTrapFocus:function(){var t=Qr(this.$refs.content);this.enforceFocus(t[0])},onBeforeEnter:function(){this.$_returnFocusEl=$r(M?[document.body]:[]),this.isOpen=!0},onAfterEnter:function(t){Lr(t,$r())||this.enforceFocus(t),this.$emit(eo)},onAfterLeave:function(){this.enforceFocus(this.$_returnFocusEl),this.$_returnFocusEl=null,this.isOpen=!1,this.$emit(zn)},enforceFocus:function(t){this.noEnforceFocus||ts(t)}},render:function(t){var e,i=this.bgVariant,n=this.width,o=this.textVariant,r=this.localShow,s=""===this.shadow||this.shadow,l=t(this.tag,{staticClass:$y,class:[(e={shadow:!0===s},a(e,"shadow-".concat(s),s&&!0!==s),a(e,"".concat($y,"-right"),this.right),a(e,"bg-".concat(i),i),a(e,"text-".concat(o),o),e),this.sidebarClass],style:{width:n},attrs:this.computedAttrs,directives:[{name:"show",value:r}],ref:"content"},[Hy(t,this)]);l=t("transition",{props:this.transitionProps,on:{beforeEnter:this.onBeforeEnter,afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[l]);var c=t(Ls,{props:{noFade:this.noSlide}},[zy(t,this)]),u=t(),d=t();return this.backdrop&&r&&(u=t("div",{attrs:{tabindex:"0"},on:{focus:this.onTopTrapFocus}}),d=t("div",{attrs:{tabindex:"0"},on:{focus:this.onBottomTrapFocus}})),t("div",{staticClass:"b-sidebar-outer",style:{zIndex:this.zIndex},attrs:{tabindex:"-1"},on:{keydown:this.onKeydown}},[u,l,d,c])}})},plugins:{VBTogglePlugin:ld}}),jy=vs({animation:hs(go,"wave"),height:hs(go),size:hs(go),type:hs(go,"text"),variant:hs(go),width:hs(go)},sn),Gy=i.default.extend({name:sn,functional:!0,props:jy,render:function(t,e){var i,n=e.data,o=e.props,r=o.size,s=o.animation,l=o.variant;return t("div",F(n,{staticClass:"b-skeleton",style:{width:r||o.width,height:r||o.height},class:(i={},a(i,"b-skeleton-".concat(o.type),!0),a(i,"b-skeleton-animate-".concat(s),s),a(i,"bg-".concat(l),l),i)}))}}),Wy=(vs(Qt(fa,["content","stacked"]),"BIconstack"),vs({animation:hs(go,"wave"),icon:hs(go),iconProps:hs(vo,{})},an)),Yy=i.default.extend({name:an,functional:!0,props:Wy,render:function(t,e){var i=e.props,n=i.icon,o=i.animation,r=t(Aa,{staticClass:"b-skeleton-icon",props:c(c({},i.iconProps),{},{icon:n})});return t("div",{staticClass:"b-skeleton-icon-wrapper position-relative d-inline-block overflow-hidden",class:a({},"b-skeleton-animate-".concat(o),o)},[r])}}),Uy=vs({animation:hs(go),aspect:hs(go,"16:9"),cardImg:hs(go),height:hs(go),noAspect:hs(ho,!1),variant:hs(go),width:hs(go)},ln),qy=i.default.extend({name:ln,functional:!0,props:Uy,render:function(t,e){var i=e.props,n=i.aspect,o=i.width,r=i.height,s=i.animation,l=i.variant,c=i.cardImg,u=t(Gy,{props:{type:"img",width:o,height:r,animation:s,variant:l},class:a({},"card-img-".concat(c),c)});return i.noAspect?u:t(ea,{props:{aspect:n}},[u])}}),Ky=i.default.extend({methods:{hasListener:function(t){var e=this.$listeners||{},i=this._events||{};return!Ft(e[t])||Rt(i[t])&&i[t].length>0}}}),Xy="light",Zy="dark",Jy=vs({variant:hs(go)},"BTr"),Qy=i.default.extend({name:"BTr",mixins:[Za,Qa,Cs],provide:function(){return{bvTableTr:this}},inject:{bvTableRowGroup:{default:function(){return{}}}},inheritAttrs:!1,props:Jy,computed:{inTbody:function(){return this.bvTableRowGroup.isTbody},inThead:function(){return this.bvTableRowGroup.isThead},inTfoot:function(){return this.bvTableRowGroup.isTfoot},isDark:function(){return this.bvTableRowGroup.isDark},isStacked:function(){return this.bvTableRowGroup.isStacked},isResponsive:function(){return this.bvTableRowGroup.isResponsive},isStickyHeader:function(){return this.bvTableRowGroup.isStickyHeader},hasStickyHeader:function(){return!this.isStacked&&this.bvTableRowGroup.hasStickyHeader},tableVariant:function(){return this.bvTableRowGroup.tableVariant},headVariant:function(){return this.inThead?this.bvTableRowGroup.headVariant:null},footVariant:function(){return this.inTfoot?this.bvTableRowGroup.footVariant:null},isRowDark:function(){return this.headVariant!==Xy&&this.footVariant!==Xy&&(this.headVariant===Zy||this.footVariant===Zy||this.isDark)},trClasses:function(){var t=this.variant;return[t?"".concat(this.isRowDark?"bg":"table","-").concat(t):null]},trAttrs:function(){return c({role:"row"},this.bvAttrs)}},render:function(t){return t("tr",{class:this.trClasses,attrs:this.trAttrs,on:this.bvListeners},this.normalizeSlot())}}),tw={},ew=i.default.extend({props:tw,methods:{renderBottomRow:function(){var t=this.computedFields,e=this.stacked,i=this.tbodyTrClass,n=this.tbodyTrAttr,o=this.$createElement;return this.hasNormalizedSlot(Vo)&&!0!==e&&""!==e?o(Qy,{staticClass:"b-table-bottom-row",class:[Ot(i)?i(null,"row-bottom"):i],attrs:Ot(n)?n(null,"row-bottom"):n,key:"b-bottom-row"},this.normalizeSlot(Vo,{columns:t.length,fields:t})):o()}}}),iw=function(t){return(t=lr(t,0))>0?t:null},nw=function(t){return Pt(t)||iw(t)>0},ow=vs({colspan:hs(_o,null,nw),rowspan:hs(_o,null,nw),stackedHeading:hs(go),stickyColumn:hs(ho,!1),variant:hs(go)},pn),rw=i.default.extend({name:pn,mixins:[Za,Qa,Cs],inject:{bvTableTr:{default:function(){return{}}}},inheritAttrs:!1,props:ow,computed:{tag:function(){return"td"},inTbody:function(){return this.bvTableTr.inTbody},inThead:function(){return this.bvTableTr.inThead},inTfoot:function(){return this.bvTableTr.inTfoot},isDark:function(){return this.bvTableTr.isDark},isStacked:function(){return this.bvTableTr.isStacked},isStackedCell:function(){return this.inTbody&&this.isStacked},isResponsive:function(){return this.bvTableTr.isResponsive},isStickyHeader:function(){return this.bvTableTr.isStickyHeader},hasStickyHeader:function(){return this.bvTableTr.hasStickyHeader},isStickyColumn:function(){return!this.isStacked&&(this.isResponsive||this.hasStickyHeader)&&this.stickyColumn},rowVariant:function(){return this.bvTableTr.variant},headVariant:function(){return this.bvTableTr.headVariant},footVariant:function(){return this.bvTableTr.footVariant},tableVariant:function(){return this.bvTableTr.tableVariant},computedColspan:function(){return iw(this.colspan)},computedRowspan:function(){return iw(this.rowspan)},cellClasses:function(){var t=this.variant,e=this.headVariant,i=this.isStickyColumn;return(!t&&this.isStickyHeader&&!e||!t&&i&&this.inTfoot&&!this.footVariant||!t&&i&&this.inThead&&!e||!t&&i&&this.inTbody)&&(t=this.rowVariant||this.tableVariant||"b-table-default"),[t?"".concat(this.isDark?"bg":"table","-").concat(t):null,i?"b-table-sticky-column":null]},cellAttrs:function(){var t=this.stackedHeading,e=this.inThead||this.inTfoot,i=this.computedColspan,n=this.computedRowspan,o="cell",r=null;return e?(o="columnheader",r=i>0?"colspan":"col"):Br(this.tag,"th")&&(o="rowheader",r=n>0?"rowgroup":"row"),c(c({colspan:i,rowspan:n,role:o,scope:r},this.bvAttrs),{},{"data-label":this.isStackedCell&&!Pt(t)?vr(t):null})}},render:function(t){var e=[this.normalizeSlot()];return t(this.tag,{class:this.cellClasses,attrs:this.cellAttrs,on:this.bvListeners},[this.isStackedCell?t("div",[e]):e])}}),sw="busy",aw=a({},sw,hs(ho,!1)),lw=i.default.extend({props:aw,data:function(){return{localBusy:!1}},computed:{computedBusy:function(){return this.busy||this.localBusy}},watch:{localBusy:function(t,e){t!==e&&this.$emit("update:busy",t)}},methods:{stopIfBusy:function(t){return!!this.computedBusy&&(Bs(t),!0)},renderBusy:function(){var t=this.tbodyTrClass,e=this.tbodyTrAttr,i=this.$createElement;return this.computedBusy&&this.hasNormalizedSlot(Xo)?i(Qy,{staticClass:"b-table-busy-slot",class:[Ot(t)?t(null,Xo):t],attrs:Ot(e)?e(null,Xo):e,key:"table-busy-slot"},[i(rw,{props:{colspan:this.computedFields.length||null}},[this.normalizeSlot(Xo)])]):null}}}),cw={caption:hs(go),captionHtml:hs(go)},uw=i.default.extend({props:cw,computed:{captionId:function(){return this.isStacked?this.safeId("_caption_"):null}},methods:{renderCaption:function(){var t=this.caption,e=this.captionHtml,i=this.$createElement,n=i(),o=this.hasNormalizedSlot(Zo);return(o||t||e)&&(n=i("caption",{attrs:{id:this.captionId},domProps:o?{}:Fl(e,t),key:"caption",ref:"caption"},this.normalizeSlot(Zo))),n}}}),dw={},hw=i.default.extend({methods:{renderColgroup:function(){var t=this.computedFields,e=this.$createElement,i=e();return this.hasNormalizedSlot(Jo)&&(i=e("colgroup",{key:"colgroup"},[this.normalizeSlot(Jo,{columns:t.length,fields:t})])),i}}}),fw={emptyFilteredHtml:hs(go),emptyFilteredText:hs(go,"There are no records matching your request"),emptyHtml:hs(go),emptyText:hs(go,"There are no records to show"),showEmpty:hs(ho,!1)},pw=i.default.extend({props:fw,methods:{renderEmpty:function(){var t=this.computedItems,e=this.$createElement,i=e();if(this.showEmpty&&(!t||0===t.length)&&(!this.computedBusy||!this.hasNormalizedSlot(Xo))){var n=this.computedFields,o=this.isFiltered,r=this.emptyText,s=this.emptyHtml,a=this.emptyFilteredText,l=this.emptyFilteredHtml,c=this.tbodyTrClass,u=this.tbodyTrAttr;(i=this.normalizeSlot(o?"emptyfiltered":Ro,{emptyFilteredHtml:l,emptyFilteredText:a,emptyHtml:s,emptyText:r,fields:n,items:t}))||(i=e("div",{class:["text-center","my-2"],domProps:o?Fl(l,a):Fl(s,r)})),i=e(rw,{props:{colspan:n.length||null}},[e("div",{attrs:{role:"alert","aria-live":"polite"}},[i])]),i=e(Qy,{staticClass:"b-table-empty-row",class:[Ot(c)?c(null,"row-empty"):c],attrs:Ot(u)?u(null,"row-empty"):u,key:o?"b-empty-filtered-row":"b-empty-row"},[i])}return i}}}),mw=function t(e){return Pt(e)?"":Mt(e)&&!zt(e)?Kt(e).sort().map((function(i){return t(e[i])})).filter((function(t){return!!t})).join(" "):vr(e)},vw="_cellVariants",bw="_rowVariant",gw="_showDetails",yw=[vw,bw,gw].reduce((function(t,e){return c(c({},t),{},a({},e,!0))}),{}),ww=["a","a *","button","button *","input:not(.disabled):not([disabled])","select:not(.disabled):not([disabled])","textarea:not(.disabled):not([disabled])",'[role="link"]','[role="link"] *','[role="button"]','[role="button"] *',"[tabindex]:not(.disabled):not([disabled])"].join(","),Tw=function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=Kt(n).reduce((function(e,i){var o=n[i],r=o.filterByFormatted,s=Ot(r)?r:r?o.formatter:null;return Ot(s)&&(e[i]=s(t[i],i,t)),e}),Zt(t)),r=Kt(o).filter((function(t){return!(yw[t]||Rt(e)&&e.length>0&&nr(e,t)||Rt(i)&&i.length>0&&!nr(i,t))}));return Jt(o,r)},Cw={filter:hs([].concat(T(To),[bo])),filterDebounce:hs(_o,0,(function(t){return Q.test(String(t))})),filterFunction:hs(po),filterIgnoredFields:hs(uo,[]),filterIncludedFields:hs(uo,[])},xw=i.default.extend({props:Cw,data:function(){return{isFiltered:!1,localFilter:this.filterSanitize(this.filter)}},computed:{computedFilterIgnored:function(){return or(this.filterIgnoredFields||[]).filter(ne)},computedFilterIncluded:function(){return or(this.filterIncludedFields||[]).filter(ne)},computedFilterDebounce:function(){var t=lr(this.filterDebounce,0);return t>0&&le('Prop "filter-debounce" is deprecated. Use the debounce feature of "<b-form-input>" instead.',fn),t},localFiltering:function(){return!this.hasProvider||!!this.noProviderFiltering},filteredCheck:function(){return{filteredItems:this.filteredItems,localItems:this.localItems,localFilter:this.localFilter}},localFilterFn:function(){var t=this.filterFunction;return gs(t)?t:null},filteredItems:function(){var t=this.localItems,e=this.localFilter,i=this.localFiltering?this.filterFnFactory(this.localFilterFn,e)||this.defaultFilterFnFactory(e):null;return i&&t.length>0?t.filter(i):t}},watch:{computedFilterDebounce:function(t){!t&&this.$_filterTimer&&(this.clearFilterTimer(),this.localFilter=this.filterSanitize(this.filter))},filter:{deep:!0,handler:function(t){var e=this,i=this.computedFilterDebounce;this.clearFilterTimer(),i&&i>0?this.$_filterTimer=setTimeout((function(){e.localFilter=e.filterSanitize(t)}),i):this.localFilter=this.filterSanitize(t)}},filteredCheck:function(t){var e=t.filteredItems,i=t.localFilter,n=!1;i?Ua(i,[])||Ua(i,{})?n=!1:i&&(n=!0):n=!1,n&&this.$emit(Ln,e,e.length),this.isFiltered=n},isFiltered:function(t,e){if(!1===t&&!0===e){var i=this.localItems;this.$emit(Ln,i,i.length)}}},created:function(){var t=this;this.$_filterTimer=null,this.$nextTick((function(){t.isFiltered=Boolean(t.localFilter)}))},beforeDestroy:function(){this.clearFilterTimer()},methods:{clearFilterTimer:function(){clearTimeout(this.$_filterTimer),this.$_filterTimer=null},filterSanitize:function(t){return!this.localFiltering||this.localFilterFn||Et(t)||jt(t)?ie(t):""},filterFnFactory:function(t,e){if(!t||!Ot(t)||!e||Ua(e,[])||Ua(e,{}))return null;return function(i){return t(i,e)}},defaultFilterFnFactory:function(t){var e=this;if(!t||!Et(t)&&!jt(t))return null;var i=t;if(Et(i)){var n=mr(t).replace(ct,"\\s+");i=new RegExp(".*".concat(n,".*"),"i")}return function(t){return i.lastIndex=0,i.test((n=t,o=e.computedFilterIgnored,r=e.computedFilterIncluded,s=e.computedFieldsObj,Mt(n)?mw(Tw(n,o,r,s)):""));var n,o,r,s}}}}),Sw=function(t,e){var i=[];if(Rt(t)&&t.filter(ne).forEach((function(t){if(Et(t))i.push({key:t,label:fr(t)});else if(Mt(t)&&t.key&&Et(t.key))i.push(Zt(t));else if(Mt(t)&&1===Kt(t).length){var e=Kt(t)[0],n=function(t,e){var i=null;return Et(e)?i={key:t,label:e}:Ot(e)?i={key:t,formatter:e}:Mt(e)?(i=Zt(e)).key=i.key||t:!1!==e&&(i={key:t}),i}(e,t[e]);n&&i.push(n)}})),0===i.length&&Rt(e)&&e.length>0){var n=e[0];Kt(n).forEach((function(t){yw[t]||i.push({key:t,label:fr(t)})}))}var o={};return i.filter((function(t){return!o[t.key]&&(o[t.key]=!0,t.label=Et(t.label)?t.label:fr(t.key),!0)}))},kw=ys("value",{type:uo,defaultValue:[]}),$w=kw.mixin,Bw=kw.props,_w=kw.prop,Dw=kw.event,Fw=ee(c(c({},Bw),{},a({fields:hs(uo,null),items:hs(uo,[]),primaryKey:hs(go)},_w,hs(uo,[])))),Iw=i.default.extend({mixins:[$w],props:Fw,data:function(){var t=this.items;return{localItems:Rt(t)?t.slice():[]}},computed:{computedFields:function(){return Sw(this.fields,this.localItems)},computedFieldsObj:function(){var t=this.$parent;return this.computedFields.reduce((function(e,i){if(e[i.key]=Zt(i),i.formatter){var n=i.formatter;Et(n)&&Ot(t[n])?n=t[n]:Ot(n)||(n=void 0),e[i.key].formatter=n}return e}),{})},computedItems:function(){return(this.paginatedItems||this.sortedItems||this.filteredItems||this.localItems||[]).slice()},context:function(){return{filter:this.localFilter,sortBy:this.localSortBy,sortDesc:this.localSortDesc,perPage:Us(lr(this.perPage,0),0),currentPage:Us(lr(this.currentPage,0),1),apiUrl:this.apiUrl}}},watch:{items:function(t){this.localItems=Rt(t)?t.slice():[]},computedItems:function(t,e){Ua(t,e)||this.$emit(Dw,t)},context:function(t,e){Ua(t,e)||this.$emit(Fn,t)}},mounted:function(){this.$emit(Dw,this.computedItems)},methods:{getFieldFormatter:function(t){var e=this.computedFieldsObj[t];return e?e.formatter:void 0}}}),Pw={currentPage:hs(_o,1),perPage:hs(_o,0)},Ow=i.default.extend({props:Pw,computed:{localPaging:function(){return!this.hasProvider||!!this.noProviderPaging},paginatedItems:function(){var t=this.sortedItems||this.filteredItems||this.localItems||[],e=Us(lr(this.currentPage,1),1),i=Us(lr(this.perPage,0),0);return this.localPaging&&i&&(t=t.slice((e-1)*i,e*i)),t}}}),Vw=Ds(fn,Zn),Ew=Fs(fn,"refresh"),Lw={apiUrl:hs(go),items:hs(yo,[]),noProviderFiltering:hs(ho,!1),noProviderPaging:hs(ho,!1),noProviderSorting:hs(ho,!1)},Aw=i.default.extend({mixins:[Ja],props:Lw,computed:{hasProvider:function(){return Ot(this.items)},providerTriggerContext:function(){var t={apiUrl:this.apiUrl,filter:null,sortBy:null,sortDesc:null,perPage:null,currentPage:null};return this.noProviderFiltering||(t.filter=this.localFilter),this.noProviderSorting||(t.sortBy=this.localSortBy,t.sortDesc=this.localSortDesc),this.noProviderPaging||(t.perPage=this.perPage,t.currentPage=this.currentPage),Zt(t)}},watch:{items:function(t){(this.hasProvider||Ot(t))&&this.$nextTick(this._providerUpdate)},providerTriggerContext:function(t,e){Ua(t,e)||this.$nextTick(this._providerUpdate)}},mounted:function(){var t=this;!this.hasProvider||this.localItems&&0!==this.localItems.length||this._providerUpdate(),this.listenOnRoot(Ew,(function(e){e!==t.id&&e!==t||t.refresh()}))},methods:{refresh:function(){var t=this.items,e=this.refresh;this.$off(Zn,e),this.computedBusy?this.localBusy&&this.hasProvider&&this.$on(Zn,e):(this.clearSelected(),this.hasProvider?this.$nextTick(this._providerUpdate):this.localItems=Rt(t)?t.slice():[])},_providerSetLocal:function(t){this.localItems=Rt(t)?t.slice():[],this.localBusy=!1,this.$emit(Zn),this.id&&this.emitOnRoot(Vw,this.id)},_providerUpdate:function(){var t=this;this.hasProvider&&(this.computedBusy?this.$nextTick(this.refresh):(this.localBusy=!0,this.$nextTick((function(){try{var e=t.items(t.context,t._providerSetLocal);!Pt(i=e)&&Ot(i.then)&&Ot(i.catch)?e.then((function(e){t._providerSetLocal(e)})):Rt(e)?t._providerSetLocal(e):2!==t.items.length&&(le("Provider function didn't request callback and did not return a promise or data.",fn),t.localBusy=!1)}catch(e){le("Provider function error [".concat(e.name,"] ").concat(e.message,"."),fn),t.localBusy=!1,t.$off(Zn,t.refresh)}var i}))))}}}),Rw=["range","multi","single"],Mw={noSelectOnClick:hs(ho,!1),selectMode:hs(go,"multi",(function(t){return nr(Rw,t)})),selectable:hs(ho,!1),selectedVariant:hs(go,"active")},Hw=i.default.extend({props:Mw,data:function(){return{selectedRows:[],selectedLastRow:-1}},computed:{isSelectable:function(){return this.selectable&&this.selectMode},hasSelectableRowClick:function(){return this.isSelectable&&!this.noSelectOnClick},supportsSelectableRows:function(){return!0},selectableHasSelection:function(){var t=this.selectedRows;return this.isSelectable&&t&&t.length>0&&t.some(ne)},selectableIsMultiSelect:function(){return this.isSelectable&&nr(["range","multi"],this.selectMode)},selectableTableClasses:function(){var t,e=this.isSelectable;return a(t={"b-table-selectable":e},"b-table-select-".concat(this.selectMode),e),a(t,"b-table-selecting",this.selectableHasSelection),a(t,"b-table-selectable-no-click",e&&!this.hasSelectableRowClick),t},selectableTableAttrs:function(){return{"aria-multiselectable":this.isSelectable?this.selectableIsMultiSelect?"true":"false":null}}},watch:{computedItems:function(t,e){var i=!1;if(this.isSelectable&&this.selectedRows.length>0){i=Rt(t)&&Rt(e)&&t.length===e.length;for(var n=0;i&&n<t.length;n++)i=Ua(Tw(t[n]),Tw(e[n]))}i||this.clearSelected()},selectable:function(t){this.clearSelected(),this.setSelectionHandlers(t)},selectMode:function(){this.clearSelected()},hasSelectableRowClick:function(t){this.clearSelected(),this.setSelectionHandlers(!t)},selectedRows:function(t,e){var i=this;if(this.isSelectable&&!Ua(t,e)){var n=[];t.forEach((function(t,e){t&&n.push(i.computedItems[e])})),this.$emit("row-selected",n)}}},beforeMount:function(){this.isSelectable&&this.setSelectionHandlers(!0)},methods:{selectRow:function(t){if(this.isSelectable&&Lt(t)&&t>=0&&t<this.computedItems.length&&!this.isRowSelected(t)){var e=this.selectableIsMultiSelect?this.selectedRows.slice():[];e[t]=!0,this.selectedLastClicked=-1,this.selectedRows=e}},unselectRow:function(t){if(this.isSelectable&&Lt(t)&&this.isRowSelected(t)){var e=this.selectedRows.slice();e[t]=!1,this.selectedLastClicked=-1,this.selectedRows=e}},selectAllRows:function(){var t=this.computedItems.length;this.isSelectable&&t>0&&(this.selectedLastClicked=-1,this.selectedRows=this.selectableIsMultiSelect?rr(t,!0):[!0])},isRowSelected:function(t){return!(!Lt(t)||!this.selectedRows[t])},clearSelected:function(){this.selectedLastClicked=-1,this.selectedRows=[]},selectableRowClasses:function(t){if(this.isSelectable&&this.isRowSelected(t)){var e=this.selectedVariant;return a({"b-table-row-selected":!0},"".concat(this.dark?"bg":"table","-").concat(e),e)}return{}},selectableRowAttrs:function(t){return{"aria-selected":this.isSelectable?this.isRowSelected(t)?"true":"false":null}},setSelectionHandlers:function(t){var e=t&&!this.noSelectOnClick?"$on":"$off";this[e](Jn,this.selectionHandler),this[e](Ln,this.clearSelected),this[e](Fn,this.clearSelected)},selectionHandler:function(t,e,i){if(this.isSelectable&&!this.noSelectOnClick){var n=this.selectMode,o=this.selectedLastRow,r=this.selectedRows.slice(),s=!r[e];if("single"===n)r=[];else if("range"===n)if(o>-1&&i.shiftKey){for(var a=Ys(o,e);a<=Us(o,e);a++)r[a]=!0;s=!0}else i.ctrlKey||i.metaKey||(r=[],s=!0),this.selectedLastRow=s?e:-1;r[e]=s,this.selectedRows=r}else this.clearSelected()}}}),zw=function(t,e){return t.map((function(t,e){return[e,t]})).sort(function(t,e){return this(t[1],e[1])||t[0]-e[0]}.bind(e)).map((function(t){return t[1]}))},Nw=function(t){return Pt(t)?"":At(t)?cr(t,t):t},jw="sortBy",Gw="sortDesc",Ww="asc",Yw="desc",Uw=[Ww,Yw,"last"],qw=(a(eg={labelSortAsc:hs(go,"Click to sort Ascending"),labelSortClear:hs(go,"Click to clear sorting"),labelSortDesc:hs(go,"Click to sort Descending"),noFooterSorting:hs(ho,!1),noLocalSorting:hs(ho,!1),noSortReset:hs(ho,!1)},jw,hs(go)),a(eg,"sortCompare",hs(po)),a(eg,"sortCompareLocale",hs(Co)),a(eg,"sortCompareOptions",hs(vo,{numeric:!0})),a(eg,Gw,hs(ho,!1)),a(eg,"sortDirection",hs(go,Ww,(function(t){return nr(Uw,t)}))),a(eg,"sortIconLeft",hs(ho,!1)),a(eg,"sortNullLast",hs(ho,!1)),eg),Kw=i.default.extend({props:qw,data:function(){return{localSortBy:this.sortBy||"",localSortDesc:this.sortDesc||!1}},computed:{localSorting:function(){return this.hasProvider?!!this.noProviderSorting:!this.noLocalSorting},isSortable:function(){return this.computedFields.some((function(t){return t.sortable}))},sortedItems:function(){var t=this.localSortBy,e=this.localSortDesc,i=this.sortCompareLocale,n=this.sortNullLast,o=this.sortCompare,r=this.localSorting,s=(this.filteredItems||this.localItems||[]).slice(),a=c(c({},this.sortCompareOptions),{},{usage:"sort"});if(t&&r){var l=(this.computedFieldsObj[t]||{}).sortByFormatted,u=Ot(l)?l:l?this.getFieldFormatter(t):void 0;return zw(s,(function(r,s){var l=null;return Ot(o)&&(l=o(r,s,t,e,u,a,i)),(Pt(l)||!1===l)&&(l=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=i.sortBy,o=void 0===n?null:n,r=i.formatter,s=void 0===r?null:r,a=i.locale,l=void 0===a?void 0:a,c=i.localeOptions,u=void 0===c?{}:c,d=i.nullLast,h=void 0!==d&&d,f=re(t,o,null),p=re(e,o,null);return Ot(s)&&(f=s(f,o,t),p=s(p,o,e)),f=Nw(f),p=Nw(p),zt(f)&&zt(p)||Lt(f)&&Lt(p)?f<p?-1:f>p?1:0:h&&""===f&&""!==p?1:h&&""!==f&&""===p?-1:mw(f).localeCompare(mw(p),l,u)}(r,s,{sortBy:t,formatter:u,locale:i,localeOptions:a,nullLast:n})),(l||0)*(e?-1:1)}))}return s}},watch:(ig={isSortable:function(t){t?this.isSortable&&this.$on(Hn,this.handleSort):this.$off(Hn,this.handleSort)}},a(ig,Gw,(function(t){t!==this.localSortDesc&&(this.localSortDesc=t||!1)})),a(ig,jw,(function(t){t!==this.localSortBy&&(this.localSortBy=t||"")})),a(ig,"localSortDesc",(function(t,e){t!==e&&this.$emit("update:sortDesc",t)})),a(ig,"localSortBy",(function(t,e){t!==e&&this.$emit("update:sortBy",t)})),ig),created:function(){this.isSortable&&this.$on(Hn,this.handleSort)},methods:{handleSort:function(t,e,i,n){var o=this;if(this.isSortable&&(!n||!this.noFooterSorting)){var r=!1,s=function(){var t=e.sortDirection||o.sortDirection;t===Ww?o.localSortDesc=!1:t===Yw&&(o.localSortDesc=!0)};if(e.sortable){var a=!this.localSorting&&e.sortKey?e.sortKey:t;this.localSortBy===a?this.localSortDesc=!this.localSortDesc:(this.localSortBy=a,s()),r=!0}else this.localSortBy&&!this.noSortReset&&(this.localSortBy="",s(),r=!0);r&&this.$emit("sort-changed",this.context)}},sortTheadThClasses:function(t,e,i){return{"b-table-sort-icon-left":e.sortable&&this.sortIconLeft&&!(i&&this.noFooterSorting)}},sortTheadThAttrs:function(t,e,i){if(!this.isSortable||i&&this.noFooterSorting)return{};var n=e.sortable;return{"aria-sort":n&&this.localSortBy===t?this.localSortDesc?"descending":"ascending":n?"none":null}},sortTheadThLabel:function(t,e,i){if(!this.isSortable||i&&this.noFooterSorting)return null;var n="";if(e.sortable)if(this.localSortBy===t)n=this.localSortDesc?this.labelSortAsc:this.labelSortDesc;else{n=this.localSortDesc?this.labelSortDesc:this.labelSortAsc;var o=this.sortDirection||e.sortDirection;o===Ww?n=this.labelSortAsc:o===Yw&&(n=this.labelSortDesc)}else this.noSortReset||(n=this.localSortBy?this.labelSortClear:"");return br(n)||null}}}),Xw={stacked:hs(ko,!1)},Zw=i.default.extend({props:Xw,computed:{isStacked:function(){var t=this.stacked;return""===t||t},isStackedAlways:function(){return!0===this.isStacked},stackedTableClasses:function(){var t=this.isStackedAlways;return a({"b-table-stacked":t},"b-table-stacked-".concat(this.stacked),!t&&this.isStacked)}}}),Jw={bordered:hs(ho,!1),borderless:hs(ho,!1),captionTop:hs(ho,!1),dark:hs(ho,!1),fixed:hs(ho,!1),hover:hs(ho,!1),noBorderCollapse:hs(ho,!1),outlined:hs(ho,!1),responsive:hs(ko,!1),small:hs(ho,!1),stickyHeader:hs(ko,!1),striped:hs(ho,!1),tableClass:hs(To),tableVariant:hs(go)},Qw=i.default.extend({mixins:[Za],provide:function(){return{bvTable:this}},inheritAttrs:!1,props:Jw,computed:{isResponsive:function(){var t=this.responsive;return""===t||t},isStickyHeader:function(){var t=this.stickyHeader;return t=""===t||t,!this.isStacked&&t},wrapperClasses:function(){var t=this.isResponsive;return[this.isStickyHeader?"b-table-sticky-header":"",!0===t?"table-responsive":t?"table-responsive-".concat(this.responsive):""].filter(ne)},wrapperStyles:function(){var t=this.isStickyHeader;return t&&!Vt(t)?{maxHeight:t}:{}},tableClasses:function(){var t=this.hover,e=this.tableVariant;return t=this.isTableSimple?t:t&&this.computedItems.length>0&&!this.computedBusy,[this.tableClass,{"table-striped":this.striped,"table-hover":t,"table-dark":this.dark,"table-bordered":this.bordered,"table-borderless":this.borderless,"table-sm":this.small,border:this.outlined,"b-table-fixed":this.fixed,"b-table-caption-top":this.captionTop,"b-table-no-border-collapse":this.noBorderCollapse},e?"".concat(this.dark?"bg":"table","-").concat(e):"",this.stackedTableClasses,this.selectableTableClasses]},tableAttrs:function(){var t=this.computedItems,e=this.filteredItems,i=this.computedFields,n=this.selectableTableAttrs,o=this.isTableSimple?{}:{"aria-busy":this.computedBusy?"true":"false","aria-colcount":vr(i.length),"aria-describedby":this.bvAttrs["aria-describedby"]||this.$refs.caption?this.captionId:null};return c(c(c({"aria-rowcount":t&&e&&e.length>t.length?vr(e.length):null},this.bvAttrs),{},{id:this.safeId(),role:"table"},o),n)}},render:function(t){var e=this.wrapperClasses,i=this.renderCaption,n=this.renderColgroup,o=this.renderThead,r=this.renderTbody,s=this.renderTfoot,a=[];this.isTableSimple?a.push(this.normalizeSlot()):(a.push(i?i():null),a.push(n?n():null),a.push(o?o():null),a.push(r?r():null),a.push(s?s():null));var l=t("table",{staticClass:"table b-table",class:this.tableClasses,attrs:this.tableAttrs,key:"b-table"},a.filter(ne));return e.length>0?t("div",{class:e,style:this.wrapperStyles,key:"wrap"},[l]):l}}),tT=vs({tbodyTransitionHandlers:hs(vo),tbodyTransitionProps:hs(vo)},gn),eT=i.default.extend({name:gn,mixins:[Za,Qa,Cs],provide:function(){return{bvTableRowGroup:this}},inject:{bvTable:{default:function(){return{}}}},inheritAttrs:!1,props:tT,computed:{isTbody:function(){return!0},isDark:function(){return this.bvTable.dark},isStacked:function(){return this.bvTable.isStacked},isResponsive:function(){return this.bvTable.isResponsive},isStickyHeader:function(){return!1},hasStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},tableVariant:function(){return this.bvTable.tableVariant},isTransitionGroup:function(){return this.tbodyTransitionProps||this.tbodyTransitionHandlers},tbodyAttrs:function(){return c({role:"rowgroup"},this.bvAttrs)},tbodyProps:function(){var t=this.tbodyTransitionProps;return t?c(c({},t),{},{tag:"tbody"}):{}}},render:function(t){var e={props:this.tbodyProps,attrs:this.tbodyAttrs};return this.isTransitionGroup?(e.on=this.tbodyTransitionHandlers||{},e.nativeOn=this.bvListeners):e.on=this.bvListeners,t(this.isTransitionGroup?"transition-group":"tbody",e,this.normalizeSlot())}}),iT=["TD","TH","TR"],nT=function(t){if(!t||!t.target)return!1;var e=t.target;if(e.disabled||-1!==iT.indexOf(e.tagName))return!1;if(Er(".dropdown-menu",e))return!0;var i="LABEL"===e.tagName?e:Er("label",e);if(i){var n=jr(i,"for"),o=n?Ar(n):Or("input, select, textarea",i);if(o&&!o.disabled)return!0}return Vr(e,ww)},oT=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=Xr();return!!(e&&""!==e.toString().trim()&&e.containsNode&&kr(t))&&e.containsNode(t,!0)},rT=vs(ow,"BTh"),sT=i.default.extend({name:"BTh",extends:rw,props:rT,computed:{tag:function(){return"th"}}}),aT={detailsTdClass:hs(To),tbodyTrAttr:hs(Fo),tbodyTrClass:hs([].concat(T(To),[po]))},lT=i.default.extend({props:aT,methods:{getTdValues:function(t,e,i,n){var o=this.$parent;if(i){var r=re(t,e,"");return Ot(i)?i(r,e,t):Et(i)&&Ot(o[i])?o[i](r,e,t):i}return n},getThValues:function(t,e,i,n,o){var r=this.$parent;if(i){var s=re(t,e,"");return Ot(i)?i(s,e,t,n):Et(i)&&Ot(r[i])?r[i](s,e,t,n):i}return o},getFormattedValue:function(t,e){var i=e.key,n=this.getFieldFormatter(i),o=re(t,i,null);return Ot(n)&&(o=n(o,i,t)),Pt(o)?"":o},toggleDetailsFactory:function(t,e){var i=this;return function(){t&&i.$set(e,gw,!e[gw])}},rowHovered:function(t){this.tbodyRowEvtStopped(t)||this.emitTbodyRowEvent("row-hovered",t)},rowUnhovered:function(t){this.tbodyRowEvtStopped(t)||this.emitTbodyRowEvent("row-unhovered",t)},renderTbodyRowCell:function(t,e,i,n){var o=this,r=this.isStacked,s=t.key,a=t.label,l=t.isRowHeader,u=this.$createElement,d=this.hasNormalizedSlot(Ko),h=this.getFormattedValue(i,t),f=!r&&(this.isResponsive||this.stickyHeader)&&t.stickyColumn,p=f?l?sT:rw:l?"th":"td",m=i[vw]&&i[vw][s]?i[vw][s]:t.variant||null,v={class:[t.class?t.class:"",this.getTdValues(i,s,t.tdClass,"")],props:{},attrs:c({"aria-colindex":String(e+1)},l?this.getThValues(i,s,t.thAttr,"row",{}):this.getTdValues(i,s,t.tdAttr,{})),key:"row-".concat(n,"-cell-").concat(e,"-").concat(s)};f?v.props={stackedHeading:r?a:null,stickyColumn:!0,variant:m}:(v.attrs["data-label"]=r&&!Pt(a)?vr(a):null,v.attrs.role=l?"rowheader":"cell",v.attrs.scope=l?"row":null,m&&v.class.push("".concat(this.dark?"bg":"table","-").concat(m)));var b={item:i,index:n,field:t,unformatted:re(i,s,""),value:h,toggleDetails:this.toggleDetailsFactory(d,i),detailsShowing:Boolean(i[gw])};this.supportsSelectableRows&&(b.rowSelected=this.isRowSelected(n),b.selectRow=function(){return o.selectRow(n)},b.unselectRow=function(){return o.unselectRow(n)});var g=this.$_bodyFieldSlotNameCache[s],y=g?this.normalizeSlot(g,b):vr(h);return this.isStacked&&(y=[u("div",[y])]),u(p,v,[y])},renderTbodyRow:function(t,e){var i=this,n=this.computedFields,o=this.striped,r=this.primaryKey,s=this.currentPage,a=this.perPage,l=this.tbodyTrClass,u=this.tbodyTrAttr,d=this.$createElement,h=this.hasNormalizedSlot(Ko),f=t[gw]&&h,p=this.$listeners["row-clicked"]||this.hasSelectableRowClick,m=[],v=f?this.safeId("_details_".concat(e,"_")):null,b=n.map((function(n,o){return i.renderTbodyRowCell(n,o,t,e)})),g=null;s&&a&&a>0&&(g=String((s-1)*a+e+1));var y=vr(re(t,r))||null,w=y||vr(e),T=y?this.safeId("_row_".concat(y)):null,C=this.selectableRowClasses?this.selectableRowClasses(e):{},x=this.selectableRowAttrs?this.selectableRowAttrs(e):{},S=Ot(l)?l(t,"row"):l,k=Ot(u)?u(t,"row"):u;if(m.push(d(Qy,{class:[S,C,f?"b-table-has-details":""],props:{variant:t[bw]||null},attrs:c(c({id:T},k),{},{tabindex:p?"0":null,"data-pk":y||null,"aria-details":v,"aria-owns":v,"aria-rowindex":g},x),on:{mouseenter:this.rowHovered,mouseleave:this.rowUnhovered},key:"__b-table-row-".concat(w,"__"),ref:"item-rows",refInFor:!0},b)),f){var $={item:t,index:e,fields:n,toggleDetails:this.toggleDetailsFactory(h,t)};this.supportsSelectableRows&&($.rowSelected=this.isRowSelected(e),$.selectRow=function(){return i.selectRow(e)},$.unselectRow=function(){return i.unselectRow(e)});var B=d(rw,{props:{colspan:n.length},class:this.detailsTdClass},[this.normalizeSlot(Ko,$)]);o&&m.push(d("tr",{staticClass:"d-none",attrs:{"aria-hidden":"true",role:"presentation"},key:"__b-table-details-stripe__".concat(w)}));var _=Ot(this.tbodyTrClass)?this.tbodyTrClass(t,Ko):this.tbodyTrClass,D=Ot(this.tbodyTrAttr)?this.tbodyTrAttr(t,Ko):this.tbodyTrAttr;m.push(d(Qy,{staticClass:"b-table-details",class:[_],props:{variant:t[bw]||null},attrs:c(c({},D),{},{id:v,tabindex:"-1"}),key:"__b-table-details__".concat(w)},[B]))}else h&&(m.push(d()),o&&m.push(d()));return m}}}),cT=function(t){return"cell(".concat(t||"",")")},uT=ee(c(c(c({},tT),aT),{},{tbodyClass:hs(To)})),dT=i.default.extend({mixins:[lT],props:uT,beforeDestroy:function(){this.$_bodyFieldSlotNameCache=null},methods:{getTbodyTrs:function(){var t=this.$refs,e=t.tbody?t.tbody.$el||t.tbody:null,i=(t["item-rows"]||[]).map((function(t){return t.$el||t}));return e&&e.children&&e.children.length>0&&i&&i.length>0?ir(e.children).filter((function(t){return nr(i,t)})):[]},getTbodyTrIndex:function(t){if(!kr(t))return-1;var e="TR"===t.tagName?t:Er("tr",t,!0);return e?this.getTbodyTrs().indexOf(e):-1},emitTbodyRowEvent:function(t,e){if(t&&this.hasListener(t)&&e&&e.target){var i=this.getTbodyTrIndex(e.target);if(i>-1){var n=this.computedItems[i];this.$emit(t,n,i,e)}}},tbodyRowEvtStopped:function(t){return this.stopIfBusy&&this.stopIfBusy(t)},onTbodyRowKeydown:function(t){var e=t.target,i=t.keyCode;if(!this.tbodyRowEvtStopped(t)&&"TR"===e.tagName&&_r(e)&&0===e.tabIndex)if(nr([Ha,Ga],i))Bs(t),this.onTBodyRowClicked(t);else if(nr([Wa,Ra,za,Ma],i)){var n=this.getTbodyTrIndex(e);if(n>-1){Bs(t);var o=this.getTbodyTrs(),r=t.shiftKey;i===za||r&&i===Wa?ts(o[0]):i===Ma||r&&i===Ra?ts(o[o.length-1]):i===Wa&&n>0?ts(o[n-1]):i===Ra&&n<o.length-1&&ts(o[n+1])}}},onTBodyRowClicked:function(t){this.tbodyRowEvtStopped(t)||nT(t)||oT(this.$el)||this.emitTbodyRowEvent(Jn,t)},onTbodyRowMiddleMouseRowClicked:function(t){this.tbodyRowEvtStopped(t)||2!==t.which||this.emitTbodyRowEvent("row-middle-clicked",t)},onTbodyRowContextmenu:function(t){this.tbodyRowEvtStopped(t)||this.emitTbodyRowEvent("row-contextmenu",t)},onTbodyRowDblClicked:function(t){this.tbodyRowEvtStopped(t)||nT(t)||this.emitTbodyRowEvent("row-dblclicked",t)},renderTbody:function(){var t=this,e=this.computedItems,i=this.renderBusy,n=this.renderTopRow,o=this.renderEmpty,r=this.renderBottomRow,s=this.$createElement,a=this.hasListener(Jn)||this.hasSelectableRowClick,l=[],c=i?i():null;if(c)l.push(c);else{var u={},d=cT();d=this.hasNormalizedSlot(d)?d:null,this.computedFields.forEach((function(e){var i=e.key,n=cT(i),o=cT(i.toLowerCase());u[i]=t.hasNormalizedSlot(n)?n:t.hasNormalizedSlot(o)?o:d})),this.$_bodyFieldSlotNameCache=u,l.push(n?n():s()),e.forEach((function(e,i){l.push(t.renderTbodyRow(e,i))})),l.push(o?o():s()),l.push(r?r():s())}var h={auxclick:this.onTbodyRowMiddleMouseRowClicked,contextmenu:this.onTbodyRowContextmenu,dblclick:this.onTbodyRowDblClicked};return a&&(h.click=this.onTBodyRowClicked,h.keydown=this.onTbodyRowKeydown),s(eT,{class:this.tbodyClass||null,props:ps(tT,this.$props),on:h,ref:"tbody"},l)}}}),hT=vs({footVariant:hs(go)},yn),fT=i.default.extend({name:yn,mixins:[Za,Qa,Cs],provide:function(){return{bvTableRowGroup:this}},inject:{bvTable:{default:function(){return{}}}},inheritAttrs:!1,props:hT,computed:{isTfoot:function(){return!0},isDark:function(){return this.bvTable.dark},isStacked:function(){return this.bvTable.isStacked},isResponsive:function(){return this.bvTable.isResponsive},isStickyHeader:function(){return!1},hasStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},tableVariant:function(){return this.bvTable.tableVariant},tfootClasses:function(){return[this.footVariant?"thead-".concat(this.footVariant):null]},tfootAttrs:function(){return c(c({},this.bvAttrs),{},{role:"rowgroup"})}},render:function(t){return t("tfoot",{class:this.tfootClasses,attrs:this.tfootAttrs,on:this.bvListeners},this.normalizeSlot())}}),pT={footClone:hs(ho,!1),footRowVariant:hs(go),footVariant:hs(go),tfootClass:hs(To),tfootTrClass:hs(To)},mT=i.default.extend({props:pT,methods:{renderTFootCustom:function(){var t=this.$createElement;return this.hasNormalizedSlot(Lo)?t(fT,{class:this.tfootClass||null,props:{footVariant:this.footVariant||this.headVariant||null},key:"bv-tfoot-custom"},this.normalizeSlot(Lo,{items:this.computedItems.slice(),fields:this.computedFields.slice(),columns:this.computedFields.length})):t()},renderTfoot:function(){return this.footClone?this.renderThead(!0):this.renderTFootCustom()}}}),vT=vs({headVariant:hs(go)},wn),bT=i.default.extend({name:wn,mixins:[Za,Qa,Cs],provide:function(){return{bvTableRowGroup:this}},inject:{bvTable:{default:function(){return{}}}},inheritAttrs:!1,props:vT,computed:{isThead:function(){return!0},isDark:function(){return this.bvTable.dark},isStacked:function(){return this.bvTable.isStacked},isResponsive:function(){return this.bvTable.isResponsive},isStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},hasStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},tableVariant:function(){return this.bvTable.tableVariant},theadClasses:function(){return[this.headVariant?"thead-".concat(this.headVariant):null]},theadAttrs:function(){return c({role:"rowgroup"},this.bvAttrs)}},render:function(t){return t("thead",{class:this.theadClasses,attrs:this.theadAttrs,on:this.bvListeners},this.normalizeSlot())}}),gT=function(t){return"head(".concat(t||"",")")},yT=function(t){return"foot(".concat(t||"",")")},wT={headRowVariant:hs(go),headVariant:hs(go),theadClass:hs(To),theadTrClass:hs(To)},TT=i.default.extend({props:wT,methods:{fieldClasses:function(t){return[t.class?t.class:"",t.thClass?t.thClass:""]},headClicked:function(t,e,i){this.stopIfBusy&&this.stopIfBusy(t)||nT(t)||oT(this.$el)||(Bs(t),this.$emit(Hn,e.key,e,t,i))},renderThead:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=this.computedFields,n=this.isSortable,o=this.isSelectable,r=this.headVariant,s=this.footVariant,a=this.headRowVariant,l=this.footRowVariant,u=this.$createElement;if(this.isStackedAlways||0===i.length)return u();var d=n||this.hasListener(Hn),h=o?this.selectAllRows:su,f=o?this.clearSelected:su,p=function(i,o){var r=i.label,s=i.labelHtml,a=i.variant,l=i.stickyColumn,p=i.key,m=null;i.label.trim()||i.headerTitle||(m=fr(i.key));var v={};d&&(v.click=function(n){t.headClicked(n,i,e)},v.keydown=function(n){var o=n.keyCode;o!==Ha&&o!==Ga||t.headClicked(n,i,e)});var b=n?t.sortTheadThAttrs(p,i,e):{},g=n?t.sortTheadThClasses(p,i,e):null,y=n?t.sortTheadThLabel(p,i,e):null,w={class:[t.fieldClasses(i),g],props:{variant:a,stickyColumn:l},style:i.thStyle||{},attrs:c(c({tabindex:d&&i.sortable?"0":null,abbr:i.headerAbbr||null,title:i.headerTitle||null,"aria-colindex":o+1,"aria-label":m},t.getThValues(null,p,i.thAttr,e?"foot":"head",{})),b),on:v,key:p},C=[gT(p),gT(p.toLowerCase()),gT()];e&&(C=[yT(p),yT(p.toLowerCase()),yT()].concat(T(C)));var x={label:r,column:p,field:i,isFoot:e,selectAllRows:h,clearSelected:f},S=t.normalizeSlot(C,x)||u("div",{domProps:Fl(s,r)}),k=y?u("span",{staticClass:"sr-only"}," (".concat(y,")")):null;return u(sT,w,[S,k].filter(ne))},m=i.map(p).filter(ne),v=[];if(e)v.push(u(Qy,{class:this.tfootTrClass,props:{variant:Pt(l)?a:l}},m));else{var b={columns:i.length,fields:i,selectAllRows:h,clearSelected:f};v.push(this.normalizeSlot(Qo,b)||u()),v.push(u(Qy,{class:this.theadTrClass,props:{variant:a}},m))}return u(e?fT:bT,{class:(e?this.tfootClass:this.theadClass)||null,props:e?{footVariant:s||r||null}:{headVariant:r||null},key:e?"bv-tfoot":"bv-thead"},v)}}}),CT=i.default.extend({methods:{renderTopRow:function(){var t=this.computedFields,e=this.stacked,i=this.tbodyTrClass,n=this.tbodyTrAttr,o=this.$createElement;return this.hasNormalizedSlot(er)&&!0!==e&&""!==e?o(Qy,{staticClass:"b-table-top-row",class:[Ot(i)?i(null,"row-top"):i],attrs:Ot(n)?n(null,"row-top"):n,key:"b-top-row"},[this.normalizeSlot(er,{columns:t.length,fields:t})]):o()}}}),xT=vs(ee(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c(c({},fc),tw),aw),cw),dw),fw),Cw),Fw),Pw),Lw),Mw),qw),Xw),Jw),uT),pT),wT),{})),fn),ST=i.default.extend({name:fn,mixins:[Za,Ky,pc,Cs,Iw,Qw,Zw,TT,mT,dT,Zw,xw,Kw,Ow,uw,hw,Hw,pw,CT,ew,lw,Aw],props:xT}),kT=vs(ee(c(c(c(c(c(c(c(c(c({},fc),cw),dw),Fw),Xw),Jw),uT),pT),wT)),mn),$T=i.default.extend({name:mn,mixins:[Za,Ky,pc,Cs,Iw,Qw,Zw,TT,mT,dT,uw,hw],props:kT}),BT=vs(ee(c(c(c({},fc),Xw),Jw)),vn),_T=i.default.extend({name:vn,mixins:[Za,Ky,pc,Cs,Qw,Zw],props:BT,computed:{isTableSimple:function(){return!0}}}),DT=me({components:{BTable:ST},plugins:{TableLitePlugin:me({components:{BTableLite:$T}}),TableSimplePlugin:me({components:{BTableSimple:_T,BTbody:eT,BThead:bT,BTfoot:fT,BTr:Qy,BTd:rw,BTh:sT}})}}),FT=function(t){return t>0},IT=vs({animation:hs(go),columns:hs(mo,5,FT),hideHeader:hs(ho,!1),rows:hs(mo,3,FT),showFooter:hs(ho,!1),tableProps:hs(vo,{})},cn),PT=i.default.extend({name:cn,functional:!0,props:IT,render:function(t,e){var i=e.props,n=i.animation,o=i.columns,r=t("th",[t(Gy,{props:{animation:n}})]),s=t("tr",rr(o,r)),a=t("td",[t(Gy,{props:{width:"75%",animation:n}})]),l=t("tr",rr(o,a)),u=t("tbody",rr(i.rows,l)),d=i.hideHeader?t():t("thead",[s]),h=i.showFooter?t("tfoot",[s]):t();return t(_T,{props:c({},i.tableProps)},[d,u,h])}}),OT=vs({loading:hs(ho,!1)},un),VT=me({components:{BSkeleton:Gy,BSkeletonIcon:Yy,BSkeletonImg:qy,BSkeletonTable:PT,BSkeletonWrapper:i.default.extend({name:un,functional:!0,props:OT,render:function(t,e){var i=e.data,n=e.props,o=e.slots,r=e.scopedSlots,s=o(),a=r||{},l={};return n.loading?t("div",F(i,{attrs:{role:"alert","aria-live":"polite","aria-busy":!0},staticClass:"b-skeleton-wrapper",key:"loading"}),Ts("loading",l,a,s)):Ts(Ao,l,a,s)}})}}),ET=me({components:{BSpinner:mg}}),LT=ys("value",{type:mo}),AT=LT.mixin,RT=LT.props,MT=LT.prop,HT=LT.event,zT=function(t){return!t.disabled},NT=i.default.extend({name:"BVTabButton",inject:{bvTabs:{default:function(){return{}}}},props:{controls:hs(go),id:hs(go),noKeyNav:hs(ho,!1),posInSet:hs(mo),setSize:hs(mo),tab:hs(),tabIndex:hs(mo)},methods:{focus:function(){ts(this.$refs.link)},handleEvt:function(t){if(!this.tab.disabled){var e=t.type,i=t.keyCode,n=t.shiftKey;"click"===e||"keydown"===e&&i===Ga?(Bs(t),this.$emit(Bn,t)):"keydown"!==e||this.noKeyNav||(-1!==[Wa,Na,za].indexOf(i)?(Bs(t),n||i===za?this.$emit(An,t):this.$emit(Xn,t)):-1!==[Ra,ja,Ma].indexOf(i)&&(Bs(t),n||i===Ma?this.$emit(Gn,t):this.$emit(Un,t)))}}},render:function(t){var e=this.id,i=this.tabIndex,n=this.setSize,o=this.posInSet,r=this.controls,s=this.handleEvt,a=this.tab,l=a.title,u=a.localActive,d=a.disabled,h=a.titleItemClass,f=a.titleLinkClass,p=a.titleLinkAttributes,m=t(ol,{staticClass:"nav-link",class:[{active:u&&!d,disabled:d},f,u?this.bvTabs.activeNavItemClass:null],props:{disabled:d},attrs:c(c({},p),{},{id:e,role:"tab",tabindex:i,"aria-selected":u&&!d?"true":"false","aria-setsize":n,"aria-posinset":o,"aria-controls":r}),on:{click:s,keydown:s},ref:"link"},[this.tab.normalizeSlot(tr)||l]);return t("li",{staticClass:"nav-item",class:[h],attrs:{role:"presentation"}},[m])}}),jT=Qt(Vb,["tabs","isNavBar","cardHeader"]),GT=vs(ee(c(c(c(c({},fc),RT),jT),{},{activeNavItemClass:hs(To),activeTabClass:hs(To),card:hs(ho,!1),contentClass:hs(To),end:hs(ho,!1),lazy:hs(ho,!1),navClass:hs(To),navWrapperClass:hs(To),noFade:hs(ho,!1),noKeyNav:hs(ho,!1),noNavStyle:hs(ho,!1),tag:hs(go,"div")})),bn),WT=i.default.extend({name:bn,mixins:[pc,AT,Cs],provide:function(){return{bvTabs:this}},props:GT,data:function(){return{currentTab:lr(this[MT],-1),tabs:[],registeredTabs:[]}},computed:{fade:function(){return!this.noFade},localNavClass:function(){var t=[];return this.card&&this.vertical&&t.push("card-header","h-100","border-bottom-0","rounded-0"),[].concat(t,[this.navClass])}},watch:(ng={},a(ng,MT,(function(t,e){if(t!==e){t=lr(t,-1),e=lr(e,0);var i=this.tabs[t];i&&!i.disabled?this.activateTab(i):t<e?this.previousTab():this.nextTab()}})),a(ng,"currentTab",(function(t){var e=-1;this.tabs.forEach((function(i,n){n!==t||i.disabled?i.localActive=!1:(i.localActive=!0,e=n)})),this.$emit(HT,e)})),a(ng,"tabs",(function(t,e){var i=this;Ua(t.map((function(t){return t._uid})),e.map((function(t){return t._uid})))||this.$nextTick((function(){i.$emit("changed",t.slice(),e.slice())}))})),a(ng,"registeredTabs",(function(){this.updateTabs()})),ng),created:function(){this.$_observer=null},mounted:function(){this.setObserver(!0)},beforeDestroy:function(){this.setObserver(!1),this.tabs=[]},methods:{registerTab:function(t){nr(this.registeredTabs,t)||this.registeredTabs.push(t)},unregisterTab:function(t){this.registeredTabs=this.registeredTabs.slice().filter((function(e){return e!==t}))},setObserver:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.$_observer&&this.$_observer.disconnect(),this.$_observer=null,e){var i=function(){t.$nextTick((function(){xr((function(){t.updateTabs()}))}))};this.$_observer=au(this.$refs.content,i,{childList:!0,subtree:!1,attributes:!0,attributeFilter:["id"]})}},getTabs:function(){var t=this.registeredTabs.filter((function(t){return 0===t.$children.filter((function(t){return t._isTab})).length})),e=[];if(M&&t.length>0){var i=t.map((function(t){return"#".concat(t.safeId())})).join(", ");e=Pr(i,this.$el).map((function(t){return t.id})).filter(ne)}return zw(t,(function(t,i){return e.indexOf(t.safeId())-e.indexOf(i.safeId())}))},updateTabs:function(){var t=this.getTabs(),e=t.indexOf(t.slice().reverse().find((function(t){return t.localActive&&!t.disabled})));if(e<0){var i=this.currentTab;i>=t.length?e=t.indexOf(t.slice().reverse().find(zT)):t[i]&&!t[i].disabled&&(e=i)}e<0&&(e=t.indexOf(t.find(zT))),t.forEach((function(t,i){t.localActive=i===e})),this.tabs=t,this.currentTab=e},getButtonForTab:function(t){return(this.$refs.buttons||[]).find((function(e){return e.tab===t}))},updateButton:function(t){var e=this.getButtonForTab(t);e&&e.$forceUpdate&&e.$forceUpdate()},activateTab:function(t){var e=this.currentTab,i=this.tabs,n=!1;if(t){var o=i.indexOf(t);if(o!==e&&o>-1&&!t.disabled){var r=new BvEvent("activate-tab",{cancelable:!0,vueTarget:this,componentId:this.safeId()});this.$emit(r.type,o,e,r),r.defaultPrevented||(this.currentTab=o,n=!0)}}return n||this[MT]===e||this.$emit(HT,e),n},deactivateTab:function(t){return!!t&&this.activateTab(this.tabs.filter((function(e){return e!==t})).find(zT))},focusButton:function(t){var e=this;this.$nextTick((function(){ts(e.getButtonForTab(t))}))},emitTabClick:function(t,e){Nt(e)&&t&&t.$emit&&!t.disabled&&t.$emit(Bn,e)},clickTab:function(t,e){this.activateTab(t),this.emitTabClick(t,e)},firstTab:function(t){var e=this.tabs.find(zT);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))},previousTab:function(t){var e=Us(this.currentTab,0),i=this.tabs.slice(0,e).reverse().find(zT);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},nextTab:function(t){var e=Us(this.currentTab,-1),i=this.tabs.slice(e+1).find(zT);this.activateTab(i)&&t&&(this.focusButton(i),this.emitTabClick(i,t))},lastTab:function(t){var e=this.tabs.slice().reverse().find(zT);this.activateTab(e)&&t&&(this.focusButton(e),this.emitTabClick(e,t))}},render:function(t){var e=this,i=this.align,n=this.card,o=this.end,r=this.fill,s=this.firstTab,l=this.justified,c=this.lastTab,u=this.nextTab,d=this.noKeyNav,h=this.noNavStyle,f=this.pills,p=this.previousTab,m=this.small,v=this.tabs,b=this.vertical,g=v.find((function(t){return t.localActive&&!t.disabled})),y=v.find((function(t){return!t.disabled})),w=v.map((function(i,n){var o,r=i.safeId,l=null;return d||(l=-1,(i===g||!g&&i===y)&&(l=null)),t(NT,{props:{controls:r?r():null,id:i.controlledBy||(r?r("_BV_tab_button_"):null),noKeyNav:d,posInSet:n+1,setSize:v.length,tab:i,tabIndex:l},on:(o={},a(o,Bn,(function(t){e.clickTab(i,t)})),a(o,An,s),a(o,Xn,p),a(o,Un,u),a(o,Gn,c),o),key:i._uid||n,ref:"buttons",refInFor:!0})})),T=t(Eb,{class:this.localNavClass,attrs:{role:"tablist",id:this.safeId("_BV_tab_controls_")},props:{fill:r,justified:l,align:i,tabs:!h&&!f,pills:!h&&f,vertical:b,small:m,cardHeader:n&&!b},ref:"nav"},[this.normalizeSlot("tabs-start")||t(),w,this.normalizeSlot("tabs-end")||t()]);T=t("div",{class:[{"card-header":n&&!b&&!o,"card-footer":n&&!b&&o,"col-auto":b},this.navWrapperClass],key:"bv-tabs-nav"},[T]);var C=this.normalizeSlot()||[],x=t();0===C.length&&(x=t("div",{class:["tab-pane","active",{"card-body":n}],key:"bv-empty-tab"},this.normalizeSlot(Ro)));var S=t("div",{staticClass:"tab-content",class:[{col:b},this.contentClass],attrs:{id:this.safeId("_BV_tab_container_")},key:"bv-content",ref:"content"},[C,x]);return t(this.tag,{staticClass:"tabs",class:{row:b,"no-gutters":b&&n},attrs:{id:this.safeId()}},[o?S:t(),T,o?t():S])}}),YT="active",UT="update:active",qT=vs(ee(c(c({},fc),{},(a(og={},YT,hs(ho,!1)),a(og,"buttonId",hs(go)),a(og,"disabled",hs(ho,!1)),a(og,"lazy",hs(ho,!1)),a(og,"noBody",hs(ho,!1)),a(og,"tag",hs(go,"div")),a(og,"title",hs(go)),a(og,"titleItemClass",hs(To)),a(og,"titleLinkAttributes",hs(vo)),a(og,"titleLinkClass",hs(To)),og))),hn),KT=me({components:{BTabs:WT,BTab:i.default.extend({name:hn,mixins:[pc,Cs],inject:{bvTabs:{default:function(){return{}}}},props:qT,data:function(){return{localActive:this.active&&!this.disabled}},computed:{_isTab:function(){return!0},tabClasses:function(){var t=this.localActive;return[{active:t,disabled:this.disabled,"card-body":this.bvTabs.card&&!this.noBody},t?this.bvTabs.activeTabClass:null]},controlledBy:function(){return this.buttonId||this.safeId("__BV_tab_button__")},computedNoFade:function(){return!this.bvTabs.fade},computedLazy:function(){return this.bvTabs.lazy||this.lazy}},watch:(rg={},a(rg,YT,(function(t,e){t!==e&&(t?this.activate():this.deactivate()||this.$emit(UT,this.localActive))})),a(rg,"disabled",(function(t,e){if(t!==e){var i=this.bvTabs.firstTab;t&&this.localActive&&i&&(this.localActive=!1,i())}})),a(rg,"localActive",(function(t){this.$emit(UT,t)})),rg),mounted:function(){this.registerTab()},updated:function(){var t=this.bvTabs.updateButton;t&&this.hasNormalizedSlot(tr)&&t(this)},beforeDestroy:function(){this.unregisterTab()},methods:{registerTab:function(){var t=this.bvTabs.registerTab;t&&t(this)},unregisterTab:function(){var t=this.bvTabs.unregisterTab;t&&t(this)},activate:function(){var t=this.bvTabs.activateTab;return!(!t||this.disabled)&&t(this)},deactivate:function(){var t=this.bvTabs.deactivateTab;return!(!t||!this.localActive)&&t(this)}},render:function(t){var e=this.localActive,i=t(this.tag,{staticClass:"tab-pane",class:this.tabClasses,directives:[{name:"show",value:e}],attrs:{role:"tabpanel",id:this.safeId(),"aria-hidden":e?"false":"true","aria-labelledby":this.controlledBy||null},ref:"panel"},[e||!this.computedLazy?this.normalizeSlot():t()]);return t(Ls,{props:{mode:"out-in",noFade:this.computedNoFade}},[i])}})}}),XT=me({components:{BTime:av}});function ZT(t){return(ZT="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function JT(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var QT="undefined"!=typeof window;function tC(t,e){return e.reduce((function(e,i){return t.hasOwnProperty(i)&&(e[i]=t[i]),e}),{})}var eC,iC,nC={},oC={},rC={},sC=new(i.default.extend({data:function(){return{transports:nC,targets:oC,sources:rC,trackInstances:QT}},methods:{open:function(t){if(QT){var e=t.to,n=t.from,o=t.passengers,r=t.order,s=void 0===r?1/0:r;if(e&&n&&o){var a,l={to:e,from:n,passengers:(a=o,Array.isArray(a)||"object"===ZT(a)?Object.freeze(a):a),order:s};-1===Object.keys(this.transports).indexOf(e)&&i.default.set(this.transports,e,[]);var c,u=this.$_getTransportIndex(l),d=this.transports[e].slice(0);-1===u?d.push(l):d[u]=l,this.transports[e]=(c=function(t,e){return t.order-e.order},d.map((function(t,e){return[e,t]})).sort((function(t,e){return c(t[1],e[1])||t[0]-e[0]})).map((function(t){return t[1]})))}}},close:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t.to,n=t.from;if(i&&(n||!1!==e)&&this.transports[i])if(e)this.transports[i]=[];else{var o=this.$_getTransportIndex(t);if(o>=0){var r=this.transports[i].slice(0);r.splice(o,1),this.transports[i]=r}}},registerTarget:function(t,e,i){QT&&(this.trackInstances&&!i&&this.targets[t]&&console.warn("[portal-vue]: Target ".concat(t," already exists")),this.$set(this.targets,t,Object.freeze([e])))},unregisterTarget:function(t){this.$delete(this.targets,t)},registerSource:function(t,e,i){QT&&(this.trackInstances&&!i&&this.sources[t]&&console.warn("[portal-vue]: source ".concat(t," already exists")),this.$set(this.sources,t,Object.freeze([e])))},unregisterSource:function(t){this.$delete(this.sources,t)},hasTarget:function(t){return!(!this.targets[t]||!this.targets[t][0])},hasSource:function(t){return!(!this.sources[t]||!this.sources[t][0])},hasContentFor:function(t){return!!this.transports[t]&&!!this.transports[t].length},$_getTransportIndex:function(t){var e=t.to,i=t.from;for(var n in this.transports[e])if(this.transports[e][n].from===i)return+n;return-1}}}))(nC),aC=1,lC=i.default.extend({name:"portal",props:{disabled:{type:Boolean},name:{type:String,default:function(){return String(aC++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},created:function(){var t=this;this.$nextTick((function(){sC.registerSource(t.name,t)}))},mounted:function(){this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){sC.unregisterSource(this.name),this.clear()},watch:{to:function(t,e){e&&e!==t&&this.clear(e),this.sendUpdate()}},methods:{clear:function(t){var e={from:this.name,to:t||this.to};sC.close(e)},normalizeSlots:function(){return this.$scopedSlots.default?[this.$scopedSlots.default]:this.$slots.default},normalizeOwnChildren:function(t){return"function"==typeof t?t(this.slotProps):t},sendUpdate:function(){var t=this.normalizeSlots();if(t){var e={from:this.name,to:this.to,passengers:JT(t),order:this.order};sC.open(e)}else this.clear()}},render:function(t){var e=this.$slots.default||this.$scopedSlots.default||[],i=this.tag;return e&&this.disabled?e.length<=1&&this.slim?this.normalizeOwnChildren(e)[0]:t(i,[this.normalizeOwnChildren(e)]):this.slim?t():t(i,{class:{"v-portal":!0},style:{display:"none"},key:"v-portal-placeholder"})}}),cC=i.default.extend({name:"portalTarget",props:{multiple:{type:Boolean,default:!1},name:{type:String,required:!0},slim:{type:Boolean,default:!1},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},data:function(){return{transports:sC.transports,firstRender:!0}},created:function(){var t=this;this.$nextTick((function(){sC.registerTarget(t.name,t)}))},watch:{ownTransports:function(){this.$emit("change",this.children().length>0)},name:function(t,e){sC.unregisterTarget(e),sC.registerTarget(t,this)}},mounted:function(){var t=this;this.transition&&this.$nextTick((function(){t.firstRender=!1}))},beforeDestroy:function(){sC.unregisterTarget(this.name)},computed:{ownTransports:function(){var t=this.transports[this.name]||[];return this.multiple?t:0===t.length?[]:[t[t.length-1]]},passengers:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.reduce((function(t,i){var n=i.passengers[0],o="function"==typeof n?n(e):i.passengers;return t.concat(o)}),[])}(this.ownTransports,this.slotProps)}},methods:{children:function(){return 0!==this.passengers.length?this.passengers:this.$scopedSlots.default?this.$scopedSlots.default(this.slotProps):this.$slots.default||[]},noWrapper:function(){var t=this.slim&&!this.transition;return t&&this.children().length>1&&console.warn("[portal-vue]: PortalTarget with `slim` option received more than one child element."),t}},render:function(t){var e=this.noWrapper(),i=this.children(),n=this.transition||this.tag;return e?i[0]:this.slim&&!n?t():t(n,{props:{tag:this.transition&&this.tag?this.tag:void 0},class:{"vue-portal-target":!0}},i)}}),uC=0,dC=["disabled","name","order","slim","slotProps","tag","to"],hC=["multiple","transition"],fC=(i.default.extend({name:"MountingPortal",inheritAttrs:!1,props:{append:{type:[Boolean,String]},bail:{type:Boolean},mountTo:{type:String,required:!0},disabled:{type:Boolean},name:{type:String,default:function(){return"mounted_"+String(uC++)}},order:{type:Number,default:0},slim:{type:Boolean},slotProps:{type:Object,default:function(){return{}}},tag:{type:String,default:"DIV"},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}},multiple:{type:Boolean,default:!1},targetSlim:{type:Boolean},targetSlotProps:{type:Object,default:function(){return{}}},targetTag:{type:String,default:"div"},transition:{type:[String,Object,Function]}},created:function(){if("undefined"!=typeof document){var t=document.querySelector(this.mountTo);if(t){var e=this.$props;if(sC.targets[e.name])e.bail?console.warn("[portal-vue]: Target ".concat(e.name," is already mounted.\n        Aborting because 'bail: true' is set")):this.portalTarget=sC.targets[e.name];else{var i=e.append;if(i){var n="string"==typeof i?i:"DIV",o=document.createElement(n);t.appendChild(o),t=o}var r=tC(this.$props,hC);r.slim=this.targetSlim,r.tag=this.targetTag,r.slotProps=this.targetSlotProps,r.name=this.to,this.portalTarget=new cC({el:t,parent:this.$parent||this,propsData:r})}}else console.error("[portal-vue]: Mount Point '".concat(this.mountTo,"' not found in document"))}},beforeDestroy:function(){var t=this.portalTarget;if(this.append){var e=t.$el;e.parentNode.removeChild(e)}t.$destroy()},render:function(t){if(!this.portalTarget)return console.warn("[portal-vue] Target wasn't mounted"),t();if(!this.$scopedSlots.manual){var e=tC(this.$props,dC);return t(lC,{props:e,attrs:this.$attrs,on:this.$listeners,scopedSlots:this.$scopedSlots},this.$slots.default)}var i=this.$scopedSlots.manual({to:this.to});return Array.isArray(i)&&(i=i[0]),i||t()}}),i.default.extend({mixins:[Cs],data:function(){return{name:"b-toaster"}},methods:{onAfterEnter:function(t){var e=this;xr((function(){Mr(t,"".concat(e.name,"-enter-to"))}))}},render:function(t){return t("transition-group",{props:{tag:"div",name:this.name},on:{afterEnter:this.onAfterEnter}},this.normalizeSlot())}})),pC=vs({ariaAtomic:hs(go),ariaLive:hs(go),name:hs(go,void 0,!0),role:hs(go)},xn),mC=i.default.extend({name:xn,mixins:[Ja],props:pC,data:function(){return{doRender:!1,dead:!1,staticName:this.name}},beforeMount:function(){var t=this,e=this.name;this.staticName=e,sC.hasTarget(e)?(le('A "<portal-target>" with name "'.concat(e,'" already exists in the document.'),xn),this.dead=!0):(this.doRender=!0,this.$once(oo,(function(){t.emitOnRoot(Ds(xn,In),e)})))},destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},render:function(t){var e=t("div",{class:["d-none",{"b-dead-toaster":this.dead}]});if(this.doRender){var i=t(cC,{staticClass:"b-toaster-slot",props:{name:this.staticName,multiple:!0,tag:"div",slim:!1,transition:fC}});e=t("div",{staticClass:"b-toaster",class:[this.staticName],attrs:{id:this.staticName,role:this.role||null,"aria-live":this.ariaLive,"aria-atomic":this.ariaAtomic}},[i])}return e}}),vC=ys("visible",{type:ho,defaultValue:!1,event:$n}),bC=vC.mixin,gC=vC.props,yC=vC.prop,wC=vC.event,TC=Jt(nl,["href","to"]),CC=vs(ee(c(c(c(c({},fc),gC),TC),{},{appendToast:hs(ho,!1),autoHideDelay:hs(_o,5e3),bodyClass:hs(To),headerClass:hs(To),isStatus:hs(ho,!1),noAutoHide:hs(ho,!1),noCloseButton:hs(ho,!1),noFade:hs(ho,!1),noHoverPause:hs(ho,!1),solid:hs(ho,!1),static:hs(ho,!1),title:hs(go),toastClass:hs(To),toaster:hs(go,"b-toaster-top-right"),variant:hs(go)})),Cn),xC=i.default.extend({name:Cn,mixins:[Za,pc,bC,Ja,Cs,ib],inheritAttrs:!1,props:CC,data:function(){return{isMounted:!1,doRender:!1,localShow:!1,isTransitioning:!1,isHiding:!1,order:0,dismissStarted:0,resumeDismiss:0}},computed:{toastClasses:function(){var t=this.appendToast,e=this.variant;return a({"b-toast-solid":this.solid,"b-toast-append":t,"b-toast-prepend":!t},"b-toast-".concat(e),e)},slotScope:function(){return{hide:this.hide}},computedDuration:function(){return Us(lr(this.autoHideDelay,0),1e3)},computedToaster:function(){return String(this.toaster)},transitionHandlers:function(){return{beforeEnter:this.onBeforeEnter,afterEnter:this.onAfterEnter,beforeLeave:this.onBeforeLeave,afterLeave:this.onAfterLeave}},computedAttrs:function(){return c(c({},this.bvAttrs),{},{id:this.safeId(),tabindex:"0"})}},watch:(eC={},a(eC,yC,(function(t){this[t?"show":"hide"]()})),a(eC,"localShow",(function(t){t!==this[yC]&&this.$emit(wC,t)})),a(eC,"toaster",(function(){this.$nextTick(this.ensureToaster)})),a(eC,"static",(function(t){t&&this.localShow&&this.ensureToaster()})),eC),created:function(){this.$_dismissTimer=null},mounted:function(){var t=this;this.isMounted=!0,this.$nextTick((function(){t[yC]&&xr((function(){t.show()}))})),this.listenOnRoot(Fs(Cn,to),(function(e){e===t.safeId()&&t.show()})),this.listenOnRoot(Fs(Cn,Nn),(function(e){e&&e!==t.safeId()||t.hide()})),this.listenOnRoot(Ds(xn,In),(function(e){e===t.computedToaster&&t.hide()}))},beforeDestroy:function(){this.clearDismissTimer()},methods:{show:function(){var t=this;if(!this.localShow){this.ensureToaster();var e=this.buildEvent(to);this.emitEvent(e),this.dismissStarted=this.resumeDismiss=0,this.order=Date.now()*(this.appendToast?1:-1),this.isHiding=!1,this.doRender=!0,this.$nextTick((function(){xr((function(){t.localShow=!0}))}))}},hide:function(){var t=this;if(this.localShow){var e=this.buildEvent(Nn);this.emitEvent(e),this.setHoverHandler(!1),this.dismissStarted=this.resumeDismiss=0,this.clearDismissTimer(),this.isHiding=!0,xr((function(){t.localShow=!1}))}},buildEvent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new BvEvent(t,c(c({cancelable:!1,target:this.$el||null,relatedTarget:null},e),{},{vueTarget:this,componentId:this.safeId()}))},emitEvent:function(t){var e=t.type;this.emitOnRoot(Ds(Cn,e),t),this.$emit(e,t)},ensureToaster:function(){if(!this.static){var t=this.computedToaster;if(!sC.hasTarget(t)){var e=document.createElement("div");document.body.appendChild(e),new mC({parent:this.$root,propsData:{name:t}}).$mount(e)}}},startDismissTimer:function(){this.clearDismissTimer(),this.noAutoHide||(this.$_dismissTimer=setTimeout(this.hide,this.resumeDismiss||this.computedDuration),this.dismissStarted=Date.now(),this.resumeDismiss=0)},clearDismissTimer:function(){clearTimeout(this.$_dismissTimer),this.$_dismissTimer=null},setHoverHandler:function(t){var e=this.$refs["b-toast"];$s(t,e,"mouseenter",this.onPause,lo),$s(t,e,"mouseleave",this.onUnPause,lo)},onPause:function(){if(!this.noAutoHide&&!this.noHoverPause&&this.$_dismissTimer&&!this.resumeDismiss){var t=Date.now()-this.dismissStarted;t>0&&(this.clearDismissTimer(),this.resumeDismiss=Us(this.computedDuration-t,1e3))}},onUnPause:function(){this.noAutoHide||this.noHoverPause||!this.resumeDismiss?this.resumeDismiss=this.dismissStarted=0:this.startDismissTimer()},onLinkClick:function(){var t=this;this.$nextTick((function(){xr((function(){t.hide()}))}))},onBeforeEnter:function(){this.isTransitioning=!0},onAfterEnter:function(){this.isTransitioning=!1;var t=this.buildEvent(eo);this.emitEvent(t),this.startDismissTimer(),this.setHoverHandler(!0)},onBeforeLeave:function(){this.isTransitioning=!0},onAfterLeave:function(){this.isTransitioning=!1,this.order=0,this.resumeDismiss=this.dismissStarted=0;var t=this.buildEvent(zn);this.emitEvent(t),this.doRender=!1},makeToast:function(t){var e=this,i=this.title,n=this.slotScope,o=la(this),r=[],s=this.normalizeSlot("toast-title",n);s?r.push(s):i&&r.push(t("strong",{staticClass:"mr-2"},i)),this.noCloseButton||r.push(t(Ps,{staticClass:"ml-auto mb-1",on:{click:function(){e.hide()}}}));var a=t();r.length>0&&(a=t("header",{staticClass:"toast-header",class:this.headerClass},r));var l=t(o?ol:"div",{staticClass:"toast-body",class:this.bodyClass,props:o?ps(TC,this):{},on:o?{click:this.onLinkClick}:{}},this.normalizeSlot(Ao,n));return t("div",{staticClass:"toast",class:this.toastClass,attrs:this.computedAttrs,key:"toast-".concat(this._uid),ref:"toast"},[a,l])}},render:function(t){if(!this.doRender||!this.isMounted)return t();var e=this.order,i=this.static,n=this.isHiding,o=this.isStatus,r="b-toast-".concat(this._uid),s=t("div",{staticClass:"b-toast",class:this.toastClasses,attrs:c(c({},i?{}:this.scopedStyleAttrs),{},{id:this.safeId("_toast_outer"),role:n?null:o?"status":"alert","aria-live":n?null:o?"polite":"assertive","aria-atomic":n?null:"true"}),key:r,ref:"b-toast"},[t(Ls,{props:{noFade:this.noFade},on:this.transitionHandlers},[this.localShow?this.makeToast(t):t()])]);return t(lC,{props:{name:r,to:this.computedToaster,order:e,slim:!0,disabled:i}},[s])}}),SC="$bvToast",kC=["id"].concat(T(Kt(Qt(CC,["static","visible"])))),$C={toastContent:"default",title:"toast-title"},BC=function(t){return kC.reduce((function(e,i){return Ft(t[i])||(e[i]=t[i]),e}),{})},_C=me({components:{BToast:xC,BToaster:mC},plugins:{BVToastPlugin:me({plugins:{plugin:function(t){var e=t.extend({name:"BVToastPop",extends:xC,destroyed:function(){var t=this.$el;t&&t.parentNode&&t.parentNode.removeChild(t)},mounted:function(){var t=this,e=function(){t.localShow=!1,t.doRender=!1,t.$nextTick((function(){t.$nextTick((function(){xr((function(){t.$destroy()}))}))}))};this.$parent.$once(ro,e),this.$once(zn,e),this.listenOnRoot(Ds(xn,In),(function(i){i===t.toaster&&e()}))}}),i=function(t,i){if(!ce(SC)){var n=new e({parent:i,propsData:c(c(c({},BC(rs(Cn))),Qt(t,Kt($C))),{},{static:!1,visible:!0})});Kt($C).forEach((function(e){var o=t[e];Ft(o)||("title"===e&&Et(o)&&(o=[i.$createElement("strong",{class:"mr-2"},o)]),n.$slots[$C[e]]=or(o))}));var o=document.createElement("div");document.body.appendChild(o),n.$mount(o)}},n=function(){function t(e){o(this,t),Gt(this,{_vm:e,_root:e.$root}),Yt(this,{_vm:{enumerable:!0,configurable:!1,writable:!1},_root:{enumerable:!0,configurable:!1,writable:!1}})}return s(t,[{key:"toast",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t&&!ce(SC)&&i(c(c({},BC(e)),{},{toastContent:t}),this._vm)}},{key:"show",value:function(t){t&&this._root.$emit(Fs(Cn,to),t)}},{key:"hide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this._root.$emit(Fs(Cn,Nn),t)}}]),t}();t.mixin({beforeCreate:function(){this._bv__toast=new n(this)}}),Xt(t.prototype,SC)||Ut(t.prototype,SC,{get:function(){return this&&this._bv__toast||le('"'.concat(SC,'" must be accessed from a Vue instance "this" context.'),Cn),this._bv__toast}})}}})}}),DC="__BV_Tooltip__",FC={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},IC=/^html$/i,PC=/^noninteractive$/i,OC=/^nofade$/i,VC=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,EC=/^(window|viewport|scrollParent)$/i,LC=/^d\d+$/i,AC=/^ds\d+$/i,RC=/^dh\d+$/i,MC=/^o-?\d+$/i,HC=/^v-.+$/i,zC=/\s+/,NC=function(t,e,i){if(M){var n=function(t,e){var i={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:rs(Sn,"delay",50),boundary:String(rs(Sn,"boundary","scrollParent")),boundaryPadding:lr(rs(Sn,"boundaryPadding",5),0),variant:rs(Sn,"variant"),customClass:rs(Sn,"customClass")};if(Et(t.value)||Lt(t.value)||Ot(t.value)?i.title=t.value:Ht(t.value)&&(i=c(c({},i),t.value)),Ft(i.title)){var n=e.data||{};i.title=n.attrs&&!Pt(n.attrs.title)?n.attrs.title:void 0}Ht(i.delay)||(i.delay={show:lr(i.delay,0),hide:lr(i.delay,0)}),t.arg&&(i.container="#".concat(t.arg)),Kt(t.modifiers).forEach((function(t){if(IC.test(t))i.html=!0;else if(PC.test(t))i.interactive=!1;else if(OC.test(t))i.animation=!1;else if(VC.test(t))i.placement=t;else if(EC.test(t))t="scrollparent"===t?"scrollParent":t,i.boundary=t;else if(LC.test(t)){var e=lr(t.slice(1),0);i.delay.show=e,i.delay.hide=e}else AC.test(t)?i.delay.show=lr(t.slice(2),0):RC.test(t)?i.delay.hide=lr(t.slice(2),0):MC.test(t)?i.offset=lr(t.slice(1),0):HC.test(t)&&(i.variant=t.slice(2)||null)}));var o={};return or(i.trigger||"").filter(ne).join(" ").trim().toLowerCase().split(zC).forEach((function(t){FC[t]&&(o[t]=!0)})),Kt(t.modifiers).forEach((function(t){t=t.toLowerCase(),FC[t]&&(o[t]=!0)})),i.trigger=Kt(o).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||(i.trigger="hover focus"),i}(e,i);if(!t[DC]){var o=i.context;t[DC]=new Xg({parent:o,_scopeId:eb(o,void 0)}),t[DC].__bv_prev_data__={},t[DC].$on(to,(function(){Ot(n.title)&&t[DC].updateData({title:n.title(t)})}))}var r={title:n.title,triggers:n.trigger,placement:n.placement,fallbackPlacement:n.fallbackPlacement,variant:n.variant,customClass:n.customClass,container:n.container,boundary:n.boundary,delay:n.delay,offset:n.offset,noFade:!n.animation,id:n.id,interactive:n.interactive,disabled:n.disabled,html:n.html},s=t[DC].__bv_prev_data__;if(t[DC].__bv_prev_data__=r,!Ua(r,s)){var a={target:t};Kt(r).forEach((function(e){r[e]!==s[e]&&(a[e]="title"===e&&Ot(r[e])?r[e](t):r[e])})),t[DC].updateData(a)}}},jC=me({directives:{VBTooltip:{bind:function(t,e,i){NC(t,e,i)},componentUpdated:function(t,e,i){i.context.$nextTick((function(){NC(t,e,i)}))},unbind:function(t){!function(t){t[DC]&&(t[DC].$destroy(),t[DC]=null),delete t[DC]}(t)}}}}),GC=me({plugins:{AlertPlugin:Ws,AspectPlugin:ia,AvatarPlugin:xl,BadgePlugin:_l,BreadcrumbPlugin:Ll,ButtonPlugin:Al,ButtonGroupPlugin:Hl,ButtonToolbarPlugin:Gl,CalendarPlugin:Cc,CardPlugin:ru,CarouselPlugin:wu,CollapsePlugin:cd,DropdownPlugin:tf,EmbedPlugin:rf,FormPlugin:gf,FormCheckboxPlugin:Jf,FormDatepickerPlugin:mp,FormFilePlugin:Bp,FormGroupPlugin:Rp,FormInputPlugin:Zp,FormRadioPlugin:tm,FormRatingPlugin:dm,FormSelectPlugin:km,FormSpinbuttonPlugin:Vm,FormTagsPlugin:qm,FormTextareaPlugin:Zm,FormTimepickerPlugin:bv,ImagePlugin:gv,InputGroupPlugin:_v,JumbotronPlugin:Pv,LayoutPlugin:Av,LinkPlugin:Rv,ListGroupPlugin:Gv,MediaPlugin:Xv,ModalPlugin:Ob,NavPlugin:Wb,NavbarPlugin:fg,OverlayPlugin:yg,PaginationPlugin:Vg,PaginationNavPlugin:Rg,PopoverPlugin:wy,ProgressPlugin:ky,SidebarPlugin:Ny,SkeletonPlugin:VT,SpinnerPlugin:ET,TablePlugin:DT,TabsPlugin:KT,TimePlugin:XT,ToastPlugin:_C,TooltipPlugin:me({components:{BTooltip:ey},plugins:{VBTooltipPlugin:jC}})}}),WC=me({directives:{VBHover:np}}),YC=me({directives:{VBModal:Bb}}),UC="active",qC=".nav-link",KC=".nav-item",XC=".list-group-item",ZC=".dropdown-item",JC=Ds("BVScrollspy","activate"),QC="position",tx={element:"body",offset:10,method:"auto",throttle:75},ex={element:"(string|element|component)",offset:"number",method:"string",throttle:"number"},ix=["webkitTransitionEnd","transitionend","otransitionend","oTransitionEnd"],nx=function(t){return function(t){return Object.prototype.toString.call(t)}(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},ox=function(){function t(e,i,n){o(this,t),this.$el=e,this.$scroller=null,this.$selector=[qC,XC,ZC].join(","),this.$offsets=[],this.$targets=[],this.$activeTarget=null,this.$scrollHeight=0,this.$resizeTimeout=null,this.$scrollerObserver=null,this.$targetsObserver=null,this.$root=n||null,this.$config=null,this.updateConfig(i)}return s(t,[{key:"updateConfig",value:function(t,e){this.$scroller&&(this.unlisten(),this.$scroller=null);var i=c(c({},this.constructor.Default),t);if(e&&(this.$root=e),function(t,e,i){for(var n in i)if(Xt(i,n)){var o=i[n],r=e[n],s=r&&kr(r)?"element":nx(r);s=r&&r._isVue?"component":s,new RegExp(o).test(s)||le("".concat(t,': Option "').concat(n,'" provided type "').concat(s,'" but expected type "').concat(o,'"'))}}(this.constructor.Name,i,this.constructor.DefaultType),this.$config=i,this.$root){var n=this;this.$root.$nextTick((function(){n.listen()}))}else this.listen()}},{key:"dispose",value:function(){this.unlisten(),clearTimeout(this.$resizeTimeout),this.$resizeTimeout=null,this.$el=null,this.$config=null,this.$scroller=null,this.$selector=null,this.$offsets=null,this.$targets=null,this.$activeTarget=null,this.$scrollHeight=null}},{key:"listen",value:function(){var t=this,e=this.getScroller();e&&"BODY"!==e.tagName&&Ss(e,"scroll",this,lo),Ss(window,"scroll",this,lo),Ss(window,"resize",this,lo),Ss(window,"orientationchange",this,lo),ix.forEach((function(e){Ss(window,e,t,lo)})),this.setObservers(!0),this.handleEvent("refresh")}},{key:"unlisten",value:function(){var t=this,e=this.getScroller();this.setObservers(!1),e&&"BODY"!==e.tagName&&ks(e,"scroll",this,lo),ks(window,"scroll",this,lo),ks(window,"resize",this,lo),ks(window,"orientationchange",this,lo),ix.forEach((function(e){ks(window,e,t,lo)}))}},{key:"setObservers",value:function(t){var e=this;this.$scrollerObserver&&this.$scrollerObserver.disconnect(),this.$targetsObserver&&this.$targetsObserver.disconnect(),this.$scrollerObserver=null,this.$targetsObserver=null,t&&(this.$targetsObserver=au(this.$el,(function(){e.handleEvent("mutation")}),{subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]}),this.$scrollerObserver=au(this.getScroller(),(function(){e.handleEvent("mutation")}),{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:["id","style","class"]}))}},{key:"handleEvent",value:function(t){var e=Et(t)?t:t.type,i=this;"scroll"===e?(this.$scrollerObserver||this.listen(),this.process()):/(resize|orientationchange|mutation|refresh)/.test(e)&&(i.$resizeTimeout||(i.$resizeTimeout=setTimeout((function(){i.refresh(),i.process(),i.$resizeTimeout=null}),i.$config.throttle)))}},{key:"refresh",value:function(){var t=this,e=this.getScroller();if(e){var i=e!==e.window?QC:"offset",n="auto"===this.$config.method?i:this.$config.method,o=n===QC?Jr:Zr,r=n===QC?this.getScrollTop():0;return this.$offsets=[],this.$targets=[],this.$scrollHeight=this.getScrollHeight(),Pr(this.$selector,this.$el).map((function(t){return jr(t,"href")})).filter((function(t){return t&&yt.test(t||"")})).map((function(t){var i=t.replace(yt,"$1").trim();if(!i)return null;var n=Or(i,e);return n&&Dr(n)?{offset:lr(o(n).top,0)+r,target:i}:null})).filter(ne).sort((function(t,e){return t.offset-e.offset})).reduce((function(e,i){return e[i.target]||(t.$offsets.push(i.offset),t.$targets.push(i.target),e[i.target]=!0),e}),{}),this}}},{key:"process",value:function(){var t=this.getScrollTop()+this.$config.offset,e=this.getScrollHeight(),i=this.$config.offset+e-this.getOffsetHeight();if(this.$scrollHeight!==e&&this.refresh(),t>=i){var n=this.$targets[this.$targets.length-1];this.$activeTarget!==n&&this.activate(n)}else{if(this.$activeTarget&&t<this.$offsets[0]&&this.$offsets[0]>0)return this.$activeTarget=null,void this.clear();for(var o=this.$offsets.length;o--;){this.$activeTarget!==this.$targets[o]&&t>=this.$offsets[o]&&(Ft(this.$offsets[o+1])||t<this.$offsets[o+1])&&this.activate(this.$targets[o])}}}},{key:"getScroller",value:function(){if(this.$scroller)return this.$scroller;var t=this.$config.element;return t?(kr(t.$el)?t=t.$el:Et(t)&&(t=Or(t)),t?(this.$scroller="BODY"===t.tagName?window:t,this.$scroller):null):null}},{key:"getScrollTop",value:function(){var t=this.getScroller();return t===window?t.pageYOffset:t.scrollTop}},{key:"getScrollHeight",value:function(){return this.getScroller().scrollHeight||Us(document.body.scrollHeight,document.documentElement.scrollHeight)}},{key:"getOffsetHeight",value:function(){var t=this.getScroller();return t===window?window.innerHeight:qr(t).height}},{key:"activate",value:function(t){var e=this;this.$activeTarget=t,this.clear();var i=Pr(this.$selector.split(",").map((function(e){return"".concat(e,'[href$="').concat(t,'"]')})).join(","),this.$el);i.forEach((function(t){if(Hr(t,"dropdown-item")){var i=Er(".dropdown, .dropup",t);i&&e.setActiveState(Or(".dropdown-toggle",i),!0),e.setActiveState(t,!0)}else{e.setActiveState(t,!0),Vr(t.parentElement,KC)&&e.setActiveState(t.parentElement,!0);for(var n=t;n;){var o=(n=Er(".nav, .list-group",n))?n.previousElementSibling:null;o&&Vr(o,"".concat(qC,", ").concat(XC))&&e.setActiveState(o,!0),o&&Vr(o,KC)&&(e.setActiveState(Or(qC,o),!0),e.setActiveState(o,!0))}}})),i&&i.length>0&&this.$root&&this.$root.$emit(JC,t,i)}},{key:"clear",value:function(){var t=this;Pr("".concat(this.$selector,", ").concat(KC),this.$el).filter((function(t){return Hr(t,UC)})).forEach((function(e){return t.setActiveState(e,!1)}))}},{key:"setActiveState",value:function(t,e){t&&(e?Rr(t,UC):Mr(t,UC))}}],[{key:"Name",get:function(){return"v-b-scrollspy"}},{key:"Default",get:function(){return tx}},{key:"DefaultType",get:function(){return ex}}]),t}(),rx="__BV_ScrollSpy__",sx=/^\d+$/,ax=/^(auto|position|offset)$/,lx=function(t,e,i){if(M){var n=function(t){var e={};return t.arg&&(e.element="#".concat(t.arg)),Kt(t.modifiers).forEach((function(t){sx.test(t)?e.offset=lr(t,0):ax.test(t)&&(e.method=t)})),Et(t.value)?e.element=t.value:Lt(t.value)?e.offset=Js(t.value):Mt(t.value)&&Kt(t.value).filter((function(t){return!!ox.DefaultType[t]})).forEach((function(i){e[i]=t.value[i]})),e}(e);t[rx]?t[rx].updateConfig(n,i.context.$root):t[rx]=new ox(t,n,i.context.$root)}},cx={install:pe({plugins:{componentsPlugin:GC,directivesPlugin:me({plugins:{VBHoverPlugin:WC,VBModalPlugin:YC,VBPopoverPlugin:yy,VBScrollspyPlugin:me({directives:{VBScrollspy:{bind:function(t,e,i){lx(t,e,i)},inserted:function(t,e,i){lx(t,e,i)},update:function(t,e,i){e.value!==e.oldValue&&lx(t,e,i)},componentUpdated:function(t,e,i){e.value!==e.oldValue&&lx(t,e,i)},unbind:function(t){!function(t){t[rx]&&(t[rx].dispose(),t[rx]=null,delete t[rx])}(t)}}}}),VBTogglePlugin:ld,VBTooltipPlugin:jC,VBVisiblePlugin:me({directives:{VBVisible:Kc}})}})}}),NAME:"BootstrapVue"};return iC=cx,V&&window.Vue&&window.Vue.use(iC),V&&iC.NAME&&(window[iC.NAME]=iC),cx}));
//# sourceMappingURL=bootstrap-vue.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ "./node_modules/uuid/dist/esm-browser/v3.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ "./node_modules/uuid/dist/esm-browser/v5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ "./node_modules/uuid/dist/esm-browser/nil.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ "./node_modules/uuid/dist/esm-browser/version.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });











/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["default"] = (md5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["default"] = (parse);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["default"] = (sha1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
}

/* harmony default export */ __webpack_exports__["default"] = (v1);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ "./node_modules/uuid/dist/esm-browser/md5.js");


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v3);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DNS", function() { return DNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL", function() { return URL; });
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/uuid/dist/esm-browser/parse.js");



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["default"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ "./node_modules/uuid/dist/esm-browser/v35.js");
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ "./node_modules/uuid/dist/esm-browser/sha1.js");


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (v5);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["default"] = (version);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "aside",
        { staticClass: "main-sidebar sidebar-dark-primary elevation-4" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "sidebar" }, [
            _c("nav", { staticClass: "mt-2 nav-compact nav-flat" }, [
              _c(
                "ul",
                {
                  staticClass: "nav nav-pills nav-sidebar flex-column",
                  attrs: { role: "menu", "data-accordion": "false" },
                },
                [
                  _c("router-link", {
                    attrs: { to: { name: "home" }, exact: "" },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isExactActive = ref.isExactActive
                          return [
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  class: [isExactActive && "active"],
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-home",
                                  }),
                                  _vm._v(
                                    "\n                                Home\n                            "
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        },
                      },
                    ]),
                  }),
                  _vm._v(" "),
                  _c("router-link", {
                    attrs: { to: { name: "desks" } },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function (ref) {
                          var href = ref.href
                          var navigate = ref.navigate
                          var isActive = ref.isActive
                          return [
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link",
                                  class: [isActive && "active"],
                                  attrs: { href: href },
                                  on: { click: navigate },
                                },
                                [
                                  _c("i", {
                                    staticClass: "nav-icon fas fa-columns",
                                  }),
                                  _vm._v(
                                    "\n                                Desks\n                            "
                                  ),
                                ]
                              ),
                            ]),
                          ]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _vm._m(2),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "nav",
      {
        staticClass:
          "main-header navbar navbar-expand navbar-white navbar-light",
      },
      [
        _c("ul", { staticClass: "navbar-nav" }, [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: { "data-widget": "pushmenu", href: "#", role: "button" },
              },
              [_c("i", { staticClass: "fas fa-bars" })]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "brand-link" }, [
      _c("span", { staticClass: "brand-text font-weight-light" }, [
        _vm._v("Laravel VUE"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "main-footer" }, [
      _c("strong", [_vm._v("Copyright © 2022. All rights reserved.")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards.vue?vue&type=template&id=767212f0&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Cards.vue?vue&type=template&id=767212f0& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-body p-2" },
    [
      _c(
        "draggable",
        {
          class: { "mb-3": _vm.cards.length > 0 },
          attrs: { forceFallback: true, group: "cards" },
          on: {
            start: function ($event) {
              _vm.dragging = true
            },
            end: function ($event) {
              _vm.dragging = false
            },
          },
          model: {
            value: _vm.cards,
            callback: function ($$v) {
              _vm.cards = $$v
            },
            expression: "cards",
          },
        },
        _vm._l(_vm.cards, function (card) {
          return _c("cards-item", {
            key: card.id,
            attrs: { card: card },
            on: { updateCard: _vm.updateCard, deleteCard: _vm.deleteCard },
          })
        }),
        1
      ),
      _vm._v(" "),
      _c("cards-create", {
        attrs: { listId: _vm.listId },
        on: { createCard: _vm.createCard },
      }),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { staticClass: "d-flex justify-content-center" }, [
            _c("div", {
              staticClass: "spinner-border",
              attrs: { role: "status", "aria-hidden": "true" },
            }),
          ])
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsCreate.vue?vue&type=template&id=2266e1a4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsCreate.vue?vue&type=template&id=2266e1a4& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card border-0 bg-transparent shadow-none" },
    [
      _c(
        "div",
        {
          staticClass: "card bg-info m-0",
          staticStyle: { position: "relative" },
        },
        [
          _c(
            "a",
            {
              directives: [
                {
                  name: "b-modal",
                  rawName: "v-b-modal",
                  value: _vm.uuid,
                  expression: "uuid",
                },
              ],
              staticClass: "card-body p-1 d-flex btn",
              attrs: { href: "#" },
            },
            [_vm._v("\n            Create Card\n        ")]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Create Card",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.createCard.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.card.name,
                        expression: "card.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "Enter Card name",
                    },
                    domProps: { value: _vm.card.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.card, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Create")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsDelete.vue?vue&type=template&id=39f7d6d3&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsDelete.vue?vue&type=template&id=39f7d6d3& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass: "btn btn-tool m-0 py-0",
      attrs: { type: "button" },
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("i", { staticClass: "fas fa-trash" }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Delete List",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.deleteCard.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("p", { staticClass: "text-danger text-center" }, [
                  _vm._v(
                    'Are you sure you want delete "' +
                      _vm._s(_vm.card.name) +
                      '"'
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Delete")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsItem.vue?vue&type=template&id=17f4c78a&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsItem.vue?vue&type=template&id=17f4c78a& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass:
        "info-box justify-content-between align-items-start overflow-hidden border-top border-primary",
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("div", { staticClass: "flex-grow-1" }, [
        _vm._v(_vm._s(_vm.card.name)),
      ]),
      _vm._v(" "),
      _c("cards-delete", {
        attrs: { card: _vm.card },
        on: { deleteCard: _vm.deleteCard },
      }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Edit Card",
            "hide-footer": "",
            "header-class": "py-1 px-3",
          },
        },
        [
          _c("h5", [
            _c("i", { staticClass: "far fa-fw fa-credit-card" }),
            _vm._v(" " + _vm._s(_vm.card.name)),
          ]),
          _vm._v(" "),
          _c("h5", [
            _c("i", { staticClass: "far fa-fw fa-align-left" }),
            _vm._v(" Description"),
          ]),
          _vm._v(" "),
          _c("div", {
            ref: "text",
            staticClass: "flex-grow-1 ml-2",
            domProps: { innerHTML: _vm._s(_vm.card.text) },
            on: { click: _vm.editText },
          }),
          _vm._v(" "),
          _c("tasks", { attrs: { "card-id": _vm.card.id } }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsUpdate.vue?vue&type=template&id=81b26a1e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardsUpdate.vue?vue&type=template&id=81b26a1e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass: "btn btn-tool m-0 py-0",
      attrs: { type: "button" },
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("i", { staticClass: "fas fa-pencil" }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Update List",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                    Something went wrong\n                    "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Try again\n                    "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.updateCard.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.card.name,
                        expression: "card.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "Enter desk name",
                    },
                    domProps: { value: _vm.card.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.card, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Update")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
          _vm._v(" "),
          _c("tasks", { attrs: { "card-id": _vm.card.id } }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Desks.vue?vue&type=template&id=3968409f&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Desks.vue?vue&type=template&id=3968409f& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-wrapper" }, [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { name: "home" } } }, [
                    _vm._v("Home"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Desks"),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c(
        "div",
        {
          staticClass: "container-fluid",
          staticStyle: { "min-width": "100%" },
        },
        [
          !_vm.loading && !_vm.errored
            ? _c(
                "div",
                { staticClass: "row", staticStyle: { margin: "0 -7.5px" } },
                [
                  _vm._l(_vm.desks, function (desk) {
                    return _c("desks-item", {
                      key: desk.id,
                      attrs: { desk: desk },
                      on: {
                        updateDesk: _vm.updateDesk,
                        deleteDesk: _vm.deleteDesk,
                      },
                    })
                  }),
                  _vm._v(" "),
                  _c("desks-create", { on: { createDesk: _vm.createDesk } }),
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                    Something went wrong\n                    "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: { click: _vm.load },
                      },
                      [
                        _vm._v(
                          "\n                        Try again\n                    "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.loading
            ? _c("div", { staticClass: "d-flex justify-content-center" }, [
                _c("div", {
                  staticClass: "spinner-border",
                  attrs: { role: "status", "aria-hidden": "true" },
                }),
              ])
            : _vm._e(),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-6" }, [_c("h1", [_vm._v("Desks")])])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksCreate.vue?vue&type=template&id=2817fe7b&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksCreate.vue?vue&type=template&id=2817fe7b& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-xl-3 col-md-4 col-sm-6" },
    [
      _c(
        "a",
        {
          directives: [
            {
              name: "b-modal",
              rawName: "v-b-modal",
              value: _vm.uuid,
              expression: "uuid",
            },
          ],
          staticClass:
            "info-box p-2 d-flex justify-content-center align-items-center btn",
          staticStyle: { "max-height": "80px" },
          attrs: { href: "#" },
        },
        [_vm._m(0)]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Create Desk",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.createDesk.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.desk.name,
                        expression: "desk.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "Enter desk name",
                    },
                    domProps: { value: _vm.desk.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.desk, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Create")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "far fa-plus" }),
      _vm._v(" Create desk\n        "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksDelete.vue?vue&type=template&id=3fa8f3aa&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksDelete.vue?vue&type=template&id=3fa8f3aa& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass: "btn btn-sm",
      attrs: { type: "button" },
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("i", { staticClass: "fas fa-trash" }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Delete Desk",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.deleteDesk.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("p", { staticClass: "text-danger text-center" }, [
                  _vm._v(
                    'Are you sure you want delete "' +
                      _vm._s(_vm.desk.name) +
                      '"'
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Delete")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksItem.vue?vue&type=template&id=443602d2&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksItem.vue?vue&type=template&id=443602d2& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "col-xl-3 col-md-4 col-sm-6" },
    [
      _c(
        "router-link",
        {
          staticClass:
            "info-box bg-info justify-content-between align-items-start overflow-hidden",
          staticStyle: { "max-height": "80px" },
          attrs: { to: { name: "lists", params: { id: _vm.desk.id } } },
        },
        [
          _c("div", { staticClass: "flex-grow-1" }, [
            _vm._v(_vm._s(_vm.desk.name)),
          ]),
          _vm._v(" "),
          _c("desks-update", {
            staticClass: "bg-info",
            attrs: { desk: _vm.desk },
            on: { updateDesk: _vm.updateDesk },
          }),
          _vm._v(" "),
          _c("desks-delete", {
            staticClass: "bg-info",
            attrs: { desk: _vm.desk },
            on: { deleteDesk: _vm.deleteDesk },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksUpdate.vue?vue&type=template&id=76503070&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/DesksUpdate.vue?vue&type=template&id=76503070& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass: "btn btn-sm",
      attrs: { type: "button" },
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("i", { staticClass: "fas fa-pencil" }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Update Desk",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.updateDesk.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.desk.name,
                        expression: "desk.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "Enter desk name",
                    },
                    domProps: { value: _vm.desk.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.desk, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Update")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-wrapper" }, [
      _c("section", { staticClass: "content-header" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-6" }, [
              _c("h1", [_vm._v("Welcome")]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists.vue?vue&type=template&id=eb27ec8c&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Lists.vue?vue&type=template&id=eb27ec8c& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content-wrapper kanban" }, [
    _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", [_vm._v(_vm._s(_vm.desk.name))]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6 d-none d-sm-block" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { name: "home" } } }, [
                    _vm._v("Home"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { name: "desks" } } }, [
                    _vm._v("Desks"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v(_vm._s(_vm.desk.name)),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content pb-3" }, [
      _vm.errored
        ? _c(
            "div",
            { staticClass: "alert alert-danger p-2", attrs: { role: "alert" } },
            [_vm._m(0)]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { staticClass: "d-flex justify-content-center" }, [
            _c("div", {
              staticClass: "spinner-border",
              attrs: { role: "status", "aria-hidden": "true" },
            }),
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.loading && !_vm.errored
        ? _c(
            "div",
            {
              staticClass: "container-fluid h-100",
              staticStyle: { "min-width": "100%" },
            },
            [
              _c(
                "draggable",
                {
                  staticClass: "container-fluid h-100",
                  attrs: { forceFallback: true },
                  on: {
                    start: function ($event) {
                      _vm.dragging = true
                    },
                    end: function ($event) {
                      _vm.dragging = false
                    },
                  },
                  model: {
                    value: _vm.lists,
                    callback: function ($$v) {
                      _vm.lists = $$v
                    },
                    expression: "lists",
                  },
                },
                _vm._l(_vm.lists, function (list) {
                  return _c("lists-item", {
                    key: list.id,
                    attrs: { list: list },
                    on: {
                      updateList: _vm.updateList,
                      deleteList: _vm.deleteList,
                    },
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c("lists-create", {
                attrs: { "desk-id": _vm.desk.id },
                on: { createList: _vm.createList },
              }),
            ],
            1
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "alert-heading m-0" }, [
      _vm._v("\n                Something went wrong\n                "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-danger",
          attrs: {
            type: "button",
            "data-dismiss": "alert",
            "TODO-click": "load",
          },
        },
        [_vm._v("\n                    Try again\n                ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsCreate.vue?vue&type=template&id=78ad7154&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsCreate.vue?vue&type=template&id=78ad7154& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card card-row border-0 bg-transparent shadow-none" },
    [
      _c(
        "div",
        {
          staticClass: "card bg-info m-0",
          staticStyle: { position: "relative" },
        },
        [
          _c(
            "a",
            {
              directives: [
                {
                  name: "b-modal",
                  rawName: "v-b-modal",
                  value: _vm.uuid,
                  expression: "uuid",
                },
              ],
              staticClass: "card-body p-2 d-flex btn",
              attrs: { href: "#" },
            },
            [_vm._v("\n            Create List\n        ")]
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Create List",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.createList.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.list.name,
                        expression: "list.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "Enter list name",
                    },
                    domProps: { value: _vm.list.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.list, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Create")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass: "btn btn-tool m-0 py-0",
      attrs: { type: "button" },
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("i", { staticClass: "fas fa-trash" }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Delete List",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.deleteList.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("p", { staticClass: "text-danger text-center" }, [
                  _vm._v(
                    'Are you sure you want delete "' +
                      _vm._s(_vm.list.name) +
                      '"'
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-danger",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Delete")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsItem.vue?vue&type=template&id=6da9c66d&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsItem.vue?vue&type=template&id=6da9c66d& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card card-row" },
    [
      _c("div", { staticClass: "card-header p-2" }, [
        _c(
          "div",
          { staticClass: "media" },
          [
            _c("div", { staticClass: "media-body board-column-title" }, [
              _c("h3", { staticClass: "card-title" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.list.name) +
                    "\n                "
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("lists-update", {
              attrs: { list: _vm.list },
              on: { updateList: _vm.updateList },
            }),
            _vm._v(" "),
            _c("lists-delete", {
              attrs: { list: _vm.list },
              on: { deleteList: _vm.deleteList },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("cards", { attrs: { listId: _vm.list.id } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass: "btn btn-tool m-0 py-0",
      attrs: { type: "button" },
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("i", { staticClass: "fas fa-pencil" }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Update List",
            "hide-footer": "",
            "header-class": "py-1 px-3",
            "body-class": "p-0",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.updateList.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "px-3 pt-3" }, [
                _c("input", {
                  attrs: { type: "hidden", name: "_method", value: "PUT" },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.list.name,
                        expression: "list.name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "name",
                      placeholder: "Enter desk name",
                    },
                    domProps: { value: _vm.list.name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.list, "name", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-footer py-1 justify-content-between" },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { type: "submit" },
                    },
                    [_vm._v("Update")]
                  ),
                ]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { staticClass: "d-flex justify-content-center" }, [
            _c("div", {
              staticClass: "spinner-border",
              attrs: { role: "status", "aria-hidden": "true" },
            }),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.errored
        ? _c(
            "div",
            { staticClass: "alert alert-danger p-2", attrs: { role: "alert" } },
            [_vm._m(1)]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "draggable",
        {
          staticClass: "list-group",
          class: { "mb-3": _vm.tasks.length > 0 },
          attrs: { forceFallback: true, tag: "ul" },
          on: {
            start: function ($event) {
              _vm.dragging = true
            },
            end: function ($event) {
              _vm.dragging = false
            },
          },
          model: {
            value: _vm.tasks,
            callback: function ($$v) {
              _vm.tasks = $$v
            },
            expression: "tasks",
          },
        },
        _vm._l(_vm.tasks, function (task) {
          return _c("tasks-item", {
            key: task.id,
            attrs: { task: task },
            on: { updateTask: _vm.updateTask, deleteTask: _vm.deleteTask },
          })
        }),
        1
      ),
      _vm._v(" "),
      _c("tasks-create", {
        attrs: { "card-id": _vm.cardId },
        on: { createTask: _vm.createTask },
      }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [
      _c("i", { staticClass: "far fa-fw fa-tasks" }),
      _vm._v(" Tasks"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "alert-heading m-0" }, [
      _vm._v("\n            Something went wrong\n            "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-danger",
          attrs: {
            type: "button",
            "data-dismiss": "alert",
            "TODO-click": "load",
          },
        },
        [_vm._v("\n                Try again\n            ")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksCreate.vue?vue&type=template&id=3e577c0f&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksCreate.vue?vue&type=template&id=3e577c0f& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.errored
      ? _c(
          "div",
          { staticClass: "alert alert-danger p-2", attrs: { role: "alert" } },
          [
            _c("h4", { staticClass: "alert-heading m-0" }, [
              _vm._v("\n            Something went wrong\n            "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-danger",
                  attrs: { type: "button", "data-dismiss": "alert" },
                  on: {
                    click: function ($event) {
                      _vm.errored = false
                    },
                  },
                },
                [_vm._v("\n                Try again\n            ")]
              ),
            ]),
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _c(
      "form",
      {
        staticStyle: { position: "relative" },
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.createTask.apply(null, arguments)
          },
        },
      },
      [
        _c("input", {
          attrs: { type: "hidden", name: "card_id" },
          domProps: { value: _vm.cardId },
        }),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm.errored
          ? _c("div", {
              staticClass: "card-img-overlay",
              staticStyle: { "background-color": "rgba(255, 255, 255, 0.5)" },
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "div",
              {
                staticClass: "card-img-overlay p-0 h-100",
                staticStyle: { "background-color": "rgba(255, 255, 255, 0.5)" },
              },
              [_vm._m(1)]
            )
          : _vm._e(),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "d-flex align-items-center" }, [
      _c("input", {
        staticClass: "form-control form-control-sm",
        attrs: { name: "name" },
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-success text-nowrap ml-2",
          attrs: { type: "submit" },
        },
        [_vm._v("Add Task")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-center align-items-center h-100" },
      [
        _c("div", {
          staticClass: "spinner-border spinner-border-sm",
          attrs: { role: "status", "aria-hidden": "true" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksDelete.vue?vue&type=template&id=55e8713e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksDelete.vue?vue&type=template&id=55e8713e& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      directives: [
        {
          name: "b-modal",
          rawName: "v-b-modal",
          value: _vm.uuid,
          expression: "uuid",
        },
      ],
      staticClass: "btn btn-tool m-0 py-0 text-danger",
      attrs: { type: "button" },
      on: {
        click: function ($event) {
          $event.preventDefault()
        },
      },
    },
    [
      _c("i", { staticClass: "fas fa-trash" }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: _vm.uuid,
            title: "Delete Task",
            "hide-footer": "",
            "header-class": "py-1 px-3",
          },
        },
        [
          _vm.errored
            ? _c(
                "div",
                {
                  staticClass: "alert alert-danger p-2",
                  attrs: { role: "alert" },
                },
                [
                  _c("h4", { staticClass: "alert-heading m-0" }, [
                    _vm._v(
                      "\n                Something went wrong\n                "
                    ),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        attrs: { type: "button", "data-dismiss": "alert" },
                        on: {
                          click: function ($event) {
                            _vm.errored = false
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    Try again\n                "
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "form",
            {
              staticStyle: { position: "relative" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.deleteTask.apply(null, arguments)
                },
              },
            },
            [
              _c("p", { staticClass: "text-danger text-center" }, [
                _vm._v(
                  'Are you sure you want delete "' + _vm._s(_vm.task.name) + '"'
                ),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-danger",
                  attrs: { type: "submit" },
                },
                [_vm._v("Delete")]
              ),
              _vm._v(" "),
              _vm.errored
                ? _c("div", {
                    staticClass: "card-img-overlay",
                    staticStyle: {
                      "background-color": "rgba(255, 255, 255, 0.5)",
                    },
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.loading
                ? _c(
                    "div",
                    {
                      staticClass: "card-img-overlay",
                      staticStyle: {
                        "background-color": "rgba(255, 255, 255, 0.5)",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex justify-content-center align-items-center",
                        },
                        [
                          _c("div", {
                            staticClass: "spinner-border",
                            attrs: { role: "status", "aria-hidden": "true" },
                          }),
                        ]
                      ),
                    ]
                  )
                : _vm._e(),
            ]
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("li", { staticClass: "list-group-item p-2" }, [
    _c(
      "div",
      { staticClass: "d-flex justify-content-between position-relative" },
      [
        _vm.editing
          ? _c("div", { staticClass: "flex-grow-1" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.name,
                    expression: "name",
                  },
                ],
                ref: "name",
                staticClass: "form-control form-control-sm",
                attrs: { name: "name" },
                domProps: { value: _vm.name },
                on: {
                  blur: _vm.viewName,
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.name = $event.target.value
                  },
                },
              }),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.editing
          ? _c(
              "button",
              {
                staticClass: "btn btn-sm",
                attrs: { type: "button" },
                on: { click: _vm.saveName },
              },
              [_c("i", { staticClass: "far fa-check" })]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.editing
          ? _c(
              "button",
              {
                staticClass: "btn btn-sm",
                attrs: { type: "button" },
                on: { click: _vm.viewName },
              },
              [_c("i", { staticClass: "far fa-undo" })]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.editing
          ? _c(
              "span",
              { staticClass: "flex-grow-1", on: { click: _vm.editName } },
              [_vm._v(_vm._s(_vm.task.name))]
            )
          : _vm._e(),
        _vm._v(" "),
        !_vm.editing
          ? _c("div", [
              _c("div", { staticClass: "dropdown" }, [
                _c(
                  "a",
                  {
                    staticClass: "badge",
                    class: _vm.statusClass(_vm.task.status || 0),
                    attrs: { href: "#", "data-toggle": "dropdown" },
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.statusLabel(_vm.task.status || 0)) +
                        "\n                "
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dropdown-menu" },
                  _vm._l(_vm.statuses, function (status, code) {
                    return _c(
                      "a",
                      {
                        staticClass: "dropdown-item",
                        attrs: { href: "#" },
                        on: {
                          click: function ($event) {
                            _vm.task.status = code
                            _vm.updateTask()
                          },
                        },
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "badge", class: status.class },
                          [_vm._v(_vm._s(status.label))]
                        ),
                      ]
                    )
                  }),
                  0
                ),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.editing
          ? _c("tasks-delete", {
              attrs: { task: _vm.task },
              on: { deleteTask: _vm.deleteTask },
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.loading
          ? _c(
              "div",
              {
                staticClass: "card-img-overlay p-0 h-100",
                staticStyle: { "background-color": "rgba(255, 255, 255, 0.5)" },
              },
              [_vm._m(0)]
            )
          : _vm._e(),
      ],
      1
    ),
    _vm._v(" "),
    _vm.errored
      ? _c("div", { staticClass: "invalid-feedback d-block" }, [
          _vm._v("\n        Something went wrong.\n        "),
          _c(
            "a",
            {
              staticClass: "text-danger",
              attrs: { href: "#" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  _vm.errored = false
                },
              },
            },
            [_vm._v("Try again")]
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex justify-content-center align-items-center h-100" },
      [
        _c("div", {
          staticClass: "spinner-border",
          attrs: { role: "status", "aria-hidden": "true" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksStatus.vue?vue&type=template&id=08f97ff6&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TasksStatus.vue?vue&type=template&id=08f97ff6& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "dropdown" }, [
      _c(
        "a",
        {
          staticClass: "badge",
          class: _vm.statusClass(_vm.task.status || 0),
          attrs: { href: "#", "data-toggle": "dropdown" },
        },
        [
          _vm._v(
            "\n            " +
              _vm._s(_vm.statusLabel(_vm.task.status || 0)) +
              "\n        "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu" },
        _vm._l(_vm.statuses, function (status, code) {
          return _c(
            "a",
            {
              staticClass: "dropdown-item",
              attrs: { href: "#" },
              on: {
                click: function ($event) {
                  return _vm.updateTask(code)
                },
              },
            },
            [
              _c("span", { staticClass: "badge", class: status.class }, [
                _vm._v(_vm._s(status.label)),
              ]),
            ]
          )
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.min.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
  */
var t,e;t=this,e=function(){"use strict";function t(t,e){for(var r in e)t[r]=e[r];return t}var e=/[!'()*]/g,r=function(t){return"%"+t.charCodeAt(0).toString(16)},n=/%2C/g,o=function(t){return encodeURIComponent(t).replace(e,r).replace(n,",")};function i(t){try{return decodeURIComponent(t)}catch(t){}return t}var a=function(t){return null==t||"object"==typeof t?t:String(t)};function s(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=i(r.shift()),o=r.length>0?i(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function u(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return o(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(o(e)):n.push(o(e)+"="+o(t)))})),n.join("&")}return o(e)+"="+o(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var c=/\/?$/;function p(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=f(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:d(e,o),matched:t?l(t):[]};return r&&(a.redirectedFrom=d(r,o)),Object.freeze(a)}function f(t){if(Array.isArray(t))return t.map(f);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=f(t[r]);return e}return t}var h=p(null,{path:"/"});function l(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function d(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||u)(n)+o}function v(t,e,r){return e===h?t===e:!!e&&(t.path&&e.path?t.path.replace(c,"")===e.path.replace(c,"")&&(r||t.hash===e.hash&&y(t.query,e.query)):!(!t.name||!e.name)&&t.name===e.name&&(r||t.hash===e.hash&&y(t.query,e.query)&&y(t.params,e.params)))}function y(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length===n.length&&r.every((function(r,o){var i=t[r];if(n[o]!==r)return!1;var a=e[r];return null==i||null==a?i===a:"object"==typeof i&&"object"==typeof a?y(i,a):String(i)===String(a)}))}function m(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var o=r.instances[n],i=r.enteredCbs[n];if(o&&i){delete r.enteredCbs[n];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var g={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,r){var n=r.props,o=r.children,i=r.parent,a=r.data;a.routerView=!0;for(var s=i.$createElement,u=n.name,c=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;){var l=i.$vnode?i.$vnode.data:{};l.routerView&&f++,l.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(a.routerViewDepth=f,h){var d=p[u],v=d&&d.component;return v?(d.configProps&&w(v,a,d.route,d.configProps),s(v,a,o)):s()}var y=c.matched[f],g=y&&y.components[u];if(!y||!g)return p[u]=null,s();p[u]={component:g},a.registerRouteInstance=function(t,e){var r=y.instances[u];(e&&r!==t||!e&&r===t)&&(y.instances[u]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[u]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[u]&&(y.instances[u]=t.componentInstance),m(c)};var b=y.props&&y.props[u];return b&&(t(p[u],{route:c,configProps:b}),w(g,a,c,b)),s(g,a,o)}};function w(e,r,n,o){var i=r.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}(n,o);if(i){i=r.props=t({},i);var a=r.attrs=r.attrs||{};for(var s in i)e.props&&s in e.props||(a[s]=i[s],delete i[s])}}function b(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function x(t){return t.replace(/\/+/g,"/")}var R=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},k=B,E=j,C=function(t,e){return S(j(t,e),e)},A=S,O=U,_=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function j(t,e){for(var r,n=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(r=_.exec(t));){var u=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||s,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:R?L(R):m?".*":"[^"+P(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function T(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function S(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",q(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?T:encodeURIComponent,s=0;s<t.length;s++){var u=t[s];if("string"!=typeof u){var c,p=i[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(R(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[s].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?u.prefix:u.delimiter)+c}}else{if(c=u.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!r[s].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function P(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function $(t,e){return t.keys=e,t}function q(t){return t&&t.sensitive?"":"i"}function U(t,e,r){R(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=P(s);else{var u=P(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),i+=c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")"}}var p=P(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",$(new RegExp("^"+i,q(r)),e)}function B(t,e,r){return R(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return $(t,e)}(t,e):R(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(B(t[o],e,r).source);return $(new RegExp("(?:"+n.join("|")+")",q(r)),e)}(t,e,r):function(t,e,r){return U(j(t,r),e,r)}(t,e,r)}k.parse=E,k.compile=C,k.tokensToFunction=A,k.tokensToRegExp=O;var I=Object.create(null);function M(t,e,r){e=e||{};try{var n=I[t]||(I[t]=k.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function V(e,r,n,o){var i="string"==typeof e?{path:e}:e;if(i._normalized)return i;if(i.name){var u=(i=t({},e)).params;return u&&"object"==typeof u&&(i.params=t({},u)),i}if(!i.path&&i.params&&r){(i=t({},i))._normalized=!0;var c=t(t({},r.params),i.params);if(r.name)i.name=r.name,i.params=c;else if(r.matched.length){var p=r.matched[r.matched.length-1].path;i.path=M(p,c,r.path)}return i}var f=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),h=r&&r.path||"/",l=f.path?b(f.path,h,n||i.append):h,d=function(t,e,r){void 0===e&&(e={});var n,o=r||s;try{n=o(t||"")}catch(t){n={}}for(var i in e){var u=e[i];n[i]=Array.isArray(u)?u.map(a):a(u)}return n}(f.query,i.query,o&&o.options.parseQuery),v=i.hash||f.hash;return v&&"#"!==v.charAt(0)&&(v="#"+v),{_normalized:!0,path:l,query:d,hash:v}}var H,N=function(){},F={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(e){var r=this,n=this.$router,o=this.$route,i=n.resolve(this.to,o,this.append),a=i.location,s=i.route,u=i.href,f={},h=n.options.linkActiveClass,l=n.options.linkExactActiveClass,d=null==h?"router-link-active":h,y=null==l?"router-link-exact-active":l,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?y:this.exactActiveClass,w=s.redirectedFrom?p(null,V(s.redirectedFrom),null,n):s;f[g]=v(o,w,this.exactPath),f[m]=this.exact||this.exactPath?f[g]:function(t,e){return 0===t.path.replace(c,"/").indexOf(e.path.replace(c,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(o,w);var b=f[g]?this.ariaCurrentValue:null,x=function(t){z(t)&&(r.replace?n.replace(a,N):n.push(a,N))},R={click:z};Array.isArray(this.event)?this.event.forEach((function(t){R[t]=x})):R[this.event]=x;var k={class:f},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:s,navigate:x,isActive:f[m],isExactActive:f[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?e():e("span",{},E)}if("a"===this.tag)k.on=R,k.attrs={href:u,"aria-current":b};else{var C=function t(e){var r;if(e)for(var n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(C){C.isStatic=!1;var A=C.data=t({},C.data);for(var O in A.on=A.on||{},A.on){var _=A.on[O];O in R&&(A.on[O]=Array.isArray(_)?_:[_])}for(var j in R)j in A.on?A.on[j].push(R[j]):A.on[j]=x;var T=C.data.attrs=t({},C.data.attrs);T.href=u,T["aria-current"]=b}else k.on=R}return e(this.tag,k,this.$slots.default)}};function z(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}var D="undefined"!=typeof window;function K(t,e,r,n,o){var i=e||[],a=r||Object.create(null),s=n||Object.create(null);t.forEach((function(t){!function t(e,r,n,o,i,a){var s=o.path,u=o.name,c=o.pathToRegexpOptions||{},p=function(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}(s,i,c.strict);"boolean"==typeof o.caseSensitive&&(c.sensitive=o.caseSensitive);var f={path:p,regex:J(p,c),components:o.components||{default:o.component},alias:o.alias?"string"==typeof o.alias?[o.alias]:o.alias:[],instances:{},enteredCbs:{},name:u,parent:i,matchAs:a,redirect:o.redirect,beforeEnter:o.beforeEnter,meta:o.meta||{},props:null==o.props?{}:o.components?o.props:{default:o.props}};if(o.children&&o.children.forEach((function(o){var i=a?x(a+"/"+o.path):void 0;t(e,r,n,o,f,i)})),r[f.path]||(e.push(f.path),r[f.path]=f),void 0!==o.alias)for(var h=Array.isArray(o.alias)?o.alias:[o.alias],l=0;l<h.length;++l){var d={path:h[l],children:o.children};t(e,r,n,d,i,f.path||"/")}u&&(n[u]||(n[u]=f))}(i,a,s,t,o)}));for(var u=0,c=i.length;u<c;u++)"*"===i[u]&&(i.push(i.splice(u,1)[0]),c--,u--);return{pathList:i,pathMap:a,nameMap:s}}function J(t,e){return k(t,[],e)}function Q(t,e){var r=K(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var s=V(t,r,!1,e),c=s.name;if(c){var p=i[c];if(!p)return u(null,s);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof s.params&&(s.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in s.params)&&f.indexOf(h)>-1&&(s.params[h]=r.params[h]);return s.path=M(p.path,s.params),u(p,s,a)}if(s.path){s.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(X(v.regex,s.path,s.params))return u(v,s,a)}}return u(null,s)}function s(t,r){var n=t.redirect,o="function"==typeof n?n(p(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return u(null,r);var s=o,c=s.name,f=s.path,h=r.query,l=r.hash,d=r.params;return h=s.hasOwnProperty("query")?s.query:h,l=s.hasOwnProperty("hash")?s.hash:l,d=s.hasOwnProperty("params")?s.params:d,c?(i[c],a({_normalized:!0,name:c,query:h,hash:l,params:d},void 0,r)):f?a({_normalized:!0,path:M(function(t,e){return b(t,e.parent?e.parent.path:"/",!0)}(f,t),d),query:h,hash:l},void 0,r):u(null,r)}function u(t,r,n){return t&&t.redirect?s(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:M(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,u(i,e)}return u(null,e)}(0,r,t.matchAs):p(t,r,n,e)}return{match:a,addRoute:function(t,e){var r="object"!=typeof t?i[t]:void 0;K([e||t],n,o,i,r),r&&r.alias.length&&K(r.alias.map((function(t){return{path:t,children:[e]}})),n,o,i,r)},getRoutes:function(){return n.map((function(t){return o[t]}))},addRoutes:function(t){K(t,n,o,i)}}}function X(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,a=n.length;o<a;++o){var s=t.keys[o-1];s&&(r[s.name||"pathMatch"]="string"==typeof n[o]?i(n[o]):n[o])}return!0}var Y=D&&window.performance&&window.performance.now?window.performance:Date;function W(){return Y.now().toFixed(3)}var G=W();function Z(){return G}function tt(t){return G=t}var et=Object.create(null);function rt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,r=window.location.href.replace(e,""),n=t({},window.history.state);return n.key=Z(),window.history.replaceState(n,"",r),window.addEventListener("popstate",it),function(){window.removeEventListener("popstate",it)}}function nt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=Z();if(t)return et[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){pt(t,i)})).catch((function(t){})):pt(a,i))}))}}function ot(){var t=Z();t&&(et[t]={x:window.pageXOffset,y:window.pageYOffset})}function it(t){ot(),t.state&&t.state.key&&tt(t.state.key)}function at(t){return ut(t.x)||ut(t.y)}function st(t){return{x:ut(t.x)?t.x:window.pageXOffset,y:ut(t.y)?t.y:window.pageYOffset}}function ut(t){return"number"==typeof t}var ct=/^#\d/;function pt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ct.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:ut((r=i).x)?r.x:0,y:ut(r.y)?r.y:0})}else at(t)&&(e=st(t))}else n&&at(t)&&(e=st(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var ft,ht=D&&(-1===(ft=window.navigator.userAgent).indexOf("Android 2.")&&-1===ft.indexOf("Android 4.0")||-1===ft.indexOf("Mobile Safari")||-1!==ft.indexOf("Chrome")||-1!==ft.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState;function lt(e,r){ot();var n=window.history;try{if(r){var o=t({},n.state);o.key=Z(),n.replaceState(o,"",e)}else n.pushState({key:tt(W())},"",e)}catch(t){window.location[r?"replace":"assign"](e)}}function dt(t){lt(t,!0)}function vt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var yt={redirected:2,aborted:4,cancelled:8,duplicated:16};function mt(t,e){return wt(t,e,yt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return bt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function gt(t,e){return wt(t,e,yt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function wt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var bt=["params","query","hash"];function xt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Rt(t,e){return xt(t)&&t._isRouter&&(null==e||t.type===e)}function kt(t){return function(e,r,n){var o=!1,i=0,a=null;Et(t,(function(t,e,r,s){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var u,c=Ot((function(e){var o;((o=e).__esModule||At&&"Module"===o[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:H.extend(e),r.components[s]=e,--i<=0&&n()})),p=Ot((function(t){var e="Failed to resolve async component "+s+": "+t;a||(a=xt(t)?t:new Error(e),n(a))}));try{u=t(c,p)}catch(t){p(t)}if(u)if("function"==typeof u.then)u.then(c,p);else{var f=u.component;f&&"function"==typeof f.then&&f.then(c,p)}}})),o||n()}}function Et(t,e){return Ct(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Ct(t){return Array.prototype.concat.apply([],t)}var At="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function Ot(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var _t=function(t,e){this.router=t,this.base=function(t){if(!t)if(D){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}(e),this.current=h,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function jt(t,e,r,n){var o=Et(t,(function(t,n,o,i){var a=function(t,e){return"function"!=typeof t&&(t=H.extend(t)),t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Ct(n?o.reverse():o)}function Tt(t,e){if(e)return function(){return t.apply(e,arguments)}}_t.prototype.listen=function(t){this.cb=t},_t.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},_t.prototype.onError=function(t){this.errorCbs.push(t)},_t.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach((function(e){e(t)})),t}var i=this.current;this.confirmTransition(n,(function(){o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(n,i)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(Rt(t,yt.redirected)&&i===h||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},_t.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current;this.pending=t;var i,a,s=function(t){!Rt(t)&&xt(t)&&(n.errorCbs.length?n.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},u=t.matched.length-1,c=o.matched.length-1;if(v(t,o)&&u===c&&t.matched[u]===o.matched[c])return this.ensureURL(),t.hash&&nt(this.router,o,t,!1),s(((a=wt(i=o,t,yt.duplicated,'Avoided redundant navigation to current location: "'+i.fullPath+'".')).name="NavigationDuplicated",a));var p=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),f=p.updated,h=p.deactivated,l=p.activated,d=[].concat(function(t){return jt(t,"beforeRouteLeave",Tt,!0)}(h),this.router.beforeHooks,function(t){return jt(t,"beforeRouteUpdate",Tt)}(f),l.map((function(t){return t.beforeEnter})),kt(l)),y=function(e,r){if(n.pending!==t)return s(gt(o,t));try{e(t,o,(function(e){!1===e?(n.ensureURL(!0),s(function(t,e){return wt(t,e,yt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(o,t))):xt(e)?(n.ensureURL(!0),s(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(s(mt(o,t)),"object"==typeof e&&e.replace?n.replace(e):n.push(e)):r(e)}))}catch(t){s(t)}};vt(d,y,(function(){vt(function(t){return jt(t,"beforeRouteEnter",(function(t,e,r,n){return function(t,e,r){return function(n,o,i){return t(n,o,(function(t){"function"==typeof t&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(t)),i(t)}))}}(t,r,n)}))}(l).concat(n.router.resolveHooks),y,(function(){if(n.pending!==t)return s(gt(o,t));n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){m(t)}))}))}))},_t.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},_t.prototype.setupListeners=function(){},_t.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=h,this.pending=null};var St=function(t){function e(e,r){t.call(this,e,r),this._startLocation=Pt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=ht&&r;n&&this.listeners.push(rt());var o=function(){var r=t.current,o=Pt(t.base);t.current===h&&o===t._startLocation||t.transitionTo(o,(function(t){n&&nt(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){lt(x(n.base+t.fullPath)),nt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){dt(x(n.base+t.fullPath)),nt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Pt(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?lt(e):dt(e)}},e.prototype.getCurrentLocation=function(){return Pt(this.base)},e}(_t);function Pt(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return!t||r!==n&&0!==r.indexOf(x(n+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var Lt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Pt(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}(this.base)||$t()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=ht&&e;r&&this.listeners.push(rt());var n=function(){var e=t.current;$t()&&t.transitionTo(qt(),(function(n){r&&nt(t.router,n,e,!0),ht||It(n.fullPath)}))},o=ht?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Bt(t.fullPath),nt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){It(t.fullPath),nt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;qt()!==e&&(t?Bt(e):It(e))},e.prototype.getCurrentLocation=function(){return qt()},e}(_t);function $t(){var t=qt();return"/"===t.charAt(0)||(It("/"+t),!1)}function qt(){var t=window.location.href,e=t.indexOf("#");return e<0?"":t=t.slice(e+1)}function Ut(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Bt(t){ht?lt(Ut(t)):window.location.hash=t}function It(t){ht?dt(Ut(t)):window.location.replace(Ut(t))}var Mt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){var t=e.current;e.index=r,e.updateRoute(n),e.router.afterHooks.forEach((function(e){e&&e(n,t)}))}),(function(t){Rt(t,yt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(_t),Vt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=Q(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!ht&&!1!==t.fallback,this.fallback&&(e="hash"),D||(e="abstract"),this.mode=e,e){case"history":this.history=new St(this,t.base);break;case"hash":this.history=new Lt(this,t.base,this.fallback);break;case"abstract":this.history=new Mt(this,t.base)}},Ht={currentRoute:{configurable:!0}};function Nt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}return Vt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Ht.currentRoute.get=function(){return this.history&&this.history.current},Vt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var r=this.history;if(r instanceof St||r instanceof Lt){var n=function(t){r.setupListeners(),function(t){var n=r.current,o=e.options.scrollBehavior;ht&&o&&"fullPath"in t&&nt(e,t,n,!1)}(t)};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Vt.prototype.beforeEach=function(t){return Nt(this.beforeHooks,t)},Vt.prototype.beforeResolve=function(t){return Nt(this.resolveHooks,t)},Vt.prototype.afterEach=function(t){return Nt(this.afterHooks,t)},Vt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Vt.prototype.onError=function(t){this.history.onError(t)},Vt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Vt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Vt.prototype.go=function(t){this.history.go(t)},Vt.prototype.back=function(){this.go(-1)},Vt.prototype.forward=function(){this.go(1)},Vt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Vt.prototype.resolve=function(t,e,r){var n=V(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?x(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Vt.prototype.getRoutes=function(){return this.matcher.getRoutes()},Vt.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==h&&this.history.transitionTo(this.history.getCurrentLocation())},Vt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==h&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Vt.prototype,Ht),Vt.install=function t(e){if(!t.installed||H!==e){t.installed=!0,H=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",g),e.component("RouterLink",F);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Vt.version="3.5.3",Vt.isNavigationFailure=Rt,Vt.NavigationFailureType=yt,Vt.START_LOCATION=h,D&&window.Vue&&window.Vue.use(Vt),Vt}, true?module.exports=e():undefined;

/***/ }),

/***/ "./node_modules/vuedraggable/dist/vuedraggable.umd.js":
/*!************************************************************!*\
  !*** ./node_modules/vuedraggable/dist/vuedraggable.umd.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! sortablejs */ "./node_modules/vuedraggable/node_modules/sortablejs/modular/sortable.esm.js"));
	else {}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __webpack_require__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ }),

/***/ "./node_modules/vuedraggable/node_modules/sortablejs/modular/sortable.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/vuedraggable/node_modules/sortablejs/modular/sortable.esm.js ***!
  \***********************************************************************************/
/*! exports provided: default, MultiDrag, Sortable, Swap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/DTO/CardDTO.js":
/*!*************************************!*\
  !*** ./resources/js/DTO/CardDTO.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardDTO; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CardDTO = /*#__PURE__*/_createClass(function CardDTO(data) {
  _classCallCheck(this, CardDTO);

  _defineProperty(this, "id", null);

  _defineProperty(this, "list_id", null);

  _defineProperty(this, "name", null);

  _defineProperty(this, "text", null);

  _defineProperty(this, "prev", 0);

  _defineProperty(this, "next", 0);

  _defineProperty(this, "created_at", null);

  _defineProperty(this, "updated_at", null);

  if (data) {
    Object.assign(this, data);
  }
});


;

/***/ }),

/***/ "./resources/js/DTO/DeskDTO.js":
/*!*************************************!*\
  !*** ./resources/js/DTO/DeskDTO.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeskDTO; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeskDTO = /*#__PURE__*/_createClass(function DeskDTO(data) {
  _classCallCheck(this, DeskDTO);

  _defineProperty(this, "id", null);

  _defineProperty(this, "name", null);

  _defineProperty(this, "created_at", null);

  _defineProperty(this, "updated_at", null);

  if (data) {
    Object.assign(this, data);
  }
});


;

/***/ }),

/***/ "./resources/js/DTO/ListDTO.js":
/*!*************************************!*\
  !*** ./resources/js/DTO/ListDTO.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListDTO; });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListDTO = /*#__PURE__*/_createClass(function ListDTO(data) {
  _classCallCheck(this, ListDTO);

  _defineProperty(this, "id", null);

  _defineProperty(this, "desk_id", null);

  _defineProperty(this, "name", null);

  _defineProperty(this, "prev", 0);

  _defineProperty(this, "next", 0);

  _defineProperty(this, "created_at", null);

  _defineProperty(this, "updated_at", null);

  if (data) {
    Object.assign(this, data);
  }
});


;

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router_dist_vue_router_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router/dist/vue-router.min */ "./node_modules/vue-router/dist/vue-router.min.js");
/* harmony import */ var vue_router_dist_vue_router_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_router_dist_vue_router_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.min */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.min.js");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./resources/js/components/App.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./resources/js/components/Home.vue");
/* harmony import */ var _components_Desks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Desks */ "./resources/js/components/Desks.vue");
/* harmony import */ var _components_Lists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Lists */ "./resources/js/components/Lists.vue");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");



 //import CKEditor from '@ckeditor/ckeditor5-vue2';

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router_dist_vue_router_min__WEBPACK_IMPORTED_MODULE_1___default.a);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue_dist_bootstrap_vue_min__WEBPACK_IMPORTED_MODULE_2___default.a); //Vue.use(CKEditor);




 // TODO color styles for bg and other bootstrap components

var colors = {
  'primary': '#007bff',
  'secondary': '#6c757d',
  'info': '#17a2b8',
  'success': '#28a745',
  'warning': '#ffc107',
  'danger': '#dc3545'
};
var router = new vue_router_dist_vue_router_min__WEBPACK_IMPORTED_MODULE_1___default.a({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: _components_Home__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: '/desks',
    name: 'desks',
    component: _components_Desks__WEBPACK_IMPORTED_MODULE_5__["default"]
  }, {
    path: '/desks/:id',
    name: 'lists',
    component: _components_Lists__WEBPACK_IMPORTED_MODULE_6__["default"]
  }]
});
var app = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  el: '#app',
  router: router,
  components: {
    App: _components_App__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  template: '<app></app>'
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//window._ = require('lodash');
window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap/dist/js/bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/App.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=332fccf4& */ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!************************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=332fccf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Cards.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Cards.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cards_vue_vue_type_template_id_767212f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=767212f0& */ "./resources/js/components/Cards.vue?vue&type=template&id=767212f0&");
/* harmony import */ var _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards.vue?vue&type=script&lang=js& */ "./resources/js/components/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cards_vue_vue_type_template_id_767212f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Cards_vue_vue_type_template_id_767212f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Cards.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Cards.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Cards.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Cards.vue?vue&type=template&id=767212f0&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Cards.vue?vue&type=template&id=767212f0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_767212f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Cards.vue?vue&type=template&id=767212f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Cards.vue?vue&type=template&id=767212f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_767212f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_767212f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CardsCreate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CardsCreate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardsCreate_vue_vue_type_template_id_2266e1a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsCreate.vue?vue&type=template&id=2266e1a4& */ "./resources/js/components/CardsCreate.vue?vue&type=template&id=2266e1a4&");
/* harmony import */ var _CardsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/CardsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardsCreate_vue_vue_type_template_id_2266e1a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardsCreate_vue_vue_type_template_id_2266e1a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardsCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardsCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CardsCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardsCreate.vue?vue&type=template&id=2266e1a4&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CardsCreate.vue?vue&type=template&id=2266e1a4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsCreate_vue_vue_type_template_id_2266e1a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsCreate.vue?vue&type=template&id=2266e1a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsCreate.vue?vue&type=template&id=2266e1a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsCreate_vue_vue_type_template_id_2266e1a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsCreate_vue_vue_type_template_id_2266e1a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CardsDelete.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CardsDelete.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardsDelete_vue_vue_type_template_id_39f7d6d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsDelete.vue?vue&type=template&id=39f7d6d3& */ "./resources/js/components/CardsDelete.vue?vue&type=template&id=39f7d6d3&");
/* harmony import */ var _CardsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsDelete.vue?vue&type=script&lang=js& */ "./resources/js/components/CardsDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardsDelete_vue_vue_type_template_id_39f7d6d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardsDelete_vue_vue_type_template_id_39f7d6d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardsDelete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardsDelete.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CardsDelete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsDelete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardsDelete.vue?vue&type=template&id=39f7d6d3&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CardsDelete.vue?vue&type=template&id=39f7d6d3& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsDelete_vue_vue_type_template_id_39f7d6d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsDelete.vue?vue&type=template&id=39f7d6d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsDelete.vue?vue&type=template&id=39f7d6d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsDelete_vue_vue_type_template_id_39f7d6d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsDelete_vue_vue_type_template_id_39f7d6d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CardsItem.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/CardsItem.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardsItem_vue_vue_type_template_id_17f4c78a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsItem.vue?vue&type=template&id=17f4c78a& */ "./resources/js/components/CardsItem.vue?vue&type=template&id=17f4c78a&");
/* harmony import */ var _CardsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsItem.vue?vue&type=script&lang=js& */ "./resources/js/components/CardsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardsItem_vue_vue_type_template_id_17f4c78a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardsItem_vue_vue_type_template_id_17f4c78a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardsItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardsItem.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/CardsItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardsItem.vue?vue&type=template&id=17f4c78a&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/CardsItem.vue?vue&type=template&id=17f4c78a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsItem_vue_vue_type_template_id_17f4c78a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsItem.vue?vue&type=template&id=17f4c78a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsItem.vue?vue&type=template&id=17f4c78a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsItem_vue_vue_type_template_id_17f4c78a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsItem_vue_vue_type_template_id_17f4c78a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CardsUpdate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CardsUpdate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardsUpdate_vue_vue_type_template_id_81b26a1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsUpdate.vue?vue&type=template&id=81b26a1e& */ "./resources/js/components/CardsUpdate.vue?vue&type=template&id=81b26a1e&");
/* harmony import */ var _CardsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsUpdate.vue?vue&type=script&lang=js& */ "./resources/js/components/CardsUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardsUpdate_vue_vue_type_template_id_81b26a1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardsUpdate_vue_vue_type_template_id_81b26a1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardsUpdate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardsUpdate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CardsUpdate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardsUpdate.vue?vue&type=template&id=81b26a1e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CardsUpdate.vue?vue&type=template&id=81b26a1e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsUpdate_vue_vue_type_template_id_81b26a1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardsUpdate.vue?vue&type=template&id=81b26a1e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardsUpdate.vue?vue&type=template&id=81b26a1e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsUpdate_vue_vue_type_template_id_81b26a1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsUpdate_vue_vue_type_template_id_81b26a1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Desks.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Desks.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Desks_vue_vue_type_template_id_3968409f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Desks.vue?vue&type=template&id=3968409f& */ "./resources/js/components/Desks.vue?vue&type=template&id=3968409f&");
/* harmony import */ var _Desks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Desks.vue?vue&type=script&lang=js& */ "./resources/js/components/Desks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Desks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Desks_vue_vue_type_template_id_3968409f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Desks_vue_vue_type_template_id_3968409f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Desks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Desks.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Desks.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Desks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Desks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Desks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Desks.vue?vue&type=template&id=3968409f&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Desks.vue?vue&type=template&id=3968409f& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desks_vue_vue_type_template_id_3968409f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Desks.vue?vue&type=template&id=3968409f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Desks.vue?vue&type=template&id=3968409f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desks_vue_vue_type_template_id_3968409f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Desks_vue_vue_type_template_id_3968409f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DesksCreate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DesksCreate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesksCreate_vue_vue_type_template_id_2817fe7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesksCreate.vue?vue&type=template&id=2817fe7b& */ "./resources/js/components/DesksCreate.vue?vue&type=template&id=2817fe7b&");
/* harmony import */ var _DesksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesksCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/DesksCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesksCreate_vue_vue_type_template_id_2817fe7b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesksCreate_vue_vue_type_template_id_2817fe7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DesksCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DesksCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DesksCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DesksCreate.vue?vue&type=template&id=2817fe7b&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DesksCreate.vue?vue&type=template&id=2817fe7b& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksCreate_vue_vue_type_template_id_2817fe7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksCreate.vue?vue&type=template&id=2817fe7b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksCreate.vue?vue&type=template&id=2817fe7b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksCreate_vue_vue_type_template_id_2817fe7b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksCreate_vue_vue_type_template_id_2817fe7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DesksDelete.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DesksDelete.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesksDelete_vue_vue_type_template_id_3fa8f3aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesksDelete.vue?vue&type=template&id=3fa8f3aa& */ "./resources/js/components/DesksDelete.vue?vue&type=template&id=3fa8f3aa&");
/* harmony import */ var _DesksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesksDelete.vue?vue&type=script&lang=js& */ "./resources/js/components/DesksDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesksDelete_vue_vue_type_template_id_3fa8f3aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesksDelete_vue_vue_type_template_id_3fa8f3aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DesksDelete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DesksDelete.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DesksDelete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksDelete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DesksDelete.vue?vue&type=template&id=3fa8f3aa&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DesksDelete.vue?vue&type=template&id=3fa8f3aa& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksDelete_vue_vue_type_template_id_3fa8f3aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksDelete.vue?vue&type=template&id=3fa8f3aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksDelete.vue?vue&type=template&id=3fa8f3aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksDelete_vue_vue_type_template_id_3fa8f3aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksDelete_vue_vue_type_template_id_3fa8f3aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DesksItem.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/DesksItem.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesksItem_vue_vue_type_template_id_443602d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesksItem.vue?vue&type=template&id=443602d2& */ "./resources/js/components/DesksItem.vue?vue&type=template&id=443602d2&");
/* harmony import */ var _DesksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesksItem.vue?vue&type=script&lang=js& */ "./resources/js/components/DesksItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesksItem_vue_vue_type_template_id_443602d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesksItem_vue_vue_type_template_id_443602d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DesksItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DesksItem.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/DesksItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DesksItem.vue?vue&type=template&id=443602d2&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/DesksItem.vue?vue&type=template&id=443602d2& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksItem_vue_vue_type_template_id_443602d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksItem.vue?vue&type=template&id=443602d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksItem.vue?vue&type=template&id=443602d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksItem_vue_vue_type_template_id_443602d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksItem_vue_vue_type_template_id_443602d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/DesksUpdate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/DesksUpdate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesksUpdate_vue_vue_type_template_id_76503070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesksUpdate.vue?vue&type=template&id=76503070& */ "./resources/js/components/DesksUpdate.vue?vue&type=template&id=76503070&");
/* harmony import */ var _DesksUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesksUpdate.vue?vue&type=script&lang=js& */ "./resources/js/components/DesksUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesksUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesksUpdate_vue_vue_type_template_id_76503070___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesksUpdate_vue_vue_type_template_id_76503070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DesksUpdate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/DesksUpdate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/DesksUpdate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DesksUpdate.vue?vue&type=template&id=76503070&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/DesksUpdate.vue?vue&type=template&id=76503070& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksUpdate_vue_vue_type_template_id_76503070___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DesksUpdate.vue?vue&type=template&id=76503070& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/DesksUpdate.vue?vue&type=template&id=76503070&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksUpdate_vue_vue_type_template_id_76503070___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesksUpdate_vue_vue_type_template_id_76503070___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Lists.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Lists.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Lists_vue_vue_type_template_id_eb27ec8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lists.vue?vue&type=template&id=eb27ec8c& */ "./resources/js/components/Lists.vue?vue&type=template&id=eb27ec8c&");
/* harmony import */ var _Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lists.vue?vue&type=script&lang=js& */ "./resources/js/components/Lists.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Lists_vue_vue_type_template_id_eb27ec8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Lists_vue_vue_type_template_id_eb27ec8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Lists.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Lists.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Lists.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Lists.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Lists.vue?vue&type=template&id=eb27ec8c&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Lists.vue?vue&type=template&id=eb27ec8c& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_template_id_eb27ec8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Lists.vue?vue&type=template&id=eb27ec8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Lists.vue?vue&type=template&id=eb27ec8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_template_id_eb27ec8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lists_vue_vue_type_template_id_eb27ec8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListsCreate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ListsCreate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListsCreate_vue_vue_type_template_id_78ad7154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListsCreate.vue?vue&type=template&id=78ad7154& */ "./resources/js/components/ListsCreate.vue?vue&type=template&id=78ad7154&");
/* harmony import */ var _ListsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListsCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/ListsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListsCreate_vue_vue_type_template_id_78ad7154___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListsCreate_vue_vue_type_template_id_78ad7154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListsCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListsCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ListsCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListsCreate.vue?vue&type=template&id=78ad7154&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ListsCreate.vue?vue&type=template&id=78ad7154& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsCreate_vue_vue_type_template_id_78ad7154___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsCreate.vue?vue&type=template&id=78ad7154& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsCreate.vue?vue&type=template&id=78ad7154&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsCreate_vue_vue_type_template_id_78ad7154___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsCreate_vue_vue_type_template_id_78ad7154___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListsDelete.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ListsDelete.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListsDelete_vue_vue_type_template_id_498b86f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true& */ "./resources/js/components/ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true&");
/* harmony import */ var _ListsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListsDelete.vue?vue&type=script&lang=js& */ "./resources/js/components/ListsDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListsDelete_vue_vue_type_template_id_498b86f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListsDelete_vue_vue_type_template_id_498b86f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "498b86f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListsDelete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListsDelete.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ListsDelete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsDelete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsDelete_vue_vue_type_template_id_498b86f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsDelete.vue?vue&type=template&id=498b86f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsDelete_vue_vue_type_template_id_498b86f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsDelete_vue_vue_type_template_id_498b86f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListsItem.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/ListsItem.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListsItem_vue_vue_type_template_id_6da9c66d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListsItem.vue?vue&type=template&id=6da9c66d& */ "./resources/js/components/ListsItem.vue?vue&type=template&id=6da9c66d&");
/* harmony import */ var _ListsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListsItem.vue?vue&type=script&lang=js& */ "./resources/js/components/ListsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListsItem_vue_vue_type_template_id_6da9c66d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListsItem_vue_vue_type_template_id_6da9c66d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListsItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListsItem.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/ListsItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListsItem.vue?vue&type=template&id=6da9c66d&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ListsItem.vue?vue&type=template&id=6da9c66d& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsItem_vue_vue_type_template_id_6da9c66d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsItem.vue?vue&type=template&id=6da9c66d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsItem.vue?vue&type=template&id=6da9c66d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsItem_vue_vue_type_template_id_6da9c66d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsItem_vue_vue_type_template_id_6da9c66d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ListsUpdate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ListsUpdate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListsUpdate_vue_vue_type_template_id_606930a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true& */ "./resources/js/components/ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true&");
/* harmony import */ var _ListsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListsUpdate.vue?vue&type=script&lang=js& */ "./resources/js/components/ListsUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListsUpdate_vue_vue_type_template_id_606930a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListsUpdate_vue_vue_type_template_id_606930a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "606930a3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ListsUpdate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ListsUpdate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ListsUpdate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsUpdate_vue_vue_type_template_id_606930a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ListsUpdate.vue?vue&type=template&id=606930a3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsUpdate_vue_vue_type_template_id_606930a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListsUpdate_vue_vue_type_template_id_606930a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Tasks.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Tasks.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tasks_vue_vue_type_template_id_43ab059a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tasks.vue?vue&type=template&id=43ab059a& */ "./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&");
/* harmony import */ var _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tasks.vue?vue&type=script&lang=js& */ "./resources/js/components/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tasks_vue_vue_type_template_id_43ab059a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tasks_vue_vue_type_template_id_43ab059a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tasks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tasks.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Tasks.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tasks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_43ab059a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Tasks.vue?vue&type=template&id=43ab059a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tasks.vue?vue&type=template&id=43ab059a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_43ab059a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tasks_vue_vue_type_template_id_43ab059a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TasksCreate.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/TasksCreate.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksCreate_vue_vue_type_template_id_3e577c0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksCreate.vue?vue&type=template&id=3e577c0f& */ "./resources/js/components/TasksCreate.vue?vue&type=template&id=3e577c0f&");
/* harmony import */ var _TasksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksCreate.vue?vue&type=script&lang=js& */ "./resources/js/components/TasksCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TasksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TasksCreate_vue_vue_type_template_id_3e577c0f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TasksCreate_vue_vue_type_template_id_3e577c0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TasksCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TasksCreate.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/TasksCreate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TasksCreate.vue?vue&type=template&id=3e577c0f&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TasksCreate.vue?vue&type=template&id=3e577c0f& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksCreate_vue_vue_type_template_id_3e577c0f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksCreate.vue?vue&type=template&id=3e577c0f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksCreate.vue?vue&type=template&id=3e577c0f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksCreate_vue_vue_type_template_id_3e577c0f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksCreate_vue_vue_type_template_id_3e577c0f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TasksDelete.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/TasksDelete.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksDelete_vue_vue_type_template_id_55e8713e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksDelete.vue?vue&type=template&id=55e8713e& */ "./resources/js/components/TasksDelete.vue?vue&type=template&id=55e8713e&");
/* harmony import */ var _TasksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksDelete.vue?vue&type=script&lang=js& */ "./resources/js/components/TasksDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TasksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TasksDelete_vue_vue_type_template_id_55e8713e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TasksDelete_vue_vue_type_template_id_55e8713e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TasksDelete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TasksDelete.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/TasksDelete.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksDelete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TasksDelete.vue?vue&type=template&id=55e8713e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TasksDelete.vue?vue&type=template&id=55e8713e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksDelete_vue_vue_type_template_id_55e8713e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksDelete.vue?vue&type=template&id=55e8713e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksDelete.vue?vue&type=template&id=55e8713e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksDelete_vue_vue_type_template_id_55e8713e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksDelete_vue_vue_type_template_id_55e8713e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TasksItem.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/TasksItem.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksItem_vue_vue_type_template_id_0d9fd566_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true& */ "./resources/js/components/TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true&");
/* harmony import */ var _TasksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksItem.vue?vue&type=script&lang=js& */ "./resources/js/components/TasksItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TasksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TasksItem_vue_vue_type_template_id_0d9fd566_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TasksItem_vue_vue_type_template_id_0d9fd566_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d9fd566",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TasksItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TasksItem.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/TasksItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksItem_vue_vue_type_template_id_0d9fd566_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksItem.vue?vue&type=template&id=0d9fd566&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksItem_vue_vue_type_template_id_0d9fd566_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksItem_vue_vue_type_template_id_0d9fd566_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TasksStatus.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/TasksStatus.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TasksStatus_vue_vue_type_template_id_08f97ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TasksStatus.vue?vue&type=template&id=08f97ff6& */ "./resources/js/components/TasksStatus.vue?vue&type=template&id=08f97ff6&");
/* harmony import */ var _TasksStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TasksStatus.vue?vue&type=script&lang=js& */ "./resources/js/components/TasksStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TasksStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TasksStatus_vue_vue_type_template_id_08f97ff6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TasksStatus_vue_vue_type_template_id_08f97ff6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TasksStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TasksStatus.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/TasksStatus.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TasksStatus.vue?vue&type=template&id=08f97ff6&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TasksStatus.vue?vue&type=template&id=08f97ff6& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksStatus_vue_vue_type_template_id_08f97ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TasksStatus.vue?vue&type=template&id=08f97ff6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TasksStatus.vue?vue&type=template&id=08f97ff6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksStatus_vue_vue_type_template_id_08f97ff6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TasksStatus_vue_vue_type_template_id_08f97ff6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /media/master/HDD1TB-2/PROJECTS/pavlenko/laravel-todo/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /media/master/HDD1TB-2/PROJECTS/pavlenko/laravel-todo/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);