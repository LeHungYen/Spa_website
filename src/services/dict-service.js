import {useContext} from "react";
import {LanguageContext} from "../context/language-context"

export default function getDict(key) {
    const languageContext = useContext(LanguageContext);
    const {lang, setLang} = languageContext;
}