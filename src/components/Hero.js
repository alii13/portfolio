import React,{useRef,useEffect} from 'react'
import gsap,{Power3,Power4} from "gsap";
import {Container} from 'react-bootstrap'
import {FaReact} from 'react-icons/fa'
import GithubCorner from 'react-github-corner';
//import Nav from "./Nav"
import SplitTextJS from 'split-text-js';
function Hero() {
    let overlay =useRef(null);
    let title =useRef(null);
    let bigTitle=useRef(null)
    useEffect(()=>{
        const t1=gsap.timeline();
        t1
        .to([".child-1",".child-2",".child-3",".child-4",".child-5",".child-6"],{
            yPercent:-100,
            delay:0.4,
            duration:0.5,
            stagger:0.2,
            ease:Power3.easeInOut
        })
        .from(".hero",{
            backgroundPosition:"-100% 50%"
        },"-=1")
        .to(overlay,{
            yPercent:-120,
            duration:0.1
        })
        .from(title,{
            y:55,
            autoAlpha:0,
            ease:Power3.easeIn,
            duration:0.5

        },"-=.4")
        
       // console.log(overlay);
    
       //console.log(textWords)
  
        const t2=gsap.timeline();
        gsap.set(bigTitle, {perspective: 400,delay:1});
        const splittedText = new SplitTextJS(bigTitle);
        const textWords = splittedText.words;
        const textOriginal = splittedText.originalText;
      //  console.log(textWords)
        t2
        .from(textWords, {duration: 0.6,
            delay:1, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:"back", stagger: 0.07},"+=0.5")
            .to(".SplitTextJS-wrapper:nth-of-type(3)", {
                css:{
                color:"#dc3545"
            }
        },"-=0.3");
    
        // .to([".child-11"],{
        //     ease:Power4.easeIn,
        //     // scrollTrigger:{
        //     //     trigger:".hero",
        //     //     start:"bottom bottom",
        //     //     end:"bottom+=30% bottom",
        //     //     scrub:true,
        //     //     markers:true
        //     // },
           
        //     y:-550,
        //     rotate:-90,
        //     scale:(0.95),
        //     x:940
            
        // })

    },[])
    return (
        <div id="home">
            <div ref={(el)=>{overlay=el}} className="overlay">
                <div className="child-1 item"></div>
                <div className="child-2 item"></div>
                <div className="child-3 item"></div>
                <div className="child-4 item"></div>
                <div className="child-5 item"></div>
                <div className="child-6 item"></div>
            </div>
            
            <Container fluid className="hero p-0">
            <GithubCorner direction="right" href="https://github.com/username/repo" />
            
            <div className="wrapper">
            <div className="hero-text">
                <h1 ref={el=>{bigTitle=el}} className="hero-title">We are  <span className="text-danger x1">Freelancers</span></h1>
                <h1 ref={el=>{title=el}} className="hero-title2"> <span className="text-danger">We Build Things For</span> Web <FaReact className="hero-icon text-info"/></h1>
                {/*<hr className="hr"></hr>*/}
            </div>
            </div>
          {/* <div className="wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="black" fill-opacity="1" d="M0,96L60,128C120,160,240,224,360,256C480,288,600,288,720,256C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>

            </div>
    */}
           

            </Container>
       
        </div>
        

    )
}

export default Hero
