import React from 'react';
import "./style/contact.css";
import contact_det from './informations/contact_data';
function Contact_detail(contstyle) {
    return (
        <div key={contstyle.id}>
            <i className={contstyle.iclass}/><span>{contstyle.span_data}</span><p>{contstyle.p_data}</p>
        </div>
    );
}


function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-sect">
                <h1>Contact Me</h1>
                <div className="contact-sec">
                    <div className="contact-con">
                        <h3>let's keep in touch.</h3>
                        <div className="contact-con-det">
                            {contact_det.map(Contact_detail)}
                        </div>
                    </div>
                    <div className="contact-form">
                        <form className="con-form">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Name</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Prasad" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Enter Your Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="abc@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Any Message For Me"></textarea>
                            </div>
                            <div className="contact-btndiv d-grid gap-2"><button className="btn btn-primary" type="button">Message</button></div>
                        </form>
            
                    </div>
        
                </div>

            </div>

        </section>
    );
}

export default  Contact;