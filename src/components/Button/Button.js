import React from 'react'

export default  (props) => {
  return <button onClick={() => props.onClick} className={props.classname}>{props.children}</button>
};