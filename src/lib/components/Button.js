import React from "react";

const Button = ({
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
  }) => {
  console.log(color);
  return (
    <button
      className={`${color}${outline ? " outline" : ""}${shadow ? " shadow " : ""}${className ? className : ""}${icon? ' icon':''} ${fontSize? `text-${fontSize}`:''}${border? ` border-${border}`:''}`}
      onClick={onclick}
      type={type}
    >

      {icon}{children}
    </button>
  );
};
export default Button;
