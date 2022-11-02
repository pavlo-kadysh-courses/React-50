import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import FormAddBook from "./FormAddBook/FormAddBook";
import BookList from "./BookList/BookList";

import { fetchBooks, addBook, removeBook } from "../../redux/books/books-operations";
import {setFilter} from "../../redux/filter/filter-actions";

import { getFilteredBooks, getState } from "../../redux/books/books-selectors";
import {getFilter} from "../../redux/filter/filter-selectors";

import styles from "./books.module.css";

const Books = () => {
    const books = useSelector(getFilteredBooks);
    const {loading, error} = useSelector(getState);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchBooks())
    }, [dispatch])

    const onAddBook = data => {
        const action = addBook(data);
        dispatch(action)
    };

    const onRemoveBook = id => {
        dispatch(removeBook(id));
    };

    const handleFilter = ({target}) => {
        dispatch(setFilter(target.value));
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Мои книги</h2>
            <div className={styles.row}>
                <div className={styles.column}>
                    <FormAddBook onSubmit={onAddBook} />
                </div>
                <div className={styles.column}>
                    <input value={filter} name="filter" onChange={handleFilter} className={styles.filter} placeholder="Filter" />
                    {!loading && books.length > 0 && <BookList items={books} removeBook={onRemoveBook} />}
                    {loading && <p>...loading</p>}
                </div>
            </div>
        </div>
    )
}

export default Books;