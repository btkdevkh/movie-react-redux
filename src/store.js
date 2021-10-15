import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieListReducer } from './reducers/movieReducers';
import { voteReducer } from './reducers/voteReducers';

const reducer = combineReducers({
  movieList: movieListReducer,
  voteReducer
});

const initalState = {};

const middleware = [thunk];

const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
