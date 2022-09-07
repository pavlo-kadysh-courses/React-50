import PropTypes from "prop-types";
import { headerMenuLink } from "./styles";

const HeaderMenuItem = ({link, text}) => {

    return (<li>
                <a style={headerMenuLink} href={link}>{text}</a>
            </li>);
}

export default HeaderMenuItem;

HeaderMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}