import NavItem from "../../../components/nav-item";
import {NavigationItem} from "../../../model/navigation-item";
import {HiOutlineBars3} from "react-icons/hi2";
import {useEffect, useRef, useState} from "react";
import style from '../index.module.scss'
import {MdSearch} from "react-icons/md";


export default function NavigationBarDrawerMode(props) {
    const {navigations, pos} = props;
    const additionalClassName = pos > 57 ? "fixed" : ""
    const [isOpen, toggle] = useState(false);
    const insideDrawer = useRef(false);

    useEffect(() => {
        const closeDrawer = function(e) {
            if(!insideDrawer.current) {
                toggle(false);
                document.getElementById("root").classList.remove("disable");
            }
        }
        if(isOpen) {
            window.document.documentElement.addEventListener('click', closeDrawer);
        } else {
            window.document.documentElement.removeEventListener('click', closeDrawer);
        }
        return () => {
            window.document.documentElement.removeEventListener('click', closeDrawer);
        };
    }, [isOpen]);

    for (const i in navigations) {
        navigations[i]['items'] = undefined;
    }

    const openDrawer = function(e) {
        document.getElementById("root").classList.toggle("disable");
        e.stopPropagation();
        toggle(!isOpen);
    }



    return (
        <div className={"navigation-drawer-container top-navigation-menu " + additionalClassName}>
            <img className={"logo " + (pos > 57 ? "": "hidden")} src={require('../../../assests/logo.png')} alt="logo"/>
            <HiOutlineBars3 className="navigation-drawer-icon" onClick={openDrawer}/>
            <div className={"navigation-drawer " + (isOpen ? "visible" : "hidden")}
                 onMouseEnter={()=> insideDrawer.current = true}
                 onMouseLeave={()=> insideDrawer.current = false}
            >
                {navigations.map((item, index) =>
                    <NavItem {...item} />
                )}
                <div className="search-box">
                    <input className="search-area" type="text" placeholder="Tìm kiếm"/>
                    <MdSearch className="right-icon" />
                </div>
            </div>
        </div>
    )
}

NavigationBarDrawerMode.defaultProps = {
    navigations: [
        new NavigationItem("Home", "/"),
        new NavigationItem("Services", "/service"),
        new NavigationItem("Products", "/product"),
        new NavigationItem("About us", "/about"),
        new NavigationItem("Contact us", "/contact")
    ],
}