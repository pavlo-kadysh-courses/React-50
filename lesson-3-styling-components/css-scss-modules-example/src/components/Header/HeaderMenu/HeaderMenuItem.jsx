import PropTypes from "prop-types";

const HeaderMenuItem = ({link, text}) => {

    return (<li>
                <a className="header-menu-link" href={link}>{text}</a>
            </li>);
}

export default HeaderMenuItem;

HeaderMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}