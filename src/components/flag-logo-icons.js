import {useContext} from "react";
import {LanguageContext} from "../context/language-context"

export default function FlagLogoIcons() {
    const langContext = useContext(LanguageContext);
    const {lang, setLang} = langContext;
    return(
        <div className="lang-chooser">
            <img
                className="flag-icon"
                src={require("../assests/flag_en.jpg") }
                alt="EN /"
                onClick={()=> {
                    setLang("en");
                }}
            />
            <img
                className="flag-icon"
                src={require("../assests/flag_ja.jpg") }
                alt="JP /"
                onClick={()=> {
                    setLang("jp");
                }}
            />
            <img
                className="flag-icon"
                src={require("../assests/flag_vn.jpg") }
                alt="VI"
                onClick={()=> {
                    setLang("vi");
                }}
            />
        </div>
    )
}