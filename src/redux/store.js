// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import {rootReducer} from './reducers';
import {useSelector} from "react-redux";

const persistConfig = {
    key: 'persist-root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = (context) => {
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    store.__persistor = persistStore(store);
    return store;
};

export const wrapper = createWrapper(makeStore);
export const getStateFromSelector =selector=>useSelector(cs => cs[selector]);
