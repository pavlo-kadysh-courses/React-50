import axios from "axios";

const instanceBooks = axios.create({
    baseURL: "https://6356dec49243cf412f8f494e.mockapi.io/api/books",
    params: {
        _limit: 12,
    }
});

export const getBooks = async() => {
    const {data} = await instanceBooks.get("/");
    return data;
}

export const addBook = async(data) => {
    const {data: result} = await instanceBooks.post("/", data);
    return result;
}

export const removeBook = async(id) => {
    const {data} = await instanceBooks.delete(`/${id}`);
    return data;
}

export const updateLikeStatus = async(id, book) => {
    const { data } = await instanceBooks.put(`/${id}`, book);
    return data;
}