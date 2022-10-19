import { nanoid } from "nanoid";
import { ADD_BOOK, REMOVE_BOOK, } from "./books-types";

export const addBook = payload => {
    return {
        type: ADD_BOOK,
        payload: {
            id: nanoid(),
            ...payload   
        },
    }
};

export const removeBook = payload => {
    return {
        type: REMOVE_BOOK,
        payload,
    }
};