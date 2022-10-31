import PropTypes from "prop-types";

import BookListItem from "./BookListItem";

import styles from "./book-list.module.scss";

const BookList = ({items, removeBook}) => {
    const elements = items.map(item => <BookListItem key={item.id} {...item} removeBook={removeBook} />);

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