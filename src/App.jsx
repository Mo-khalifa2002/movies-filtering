import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Fade } from "react-reveal";

import "./App.css";
import Filter from "./Filter";
import Movieee from "./Movieee";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchFilteringData = async () => {
    const data = await fetch(
      ` https://api.themoviedb.org/3/trending/all/day?api_key=7945b010075499d415d561c0dee764e6`
    );

    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchFilteringData();
  }, []);

  return (
    <div className="App">
      <b className="the-header">Filtering movies with animation app</b>

      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      <Fade bottom>
        <div className="popular-movies">
          {/* filtered instead of popular */}
          {filtered.map((movie) => {
            return <Movieee key={movie.id} movie={movie} />;
          })}
        </div>
      </Fade>
    </div>
  );
};

export default App;
