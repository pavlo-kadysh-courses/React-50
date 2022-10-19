import { createReducer } from "@reduxjs/toolkit";
import { addBook, removeBook } from "./books-actions";

const bookReducer = createReducer([], {
    [addBook.type]: (store, {payload}) => {
        store.push(payload);
    },
    [removeBook.type]: (store, { payload }) => store.filter(({id}) => id !== payload),
})

export default bookReducer;

// const initialState = [];

// const booksReducer = (store = initialState, { type, payload }) => {
//     switch(type) {
//         case ADD_BOOK:
//             return [ ...store, payload ]
//         case REMOVE_BOOK:
//             const result = store.filter(item => item.id !== payload);
//             return [ ...store, result ];
//         default: 
//             return store;
//     }
// }

// export default booksReducer;