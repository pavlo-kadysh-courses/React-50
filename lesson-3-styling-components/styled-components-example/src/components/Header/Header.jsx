import PropTypes from "prop-types";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { HeaderWrapper } from "./style";

const Header = ({title, menuItems}) => {
    return (
        <HeaderWrapper>
          <div className="header-row">
            <a href="#">Logo</a>
            <HeaderMenu items={menuItems} />
            <button className="btn">Purchase</button>
          </div>
          {title && <h1>{title}</h1>}
        </HeaderWrapper>
    )
  };

export default Header;

Header.defaultProps = {
  menuItems: []
}

Header.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }))
}