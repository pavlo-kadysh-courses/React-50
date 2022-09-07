import PropTypes from "prop-types";
import HeaderMenuItem from "./HeaderMenuItem";

import { HeaderMenuWrapper } from "./styled";

const HeaderMenu = ({items}) => {
    const menuItems = items.map(item => ({...item, active: false}));
    menuItems[0].active = true;
    const elements = menuItems.map(({id, ...props}) => <HeaderMenuItem key={id} {...props} />);

    return (
        <HeaderMenuWrapper>
            {elements}
        </HeaderMenuWrapper>
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