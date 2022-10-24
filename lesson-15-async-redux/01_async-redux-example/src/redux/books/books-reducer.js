import { createReducer } from "@reduxjs/toolkit";
import actions from "./books-actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const bookReducer = createReducer(initialState, {
    [actions.fetchBooksLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.fetchBooksSuccess]: (store, { payload }) => {
        store.loading = false;
        store.items = payload;
    },
    [actions.fetchBooksError]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    },
    [actions.addBookLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.addBookSuccess]: (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
    },
    [actions.addBookError]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    },
    [actions.removeBookLoading]: (store) => {
        store.loading = true;
        store.error = null;
    },
    [actions.removeBooksSuccess]: (store, { payload }) => {
        store.loading = false;
        store.items = store.items.filter(item => item.id !== payload);
    },
    [actions.removeBooksError]: (store, {payload}) => {
        store.loading = false;
        store.error = payload;
    },
})

export default bookReducer;
