import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  allowInput,
  hideFooter,
  prohibitInput,
  showFooter,
} from "../../redux/actions/uiActions";
import {
  clearSearchList,
  inputValueChange,
} from "../../redux/actions/displayActions";

const About = (props) => {
  useEffect(() => {
    if (props.inputValue.length > 0) {
      props.clearSearchList();
      props.inputValueChange();
    }
    if (props.showFooter) {
      props.hideFooter();
    }
    //props.clearSearch();
    props.prohibitInput();
    return () => {
      props.allowInput();
      props.displayFooter();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={"about"}>
      <p className={"about__text"}>
        This is my <strong>AWESOME</strong> project!
        <br />I hope you will like it!
        <br />
        Version: beta 0.6.3
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.display.searchInputValue,
    showFooter: state.ui.showFooter,
  };
};

const mapReducerToProps = (reducer) => {
  return {
    hideFooter: () => reducer(hideFooter()),
    clearSearchList: () => reducer(clearSearchList()),
    inputValueChange: () => reducer(inputValueChange()),
    allowInput: () => reducer(allowInput()),
    prohibitInput: () => reducer(prohibitInput()),
    displayFooter: () => reducer(showFooter()),
  };
};

export default connect(mapStateToProps, mapReducerToProps)(About);
