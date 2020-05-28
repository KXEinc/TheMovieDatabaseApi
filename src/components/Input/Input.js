import React from "react";


export default ({onchange, value, className, type, placeholder, onkeydown, readonly, tabindex, onfocus}) => (
  <input
    tabIndex={tabindex}
    onChange={onchange}
    onKeyDown={onkeydown}
    onFocus={onfocus}
    value={value}
    className={className}
    type={type}
    placeholder={placeholder}
    readOnly={readonly}
  />
);
