import {changeLanguage} from "../store/action";
import {connect, useDispatch, useSelector} from 'react-redux';


function FlagLogoIcons() {
    const dispatch = useDispatch();
    const handleLanguageChange = (lang) => {
        changeLanguage(dispatch ,lang);
    };
    return(
        <div className="lang-chooser">
            <img
                className="flag-icon"
                src={require("../assests/flag_en.jpg") }
                alt="EN /"
                onClick={
                    ()=>handleLanguageChange("en")
                }
            />
            <img
                className="flag-icon"
                src={require("../assests/flag_ja.jpg") }
                alt="JP /"
                onClick={
                    ()=>handleLanguageChange("jp")
                }
            />
            <img
                className="flag-icon"
                src={require("../assests/flag_vn.jpg") }
                alt="VI"
                onClick={
                    ()=>handleLanguageChange("vi")
                }
            />
        </div>
    )
}



export default FlagLogoIcons;