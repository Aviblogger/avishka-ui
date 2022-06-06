import React from "react";

const Typography = ({
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
  }) => {
  console.log(color);
 return (
   
        (() => {
          switch (variant) {
           case 'h1':
              return <h1 className={`avishka-ui--typography ${color?`avishka-ui--${color}`:'avishka-ui--text-black'}${className?className:''}`}>{children}</h1>;  
                case 'h2':
              return <h2 className={`avishka-ui--typography ${color?`avishka-ui--${color}`:'avishka-ui--text-black'}${className?className:''}`}>{children}</h2>;  
                case 'h3':
              return <h3 className={`avishka-ui--typography ${color?`avishka-ui--${color}`:'avishka-ui--text-black'}${className?className:''}`}>{children}</h3>;  
                case 'h4':
              return <h4 className={`avishka-ui--typography ${color?`avishka-ui--${color}`:'avishka-ui--text-black'}${className?className:''}`}>{children}</h4>;  
        case 'h5':
              return <h5 className={`avishka-ui--typography ${color?`avishka-ui--${color}`:'avishka-ui--text-black'}${className?className:''}`}>{children}</h5>;  
        case 'h6':
              return <h6 className={`avishka-ui--typography ${color?`avishka-ui--${color}`:'avishka-ui--text-black'}${className?className:''}`}>{children}</h6>;
            default:
              return <></>;
          }
        })()
      
  );
};


export default Typography;
