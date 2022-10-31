export const getBooks = ({books}) => books.items;

export const getState = ({books}) => ({loading: books.loading, error: books.error});

export const getFavoriteBooks = ({books}) => books.items.filter(({favorite}) => favorite);
export const getFilteredBooks = ({books, filter}) => {
    if(!filter) {
        return books.items;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = books.items.filter(({title, author}) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        return (normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter));
    });

    return result;
}
