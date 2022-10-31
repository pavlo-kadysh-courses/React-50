import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/auth-slice'
import booksReducer from './books/books-slice';
import filterReducer from './filter/filter-reducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        books: booksReducer,
        filter: filterReducer,
    }
})

export default store;


