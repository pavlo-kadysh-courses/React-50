export const getBooks = store => store.books;
export const getFilteredBooks = ({books}) => {
    const { items, filter } = books;
    if (!filter) {
        return items;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredBooks = items.filter(({title, author}) => {
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