import React from "react";


export default ({onchange, value, className, type, onblur, placeholder, onkeydown, readonly, tabindex, onfocus}) => (
  <input
    tabIndex={tabindex}
    onChange={onchange}
    onKeyDown={onkeydown}
    onFocus={onfocus}
    onBlur={onblur}
    value={value}
    className={className}
    type={type}
    placeholder={placeholder}
    readOnly={readonly}
  />
);
