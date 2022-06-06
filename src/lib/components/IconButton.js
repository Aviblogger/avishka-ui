import React from "react";

const IconButton = ({
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
  }) => {
  return (
    <button
      className={`avishka-ui--icon-btn ${color?`avishka-ui--${color}`:''}${outline ? " avishka-ui--outline" : ""}${shadow ? " avishka-ui--shadow " : ""}${className ? className : ""}${icon? ' avishka-ui--icon':''} ${fontSize? ` avishka-ui--text-${fontSize}`:''}${round? ` avishka-ui--round-${round}`:''}`}
      onClick={onclick}
      type={type}
    >

      {icon}
    </button>
  );
};
export default IconButton;
