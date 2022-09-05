import HeaderMenu from "./HeaderMenu/HeaderMenu";

export default function Header({title, menuItems}) {
  return (
    <>
        <header className="header">
            <HeaderMenu items={menuItems} />
            <h1>{title}</h1>
        </header>
    </>
  )
}
