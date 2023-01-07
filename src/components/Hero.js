import React from "react";
import "./style/hero.css";
import Typing from "./Typing_animation";
function Hero() {
    return (
    <section className="hero" id="home">
        <div className="hero_content">
            <div className="hero_texts">
                <h1><span>H</span>ello</h1>
                <h3>I Am <span className="input"><Typing/> </span></h3>
                
            </div>
        </div>


        {/* <!-- animation --> */}
        <div className="effect1">
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div>
        </div>
        <div className="effect2">
            <span></span>
        </div>
        <div className="rings">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
    </section>
    )
}


export default Hero;