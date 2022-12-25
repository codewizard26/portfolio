import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nikhil Mishra </span>
            from <span className="purple"> Prayagraj, India.</span>
            <br />I am pursuing Bachelors in the field of Information & Technology
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Gyming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Web3 is the future"{" "}
          </p>
          <footer className="blockquote-footer">Nikhil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
