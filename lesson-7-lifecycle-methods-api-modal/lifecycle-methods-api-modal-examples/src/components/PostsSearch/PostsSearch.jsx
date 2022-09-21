import React, { Component } from 'react'
import PostsSearchForm from './PostsSearchForm/PostsSearchForm';
import { searchPosts } from '../../shared/api/post';
import Loader from '../../shared/components/Loader/Loader';
import PostList from '../../shared/components/PostList/PostList';
import Modal from '../../shared/components/Modal/Modal';

export default class PostsSearch extends Component {
    state = {
       items: [],
       loading: false,
       error: null,
       search: "",
       page: 1,
       modalOpen: false,
       modalContent: {
        title: "",
        body: "",
       }
    }

    componentDidUpdate(_, prevState) {
        const { search, page } = this.state;
        if ((search && prevState.search !== search) || page > prevState.page) {
            this.fetchPosts(search, page);
        }
        
    }

    async fetchPosts() {
        const { search, page } = this.state;
        this.setState({
            loading: true,
        })
        try {
            const data = await searchPosts(search, page);
            this.setState(({items}) => {
                return {
                    items: [...items, ...data]
                }
            })
        } catch (error) {
            this.setState({
                error
            })
        } finally {
            this.setState({
                loading: false,
            })
        }

    }

    onSearch = ({search}) => {
        this.setState({
            search,
        })
    }

    openModal = (modalContent) => {
        this.setState({
            modalOpen: true,
            modalContent
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false,
            modalContent: {
                title: "",
                body: ""
            }
        })
    }


  render() {
    const { items, loading, error, modalOpen, modalContent } = this.state;
    const isPosts = Boolean(items.length);
    const { onSearch, closeModal, openModal } = this;
    return (
        <>
        <div>PostsSearch</div>
        {modalOpen && <Modal onClose={closeModal}>
                <h3>{modalContent.title}</h3>
                <p>{modalContent.body}</p>
            </Modal>}
        <PostsSearchForm onSubmit={onSearch}/>
        {loading && <Loader />}
        {error && <p>Будь ласка спробуйте пізніше...</p>}
        {isPosts && <PostList items={items} onClick={openModal} />}
      </>
    )
  }
}
