import React from "react";
import { Container } from "react-bootstrap";
import { AiFillHeart } from "react-icons/ai";
function Footer() {
  return (
    <footer>
      <Container>
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
