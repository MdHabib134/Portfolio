import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/habib.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
            When I'm not deep in the world of coding or analyzing data, you'll likely find me on the soccer field, kicking up some dust with my local team. I'm a big fan of team sports, especially soccer, and I play every week with Social Soccer Darwin. It’s my way of staying active, having fun, and connecting with people from all walks of life.
            <br />
            Off the field, I’m a tech enthusiast always exploring the latest trends and innovations. I’m passionate about learning and constantly pushing myself to stay ahead in the ever-evolving world of technology. Whether it’s through sports or tech, I’m driven by a love for challenges and continuous growth.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img
  src={myImg}
  className="img-fluid"
  alt="avatar"
  style={{ width: '240px', height: '240px' }}
/>

            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MdHabib134"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Habib.sarker.20?mibextid=LQQJ4d"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/md-habib-sarker-850280151/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
