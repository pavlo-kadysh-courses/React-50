import { Component, } from "react"
import FormAddBook from "./FormAddBook/FormAddBook";
import BookList from "./BookList/BookList";
import { nanoid } from "nanoid";
import styles from "./books.module.css"

export default class Books extends Component {
  state = {
    books: [],
    filter: '',
  }

  componentDidMount() {
    const books = JSON.parse(localStorage.getItem("books"));
    if (books?.length) {
      this.setState({
        books,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state === nextState) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevState, prevProps) {
    const weHaveDoneHereSomething = "test snapshot";
    return weHaveDoneHereSomething;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate, snapshot', snapshot);
    const { books } = this.state;
    if (prevState.books !== books) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    localStorage.removeItem("books");
  }

  addBook = (book) => {
    if (this.isDuplicate(book)) {
        return alert(`${book.title} - ${book.author} is already on the site`);
    }

    this.setState((prev) => {
        const newBook = {
            id: nanoid(),
            ...book
        }
        return {
            books: [...prev.books, newBook]
        }
    })
  }

  removeBook = (id) => {
    this.setState((prev) => {
        const newBooks = prev.books.filter((item) => item.id !== id);

        return {
            books: newBooks
        }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
        [name]: value
    })
  }

  isDuplicate({title, author}) {
    const { books } = this.state;
    const result = books.find((item) => item.title === title && item.author === author);
    return result;
  }

  getFilteredBooks() {
    const { books, filter } = this.state;
    
    if (!filter) {
        return books;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredBooks = books.filter(({title, author}) => {
        const normalizedTitle = title.toLocaleLowerCase();
        const normalizedAuthor = author.toLocaleLowerCase();
        const result = normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter);
        return result;
    })

    return filteredBooks;
  }


  render() {
    const { addBook, removeBook, handleChange } = this;
    const { filter } = this.state;
    const books = this.getFilteredBooks();
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Мої книги</h2>
        <div className={styles.row}>
            <div className={styles.column}>
                <FormAddBook onSubmit={addBook} />
            </div>
        <div className={styles.column}>
            <input type="text" name="filter" onChange={handleChange} value={filter} className={styles.filter} placeholder="Фільтр" />
            <BookList items={books} removeBook={removeBook} />
        </div>
        </div>
      </div>
    )
  }
}
