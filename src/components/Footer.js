import React from "react";
import { Container } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
import {FiInstagram} from 'react-icons/fi'
import {FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa'
function Footer() {
  return (
    <footer>
      <Container>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/shekh-aliul/"> <FaLinkedin className="sv" style={{color:"#0E76A8"}}/></a>
          <a href="https://github.com/alii13"> <FaGithub className="sv" style={{color:"#000"}}/></a>
          <a href="https://www.instagram.com/aliii___19/"><FiInstagram className="sv text-danger"/></a>
          <a href="https://www.facebook.com/pgluuu"> <FaFacebook className="sv"/></a>

        </div>
        <p className="text-muted">
          {" "}
          Made with{" "}
          <span className="text-danger">
            <AiFillHeart />
          </span>{" "}
          by Ali
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
