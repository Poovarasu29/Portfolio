import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/a.png";

import editor from "../../Assets/Projects/calci.png";
import chatify from "../../Assets/Projects/about.webp";
import suicide from "../../Assets/Projects/bmi.png";
import bitsOfCode from "../../Assets/Projects/swiggy.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=<b>"E-Commerence by using Furniture Products"</b>
              description="we believe your home should reflect your unique style and personality. That’s why we offer a wide selection of high-quality, affordable furniture designed to transform every room in your house. From cozy living room sets to elegant dining tables and modern bedroom pieces, our collection has something for everyone.
With a focus on quality craftsmanship and sustainable materials, we strive to deliver both style and comfort. Plus, with fast shipping and hassle-free returns, creating your dream home has never been easier."
              ghLink="https://fusta-three.vercel.app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=<b>"Swiggy"</b>
              description="At Swiggy, we’re dedicated to bringing your favorite meals from top restaurants right to your doorstep, fast and fresh. With a vast selection of local eateries and global cuisines, we make food delivery convenient and easy. Whether you're craving comfort food or trying something new, Swiggy delivers it all with just a few taps on your phone.

From early morning breakfasts to late-night cravings, we’re here 24/7 to satisfy your hunger, ensuring timely deliveries and exceptional service every time."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=<b>"Calculator"</b>
              description="	Created a general calculator, showcasing proficiency in precise calculations and intuitive interfaces.	Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=<b>"Age-Calculator"</b>
              description="Created a general Age calculator, showcasing proficiency in precise calculations and intuitive interfaces.Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=<b>"BMI-Calculator"</b>
              description="Created a general Age calculator, showcasing proficiency in precise calculations and intuitive interfaces.Designed and developed web pages using front-end (React, HTML, CSS, Bootstrap,   JavaScript) and back-end (Node.js) technologies."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
