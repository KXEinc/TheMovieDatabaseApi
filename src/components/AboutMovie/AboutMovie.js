import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { posterURL } from "../../API/API";
import { clearSearch } from '../../redux/actions/actions'

const AboutMovie = ({ movie: { adult, original_language, overview, poster_path, release_date, title }, clearSearch }) => {
  // eslint-disable-next-line
  useEffect(() => clearSearch(), [])
  const poster =
    poster_path
      ? posterURL.concat(poster_path)
      : "/assert/noimage/noimageavailable.gif";
  return (
    <div className={"about-movie-card about-movie-card_center"}>
      <img src={poster} alt="poster" />
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <p>{original_language}</p>
      <p>
        Adult: <strong>{adult ? "YES" : "NO"}</strong>
      </p>
      <p>{overview}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

const mapReducerToProps = reducer => {
  return {
    clearSearch: () => reducer(clearSearch())
  }
}

export default connect(mapStateToProps, mapReducerToProps)(AboutMovie);
