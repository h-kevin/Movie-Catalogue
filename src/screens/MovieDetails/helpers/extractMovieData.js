import dayjs from "dayjs";

import videoPlayerUrlParts from "../../../constants/videoPlayerUrlParts";
import languages from "../../../constants/languages";

const extractMovieData = (movie, favoriteMovieIds) => {
  const basePlayerUrl = videoPlayerUrlParts.BASE_URL;
  const videoKey = movie?.videos?.find(
    (video) => video.type === "Trailer" || video.type === "Teaser"
  )?.key;
  const query = `${videoPlayerUrlParts.DEFAULT_QUERY}&playlist=${videoKey}`;
  const trailerUrl = `${basePlayerUrl}/${videoKey}?${query}`;
  const movieTitle = movie?.title;
  const overview = movie?.overview;
  const isFavorite = favoriteMovieIds?.includes(movie?.id);
  const rating = `${movie?.vote_average?.toFixed(1)} / 10`;
  const runTime = movie?.runtime
    ? dayjs()
        .startOf("day")
        .add(movie.runtime, "minutes")
        .format("H [hr] m [min]")
    : "";
  const releaseDate = movie?.release_date
    ? dayjs(movie.release_date).format("MMMM D, YYYY")
    : "";
  const genres = movie?.genres?.map((genre) => genre.name)?.join(", ");
  const countriesOfOrigin = movie?.production_countries
    .map((country) => country.name)
    .join(", ");
  const language = languages.find(
    (lang) => lang.iso_639_1 === movie?.original_language
  )?.english_name;
  const director = movie?.crew?.find((crew) => crew.job === "Director")?.name;
  const cast = movie?.cast
    ?.slice(0, 10)
    ?.map((actor) => actor.name)
    ?.join(", ");
  const writer = movie?.crew
    ?.filter((crew) => crew.job === "Writer" || crew.job === "Screenplay")
    ?.map((writer) => writer.name)
    ?.join(", ");
  const productionCompanies = movie?.production_companies
    ?.map((company) => `- ${company.name}`)
    ?.join("\n");

  return {
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
  };
};

export default extractMovieData;
