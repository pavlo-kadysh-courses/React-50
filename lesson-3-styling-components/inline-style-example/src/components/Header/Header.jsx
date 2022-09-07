import PropTypes from "prop-types";

import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { headerRowStyles, buttonStyle } from "./styles";


const Header = ({title, menuItems}) => {
    return (
      <header style={{padding: "25px 0"}}>
        <div style={headerRowStyles}>
          <a href="#">Logo</a>
          <HeaderMenu items={menuItems} />
          <button style={buttonStyle}>Purchase</button>
        </div>
        {title && <h1>{title}</h1>}
      </header>
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