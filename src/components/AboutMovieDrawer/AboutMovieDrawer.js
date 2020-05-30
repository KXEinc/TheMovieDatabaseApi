import React from "react";
import { posterURLw342 } from "../../API/API";

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
    vote_average,
  } = {},
  genreList,
}) => {
  //eslint-disable-next-line
  const genresOfMovieId =
    genres.length > 0 ? genres.map((el) => el.id) : genre_ids;
  const poster = poster_path
    ? posterURLw342.concat(poster_path)
    : "/assert/noimage/noimageavailable.gif";

  const genresList = genreList.filter((el) => genresOfMovieId.includes(el.id));

  return (
    <div className={"about-movie-card"}>
      <img className={"about-movie-card__poster"} src={poster} alt="poster" />
      <div className={"about-movie-card__information"}>
        <h2>{title}</h2>
        <h3>
          Release date:{" "}
          <span className={"about-movie-card__text"}>{release_date}</span>
        </h3>
        <h3>
          Original language:{" "}
          <span className={"about-movie-card__text"}>{original_language}</span>
        </h3>
        <h3>
          Vote average:{" "}
          <span className={"about-movie-card__text"}>{vote_average}</span>
        </h3>
        <h3>
          Genre:{" "}
          {genresList.map((el, i) => (
            <span className={"about-movie-card__text"} key={i}>
              {el.name}
            </span>
          ))}
        </h3>
        <h3>
          Adult: <strong>{adult ? "YES" : "NO"}</strong>
        </h3>
        <h3>Description:</h3>
        <p className={"about-movie-card__description"}>{overview}</p>
      </div>
    </div>
  );
};

export default AboutMovieDrawer;
