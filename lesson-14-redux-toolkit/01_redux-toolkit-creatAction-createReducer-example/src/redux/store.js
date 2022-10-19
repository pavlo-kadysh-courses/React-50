import { configureStore } from '@reduxjs/toolkit';

// reducers
import bookReducer from "./books/books-reducer";
import filterReducer from "./filter/filter-reducer";

const store = configureStore({
    reducer: {
        books: bookReducer,
        filter: filterReducer
    }
});

export default store;