import React from "react";
import "./style/hero.css";
import Typing from "./Typing_animation";
function Hero() {
    return (
    <section class="hero" id="home">
        <div class="hero_content">
            <div class="hero_texts">
                <h1><span>H</span>ello</h1>
                <h3>I Am <span class="input"><Typing/> </span></h3>
                
            </div>
        </div>


        {/* <!-- animation --> */}
        <div class="effect1">
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
        <div class="effect2">
            <span></span>
        </div>
        <div class="rings">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        
    </section>
    )
}


export default Hero;