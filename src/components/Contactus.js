import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from './Footer';
function Contactus() {
    return (
        <div className="project-section">
           
        <Container  className="project">
        <div className="contact-wrapper">
        <div className="project-heading text-left "><h3 className="basic-heading" style={{marginLeft:"0"}}>Whats Next!</h3></div>
        <Container className="d-flex justify-content-center dabba h align-items-center">
        <div>
            <h1 className=" text-center contact-title">Get In <span className="text-danger">Touch</span></h1>
            <br/>
            <p className="text-muted contact-description">Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <br/>
            <br/>
            <div className="btn btn-danger hello">Say Hello</div>
            </div>
        </Container>
        </div>
        </Container>
        <Footer/>
        </div>
    )
}

export default Contactus
