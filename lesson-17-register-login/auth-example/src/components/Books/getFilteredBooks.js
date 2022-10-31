export const getFilteredBooks = (filter, books) => {
    if(!filter) {
        return books;
    }

    const normalizedFilter = filter.toLowerCase();
    
    const filteredBooks = books.filter(({title, author}) => {
        const normalizedTitle = title.toLowerCase();
        const normalizedAuthor = author.toLowerCase();
        const result = normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter);
        return result;
    });

    return filteredBooks;
}