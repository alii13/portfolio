import React,{useEffect,useRef,useState} from 'react'
import gsap,{Power3,Power4} from "gsap";


function Nav() {
    let topDistanc= useRef(null);
    // 
     console.log(topDistanc);
    //  const [width, setWidth] = React.useState(window.innerWidth);
    //  React.useEffect(() => {
    //     const handleWindowResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", handleWindowResize);
    //     return () => window.removeEventListener("resize", handleWindowResize);
    //   }, []);
    useEffect(()=>{
    
        const t5=gsap.timeline({delay:1.4});
        t5
        .to([".child-12"],{
            x:-100,
            duration:0.4,
        },0.4)
        .to([".child-13"],{
            x:-200,
            duration:0.4,
        },0.8)
        .to([".child-14"],{
            x:100
        },0.8)
        .to([".child-15"],{
            x:200
        },1.2)
    
        

    },[])

    return (
        <>
        <div className="nav d-none d-md-flex">
            <ul ref= {(el)=>{topDistanc=el}} className="nav-list">
                <li className="child-11 butt"><a href="#skills">Our Skills </a></li>
                <li className="child-12"><a href="#project">Projects </a></li>
                <li className="child-13"><a href="#home">Home </a></li>
                <li className="child-14"><a href="#aboutus">About Us </a></li>
                <li className="child-15"><a href="#contactus">Contact Us </a></li>

            </ul>
        
            
        </div>
            </>
    )
}

export default Nav
