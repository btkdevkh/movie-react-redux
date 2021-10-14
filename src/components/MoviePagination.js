import { useSelector } from 'react-redux';
import { Stack, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const MoviePagination = ({ min, max, setMin, setMax }) => {
  const movieList = useSelector(state => state.movieList);
  const { movies } = movieList;
  
  const handleClickNext = () => {
    if(max <= movies.length - 1){
      setMin(min => min + 4);
      setMax(max => max + 4);
    }
  }

  const handleClickPrev = () => {
    if(min >= 4){
      setMin(min => min - 4);
      setMax(max => max - 4);
    }
  }

  const handleSelectChange = (e) => {
    setMax(e.target.value);
  }

  return (
    <Stack 
      spacing={2}
      direction="row" 
      justifyContent="center"
    >
      <Box sx={{ width: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Films / Page</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={max}
            label="Films / Page"
            onChange={handleSelectChange}
          >
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button 
        color="primary"
        variant="contained"
        onClick={handleClickPrev}
      >
        Précédent
      </Button>
      
      <Button
        color="primary"
        variant="contained"
        onClick={handleClickNext}
      >
        Suivant
      </Button>
    </Stack>
  )
}

export default MoviePagination;
