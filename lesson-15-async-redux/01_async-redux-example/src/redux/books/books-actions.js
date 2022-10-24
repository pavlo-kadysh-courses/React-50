import { createAction } from "@reduxjs/toolkit";

const fetchBooksLoading = createAction("books/fetch/loading");
const fetchBooksSuccess = createAction("books/fetch/success");
const fetchBooksError = createAction("books/fetch/error");

const addBookLoading = createAction("books/add/loading");
const addBookSuccess = createAction("books/add/success");
const addBookError = createAction("books/add/error");

const removeBookLoading = createAction("books/remove/loading");
const removeBooksSuccess = createAction("books/remove/success");
const removeBooksError = createAction("books/remove/error");

const actions = {
    fetchBooksLoading,
    fetchBooksSuccess,
    fetchBooksError,
    addBookLoading,
    addBookSuccess,
    addBookError,
    removeBookLoading,
    removeBooksSuccess,
    removeBooksError,
};

export default actions;