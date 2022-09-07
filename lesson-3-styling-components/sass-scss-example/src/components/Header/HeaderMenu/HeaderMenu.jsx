import PropTypes from "prop-types";

import HeaderMenuItem from "./HeaderMenuItem";
import './header-menu.scss';

const HeaderMenu = ({items}) => {
    const elements = items.map(({id, ...props}) => <HeaderMenuItem key={id} {...props} />);

    return (
        <ul className="header-menu">
            {elements}
        </ul>
    )
}

export default HeaderMenu;

HeaderMenu.defaultProps = {
    items: []
}

HeaderMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }))
}