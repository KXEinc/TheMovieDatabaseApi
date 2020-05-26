import React, { useEffect } from 'react'
import { posterURL } from "../../API/API";


const AboutMovieDrawer = ({ movie: { adult, original_language, overview, poster_path, release_date, title }, clearSearchList, clearInput }) => {
  //eslint-disable-next-line
  useEffect(() => {
    clearInput();
    clearSearchList();
  }, [])
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


export default AboutMovieDrawer;
