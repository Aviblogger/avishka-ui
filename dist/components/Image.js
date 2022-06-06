"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Image = _ref => {
  let {
    color,
    outline,
    shadow,
    className,
    children,
    onclick,
    type,
    icon,
    size,
    round,
    src
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("img", {
    className: "avishka-ui--avatar ".concat(shadow ? " avishka-ui--shadow " : "").concat(className ? className : "").concat(size ? " avishka-ui--avatar-".concat(size) : 'avishka-ui--avatar-10').concat(round ? " avishka-ui--round-".concat(round) : ''),
    onClick: onclick,
    type: type,
    src: src,
    alt: "avatar"
  });
};

var _default = Image;
exports.default = _default;