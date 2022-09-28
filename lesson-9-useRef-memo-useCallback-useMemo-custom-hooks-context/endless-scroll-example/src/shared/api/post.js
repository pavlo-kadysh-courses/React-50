import axios from "axios";
const URL = "https://jsonplaceholder.typicode.com/posts";
const LIMIT = 22;

const instance = axios.create({
    baseURL: URL,
    params: {
        _limit: LIMIT,
    }
});

export const getPosts = async(_page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            _page,
        }
    });
    return data;
}


export const searchPosts = async(q, _page = 1) => {
    const { data } = await instance.get("/", {
        params: {
            _page,
            q,
        }
    });
    return data;
}