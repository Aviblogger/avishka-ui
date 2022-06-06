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
 round
  }) => {
  //const className = props.className
  return (
    // <button className={`${props.color}${props.outline?' outline':''}${props.shadow?' shadow':''}${className?` ${className}`:''}`} >{props.children}</button>
    <button
      className={`avishka-ui--btn ${color?`avishka-ui--${color}`:''}${outline ? " avishka-ui--outline" : ""}${shadow ? " avishka-ui--shadow " : ""}${className ? className : ""}${icon? ' avishka-ui--icon':''}${fontSize? ` avishka-ui--text-${fontSize}`:''}${round? ` avishka-ui--round-${round}`:''}`}
      onClick={onclick}
      type={type}
    >

      {icon}{children}
    </button>
  );
};
export default Button;
