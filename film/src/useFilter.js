import { useState, useEffect } from 'react';

const useFilter = (initialMovies) => {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState('');
  const [minStarsFilter, setMinStarsFilter] = useState(null);

  useEffect(() => {
    filterMovies();
  }, [titleFilter, minStarsFilter]);

  const filterMovies = () => {
    let filteredMovies = initialMovies;

    // Filter by title
    if (titleFilter) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.name.toLowerCase().includes(titleFilter.toLowerCase())
      );
    }

    // Filter by minimum stars
    if (minStarsFilter !== null) {
      filteredMovies = filteredMovies.filter(
        (movie) => movie.rating >= minStarsFilter && movie.rating >= minStarsFilter 
      );
    }

    // Update the movies state
    setMovies(filteredMovies);
  };

  return {
    movies,
    setMovies,
    titleFilter,
    minStarsFilter,
    setTitleFilter,
    setMinStarsFilter,
  };
};

export default useFilter;