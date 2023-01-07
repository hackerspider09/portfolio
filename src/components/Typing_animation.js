import React from "react";
import Typewriter from "typewriter-effect";
import "./style/typing.css";
function Typing() {
    return (
        <Typewriter
            options={{
            strings: ['Prasad Khatake', 'Web Developer','Graphics Designer'],
            autoStart: true,
            loop: true,
            // delay: 100,
            pauseFor:1000,
            skipAddStyles:false,
            }}
        />
    )
}

export default Typing