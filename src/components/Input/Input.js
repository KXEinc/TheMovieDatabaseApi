import React from "react";


export default ({onchange, value, className, type, placeholder, onkeydown, readonly, tabindex}) => (
  <input
    tabIndex={tabindex}
    onChange={onchange}
    onKeyDown={onkeydown}
    value={value}
    className={className}
    type={type}
    placeholder={placeholder}
    readOnly={readonly}
  />
);
