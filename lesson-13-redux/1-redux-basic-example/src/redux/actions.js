import { nanoid } from "nanoid";
import { ADD_BOOK, REMOVE_BOOK, SET_FILTER } from "./types";

export const addBook = payload => {
    return {
        type: ADD_BOOK, 
        payload: {
            id: nanoid(),
            ...payload
        },
    }
}

export const removeBook = payload => {
    return {
        type: REMOVE_BOOK,
        payload,
    }
}

export const setFilter = payload => {
    return {
        type: SET_FILTER,
        payload
    }
}