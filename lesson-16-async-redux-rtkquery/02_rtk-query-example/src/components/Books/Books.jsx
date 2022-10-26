import FormAddBook from "./FormAddBook/FormAddBook";
import BookList from "./BookList/BookList";
import styles from "./books.module.css"
// redux
import { useFetchBooksQuery, useAddBookMutation, useRemoveBookMutation } from "../../redux/books/books-api";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filter/filter-actions";
import { getFilter } from "../../redux/filter/filter-selectors";
import { useState } from "react";

export default function Books() {
    const [page, setPage] = useState(1);
    const {data = [], isLoading, isSuccess} = useFetchBooksQuery(page);
    const [addBook, addBookInfo] = useAddBookMutation();
    const [removeBook, removeBookInfo] = useRemoveBookMutation();
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onAddBook = (book) => {
        addBook(book);
    }

    const onRemoveBook = (id) => {
        removeBook(id);
    }

    const updateLikeStatus = (book) => {
        // const updatedStatus = {...book, favorite: !book.favorite}
        // const action = updateFavoriteStatus(updatedStatus);
        // dispatch(action);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
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
          {/* <p>In our library we have overal: {booksCount}</p> */}
          {isSuccess && data.length > 0 && <BookList items={data} removeBook={onRemoveBook} updateLikeStatus={updateLikeStatus} />}
          {addBookInfo.isLoading && "adding new book"}
          {isSuccess && (
            <div>
                <span onClick={() => setPage(1)}> 1 </span>
                <span onClick={() => setPage(2)}> 2 </span>
                <span onClick={() => setPage(3)}> 3 </span>
                <span onClick={() => setPage(4)}> 4 </span>
                <span onClick={() => setPage(5)}> 5 </span>
            </div>
          )}
          {isLoading && <p>...loading</p>}
          {/* {error && <p>oops, something went wrong</p>} */}
      </div>
      </div>
    </div>
  )
}
