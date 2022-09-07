import PropTypes from "prop-types";

import "./text-field.css";

const TextField = ({type, placeholder, value, required}) => {
    return (
        <input type={type} placeholder={placeholder} value={value} required={required} />
    )
}

export default TextField;

TextField.defaultProps = {
    type: "text",
    required: false,
}

TextField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool
}