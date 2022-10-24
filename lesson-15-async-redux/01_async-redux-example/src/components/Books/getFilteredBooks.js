export const getFilteredBooks = (filter, books) => {   
    if (!filter) {
        return books;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredBooks = books.filter(({title, author}) => {
        const normalizedTitle = title.toLocaleLowerCase();
        const normalizedAuthor = author.toLocaleLowerCase();
        const result = normalizedTitle.includes(normalizedFilter) || normalizedAuthor.includes(normalizedFilter);
        return result;
    })

    return filteredBooks;
}