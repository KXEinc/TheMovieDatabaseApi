import React from "react";
import { connect } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";

const Similar = ({ similar }) => {
  console.log("SIMILAR", similar);
  return similar.length > 0 ? (
    <Carousel results={similar} />
  ) : (
    <h2>No similar</h2>
  );
};

const mapStateToProps = (state) => {
  return { similar: state.display.similar };
};

export default connect(mapStateToProps)(Similar);
