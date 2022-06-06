"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Alert = _ref => {
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
  //const className = props.className
  return (
    /*#__PURE__*/
    // <button className={`${props.color}${props.outline?' outline':''}${props.shadow?' shadow':''}${className?` ${className}`:''}`} >{props.children}</button>
    _react.default.createElement("button", {
      className: "avishka-ui--alert ".concat(color ? "avishka-ui--".concat(color) : '').concat(outline ? " avishka-ui--outline" : "").concat(shadow ? " avishka-ui--shadow " : "").concat(className ? className : "").concat(icon ? ' avishka-ui--icon' : '').concat(fontSize ? " avishka-ui--text-".concat(fontSize) : '').concat(round ? " avishka-ui--round-".concat(round) : ''),
      onClick: onclick,
      type: type
    }, icon, children)
  );
};

var _default = Alert;
exports.default = _default;