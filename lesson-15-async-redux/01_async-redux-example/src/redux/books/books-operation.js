import actions from "./books-actions";

import * as api from "../../shared/api/books";

const isDublicate = ({title, author}, books) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const result = books.find(item => {
        return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
    });
    return Boolean(result);
}

export const fetchBooks = () => {
    const func = async (dispatch) => {
        dispatch(actions.fetchBooksLoading());
        try {
            const data = await api.getBooks();
            dispatch(actions.fetchBooksSuccess(data));
        } catch(error) {
            const { message, response } = error;
            const errorData = {
                message,
                status: response.status,
            }
            dispatch(actions.fetchBooksError(errorData));
        }
    }
    return func;
}

export const addBook = (data) => {
    const func = async (dispatch, getState) => {
        const { books } = getState();
        if (isDublicate(data, books.items)) {
            return alert("This book already exists");
        }
        try {
            dispatch(actions.addBookLoading());
            const result = await api.addBook(data);
            dispatch(actions.addBookSuccess(result));
        } catch(error) {
            const { message, response } = error;
            const errorData = {
                message,
                status: response.status,
            }
            dispatch(actions.addBookError(errorData));
        }
    }
    return func;
}

export const removeBook = (id) => {
    const func = async (dispatch) => {
        try {
            dispatch(actions.removeBookLoading());
            await api.removeBook(id);
            dispatch(actions.removeBooksSuccess(id));
        } catch(error) {
            const { message, response } = error;
            const errorData = {
                message,
                status: response.status,
            }
            dispatch(actions.removeBooksError(errorData));
        }
    }
    return func;
}