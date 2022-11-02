import { createSlice } from "@reduxjs/toolkit";

import { fetchBooks, addBook, removeBook } from "./books-operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: {
        [fetchBooks.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [fetchBooks.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchBooks.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [addBook.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [addBook.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload);
        },
        [addBook.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [removeBook.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removeBook.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload)
        },
        [removeBook.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
    }
});

export default booksSlice.reducer;