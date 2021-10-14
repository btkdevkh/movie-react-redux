import { Fragment, useState } from 'react';
import MovieList from '../components/MovieList';
import MovieSearch from '../components/MovieSearch';
import MoviePagination from '../components/MoviePagination';

const HomeScreen = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(4);

  return (
    <Fragment>
      <MovieSearch />
      <MovieList 
        min={min} 
        max={max} 
      />
      <br /><br />
      <MoviePagination 
        min={min} 
        max={max} 
        setMin={setMin} 
        setMax={setMax} 
      />
    </Fragment>
  )
}

export default HomeScreen;
