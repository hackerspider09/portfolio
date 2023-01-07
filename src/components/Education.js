import React from "react";
import "./style/education.css"
import education_data from "./informations/education_data"
function CreateEduCard(edata) {
    return (
        <div className="edu" key={edata.id}>
            <div className="line-circle"></div>
            <div className="edu-data">
                <h3>{edata.clg}</h3>
                <h4>{edata.deg}</h4>
                <h6>{edata.year}</h6>
            </div>
        </div>
    )
}

function Education() {
    return (
        <section className="edu-section">
            <h1>Education</h1>
            <div className="edu-sec">
                {education_data.map(CreateEduCard)}
            </div>
        </section>
    )
}

export default Education;