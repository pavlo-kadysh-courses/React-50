import { useState, createContext } from "react";

export const langContext = createContext("ua");

const LangContext = ({children}) => {
    const [lang, setLang] = useState("ua");

    const switchLang = () => {
        setLang(prevLang => prevLang === "ua" ? "ru" : "ua");
    }

    return (
        <langContext.Provider value={{lang, switchLang}}>
            {children}
        </langContext.Provider>
    )
}

export default LangContext;