import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

MovieCard.defaultProps = {
  movie: {},
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

function MovieCard({ movie }) {
  const classes = useStyles();

  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={movie.Poster}
        title={movie.Title}
        style={{ height: '400px' }}
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="h4">
          {movie.Title} - {movie.Year}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
