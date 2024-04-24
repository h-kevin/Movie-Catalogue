import useMovieResults from "../../hooks/useMovieResults";
import { routeParts } from "../../../../constants/routes";
import SearchOutlined from "../../../../assets/icons/search-outlined.svg?react";
import Dropdown from "../Dropdown/Dropdown";

const SearchMovie = () => {
  const { query, setQuery, movieResults, loading } = useMovieResults();

  const dropdownIsOpen = query && (loading || movieResults);

  const dropdownItems = movieResults?.map((result) => ({
    name: result.title,
    path: `${routeParts.DETAILS}/${result.id}`,
  }));

  const clearQueryAndCloseDropdown = () => {
    setQuery("");
  };

  return (
    <div className="search-movie-container">
      <input
        type="text"
        value={query}
        onBlur={() => setTimeout(clearQueryAndCloseDropdown, 200)}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Find movie"
      />
      <button>
        <SearchOutlined />
      </button>
      <Dropdown
        loading={loading}
        items={dropdownItems}
        isOpen={dropdownIsOpen}
      />
    </div>
  );
};

export default SearchMovie;
