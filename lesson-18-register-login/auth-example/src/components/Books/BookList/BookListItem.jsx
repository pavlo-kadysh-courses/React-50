import {memo} from "react";

import styles from "./book-list.module.scss";

const BookListItem = ({id, title, author, removeBook}) => {
    return (
        <li className={styles.item}>
            {title}. Автор: {author}
            <span onClick={() => removeBook(id)} className={styles.remove}>X</span>
        </li>
    )
}

export default memo(BookListItem);

/*
1. id = 1 ; title = "Worm"; author = "Джон Маккрей" =>
        <li className={styles.item}>
            Worm. Автор: Джон Маккрей.
        </li>
*/