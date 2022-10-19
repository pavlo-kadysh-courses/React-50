import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    params: {
        _limit: 12,
    }
});

export const getPosts = async(_page = 1) => {
    const {data} = await instance.get("/", {
        params: {
            _page,
        }
    });
    return data;
}

export const getPostById = async(id) => {
    const { data } = await instance.get(`/${id}`);
    return data;
}

export const searchPosts = async(q, _page = 1) => {
    const {data} = await instance.get("/", {
        params: {
            _page,
            q,
        }
    });
    return data;
}

export const getCommentsById = async (id) => {
    const { data } = await instance.get(`/${id}/comments`);
    return data;
}