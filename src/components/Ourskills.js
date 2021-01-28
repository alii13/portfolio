import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { GrGatsbyjs } from "react-icons/gr";
import { SiNodeDotJs } from "react-icons/si";
import { DiJavascript, DiMongodb } from "react-icons/di";
import gsap from "gsap";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Ourskills() {
  const [width, setWidth] = React.useState(window.innerWidth);
  //const [data, setData] = React.useState(true);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    if (width > 576) {
      const z2 = gsap.timeline();
      z2.from(".left", {
        ease: "none",
        xPercent: -50,
        autoAlpha: 0,
        scrollTrigger: {
          trigger: ".trigger1",
          end: "center top+=20%",
          scrub: true,
          pin: true,
        },
        stagger: 0.2,
      })
        .from(
          ".violet",
          {
            ease: "none",
            scrollTrigger: {
              trigger: ".trigger1",
              scrub: true,
            },
            rotate: 450,
            stagger: 0.2,
          },
          "0"
        )
        .from(
          ".timeline-ic",
          {
            ease: "none",
            scrollTrigger: {
              trigger: ".trigger1",
              scrub: true,
            },
            rotate: 720,
            stagger: 0.2,
          },
          "0"
        )
        .from(
          ".right",
          {
            ease: "none",
            xPercent: 50,
            autoAlpha: 0,
            scrollTrigger: {
              trigger: ".trigger1",
              end: "center top+=20%",
              scrub: true,
              pin: true,
            },
            stagger: 0.2,
          },
          "0.5"
        );
    } else {
      // const z2=gsap.timeline();
      // z2
      // .from(".left",{
      //     ease:"none",
      //     xPercent:-20,
      //     autoAlpha:0,
      //     scrollTrigger:{
      //         trigger:".trigger1",
      //     },
      //     stagger:0.2
      // })
      // .from(".violet",{
      //     ease:"none",
      //     scrollTrigger:{
      //         trigger:".trigger1",
      //         scrub:true,
      //     },
      //     rotate:450,
      //     stagger:0.1
      // },"0")
      // .from(".timeline-ic",{
      //     ease:"none",
      //     scrollTrigger:{
      //         trigger:".trigger1",
      //         scrub:true,
      //     },
      //     rotate:720,
      //     stagger:0.1
      // },"0")
      // .from(".right",{
      //     ease:"none",
      //     xPercent:20,
      //     autoAlpha:0,
      //     scrollTrigger:{
      //         trigger:".trigger1",
      //     },
      //     stagger:0.2
      // },"0.3")
    }
  });
  return (
    <div className="project-section trigger1 " id="skills">
      <Container className="project  ">
        <div className="project-heading text-left">
          <h3 className="basic-heading">Skills - ( MERN ) </h3>
        </div>
        <div class="container skills ">
          <div class="row">
            <div class="col-md-12">
              <div class="main-timeline">
                <a href="#" class="timeline">
                  <div class="timeline-icon left">
                    <DiMongodb
                      className="timeline-ic"
                      style={{ color: "#3FA037" }}
                    />
                  </div>
                  <div class="timeline-content right rr">
                    <h3 class="title">MongoDB</h3>
                    <p class="description">
                      One of my favorite database, that I love to work on. I
                      have created a number SAAS product on MERN stack using
                      mongodb.
                    </p>
                  </div>
                </a>
                <a href="#" class="timeline">
                  <div class="timeline-icon right ">
                    <DiJavascript
                      style={{ color: "black" }}
                      className="timeline-ic text-warning"
                    />
                  </div>
                  <div class="timeline-content left">
                    <h3 class="title">Express js</h3>
                    <p class="description">
                      I love to use express js for creating server on node js.
                      It's robust nature help me to setup projects very quickly
                      and efficiently.
                    </p>
                  </div>
                </a>
                <a href="#" class="timeline">
                  <div class="timeline-icon right ">
                    <FaReact className="timeline-ic" />
                  </div>
                  <div class="timeline-content left">
                    <h3 class="title">React Js</h3>
                    <p class="description">
                      Proficient React developer developing web applications
                      from past 1.5 years. Learned code modularity, performance
                      optimizations.
                    </p>
                  </div>
                </a>
                <a href="#" class="timeline">
                  <div class="timeline-icon left">
                    <SiNodeDotJs
                      style={{ color: "#3C873A" }}
                      className="timeline-ic violet"
                    />
                  </div>
                  <div class="timeline-content right rrm">
                    <h3 class="title">Nodejs</h3>
                    <p class="description">
                      For becoming a pro on my stack ( MERN ). I have learnt this at last and developed various applications and still learning.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Ourskills;
