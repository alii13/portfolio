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
                title="WhatsApp Clone"
                description={`Online Messaging Platform where one can send message to others
                in blazing fast speed\n
                
                `}
                one="React"
                two="Redux"
                three="Firebase"
                link="https://github.com/alii13/whatsapp-clone"
                demo="http://whatsapp-clone-fafc9.web.app/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="URL Shortner"
                description={`A simple Minimal UI based URL shortner for the people who love
                short urls. Used Firebase database for redirection`}
                one="React"
                two="Material UI"
                three="Firebase"
                link="https://github.com/alii13/url-shortner-using-reactjs-firebase"
                demo="https://lazyurl.ninja/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Novus"
                description="React based Minimal , blazing fast website for a client. Intregated detailed google analytics events for users "
                one="React"
                two="Context Api"
                three="Firebase"
                link="https://github.com/alii13/Novus-bootstrap-website"
                demo="https://myynovus.in"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="cd">
              <Cards
                title="Covid19 live meter"
                description={`This website is used to show live covid 19 info from all across the globe.I have personally made a detailed analysis on india`}
                one="HTML5"
                two="Bootstrap"
                three="Jquery"
                link="https://github.com/alii13/covid19-live-info"
                demo="http://covidvirus.epizy.com/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Weather App"
                description={`A simple Minimal app to find the weather of any city within matter of second by making a search`}
                one="React"
                two="Bootstrap"
                three="Weather API"
                link="https://github.com/alii13/Weatherapp"
                demo="https://alii13.github.io/Weatherapp/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Apple Site Clone (In Progress)"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."
                one="HTML5"
                two="GSAP"
                three="Javascript"
                link="https://github.com/alii13/scrollme"
                demo="https://alii13.github.io/scrollme/"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
