import React from "react";
const Badge = ({
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
  return (
     <div
      className={`badge ${color}${outline ? " outline" : ""}${shadow ? " shadow " : ""}${className ? className : ""}${icon? ' icon':''} ${fontSize? `text-${fontSize}`:''}${border? ` border-${border}`:''}`}
      onClick={onclick}
      type={type}
    >

      {icon}{children}
    </div>
  );
};
export default Badge;
