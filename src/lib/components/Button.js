import React from 'react';

const Button = (props) => {
	console.log(props)
   return (
      <button className={`${props.color}${props.outline?' outline':''}${props.shadow?' shadow':''}`} {...props}/>
   )
}
export default Button;