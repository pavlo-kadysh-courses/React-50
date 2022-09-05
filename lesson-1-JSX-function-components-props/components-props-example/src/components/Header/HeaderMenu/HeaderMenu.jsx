import HeaderMenuItem from "./HeaderMenuItem";

export default function HeaderMenu({items}) {
    const elements = items.map(({id, link, text}) => <HeaderMenuItem key={id} link={link} text={text}/>)
  return (
    <ul className="header-menu">{elements}</ul>
  )
}
