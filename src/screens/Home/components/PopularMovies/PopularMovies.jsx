import React from "react";
import dayjs from "dayjs";
import { useOutletContext } from "react-router-dom";

import usePopularMovies from "../../hooks/usePopularMovies";
import MovieCard from "../../../../components/common/MovieCard/MovieCard";
import movieGenres from "../../../../constants/movieGenres";
import imageUrlParts from "../../../../constants/imageUrlParts";

const PopularMovies = () => {
  const { favoriteMovieIds, toggleFavorite } = useOutletContext();

  const { popularMovies, loading } = usePopularMovies();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="popular-movies-container">
      {popularMovies?.map((movie) => (
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
        />
      ))}
    </div>
  );
};

export default PopularMovies;
