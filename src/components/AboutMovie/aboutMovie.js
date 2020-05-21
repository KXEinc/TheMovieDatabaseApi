import React from "react";
import { connect } from "react-redux";
import { posterURL } from "../../API/API";

const AboutMovie = ({ movie }) => {
  return (
    <div className={"about-movie-card about-movie-card_center"}>
      <img src={posterURL + movie.poster_path} alt="poster" />
      <h2>{movie.title}</h2>
      <h3>{movie.release_date}</h3>
      <p>{movie.original_language}</p>
      <p>
        Adult: <bold>{movie.adult ? "YES" : "NO"}</bold>
      </p>
      <p>{movie.overview}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movies[state.movie],
  };
};

export default connect(mapStateToProps)(AboutMovie);
