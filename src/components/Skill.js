import React from 'react';
import "./style/skill.css";
import skill_data from "./informations/skill_data";

function CreateBox(icnstyle) {
    return (
    <div className="sk1 sk-in-box" key={icnstyle.id}>
        <i className={icnstyle.iclass}></i>
    </div>
    );
}

function Skill() {
    return (
            // <!-- Skills Section -->
        <section id="skills" className="skill">
            <div className="skillbox">
                <h1>My Skills</h1>
                <div className="skills">
                    {skill_data.map(CreateBox)};
                </div>
            </div>

        </section>
        );
}

export default Skill;