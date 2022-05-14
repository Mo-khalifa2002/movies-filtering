import React from "react";
import { Fade, Flip } from "react-reveal";

const Movieee = ({ movie }) => {
  return (
    <div className="movieee">
      <Flip left>
        <Fade bottom left>
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt=""
          />
        </Fade>
      </Flip>
      <Flip left>
        <Fade bottom>
          <h1>
            {movie.original_title ? movie.original_title : <div>no title</div>}
          </h1>
        </Fade>
      </Flip>
    </div>
  );
};

export default Movieee;
