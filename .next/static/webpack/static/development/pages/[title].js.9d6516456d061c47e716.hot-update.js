webpackHotUpdate("static/development/pages/[title].js",{

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
var _jsxFileName = "/home/hogivano/ReactProject/pilkada-jatimnet/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Layout = function Layout(props) {
  return __jsx("div", {
    className: "bg-white-bone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("section", {
    className: "container p-v-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/react-geolocated/dist-modules/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-geolocated/dist-modules/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geoPropTypes = exports.geolocated = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getDisplayName = function getDisplayName(WrappedComponent) {
  return "Geolocated(".concat(WrappedComponent.displayName || WrappedComponent.name || "Component", ")");
};

var geolocated = function geolocated() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$positionOptions = _ref.positionOptions,
      positionOptions = _ref$positionOptions === void 0 ? {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity
  } : _ref$positionOptions,
      _ref$isOptimisticGeol = _ref.isOptimisticGeolocationEnabled,
      isOptimisticGeolocationEnabled = _ref$isOptimisticGeol === void 0 ? true : _ref$isOptimisticGeol,
      _ref$userDecisionTime = _ref.userDecisionTimeout,
      userDecisionTimeout = _ref$userDecisionTime === void 0 ? null : _ref$userDecisionTime,
      _ref$suppressLocation = _ref.suppressLocationOnMount,
      suppressLocationOnMount = _ref$suppressLocation === void 0 ? false : _ref$suppressLocation,
      _ref$watchPosition = _ref.watchPosition,
      watchPosition = _ref$watchPosition === void 0 ? false : _ref$watchPosition,
      _ref$geolocationProvi = _ref.geolocationProvider,
      geolocationProvider = _ref$geolocationProvi === void 0 ? typeof navigator !== "undefined" && navigator.geolocation : _ref$geolocationProvi;

  return function (WrappedComponent) {
    var _temp;

    var result = (_temp =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Geolocated, _Component);

      function Geolocated(props) {
        var _this;

        _classCallCheck(this, Geolocated);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Geolocated).call(this, props));

        _defineProperty(_assertThisInitialized(_this), "isCurrentlyMounted", false);

        _defineProperty(_assertThisInitialized(_this), "cancelUserDecisionTimeout", function () {
          if (_this.userDecisionTimeoutId) {
            clearTimeout(_this.userDecisionTimeoutId);
          }
        });

        _defineProperty(_assertThisInitialized(_this), "onPositionError", function (positionError) {
          _this.cancelUserDecisionTimeout();

          if (_this.isCurrentlyMounted) {
            _this.setState({
              coords: null,
              isGeolocationEnabled: false,
              positionError: positionError
            });
          }

          if (_this.props.onError) {
            _this.props.onError(positionError);
          }
        });

        _defineProperty(_assertThisInitialized(_this), "onPositionSuccess", function (position) {
          _this.cancelUserDecisionTimeout();

          if (_this.isCurrentlyMounted) {
            _this.setState({
              coords: position.coords,
              isGeolocationEnabled: true,
              positionError: null
            });
          }

          if (_this.props.onSuccess) {
            _this.props.onSuccess(position);
          }
        });

        _defineProperty(_assertThisInitialized(_this), "getLocation", function () {
          if (!geolocationProvider || !geolocationProvider.getCurrentPosition || !geolocationProvider.watchPosition) {
            throw new Error("The provided geolocation provider is invalid");
          }

          var funcPosition = (watchPosition ? geolocationProvider.watchPosition : geolocationProvider.getCurrentPosition).bind(geolocationProvider);

          if (userDecisionTimeout) {
            _this.userDecisionTimeoutId = setTimeout(function () {
              _this.onPositionError();
            }, userDecisionTimeout);
          }

          _this.watchId = funcPosition(_this.onPositionSuccess, _this.onPositionError, positionOptions);
        });

        _this.state = {
          coords: null,
          isGeolocationAvailable: Boolean(geolocationProvider),
          isGeolocationEnabled: isOptimisticGeolocationEnabled,
          positionError: null
        };
        return _this;
      }

      _createClass(Geolocated, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.isCurrentlyMounted = true;

          if (!suppressLocationOnMount) {
            this.getLocation();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isCurrentlyMounted = false;
          this.cancelUserDecisionTimeout();

          if (watchPosition) {
            geolocationProvider.clearWatch(this.watchId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return _react["default"].createElement(WrappedComponent, _extends({}, this.state, this.props));
        }
      }]);

      return Geolocated;
    }(_react.Component), _temp);
    result.displayName = getDisplayName(WrappedComponent);
    result.propTypes = {
      onError: _propTypes["default"].func,
      onSuccess: _propTypes["default"].func
    };
    return result;
  };
};

exports.geolocated = geolocated;
var geoPropTypes = {
  coords: _propTypes["default"].shape({
    latitude: _propTypes["default"].number,
    longitude: _propTypes["default"].number,
    altitude: _propTypes["default"].number,
    accuracy: _propTypes["default"].number,
    altitudeAccuracy: _propTypes["default"].number,
    heading: _propTypes["default"].number,
    speed: _propTypes["default"].number
  }),
  isGeolocationAvailable: _propTypes["default"].bool,
  isGeolocationEnabled: _propTypes["default"].bool,
  positionError: _propTypes["default"].shape({
    code: _propTypes["default"].oneOf([1, 2, 3]),
    message: _propTypes["default"].string
  }),
  watchPosition: _propTypes["default"].bool
};
exports.geoPropTypes = geoPropTypes;

/***/ })

})
//# sourceMappingURL=[title].js.9d6516456d061c47e716.hot-update.js.map