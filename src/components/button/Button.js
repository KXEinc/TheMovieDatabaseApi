import React from 'react'

export default  (props) => {
  return <button onClick={() => props.onClick} className={"navbar__btn navbar__btn_ml3"}>{props.children}</button>
};