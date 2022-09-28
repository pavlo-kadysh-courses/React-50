import { useState, useRef, useCallback } from "react"
import useBookSearch from "../../shared/customHooks/useBookSearch"
import Loader from "../../shared/components/Loader/Loader";
import style from './books-search.module.scss';

export default function BooksSearch() {
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);

    const { books, hasMore, loading, error } = useBookSearch(query, pageNumber);

    const handleSearch = ({target}) => {
        setQuery(target.value);
        setPageNumber(1);
    }

    const observer = useRef();
    const lastBookElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node);
        
    }, [loading, hasMore]);

    return (
        <>
            <div className={style.searchForm}>
                <input type="text" onChange={handleSearch} value={query} className={style.search}></input>
                <ul className={style.suggestions}>
                    {books.map((book, index) => {
                        if (books.length === index + 1) {
                            return <li ref={lastBookElementRef} key={book}><span className={style.name}>{book}</span></li>
                        } else {
                            return <li key={book}><span className={style.name}>{book}</span></li>
                        }
                    })}
                </ul>
                
            {error}
            </div>
            {loading && <Loader />}
        </>
    )
}
