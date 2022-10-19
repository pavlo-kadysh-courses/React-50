import { ADD_BOOK, REMOVE_BOOK } from "./books-types";

const initialState = [];

const booksReducer = (store = initialState, { type, payload }) => {
    switch(type) {
        case ADD_BOOK:
            return [ ...store, payload ]
        case REMOVE_BOOK:
            const result = store.filter(item => item.id !== payload);
            return [ ...store, result ];
        default: 
            return store;
    }
}

export default booksReducer;