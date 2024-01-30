import React from 'react'
import {useEffect, useState} from "react";
import SiteTopBar from "./site-top-bar";
import NavigationMenuBar from "./navigation-menu-bar";
import NavigationBarDrawerMode from "./navigation-bar-drawer-mode";

export default function NavigationBar() {
    const [pos, setPos] = useState(0);

    useEffect(()=>{
        const handleScroll = function (e) {
            const pos =  e.currentTarget.scrollTop;
            const isFixed = e.currentTarget.classList.contains("fixed");
            if(!isFixed) {
                setPos(pos);
            } else if(pos < 69 && isFixed) {
                setPos(pos);
            }
        }
        document.getElementById("root").addEventListener("scroll", handleScroll);
        return ()=>{
            document.getElementById("root").removeEventListener("scroll", handleScroll);
        }
    },[])


    return(
        <div className="navigation-bar-container">
            <SiteTopBar phone="0923123123"/>
            <NavigationMenuBar pos = {pos}/>
            <NavigationBarDrawerMode pos = {pos}/>
        </div>
    )
}