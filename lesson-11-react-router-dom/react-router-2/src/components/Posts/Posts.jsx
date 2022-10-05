import { useState, useEffect } from "react";
import PostList from "../../shared/components/PostList/PostList";

import { getPosts } from './../../shared/api/posts';
import Loader from "../../shared/components/Loader/Loader";

const Posts = () => {
    const [posts, setPosts] = useState({
        items: [],
        loading: false,
        error: null,
    });
    const [page, setPage] = useState(1);

    useEffect(()=> {
        const fetchPosts = async() => {
            try {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    loading: true,
                }));
                const data = await getPosts(page);
                setPosts(prevPosts => ({
                    ...prevPosts,
                    items: [...prevPosts.items, ...data],
                }))
            } catch (error) {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    error,
                }))
            }
            finally {
                setPosts(prevPosts => ({
                    ...prevPosts,
                    loading: false,
                }))
            }
        };

        fetchPosts()
    }, [setPosts, page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    }

    const {items, loading, error} = posts;

    return (
        <div>
            <h2>Список постів</h2>
            {Boolean(items.length) && <PostList items={items} />}
            {loading && <Loader />}
            {error && <p>Posts load fail</p>}
            {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default Posts;
