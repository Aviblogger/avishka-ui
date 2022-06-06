"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IconButton = _ref => {
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
    round
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "avishka-ui--icon-btn ".concat(color ? "avishka-ui--".concat(color) : '').concat(outline ? " avishka-ui--outline" : "").concat(shadow ? " avishka-ui--shadow " : "").concat(className ? className : "").concat(icon ? ' avishka-ui--icon' : '', " ").concat(fontSize ? " avishka-ui--text-".concat(fontSize) : '').concat(round ? " avishka-ui--round-".concat(round) : ''),
    onClick: onclick,
    type: type
  }, icon);
};

var _default = IconButton;
exports.default = _default;