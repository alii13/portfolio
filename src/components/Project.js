import React, { useRef, useEffect } from "react";
import Cards from "./Cards"
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Project() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
    
  }, []);
  gsap.registerPlugin(ScrollTrigger);
  const card1 = [
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  // let pg=useRef(null);
  // var n=ReactDOM.findDOMNode(pg);
  // useEffect((n)=>{
  //      n=ReactDOM.findDOMNode(pg);
  //     console.log(n.offsetTop);
  //    // console.log(pg.current.offsetTop;)
  // },[n])

  const card2 = [
    {
      title: "WhatsApp Clone",
      description:
        `Online Messaging Platform where one can send message to others
        in blazing fast speed\n`,
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  useEffect(() => {
    if (width > 476) {
    const z1 = gsap.timeline();
    z1.from(".cd", {
      duration: 0.4,
      stagger: 0.15,
      ease: Power2.easeInOut,
      y: 100,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".project-section",
        end: "top+=10% top",
        scrub: true,
      },
    })
    .from(".basic-heading",{
      ease:Power2.easeInOut,
      scrollTrigger:{
        trigger:"project-section",
        start:"center-=10% center",
        end:"center-=5% center",
        scrub: true,
      },
      y:50,
    })
    .from(".project-heading::after",{
      ease:Power2.easeInOut,
      scrollTrigger:{
        trigger:"project-section",
        start:"center-=10% center",
        end:"center-=5% center",
        scrub: true,
      },
      width:0,

    })
  }
  });

  return (
    <div className="project-section" id="project">
      <Container className="project ">
        <div className="project-heading text-left">
          <h3 className="basic-heading">Projects !</h3>
        </div>
        <Row>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="React Captchaa package"
                description={`A simple lightweight react component for generating captchas. Published on npm\n
                
                `}
                one="React"
                two="npm"
                three=""
                link="https://github.com/alii13/react-captchaa"
                demo="https://alii13.github.io/react-captchaa/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Examination Management System"
                description={`EMS is an examination portal for educational insititutions which will help them to take test & communicate remotely with students in this quarantine period.`}
                one="React"
                two="Nodejs"
                three="Antd"
                link="https://github.com/alii13/examination-management-system"
                demo="https://ems-in.herokuapp.com/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Docs Go"
                description="A Simple file transfer application that can transfer file up to 8gb b/w two users. (Mobile version still in dev ) "
                one="React"
                two="Socket.io"
                three="Nodejs"
                link="https://github.com/alii13/docsgo"
                demo="https://docsgo.herokuapp.com/"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="WhatsApp Clone"
                description={`A full-stack real-time WhatsApp clone using reactjs and firebase`}
                one="React"
                two="Firebase"
                three=""
                link="https://github.com/alii13/whatsapp-clone"
                demo="https://whatsapp-73989.web.app/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Cheatmcqs"
                description="This is a tool for downloading MCQs from sanfoundry ( a MCQ questions bank website with content over 10k+ pages ) in a couple of seconds in pdf/txt format."
                one="HTML5"
                two="CSS"
                three="Javascript"
                link=""
                demo="https://www.cheatmcqs.in"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
