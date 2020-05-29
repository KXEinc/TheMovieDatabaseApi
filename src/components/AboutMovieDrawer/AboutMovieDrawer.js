import React from "react";
import { posterURL } from "../../API/API";

const AboutMovieDrawer = ({
  movie: {
    adult,
    original_language,
    overview,
    poster_path,
    release_date,
    title,
    genre_ids,
    genres = [],
  } = {},
  genreList,
}) => {
  //eslint-disable-next-line
  const genresOfMovieId =
    genres.length > 0 ? genres.map((el) => el.id) : genre_ids;
  const poster = poster_path
    ? posterURL.concat(poster_path)
    : "/assert/noimage/noimageavailable.gif";

  const genresList = genreList.filter((el) => genresOfMovieId.includes(el.id));

  return (
    <div className={"about-movie-card about-movie-card_center"}>
      <img src={poster} alt="poster" />
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <h3>{original_language}</h3>
      <h3>
        Genre:{" "}
        {genresList.map((el, i) => (
          <span key={i}>&emsp;{el.name}&emsp;</span>
        ))}
      </h3>
      <h3>
        Adult: <strong>{adult ? "YES" : "NO"}</strong>
      </h3>
      <p>{overview}</p>
    </div>
  );
};

export default AboutMovieDrawer;