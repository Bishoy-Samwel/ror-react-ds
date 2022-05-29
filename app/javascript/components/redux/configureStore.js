/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  auth: (state, action) => 'testing',
});

export const configureStore = () => createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
