import React, { useEffect } from "react";
import "./App.css";

const Filter = ({ setActiveGenre, activeGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div>
      <div className="buttons-container">
        {/* those numbers represents each category in the api that I use */}
        <button
          className={activeGenre === 0 ? "active" : ""}
          onClick={() => setActiveGenre(0)}
        >
          All
        </button>
        <button
          className={activeGenre === 35 ? "active" : ""}
          onClick={() => setActiveGenre(35)}
        >
          Comedy
        </button>
        <button
          className={activeGenre === 28 ? "active" : ""}
          onClick={() => setActiveGenre(28)}
        >
          Action
        </button>
      </div>
    </div>
  );
};

export default Filter;
