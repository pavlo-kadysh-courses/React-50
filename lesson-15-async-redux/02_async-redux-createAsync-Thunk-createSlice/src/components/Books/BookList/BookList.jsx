import PropTypes from "prop-types";
import { AiFillHeart } from "react-icons/ai";

import styles from "./book-list.module.scss";
import BookListItem from "./BookListItem";

const BookList = ({items, removeBook}) => {
    const elements = items.map(item => <BookListItem key={item.id} {...item} removeBook={removeBook}/>)
    // const elements = items?.map(({id, title, favorite, author}) => (
    //     <li key={id} className={styles.item}>
    //         {title}. Автор: {author}
    //         <span> {favorite ? <AiFillHeart/> : null} </span>
    //         <span onClick={() => removeBook(id)} className={styles.remove}>X</span>
    //     </li>
    // ));

    return (
        <>
            <h4 className={styles.title}>Список книг</h4>
            <ol>
                {elements}
            </ol>
        </>
    )
}

export default BookList;

BookList.defaultProps = {
    items: []
}

BookList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }))
}