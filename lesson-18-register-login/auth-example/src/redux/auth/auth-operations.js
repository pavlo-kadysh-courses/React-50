import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/auth";

export const signup = createAsyncThunk(
    "auth/signup",
    async(data, { rejectWithValue }) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch({response}) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(data, { rejectWithValue }) => {
        try {
            const result = await api.login(data);
            return result;
        } catch({response}) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async(_, { rejectWithValue }) => {
        try {
            const result = await api.logout();
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)

export const current = createAsyncThunk(
    "auth/current",
    async(_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const result = await api.getCurrentUser(auth.token);
            return result;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            return rejectWithValue(error);
        }
    }
)