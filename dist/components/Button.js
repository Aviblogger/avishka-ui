"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = _ref => {
  let {
    color,
    outline,
    shadow,
    className,
    children,
    onclick,
    type,
    icon,
    fontSize,
    border
  } = _ref;
  console.log(color);
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn ".concat(color).concat(outline ? " outline" : "").concat(shadow ? " shadow " : "").concat(className ? className : "").concat(icon ? ' icon' : '', " ").concat(fontSize ? "text-".concat(fontSize) : '').concat(border ? " border-".concat(border) : ''),
    onClick: onclick,
    type: type
  }, icon, children);
};

var _default = Button;
exports.default = _default;