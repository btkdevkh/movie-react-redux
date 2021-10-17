import { useEffect, useState } from 'react';
import { TextField, InputAdornment, FormControl, FormControlLabel, FormLabel, Checkbox, FormGroup, Box } from '@mui/material';
import { Search, LocalMovies } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { listMovies, searchMovies } from '../actions/movieActions';

const MovieSearch = () => {
  const dispatch = useDispatch();
  const movieList = useSelector(state => state.movieList);
  const { movies } = movieList;

  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState(false);

  const [categories, setCategories] = useState({
    comedy: false,
    animation: false,
    thriller: false,
    drame: false
  });

  const handleCheck = (e) => {
    setCategories({
      ...categories,
      [e.target.name]: e.target.checked
    })

    if(e.target.checked) {
      dispatch(searchMovies(movies, e.target.name.toLowerCase(), e.target.checked));
      dispatch(listMovies());
    } else {
      dispatch(searchMovies(movies, e.target.name.toLowerCase(), e.target.checked));
      dispatch(listMovies())
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();

    if(!keyword) {
      setError(true);
      setKeyword('')
      setCategories({
        ...categories,
        comedy: false,
        animation: false,
        thriller: false,
        drame: false,
      })

      dispatch(searchMovies(movies, keyword, false));
      dispatch(listMovies());
    } else {
      setError(false);

      dispatch(searchMovies(movies, keyword.trim().toLowerCase(), true));
      dispatch(listMovies());
    }
  }

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch, keyword])

  const { comedy, animation, thriller, drame } = categories;

  return (
    <form 
      noValidate 
      autoComplete="off"
      style={{ marginBottom: '15px' }}
    >
      <TextField
        onKeyUp={handleSearch}
        onChange={(e) => setKeyword(e.target.value)}
        size="small"
        variant="outlined"
        fullWidth
        error={error}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalMovies />
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Box
        my={2}
        p={2}
        display="flex"
        bgcolor="rgba(0,0,0,0.1)"
        borderRadius="5px"
      >
        <Box m="auto">
          <FormControl>
            <FormLabel>Movies Catégories</FormLabel>
            <FormGroup>
              <FormControlLabel 
                control={<Checkbox checked={comedy} onChange={handleCheck} />} 
                label="Comedy"
                name="comedy"
              />
              <FormControlLabel 
                control={<Checkbox checked={animation} onChange={handleCheck} />} 
                label="Animation" 
                name="animation"
              />
              <FormControlLabel 
                control={<Checkbox checked={thriller} onChange={handleCheck} />} 
                label="Thriller"
                name="thriller"
              />
              <FormControlLabel 
                control={<Checkbox checked={drame} onChange={handleCheck} />} 
                label="Drame"
                name="drame"
              />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </form>
  )
}

export default MovieSearch;
