import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        addBook: {
            reducer: (store, {payload}) => {
                store.push(payload);
            },
            prepare: (data) => {
                return {
                    payload: {
                        ...data,
                        id: nanoid()
                    }
                }
            }
        },
        removeBook: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
})

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;