import React,{useState,useEffect} from "react";
import { FaRegFolder,FaRegFolderOpen } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Card, Button } from "react-bootstrap";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
function Cards(props) {
  //  console.log(props);
  gsap.registerPlugin(ScrollTrigger);
  const title = props.title;
  const description = props.description;
  const [iconParent,setIconParent]=useState(true);
  const [iconChild,setIconChild]=useState(false);
  //  console.log(title);
  // useEffect(()=>{

  // },[])
  const handleEnter=()=>{
    setIconParent(!iconParent);
    setIconChild(!iconChild);
  }
  const handleLeave=()=>{
    setIconParent(!iconParent);
    setIconChild(!iconChild);
  }
 
  return (
    <Card style={{ width: "18rem" }} className="project-card" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <header
        className="d-flex justify-content-end align-items-center"
        style={{ height: "50px" }}
      >
        <div className="left-header">
         {(iconParent)?(<FaRegFolder className="react-icons parent-icon" />):( <FaRegFolderOpen className="react-icons hover" />)} 
         
        </div>

        <div className="right-header d-flex justify-content-center  align-items-center">
          <a href={props.link} style={{color:"black"}}><AiFillGithub className="side-icon" /></a>{" "}
          <FiExternalLink className="side-icon" />
        </div>
      </header>

      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
       <a href={props.demo} ><Button variant="primary">See Demo</Button></a>
      </Card.Body>
      <footer className="p-2">
        <p className="m-0 p-0 main-heading">
          {" "}
          <span className="text-danger">{props.one }</span> |{" "}
          <span className="text-danger">{props.two}</span> | {" "}
          <span className="text-danger">{props.three}</span>
        </p>
      </footer>
    </Card>
  );
}

export default Cards;
