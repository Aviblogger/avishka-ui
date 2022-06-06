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
 size,
 round,
 src
  }) => {
  return (
    <img
      className={`avishka-ui--avatar ${shadow ? " avishka-ui--shadow " : ""}${className ? className : ""}${size? ` avishka-ui--avatar-${size}`:'avishka-ui--avatar-10'}${round? ` avishka-ui--round-${round}`:''}`}
      onClick={onclick}
      type={type}
      src={src}
      alt="avatar"
    />

  );
};
export default IconButton;
