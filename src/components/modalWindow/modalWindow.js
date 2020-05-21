import React from "react";
import { connect } from 'react-redux'
import { closeModal } from '../../redux/actions/actions'

const ModalWindow = (props) => (
  <div className={'modalWindow'} onClick={() => props.CloseModal()}>{props.children}</div>
);

const mapReducerToProps = reducer => {
  return {
    CloseModal: () => reducer(closeModal())
  }
};

export default connect(null, mapReducerToProps)(ModalWindow);
