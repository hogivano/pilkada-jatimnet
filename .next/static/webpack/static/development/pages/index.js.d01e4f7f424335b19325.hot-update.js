webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-geolocated */ "./node_modules/react-geolocated/dist-modules/index.js");
/* harmony import */ var react_geolocated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_geolocated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_sass_base_style_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/sass/base-style.sass */ "./styles/sass/base-style.sass");
/* harmony import */ var _styles_sass_base_style_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_base_style_sass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sass_styles_sass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/sass/styles.sass */ "./styles/sass/styles.sass");
/* harmony import */ var _styles_sass_styles_sass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_styles_sass__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "/home/hogivano/ReactProject/pilkada-jatimnet/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Layout = function Layout() {
  return !_this.props.isGeolocationAvailable ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Your browser does not support Geolocation") : !_this.props.isGeolocationEnabled ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Geolocation is not enabled") : _this.props.coords ? __jsx("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "latitude"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _this.props.coords.latitude)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "longitude"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, _this.props.coords.longitude)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "altitude"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _this.props.coords.altitude)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "heading"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, _this.props.coords.heading)), __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "speed"), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, _this.props.coords.speed)))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Getting the location data\u2026 ") // <div className="bg-white-bone">
  //   <Header />
  //   <section className="container p-v-20">
  //   {props.children}
  //   </section>
  //   <Footer/>
  // </div>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.d01e4f7f424335b19325.hot-update.js.map