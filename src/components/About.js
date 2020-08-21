import React,{useEffect,useRef} from 'react';
import gsap,{Power1} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

function About() {
    gsap.registerPlugin(ScrollTrigger);
    let about = useRef(null);
    useEffect(()=>{
       const t12= gsap.timeline();
       t12
       .to(".panel-ab:not(:last-child)", {
            yPercent: -100, 
            ease: "none",
            stagger: 0.5,
            ease:"none",
            scrollTrigger: {
              trigger: ".wrapperx",
              start: "top top",
              end: "+=300%",
              scrub: true,
              pin: true
            }
          })

          /*
                        trigger: ".wrapperx",
              start: "top-=60% top",
              end: "+=100%",
              scrub: true,
              pin: true,
              pinSpacing:"+=100"
              */
          
          
          gsap.set(".panel-ab", {zIndex: (i, target, targets) => targets.length - i});
 
    },[])
    return (
        <div ref={el=>{about=el}}>
        <div className="container-fluid about wrapperx">
        <div className="panel-ab ">
            <h1 className="about-text">WE <span className="text-danger">DO</span></h1>
            </div>
            <div className="panel-ab sl-1">
            <h1 className="about-text"><span className="text-danger">Web</span>Dev </h1>
            </div>
            <div className="panel-ab sl-2">
            <h1 className="about-text">UX <span className="text-danger">Design</span></h1>
            </div>
            <div className="panel-ab sl-3">
            <h1 className="about-text"><span className="text-danger">UI </span>Design</h1>
            </div>
            <div className="panel-ab sl-4">
            <h1 className="about-text">BACKEND <span className="text-danger">Dev</span></h1>
            </div>

        </div>
            
        </div>
    )
}

export default About
