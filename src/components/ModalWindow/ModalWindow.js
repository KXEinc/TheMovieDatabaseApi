import React from "react";

const ModalWindow = props => {
  return (
    <div className={"modalWindow"} onClick={props.closeModal}>
      {props.children}
    </div>
  );
};

export default ModalWindow;
