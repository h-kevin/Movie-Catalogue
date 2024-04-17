import React from "react";
import dayjs from "dayjs";
import { useOutletContext } from "react-router-dom";

import useTopBoxOfficeMovies from "../../hooks/useTopBoxOfficeMovies";
import MovieCard from "../../../../components/common/MovieCard/MovieCard";
import imageUrlParts from "../../../../constants/imageUrlParts";
import movieGenres from "../../../../constants/movieGenres";

const TopBoxOfficeMovies = () => {
  const { favoriteMovieIds, toggleFavorite } = useOutletContext();

  const { topBoxOfficeMovies, loading } = useTopBoxOfficeMovies();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="top-box-office-movies-container">
      {topBoxOfficeMovies?.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date ? dayjs(movie.release_date).year() : ""}
          genres={movie.genre_ids?.map(
            (id) => movieGenres.find((genre) => genre.id === id)?.name
          )}
          rating={movie.vote_average?.toFixed(1)}
          image={`${imageUrlParts.BASE_URL}${movie.poster_path}`}
          isFavorite={favoriteMovieIds?.includes(movie.id)}
          toggleFavorite={() => toggleFavorite(movie.id)}
          onClick={() => navigate(`${routeParts.DETAILS}/${movie.id}`)}
        />
      ))}
    </div>
  );
};

export default TopBoxOfficeMovies;
