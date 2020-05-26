import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  allowInput,
  hideFooter,
  prohibitInput, showFooter,
} from '../../redux/actions/uiActions'
import { clearSearchList, inputValueChange } from '../../redux/actions/displayActions'


const About = (props) => {
  useEffect(() => {
    if (props.inputValue.length > 0) {
      props.clearSearchList();
      props.inputValueChange();
    }
    props.hideFooter();
    //props.clearSearch();
    props.prohibitInput();
    return () => {
      props.allowInput();
      props.showFooter()
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className={"about"}>
      <p className={"about__text"}>
        This is my <strong>AWESOME</strong> project!
        <br />I hope you will like it!
        <br />
        Version: beta 0.1.4
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {inputValue: state.display.searchInputValue}
}

const mapReducerToProps = (reducer) => {
  return {
    hideFooter: () => reducer(hideFooter()),
    clearSearchList: () => reducer(clearSearchList()),
    inputValueChange: () => reducer(inputValueChange()),
    allowInput: () => reducer(allowInput()),
    prohibitInput: () => reducer(prohibitInput()),
    showFooter: () => reducer(showFooter())
  };
};

export default connect(mapStateToProps, mapReducerToProps)(About);
