import React from "react";
import dayjs from "dayjs";
import { useOutletContext } from "react-router-dom";

import useMoviesData from "../../hooks/useMoviesData";
import MovieCard from "../../../../components/common/MovieCard/MovieCard";
import movieGenres from "../../../../constants/movieGenres";
import imageUrlParts from "../../../../constants/imageUrlParts";

const FavoriteMovies = () => {
  const { favoriteMovieIds, toggleFavorite } = useOutletContext();

  const { moviesData, loading } = useMoviesData(favoriteMovieIds);

  if (loading) return <p>Loading...</p>;

  if (!moviesData?.length) return <p>No favorite movies yet!</p>;

  return (
    <div className="favorite-movies-container">
      {moviesData?.map((movie) => (
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

export default FavoriteMovies;
