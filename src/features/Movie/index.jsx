import { Box, Container } from '@material-ui/core';
import SearchFeature from 'features/Search';
import React, { useEffect, useState } from 'react';
import movieApi from '../../api/movieApi';
import Loading from '../../components/Loading';
import MovieList from './components/MovieList';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('man');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const data = await movieApi.getByName(searchTerm);

        setMovieList(data || []);
        setLoading(false);
      } catch (error) {
        console.log(`Ftailed to fetch movie list ${error}`);
      }
    })();
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Box style={{ margin: '3rem' }}>
            <SearchFeature search={handleSearch} />
          </Box>
          {movieList.length > 0 && <MovieList movieList={movieList} />}
        </Container>
      )}
    </div>
  );
}

export default Movie;
