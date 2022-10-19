import { useMemo } from "react";
import { nanoid } from "nanoid"

import useForm from './../../../shared/hooks/useForm';

import TextField from "../../../shared/components/TextField/TextField";
import fields from "./fields";

import styles from "./form-add-book.module.scss";

const initialState = {
    title: '',
    author: '',
    favorite: false,
}

export default function FormAddBook({onSubmit}) {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const titleId = useMemo(()=> nanoid(), []);
    const authorId = useMemo(()=> nanoid(), []);
    const favoriteId = useMemo(()=> nanoid(), []);

    const {title, author, favorite} = state;

    return (
    <form onSubmit={handleSubmit}>
            <TextField id={titleId} value={title} handleChange={handleChange} {...fields.title} />
            <TextField id={authorId} value={author} handleChange={handleChange} {...fields.author} />
            <TextField id={favoriteId} checked={favorite} handleChange={handleChange} {...fields.favorite} />
            {state.invalidForm ? <div>Будь ласка заповніть поля</div> : null}
            <button className={styles.btn}>Додати книгу</button>
    </form>
    )
}
