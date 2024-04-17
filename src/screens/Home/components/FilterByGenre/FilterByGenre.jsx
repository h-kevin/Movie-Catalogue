import React from "react";
import movieGenres from "../../../../constants/movieGenres";

const FilterByGenre = () => {
  return (
    <ul className="filter-by-genre-container">
      {movieGenres.map((genre) => (
        <li key={genre.id} className="genre">
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterByGenre;
