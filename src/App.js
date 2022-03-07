import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=9b40133b";

const movieSet = {
  title: "My First Movie App",
};

const App = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchMovieItem, setSearchMovieItem] = useState("");

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setSearchMovie(data.Search);
  };

  useEffect(() => {
    getMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>{movieSet.title}</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search Movie Title"
          value={searchMovieItem}
          onChange={(e) => setSearchMovieItem(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => getMovies(searchMovieItem)}
        />
      </div>
      {searchMovie?.length > 0 ? (
        <div className="container">
          {searchMovie.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No Movies Available </h3>
        </div>
      )}
    </div>
  );
};

export default App;
