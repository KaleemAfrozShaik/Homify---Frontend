import React,{useState} from "react";
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
    const [menuOpened,setMenuOpened]=useState(false);
    const getMenuStyles=(menuOpened)=>{
        if(document.documentElement.clientWidth<=800){
            return {right:!menuOpened && '-100%'}
        }

    }
    return(
        <section className="h-wrapper">
            <div className=" flexCenter paddings innerWidth h-container">
                <img src="./Homify1.png" alt="" width={120}/>
                <OutsideClickHandler
                onOutsideClick={()=>{
                    setMenuOpened(false)
                }}>
                <div className="h-menu flexCenter"
                    style={getMenuStyles(menuOpened)}
                    >
                    <a href="#residencies">Residencies</a>
                    <a href="#value">Our Value</a>
                    <a href="#contact-us">Contact Us</a>
                    <a href="#get-started">Get Started</a>
                    <button className="button"><a href="mailto:kaleemafrozshaik786@gmail.com">Contact</a></button>
                </div>
                </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>(setMenuOpened((prev)=>!prev))}>
                <BiMenuAltRight size={30}/>
            </div>
            </div>
        </section>
    );
};

export default Header;
