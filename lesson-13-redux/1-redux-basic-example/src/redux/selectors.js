export const getBooks = store => store.books;

export const getFavoriteBooks = ({books}) => {
    return books.filter(book => book.favorite)
}

export const getFilter = store => store.filter;