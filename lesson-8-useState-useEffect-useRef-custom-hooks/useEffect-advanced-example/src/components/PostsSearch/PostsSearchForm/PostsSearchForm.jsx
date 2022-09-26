import React, { Component } from "react";
import styles from "./post-search-form.module.scss";
import TextField from "../../../shared/components/TextField/TextField";
import SubmitButton from "../../../shared/components/SubmitButton/SubmitButton";
import { nanoid } from "nanoid";

export default class PostsSearchForm extends Component {
    state = {
        search: "",
    }

    searchField = {
        label: "Search",
        type: "text",
        name: "search",
        placeholder: "Enter search phrase",
        required: true,
    }

    searchId = nanoid();

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({...this.state});
        this.reset();
    }

    reset() {
        this.setState({
            search: ""
        })
    }

  render() {
    const { search } = this.state;
    const { handleSubmit, searchId, handleChange, searchField } = this;
    return (
      <form 
        onSubmit={handleSubmit} 
        className={styles.form}
        >
        <TextField 
            value={search} 
            id={searchId} 
            handleChange={handleChange} 
            {...searchField} 
        />
        <SubmitButton 
            text="Search" 
            onClick={handleSubmit} 
        />
      </form>
    )
  }
}
