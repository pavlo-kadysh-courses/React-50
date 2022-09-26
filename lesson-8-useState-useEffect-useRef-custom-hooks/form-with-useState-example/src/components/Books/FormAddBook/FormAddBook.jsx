import { nanoid } from "nanoid"
import { useState } from "react";

import styles from "./form-add-book.module.css";

const initialState = {
    title: '',
    author: '',
    invalidForm: false,
}

export default function FormAddBook({onSubmit}) {
    const [state, setState] = useState(initialState);

    const titleId = nanoid();
    const authorId = nanoid();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => {
            return {
                ...prev,
                [name]: value,
                invalidForm: false,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, author } = state;
        const isValid = validateForm(state);
        if (isValid) {
            onSubmit({title, author});
            setState(initialState);
        } else {
            setState((prev) => {
                return {
                    ...prev,
                    invalidForm: true,
                }
            });
        }
        
    }

    const validateForm = (data) => {
        const isValid = !!data.title && !!data.author;
        return isValid;
    }


    return (
    <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor={titleId}>Title: </label>
                <input id={titleId} type="text" name="title" value={state.title} onChange={handleChange} minLength={3} className={styles.field} placeholder="Введіть назву"/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor={authorId}>Author: </label>
                <input id={authorId} name="author" type="text" value={state.author} onChange={handleChange} minLength={3} className={styles.field} placeholder="Введіть автора" />
            </div>
            {state.invalidForm ? <div>Будь ласка заповніть поля</div> : null}
            <button className={styles.btn}>Додати книгу</button>
    </form>
    )
}


// export default class FormAddBook extends Component {
//     state = {
//         title: '',
//         author: '',
//         invalidForm: false,
//     }
    
//     titleId = nanoid();
//     authorId = nanoid();

//     handleChange = (e) => {
//         const { name, value } = e.target;
//         this.setState({
//             [name]: value,
//             invalidForm: false,
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { title, author } = this.state;
//         const isValid = this.validateForm(this.state);
//         if (isValid) {
//             this.props.onSubmit({title, author});
//             this.setState({
//                 title: '',
//                 author: '',
//             })
//         } else {
//             this.setState({
//                 invalidForm: true,
//             })
//         }
        
//     }

//     validateForm = (data) => {
//         const isValid = !!data.title && !!data.author;
//         return isValid;
//     }
  
//     render() {
//         const { titleId, authorId, handleSubmit, handleChange } = this;
//         const { invalidForm } = this.state;
//     return (
//     <form onSubmit={handleSubmit}>
//             <div className={styles.formGroup}>
//                 <label htmlFor={titleId}>Title: </label>
//                 <input id={titleId} type="text" name="title" value={this.state.title} onChange={handleChange} minLength={3} className={styles.field} placeholder="Введіть назву"/>
//             </div>
//             <div className={styles.formGroup}>
//                 <label htmlFor={authorId}>Author: </label>
//                 <input id={authorId} name="author" type="text" value={this.state.author} onChange={handleChange} minLength={3} className={styles.field} placeholder="Введіть автора" />
//             </div>
//             {invalidForm ? <div>Будь ласка заповніть поля</div> : null}
//             <button className={styles.btn}>Додати книгу</button>
//     </form>
//     )
//   }
// }
