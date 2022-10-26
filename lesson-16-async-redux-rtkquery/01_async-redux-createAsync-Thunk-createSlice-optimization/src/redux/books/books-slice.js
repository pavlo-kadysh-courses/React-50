import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks, addBook, removeBook } from "./books-operation";
import { pendingCallback, rejectedCallback } from "../../shared/helpers/redux";

const initialState = {
    items: [],
    loading: false,
    error: null,
}

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: {
        [fetchBooks.pending]: pendingCallback,
        [fetchBooks.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = payload;
        },
        [fetchBooks.rejected]: rejectedCallback,
        [addBook.pending]: pendingCallback,
        [addBook.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items.push(payload)
        },
        [addBook.rejected]: rejectedCallback,
        [removeBook.pending]: pendingCallback,
        [removeBook.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.items = store.items.filter(item => item.id !== payload)
        },
        [removeBook.rejected]: rejectedCallback,
    }
})

export default booksSlice.reducer;