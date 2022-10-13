import React, { useState } from "react";
import styles from "./post-search-form.module.scss";
import TextField from "../../../shared/components/TextField/TextField";
import SubmitButton from "../../../shared/components/SubmitButton/SubmitButton";
import { nanoid } from "nanoid";

const initialState = {
    search: ""
}

const fields = {
    search: {
        label: "Search",
        type: "text",
        name: "search",
        placeholder: "Enter search text",
        required: true,
    }
}

const PostsSearchForm = ({onSubmit}) => {

    const [state, setState] = useState({...initialState});

    const handleChange = ({target}) => {
        const {value, name} = target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({...state});
        setState({...initialState})
    }

    const {search} = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField value={search} handleChange={handleChange} {...fields.search} />
            <SubmitButton text="Search" />
        </form>
    )
}

export default PostsSearchForm;