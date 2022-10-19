import FormAddBook from "./FormAddBook/FormAddBook";
import BookList from "./BookList/BookList";
import styles from "./books.module.css"
// import { getFilteredBooks } from "./getFilteredBooks";
// redux
import { useSelector, useDispatch } from "react-redux";
import { addBook, removeBook } from "../../redux/books/items/items-slice";
import { setFilter } from "../../redux/books/filter/filter-slice";
import { getFilter } from "../../redux/books/filter/filter-selectors";
import { getFilteredBooks } from "../../redux/books/items/items-selectors";

export default function Books() {
    const books = useSelector(getFilteredBooks);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onAddBook = (book) => {
        if (isDuplicate(book)) {
            return alert(`${book.title} - ${book.author} is already on the site`);
        }
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
