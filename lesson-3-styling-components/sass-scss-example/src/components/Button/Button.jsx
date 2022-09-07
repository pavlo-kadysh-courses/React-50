import PropTypes from "prop-types";
import './button.scss';

const Button = ({text, type}) => {
    return (<button className="btn" type={type}>{text}</button>)
}

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"]).isRequired,
}