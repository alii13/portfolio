import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
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

  return (
    <div className="project-section trigger4 " id="contactme">
      <Container className="project">
        <div className="contact-wrapper">
          <div className="project-heading text-left ">
            <h3 className="basic-heading" style={{ marginLeft: "0" }}>
              Whats Next!
            </h3>
          </div>
          <Container className="d-flex justify-content-center dabba h align-items-center">
            <div>
              <h1 className=" text-center contact-title ct-1">
                <span>Get</span> In{" "}
                <span className="text-danger ct2">Touch !</span>
              </h1>
              <br />
              <p className="text-muted contact-description">
               Currently looking for any new opportunities, my
                inbox is always open. Whether you have a question or just want
                to say hi, I'll try my best to get back to you!
              </p>
              <br />
              <br />
              <a href="https://api.whatsapp.com/send?phone=+917275439042"><div className="btn btn-danger hello" style={{color:"white"}}>Say Hello</div></a>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Contactus;
