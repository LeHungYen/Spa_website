import { MdSearch  } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import FlagLogoIcons from "../../../components/flag-logo-icons";
import {useState} from "react";
import {getDict} from "../../../services/dict";
export default function SiteTopBar(props) {
    const {phone} = props;
    const [showSearch, toggleSearch] = useState(false);
    return (
        <div className="site-top-bar-container" >
            <div className="site-top-bar">
                <img className="logo" src={require('../../../assests/logo.png')} alt="logo"/>
                <div className="top-bar-right-box">
                    <div className="search-box">
                        <MdSearch className="right-icon" onClick={()=> toggleSearch(!showSearch)}/>
                        <input className={"search-area popup " + (showSearch ? "" : "hidden")} type="text" placeholder="Tìm kiếm"/>
                    </div>
                    <FlagLogoIcons />
                    <div className="contract-info-detail">
                        <div>
                            <BsFillTelephoneFill className="left-icon" />
                            <span>{getDict("contact_msg")}</span>
                        </div>
                        <span>{phone}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}