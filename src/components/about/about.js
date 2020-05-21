import React, { useEffect } from "react";
import { connect } from "react-redux";
import { hideFooter, showFooter } from "../../redux/actions/actions";

const About = (props) => {
  useEffect(() => {
    props.HideFooter();
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
    ShowFooter: () => reducer(showFooter()),
    HideFooter: () => reducer(hideFooter()),
  };
};

export default connect(null, mapReducerToProps)(About);
