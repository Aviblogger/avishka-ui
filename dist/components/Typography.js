"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Typography = _ref => {
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
    border,
    variant
  } = _ref;
  console.log(color);
  return (() => {
    switch (variant) {
      case 'h1':
        return /*#__PURE__*/_react.default.createElement("h1", {
          className: "avishka-ui--typography ".concat(color ? "avishka-ui--".concat(color) : 'avishka-ui--text-black').concat(className ? className : '')
        }, children);

      case 'h2':
        return /*#__PURE__*/_react.default.createElement("h2", {
          className: "avishka-ui--typography ".concat(color ? "avishka-ui--".concat(color) : 'avishka-ui--text-black').concat(className ? className : '')
        }, children);

      case 'h3':
        return /*#__PURE__*/_react.default.createElement("h3", {
          className: "avishka-ui--typography ".concat(color ? "avishka-ui--".concat(color) : 'avishka-ui--text-black').concat(className ? className : '')
        }, children);

      case 'h4':
        return /*#__PURE__*/_react.default.createElement("h4", {
          className: "avishka-ui--typography ".concat(color ? "avishka-ui--".concat(color) : 'avishka-ui--text-black').concat(className ? className : '')
        }, children);

      case 'h5':
        return /*#__PURE__*/_react.default.createElement("h5", {
          className: "avishka-ui--typography ".concat(color ? "avishka-ui--".concat(color) : 'avishka-ui--text-black').concat(className ? className : '')
        }, children);

      case 'h6':
        return /*#__PURE__*/_react.default.createElement("h6", {
          className: "avishka-ui--typography ".concat(color ? "avishka-ui--".concat(color) : 'avishka-ui--text-black').concat(className ? className : '')
        }, children);

      default:
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }
  })();
};

var _default = Typography;
exports.default = _default;