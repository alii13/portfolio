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
    t12.to(".panel-ab:not(:last-child)", {
      yPercent: -100,
      ease: "none",
      stagger: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapperx",
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    /*
                        trigger: ".wrapperx",
              start: "top-=60% top",
              end: "+=100%",
              scrub: true,
              pin: true,
              pinSpacing:"+=100"
              */

    gsap.set(".panel-ab", {
      zIndex: (i, target, targets) => targets.length - i,
    });
  }, []);
  return (
    <div
      ref={(el) => {
        about = el;
      }}
      className="d-none d-md-block"
    >
      <div className="container-fluid about wrapperx">
        <div className="panel-ab ">
          <h1 className="about-text">
            I <span className="text-danger">DO</span>{" "}
            <GiClockwork className="work-icons" />
          </h1>
        </div>
        <div className="panel-ab sl-1">
          <h1 className="about-text">
            <span className="text-danger">Web</span>Dev{" "}
            <SiWebpack className="beat bl" />
          </h1>
        </div>
        <div className="panel-ab sl-2">
          <h1 className="about-text">
            UI <span className="text-danger">Design</span>{" "}
            <SiMaterialdesignicons className="beat text-danger" />
          </h1>
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
