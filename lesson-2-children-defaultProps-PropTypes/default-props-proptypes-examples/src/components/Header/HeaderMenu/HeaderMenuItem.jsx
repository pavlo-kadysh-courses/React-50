const HeaderMenuItem = ({link, text}) => {

    return (<li>
                <a className="header-menu-link" href={link}>{text}</a>
            </li>);
}

export default HeaderMenuItem;
