import React from "react"
import NavItem from "../../../components/nav-item";
import {NavigationItem} from "../../../model/navigation-item";
import {HiOutlineBars3} from "react-icons/hi2";
import {useEffect, useRef, useState} from "react";
import {MdSearch} from "react-icons/md";
import FlagLogoIcons from "../../../components/flag-logo-icons";


export default function NavigationBarDrawerMode(props) {
    const {navigations} = props;
    const [isOpen, setIsOpen] = useState(false);
    const insideDrawer = useRef(false);
    const isFirstOpen = useRef(true);

    useEffect(() => {
        const resize = function(e) {
            if (window.innerWidth < 800 && !isFirstOpen.current) {
                isFirstOpen.current = true;
            }
        }
        window.addEventListener("resize", resize);
        return ()=> {
            window.removeEventListener("resize", resize);
        }
    }, [])

    useEffect(() => {
        const closeDrawer = function(e) {
            if(!insideDrawer.current) {
                setIsOpen(false);
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
        e.stopPropagation();
        document.getElementById("root").classList.toggle("disable");
        isFirstOpen.current = false;
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className={"navigation-drawer-container top-navigation-menu fixed"}>
                <img className="logo" src={require('../../../assests/logo.png')} alt="logo"/>
                <HiOutlineBars3 className="navigation-drawer-icon" onClick={openDrawer}/>
                <div className={"navigation-drawer " + (isOpen ? "slide-in visible " : "slide-out ") + (isFirstOpen.current ? "hidden" : "")}
                     onMouseEnter={()=> insideDrawer.current = true}
                     onMouseLeave={()=> insideDrawer.current = false}
                >
                    {navigations.map((item, index) =>
                        <NavItem {...item} key={index} />
                    )}
                    <div className="search-box">
                        <input className="search-area" type="text" placeholder="Tìm kiếm"/>
                        <MdSearch className="right-icon" />
                    </div>
                    <div className="additional-options">
                        <FlagLogoIcons />
                    </div>
                </div>
            </div>
            <div style={{height: 57}}></div>
        </React.Fragment>
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