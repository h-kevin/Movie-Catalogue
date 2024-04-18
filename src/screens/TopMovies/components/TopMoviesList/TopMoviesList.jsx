import React from "react";
import dayjs from "dayjs";
import { useNavigate, useOutletContext } from "react-router-dom";

import useTopMovies from "../../hooks/useTopMovies";
import LoadingIndicator from "../../../../components/common/LoadingIndicator/LoadingIndicator";
import NoContent from "../../../../components/common/NoContent/NoContent";
import MovieCard from "../../../../components/common/MovieCard/MovieCard";
import imageUrlParts from "../../../../constants/imageUrlParts";
import movieGenres from "../../../../constants/movieGenres";
import { routeParts } from "../../../../constants/routes";

const TopMoviesList = () => {
  const navigate = useNavigate();

  const { favoriteMovieIds, toggleFavorite } = useOutletContext();

  const { topMovies, loading } = useTopMovies();

  if (loading) {
    return <LoadingIndicator />;
  }

  if (!topMovies?.length) {
    return <NoContent message="No movies to show!" />;
  }

  return (
    <div className="top-movies-list-container">
      {topMovies?.map((movie) => (
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

export default TopMoviesList;
