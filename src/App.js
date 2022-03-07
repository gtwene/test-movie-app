import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=9b40133b";

const movieSet = {
  title: "My First Movie App"
}

const App = () => {
  const [ searchMovie, setSearchMovie ] = useState([]);

  const getMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.SearchIcon)
  }

  useEffect(() => {
    getMovies('Avengers')
  }, [])
  
  return (
    <div className="app">
      <h1>{movieSet.title}</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search Movie Title"
          value=""
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <Movie />
      </div>
    </div>
  );
};

export default App;
