const fields = {
    title: {
        label: "Назва книги",
        name: "title",
        type: "text",
        placeholder: "Введіть назву книги",
        required: true,
    },
    author: {
        label: "Автор книги",
        name: "author",
        type: "text",
        placeholder: "Введіть автора книги",
        required: true,
    },
    favorite: {
        label: "Улюблена",
        name: "favorite",
        type: "checkbox",
    }
}

export default fields;