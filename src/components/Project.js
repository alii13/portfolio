import React,{useRef,useEffect} from 'react'
import Cards from "./cards";
import gsap,{Power2} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
function Project() {
    gsap.registerPlugin(ScrollTrigger);
    const card1=[
        {   title:"hello world",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {   title:"hello world",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {   title:"hello world",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ]
    // let pg=useRef(null);
    // var n=ReactDOM.findDOMNode(pg);
    // useEffect((n)=>{
    //      n=ReactDOM.findDOMNode(pg);
    //     console.log(n.offsetTop);    
    //    // console.log(pg.current.offsetTop;)
    // },[n])
    
    const card2=[
        {   title:"hello world",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {   title:"hello world",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {   title:"hello world",
        description:"Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ]

    useEffect(()=>{
        const z1= gsap.timeline();
        z1.from(".cd",{
            duration:0.4,
            stagger:0.15,
            ease:Power2.easeInOut,
            y:100,
            autoAlpha:0,
            scrollTrigger:{
                trigger:".project-section",
                end:"top+=10% top",
                scrub:true,
            }
        })
    })

    return (
        <div  className="project-section" id="project">
           
        <Container  className="project ">
        <div className="project-heading text-left"><h3 className="basic-heading">Projects !</h3></div>
            <Row>
                <Col lg={4}>
                    <div className="cd">
                    <Cards  className="cd" title="First Project" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="cd">
                    <Cards className="cd" title="Second Project" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="cd">
                    <Cards className="cd" title="Third Project" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    </Col>
                
              
            </Row>
            <Row>
                <Col lg={4}>
                    <div className="cd">
                    <Cards  title="Fourth Project" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="cd">
                    <Cards className="cd" title="Fifth Project" description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    </Col>
                    <Col lg={4}>
                    <div className="cd">
                    <Cards className="cd" title="Sixth Project"   description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                    </div>
                    </Col>
                
              
            </Row>


        </Container>
        </div>
    )
}

export default Project
