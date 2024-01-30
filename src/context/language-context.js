import { createContext, useState } from "react";

const LanguageContext = createContext({});
const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };