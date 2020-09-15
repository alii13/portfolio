import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Aboutus() {
  let p1 = useRef(null);
  let p2 = useRef(null);
  let p3 = useRef(null);
  let p7 = useRef(null);
  let p5 = useRef(null);
  let p6 = useRef(null);
  const [width, setWidth] = React.useState(window.innerWidth);
  //const [data, setData] = React.useState(true);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  useEffect(() => {
    if (width > 476) {
      //p1
      // gsap.set(p1, { perspective: 400 });
      // const splittedTextp1 = new SplitTextJS(p1);
      // const textWordsp1 = splittedTextp1.words;

      // //p2

      // // gsap.set(p2, {perspective: 400});
      // // const splittedTextp2 = new SplitTextJS(p2);
      // // const textWordsp2 = splittedTextp2.words;

      // //p3

      // gsap.set(p3, { perspective: 400 });
      // const splittedTextp3 = new SplitTextJS(p3);
      // const textWordsp3 = splittedTextp3.words;

      // //p4
      // gsap.set(p7, { perspective: 400 });
      // const splittedTextp7 = new SplitTextJS(p7);
      // const textWordsp7 = splittedTextp7.words;

      // //p5

      // gsap.set(p5, { perspective: 400 });
      // const splittedTextp5 = new SplitTextJS(p5);
      // const textWordsp5 = splittedTextp5.words;

      //p6

      // gsap.set(p6, {perspective: 400});
      // const splittedTextp6 = new SplitTextJS(p6);
      // const textWordsp6 = splittedTextp6.words;

      const z3 = gsap.timeline();
      // z3.from(
      //   [textWordsp1, textWordsp3],
      //   {
      //     duration: 0.6,
      //     opacity: 0,
      //     scale: 0,
      //     y: 80,
      //     scrollTrigger: {
      //       trigger: ".trigger2",
      //       scrub: -0.5,
      //       end: "end top",
      //     },
      //     rotationX: 180,
      //     transformOrigin: "0% 50% -50",
      //     ease: "back",
      //     stagger: 0.07,
      //   },
      //   "-0.1"
      // )
        z3.from(
          ".ov",
          {
            scale: 1.5,
            ease: "none",
            duration: 0.5,
            scrollTrigger: {
              trigger: ".trigger2",
              scrub: -0.5,
              end: "center top",
            },
          },
          "0"
        )

        // .from(
        //   [textWordsp5, textWordsp7],
        //   {
        //     duration: 0.6,
        //     opacity: 0,
        //     scale: 0,
        //     y: 80,
        //     delay: 2,
        //     scrollTrigger: {
        //       trigger: ".trigger2",
        //       scrub: -0.5,
        //       end: "end+=100% top",
        //     },
        //     rotationX: 180,
        //     transformOrigin: "0% 50% -50",
        //     ease: "back",
        //     stagger: 0.07,
        //   },
        //   "+=2"
        // );
    } else {
      const z3 = gsap.timeline();
      z3.from(
        ".ov",
        {
          scale: 1.5,
          ease: "none",
          duration: 0.5,
          scrollTrigger: {
            trigger: ".trigger2",
            scrub: -0.5,
            end: "center top",
          },
        },
        "0"
      );
    }
  }, []);
  return (
    <div className="project-section trigger2" id="aboutme">
      <Container className="project ">
        <div className="project-heading text-left ">
          <h3 className="basic-heading" style={{ marginLeft: "0" }}>
            About Me!
          </h3>
        </div>
        <Row>
          <Col sm={12} md={6} lg={6} className="order-1  order-md-0">
            <div className="px-3  px-md-none">
              <h3 className="mb-title d-md-none mb-2 mb-md-none">
                Shekh Aliul
              </h3>
              <p
                ref={(el) => {
                  p1 = el;
                }}
                className="text-muted text-left"
              >
                Hello! I'm <span className="text-danger">Ali</span>, a aspiring
                developer based in Phagwara, India.
              </p>
              <p
                ref={(el) => {
                  p2 = el;
                }}
                className="text-muted text-left"
              >
                Currently pursuing CSE from Lovely Professional University, I
               worked with 3+ organizations  where I work on a
                wide variety of interesting and meaningful projects on a daily
                basis. I've been working with
                recently: JavaScript (ES6+) HTML & (S)CSS React, Gatsby, Node.js,
                 WordPress, Nextjs, Bootstrap.
              </p>
              <p
                ref={(el) => {
                  p3 = el;
                }}
                className="text-muted text-left"
              >
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="list text-muted">
                <li>JavaScript</li>
                <li>SCSS</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>HTML5</li>
                <li>GSAP</li>
              </ul>
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="mobile-margin order-0 order-md-1 mb-3 mb-md-0"
          >
            <div className="big-wrapper">
              <div className="wrapper-img">
                <img
                  src={require("../images/ali.jpg")}
                  alt="ali"
                  className="img-fluid ov"
                  style={{ borderRadius: "6px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <div className="space"></div>

        <Row className="second-person">
          <Col sm={12} md={6} lg={6} className="mb-5 mb-md-0">
            <div className="big-wrapper2">
              <div className="wrapper-img">
                <img
                  src={require("../images/rd2.jpg")}
                  alt="ali"
                  className="img-fluid ov"
                  style={{ borderRadius: "6px" }}
                />
              </div>
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className="px-3  px-md-none">
              <h3 className="mb-title d-md-none mb-2 mb-md-none">
                MR. Doraemon
              </h3>
              <p
                ref={(el) => {
                  p5 = el;
                }}
                className="text-muted text-left"
              >
                Hello! I'm <span class="text-danger">Doraemon</span>, a software
                engineer based in Phagwara, India.
              </p>
              <p
                ref={(el) => {
                  p6 = el;
                }}
                className="text-muted text-left"
              >
                Shortly after graduating from Lovely Professional University, I
                joined the engineering team at Upstatement where I work on a
                wide variety of interesting and meaningful projects on a daily
                basis. Here are a few technologies I've been working with
                recently: JavaScript (ES6+) HTML & (S)CSS React Vue Node.js
                WordPress
              </p>
              <p
                ref={(el) => {
                  p7 = el;
                }}
                className="text-muted text-left"
              >
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="list text-muted">
                <li>JavaScript</li>
                <li>SCSS</li>
                <li>React</li>
                <li>Gatsby</li>
                <li>HTML5</li>
                <li>GSAP</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutus;
