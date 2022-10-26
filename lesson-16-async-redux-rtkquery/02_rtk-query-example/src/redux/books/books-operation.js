import * as api from "../../shared/api/books";
import { createAsyncThunk } from "@reduxjs/toolkit";

const isDublicate = ({title, author}, books) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedAuthor = author.toLowerCase();

    const result = books.find(item => {
        return (normalizedTitle === item.title.toLowerCase() && normalizedAuthor === item.author.toLowerCase())
    });
    return Boolean(result);
}

export const fetchBooks = createAsyncThunk(
    "books/fetch",
    async(_, thunkApi) => {
        try {
            const data = await api.getBooks();
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
    );


export const addBook = createAsyncThunk(
    "books/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addBook(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
            const { books } = getState();
            if(isDublicate(data, books.items)) {
                return alert(`${data.title} - ${data.author} is already exist`)
            }
        }
    }
)


export const removeBook = createAsyncThunk(
    "books/remove",
    async(id, {rejectWithValue}) => {
        try {
            await api.removeBook(id);
            return id;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)


export const updateFavoriteStatus = createAsyncThunk(
    "books/updateFavorite",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.updateLikeStatus(data.id, data);
            return result;
        } catch(error) {
            return rejectWithValue(error);
        }
    }
)
