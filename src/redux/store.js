// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import {rootReducer} from './reducers'; // Ensure you import the root reducer correctly

const persistConfig = {
    key: 'persist-root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = (context) => {
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    store.__persistor = persistStore(store); // This is necessary for `next-redux-wrapper`
    return store;
};

export const wrapper = createWrapper(makeStore);
