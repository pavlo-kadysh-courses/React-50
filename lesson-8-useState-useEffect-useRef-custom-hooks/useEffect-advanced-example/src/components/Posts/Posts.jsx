import Loader from '../../shared/components/Loader/Loader';
import PostList from '../../shared/components/PostList/PostList';
import { getPosts } from '../../shared/api/post';
import { useState, useEffect } from 'react';

export default function Posts() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
  
      try {
          const data = await getPosts(page);
          setItems((prevItems) => {
            return [...prevItems, ...data]
          })
      } catch (error) {
          setError(error);
      }
      finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, [page])

  

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  const isPosts = Boolean(items.length);

  return (
    <div>
      <h2>Posts</h2>
      {loading && <Loader />}
      {error && <p>Будь ласка спробуйте пізніше...</p>}
      {isPosts && <PostList items={items} />}
      {isPosts && <button onClick={loadMore}>load more</button>}
    </div>
  )
}


// export default class Posts extends Component {
//   state = {
//     items: [],
//     loading: false,
//     error: null,
//     page: 1,
//   }

//   componentDidMount() {
//     this.fetchPosts();
//   }

//   componentDidUpdate(_, prevState) {
//     const { page } = this.state;
//     if (prevState.page !== page) {
//         this.fetchPosts();
//     }
//   }

//   async fetchPosts() {
//     const { page } = this.state;
//     this.setState({
//         loading: true,
//     });

//     try {
//         const data = await getPosts(page);
//         this.setState(({items}) => {
//             return {
//                 items: [...items, ...data]
//             }
//         })
//     } catch (error) {
//         this.setState({
//             error
//         })
//     }
//     finally {
//         this.setState({
//             loading: false
//         })
//     }
//   }

// //   fetchPosts() {
// //     const { page } = this.state;
// //     this.setState({
// //         loading: true,
// //     });

// //     axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=12`)
// //     .then(({data}) => {
// //         this.setState(({items}) => {
// //             return {
// //                 items: [...items, ...data]
// //             }
// //         })
// //     })
// //     .catch(error => {
// //         this.setState({
// //             error
// //         })
// //     })
// //     .finally(() => this.setState({loading: false}))
// //   }

//   loadMore = () => {
//     this.setState(({page}) => {
//         return {
//             page: page + 1
//         }
//     })
//   }

//   render() {
//     const { items, loading, error } = this.state;
//     const isPosts = Boolean(items.length);
//     const { loadMore } = this;
//     return (
//       <div>
//         <h2>Posts</h2>
//         {loading && <Loader />}
//         {error && <p>Будь ласка спробуйте пізніше...</p>}
//         {isPosts && <PostList items={items} />}
//         {isPosts && <button onClick={loadMore}>load more</button>}
//       </div>
//     )
//   }
// }