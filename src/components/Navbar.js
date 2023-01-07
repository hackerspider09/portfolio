import React,{ useRef } from "react";
import "./style/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    // var hamburger = document.querySelector(".hamb");
    // var header = document.querySelector("header");
    // // var links = document.querySelector(".navlist li");
    // var navbar = document.querySelector(".navbar");
    
    // hamburger.addEventListener("click",function(){
    //     // console.log("hamb pressed")
    //     this.classList.toggle("click");
    //     // navlist.classList.toggle("open");
    //     navbar.classList.toggle("navbar-v");
    //     header.classList.toggle("header-on-toggle");
    
    
    
    // })

    const Navref =useRef();
    const Hamburger =useRef();
    const Headerref =useRef();
    const Clicked = () => {
        console.log("Btn pressed");
        Navref.current.classList.toggle("navbar-v");
        Hamburger.current.classList.toggle("click");
        Navref.current.classList.toggle("res_nabar");
        Headerref.current.classList.toggle("header-on-toggle");

    }

    return (
        <header className="header" ref={Headerref}>
            
            <div className="nav_name">
                <span>&lt;</span><span>Prasad</span><span>/&gt;</span>
            </div>
            
            {/* <!-- <div className="nav_name">Prasad Khatake</div> --> */}
            <div className="navbar-v navbar" id="navid" ref={Navref}>
                
                <ul className="navlist" >
                    <li className="navlist_li_anim"><Link  to={"/"} >Home</Link></li>
                    <li className="navlist_li_anim"><Link  to="/about" >About</Link></li>
                    <li className="navlist_li_anim"><Link  to="/project" >Projects</Link></li>
                    <li className="navlist_li_anim"><Link  to="/contact" >Contact</Link></li>
                </ul>
                
            </div>
            
            <div className="menu-bg" id="menu-bg"></div>
            <div className="hamb" id="hambid" onClick={Clicked} ref={Hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Navbar;