import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOperation = (name, request, condition) => {
    const operation = createAsyncThunk(
        name,
        async(data, {rejectWithValue}) => {
            try {
                const result = await request(data);
                return result;
            } catch (error) {
                return rejectWithValue(error);
            }
        },
        {
            condition
        }
    );

    return operation;
};

export const pendingCallback = (store) => {
    store.loading = true;
    store.error = null;
};

export const rejectedCallback = (store, {payload}) => {
    store.loading = false;
    store.error = payload;
};