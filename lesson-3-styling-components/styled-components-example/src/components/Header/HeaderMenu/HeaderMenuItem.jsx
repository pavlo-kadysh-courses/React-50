import PropTypes from "prop-types";
import { HeaderMenuLink } from './style';

const HeaderMenuItem = ({link, text, active}) => {

    return (<li>
                <HeaderMenuLink href={link} active={active}>{text}</HeaderMenuLink>
            </li>);
}

export default HeaderMenuItem;

HeaderMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}