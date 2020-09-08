import React,{useEffect} from 'react'
import {FaReact} from 'react-icons/fa'
import {GrGatsbyjs} from 'react-icons/gr'
import {SiNextDotJs} from 'react-icons/si'
import {DiJavascript} from 'react-icons/di'
import gsap from "gsap";

import { Container,Row,Col,Card,Button } from 'react-bootstrap';

function Ourskills() {
    const [width, setWidth] = React.useState(window.innerWidth);
    //const [data, setData] = React.useState(true);
React.useEffect(() => {
   const handleWindowResize = () => setWidth(window.innerWidth);
   window.addEventListener("resize", handleWindowResize);
   return () => window.removeEventListener("resize", handleWindowResize);
 }, []);
    useEffect(()=>{
        if(width>576){
        const z2=gsap.timeline();
        z2
        .from(".left",{
            ease:"none",
            xPercent:-50,
            autoAlpha:0,
            scrollTrigger:{
                trigger:".trigger1",
                end:"center top+=20%",
                scrub:true,
                pin:true,
            },
            stagger:0.2
        })
        .from(".violet",{
            ease:"none",
            scrollTrigger:{
                trigger:".trigger1",
                scrub:true,
            },
            rotate:450,
            stagger:0.2

        },"0")
        .from(".timeline-ic",{
            ease:"none",
            scrollTrigger:{
                trigger:".trigger1",
                scrub:true,
            },
            rotate:720,
            stagger:0.2

        },"0")
        .from(".right",{
            ease:"none",
            xPercent:50,
            autoAlpha:0,
            scrollTrigger:{
                trigger:".trigger1",
                end:"center top+=20%",
                scrub:true,
                pin:true,
            },
            stagger:0.2
        },"0.5")
    }else{
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
    })
    return (
        <div className="project-section trigger1 " id="skills">
           
        <Container  className="project  ">
        <div className="project-heading text-left"><h3 className="basic-heading">Skills !</h3></div>
        <div class="container skills ">
     
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline">
                        <a href="#" class="timeline">
                            <div class="timeline-icon left"><GrGatsbyjs className="timeline-ic violet"/></div>
                            <div class="timeline-content right rrm">
                                <h3 class="title">Gatsby Js</h3>
                                <p class="description">
                                   Learnt gatsby in the lockdown and made familiar with Key concepts of Gatsby js like why it is blazing fast static stie generator
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon right "><FaReact className="timeline-ic"/></div>
                            <div class="timeline-content left">
                                <h3 class="title">React Js</h3>
                                <p class="description">
                                    Proficient React developer faimilar with CRA, doing react from past 1.2years made a large variety of websites for clients.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon left">< SiNextDotJs className="timeline-ic" style={{color:"black"}}/></div>
                            <div class="timeline-content right rr">
                                <h3 class="title">Next Js</h3>
                                <p class="description">
                                    Learnt Next js in this Lockdown, Grasp a strong grip over the concepts of SSR - Server Side Rendering, Next js routes as well as static functionality.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon right ">< DiJavascript className="timeline-ic text-warning"/></div>
                            <div class="timeline-content left">
                                <h3 class="title">HTML5, CSS, Javascript, GSAP</h3>
                                <p class="description">
                                    Having Strong grasp in HTML5, CSS, Javascript, Bootstrap, Jquery, GSAP, Bulma. Love to build things from scratch and made about 8+ projects using these techs
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


        </Container>
        </div>
    )
}

export default Ourskills
