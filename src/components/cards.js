import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Card, Button } from "react-bootstrap";
function cards(props) {
  //  console.log(props);
  const title = props.title;
  const description = props.description;
  //  console.log(title);
  return (
    <Card style={{ width: "18rem" }}>
      <header
        className="d-flex justify-content-end align-items-center"
        style={{ height: "50px" }}
      >
        <div className="left-header">
          <FaRegFolderOpen className="react-icons" />
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

export default cards;
