import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import TextField from "../../../shared/components/TextField/TextField";

import styles from "./form-add-book.module.scss";

import initialState from "./initialState";
import fields from "./fields";

class FormAddBook extends Component {

    static defaultProps = {
        onSubmit: () => {}
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    state = {...initialState}

    titleId = nanoid();
    authorId = nanoid();

    handleChange = ({target}) => {
        const {value, name} = target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset();
    }

    reset() {
        this.setState({...initialState})
    }

    render() {
        const {handleSubmit, handleChange, titleId, authorId} = this;
        const {title, author} = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <TextField id={titleId} value={title} handleChange={handleChange} {...fields.title} />
                <TextField id={authorId} value={author} handleChange={handleChange} {...fields.author} />
                <button className={styles.btn}>Добавить книгу</button>
            </form>
        )
    }
}

export default FormAddBook;

/*
FormAddBook.defaultProps = {
    onSubmit: () => {}
}

FormAddBook.propTypes = {
    onSubmit: PropTypes.func,
}
*/