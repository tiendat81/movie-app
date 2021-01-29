import { Box, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from '../MovieCard';

MovieList.propTypes = {
  movieList: PropTypes.array.isRequired,
};

MovieList.defaultProps = {
  movieList: [],
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  // custom css
  movieList: {
    margin: 'auto',
  },
}));

function MovieList({ movieList }) {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.movieList}>
        <Grid container spacing={3}>
          {movieList.map((movie, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default MovieList;
