import { 
  MOVIE_LIST_REQUEST, 
  MOVIE_LIST_SUCCESS, 
  MOVIE_LIST_FAIL,
  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_FAIL,
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
} from '../constants/movieConstants';
import { movies$ } from '../data/movies';

import ocean from '../assets/images/ocean.jpg';
import midnight from '../assets/images/midnight.jpg';
import indestructibles from '../assets/images/indestructibles.jpg';
import sansbruit from '../assets/images/sansbruit.jpg';
import creedii from '../assets/images/creedii.jpg';
import pulp from '../assets/images/pulp.jpg';
import seven from '../assets/images/seven.jpg';
import inception from '../assets/images/inception.jpg';
import gonegirl from '../assets/images/gonegirl.jpg';

export const listMovies = (items = []) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST })

    const datas = await movies$;

    // Computed Datas
    const dataForlatted = [...datas];
    dataForlatted[0].img = ocean;
    dataForlatted[1].img = midnight;
    dataForlatted[2].img = indestructibles;
    dataForlatted[3].img = sansbruit;
    dataForlatted[4].img = creedii;
    dataForlatted[5].img = pulp;
    dataForlatted[6].img = pulp;
    dataForlatted[7].img = seven;
    dataForlatted[8].img = inception;
    dataForlatted[9].img = gonegirl;
    
    dispatch({ 
      type: MOVIE_LIST_SUCCESS,
      payload: items.length === 0 ? dataForlatted : items
    })

  } catch (error) {
    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: error.message
    })
  }
}

export const deleteMovie = (id) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_DELETE_REQUEST })

    dispatch({ 
      type: MOVIE_DELETE_SUCCESS,
      payload: id
    })

  } catch (error) {
    dispatch({
      type: MOVIE_DELETE_FAIL,
      payload: error.message
    })
  }
}

export const searchMovies = (searchTerme) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_SEARCH_REQUEST })
 
    dispatch({ 
      type: MOVIE_SEARCH_SUCCESS,
      payload: searchTerme
    })

  } catch (error) {
    dispatch({
      type: MOVIE_SEARCH_FAIL,
      payload: error.message
    })
  }
}
