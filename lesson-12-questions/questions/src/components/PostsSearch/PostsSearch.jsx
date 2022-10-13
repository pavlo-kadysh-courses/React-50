import React, { useState, useEffect } from 'react'
import PostsSearchForm from './PostsSearchForm/PostsSearchForm';
import { searchPosts } from '../../shared/api/post';
import Loader from '../../shared/components/Loader/Loader';
import PostList from '../../shared/components/PostList/PostList';
import Modal from '../../shared/components/Modal/Modal';

const modalInitialState = {
    title: "",
    body: ""
}

const PostsSearch = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({...modalInitialState});

    useEffect(()=> {
        const fetchPosts = async () =>  {        
            try {
                setLoading(true);
                const data = await searchPosts(search, page);
                setItems(prevItems => [...prevItems, ...data])
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
          }
          if(search) {
            fetchPosts()
          }    
    }, [search, page]);

    const onSearch = ({search}) => {
        setSearch(search);
        setPage(1);
        setItems([])
    }

    const loadMore = () => setPage(prevPage => prevPage + 1);

    const openModal = (modalContent) => {
        setModalOpen(true);
        setModalContent({...modalContent});
    }

    const closeModal = ()=> {
        setModalOpen(false);
        setModalContent({...modalInitialState});
    }

    const isPosts = Boolean(items.length);

    return (
        <div>
            {modalOpen && (<Modal onClose={closeModal}>
                <h3>{modalContent.title}</h3>
                <p>{modalContent.body}</p>
            </Modal>)}
            <PostsSearchForm onSubmit={onSearch} />
            {isPosts && <PostList items={items} onClick={openModal} />}
            {loading && <Loader />}
            {error && <p>Будь ласка спробуйте пізніше</p>}
            {isPosts && <button onClick={loadMore}>load more</button>}
        </div>
    )

}

export default PostsSearch;
