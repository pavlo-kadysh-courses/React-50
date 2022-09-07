import PropTypes from "prop-types";
import { HeaderMenuLink } from "./styled";

const HeaderMenuItem = ({link, text, active}) => {

    return (<li className="tick">
                <HeaderMenuLink active={active} href={link}>{text}</HeaderMenuLink>
                
            </li>);
}

export default HeaderMenuItem;

HeaderMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}