import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Master of IT graduate with a major in Software Engineering from Charles Darwin University. Possess a solid foundation in software development, system architecture, and project management, complemented by hands-on experience in various programming languages and frameworks. Highly analytical and detail-oriented, with a passion for problem-solving and innovation. Seeking a position in an IT company where I can apply my technical skills, collaborate with a dynamic team, and contribute to cutting-edge projects.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
