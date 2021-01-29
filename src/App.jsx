import { Box } from '@material-ui/core';
import PageNotFound from 'components/PageNotFound';
import Movie from 'features/Movie';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <Box>
      <Header />
      <Switch>
        <Route exact path="/" component={Movie} />
        <Route component={PageNotFound} />
      </Switch>
    </Box>
  );
}

export default App;
