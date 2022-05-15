"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Badge = props => {
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "badge ".concat(props.color).concat(props.outline ? ' outline' : '').concat(props.shadow ? ' shadow' : '')
  }, props));
};

var _default = Badge;
exports.default = _default;