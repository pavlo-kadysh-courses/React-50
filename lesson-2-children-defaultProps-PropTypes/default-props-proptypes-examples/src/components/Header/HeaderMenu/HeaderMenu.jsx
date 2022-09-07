import HeaderMenuItem from "./HeaderMenuItem";
import { string, bool, arrayOf, shape } from 'prop-types';
import "./header-menu.css";

const HeaderMenu = ({items}) => {
    const elements = items.map(({id, ...props}) => <HeaderMenuItem key={id} {...props} />);

    return (
        <ul className="header-menu">
            {elements}
        </ul>
    )
}

export default HeaderMenu;

HeaderMenu.propTypes = {
    items: arrayOf(shape({
        id: string.isRequired,
        link: string.isRequired,
        // text: string.isRequired,
        // redirect: bool
    }))
}
