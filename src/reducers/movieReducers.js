import { 
  MOVIE_LIST_REQUEST, 
  MOVIE_LIST_SUCCESS, 
  MOVIE_LIST_FAIL,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_FAIL,
  MOVIE_FILTER_REQUEST,
  MOVIE_FILTER_SUCCESS,
  MOVIE_FILTER_FAIL,
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAIL,
} from '../constants/movieConstants';

export const movieListReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_LIST_REQUEST:
      return { 
        ...state,
        loading: true, 
      }
    case MOVIE_LIST_SUCCESS:
      return { 
        loading: false, 
        movies: action.payload 
      }
    case MOVIE_LIST_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    case MOVIE_DELETE_REQUEST:
      return { 
        ...state,
        loading: true
      }
    case MOVIE_DELETE_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        movies: state.movies.filter(movie => movie.id !== action.payload) 
      }
    case MOVIE_DELETE_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    case MOVIE_FILTER_REQUEST:
      return { 
        ...state,
        loading: true
      }
    case MOVIE_FILTER_SUCCESS:
      return { 
        ...state, 
        loading: false,
        movies: state.movies.filter(movie => movie.category.toLowerCase() === action.payload.toLowerCase())
      }
    case MOVIE_FILTER_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    case MOVIE_SEARCH_REQUEST:
      return { 
        ...state,
        loading: true
      }
    case MOVIE_SEARCH_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        movies: state.movies.filter(movie => movie.title.toLowerCase().includes(action.payload) || movie.category.toLowerCase().includes(action.payload))
      }
    case MOVIE_SEARCH_FAIL:
      return { 
        loading: false, 
        error: action.payload 
      }
    default:
      return state
  }
}
