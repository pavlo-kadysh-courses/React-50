import { useState, useEffect, useMemo} from "react";
import { useSearchParams } from "react-router-dom";

import PostsSearchForm from "./PostsSearchForm/PostsSearchForm";
import PostList from "./../../shared/components/PostList/PostList";
import Modal from "../../shared/components/Modal/Modal";

import { searchPosts } from "../../shared/api/posts";

import styles from "./posts-search.module.scss";

const modalInitialState = {
    title: "",
    body: ""
}

const PostsSearch = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({...modalInitialState});

    

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("searchQuery");

    // const params = useMemo(
    //     () => Object.fromEntries([...searchParams]),
    //     [searchParams]
    //     );
    //     console.log(params);

    useEffect(()=> {
        const fetchPosts = async () =>  {        
            try {
                setLoading(true);
                const data = await searchPosts(searchQuery, page);
                setItems(prevItems => [...prevItems, ...data])
            } catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
          }
          if(searchQuery) {
            fetchPosts()
          }    
    }, [searchQuery, page]);

    const onSearch = ({search}) => {
        setSearchParams({searchQuery: search});
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
            {modalOpen && (<Modal close={closeModal}>
                <h3 className={styles.postTitle}>{modalContent.title}</h3>
                <p className={styles.postContent}>{modalContent.body}</p>
            </Modal>)}
            <PostsSearchForm onSubmit={onSearch} />
            {isPosts && <PostList items={items} onClick={openModal} />}
            {loading && <p>....Loading posts</p>}
            {error && <p>Не удалось загрузить посты</p>}
            {isPosts && <button onClick={loadMore}>load more</button>}
        </div>
    )

}
/*
class PostsSearch extends Component {

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
        const {search, page} = this.state;
        if((search && prevState.search !== search) || page > prevState.page) {
            this.fetchPosts();
        }
    }

    async fetchPosts() {
        const {search, page} = this.state;
        this.setState({
            loading: true,
        });
    
        try {
            const data = await searchPosts(search, page);
            this.setState(({items}) => ({
                items: [...items, ...data]
            }))
        } catch (error) {
            this.setState({
                error,
            })
        }
        finally {
            this.setState({ loading: false })
        }
      }

    onSearch = ({search}) => {
        this.setState({
            search,
        })
    }

    loadMore = () => {
        this.setState(({page}) => ({
            page: page + 1
        }))
    }

    openModal = (modalContent) => {
        this.setState({
            modalOpen: true,
            modalContent,
        })
    }

    closeModal = ()=> {
        this.setState({
            modalOpen: false,
            modalContent: {
                title: "",
                body: "",
            }
        })
    }
 
    render(){
        const {onSearch, loadMore, openModal, closeModal} = this;
        const {items, loading, error, modalOpen, modalContent} = this.state;

        const isPosts = Boolean(items.length);

        return (
            <div>
                {modalOpen && (<Modal close={closeModal}>
                    <h3 className={styles.postTitle}>{modalContent.title}</h3>
                    <p className={styles.postContent}>{modalContent.body}</p>
                </Modal>)}
                <PostsSearchForm onSubmit={onSearch} />
                {isPosts && <PostList items={items} onClick={openModal} />}
                {loading && <p>....Loading posts</p>}
                {error && <p>Не удалось загрузить посты</p>}
                {isPosts && <button onClick={loadMore}>load more</button>}
            </div>
        )
    }
}
*/
export default PostsSearch;
