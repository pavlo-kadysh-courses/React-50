import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const itemsSlice = createSlice({
    name: "items",
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

export const { addBook, removeBook } = itemsSlice.actions;

export default itemsSlice.reducer;