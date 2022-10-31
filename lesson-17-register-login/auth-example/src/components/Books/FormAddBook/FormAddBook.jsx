import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import useForm from './../../../shared/hooks/useForm';

import TextField from "../../../shared/components/TextField/TextField";

import styles from "./form-add-book.module.scss";

import initialState from "./initialState";
import fields from "./fields";

const FormAddBook = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const titleId = useMemo(()=> nanoid(), []);
    const authorId = useMemo(()=> nanoid(), []);

    const {title, author} = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField id={titleId} value={title} handleChange={handleChange} {...fields.title} />
            <TextField id={authorId} value={author} handleChange={handleChange} {...fields.author} />
            <button className={styles.btn}>Добавить книгу</button>
        </form>
    )
}

export default FormAddBook;


FormAddBook.defaultProps = {
    onSubmit: () => {}
}

FormAddBook.propTypes = {
    onSubmit: PropTypes.func,
}
