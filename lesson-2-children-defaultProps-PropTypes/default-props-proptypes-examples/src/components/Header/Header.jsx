import HeaderMenu from "./HeaderMenu/HeaderMenu";
import PropTypes from 'prop-types';
import "./header.css";


const menuItemsDefault = [
  {
      "id": "1",
      "link": "/",
      "text": "Home",
      "redirect": false
  },
  {
      "id": "2",
      "link": "/books",
      "text": "Books",
      "redirect": false
  },
]

const Header = ({title = "Home page", menuItems = menuItemsDefault}) => {
    return (
      <header className="header">
        <HeaderMenu items={menuItems} />
        {title && <h1>{title}</h1>}
      </header>
    )
  };

export default Header;

Header.defaultProps = {
  title: "Home page",
  menuItems: [
    {
        "id": "1",
        "link": "/",
        "text": "Home",
        "redirect": false
    },
    {
        "id": "2",
        "link": "/books",
        "text": "Books",
        "redirect": false
    },
]
}

Header.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      redirect: PropTypes.bool
    })
  )
}

