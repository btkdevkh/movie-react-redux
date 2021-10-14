import { useState, useEffect } from 'react';
import { TextField, InputAdornment, FormControl, FormControlLabel, FormLabel, Checkbox, FormGroup, Box } from '@mui/material';
import { Search, LocalMovies } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { listMovies, filterMovies, searchMovies } from '../actions/movieActions';

const MovieSearch = () => {
  const dispatch = useDispatch();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const [categories, setCategories] = useState({
    comedy: false,
    animation: false,
    thriller: false,
    drame: false
  });

  const { comedy, animation, thriller, drame } = categories;

  const handleCheckbox = (e) => {
    setCategories({
      ...categories,
      [e.target.name]: e.target.checked
    })

    if(e.target.checked) dispatch(filterMovies(e.target.name));
    else dispatch(listMovies());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    if(!searchTerm) {
      setError(true);
      return;
    }

    dispatch(searchMovies(searchTerm.trim().toLowerCase()));
  }

  useEffect(() => {
    dispatch(listMovies());
  }, [dispatch, searchTerm])

  return (
    <form 
      onSubmit={handleSubmit}
      onKeyUp={handleSubmit}
      noValidate 
      autoComplete="off"
      style={{ marginBottom: '15px' }}
    >
      <TextField 
        onChange={(e) => setSearchTerm(e.target.value)}
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
                control={<Checkbox checked={comedy} onChange={handleCheckbox} />} 
                label="Comedy"
                name="comedy"
              />
              <FormControlLabel 
                control={<Checkbox checked={animation} onChange={handleCheckbox} />} 
                label="Animation" 
                name="animation"
              />
              <FormControlLabel 
                control={<Checkbox checked={thriller} onChange={handleCheckbox} />} 
                label="Thriller"
                name="thriller"
              />
              <FormControlLabel 
                control={<Checkbox checked={drame} onChange={handleCheckbox} />} 
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
