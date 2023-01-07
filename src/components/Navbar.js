import React,{ useRef } from "react";
import "./style/navbar.css";


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
            
            <div class="nav_name">
                <span>&lt;</span><span>Prasad</span><span>/&gt;</span>
            </div>
            
            {/* <!-- <div class="nav_name">Prasad Khatake</div> --> */}
            <div class="navbar-v navbar" id="navid" ref={Navref}>
                
                <ul class="navlist" >
                    <li className="navlist_li_anim"><a  href="#home">Home</a></li>
                    <li className="navlist_li_anim"><a  href="#skills">Skills</a></li>
                    <li className="navlist_li_anim"><a  href="#project">Projects</a></li>
                    <li className="navlist_li_anim"><a  href="#contact">Contact</a></li>
                </ul>
                
            </div>
            
            <div class="menu-bg" id="menu-bg"></div>
            <div class="hamb" id="hambid" onClick={Clicked} ref={Hamburger}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    )
}

export default Navbar;