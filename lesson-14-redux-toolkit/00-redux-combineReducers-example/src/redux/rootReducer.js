import { combineReducers } from "redux";

import booksReducer from "./books/books-reducer";
import filterReducer from "./filter/filter-reducer";

const rootReducer = combineReducers({
    books: booksReducer,
    filter: filterReducer
});

export default rootReducer;