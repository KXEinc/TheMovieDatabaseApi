import React from "react";
import { connect } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";

const Recommendations = ({ recommendations }) => {
  console.log("Recommendations", recommendations);
  return recommendations.length > 0 ? (
    <Carousel results={recommendations} />
  ) : (
    <h2>No recommendations</h2>
  );
};

const mapStateToProps = (state) => {
  return { recommendations: state.display.recommendations };
};

export default connect(mapStateToProps)(Recommendations);
