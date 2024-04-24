import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import useMovieDetails from "./hooks/useMovieDetails";
import Dialog from "../../components/common/Dialog/Dialog";
import extractMovieData from "./helpers/extractMovieData";
import LoadingIndicator from "../../components/common/LoadingIndicator/LoadingIndicator";
import CloseButton from "./components/CloseButton/CloseButton";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import TitleGroup from "./components/TitleGroup/TitleGroup";
import DataRows from "./components/DataRows/DataRows";

const MovieDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const movieId = params.movieId ? Number(params.movieId) : null;

  const { favoriteMovieIds, toggleFavorite } = useOutletContext();

  const { movieDetails, loading } = useMovieDetails(movieId);

  useEffect(() => {
    if (params.movieId) {
      setOpen(true);
    }
  }, [params]);

  const {
    trailerUrl,
    movieTitle,
    overview,
    isFavorite,
    rating,
    runTime,
    releaseDate,
    genres,
    countriesOfOrigin,
    language,
    director,
    cast,
    writer,
    productionCompanies,
  } = extractMovieData(movieDetails, favoriteMovieIds);

  return (
    <Dialog open={open} onClose={() => navigate(-1)}>
      <div className="movie-details-container">
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            <CloseButton closeModal={() => setOpen(false)} />
            <VideoPlayer trailerUrl={trailerUrl} />
            <TitleGroup
              movieTitle={movieTitle}
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
              movieId={movieId}
            />
            <DataRows
              overview={overview}
              rating={rating}
              runTime={runTime}
              releaseDate={releaseDate}
              genres={genres}
              countriesOfOrigin={countriesOfOrigin}
              language={language}
              director={director}
              cast={cast}
              writer={writer}
              productionCompanies={productionCompanies}
            />
          </>
        )}
      </div>
    </Dialog>
  );
};

export default MovieDetails;
