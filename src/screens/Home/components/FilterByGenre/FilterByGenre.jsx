import { useEffect, useState } from "react";
import movieGenres from "../../../../constants/movieGenres";

const FilterByGenre = ({ filterByGenres }) => {
  const [selectedGenres, setSelectedGenres] = useState();

  const handleGenreClick = (genreId) => {
    if (selectedGenres?.includes(genreId)) {
      setSelectedGenres((prevSelectedGenres) =>
        prevSelectedGenres?.filter((id) => id !== genreId)
      );
    } else {
      setSelectedGenres((prevSelectedGenres) => [
        ...(prevSelectedGenres || []),
        genreId,
      ]);
    }
  };

  useEffect(() => {
    if (selectedGenres) {
      filterByGenres(selectedGenres);
    }
  }, [filterByGenres, selectedGenres]);

  return (
    <ul className="filter-by-genre-container">
      {movieGenres.map((genre) => (
        <li
          key={genre.id}
          onClick={() => handleGenreClick(genre.id)}
          className={`genre ${
            selectedGenres?.includes(genre.id) ? "active" : ""
          }`}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default FilterByGenre;
