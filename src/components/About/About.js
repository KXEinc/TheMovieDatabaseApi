import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  allowInput,
  hideNavElements,
  prohibitInput,
  showNavElements,
} from "../../redux/actions/uiActions";
import {
  clearSearchList,
  inputValueChange,
} from "../../redux/actions/displayActions";
import { version } from '../../variables/variables'

const About = (props) => {
  useEffect(() => {
    if (props.inputValue.length > 0) {
      props.clearSearchList();
      props.inputValueChange();
    }
    if (props.showNavElements) {
      props.hideNavElements();
    }
    //props.clearSearch();
    props.prohibitInput();
    return () => {
      props.allowInput();
      props.displayNavElements();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={"about about_size about_bg-color"}>
      <p className={"about__text"}>
        This is my <strong>AWESOME</strong> project!
        <br />I hope you will like it!
        <br />
        Version: {version}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.display.searchInputValue,
    showNavElements: state.ui.showNavElements,
  };
};

const mapReducerToProps = (reducer) => {
  return {
    hideNavElements: () => reducer(hideNavElements()),
    clearSearchList: () => reducer(clearSearchList()),
    inputValueChange: () => reducer(inputValueChange()),
    allowInput: () => reducer(allowInput()),
    prohibitInput: () => reducer(prohibitInput()),
    displayNavElements: () => reducer(showNavElements()),
  };
};

export default connect(mapStateToProps, mapReducerToProps)(About);
