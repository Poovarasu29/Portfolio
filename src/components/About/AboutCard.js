import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">POOVARASU K </span>
            from <span className="purple"> Dharmapuri, TamilNadu.</span>
            <br />
            I am  a Full stock developer.
            <br />
            I have completed Bsc (Botany) Govt arts and science college (2018), Coimbatore.   
            <br> 
            </br>
            I have completed MBA (HR) at Pee gee college of arts and science (2020),
            Dharmapuri.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  listening music
            </li>
            <li className="about-activity">
              <ImPointRight />  Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />  Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">POOVARASU K </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
