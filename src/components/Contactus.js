import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { saveAs} from 'file-saver';
import gsap from "gsap";
function Contactus() {
  useEffect(() => {
    const z4 = gsap.timeline();
    z4.from(".ct-1", {
      ease: "none",
      xPercent: -25,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".trigger4",
        scrub: true,
        end: "top top",
      },
    });
  }, []);
  const saveFile = () => {
    saveAs(
     "../images/Shekh_resume.pdf",
      "AliCV.pdf"
    );
  }

  return (
    <div className="project-section trigger4 " id="contactme">
      <Container className="project">
        <div className="contact-wrapper">
          <div className="project-heading text-left ">
            <h3 className="basic-heading" style={{ marginLeft: "0" }}>
              Whats Next!
            </h3>
          </div>
          <Container className=" xbody d-flex justify-content-center dabba h align-items-center">
            <div>
              <h1 className=" text-center contact-title ct-1">
                <span>Get</span> In{" "}
                <span className="text-danger ct2">Touch !</span>
              </h1>
              <br />
              <p className="text-muted contact-description">
               Ready for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I'll try my best to get back to you!
              </p>
              <br />
              <br />
             <span className="ct-box"><a href="https://api.whatsapp.com/send?phone=+917275439042"><div className="btn btn-danger hello" style={{color:"white", marginRight:"50px"}}>Say Hello</div></a>
             <div className="btn btn-danger hello" style={{color:"white"}} onClick={saveFile}>Resume</div></span> 
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Contactus;
