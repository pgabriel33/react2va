import {combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import equipmentReducer from './reducers/equipmentReducer';

const rootReducer = combineReducers({
    equipmentState: equipmentReducer
});


const persistedState = localStorage.getItem('applicationState')
    ? JSON.parse(localStorage.getItem('applicationState'))
    : {};


const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(function () {
    localStorage.setItem('applicationState', JSON.stringify(store.getState()));
});

export default store;
