import FormAddBook from "./FormAddBook/FormAddBook";
import BookList from "./BookList/BookList";
import styles from "./books.module.css"
// import { getFilteredBooks } from "./getFilteredBooks";
// redux
import { useSelector, useDispatch } from "react-redux";
// import { addBook, removeBook } from "../../redux/books/books-actions";
import { fetchBooks, addBook, removeBook } from "../../redux/books/books-operation";
import { setFilter } from "../../redux/filter/filter-actions";
import { getFilter } from "../../redux/filter/filter-selectors";
import { getFilteredBooks } from "../../redux/books/books-selectors";
import { useEffect } from "react";

export default function Books() {
    const books = useSelector(getFilteredBooks);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch])

    const onAddBook = (book) => {
        const action = addBook(book);
        dispatch(action);
    }

    const onRemoveBook = (id) => {
        const action = removeBook(id);
        dispatch(action);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }

    const isDuplicate = ({title, author}) => {
        const result = books.find((item) => item.title === title && item.author === author);
        return result;
    }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Мої книги</h2>
      <div className={styles.row}>
          <div className={styles.column}>
              <FormAddBook onSubmit={onAddBook} />
          </div>
      <div className={styles.column}>
          <input type="text" name="filter" onChange={handleChange} value={filter} className={styles.filter} placeholder="Фільтр" />
          <BookList items={books} removeBook={onRemoveBook} />
      </div>
      </div>
    </div>
  )
}
