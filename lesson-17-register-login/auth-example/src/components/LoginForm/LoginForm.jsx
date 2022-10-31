import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

import useForm from '../../shared/hooks/useForm';

import TextField from "../../shared/components/TextField/TextField";

import initialState from "./initialState";
import fields from "./fields";

const LoginForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {email, password} = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
            <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
            <button>Login</button>
        </form>
    )
}

export default LoginForm;

LoginForm.defaultProps = {
    onSubmit: () => {}
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}
