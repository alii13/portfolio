import React,{useEffect,useRef} from 'react'
import gsap,{Power3,Power4} from "gsap";

function Nav() {
    let topDistanc= useRef(null);
    // 
     console.log(topDistanc);
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
        <div className="nav d-none d-md-flex">
            <ul ref= {(el)=>{topDistanc=el}} className="nav-list">
                <li className="child-11 butt">Our Skills</li>
                <li className="child-12">Projects</li>
                <li className="child-13">Home</li>
                <li className="child-14">About Us</li>
                <li className="child-15">Contact Us</li>

            </ul>
        
            
        </div>
    )
}

export default Nav
