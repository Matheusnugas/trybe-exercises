// Importe o método applyMiddleware
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// Importe o redux-thunk
import rootReducer from '../reducers';
import {composeWithDevTools } from 'redux-devtools-extension'

// Aplique o middleware
const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;
