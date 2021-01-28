import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { GiClockwork } from "react-icons/gi";
import { SiWebpack, SiMaterialdesignicons, SiKubernetes } from "react-icons/si";
import { CgIfDesign } from "react-icons/cg";

import ScrollTrigger from "gsap/ScrollTrigger";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  let about = useRef(null);
  useEffect(() => {
     const t12 = gsap.timeline();
    // t12.to(".panel-ab", {
    //   ease: "none",
    //   stagger: 0.5,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".wrapperx",
    //     start: "top top",
    //     end: "+=300%",
    //     scrub: true,
    //     pin: true,
    //   },
    // });
 
    t12.to([".panel-ab"],{
        ease:"none",
      scrollTrigger: {
         start:"center-=5% center",
         end:"center+=55% center",
        trigger: ".wrapperx",
        pin:true,
        scrub: true,
      },
      duration:2,
      height:0,
    })
    t12.from(".ics__images",{
      ease:"none",
      stagger:"0.9",
      scrollTrigger: {
         start:"center-=5% center",
         end:"center+=55% center",
        trigger: ".wrapperx",
        scrub: true,
      },
      y:300

    })
    t12.to(".panel-ab3",{
      ease:"none",
      scrollTrigger: {
       trigger: ".wrapperx",
       start:"center center",
       end:"bottom center",
       pin:true,
       scrub: true,
     },
     height:0,
    },"-=0.3")
  //   t12.to([".panel-ab3"],{
  //     ease:"none",
  //   scrollTrigger: {
  //     start:"center+=55% center",
  //     end:"center+=45% center",
  //     trigger: ".wrapperx",
  //     pin:true,
  //     scrub: true,
  //     markers:true,
  //   },
  //   height:0,
  // })
  //   t12.to("",{
  //     ease:"none",
  //   scrollTrigger: {
  //     trigger: ".panel-ab2",
  //     scrub: true,
  //     pin: true,
  //   },
  //   height:0,
  // })

    /*
                        trigger: ".wrapperx",
              start: "top-=60% top",
              end: "+=100%",
              scrub: true,
              pin: true,
              pinSpacing:"+=100"
              */

    // gsap.set(".panel-ab", {
    //   zIndex: (i, target, targets) => targets.length - i,
    // });
  }, []);
  return (
    <div
      ref={(el) => {
        about = el;
      }}
      className="d-none d-md-block"
    >
      <div className="container-fluid about wrapperx">
      <div className="dabbaa">
      <div className="panel-ab2 xx sl-2">
          <h1 className="about-text">
          <span className="text-danger">I </span> <span >DO</span><span className="text-danger"> Back</span> End !{" "}
            {/* <SiMaterialdesignicons className="beat text-danger" /> */}
          </h1>
        </div>

          <div className="panel-ab3 xx sl-1">
          <h1 className="about-text">
          I <span className="text-danger">DO</span><span > Front</span> <span className="text-danger">End 🎨</span>{" "}
            {/* <SiWebpack className="beat bl" /> */}
          </h1>
        </div>
        

        <div className="panel-ab xx">
          <h1 className="about-text">
            I <span className="text-danger">DO</span>{" "}
            {/* <GiClockwork className="work-icons" /> */}
          </h1>
          </div>
          <div className="ics">
          <div className="ics__images "><img className="img-fluid" src={require('../images/mongodb.png')}/></div>
          <div className="ics__images "><img className="img-fluid" src={require('../images/express.png')}/></div>
          <div className="ics__images "><img className="img-fluid" src={require('../images/rjjjj.svg')}/></div>
          <div className="ics__images "><img className="img-fluid" src={require('../images/node.png')}/></div>
        </div>
        </div>
       

        {/* <div className="panel-ab sl-3">
          <h1 className="about-text">
            <span className="text-danger">UI </span>Design{" "}
            <CgIfDesign className="beat" />
          </h1>
        </div> */}
        {/* <div className="panel-ab sl-4">
          <h1 className="about-text">
            BACKEND <span className="text-danger">Dev</span>{" "}
            <SiKubernetes className="work-icons bl" />
          </h1>
        </div> */}
      </div>
    </div>
  );
}

export default About;
