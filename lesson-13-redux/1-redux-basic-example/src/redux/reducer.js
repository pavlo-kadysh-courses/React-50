import { ADD_BOOK, REMOVE_BOOK, SET_FILTER } from "./types";

const initialState = {
    books: [],
    filter: ""
};

const reducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case ADD_BOOK:
            const newBooks = [...store.books, payload];
            return { ...store, books: newBooks }
        case REMOVE_BOOK:
            const result = store.books.filter((item) => item.id !== payload);
            return { ...store, books: result };
        case SET_FILTER:
            return { ...store, filter: payload }
        default: 
            return store;

    }
}

export default reducer;