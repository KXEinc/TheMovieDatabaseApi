import React, { useEffect } from "react";
import { connect } from "react-redux";
import { allowInput, clearSearch, hideFooter, prohibitInput } from '../../redux/actions/actions'

const About = (props) => {
  useEffect(() => {
    props.hideFooter();
    props.clearSearch();
    props.prohibitInput()
    return () => props.allowInput();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={"about"}>
      <p className={"about__text"}>
        This is my <strong>AWESOME</strong> project!
        <br />I hope you will like it!
        <br />
        Version: alpha 0.0.1
      </p>
    </div>
  );
};



const mapReducerToProps = (reducer) => {
  return {
    hideFooter: () => reducer(hideFooter()),
    clearSearch: () => reducer(clearSearch()),
    allowInput: () => reducer(allowInput()),
    prohibitInput: () => reducer(prohibitInput()),
  };
};

export default connect(null, mapReducerToProps)(About);
