import React from 'react';
const Badge = (props) => {
   return (
      <div className={`badge ${props.color}${props.outline?' outline':''}${props.shadow?' shadow':''}`} {...props}/>
     )
}
export default Badge;