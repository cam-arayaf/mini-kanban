import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './../reducers';

const initialState = { notes: [{ _id: 1, type: 'ideas', text: 'Example' }] };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));