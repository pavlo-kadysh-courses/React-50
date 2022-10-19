import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// reducers
import bookReducer from './books/books-reducer';

const booksPersistConfig = {
        key: 'root',
        storage,
    }


const persistedBooksReducer = persistReducer(booksPersistConfig, bookReducer);

export const store = configureStore({
    reducer: {
        books: persistedBooksReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);