import React from "react";
import "./style/footer.css"
import footer_li_data from "./informations/footer_data";

function Create_footer(fstyle) {
    return(
        <div className="icn" key={fstyle.id}><a href={fstyle.href_link}><i className={fstyle.iclass}></i></a></div>
    )
}

function Footer() {
    return (
        <section className="footer">
            <div className="icons">
                {footer_li_data.map(Create_footer)}
            </div>
            <div className="cpyr">
                <p>
                    2023&nbsp;<span><i className="bi bi-c-circle"></i>&nbsp;</span>PrasadKhatake
                </p>
                <p>Made with&nbsp;<span><i className="bi bi-heart-fill"></i></span></p>
            </div>
        </section>
    )
}

export default Footer;