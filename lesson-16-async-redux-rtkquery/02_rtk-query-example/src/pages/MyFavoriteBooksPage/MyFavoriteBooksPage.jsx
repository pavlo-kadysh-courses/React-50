import { useSelector } from "react-redux";

import { getFavoriteBooks } from "../../redux/books/books-selectors";

export default function MyFavoriteBooksPage() {
  const books = useSelector(getFavoriteBooks);
  const elements = books.map(({id, title, author}) => {
    return (
        <li key={id}>
            {author}. {title}
        </li>
    )
  })
  return (
    <div className="container">
        <h1 className="page-tite">My favorite books page</h1>
        <ul>{elements}</ul>
    </div>
  )
}
