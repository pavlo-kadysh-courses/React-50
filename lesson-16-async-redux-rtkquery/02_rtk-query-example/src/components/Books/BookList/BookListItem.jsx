import {memo} from "react";
import { AiFillHeart } from "react-icons/ai";

import styles from "./book-list.module.scss";

const BookListItem = ({id, title, author, removeBook, favorite}) => {
    console.log("favorite", favorite);
    return (
        <li className={styles.item}>
            {title}. Автор: {author}
            <span> {favorite ? <AiFillHeart/> : null} </span>
            <span onClick={() => removeBook(id)} className={styles.remove}>X</span>
        </li>
    )
}

export default memo(BookListItem);