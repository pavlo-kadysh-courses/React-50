export const getBooks = ({books}) => books.items;
export const getState = ({books}) => ({loading: books.loading, error: books.error});
export const getFilteredBooks = ({books, filter}) => {
    if (!filter) {
        return books.items;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredBooks = books.items.filter(({title, author}) => {
        const normalizedTitle = title.toLocaleLowerCase();
        const normalizedAuthor = author.toLocaleLowerCase();
        const result = normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter);
        return result;
    })

    return filteredBooks;
}
export const getFavoriteBooks = ({books}) => {
    return books.items.filter(book => book.favorite);
}